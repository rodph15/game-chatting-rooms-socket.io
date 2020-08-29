const chatForm = document.getElementById('chat-form');
const chatMessage = document.getElementById('chat-messages');

const { username, room} = Qs.parse(location.search,{
    ignoreQueryPrefix:true
});

const socket = io();

socket.emit('joinRoom',{
    username, room
});

socket.on('message',message => {
    setChatMessage(message);

    chatMessage.scrollTop = chatMessage.scrollHeight;
});

socket.on('roomUsers', ({ room, users }) => {
    outputRoomName(room);
    outputUsers(users);
  });

chatForm.addEventListener('submit', e =>{
    e.preventDefault();

    const message = e.target.elements.msg.value;

    socket.emit('chatMessage', message);

    e.target.elements.msg.value = '';
    e.target.elements.msg.focus();
});

function setChatMessage(message){
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML = `<p class="meta">${message.username} <span>${message.time}</span></p>
    <p class="text">
        ${message.text}
    </p>`;

    document.getElementById('chat-messages').append(div);
}

// Add room name to DOM
function outputRoomName(room) {
    document.getElementById('room-name').innerText = room;
  }
  
  // Add users to DOM
  function outputUsers(users) {
    document.getElementById('users').innerHTML = `
      ${users.map(user => `<li>${user.username}</li>`).join('')}
    `;
  }