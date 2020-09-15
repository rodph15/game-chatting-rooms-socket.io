! function(e) {
    var t = {};

    function n(i) {
        if (t[i]) return t[i].exports;
        var l = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(l.exports, l, l.exports, n), l.l = !0, l.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var l in e) n.d(i, l, function(t) {
                return e[t]
            }.bind(null, l));
        return i
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = "XJR1")
}({
    "1kvd": function(e, t, n) {
        "use strict";
        var i, l;
        i = "undefined" != typeof window ? window : this, l = function(e, t) {
            const n = {
                name: "dialog",
                add: function(e) {
                    const t = e.context;
                    t.dialog = {
                        kind: "",
                        updateModal: !1,
                        _closeSignal: !1
                    };
                    let n = e.util.createElement("DIV");
                    n.className = "se-dialog sun-editor-common";
                    let i = e.util.createElement("DIV");
                    i.className = "se-dialog-back", i.style.display = "none";
                    let l = e.util.createElement("DIV");
                    l.className = "se-dialog-inner", l.style.display = "none", n.appendChild(i), n.appendChild(l), t.dialog.modalArea = n, t.dialog.back = i, t.dialog.modal = l, t.dialog.modal.addEventListener("mousedown", this._onMouseDown_dialog.bind(e)), t.dialog.modal.addEventListener("click", this._onClick_dialog.bind(e)), t.element.relative.appendChild(n), n = null, i = null, l = null
                },
                _onMouseDown_dialog: function(e) {
                    /se-dialog-inner/.test(e.target.className) ? this.context.dialog._closeSignal = !0 : this.context.dialog._closeSignal = !1
                },
                _onClick_dialog: function(e) {
                    e.stopPropagation(), (/close/.test(e.target.getAttribute("data-command")) || this.context.dialog._closeSignal) && this.plugins.dialog.close.call(this)
                },
                open: function(e, t) {
                    if (this.modalForm) return !1;
                    this.plugins.dialog._bindClose && (this._d.removeEventListener("keydown", this.plugins.dialog._bindClose), this.plugins.dialog._bindClose = null), this.plugins.dialog._bindClose = function(e) {
                        /27/.test(e.keyCode) && this.plugins.dialog.close.call(this)
                    }.bind(this), this._d.addEventListener("keydown", this.plugins.dialog._bindClose), this.context.dialog.updateModal = t, "full" === this.context.option.popupDisplay ? this.context.dialog.modalArea.style.position = "fixed" : this.context.dialog.modalArea.style.position = "absolute", this.context.dialog.kind = e, this.modalForm = this.context[e].modal;
                    const n = this.context[e].focusElement;
                    "function" == typeof this.plugins[e].on && this.plugins[e].on.call(this, t), this.context.dialog.modalArea.style.display = "block", this.context.dialog.back.style.display = "block", this.context.dialog.modal.style.display = "block", this.modalForm.style.display = "block", n && n.focus()
                },
                _bindClose: null,
                close: function() {
                    this.plugins.dialog._bindClose && (this._d.removeEventListener("keydown", this.plugins.dialog._bindClose), this.plugins.dialog._bindClose = null);
                    const e = this.context.dialog.kind;
                    this.modalForm.style.display = "none", this.context.dialog.back.style.display = "none", this.context.dialog.modalArea.style.display = "none", this.context.dialog.updateModal = !1, "function" == typeof this.plugins[e].init && this.plugins[e].init.call(this), this.context.dialog.kind = "", this.modalForm = null, this.focus()
                }
            };
            return void 0 === t && (e.SUNEDITOR_MODULES || Object.defineProperty(e, "SUNEDITOR_MODULES", {
                enumerable: !0,
                writable: !1,
                configurable: !1,
                value: {}
            }), Object.defineProperty(e.SUNEDITOR_MODULES, "dialog", {
                enumerable: !0,
                writable: !1,
                configurable: !1,
                value: n
            })), n
        }, "object" == typeof e.exports ? e.exports = i.document ? l(i, !0) : function(e) {
            if (!e.document) throw new Error("SUNEDITOR_MODULES a window with a document");
            return l(e)
        } : l(i)
    },
    "3FqI": function(e, t, n) {},
    JhlZ: function(e, t, n) {
        "use strict";
        var i, l;
        i = "undefined" != typeof window ? window : this, l = function(e, t) {
            const n = {
                name: "fileBrowser",
                _xmlHttp: null,
                _loading: null,
                add: function(e) {
                    const t = e.context;
                    t.fileBrowser = {
                        _closeSignal: !1,
                        area: null,
                        header: null,
                        tagArea: null,
                        body: null,
                        list: null,
                        tagElements: null,
                        items: [],
                        selectedTags: [],
                        selectorHandler: null,
                        contextPlugin: "",
                        columnSize: 4
                    };
                    let n = e.util.createElement("DIV");
                    n.className = "se-file-browser sun-editor-common";
                    let i = e.util.createElement("DIV");
                    i.className = "se-file-browser-back";
                    let l = e.util.createElement("DIV");
                    l.className = "se-file-browser-inner", l.innerHTML = this.set_browser(e), n.appendChild(i), n.appendChild(l), this._loading = n.querySelector(".se-loading-box"), t.fileBrowser.area = n, t.fileBrowser.header = l.querySelector(".se-file-browser-header"), t.fileBrowser.titleArea = l.querySelector(".se-file-browser-title"), t.fileBrowser.tagArea = l.querySelector(".se-file-browser-tags"), t.fileBrowser.body = l.querySelector(".se-file-browser-body"), t.fileBrowser.list = l.querySelector(".se-file-browser-list"), t.fileBrowser.tagArea.addEventListener("click", this.onClickTag.bind(e)), t.fileBrowser.list.addEventListener("click", this.onClickFile.bind(e)), l.addEventListener("mousedown", this._onMouseDown_browser.bind(e)), l.addEventListener("click", this._onClick_browser.bind(e)), t.element.relative.appendChild(n), n = null, i = null, l = null
                },
                set_browser: function(e) {
                    return '<div class="se-file-browser-content"><div class="se-file-browser-header"><button type="button" data-command="close" class="se-btn se-file-browser-close" class="close" aria-label="Close" title="' + e.lang.dialogBox.close + '">' + e.icons.cancel + '</button><span class="se-file-browser-title"></span><div class="se-file-browser-tags"></div></div><div class="se-file-browser-body"><div class="se-loading-box sun-editor-common"><div class="se-loading-effect"></div></div><div class="se-file-browser-list"></div></div></div>'
                },
                _onMouseDown_browser: function(e) {
                    /se-file-browser-inner/.test(e.target.className) ? this.context.fileBrowser._closeSignal = !0 : this.context.fileBrowser._closeSignal = !1
                },
                _onClick_browser: function(e) {
                    e.stopPropagation(), (/close/.test(e.target.getAttribute("data-command")) || this.context.fileBrowser._closeSignal) && this.plugins.fileBrowser.close.call(this)
                },
                open: function(e, t) {
                    this.plugins.fileBrowser._bindClose && (this._d.removeEventListener("keydown", this.plugins.fileBrowser._bindClose), this.plugins.fileBrowser._bindClose = null), this.plugins.fileBrowser._bindClose = function(e) {
                        /27/.test(e.keyCode) && this.plugins.fileBrowser.close.call(this)
                    }.bind(this), this._d.addEventListener("keydown", this.plugins.fileBrowser._bindClose);
                    const n = this.context.fileBrowser;
                    n.contextPlugin = e, n.selectorHandler = t;
                    const i = this.context[e],
                        l = i.listClass;
                    this.util.hasClass(n.list, l) || (n.list.className = "se-file-browser-list " + l), "full" === this.context.option.popupDisplay ? n.area.style.position = "fixed" : n.area.style.position = "absolute", n.titleArea.textContent = i.title, n.area.style.display = "block", this.plugins.fileBrowser._drawFileList.call(this, this.context[e].url)
                },
                _bindClose: null,
                close: function() {
                    const e = this.plugins.fileBrowser;
                    e._xmlHttp && e._xmlHttp.abort(), e._bindClose && (this._d.removeEventListener("keydown", e._bindClose), e._bindClose = null);
                    const t = this.context.fileBrowser;
                    t.area.style.display = "none", t.selectorHandler = null, t.selectedTags = [], t.items = [], t.list.innerHTML = t.tagArea.innerHTML = t.titleArea.textContent = "", "function" == typeof this.plugins[t.contextPlugin].init && this.plugins[t.contextPlugin].init.call(this), t.contextPlugin = ""
                },
                showBrowserLoading: function() {
                    this._loading.style.display = "block"
                },
                closeBrowserLoading: function() {
                    this._loading.style.display = "none"
                },
                _drawFileList: function(e) {
                    const t = this.plugins.fileBrowser,
                        n = t._xmlHttp = this.util.getXMLHttpRequest();
                    n.onreadystatechange = t._callBackGet.bind(this, n), n.open("get", e, !0), n.send(null), this.plugins.fileBrowser.showBrowserLoading()
                },
                _callBackGet: function(e) {
                    if (4 === e.readyState)
                        if (this.plugins.fileBrowser._xmlHttp = null, 200 === e.status) try {
                            this.plugins.fileBrowser._drawListItem.call(this, JSON.parse(e.responseText).result, !0)
                        } catch (e) {
                            throw Error('[SUNEDITOR.fileBrowser.drawList.fail] cause : "' + e.message + '"')
                        } finally {
                            this.plugins.fileBrowser.closeBrowserLoading(), this.context.fileBrowser.body.style.maxHeight = this._w.innerHeight - this.context.fileBrowser.header.offsetHeight - 50 + "px"
                        } else if (this.plugins.fileBrowser.closeBrowserLoading(), 0 !== e.status) {
                            const t = e.responseText ? JSON.parse(e.responseText) : e,
                                n = "[SUNEDITOR.fileBrowser.get.serverException] status: " + e.status + ", response: " + (t.errorMessage || e.responseText);
                            throw Error(n)
                        }
                },
                _drawListItem: function(e, t) {
                    const n = this.context.fileBrowser,
                        i = this.context[n.contextPlugin],
                        l = [],
                        o = e.length,
                        s = i.columnSize || n.columnSize,
                        a = s <= 1 ? 1 : Math.round(o / s) || 1,
                        r = i.itemTemplateHandler;
                    let c = "",
                        d = '<div class="se-file-item-column">',
                        u = 1;
                    for (let n, i, h = 0; h < o; h++)
                        if (n = e[h], i = n.tag ? "string" == typeof n.tag ? n.tag.split(",") : n.tag : [], i = n.tag = i.map((function(e) {
                                return e.trim()
                            })), d += r(n), (h + 1) % a == 0 && u < s && h + 1 < o && (u++, d += '</div><div class="se-file-item-column">'), t && i.length > 0)
                            for (let e, t = 0, n = i.length; t < n; t++) e = i[t], e && -1 === l.indexOf(e) && (l.push(e), c += '<a title="' + e + '">' + e + "</a>");
                    d += "</div>", n.list.innerHTML = d, t && (n.items = e, n.tagArea.innerHTML = c, n.tagElements = n.tagArea.querySelectorAll("A"))
                },
                onClickTag: function(e) {
                    const t = e.target;
                    if (!this.util.isAnchor(t)) return;
                    const n = t.textContent,
                        i = this.plugins.fileBrowser,
                        l = this.context.fileBrowser,
                        o = l.tagArea.querySelector('a[title="' + n + '"]'),
                        s = l.selectedTags,
                        a = s.indexOf(n);
                    a > -1 ? (s.splice(a, 1), this.util.removeClass(o, "on")) : (s.push(n), this.util.addClass(o, "on")), i._drawListItem.call(this, 0 === s.length ? l.items : l.items.filter((function(e) {
                        return e.tag.some((function(e) {
                            return s.indexOf(e) > -1
                        }))
                    })), !1)
                },
                onClickFile: function(e) {
                    e.preventDefault(), e.stopPropagation();
                    const t = this.context.fileBrowser,
                        n = t.list;
                    let i = e.target,
                        l = null;
                    if (i === n) return;
                    for (; n !== i.parentNode && (l = i.getAttribute("data-command"), !l);) i = i.parentNode;
                    if (!l) return;
                    const o = t.selectorHandler || this.context[t.contextPlugin].selectorHandler;
                    this.plugins.fileBrowser.close.call(this), o(i)
                }
            };
            return void 0 === t && (e.SUNEDITOR_MODULES || Object.defineProperty(e, "SUNEDITOR_MODULES", {
                enumerable: !0,
                writable: !1,
                configurable: !1,
                value: {}
            }), Object.defineProperty(e.SUNEDITOR_MODULES, "fileBrowser", {
                enumerable: !0,
                writable: !1,
                configurable: !1,
                value: n
            })), n
        }, "object" == typeof e.exports ? e.exports = i.document ? l(i, !0) : function(e) {
            if (!e.document) throw new Error("SUNEDITOR_MODULES a window with a document");
            return l(e)
        } : l(i)
    },
    P6u4: function(e, t, n) {
        "use strict";
        var i, l;
        i = "undefined" != typeof window ? window : this, l = function(e, t) {
            const n = {
                code: "en",
                toolbar: {
                    default: "Default",
                    save: "Save",
                    font: "Font",
                    formats: "Formats",
                    fontSize: "Size",
                    bold: "Bold",
                    underline: "Underline",
                    italic: "Italic",
                    strike: "Strike",
                    subscript: "Subscript",
                    superscript: "Superscript",
                    removeFormat: "Remove Format",
                    fontColor: "Font Color",
                    hiliteColor: "Highlight Color",
                    indent: "Indent",
                    outdent: "Outdent",
                    align: "Align",
                    alignLeft: "Align left",
                    alignRight: "Align right",
                    alignCenter: "Align center",
                    alignJustify: "Align justify",
                    list: "List",
                    orderList: "Ordered list",
                    unorderList: "Unordered list",
                    horizontalRule: "Horizontal line",
                    hr_solid: "Solid",
                    hr_dotted: "Dotted",
                    hr_dashed: "Dashed",
                    table: "Table",
                    link: "Link",
                    math: "Math",
                    image: "Image",
                    video: "Video",
                    audio: "Audio",
                    fullScreen: "Full screen",
                    showBlocks: "Show blocks",
                    codeView: "Code view",
                    undo: "Undo",
                    redo: "Redo",
                    preview: "Preview",
                    print: "print",
                    tag_p: "Paragraph",
                    tag_div: "Normal (DIV)",
                    tag_h: "Header",
                    tag_blockquote: "Quote",
                    tag_pre: "Code",
                    template: "Template",
                    lineHeight: "Line height",
                    paragraphStyle: "Paragraph style",
                    textStyle: "Text style",
                    imageGallery: "Image gallery"
                },
                dialogBox: {
                    linkBox: {
                        title: "Insert Link",
                        url: "URL to link",
                        text: "Text to display",
                        newWindowCheck: "Open in new window"
                    },
                    mathBox: {
                        title: "Math",
                        inputLabel: "Mathematical Notation",
                        fontSizeLabel: "Font Size",
                        previewLabel: "Preview"
                    },
                    imageBox: {
                        title: "Insert image",
                        file: "Select from files",
                        url: "Image URL",
                        altText: "Alternative text"
                    },
                    videoBox: {
                        title: "Insert Video",
                        file: "Select from files",
                        url: "Media embed URL, YouTube/Vimeo"
                    },
                    audioBox: {
                        title: "Insert Audio",
                        file: "Select from files",
                        url: "Audio URL"
                    },
                    browser: {
                        tags: "Tags",
                        search: "Search"
                    },
                    caption: "Insert description",
                    close: "Close",
                    submitButton: "Submit",
                    revertButton: "Revert",
                    proportion: "Constrain proportions",
                    basic: "Basic",
                    left: "Left",
                    right: "Right",
                    center: "Center",
                    width: "Width",
                    height: "Height",
                    size: "Size",
                    ratio: "Ratio"
                },
                controller: {
                    edit: "Edit",
                    unlink: "Unlink",
                    remove: "Remove",
                    insertRowAbove: "Insert row above",
                    insertRowBelow: "Insert row below",
                    deleteRow: "Delete row",
                    insertColumnBefore: "Insert column before",
                    insertColumnAfter: "Insert column after",
                    deleteColumn: "Delete column",
                    fixedColumnWidth: "Fixed column width",
                    resize100: "Resize 100%",
                    resize75: "Resize 75%",
                    resize50: "Resize 50%",
                    resize25: "Resize 25%",
                    autoSize: "Auto size",
                    mirrorHorizontal: "Mirror, Horizontal",
                    mirrorVertical: "Mirror, Vertical",
                    rotateLeft: "Rotate left",
                    rotateRight: "Rotate right",
                    maxSize: "Max size",
                    minSize: "Min size",
                    tableHeader: "Table header",
                    mergeCells: "Merge cells",
                    splitCells: "Split Cells",
                    HorizontalSplit: "Horizontal split",
                    VerticalSplit: "Vertical split"
                },
                menu: {
                    spaced: "Spaced",
                    bordered: "Bordered",
                    neon: "Neon",
                    translucent: "Translucent",
                    shadow: "Shadow",
                    code: "Code"
                }
            };
            return void 0 === t && (e.SUNEDITOR_LANG || Object.defineProperty(e, "SUNEDITOR_LANG", {
                enumerable: !0,
                writable: !1,
                configurable: !1,
                value: {}
            }), Object.defineProperty(e.SUNEDITOR_LANG, "en", {
                enumerable: !0,
                writable: !0,
                configurable: !0,
                value: n
            })), n
        }, "object" == typeof e.exports ? e.exports = i.document ? l(i, !0) : function(e) {
            if (!e.document) throw new Error("SUNEDITOR_LANG a window with a document");
            return l(e)
        } : l(i)
    },
    WUQj: function(e, t, n) {},
    XJR1: function(e, t, n) {
        "use strict";
        n.r(t);
        n("3FqI"), n("WUQj");
        var i = {
                name: "colorPicker",
                add: function(e) {
                    const t = e.context;
                    t.colorPicker = {
                        colorListHTML: "",
                        _colorInput: "",
                        _defaultColor: "#000",
                        _styleProperty: "color",
                        _currentColor: "",
                        _colorList: []
                    };
                    let n = this.createColorList(e, this._makeColorList);
                    t.colorPicker.colorListHTML = n, n = null
                },
                createColorList: function(e, t) {
                    const n = e.context.option,
                        i = e.lang,
                        l = n.colorList && 0 !== n.colorList.length ? n.colorList : ["#ff0000", "#ff5e00", "#ffe400", "#abf200", "#00d8ff", "#0055ff", "#6600ff", "#ff00dd", "#000000", "#ffd8d8", "#fae0d4", "#faf4c0", "#e4f7ba", "#d4f4fa", "#d9e5ff", "#e8d9ff", "#ffd9fa", "#f1f1f1", "#ffa7a7", "#ffc19e", "#faed7d", "#cef279", "#b2ebf4", "#b2ccff", "#d1b2ff", "#ffb2f5", "#bdbdbd", "#f15f5f", "#f29661", "#e5d85c", "#bce55c", "#5cd1e5", "#6699ff", "#a366ff", "#f261df", "#8c8c8c", "#980000", "#993800", "#998a00", "#6b9900", "#008299", "#003399", "#3d0099", "#990085", "#353535", "#670000", "#662500", "#665c00", "#476600", "#005766", "#002266", "#290066", "#660058", "#222222"];
                    let o = [],
                        s = '<div class="se-list-inner">';
                    for (let e, n = 0, i = l.length; n < i; n++) e = l[n], e && ("string" == typeof e && (o.push(e), n < i - 1) || (o.length > 0 && (s += '<div class="se-selector-color">' + t(o) + "</div>", o = []), "object" == typeof e && (s += '<div class="se-selector-color">' + t(e) + "</div>")));
                    return s += '<form class="se-submenu-form-group"><input type="text" maxlength="9" class="_se_color_picker_input se-color-input"/><button type="submit" class="se-btn-primary _se_color_picker_submit" title="' + i.dialogBox.submitButton + '">' + e.icons.checked + '</button><button type="button" class="se-btn _se_color_picker_remove" title="' + i.toolbar.removeFormat + '">' + e.icons.erase + "</button></form></div>", s
                },
                _makeColorList: function(e) {
                    let t = "";
                    t += '<ul class="se-color-pallet">';
                    for (let n, i = 0, l = e.length; i < l; i++) n = e[i], "string" == typeof n && (t += '<li><button type="button" data-value="' + n + '" title="' + n + '" style="background-color:' + n + ';"></button></li>');
                    return t += "</ul>", t
                },
                init: function(e, t) {
                    const n = this.plugins.colorPicker;
                    let i = t || (n.getColorInNode.call(this, e) || this.context.colorPicker._defaultColor);
                    i = n.isHexColor(i) ? i : n.rgb2hex(i) || i;
                    const l = this.context.colorPicker._colorList;
                    if (l)
                        for (let e = 0, t = l.length; e < t; e++) i.toLowerCase() === l[e].getAttribute("data-value").toLowerCase() ? this.util.addClass(l[e], "active") : this.util.removeClass(l[e], "active");
                    n.setInputText.call(this, n.colorName2hex.call(this, i))
                },
                setCurrentColor: function(e) {
                    this.context.colorPicker._currentColor = e, this.context.colorPicker._colorInput.style.borderColor = e
                },
                setInputText: function(e) {
                    e = /^#/.test(e) ? e : "#" + e, this.context.colorPicker._colorInput.value = e, this.plugins.colorPicker.setCurrentColor.call(this, e)
                },
                getColorInNode: function(e) {
                    let t = "";
                    const n = this.context.colorPicker._styleProperty;
                    for (; e && !this.util.isWysiwygDiv(e) && 0 === t.length;) 1 === e.nodeType && e.style[n] && (t = e.style[n]), e = e.parentNode;
                    return t
                },
                isHexColor: function(e) {
                    return /^#[0-9a-f]{3}(?:[0-9a-f]{3})?$/i.test(e)
                },
                rgb2hex: function(e) {
                    const t = e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
                    return t && 4 === t.length ? "#" + ("0" + parseInt(t[1], 10).toString(16)).slice(-2) + ("0" + parseInt(t[2], 10).toString(16)).slice(-2) + ("0" + parseInt(t[3], 10).toString(16)).slice(-2) : ""
                },
                colorName2hex: function(e) {
                    if (/^#/.test(e)) return e;
                    var t = this.util.createElement("div");
                    t.style.display = "none", t.style.color = e;
                    var n = this._w.getComputedStyle(this._d.body.appendChild(t)).color.match(/\d+/g).map((function(e) {
                        return parseInt(e, 10)
                    }));
                    return this.util.removeItem(t), n.length >= 3 && "#" + ((1 << 24) + (n[0] << 16) + (n[1] << 8) + n[2]).toString(16).substr(1)
                }
            },
            l = {
                name: "fontColor",
                display: "submenu",
                add: function(e, t) {
                    e.addModule([i]);
                    const n = e.context;
                    n.fontColor = {
                        previewEl: null,
                        colorInput: null,
                        colorList: null
                    };
                    let l = this.setSubmenu.call(e);
                    n.fontColor.colorInput = l.querySelector("._se_color_picker_input"), n.fontColor.colorInput.addEventListener("keyup", this.onChangeInput.bind(e)), l.querySelector("._se_color_picker_submit").addEventListener("click", this.submit.bind(e)), l.querySelector("._se_color_picker_remove").addEventListener("click", this.remove.bind(e)), l.addEventListener("click", this.pickup.bind(e)), n.fontColor.colorList = l.querySelectorAll("li button"), e.initMenuTarget(this.name, t, l), l = null
                },
                setSubmenu: function() {
                    const e = this.context.colorPicker.colorListHTML,
                        t = this.util.createElement("DIV");
                    return t.className = "se-submenu se-list-layer", t.innerHTML = e, t
                },
                on: function() {
                    const e = this.context.colorPicker,
                        t = this.context.fontColor;
                    e._colorInput = t.colorInput, e._defaultColor = "#333333", e._styleProperty = "color", e._colorList = t.colorList, this.plugins.colorPicker.init.call(this, this.getSelectionNode(), null)
                },
                onChangeInput: function(e) {
                    this.plugins.colorPicker.setCurrentColor.call(this, e.target.value)
                },
                submit: function() {
                    this.plugins.fontColor.applyColor.call(this, this.context.colorPicker._currentColor)
                },
                pickup: function(e) {
                    e.preventDefault(), e.stopPropagation(), this.plugins.fontColor.applyColor.call(this, e.target.getAttribute("data-value"))
                },
                remove: function() {
                    this.nodeChange(null, ["color"], ["span"], !0), this.submenuOff()
                },
                applyColor: function(e) {
                    if (!e) return;
                    const t = this.util.createElement("SPAN");
                    t.style.color = e, this.nodeChange(t, ["color"], null, null), this.submenuOff()
                }
            },
            o = {
                name: "hiliteColor",
                display: "submenu",
                add: function(e, t) {
                    e.addModule([i]);
                    const n = e.context;
                    n.hiliteColor = {
                        previewEl: null,
                        colorInput: null,
                        colorList: null
                    };
                    let l = this.setSubmenu.call(e);
                    n.hiliteColor.colorInput = l.querySelector("._se_color_picker_input"), n.hiliteColor.colorInput.addEventListener("keyup", this.onChangeInput.bind(e)), l.querySelector("._se_color_picker_submit").addEventListener("click", this.submit.bind(e)), l.querySelector("._se_color_picker_remove").addEventListener("click", this.remove.bind(e)), l.addEventListener("click", this.pickup.bind(e)), n.hiliteColor.colorList = l.querySelectorAll("li button"), e.initMenuTarget(this.name, t, l), l = null
                },
                setSubmenu: function() {
                    const e = this.context.colorPicker.colorListHTML,
                        t = this.util.createElement("DIV");
                    return t.className = "se-submenu se-list-layer", t.innerHTML = e, t
                },
                on: function() {
                    const e = this.context.colorPicker,
                        t = this.context.hiliteColor;
                    e._colorInput = t.colorInput, e._defaultColor = "#FFFFFF", e._styleProperty = "backgroundColor", e._colorList = t.colorList, this.plugins.colorPicker.init.call(this, this.getSelectionNode(), null)
                },
                onChangeInput: function(e) {
                    this.plugins.colorPicker.setCurrentColor.call(this, e.target.value)
                },
                submit: function() {
                    this.plugins.hiliteColor.applyColor.call(this, this.context.colorPicker._currentColor)
                },
                pickup: function(e) {
                    e.preventDefault(), e.stopPropagation(), this.plugins.hiliteColor.applyColor.call(this, e.target.getAttribute("data-value"))
                },
                remove: function() {
                    this.nodeChange(null, ["background-color"], ["span"], !0), this.submenuOff()
                },
                applyColor: function(e) {
                    if (!e) return;
                    const t = this.util.createElement("SPAN");
                    t.style.backgroundColor = e, this.nodeChange(t, ["background-color"], null, null), this.submenuOff()
                }
            },
            s = {
                name: "template",
                display: "submenu",
                add: function(e, t) {
                    e.context.template = {};
                    let n = this.setSubmenu.call(e);
                    n.querySelector("ul").addEventListener("click", this.pickup.bind(e)), e.initMenuTarget(this.name, t, n), n = null
                },
                setSubmenu: function() {
                    const e = this.context.option.templates;
                    if (!e || 0 === e.length) throw Error('[SUNEDITOR.plugins.template.fail] To use the "template" plugin, please define the "templates" option.');
                    const t = this.util.createElement("DIV");
                    t.className = "se-list-layer";
                    let n = '<div class="se-submenu se-list-inner"><ul class="se-list-basic">';
                    for (let t, i = 0, l = e.length; i < l; i++) t = e[i], n += '<li><button type="button" class="se-btn-list" data-value="' + i + '" title="' + t.name + '">' + t.name + "</button></li>";
                    return n += "</ul></div>", t.innerHTML = n, t
                },
                pickup: function(e) {
                    if (!/^BUTTON$/i.test(e.target.tagName)) return !1;
                    e.preventDefault(), e.stopPropagation();
                    const t = this.context.option.templates[e.target.getAttribute("data-value")];
                    if (!t.html) throw this.submenuOff(), Error('[SUNEDITOR.template.fail] cause : "templates[i].html not found"');
                    this.setContents(t.html), this.submenuOff()
                }
            },
            a = n("1kvd"),
            r = n.n(a),
            c = {
                name: "link",
                display: "dialog",
                add: function(e) {
                    e.addModule([r.a]);
                    const t = e.context;
                    t.link = {
                        focusElement: null,
                        linkNewWindowCheck: null,
                        linkAnchorText: null,
                        _linkAnchor: null,
                        _linkValue: ""
                    };
                    let n = this.setDialog.call(e);
                    t.link.modal = n, t.link.focusElement = n.querySelector("._se_link_url"), t.link.linkAnchorText = n.querySelector("._se_link_text"), t.link.linkNewWindowCheck = n.querySelector("._se_link_check"), t.link.preview = n.querySelector(".se-link-preview");
                    let i = this.setController_LinkButton.call(e);
                    t.link.linkController = i, t.link._linkAnchor = null, i.addEventListener("mousedown", e.eventStop), n.querySelector(".se-btn-primary").addEventListener("click", this.submit.bind(e)), i.addEventListener("click", this.onClick_linkController.bind(e)), t.link.focusElement.addEventListener("input", this._onLinkPreview.bind(t.link.preview, t.link, t.options.linkProtocol)), t.dialog.modal.appendChild(n), t.element.relative.appendChild(i), n = null, i = null
                },
                setDialog: function() {
                    const e = this.lang,
                        t = this.util.createElement("DIV");
                    return t.className = "se-dialog-content", t.style.display = "none", t.innerHTML = '<form class="editor_link"><div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" aria-label="Close" title="' + e.dialogBox.close + '">' + this.icons.cancel + '</button><span class="se-modal-title">' + e.dialogBox.linkBox.title + '</span></div><div class="se-dialog-body"><div class="se-dialog-form"><label>' + e.dialogBox.linkBox.url + '</label><input class="se-input-form _se_link_url" type="text" /><pre class="se-link-preview"></pre></div><div class="se-dialog-form"><label>' + e.dialogBox.linkBox.text + '</label><input class="se-input-form _se_link_text" type="text" /></div><div class="se-dialog-form-footer"><label><input type="checkbox" class="se-dialog-btn-check _se_link_check" />&nbsp;' + e.dialogBox.linkBox.newWindowCheck + '</label></div></div><div class="se-dialog-footer"><button type="submit" class="se-btn-primary" title="' + e.dialogBox.submitButton + '"><span>' + e.dialogBox.submitButton + "</span></button></div></form>", t
                },
                setController_LinkButton: function() {
                    const e = this.lang,
                        t = this.icons,
                        n = this.util.createElement("DIV");
                    return n.className = "se-controller se-controller-link", n.innerHTML = '<div class="se-arrow se-arrow-up"></div><div class="link-content"><span><a target="_blank" href=""></a>&nbsp;</span><div class="se-btn-group"><button type="button" data-command="update" tabindex="-1" class="se-btn se-tooltip">' + t.edit + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + e.controller.edit + '</span></span></button><button type="button" data-command="unlink" tabindex="-1" class="se-btn se-tooltip">' + t.unlink + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + e.controller.unlink + '</span></span></button><button type="button" data-command="delete" tabindex="-1" class="se-btn se-tooltip">' + t.delete + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + e.controller.remove + "</span></span></button></div></div>", n
                },
                open: function() {
                    this.plugins.dialog.open.call(this, "link", "link" === this.currentControllerName)
                },
                _onLinkPreview: function(e, t, n) {
                    const i = n.target.value.trim();
                    e._linkValue = this.textContent = i ? t && -1 === i.indexOf("://") && 0 !== i.indexOf("#") ? t + i : -1 === i.indexOf("://") ? "/" + i : i : ""
                },
                submit: function(e) {
                    this.showLoading(), e.preventDefault(), e.stopPropagation();
                    const t = function() {
                        const e = this.context.link;
                        if (0 === e._linkValue.length) return !1;
                        const t = e._linkValue,
                            n = e.linkAnchorText,
                            i = 0 === n.value.length ? t : n.value;
                        if (this.context.dialog.updateModal) {
                            e._linkAnchor.href = t, e._linkAnchor.textContent = i, e._linkAnchor.target = e.linkNewWindowCheck.checked ? "_blank" : "";
                            const n = e._linkAnchor.childNodes[0];
                            this.setRange(n, 0, n, n.textContent.length)
                        } else {
                            const n = this.util.createElement("A");
                            n.href = t, n.textContent = i, n.target = e.linkNewWindowCheck.checked ? "_blank" : "";
                            const l = this.getSelectedElements();
                            if (l.length > 1) {
                                const e = this.util.createElement(l[0].nodeName);
                                if (e.appendChild(n), !this.insertNode(e, null, !0)) return
                            } else if (!this.insertNode(n, null, !0)) return;
                            this.setRange(n.childNodes[0], 0, n.childNodes[0], n.textContent.length)
                        }
                        e._linkValue = e.preview.textContent = e.focusElement.value = e.linkAnchorText.value = ""
                    }.bind(this);
                    try {
                        t()
                    } finally {
                        this.plugins.dialog.close.call(this), this.closeLoading(), this.history.push(!1)
                    }
                    return !1
                },
                active: function(e) {
                    if (e) {
                        if (this.util.isAnchor(e) && null === e.getAttribute("data-image-link")) return this.controllerArray.indexOf(this.context.link.linkController) < 0 && this.plugins.link.call_controller.call(this, e), !0
                    } else this.controllerArray.indexOf(this.context.link.linkController) > -1 && this.controllersOff();
                    return !1
                },
                on: function(e) {
                    const t = this.context.link;
                    e ? t._linkAnchor && (this.context.dialog.updateModal = !0, t._linkValue = t.preview.textContent = t.focusElement.value = t._linkAnchor.href, t.linkAnchorText.value = t._linkAnchor.textContent, t.linkNewWindowCheck.checked = !!/_blank/i.test(t._linkAnchor.target)) : (this.plugins.link.init.call(this), t.linkAnchorText.value = this.getSelection().toString())
                },
                call_controller: function(e) {
                    this.editLink = this.context.link._linkAnchor = e;
                    const t = this.context.link.linkController,
                        n = t.querySelector("a");
                    n.href = e.href, n.title = e.textContent, n.textContent = e.textContent;
                    const i = this.util.getOffset(e, this.context.element.wysiwygFrame);
                    t.style.top = i.top + e.offsetHeight + 10 + "px", t.style.left = i.left - this.context.element.wysiwygFrame.scrollLeft + "px", t.style.display = "block";
                    const l = this.context.element.wysiwygFrame.offsetWidth - (t.offsetLeft + t.offsetWidth);
                    l < 0 ? (t.style.left = t.offsetLeft + l + "px", t.firstElementChild.style.left = 20 - l + "px") : t.firstElementChild.style.left = "20px", this.controllersOn(t, e, "link")
                },
                onClick_linkController: function(e) {
                    e.stopPropagation();
                    const t = e.target.getAttribute("data-command") || e.target.parentNode.getAttribute("data-command");
                    if (t) {
                        if (e.preventDefault(), /update/.test(t)) {
                            const e = this.context.link;
                            e._linkValue = e.preview.textContent = e.focusElement.value = e._linkAnchor.href, e.linkAnchorText.value = e._linkAnchor.textContent, e.linkNewWindowCheck.checked = !!/_blank/i.test(e._linkAnchor.target), this.plugins.dialog.open.call(this, "link", !0)
                        } else if (/unlink/.test(t)) {
                            const e = this.util.getChildElement(this.context.link._linkAnchor, (function(e) {
                                    return 0 === e.childNodes.length || 3 === e.nodeType
                                }), !1),
                                t = this.util.getChildElement(this.context.link._linkAnchor, (function(e) {
                                    return 0 === e.childNodes.length || 3 === e.nodeType
                                }), !0);
                            this.setRange(e, 0, t, t.textContent.length), this.nodeChange(null, null, ["A"], !1)
                        } else this.util.removeItem(this.context.link._linkAnchor), this.context.link._linkAnchor = null, this.focus(), this.history.push(!1);
                        this.controllersOff()
                    }
                },
                init: function() {
                    const e = this.context.link;
                    e.linkController.style.display = "none", e._linkAnchor = null, e._linkValue = e.preview.textContent = e.focusElement.value = "", e.linkAnchorText.value = "", e.linkNewWindowCheck.checked = !1
                }
            },
            d = n("ZED3"),
            u = n.n(d),
            h = n("ee5k"),
            g = n.n(h),
            p = n("gjS+"),
            m = n.n(p),
            f = {
                name: "image",
                display: "dialog",
                add: function(e) {
                    e.addModule([r.a, u.a, g.a, m.a]);
                    const t = e.context,
                        n = t.image = {
                            _infoList: [],
                            _infoIndex: 0,
                            _uploadFileLength: 0,
                            sizeUnit: t.option._imageSizeUnit,
                            _altText: "",
                            _linkElement: null,
                            _align: "none",
                            _floatClassRegExp: "__se__float\\-[a-z]+",
                            _v_link: {
                                _linkValue: ""
                            },
                            _v_src: {
                                _linkValue: ""
                            },
                            svgDefaultSize: "30%",
                            _element: null,
                            _cover: null,
                            _container: null,
                            inputX: null,
                            inputY: null,
                            _element_w: 1,
                            _element_h: 1,
                            _element_l: 0,
                            _element_t: 0,
                            _defaultSizeX: "auto",
                            _defaultSizeY: "auto",
                            _origin_w: "auto" === t.option.imageWidth ? "" : t.option.imageWidth,
                            _origin_h: "auto" === t.option.imageHeight ? "" : t.option.imageHeight,
                            _proportionChecked: !0,
                            _resizing: t.option.imageResizing,
                            _resizeDotHide: !t.option.imageHeightShow,
                            _rotation: t.option.imageRotation,
                            _onlyPercentage: t.option.imageSizeOnlyPercentage,
                            _ratio: !1,
                            _ratioX: 1,
                            _ratioY: 1,
                            _captionShow: !0,
                            _captionChecked: !1,
                            _caption: null,
                            captionCheckEl: null
                        };
                    let i = this.setDialog.call(e);
                    n.modal = i, n.imgInputFile = i.querySelector("._se_image_file"), n.imgUrlFile = i.querySelector(".se-input-url"), n.focusElement = n.imgInputFile || n.imgUrlFile, n.altText = i.querySelector("._se_image_alt"), n.imgLink = i.querySelector("._se_image_link"), n.imgLinkNewWindowCheck = i.querySelector("._se_image_link_check"), n.captionCheckEl = i.querySelector("._se_image_check_caption"), n.previewLink = i.querySelector("._se_tab_content_url .se-link-preview"), n.previewSrc = i.querySelector("._se_tab_content_image .se-link-preview"), i.querySelector(".se-dialog-tabs").addEventListener("click", this.openTab.bind(e)), i.querySelector(".se-btn-primary").addEventListener("click", this.submit.bind(e)), n.imgInputFile && i.querySelector(".se-file-remove").addEventListener("click", this._removeSelectedFiles.bind(n.imgInputFile, n.imgUrlFile, n.previewSrc)), n.imgInputFile && n.imgUrlFile && n.imgInputFile.addEventListener("change", this._fileInputChange.bind(n)), n.imgLink.addEventListener("input", this._onLinkPreview.bind(n.previewLink, n._v_link, t.options.linkProtocol)), n.imgUrlFile && n.imgUrlFile.addEventListener("input", this._onLinkPreview.bind(n.previewSrc, n._v_src, t.options.linkProtocol));
                    const l = i.querySelector(".__se__gallery");
                    l && l.addEventListener("click", this._openGallery.bind(e)), n.proportion = {}, n.inputX = {}, n.inputY = {}, t.option.imageResizing && (n.proportion = i.querySelector("._se_image_check_proportion"), n.inputX = i.querySelector("._se_image_size_x"), n.inputY = i.querySelector("._se_image_size_y"), n.inputX.value = t.option.imageWidth, n.inputY.value = t.option.imageHeight, n.inputX.addEventListener("keyup", this.setInputSize.bind(e, "x")), n.inputY.addEventListener("keyup", this.setInputSize.bind(e, "y")), n.inputX.addEventListener("change", this.setRatio.bind(e)), n.inputY.addEventListener("change", this.setRatio.bind(e)), n.proportion.addEventListener("change", this.setRatio.bind(e)), i.querySelector(".se-dialog-btn-revert").addEventListener("click", this.sizeRevert.bind(e))), t.dialog.modal.appendChild(i), i = null
                },
                setDialog: function() {
                    const e = this.context.option,
                        t = this.lang,
                        n = this.util.createElement("DIV");
                    n.className = "se-dialog-content", n.style.display = "none";
                    let i = '<div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" class="close" aria-label="Close" title="' + t.dialogBox.close + '">' + this.icons.cancel + '</button><span class="se-modal-title">' + t.dialogBox.imageBox.title + '</span></div><div class="se-dialog-tabs"><button type="button" class="_se_tab_link active" data-tab-link="image">' + t.toolbar.image + '</button><button type="button" class="_se_tab_link" data-tab-link="url">' + t.toolbar.link + '</button></div><form method="post" enctype="multipart/form-data"><div class="_se_tab_content _se_tab_content_image"><div class="se-dialog-body"><div style="border-bottom: 1px dashed #ccc;">';
                    if (e.imageFileInput && (i += '<div class="se-dialog-form"><label>' + t.dialogBox.imageBox.file + '</label><div class="se-dialog-form-files"><input class="se-input-form _se_image_file" type="file" accept="image/"' + e.imageAccept + (e.imageMultipleFile ? ' multiple="multiple"' : "") + '/><button type="button" class="se-btn se-dialog-files-edge-button se-file-remove" title="' + t.controller.remove + '">' + this.icons.cancel + "</button></div></div>"), e.imageUrlInput && (i += '<div class="se-dialog-form"><label>' + t.dialogBox.imageBox.url + '</label><div class="se-dialog-form-files"><input class="se-input-form se-input-url" type="text" />' + (e.imageGalleryUrl && this.plugins.imageGallery ? '<button type="button" class="se-btn se-dialog-files-edge-button __se__gallery" title="' + t.toolbar.imageGallery + '">' + this.icons.image_gallery + "</button>" : "") + '</div><pre class="se-link-preview"></pre></div>'), i += '</div><div class="se-dialog-form"><label>' + t.dialogBox.imageBox.altText + '</label><input class="se-input-form _se_image_alt" type="text" /></div>', e.imageResizing) {
                        const n = e.imageSizeOnlyPercentage,
                            l = n ? ' style="display: none !important;"' : "",
                            o = e.imageHeightShow ? "" : ' style="display: none !important;"';
                        i += '<div class="se-dialog-form">', n || !e.imageHeightShow ? i += '<div class="se-dialog-size-text"><label class="size-w">' + t.dialogBox.size + "</label></div>" : i += '<div class="se-dialog-size-text"><label class="size-w">' + t.dialogBox.width + '</label><label class="se-dialog-size-x">&nbsp;</label><label class="size-h">' + t.dialogBox.height + "</label></div>", i += '<input class="se-input-control _se_image_size_x" placeholder="auto"' + (n ? ' type="number" min="1"' : 'type="text"') + (n ? ' max="100"' : "") + ' /><label class="se-dialog-size-x"' + o + ">" + (n ? "%" : "x") + '</label><input type="text" class="se-input-control _se_image_size_y" placeholder="auto"' + l + (n ? ' max="100"' : "") + o + "/><label" + l + o + '><input type="checkbox" class="se-dialog-btn-check _se_image_check_proportion" checked/>&nbsp;' + t.dialogBox.proportion + '</label><button type="button" title="' + t.dialogBox.revertButton + '" class="se-btn se-dialog-btn-revert" style="float: right;">' + this.icons.revert + "</button></div>"
                    }
                    return i += '<div class="se-dialog-form se-dialog-form-footer"><label><input type="checkbox" class="se-dialog-btn-check _se_image_check_caption" />&nbsp;' + t.dialogBox.caption + '</label></div></div></div><div class="_se_tab_content _se_tab_content_url" style="display: none"><div class="se-dialog-body"><div class="se-dialog-form"><label>' + t.dialogBox.linkBox.url + '</label><input class="se-input-form _se_image_link" type="text" /><pre class="se-link-preview"></pre></div><label><input type="checkbox" class="_se_image_link_check"/>&nbsp;' + t.dialogBox.linkBox.newWindowCheck + '</label></div></div><div class="se-dialog-footer"><div><label><input type="radio" name="suneditor_image_radio" class="se-dialog-btn-radio" value="none" checked>' + t.dialogBox.basic + '</label><label><input type="radio" name="suneditor_image_radio" class="se-dialog-btn-radio" value="left">' + t.dialogBox.left + '</label><label><input type="radio" name="suneditor_image_radio" class="se-dialog-btn-radio" value="center">' + t.dialogBox.center + '</label><label><input type="radio" name="suneditor_image_radio" class="se-dialog-btn-radio" value="right">' + t.dialogBox.right + '</label></div><button type="submit" class="se-btn-primary" title="' + t.dialogBox.submitButton + '"><span>' + t.dialogBox.submitButton + "</span></button></div></form>", n.innerHTML = i, n
                },
                _fileInputChange: function() {
                    this.imgInputFile.value ? (this.imgUrlFile.setAttribute("disabled", !0), this.previewSrc.style.textDecoration = "line-through") : (this.imgUrlFile.removeAttribute("disabled"), this.previewSrc.style.textDecoration = "")
                },
                _removeSelectedFiles: function(e, t) {
                    this.value = "", e && (e.removeAttribute("disabled"), t.style.textDecoration = "")
                },
                _openGallery: function() {
                    this.callPlugin("imageGallery", this.plugins.imageGallery.open.bind(this, this.plugins.image._setUrlInput.bind(this.context.image)), null)
                },
                _setUrlInput: function(e) {
                    this.altText.value = e.alt, this._v_src._linkValue = this.previewSrc.textContent = this.imgUrlFile.value = e.src, this.imgUrlFile.focus()
                },
                _onLinkPreview: function(e, t, n) {
                    const i = n.target.value.trim();
                    e._linkValue = this.textContent = i ? t && -1 === i.indexOf("://") && 0 !== i.indexOf("#") ? t + i : -1 === i.indexOf("://") ? "/" + i : i : ""
                },
                fileTags: ["img"],
                select: function(e) {
                    this.plugins.image.onModifyMode.call(this, e, this.plugins.resizing.call_controller_resize.call(this, e, "image"))
                },
                destroy: function(e) {
                    const t = e || this.context.image._element,
                        n = this.util.getParentElement(t, this.util.isMediaComponent) || t,
                        i = 1 * t.getAttribute("data-index");
                    let l = n.previousElementSibling || n.nextElementSibling;
                    const o = n.parentNode;
                    this.util.removeItem(n), this.plugins.image.init.call(this), this.controllersOff(), o !== this.context.element.wysiwyg && this.util.removeItemAllParents(o, (function(e) {
                        return 0 === e.childNodes.length
                    }), null), this.focusEdge(l), this.plugins.fileManager.deleteInfo.call(this, "image", i, this.functions.onImageUpload), this.history.push(!1)
                },
                on: function(e) {
                    const t = this.context.image;
                    e ? t.imgInputFile && this.context.options.imageMultipleFile && t.imgInputFile.removeAttribute("multiple") : (t.inputX.value = t._origin_w = this.context.option.imageWidth === t._defaultSizeX ? "" : this.context.option.imageWidth, t.inputY.value = t._origin_h = this.context.option.imageHeight === t._defaultSizeY ? "" : this.context.option.imageHeight, t.imgInputFile && this.context.options.imageMultipleFile && t.imgInputFile.setAttribute("multiple", "multiple"))
                },
                open: function() {
                    this.plugins.dialog.open.call(this, "image", "image" === this.currentControllerName)
                },
                openTab: function(e) {
                    const t = this.context.image.modal,
                        n = "init" === e ? t.querySelector("._se_tab_link") : e.target;
                    if (!/^BUTTON$/i.test(n.tagName)) return !1;
                    const i = n.getAttribute("data-tab-link");
                    let l, o, s;
                    for (o = t.getElementsByClassName("_se_tab_content"), l = 0; l < o.length; l++) o[l].style.display = "none";
                    for (s = t.getElementsByClassName("_se_tab_link"), l = 0; l < s.length; l++) this.util.removeClass(s[l], "active");
                    return t.querySelector("._se_tab_content_" + i).style.display = "block", this.util.addClass(n, "active"), "image" === i && this.context.image.focusElement ? this.context.image.focusElement.focus() : "url" === i && this.context.image.imgLink && this.context.image.imgLink.focus(), !1
                },
                submit: function(e) {
                    const t = this.context.image,
                        n = this.plugins.image;
                    e.preventDefault(), e.stopPropagation(), t._altText = t.altText.value, t._align = t.modal.querySelector('input[name="suneditor_image_radio"]:checked').value, t._captionChecked = t.captionCheckEl.checked, t._resizing && (t._proportionChecked = t.proportion.checked);
                    try {
                        this.context.dialog.updateModal && n.update_image.call(this, !1, !0, !1), t.imgInputFile && t.imgInputFile.files.length > 0 ? (this.showLoading(), n.submitAction.call(this, this.context.image.imgInputFile.files)) : t.imgUrlFile && t._v_src._linkValue.length > 0 && (this.showLoading(), n.onRender_imgUrl.call(this))
                    } catch (e) {
                        throw this.closeLoading(), Error('[SUNEDITOR.image.submit.fail] cause : "' + e.message + '"')
                    } finally {
                        this.plugins.dialog.close.call(this)
                    }
                    return !1
                },
                submitAction: function(e) {
                    if (0 === e.length) return;
                    let t = 0,
                        n = [];
                    for (let i = 0, l = e.length; i < l; i++) /image/i.test(e[i].type) && (n.push(e[i]), t += e[i].size);
                    const i = this.context.option.imageUploadSizeLimit;
                    if (i > 0) {
                        let e = 0;
                        const n = this.context.image._infoList;
                        for (let t = 0, i = n.length; t < i; t++) e += 1 * n[t].size;
                        if (t + e > i) {
                            this.closeLoading();
                            const n = "[SUNEDITOR.imageUpload.fail] Size of uploadable total images: " + i / 1e3 + "KB";
                            return void(("function" !== this.functions.onImageUploadError || this.functions.onImageUploadError(n, {
                                limitSize: i,
                                currentSize: e,
                                uploadSize: t
                            }, this)) && this.functions.noticeOpen(n))
                        }
                    }
                    const l = this.context.image;
                    l._uploadFileLength = n.length;
                    const o = {
                        linkValue: l._v_link._linkValue,
                        linkNewWindow: l.imgLinkNewWindowCheck.checked,
                        inputWidth: l.inputX.value,
                        inputHeight: l.inputY.value,
                        align: l._align,
                        isUpdate: this.context.dialog.updateModal,
                        element: l._element
                    };
                    if ("function" == typeof this.functions.onImageUploadBefore) {
                        const e = this.functions.onImageUploadBefore(n, o, this, function(e) {
                            e && this._w.Array.isArray(e.result) ? this.plugins.image.register.call(this, o, e) : this.plugins.image.upload.call(this, o, e)
                        }.bind(this));
                        if (void 0 === e) return;
                        if (!e) return void this.closeLoading();
                        this._w.Array.isArray(e) && e.length > 0 && (n = e)
                    }
                    this.plugins.image.upload.call(this, o, n)
                },
                error: function(e, t) {
                    if (this.closeLoading(), "function" != typeof this.functions.onImageUploadError || this.functions.onImageUploadError(e, t, this)) throw this.functions.noticeOpen(e), Error("[SUNEDITOR.plugin.image.error] response: " + e)
                },
                upload: function(e, t) {
                    if (!t) return void this.closeLoading();
                    if ("string" == typeof t) return void this.plugins.image.error.call(this, t, null);
                    const n = this.context.option.imageUploadUrl,
                        i = this.context.dialog.updateModal ? 1 : t.length;
                    if ("string" == typeof n && n.length > 0) {
                        const l = new FormData;
                        for (let e = 0; e < i; e++) l.append("file-" + e, t[e]);
                        this.plugins.fileManager.upload.call(this, n, this.context.option.imageUploadHeader, l, this.plugins.image.callBack_imgUpload.bind(this, e), this.functions.onImageUploadError)
                    } else this.plugins.image.setup_reader.call(this, t, e.linkValue, e.linkNewWindow, e.inputWidth, e.inputHeight, e.align, i - 1, e.isUpdate)
                },
                callBack_imgUpload: function(e, t) {
                    if ("function" == typeof this.functions.imageUploadHandler) this.functions.imageUploadHandler(t, e, this);
                    else {
                        const n = JSON.parse(t.responseText);
                        n.errorMessage ? this.plugins.image.error.call(this, n.errorMessage, n) : this.plugins.image.register.call(this, e, n)
                    }
                },
                register: function(e, t) {
                    const n = t.result;
                    for (let t, i = 0, l = n.length; i < l; i++) {
                        if (t = {
                                name: n[i].name,
                                size: n[i].size
                            }, e.isUpdate) {
                            this.plugins.image.update_src.call(this, n[i].url, e.element, t);
                            break
                        }
                        this.plugins.image.create_image.call(this, n[i].url, e.linkValue, e.linkNewWindow, e.inputWidth, e.inputHeight, e.align, t)
                    }
                    this.closeLoading()
                },
                setup_reader: function(e, t, n, i, l, o, s, a) {
                    try {
                        const r = this._w.FileReader;
                        for (let c, d, u = 0; u <= s; u++) c = new r, d = e[u], a && (this.context.image._element.setAttribute("data-file-name", d.name), this.context.image._element.setAttribute("data-file-size", d.size)), c.onload = function(e, s, a, r) {
                            this.context.image.inputX.value = i, this.context.image.inputY.value = l, e ? this.plugins.image.update_src.call(this, c.result, s, a) : this.plugins.image.create_image.call(this, c.result, t, n, i, l, o, a), r && this.closeLoading()
                        }.bind(this, a, this.context.image._element, d, u === s), c.readAsDataURL(d)
                    } catch (e) {
                        throw this.closeLoading(), Error('[SUNEDITOR.image.setup_reader.fail] cause : "' + e.message + '"')
                    }
                },
                onRender_imgUrl: function() {
                    const e = this.context.image;
                    if (0 === e._v_src._linkValue.length) return !1;
                    try {
                        const t = {
                            name: e._v_src._linkValue.split("/").pop(),
                            size: 0
                        };
                        this.context.dialog.updateModal ? this.plugins.image.update_src.call(this, e._v_src._linkValue, e._element, t) : this.plugins.image.create_image.call(this, e._v_src._linkValue, e._v_link._linkValue, e.imgLinkNewWindowCheck.checked, e.inputX.value, e.inputY.value, e._align, t)
                    } catch (e) {
                        throw Error('[SUNEDITOR.image.URLRendering.fail] cause : "' + e.message + '"')
                    } finally {
                        this.closeLoading()
                    }
                },
                onRender_link: function(e, t, n) {
                    if (t.trim().length > 0) {
                        const i = this.util.createElement("A");
                        return i.href = /^https?:\/\//.test(t) ? t : "http://" + t, i.target = n ? "_blank" : "", i.setAttribute("data-image-link", "image"), e.setAttribute("data-image-link", t), i.appendChild(e), i
                    }
                    return e
                },
                setInputSize: function(e, t) {
                    t && 32 === t.keyCode ? t.preventDefault() : this.plugins.resizing._module_setInputSize.call(this, this.context.image, e)
                },
                setRatio: function() {
                    this.plugins.resizing._module_setRatio.call(this, this.context.image)
                },
                checkFileInfo: function() {
                    const e = this.plugins.image,
                        t = function(t) {
                            e.onModifyMode.call(this, t, null), e.openModify.call(this, !0), e.update_image.call(this, !0, !1, !0)
                        }.bind(this);
                    this.plugins.fileManager.checkInfo.call(this, "image", ["img"], this.functions.onImageUpload, t, !0)
                },
                resetFileInfo: function() {
                    this.plugins.fileManager.resetInfo.call(this, "image", this.functions.onImageUpload)
                },
                create_image: function(e, t, n, i, l, o, s) {
                    const a = this.plugins.image,
                        r = this.context.image;
                    this.context.resizing._resize_plugin = "image";
                    let c = this.util.createElement("IMG");
                    c.src = e, c.alt = r._altText, c = a.onRender_link.call(this, c, t, n), c.setAttribute("data-rotate", "0"), r._resizing && c.setAttribute("data-proportion", r._proportionChecked);
                    const d = this.plugins.component.set_cover.call(this, c),
                        u = this.plugins.component.set_container.call(this, d, "se-image-container");
                    r._captionChecked && (r._caption = this.plugins.component.create_caption.call(this), r._caption.setAttribute("contenteditable", !1), d.appendChild(r._caption)), r._element = c, r._cover = d, r._container = u, a.applySize.call(this, i, l), a.setAlign.call(this, o, c, d, u), c.onload = a._image_create_onload.bind(this, c, r.svgDefaultSize), this.insertComponent(u, !0, !0, !0) && this.plugins.fileManager.setInfo.call(this, "image", c, this.functions.onImageUpload, s, !0), this.context.resizing._resize_plugin = ""
                },
                _image_create_onload: function(e, t) {
                    0 === e.offsetWidth && this.plugins.image.applySize.call(this, t, ""), this.selectComponent.call(this, e, "image")
                },
                update_image: function(e, t, n) {
                    const i = this.context.image,
                        l = i._v_link._linkValue;
                    let o, s = i._element,
                        a = i._cover,
                        r = i._container,
                        c = !1;
                    null === a && (c = !0, s = i._element.cloneNode(!0), a = this.plugins.component.set_cover.call(this, s)), null === r ? (a = a.cloneNode(!0), s = a.querySelector("img"), c = !0, r = this.plugins.component.set_container.call(this, a, "se-image-container")) : c && (r.innerHTML = "", r.appendChild(a), i._cover = a, i._element = s, c = !1);
                    const d = this.util.isNumber(i.inputX.value) ? i.inputX.value + i.sizeUnit : i.inputX.value,
                        u = this.util.isNumber(i.inputY.value) ? i.inputY.value + i.sizeUnit : i.inputY.value;
                    o = /%$/.test(s.style.width) ? d !== r.style.width || u !== r.style.height : d !== s.style.width || u !== s.style.height, s.alt = i._altText;
                    let h = !1;
                    if (i._captionChecked ? i._caption || (i._caption = this.plugins.component.create_caption.call(this), a.appendChild(i._caption), h = !0) : i._caption && (this.util.removeItem(i._caption), i._caption = null, h = !0), l.trim().length > 0)
                        if (null !== i._linkElement && a.contains(i._linkElement)) i._linkElement.href = l, i._linkElement.target = i.imgLinkNewWindowCheck.checked ? "_blank" : "", s.setAttribute("data-image-link", l);
                        else {
                            let e = this.plugins.image.onRender_link.call(this, s, l, this.context.image.imgLinkNewWindowCheck.checked);
                            a.insertBefore(e, i._caption)
                        }
                    else if (null !== i._linkElement) {
                        const e = s;
                        e.setAttribute("data-image-link", "");
                        let t = e.cloneNode(!0);
                        a.removeChild(i._linkElement), a.insertBefore(t, i._caption), s = t
                    }
                    if (c) {
                        const e = this.util.isRangeFormatElement(i._element.parentNode) || this.util.isWysiwygDiv(i._element.parentNode) ? i._element : /^A$/i.test(i._element.parentNode.nodeName) ? i._element.parentNode : this.util.getFormatElement(i._element) || i._element;
                        e.parentNode.replaceChild(r, e), s = r.querySelector("img"), i._element = s, i._cover = a, i._container = r
                    }(h || !i._onlyPercentage && o) && !e && (/\d+/.test(s.style.height) || this.context.resizing._rotateVertical && i._captionChecked) && (/%$/.test(i.inputX.value) || /%$/.test(i.inputY.value) ? this.plugins.resizing.resetTransform.call(this, s) : this.plugins.resizing.setTransformSize.call(this, s, this.util.getNumber(i.inputX.value, 0), this.util.getNumber(i.inputY.value, 0)));
                    i._resizing && (s.setAttribute("data-proportion", i._proportionChecked), o && this.plugins.image.applySize.call(this)), this.plugins.image.setAlign.call(this, null, s, null, null), e && this.plugins.fileManager.setInfo.call(this, "image", s, this.functions.onImageUpload, null, !0), t && this.selectComponent(s, "image"), n || this.history.push(!1)
                },
                update_src: function(e, t, n) {
                    t.src = e, this._w.setTimeout(this.plugins.fileManager.setInfo.bind(this, "image", t, this.functions.onImageUpload, n, !0)), this.selectComponent(t, "image")
                },
                onModifyMode: function(e, t) {
                    if (!e) return;
                    const n = this.context.image;
                    n._linkElement = /^A$/i.test(e.parentNode.nodeName) ? e.parentNode : null, n._element = e, n._cover = this.util.getParentElement(e, "FIGURE"), n._container = this.util.getParentElement(e, this.util.isMediaComponent), n._caption = this.util.getChildElement(n._cover, "FIGCAPTION"), n._align = e.getAttribute("data-align") || "none", t && (n._element_w = t.w, n._element_h = t.h, n._element_t = t.t, n._element_l = t.l);
                    let i = n._element.getAttribute("data-size") || n._element.getAttribute("data-origin");
                    i ? (i = i.split(","), n._origin_w = i[0], n._origin_h = i[1]) : t && (n._origin_w = t.w, n._origin_h = t.h)
                },
                openModify: function(e) {
                    const t = this.context.image;
                    t.imgUrlFile && (t._v_src._linkValue = t.previewSrc.textContent = t.imgUrlFile.value = t._element.src), t._altText = t.altText.value = t._element.alt, t._v_link._linkValue = t.previewLink.textContent = t.imgLink.value = null === t._linkElement ? "" : t._linkElement.href, t.imgLinkNewWindowCheck.checked = t._linkElement && "_blank" === t._linkElement.target, t.modal.querySelector('input[name="suneditor_image_radio"][value="' + t._align + '"]').checked = !0, t._align = t.modal.querySelector('input[name="suneditor_image_radio"]:checked').value, t._captionChecked = t.captionCheckEl.checked = !!t._caption, t._resizing && this.plugins.resizing._module_setModifyInputSize.call(this, t, this.plugins.image), e || this.plugins.dialog.open.call(this, "image", !0)
                },
                sizeRevert: function() {
                    this.plugins.resizing._module_sizeRevert.call(this, this.context.image)
                },
                applySize: function(e, t) {
                    const n = this.context.image;
                    return e || (e = n.inputX.value || this.context.option.imageWidth), t || (t = n.inputY.value || this.context.option.imageHeight), n._onlyPercentage && e || /%$/.test(e) ? (this.plugins.image.setPercentSize.call(this, e, t), !0) : (e && "auto" !== e || t && "auto" !== t ? this.plugins.image.setSize.call(this, e, t, !1) : this.plugins.image.setAutoSize.call(this), !1)
                },
                setSize: function(e, t, n, i) {
                    const l = this.context.image,
                        o = /^(rw|lw)$/.test(i),
                        s = /^(th|bh)$/.test(i);
                    this.plugins.image.cancelPercentAttr.call(this), s || (l._element.style.width = this.util.isNumber(e) ? e + l.sizeUnit : e), o || (l._element.style.height = this.util.isNumber(t) ? t + l.sizeUnit : /%$/.test(t) ? "" : t), "center" === l._align && this.plugins.image.setAlign.call(this, null, null, null, null), n || l._element.removeAttribute("data-percentage"), this.plugins.resizing._module_saveCurrentSize.call(this, l)
                },
                setAutoSize: function() {
                    const e = this.context.image;
                    this.plugins.resizing.resetTransform.call(this, e._element), this.plugins.image.cancelPercentAttr.call(this), e._element.style.maxWidth = "", e._element.style.width = "", e._element.style.height = "", e._cover.style.width = "", e._cover.style.height = "", this.plugins.image.setAlign.call(this, null, null, null, null), e._element.setAttribute("data-percentage", "auto,auto"), this.plugins.resizing._module_saveCurrentSize.call(this, e)
                },
                setOriginSize: function() {
                    const e = this.context.image;
                    e._element.removeAttribute("data-percentage"), this.plugins.resizing.resetTransform.call(this, e._element), this.plugins.image.cancelPercentAttr.call(this);
                    const t = (e._element.getAttribute("data-origin") || "").split(","),
                        n = t[0],
                        i = t[1];
                    t && (e._onlyPercentage || /%$/.test(n) && (/%$/.test(i) || !/\d/.test(i)) ? this.plugins.image.setPercentSize.call(this, n, i) : this.plugins.image.setSize.call(this, n, i), this.plugins.resizing._module_saveCurrentSize.call(this, e))
                },
                setPercentSize: function(e, t) {
                    const n = this.context.image;
                    t = !t || /%$/.test(t) || this.util.getNumber(t, 0) ? this.util.isNumber(t) ? t + n.sizeUnit : t || "" : this.util.isNumber(t) ? t + "%" : t;
                    const i = /%$/.test(t);
                    n._container.style.width = this.util.isNumber(e) ? e + "%" : e, n._container.style.height = "", n._cover.style.width = "100%", n._cover.style.height = i ? t : "", n._element.style.width = "100%", n._element.style.height = i ? "" : t, n._element.style.maxWidth = "", "center" === n._align && this.plugins.image.setAlign.call(this, null, null, null, null), n._element.setAttribute("data-percentage", e + "," + t), this.plugins.resizing.setCaptionPosition.call(this, n._element), this.plugins.resizing._module_saveCurrentSize.call(this, n)
                },
                cancelPercentAttr: function() {
                    const e = this.context.image;
                    e._cover.style.width = "", e._cover.style.height = "", e._container.style.width = "", e._container.style.height = "", this.util.removeClass(e._container, this.context.image._floatClassRegExp), this.util.addClass(e._container, "__se__float-" + e._align), "center" === e._align && this.plugins.image.setAlign.call(this, null, null, null, null)
                },
                setAlign: function(e, t, n, i) {
                    const l = this.context.image;
                    e || (e = l._align), t || (t = l._element), n || (n = l._cover), i || (i = l._container), n.style.margin = e && "none" !== e ? "auto" : "0", /%$/.test(t.style.width) && "center" === e ? (i.style.minWidth = "100%", n.style.width = i.style.width) : (i.style.minWidth = "", n.style.width = this.context.resizing._rotateVertical ? t.style.height || t.offsetHeight : t.style.width && "auto" !== t.style.width ? t.style.width || "100%" : ""), this.util.hasClass(i, "__se__float-" + e) || (this.util.removeClass(i, l._floatClassRegExp), this.util.addClass(i, "__se__float-" + e)), t.setAttribute("data-align", e)
                },
                resetAlign: function() {
                    const e = this.context.image;
                    e._element.setAttribute("data-align", ""), e._align = "none", e._cover.style.margin = "0", this.util.removeClass(e._container, e._floatClassRegExp)
                },
                init: function() {
                    const e = this.context.image;
                    e.imgInputFile && (e.imgInputFile.value = ""), e.imgUrlFile && (e._v_src._linkValue = e.previewSrc.textContent = e.imgUrlFile.value = ""), e.imgInputFile && e.imgUrlFile && (e.imgUrlFile.removeAttribute("disabled"), e.previewSrc.style.textDecoration = ""), e.altText.value = "", e._v_link._linkValue = e.previewLink.textContent = e.imgLink.value = "", e.imgLinkNewWindowCheck.checked = !1, e.modal.querySelector('input[name="suneditor_image_radio"][value="none"]').checked = !0, e.captionCheckEl.checked = !1, e._element = null, this.plugins.image.openTab.call(this, "init"), e._resizing && (e.inputX.value = this.context.option.imageWidth === e._defaultSizeX ? "" : this.context.option.imageWidth, e.inputY.value = this.context.option.imageHeight === e._defaultSizeY ? "" : this.context.option.imageHeight, e.proportion.checked = !0, e._ratio = !1, e._ratioX = 1, e._ratioY = 1)
                }
            },
            _ = {
                name: "video",
                display: "dialog",
                add: function(e) {
                    e.addModule([r.a, u.a, g.a, m.a]);
                    const t = e.context,
                        n = t.video = {
                            _infoList: [],
                            _infoIndex: 0,
                            _uploadFileLength: 0,
                            sizeUnit: t.option._videoSizeUnit,
                            _align: "none",
                            _floatClassRegExp: "__se__float\\-[a-z]+",
                            _youtubeQuery: t.option.youtubeQuery,
                            _videoRatio: 100 * t.option.videoRatio + "%",
                            _defaultRatio: 100 * t.option.videoRatio + "%",
                            _linkValue: "",
                            _element: null,
                            _cover: null,
                            _container: null,
                            inputX: null,
                            inputY: null,
                            _element_w: 1,
                            _element_h: 1,
                            _element_l: 0,
                            _element_t: 0,
                            _defaultSizeX: "100%",
                            _defaultSizeY: 100 * t.option.videoRatio + "%",
                            _origin_w: "100%" === t.option.videoWidth ? "" : t.option.videoWidth,
                            _origin_h: "56.25%" === t.option.videoHeight ? "" : t.option.videoHeight,
                            _proportionChecked: !0,
                            _resizing: t.option.videoResizing,
                            _resizeDotHide: !t.option.videoHeightShow,
                            _rotation: t.option.videoRotation,
                            _onlyPercentage: t.option.videoSizeOnlyPercentage,
                            _ratio: !1,
                            _ratioX: 1,
                            _ratioY: 1,
                            _captionShow: !1
                        };
                    let i = this.setDialog.call(e);
                    n.modal = i, n.videoInputFile = i.querySelector("._se_video_file"), n.videoUrlFile = i.querySelector(".se-input-url"), n.focusElement = n.videoUrlFile || n.videoInputFile, n.preview = i.querySelector(".se-link-preview"), i.querySelector(".se-btn-primary").addEventListener("click", this.submit.bind(e)), n.videoInputFile && i.querySelector(".se-dialog-files-edge-button").addEventListener("click", this._removeSelectedFiles.bind(n.videoInputFile, n.videoUrlFile, n.preview)), n.videoInputFile && n.videoUrlFile && n.videoInputFile.addEventListener("change", this._fileInputChange.bind(n)), n.videoUrlFile && n.videoUrlFile.addEventListener("input", this._onLinkPreview.bind(n.preview, n, t.options.linkProtocol)), n.proportion = {}, n.videoRatioOption = {}, n.inputX = {}, n.inputY = {}, t.option.videoResizing && (n.proportion = i.querySelector("._se_video_check_proportion"), n.videoRatioOption = i.querySelector(".se-video-ratio"), n.inputX = i.querySelector("._se_video_size_x"), n.inputY = i.querySelector("._se_video_size_y"), n.inputX.value = t.option.videoWidth, n.inputY.value = t.option.videoHeight, n.inputX.addEventListener("keyup", this.setInputSize.bind(e, "x")), n.inputY.addEventListener("keyup", this.setInputSize.bind(e, "y")), n.inputX.addEventListener("change", this.setRatio.bind(e)), n.inputY.addEventListener("change", this.setRatio.bind(e)), n.proportion.addEventListener("change", this.setRatio.bind(e)), n.videoRatioOption.addEventListener("change", this.setVideoRatio.bind(e)), i.querySelector(".se-dialog-btn-revert").addEventListener("click", this.sizeRevert.bind(e))), t.dialog.modal.appendChild(i), i = null
                },
                setDialog: function() {
                    const e = this.context.option,
                        t = this.lang,
                        n = this.util.createElement("DIV");
                    n.className = "se-dialog-content", n.style.display = "none";
                    let i = '<form method="post" enctype="multipart/form-data"><div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" aria-label="Close" title="' + t.dialogBox.close + '">' + this.icons.cancel + '</button><span class="se-modal-title">' + t.dialogBox.videoBox.title + '</span></div><div class="se-dialog-body">';
                    if (e.videoFileInput && (i += '<div class="se-dialog-form"><label>' + t.dialogBox.videoBox.file + '</label><div class="se-dialog-form-files"><input class="se-input-form _se_video_file" type="file" accept="video/"' + e.videoAccept + (e.videoMultipleFile ? ' multiple="multiple"' : "") + '/><button type="button" data-command="filesRemove" class="se-btn se-dialog-files-edge-button se-file-remove" title="' + t.controller.remove + '">' + this.icons.cancel + "</button></div></div>"), e.videoUrlInput && (i += '<div class="se-dialog-form"><label>' + t.dialogBox.videoBox.url + '</label><input class="se-input-form se-input-url" type="text" /><pre class="se-link-preview"></pre></div>'), e.videoResizing) {
                        const n = e.videoRatioList || [{
                                name: "16:9",
                                value: .5625
                            }, {
                                name: "4:3",
                                value: .75
                            }, {
                                name: "21:9",
                                value: .4285
                            }],
                            l = e.videoRatio,
                            o = e.videoSizeOnlyPercentage,
                            s = o ? ' style="display: none !important;"' : "",
                            a = e.videoHeightShow ? "" : ' style="display: none !important;"',
                            r = e.videoRatioShow ? "" : ' style="display: none !important;"',
                            c = o || e.videoHeightShow || e.videoRatioShow ? "" : ' style="display: none !important;"';
                        i += '<div class="se-dialog-form"><div class="se-dialog-size-text"><label class="size-w">' + t.dialogBox.width + '</label><label class="se-dialog-size-x">&nbsp;</label><label class="size-h"' + a + ">" + t.dialogBox.height + '</label><label class="size-h"' + r + ">(" + t.dialogBox.ratio + ')</label></div><input class="se-input-control _se_video_size_x" placeholder="100%"' + (o ? ' type="number" min="1"' : 'type="text"') + (o ? ' max="100"' : "") + '/><label class="se-dialog-size-x"' + c + ">" + (o ? "%" : "x") + '</label><input class="se-input-control _se_video_size_y" placeholder="' + 100 * e.videoRatio + '%"' + (o ? ' type="number" min="1"' : 'type="text"') + (o ? ' max="100"' : "") + a + '/><select class="se-input-select se-video-ratio" title="' + t.dialogBox.ratio + '"' + r + ">", a || (i += '<option value=""> - </option>');
                        for (let e = 0, t = n.length; e < t; e++) i += '<option value="' + n[e].value + '"' + (l.toString() === n[e].value.toString() ? " selected" : "") + ">" + n[e].name + "</option>";
                        i += '</select><button type="button" title="' + t.dialogBox.revertButton + '" class="se-btn se-dialog-btn-revert" style="float: right;">' + this.icons.revert + '</button></div><div class="se-dialog-form se-dialog-form-footer"' + s + c + '><label><input type="checkbox" class="se-dialog-btn-check _se_video_check_proportion" checked/>&nbsp;' + t.dialogBox.proportion + "</label></div>"
                    }
                    return i += '</div><div class="se-dialog-footer"><div><label><input type="radio" name="suneditor_video_radio" class="se-dialog-btn-radio" value="none" checked>' + t.dialogBox.basic + '</label><label><input type="radio" name="suneditor_video_radio" class="se-dialog-btn-radio" value="left">' + t.dialogBox.left + '</label><label><input type="radio" name="suneditor_video_radio" class="se-dialog-btn-radio" value="center">' + t.dialogBox.center + '</label><label><input type="radio" name="suneditor_video_radio" class="se-dialog-btn-radio" value="right">' + t.dialogBox.right + '</label></div><button type="submit" class="se-btn-primary" title="' + t.dialogBox.submitButton + '"><span>' + t.dialogBox.submitButton + "</span></button></div></form>", n.innerHTML = i, n
                },
                _fileInputChange: function() {
                    this.videoInputFile.value ? (this.videoUrlFile.setAttribute("disabled", !0), this.preview.style.textDecoration = "line-through") : (this.videoUrlFile.removeAttribute("disabled"), this.preview.style.textDecoration = "")
                },
                _removeSelectedFiles: function(e, t) {
                    this.value = "", e && (e.removeAttribute("disabled"), t.style.textDecoration = "")
                },
                _onLinkPreview: function(e, t, n) {
                    const i = n.target.value.trim();
                    /^<iframe.*\/iframe>$/.test(i) ? (e._linkValue = i, this.textContent = '<IFrame :src=".."></IFrame>') : e._linkValue = this.textContent = i ? t && -1 === i.indexOf("://") && 0 !== i.indexOf("#") ? t + i : -1 === i.indexOf("://") ? "/" + i : i : ""
                },
                _setTagAttrs: function(e) {
                    e.setAttribute("controls", !0);
                    const t = this.context.options.videoTagAttrs;
                    if (t)
                        for (let n in t) this.util.hasOwn(t, n) && e.setAttribute(n, t[n])
                },
                createVideoTag: function() {
                    const e = this.util.createElement("VIDEO");
                    return this.plugins.video._setTagAttrs.call(this, e), e
                },
                _setIframeAttrs: function(e) {
                    e.frameBorder = "0", e.allowFullscreen = !0;
                    const t = this.context.options.videoIframeAttrs;
                    if (t)
                        for (let n in t) this.util.hasOwn(t, n) && e.setAttribute(n, t[n])
                },
                createIframeTag: function() {
                    const e = this.util.createElement("IFRAME");
                    return this.plugins.video._setIframeAttrs.call(this, e), e
                },
                fileTags: ["iframe", "video"],
                select: function(e) {
                    this.plugins.video.onModifyMode.call(this, e, this.plugins.resizing.call_controller_resize.call(this, e, "video"))
                },
                destroy: function(e) {
                    const t = e || this.context.video._element,
                        n = this.context.video._container,
                        i = 1 * t.getAttribute("data-index");
                    let l = n.previousElementSibling || n.nextElementSibling;
                    const o = n.parentNode;
                    this.util.removeItem(n), this.plugins.video.init.call(this), this.controllersOff(), o !== this.context.element.wysiwyg && this.util.removeItemAllParents(o, (function(e) {
                        return 0 === e.childNodes.length
                    }), null), this.focusEdge(l), this.plugins.fileManager.deleteInfo.call(this, "video", i, this.functions.onVideoUpload), this.history.push(!1)
                },
                on: function(e) {
                    const t = this.context.video;
                    e ? t.videoInputFile && this.context.options.videoMultipleFile && t.videoInputFile.removeAttribute("multiple") : (t.inputX.value = t._origin_w = this.context.option.videoWidth === t._defaultSizeX ? "" : this.context.option.videoWidth, t.inputY.value = t._origin_h = this.context.option.videoHeight === t._defaultSizeY ? "" : this.context.option.videoHeight, t.proportion.disabled = !0, t.videoInputFile && this.context.options.videoMultipleFile && t.videoInputFile.setAttribute("multiple", "multiple")), t._resizing && this.plugins.video.setVideoRatioSelect.call(this, t._origin_h || t._defaultRatio)
                },
                open: function() {
                    this.plugins.dialog.open.call(this, "video", "video" === this.currentControllerName)
                },
                setVideoRatio: function(e) {
                    const t = this.context.video,
                        n = e.target.options[e.target.selectedIndex].value;
                    t._defaultSizeY = t._videoRatio = n ? 100 * n + "%" : t._defaultSizeY, t.inputY.placeholder = n ? 100 * n + "%" : "", t.inputY.value = ""
                },
                setInputSize: function(e, t) {
                    if (t && 32 === t.keyCode) return void t.preventDefault();
                    const n = this.context.video;
                    this.plugins.resizing._module_setInputSize.call(this, n, e), "y" === e && this.plugins.video.setVideoRatioSelect.call(this, t.target.value || n._defaultRatio)
                },
                setRatio: function() {
                    this.plugins.resizing._module_setRatio.call(this, this.context.video)
                },
                submit: function(e) {
                    const t = this.context.video,
                        n = this.plugins.video;
                    e.preventDefault(), e.stopPropagation(), t._align = t.modal.querySelector('input[name="suneditor_video_radio"]:checked').value;
                    try {
                        t.videoInputFile && t.videoInputFile.files.length > 0 ? (this.showLoading(), n.submitAction.call(this, this.context.video.videoInputFile.files)) : t.videoUrlFile && t._linkValue.length > 0 && (this.showLoading(), n.setup_url.call(this))
                    } catch (e) {
                        throw this.closeLoading(), Error('[SUNEDITOR.video.submit.fail] cause : "' + e.message + '"')
                    } finally {
                        this.plugins.dialog.close.call(this)
                    }
                    return !1
                },
                submitAction: function(e) {
                    if (0 === e.length) return;
                    let t = 0,
                        n = [];
                    for (let i = 0, l = e.length; i < l; i++) /video/i.test(e[i].type) && (n.push(e[i]), t += e[i].size);
                    const i = this.context.option.videoUploadSizeLimit;
                    if (i > 0) {
                        let e = 0;
                        const n = this.context.video._infoList;
                        for (let t = 0, i = n.length; t < i; t++) e += 1 * n[t].size;
                        if (t + e > i) {
                            this.closeLoading();
                            const n = "[SUNEDITOR.videoUpload.fail] Size of uploadable total videos: " + i / 1e3 + "KB";
                            return void(("function" !== this.functions.onVideoUploadError || this.functions.onVideoUploadError(n, {
                                limitSize: i,
                                currentSize: e,
                                uploadSize: t
                            }, this)) && this.functions.noticeOpen(n))
                        }
                    }
                    const l = this.context.video;
                    l._uploadFileLength = n.length;
                    const o = {
                        inputWidth: l.inputX.value,
                        inputHeight: l.inputY.value,
                        align: l._align,
                        isUpdate: this.context.dialog.updateModal,
                        element: l._element
                    };
                    if ("function" == typeof this.functions.onVideoUploadBefore) {
                        const e = this.functions.onVideoUploadBefore(n, o, this, function(e) {
                            e && this._w.Array.isArray(e.result) ? this.plugins.video.register.call(this, o, e) : this.plugins.video.upload.call(this, o, e)
                        }.bind(this));
                        if (void 0 === e) return;
                        if (!e) return void this.closeLoading();
                        "object" == typeof e && e.length > 0 && (n = e)
                    }
                    this.plugins.video.upload.call(this, o, n)
                },
                error: function(e, t) {
                    if (this.closeLoading(), "function" != typeof this.functions.onVideoUploadError || this.functions.onVideoUploadError(e, t, this)) throw this.functions.noticeOpen(e), Error("[SUNEDITOR.plugin.video.error] response: " + e)
                },
                upload: function(e, t) {
                    if (!t) return void this.closeLoading();
                    if ("string" == typeof t) return void this.plugins.video.error.call(this, t, null);
                    const n = this.context.option.videoUploadUrl,
                        i = this.context.dialog.updateModal ? 1 : t.length;
                    if (!("string" == typeof n && n.length > 0)) throw Error('[SUNEDITOR.videoUpload.fail] cause : There is no "videoUploadUrl" option.'); {
                        const l = new FormData;
                        for (let e = 0; e < i; e++) l.append("file-" + e, t[e]);
                        this.plugins.fileManager.upload.call(this, n, this.context.option.videoUploadHeader, l, this.plugins.video.callBack_videoUpload.bind(this, e), this.functions.onVideoUploadError)
                    }
                },
                callBack_videoUpload: function(e, t) {
                    if ("function" == typeof this.functions.videoUploadHandler) this.functions.videoUploadHandler(t, e, this);
                    else {
                        const n = JSON.parse(t.responseText);
                        n.errorMessage ? this.plugins.video.error.call(this, n.errorMessage, n) : this.plugins.video.register.call(this, e, n)
                    }
                },
                register: function(e, t) {
                    const n = t.result,
                        i = this.plugins.video.createVideoTag.call(this);
                    for (let t, l = 0, o = n.length; l < o; l++) t = {
                        name: n[l].name,
                        size: n[l].size
                    }, this.plugins.video.create_video.call(this, e.isUpdate ? e.element : i.cloneNode(!1), n[l].url, e.inputWidth, e.inputHeight, e.align, t, e.isUpdate);
                    this.closeLoading()
                },
                setup_url: function() {
                    try {
                        const e = this.context.video;
                        let t = e._linkValue;
                        if (0 === t.length) return !1;
                        if (/^<iframe.*\/iframe>$/.test(t)) {
                            if (t = (new this._w.DOMParser).parseFromString(t, "text/html").querySelector("iframe").src, 0 === t.length) return !1
                        }
                        if (/youtu\.?be/.test(t)) {
                            if (/^http/.test(t) || (t = "https://" + t), t = t.replace("watch?v=", ""), /^\/\/.+\/embed\//.test(t) || (t = t.replace(t.match(/\/\/.+\//)[0], "//www.youtube.com/embed/").replace("&", "?&")), e._youtubeQuery.length > 0)
                                if (/\?/.test(t)) {
                                    const n = t.split("?");
                                    t = n[0] + "?" + e._youtubeQuery + "&" + n[1]
                                } else t += "?" + e._youtubeQuery
                        } else /vimeo\.com/.test(t) && (t.endsWith("/") && (t = t.slice(0, -1)), t = "https://player.vimeo.com/video/" + t.slice(t.lastIndexOf("/") + 1));
                        this.plugins.video.create_video.call(this, this.plugins.video.createIframeTag.call(this), t, e.inputX.value, e.inputY.value, e._align, null, this.context.dialog.updateModal)
                    } catch (e) {
                        throw Error('[SUNEDITOR.video.upload.fail] cause : "' + e.message + '"')
                    } finally {
                        this.closeLoading()
                    }
                },
                create_video: function(e, t, n, i, l, o, s) {
                    this.context.resizing._resize_plugin = "video";
                    const a = this.context.video;
                    let r = null,
                        c = null,
                        d = !1;
                    if (s) {
                        if ((e = a._element).src !== t) {
                            d = !0;
                            const n = /youtu\.?be/.test(t),
                                i = /vimeo\.com/.test(t);
                            if (!n && !i || /^iframe$/i.test(e.nodeName))
                                if (n || i || /^videoo$/i.test(e.nodeName)) e.src = t;
                                else {
                                    const n = this.plugins.video.createVideoTag.call(this);
                                    n.src = t, e.parentNode.replaceChild(n, e), a._element = e = n
                                }
                            else {
                                const n = this.plugins.video.createIframeTag.call(this);
                                n.src = t, e.parentNode.replaceChild(n, e), a._element = e = n
                            }
                        }
                        c = a._container, r = this.util.getParentElement(e, "FIGURE")
                    } else d = !0, e.src = t, a._element = e, r = this.plugins.component.set_cover.call(this, e), c = this.plugins.component.set_container.call(this, r, "se-video-container");
                    a._cover = r, a._container = c;
                    const u = this.plugins.resizing._module_getSizeX.call(this, a) !== (n || a._defaultSizeX) || this.plugins.resizing._module_getSizeY.call(this, a) !== (i || a._videoRatio),
                        h = !s || u;
                    a._resizing && (this.context.video._proportionChecked = a.proportion.checked, e.setAttribute("data-proportion", a._proportionChecked));
                    let g = !1;
                    h && (g = this.plugins.video.applySize.call(this)), g && "center" === l || this.plugins.video.setAlign.call(this, null, e, r, c);
                    let p = !0;
                    s ? a._resizing && this.context.resizing._rotateVertical && h && this.plugins.resizing.setTransformSize.call(this, e, null, null) : p = this.insertComponent(c, !1, !0, !1), p && (d && this.plugins.fileManager.setInfo.call(this, "video", e, this.functions.onVideoUpload, o, !0), s && (this.selectComponent(e, "video"), this.history.push(!1))), this.context.resizing._resize_plugin = ""
                },
                _update_videoCover: function(e) {
                    if (!e) return;
                    const t = this.context.video;
                    /^video$/i.test(e.nodeName) ? this.plugins.video._setTagAttrs.call(this, e) : this.plugins.video._setIframeAttrs.call(this, e);
                    const n = this.util.getParentElement(e, this.util.isMediaComponent) || this.util.getParentElement(e, function(e) {
                        return this.isWysiwygDiv(e.parentNode)
                    }.bind(this.util));
                    t._element = e = e.cloneNode(!0);
                    const i = t._cover = this.plugins.component.set_cover.call(this, e),
                        l = t._container = this.plugins.component.set_container.call(this, i, "se-video-container"),
                        o = n.querySelector("figcaption");
                    let s = null;
                    o && (s = this.util.createElement("DIV"), s.innerHTML = o.innerHTML, this.util.removeItem(o));
                    const a = (e.getAttribute("data-size") || e.getAttribute("data-origin") || "").split(",");
                    this.plugins.video.applySize.call(this, a[0], a[1]), n.parentNode.replaceChild(l, n), s && n.parentNode.insertBefore(s, l.nextElementSibling), this.plugins.fileManager.setInfo.call(this, "video", e, this.functions.onVideoUpload, null, !0)
                },
                onModifyMode: function(e, t) {
                    const n = this.context.video;
                    n._element = e, n._cover = this.util.getParentElement(e, "FIGURE"), n._container = this.util.getParentElement(e, this.util.isMediaComponent), n._align = e.getAttribute("data-align") || "none", t && (n._element_w = t.w, n._element_h = t.h, n._element_t = t.t, n._element_l = t.l);
                    let i = n._element.getAttribute("data-size") || n._element.getAttribute("data-origin");
                    i ? (i = i.split(","), n._origin_w = i[0], n._origin_h = i[1]) : t && (n._origin_w = t.w, n._origin_h = t.h)
                },
                openModify: function(e) {
                    const t = this.context.video;
                    if (t.videoUrlFile && (t._linkValue = t.preview.textContent = t.videoUrlFile.value = t._element.src || (t._element.querySelector("source") || "").src || ""), t.modal.querySelector('input[name="suneditor_video_radio"][value="' + t._align + '"]').checked = !0, t._resizing) {
                        this.plugins.resizing._module_setModifyInputSize.call(this, t, this.plugins.video);
                        const e = t._videoRatio = this.plugins.resizing._module_getSizeY.call(this, t);
                        this.plugins.video.setVideoRatioSelect.call(this, e) || (t.inputY.value = t._onlyPercentage ? this.util.getNumber(e, 2) : e)
                    }
                    e || this.plugins.dialog.open.call(this, "video", !0)
                },
                setVideoRatioSelect: function(e) {
                    let t = !1;
                    const n = this.context.video,
                        i = n.videoRatioOption.options;
                    /%$/.test(e) || n._onlyPercentage ? e = this.util.getNumber(e, 2) / 100 + "" : (!this.util.isNumber(e) || 1 * e >= 1) && (e = ""), n.inputY.placeholder = "";
                    for (let l = 0, o = i.length; l < o; l++) i[l].value === e ? (t = i[l].selected = !0, n.inputY.placeholder = e ? 100 * e + "%" : "") : i[l].selected = !1;
                    return t
                },
                checkFileInfo: function() {
                    this.plugins.fileManager.checkInfo.call(this, "video", ["iframe", "video"], this.functions.onVideoUpload, this.plugins.video._update_videoCover.bind(this), !0)
                },
                resetFileInfo: function() {
                    this.plugins.fileManager.resetInfo.call(this, "video", this.functions.onVideoUpload)
                },
                sizeRevert: function() {
                    this.plugins.resizing._module_sizeRevert.call(this, this.context.video)
                },
                applySize: function(e, t) {
                    const n = this.context.video;
                    return e || (e = n.inputX.value || this.context.option.videoWidth), t || (t = n.inputY.value || this.context.option.videoHeight), n._onlyPercentage || /%$/.test(e) || !e ? (this.plugins.video.setPercentSize.call(this, e || "100%", t || (/%$/.test(n._videoRatio) ? n._videoRatio : n._defaultRatio)), !0) : (e && "auto" !== e || t && "auto" !== t ? this.plugins.video.setSize.call(this, e, t || n._videoRatio || n._defaultRatio, !1) : this.plugins.video.setAutoSize.call(this), !1)
                },
                setSize: function(e, t, n, i) {
                    const l = this.context.video,
                        o = /^(rw|lw)$/.test(i),
                        s = /^(th|bh)$/.test(i);
                    s || (e = this.util.getNumber(e, 0)), o || (t = this.util.isNumber(t) ? t + l.sizeUnit : t || ""), s || (l._element.style.width = e ? e + l.sizeUnit : ""), o || (l._cover.style.paddingBottom = l._cover.style.height = t), s || /%$/.test(e) || (l._cover.style.width = "", l._container.style.width = ""), o || /%$/.test(t) ? l._element.style.height = "" : l._element.style.height = t, n || l._element.removeAttribute("data-percentage"), this.plugins.resizing._module_saveCurrentSize.call(this, l)
                },
                setAutoSize: function() {
                    this.plugins.video.setPercentSize.call(this, 100, this.context.video._defaultRatio)
                },
                setOriginSize: function(e) {
                    const t = this.context.video;
                    t._element.removeAttribute("data-percentage"), this.plugins.resizing.resetTransform.call(this, t._element), this.plugins.video.cancelPercentAttr.call(this);
                    const n = ((e ? t._element.getAttribute("data-size") : "") || t._element.getAttribute("data-origin") || "").split(",");
                    if (n) {
                        const e = n[0],
                            i = n[1];
                        t._onlyPercentage || /%$/.test(e) && (/%$/.test(i) || !/\d/.test(i)) ? this.plugins.video.setPercentSize.call(this, e, i) : this.plugins.video.setSize.call(this, e, i), this.plugins.resizing._module_saveCurrentSize.call(this, t)
                    }
                },
                setPercentSize: function(e, t) {
                    const n = this.context.video;
                    t = !t || /%$/.test(t) || this.util.getNumber(t, 0) ? this.util.isNumber(t) ? t + n.sizeUnit : t || n._defaultRatio : this.util.isNumber(t) ? t + "%" : t, n._container.style.width = this.util.isNumber(e) ? e + "%" : e, n._container.style.height = "", n._cover.style.width = "100%", n._cover.style.height = t, n._cover.style.paddingBottom = t, n._element.style.width = "100%", n._element.style.height = "100%", n._element.style.maxWidth = "", "center" === n._align && this.plugins.video.setAlign.call(this, null, null, null, null), n._element.setAttribute("data-percentage", e + "," + t), this.plugins.resizing._module_saveCurrentSize.call(this, n)
                },
                cancelPercentAttr: function() {
                    const e = this.context.video;
                    e._cover.style.width = "", e._cover.style.height = "", e._cover.style.paddingBottom = "", e._container.style.width = "", e._container.style.height = "", this.util.removeClass(e._container, this.context.video._floatClassRegExp), this.util.addClass(e._container, "__se__float-" + e._align), "center" === e._align && this.plugins.video.setAlign.call(this, null, null, null, null)
                },
                setAlign: function(e, t, n, i) {
                    const l = this.context.video;
                    e || (e = l._align), t || (t = l._element), n || (n = l._cover), i || (i = l._container), n.style.margin = e && "none" !== e ? "auto" : "0", /%$/.test(t.style.width) && "center" === e ? (i.style.minWidth = "100%", n.style.width = i.style.width, n.style.height = n.style.height, n.style.paddingBottom = /%$/.test(n.style.height) ? this.util.getNumber(this.util.getNumber(n.style.height, 2) / 100 * this.util.getNumber(n.style.width, 2), 2) + "%" : n.style.height) : (i.style.minWidth = "", n.style.width = this.context.resizing._rotateVertical ? t.style.height || t.offsetHeight : t.style.width || "100%", n.style.paddingBottom = n.style.height), this.util.hasClass(i, "__se__float-" + e) || (this.util.removeClass(i, l._floatClassRegExp), this.util.addClass(i, "__se__float-" + e)), t.setAttribute("data-align", e)
                },
                resetAlign: function() {
                    const e = this.context.video;
                    e._element.setAttribute("data-align", ""), e._align = "none", e._cover.style.margin = "0", this.util.removeClass(e._container, e._floatClassRegExp)
                },
                init: function() {
                    const e = this.context.video;
                    e.videoInputFile && (e.videoInputFile.value = ""), e.videoUrlFile && (e._linkValue = e.preview.textContent = e.videoUrlFile.value = ""), e.videoInputFile && e.videoUrlFile && (e.videoUrlFile.removeAttribute("disabled"), e.preview.style.textDecoration = ""), e._origin_w = this.context.option.videoWidth, e._origin_h = this.context.option.videoHeight, e.modal.querySelector('input[name="suneditor_video_radio"][value="none"]').checked = !0, e._resizing && (e.inputX.value = this.context.option.videoWidth === e._defaultSizeX ? "" : this.context.option.videoWidth, e.inputY.value = this.context.option.videoHeight === e._defaultSizeY ? "" : this.context.option.videoHeight, e.proportion.checked = !0, e.proportion.disabled = !0, this.plugins.video.setVideoRatioSelect.call(this, e._defaultRatio))
                }
            },
            b = {
                name: "audio",
                display: "dialog",
                add: function(e) {
                    e.addModule([r.a, u.a, m.a]);
                    const t = e.context,
                        n = t.audio = {
                            _infoList: [],
                            _infoIndex: 0,
                            _uploadFileLength: 0,
                            focusElement: null,
                            targetSelect: null,
                            _origin_w: t.option.audioWidth,
                            _origin_h: t.option.audioHeight,
                            _linkValue: "",
                            _element: null,
                            _cover: null,
                            _container: null
                        };
                    let i = this.setDialog.call(e);
                    n.modal = i, n.audioInputFile = i.querySelector("._se_audio_files"), n.audioUrlFile = i.querySelector(".se-input-url"), n.focusElement = n.audioInputFile || n.audioUrlFile, n.preview = i.querySelector(".se-link-preview");
                    let l = this.setController.call(e);
                    n.controller = l, l.addEventListener("mousedown", e.eventStop), i.querySelector(".se-btn-primary").addEventListener("click", this.submit.bind(e)), n.audioInputFile && i.querySelector(".se-dialog-files-edge-button").addEventListener("click", this._removeSelectedFiles.bind(n.audioInputFile, n.audioUrlFile, n.preview)), n.audioInputFile && n.audioUrlFile && n.audioInputFile.addEventListener("change", this._fileInputChange.bind(n)), l.addEventListener("click", this.onClick_controller.bind(e)), n.audioUrlFile && n.audioUrlFile.addEventListener("input", this._onLinkPreview.bind(n.preview, n, t.options.linkProtocol)), t.dialog.modal.appendChild(i), t.element.relative.appendChild(l), i = null, l = null
                },
                setDialog: function() {
                    const e = this.context.option,
                        t = this.lang,
                        n = this.util.createElement("DIV");
                    n.className = "se-dialog-content", n.style.display = "none";
                    let i = '<form method="post" enctype="multipart/form-data"><div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" aria-label="Close" title="' + t.dialogBox.close + '">' + this.icons.cancel + '</button><span class="se-modal-title">' + t.dialogBox.audioBox.title + '</span></div><div class="se-dialog-body">';
                    return e.audioFileInput && (i += '<div class="se-dialog-form"><label>' + t.dialogBox.audioBox.file + '</label><div class="se-dialog-form-files"><input class="se-input-form _se_audio_files" type="file" accept="audio/"' + e.audioAccept + (e.audioMultipleFile ? ' multiple="multiple"' : "") + '/><button type="button" data-command="filesRemove" class="se-btn se-dialog-files-edge-button se-file-remove" title="' + t.controller.remove + '">' + this.icons.cancel + "</button></div></div>"), e.audioUrlInput && (i += '<div class="se-dialog-form"><label>' + t.dialogBox.audioBox.url + '</label><input class="se-input-form se-input-url" type="text" /><pre class="se-link-preview"></pre></div>'), i += '</div><div class="se-dialog-footer"><button type="submit" class="se-btn-primary" title="' + t.dialogBox.submitButton + '"><span>' + t.dialogBox.submitButton + "</span></button></div></form>", n.innerHTML = i, n
                },
                setController: function() {
                    const e = this.lang,
                        t = this.icons,
                        n = this.util.createElement("DIV");
                    return n.className = "se-controller se-controller-link", n.innerHTML = '<div class="se-arrow se-arrow-up"></div><div class="link-content"><div class="se-btn-group"><button type="button" data-command="update" tabindex="-1" class="se-tooltip">' + t.edit + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + e.controller.edit + '</span></span></button><button type="button" data-command="delete" tabindex="-1" class="se-tooltip">' + t.delete + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + e.controller.remove + "</span></span></button></div></div>", n
                },
                _fileInputChange: function() {
                    this.audioInputFile.value ? (this.audioUrlFile.setAttribute("disabled", !0), this.preview.style.textDecoration = "line-through") : (this.audioUrlFile.removeAttribute("disabled"), this.preview.style.textDecoration = "")
                },
                _removeSelectedFiles: function(e, t) {
                    this.value = "", e && (e.removeAttribute("disabled"), t.style.textDecoration = "")
                },
                _createAudioTag: function() {
                    const e = this.util.createElement("AUDIO");
                    this.plugins.audio._setTagAttrs.call(this, e);
                    const t = this.context.audio._origin_w,
                        n = this.context.audio._origin_h;
                    return e.setAttribute("origin-size", t + "," + n), e.style.cssText = (t ? "width:" + t + "; " : "") + (n ? "height:" + n + ";" : ""), e
                },
                _setTagAttrs: function(e) {
                    e.setAttribute("controls", !0);
                    const t = this.context.options.audioTagAttrs;
                    if (t)
                        for (let n in t) this.util.hasOwn(t, n) && e.setAttribute(n, t[n])
                },
                _onLinkPreview: function(e, t, n) {
                    const i = n.target.value.trim();
                    e._linkValue = this.textContent = i ? t && -1 === i.indexOf("://") && 0 !== i.indexOf("#") ? t + i : -1 === i.indexOf("://") ? "/" + i : i : ""
                },
                fileTags: ["audio"],
                select: function(e) {
                    this.plugins.audio.onModifyMode.call(this, e)
                },
                destroy: function(e) {
                    e = e || this.context.audio._element;
                    const t = this.util.getParentElement(e, this.util.isComponent) || e,
                        n = 1 * e.getAttribute("data-index"),
                        i = t.previousElementSibling || t.nextElementSibling,
                        l = t.parentNode;
                    this.util.removeItem(t), this.plugins.audio.init.call(this), this.controllersOff(), l !== this.context.element.wysiwyg && this.util.removeItemAllParents(l, (function(e) {
                        return 0 === e.childNodes.length
                    }), null), this.focusEdge(i), this.plugins.fileManager.deleteInfo.call(this, "audio", n, this.functions.onAudioUpload), this.history.push(!1)
                },
                checkFileInfo: function() {
                    this.plugins.fileManager.checkInfo.call(this, "audio", ["audio"], this.functions.onAudioUpload, this.plugins.audio.updateCover.bind(this), !1)
                },
                resetFileInfo: function() {
                    this.plugins.fileManager.resetInfo.call(this, "audio", this.functions.onAudioUpload)
                },
                on: function(e) {
                    const t = this.context.audio;
                    e ? t._element ? (this.context.dialog.updateModal = !0, t._linkValue = t.preview.textContent = t.audioUrlFile.value = t._element.src, t.audioInputFile && this.context.options.audioMultipleFile && t.audioInputFile.removeAttribute("multiple")) : t.audioInputFile && this.context.options.audioMultipleFile && t.audioInputFile.removeAttribute("multiple") : (this.plugins.audio.init.call(this), t.audioInputFile && this.context.options.audioMultipleFile && t.audioInputFile.setAttribute("multiple", "multiple"))
                },
                open: function() {
                    this.plugins.dialog.open.call(this, "audio", "audio" === this.currentControllerName)
                },
                submit: function(e) {
                    const t = this.context.audio;
                    e.preventDefault(), e.stopPropagation();
                    try {
                        t.audioInputFile && t.audioInputFile.files.length > 0 ? (this.showLoading(), this.plugins.audio.submitAction.call(this, t.audioInputFile.files)) : t.audioUrlFile && t._linkValue.length > 0 && (this.showLoading(), this.plugins.audio.setupUrl.call(this, t._linkValue))
                    } catch (e) {
                        throw this.closeLoading(), Error('[SUNEDITOR.audio.submit.fail] cause : "' + e.message + '"')
                    } finally {
                        this.plugins.dialog.close.call(this)
                    }
                    return !1
                },
                submitAction: function(e) {
                    if (0 === e.length) return;
                    let t = 0,
                        n = [];
                    for (let i = 0, l = e.length; i < l; i++) /audio/i.test(e[i].type) && (n.push(e[i]), t += e[i].size);
                    const i = this.context.option.audioUploadSizeLimit;
                    if (i > 0) {
                        let e = 0;
                        const n = this.context.audio._infoList;
                        for (let t = 0, i = n.length; t < i; t++) e += 1 * n[t].size;
                        if (t + e > i) {
                            this.closeLoading();
                            const n = "[SUNEDITOR.audioUpload.fail] Size of uploadable total audios: " + i / 1e3 + "KB";
                            return void(("function" !== this.functions.onAudioUploadError || this.functions.onAudioUploadError(n, {
                                limitSize: i,
                                currentSize: e,
                                uploadSize: t
                            }, this)) && this.functions.noticeOpen(n))
                        }
                    }
                    const l = this.context.audio;
                    l._uploadFileLength = n.length;
                    const o = {
                        isUpdate: this.context.dialog.updateModal,
                        element: l._element
                    };
                    if ("function" == typeof this.functions.onAudioUploadBefore) {
                        const e = this.functions.onAudioUploadBefore(n, o, this, function(e) {
                            e && this._w.Array.isArray(e.result) ? this.plugins.audio.register.call(this, o, e) : this.plugins.audio.upload.call(this, o, e)
                        }.bind(this));
                        if (void 0 === e) return;
                        if (!e) return void this.closeLoading();
                        "object" == typeof e && e.length > 0 && (n = e)
                    }
                    this.plugins.audio.upload.call(this, o, n)
                },
                error: function(e, t) {
                    if (this.closeLoading(), "function" != typeof this.functions.onAudioUploadError || this.functions.onAudioUploadError(e, t, this)) throw this.functions.noticeOpen(e), Error("[SUNEDITOR.plugin.audio.exception] response: " + e)
                },
                upload: function(e, t) {
                    if (!t) return void this.closeLoading();
                    if ("string" == typeof t) return void this.plugins.audio.error.call(this, t, null);
                    const n = this.context.option.audioUploadUrl,
                        i = this.context.dialog.updateModal ? 1 : t.length,
                        l = new FormData;
                    for (let e = 0; e < i; e++) l.append("file-" + e, t[e]);
                    this.plugins.fileManager.upload.call(this, n, this.context.option.audioUploadHeader, l, this.plugins.audio.callBack_upload.bind(this, e), this.functions.onAudioUploadError)
                },
                callBack_upload: function(e, t) {
                    if ("function" == typeof this.functions.audioUploadHandler) this.functions.audioUploadHandler(t, e, this);
                    else {
                        const n = JSON.parse(t.responseText);
                        n.errorMessage ? this.plugins.audio.error.call(this, n.errorMessage, n) : this.plugins.audio.register.call(this, e, n)
                    }
                },
                register: function(e, t) {
                    const n = t.result;
                    for (let t, i, l = 0, o = n.length; l < o; l++) i = e.isUpdate ? e.element : this.plugins.audio._createAudioTag.call(this), t = {
                        name: n[l].name,
                        size: n[l].size
                    }, this.plugins.audio.create_audio.call(this, i, n[l].url, t, e.isUpdate);
                    this.closeLoading()
                },
                setupUrl: function(e) {
                    try {
                        if (0 === e.length) return !1;
                        this.plugins.audio.create_audio.call(this, this.plugins.audio._createAudioTag.call(this), e, null, this.context.dialog.updateModal)
                    } catch (e) {
                        throw Error('[SUNEDITOR.audio.audio.fail] cause : "' + e.message + '"')
                    } finally {
                        this.closeLoading()
                    }
                },
                create_audio: function(e, t, n, i) {
                    const l = this.context.audio;
                    if (i) {
                        if (l._element && (e = l._element), !e || e.src === t) return void this.selectComponent(e, "audio");
                        e.src = t
                    } else {
                        e.src = t;
                        const n = this.plugins.component.set_cover.call(this, e),
                            i = this.plugins.component.set_container.call(this, n, "");
                        if (!this.insertComponent(i, !1, !0, !1)) return void this.focus()
                    }
                    this.plugins.fileManager.setInfo.call(this, "audio", e, this.functions.onAudioUpload, n, !1), this.selectComponent(e, "audio"), i && this.history.push(!1)
                },
                updateCover: function(e) {
                    const t = this.context.audio;
                    this.plugins.audio._setTagAttrs.call(this, e);
                    const n = this.util.getParentElement(e, this.util.isMediaComponent) || this.util.getParentElement(e, function(e) {
                        return this.isWysiwygDiv(e.parentNode)
                    }.bind(this.util));
                    t._element = e = e.cloneNode(!1);
                    const i = this.plugins.component.set_cover.call(this, e),
                        l = this.plugins.component.set_container.call(this, i, "se-audio-container");
                    n.parentNode.replaceChild(l, n), this.plugins.fileManager.setInfo.call(this, "audio", e, this.functions.onAudioUpload, null, !1)
                },
                onModifyMode: function(e) {
                    const t = this.context.audio,
                        n = t.controller,
                        i = this.util.getOffset(e, this.context.element.wysiwygFrame);
                    n.style.top = i.top + e.offsetHeight + 10 + "px", n.style.left = i.left - this.context.element.wysiwygFrame.scrollLeft + "px", n.style.display = "block";
                    const l = this.context.element.wysiwygFrame.offsetWidth - (n.offsetLeft + n.offsetWidth);
                    l < 0 ? (n.style.left = n.offsetLeft + l + "px", n.firstElementChild.style.left = 20 - l + "px") : n.firstElementChild.style.left = "20px", this.controllersOn(n, e, this.plugins.audio.onControllerOff.bind(this, e), "audio"), this.util.addClass(e, "active"), t._element = e, t._cover = this.util.getParentElement(e, "FIGURE"), t._container = this.util.getParentElement(e, this.util.isComponent)
                },
                openModify: function(e) {
                    if (this.context.audio.audioUrlFile) {
                        const e = this.context.audio;
                        e._linkValue = e.preview.textContent = e.audioUrlFile.value = e._element.src
                    }
                    e || this.plugins.dialog.open.call(this, "audio", !0)
                },
                onClick_controller: function(e) {
                    e.stopPropagation();
                    const t = e.target.getAttribute("data-command");
                    t && (e.preventDefault(), /update/.test(t) ? this.plugins.audio.openModify.call(this, !1) : this.plugins.audio.destroy.call(this, this.context.audio._element), this.controllersOff())
                },
                onControllerOff: function(e) {
                    this.util.removeClass(e, "active"), this.context.audio.controller.style.display = "none"
                },
                init: function() {
                    if (this.context.dialog.updateModal) return;
                    const e = this.context.audio;
                    e.audioInputFile && (e.audioInputFile.value = ""), e.audioUrlFile && (e._linkValue = e.preview.textContent = e.audioUrlFile.value = ""), e.audioInputFile && e.audioUrlFile && (e.audioUrlFile.removeAttribute("disabled"), e.preview.style.textDecoration = ""), e._element = null
                }
            },
            v = {
                name: "math",
                display: "dialog",
                add: function(e) {
                    e.addModule([r.a]);
                    const t = e.context;
                    t.math = {
                        focusElement: null,
                        previewElement: null,
                        fontSizeElement: null,
                        _mathExp: null
                    };
                    let n = this.setDialog.call(e);
                    t.math.modal = n, t.math.focusElement = n.querySelector(".se-math-exp"), t.math.previewElement = n.querySelector(".se-math-preview"), t.math.fontSizeElement = n.querySelector(".se-math-size"), t.math.focusElement.addEventListener("keyup", this._renderMathExp.bind(e, t.math), !1), t.math.focusElement.addEventListener("change", this._renderMathExp.bind(e, t.math), !1), t.math.fontSizeElement.addEventListener("change", function(e) {
                        this.fontSize = e.target.value
                    }.bind(t.math.previewElement.style), !1);
                    let i = this.setController_MathButton.call(e);
                    t.math.mathController = i, t.math._mathExp = null, i.addEventListener("mousedown", e.eventStop), n.querySelector(".se-btn-primary").addEventListener("click", this.submit.bind(e), !1), i.addEventListener("click", this.onClick_mathController.bind(e)), t.dialog.modal.appendChild(n), t.element.relative.appendChild(i), n = null, i = null
                },
                setDialog: function() {
                    const e = this.lang,
                        t = this.util.createElement("DIV");
                    return t.className = "se-dialog-content", t.style.display = "none", t.innerHTML = '<form><div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" aria-label="Close" title="' + e.dialogBox.close + '">' + this.icons.cancel + '</button><span class="se-modal-title">' + e.dialogBox.mathBox.title + '</span></div><div class="se-dialog-body"><div class="se-dialog-form"><label>' + e.dialogBox.mathBox.inputLabel + ' (<a href="https://katex.org/docs/supported.html" target="_blank">KaTeX</a>)</label><textarea class="se-input-form se-math-exp" type="text"></textarea></div><div class="se-dialog-form"><label>' + e.dialogBox.mathBox.fontSizeLabel + '</label><select class="se-input-select se-math-size"><option value="1em">1</option><option value="1.5em">1.5</option><option value="2em">2</option><option value="2.5em">2.5</option></select></div><div class="se-dialog-form"><label>' + e.dialogBox.mathBox.previewLabel + '</label><p class="se-math-preview"></p></div></div><div class="se-dialog-footer"><button type="submit" class="se-btn-primary" title="' + e.dialogBox.submitButton + '"><span>' + e.dialogBox.submitButton + "</span></button></div></form>", t
                },
                setController_MathButton: function() {
                    const e = this.lang,
                        t = this.util.createElement("DIV");
                    return t.className = "se-controller se-controller-link", t.innerHTML = '<div class="se-arrow se-arrow-up"></div><div class="link-content"><div class="se-btn-group"><button type="button" data-command="update" tabindex="-1" class="se-btn se-tooltip">' + this.icons.edit + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + e.controller.edit + '</span></span></button><button type="button" data-command="delete" tabindex="-1" class="se-btn se-tooltip">' + this.icons.delete + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + e.controller.remove + "</span></span></button></div></div>", t
                },
                open: function() {
                    this.plugins.dialog.open.call(this, "math", "math" === this.currentControllerName)
                },
                managedTags: function() {
                    return {
                        className: "katex",
                        method: function(e) {
                            if (!e.getAttribute("data-exp")) return;
                            const t = this._d.createRange().createContextualFragment(this.plugins.math._renderer.call(this, this.util.HTMLDecoder(e.getAttribute("data-exp"))));
                            e.innerHTML = t.querySelector(".katex").innerHTML
                        }
                    }
                },
                _renderer: function(e) {
                    const t = this.context.option.katex;
                    return t.src.renderToString(e, t.options)
                },
                _renderMathExp: function(e, t) {
                    e.previewElement.innerHTML = this.plugins.math._renderer.call(this, t.target.value)
                },
                submit: function(e) {
                    this.showLoading(), e.preventDefault(), e.stopPropagation();
                    const t = function() {
                        if (0 === this.context.math.focusElement.value.trim().length) return !1;
                        const e = this.context.math,
                            t = e.focusElement.value,
                            n = e.previewElement.querySelector(".katex");
                        if (!n) return !1;
                        if (n.className = "__se__katex " + n.className, n.setAttribute("contenteditable", !1), n.setAttribute("data-exp", this.util.HTMLEncoder(t)), n.setAttribute("data-font-size", e.fontSizeElement.value), n.style.fontSize = e.fontSizeElement.value, this.context.dialog.updateModal) {
                            const t = this.util.getParentElement(e._mathExp, ".katex");
                            t.parentNode.replaceChild(n, t), this.setRange(n, 0, n, 1)
                        } else {
                            const e = this.getSelectedElements();
                            if (e.length > 1) {
                                const t = this.util.createElement(e[0].nodeName);
                                if (t.appendChild(n), !this.insertNode(t, null, !0)) return !1
                            } else if (!this.insertNode(n, null, !0)) return !1;
                            const t = this.util.createTextNode(this.util.zeroWidthSpace);
                            n.parentNode.insertBefore(t, n.nextSibling), this.setRange(n, 0, n, 1)
                        }
                        return e.focusElement.value = "", e.fontSizeElement.value = "1em", e.previewElement.style.fontSize = "1em", e.previewElement.innerHTML = "", !0
                    }.bind(this);
                    try {
                        t() && (this.plugins.dialog.close.call(this), this.history.push(!1))
                    } catch (e) {
                        this.plugins.dialog.close.call(this)
                    } finally {
                        this.closeLoading()
                    }
                    return !1
                },
                active: function(e) {
                    if (e) {
                        if (e.getAttribute("data-exp")) return this.controllerArray.indexOf(this.context.math.mathController) < 0 && (this.setRange(e, 0, e, 1), this.plugins.math.call_controller.call(this, e)), !0
                    } else this.controllerArray.indexOf(this.context.math.mathController) > -1 && this.controllersOff();
                    return !1
                },
                on: function(e) {
                    if (e) {
                        const e = this.context.math;
                        if (e._mathExp) {
                            const t = this.util.HTMLDecoder(e._mathExp.getAttribute("data-exp")),
                                n = e._mathExp.getAttribute("data-font-size") || "1em";
                            this.context.dialog.updateModal = !0, e.focusElement.value = t, e.fontSizeElement.value = n, e.previewElement.innerHTML = this.plugins.math._renderer.call(this, t), e.previewElement.style.fontSize = n
                        }
                    } else this.plugins.math.init.call(this)
                },
                call_controller: function(e) {
                    this.context.math._mathExp = e;
                    const t = this.context.math.mathController,
                        n = this.util.getOffset(e, this.context.element.wysiwygFrame);
                    t.style.top = n.top + e.offsetHeight + 10 + "px", t.style.left = n.left - this.context.element.wysiwygFrame.scrollLeft + "px", t.style.display = "block";
                    const i = this.context.element.wysiwygFrame.offsetWidth - (t.offsetLeft + t.offsetWidth);
                    i < 0 ? (t.style.left = t.offsetLeft + i + "px", t.firstElementChild.style.left = 20 - i + "px") : t.firstElementChild.style.left = "20px", this.controllersOn(t, e, "math")
                },
                onClick_mathController: function(e) {
                    e.stopPropagation();
                    const t = e.target.getAttribute("data-command") || e.target.parentNode.getAttribute("data-command");
                    t && (e.preventDefault(), /update/.test(t) ? (this.context.math.focusElement.value = this.util.HTMLDecoder(this.context.math._mathExp.getAttribute("data-exp")), this.plugins.dialog.open.call(this, "math", !0)) : (this.util.removeItem(this.context.math._mathExp), this.context.math._mathExp = null, this.focus(), this.history.push(!1)), this.controllersOff())
                },
                init: function() {
                    const e = this.context.math;
                    e.mathController.style.display = "none", e._mathExp = null, e.focusElement.value = "", e.previewElement.innerHTML = ""
                }
            },
            y = n("JhlZ"),
            C = n.n(y),
            w = {
                blockquote: {
                    name: "blockquote",
                    display: "command",
                    add: function(e, t) {
                        e.context.blockquote = {
                            targetButton: t,
                            tag: e.util.createElement("BLOCKQUOTE")
                        }
                    },
                    active: function(e) {
                        if (e) {
                            if (/blockquote/i.test(e.nodeName)) return this.util.addClass(this.context.blockquote.targetButton, "active"), !0
                        } else this.util.removeClass(this.context.blockquote.targetButton, "active");
                        return !1
                    },
                    action: function() {
                        const e = this.util.getParentElement(this.getSelectionNode(), "blockquote");
                        e ? this.detachRangeFormatElement(e, null, null, !1, !1) : this.applyRangeFormatElement(this.context.blockquote.tag.cloneNode(!1))
                    }
                },
                align: {
                    name: "align",
                    display: "submenu",
                    add: function(e, t) {
                        const n = e.icons,
                            i = e.context;
                        i.align = {
                            targetButton: t,
                            _alignList: null,
                            currentAlign: "",
                            icons: {
                                justify: n.align_justify,
                                left: n.align_left,
                                right: n.align_right,
                                center: n.align_center
                            }
                        };
                        let l = this.setSubmenu.call(e),
                            o = l.querySelector("ul");
                        o.addEventListener("click", this.pickup.bind(e)), i.align._alignList = o.querySelectorAll("li button"), e.initMenuTarget(this.name, t, l), l = null, o = null
                    },
                    setSubmenu: function() {
                        const e = this.lang,
                            t = this.icons,
                            n = this.util.createElement("DIV");
                        return n.className = "se-submenu se-list-layer se-list-align", n.innerHTML = '<div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="se-btn-list se-btn-align" data-command="justifyleft" data-value="left" title="' + e.toolbar.alignLeft + '"><span class="se-list-icon">' + t.align_left + "</span>" + e.toolbar.alignLeft + '</button></li><li><button type="button" class="se-btn-list se-btn-align" data-command="justifycenter" data-value="center" title="' + e.toolbar.alignCenter + '"><span class="se-list-icon">' + t.align_center + "</span>" + e.toolbar.alignCenter + '</button></li><li><button type="button" class="se-btn-list se-btn-align" data-command="justifyright" data-value="right" title="' + e.toolbar.alignRight + '"><span class="se-list-icon">' + t.align_right + "</span>" + e.toolbar.alignRight + '</button></li><li><button type="button" class="se-btn-list se-btn-align" data-command="justifyfull" data-value="justify" title="' + e.toolbar.alignJustify + '"><span class="se-list-icon">' + t.align_justify + "</span>" + e.toolbar.alignJustify + "</button></li></ul></div>", n
                    },
                    active: function(e) {
                        const t = this.context.align.targetButton,
                            n = t.firstElementChild;
                        if (e) {
                            if (this.util.isFormatElement(e)) {
                                const i = e.style.textAlign;
                                if (i) return this.util.changeElement(n, this.context.align.icons[i]), t.setAttribute("data-focus", i), !0
                            }
                        } else this.util.changeElement(n, this.context.align.icons.left), t.removeAttribute("data-focus");
                        return !1
                    },
                    on: function() {
                        const e = this.context.align,
                            t = e._alignList,
                            n = e.targetButton.getAttribute("data-focus") || "left";
                        if (n !== e.currentAlign) {
                            for (let e = 0, i = t.length; e < i; e++) n === t[e].getAttribute("data-value") ? this.util.addClass(t[e], "active") : this.util.removeClass(t[e], "active");
                            e.currentAlign = n
                        }
                    },
                    pickup: function(e) {
                        e.preventDefault(), e.stopPropagation();
                        let t = e.target,
                            n = null;
                        for (; !n && !/UL/i.test(t.tagName);) n = t.getAttribute("data-value"), t = t.parentNode;
                        if (!n) return;
                        const i = this.getSelectedElements();
                        for (let e = 0, t = i.length; e < t; e++) this.util.setStyle(i[e], "textAlign", "left" === n ? "" : n);
                        this.effectNode = null, this.submenuOff(), this.focus(), this.history.push(!1)
                    }
                },
                font: {
                    name: "font",
                    display: "submenu",
                    add: function(e, t) {
                        const n = e.context;
                        n.font = {
                            targetText: t.querySelector(".txt"),
                            targetTooltip: t.parentNode.querySelector(".se-tooltip-text"),
                            _fontList: null,
                            currentFont: ""
                        };
                        let i = this.setSubmenu.call(e);
                        i.querySelector(".se-list-inner").addEventListener("click", this.pickup.bind(e)), n.font._fontList = i.querySelectorAll("ul li button"), e.initMenuTarget(this.name, t, i), i = null
                    },
                    setSubmenu: function() {
                        const e = this.context.option,
                            t = this.lang,
                            n = this.util.createElement("DIV");
                        let i, l, o, s;
                        n.className = "se-submenu se-list-layer se-list-font-family";
                        let a = e.font ? e.font : ["Arial", "Comic Sans MS", "Courier New", "Impact", "Georgia", "tahoma", "Trebuchet MS", "Verdana"],
                            r = '<div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="default_value se-btn-list" title="' + t.toolbar.default+'">(' + t.toolbar.default+")</button></li>";
                        for (o = 0, s = a.length; o < s; o++) i = a[o], l = i.split(",")[0], r += '<li><button type="button" class="se-btn-list" data-value="' + i + '" data-txt="' + l + '" title="' + l + '" style="font-family:' + i + ';">' + l + "</button></li>";
                        return r += "</ul></div>", n.innerHTML = r, n
                    },
                    active: function(e) {
                        const t = this.context.font.targetText,
                            n = this.context.font.targetTooltip;
                        if (e) {
                            if (e.style && e.style.fontFamily.length > 0) {
                                const i = e.style.fontFamily.replace(/["']/g, "");
                                return this.util.changeTxt(t, i), this.util.changeTxt(n, i), !0
                            }
                        } else {
                            const e = this.lang.toolbar.font;
                            this.util.changeTxt(t, e), this.util.changeTxt(n, e)
                        }
                        return !1
                    },
                    on: function() {
                        const e = this.context.font,
                            t = e._fontList,
                            n = e.targetText.textContent;
                        if (n !== e.currentFont) {
                            for (let e = 0, i = t.length; e < i; e++) n === t[e].getAttribute("data-value") ? this.util.addClass(t[e], "active") : this.util.removeClass(t[e], "active");
                            e.currentFont = n
                        }
                    },
                    pickup: function(e) {
                        if (!/^BUTTON$/i.test(e.target.tagName)) return !1;
                        e.preventDefault(), e.stopPropagation();
                        const t = e.target.getAttribute("data-value");
                        if (t) {
                            const e = this.util.createElement("SPAN");
                            e.style.fontFamily = t, this.nodeChange(e, ["font-family"], null, null)
                        } else this.nodeChange(null, ["font-family"], ["span"], !0);
                        this.submenuOff()
                    }
                },
                fontSize: {
                    name: "fontSize",
                    display: "submenu",
                    add: function(e, t) {
                        const n = e.context;
                        n.fontSize = {
                            targetText: t.querySelector(".txt"),
                            _sizeList: null,
                            currentSize: ""
                        };
                        let i = this.setSubmenu.call(e),
                            l = i.querySelector("ul");
                        l.addEventListener("click", this.pickup.bind(e)), n.fontSize._sizeList = l.querySelectorAll("li button"), e.initMenuTarget(this.name, t, i), i = null, l = null
                    },
                    setSubmenu: function() {
                        const e = this.context.option,
                            t = this.lang,
                            n = this.util.createElement("DIV");
                        n.className = "se-submenu se-list-layer se-list-font-size";
                        const i = e.fontSize ? e.fontSize : [8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72];
                        let l = '<div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="default_value se-btn-list" title="' + t.toolbar.default+'">(' + t.toolbar.default+")</button></li>";
                        for (let t, n = 0, o = e.fontSizeUnit, s = i.length; n < s; n++) t = i[n], l += '<li><button type="button" class="se-btn-list" data-value="' + t + o + '" title="' + t + o + '" style="font-size:' + t + o + ';">' + t + "</button></li>";
                        return l += "</ul></div>", n.innerHTML = l, n
                    },
                    active: function(e) {
                        if (e) {
                            if (e.style && e.style.fontSize.length > 0) return this.util.changeTxt(this.context.fontSize.targetText, e.style.fontSize), !0
                        } else this.util.changeTxt(this.context.fontSize.targetText, this.lang.toolbar.fontSize);
                        return !1
                    },
                    on: function() {
                        const e = this.context.fontSize,
                            t = e._sizeList,
                            n = e.targetText.textContent;
                        if (n !== e.currentSize) {
                            for (let e = 0, i = t.length; e < i; e++) n === t[e].getAttribute("data-value") ? this.util.addClass(t[e], "active") : this.util.removeClass(t[e], "active");
                            e.currentSize = n
                        }
                    },
                    pickup: function(e) {
                        if (!/^BUTTON$/i.test(e.target.tagName)) return !1;
                        e.preventDefault(), e.stopPropagation();
                        const t = e.target.getAttribute("data-value");
                        if (t) {
                            const e = this.util.createElement("SPAN");
                            e.style.fontSize = t, this.nodeChange(e, ["font-size"], null, null)
                        } else this.nodeChange(null, ["font-size"], ["span"], !0);
                        this.submenuOff()
                    }
                },
                fontColor: l,
                hiliteColor: o,
                horizontalRule: {
                    name: "horizontalRule",
                    display: "submenu",
                    add: function(e, t) {
                        let n = this.setSubmenu.call(e);
                        n.querySelector("ul").addEventListener("click", this.horizontalRulePick.bind(e)), e.initMenuTarget(this.name, t, n), n = null
                    },
                    setSubmenu: function() {
                        const e = this.lang,
                            t = this.util.createElement("DIV");
                        return t.className = "se-submenu se-list-layer se-list-line", t.innerHTML = '<div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="se-btn-list btn_line" data-command="horizontalRule" data-value="solid" title="' + e.toolbar.hr_solid + '"><hr style="border-width: 1px 0 0; border-style: solid none none; border-color: black; border-image: initial; height: 1px;" /></button></li><li><button type="button" class="se-btn-list btn_line" data-command="horizontalRule" data-value="dotted" title="' + e.toolbar.hr_dotted + '"><hr style="border-width: 1px 0 0; border-style: dotted none none; border-color: black; border-image: initial; height: 1px;" /></button></li><li><button type="button" class="se-btn-list btn_line" data-command="horizontalRule" data-value="dashed" title="' + e.toolbar.hr_dashed + '"><hr style="border-width: 1px 0 0; border-style: dashed none none; border-color: black; border-image: initial; height: 1px;" /></button></li></ul></div>', t
                    },
                    appendHr: function(e) {
                        const t = this.util.createElement("HR");
                        return t.className = e, this.focus(), this.insertComponent(t, !1, !0, !1)
                    },
                    horizontalRulePick: function(e) {
                        e.preventDefault(), e.stopPropagation();
                        let t = e.target,
                            n = null;
                        for (; !n && !/UL/i.test(t.tagName);) n = t.getAttribute("data-value"), t = t.parentNode;
                        if (!n) return;
                        const i = this.plugins.horizontalRule.appendHr.call(this, "__se__" + n);
                        i && (this.setRange(i, 0, i, 0), this.submenuOff())
                    }
                },
                list: {
                    name: "list",
                    display: "submenu",
                    add: function(e, t) {
                        const n = e.context;
                        n.list = {
                            targetButton: t,
                            _list: null,
                            currentList: "",
                            icons: {
                                bullets: e.icons.list_bullets,
                                number: e.icons.list_number
                            }
                        };
                        let i = this.setSubmenu.call(e),
                            l = i.querySelector("ul");
                        l.addEventListener("click", this.pickup.bind(e)), n.list._list = l.querySelectorAll("li button"), e.initMenuTarget(this.name, t, i), i = null, l = null
                    },
                    setSubmenu: function() {
                        const e = this.lang,
                            t = this.util.createElement("DIV");
                        return t.className = "se-submenu se-list-layer", t.innerHTML = '<div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="se-btn-list se-tooltip" data-command="OL" title="' + e.toolbar.orderList + '">' + this.icons.list_number + '</button></li><li><button type="button" class="se-btn-list se-tooltip" data-command="UL" title="' + e.toolbar.unorderList + '">' + this.icons.list_bullets + "</button></li></ul></div>", t
                    },
                    active: function(e) {
                        const t = this.context.list.targetButton,
                            n = t.firstElementChild,
                            i = this.util;
                        if (e) {
                            if (i.isList(e)) {
                                const l = e.nodeName;
                                return t.setAttribute("data-focus", l), i.addClass(t, "active"), /UL/i.test(l) ? i.changeElement(n, this.context.list.icons.bullets) : i.changeElement(n, this.context.list.icons.number), !0
                            }
                        } else t.removeAttribute("data-focus"), i.changeElement(n, this.context.list.icons.number), i.removeClass(t, "active");
                        return !1
                    },
                    on: function() {
                        const e = this.context.list,
                            t = e._list,
                            n = e.targetButton.getAttribute("data-focus") || "";
                        if (n !== e.currentList) {
                            for (let e = 0, i = t.length; e < i; e++) n === t[e].getAttribute("data-command") ? this.util.addClass(t[e], "active") : this.util.removeClass(t[e], "active");
                            e.currentList = n
                        }
                    },
                    editList: function(e, t, n) {
                        let i = this.getRange(),
                            l = t || this.getSelectedElementsAndComponents(!1);
                        if (0 === l.length) {
                            if (t) return;
                            if (i = this.getRange_addLine(i), l = this.getSelectedElementsAndComponents(!1), 0 === l.length) return
                        }
                        const o = this.util;
                        o.sortByDepth(l, !0);
                        let s = l[0],
                            a = l[l.length - 1],
                            r = !o.isListCell(s) && !o.isComponent(s) || s.previousElementSibling ? s.previousElementSibling : s.parentNode.previousElementSibling,
                            c = !o.isListCell(a) && !o.isComponent(a) || a.nextElementSibling ? a.nextElementSibling : a.parentNode.nextElementSibling;
                        const d = {
                            sc: i.startContainer,
                            so: i.startOffset,
                            ec: i.endContainer,
                            eo: i.endOffset
                        };
                        let u = !0;
                        for (let e = 0, t = l.length; e < t; e++)
                            if (!o.isList(o.getRangeFormatElement(l[e], function(t) {
                                    return this.getRangeFormatElement(t) && t !== l[e]
                                }.bind(o)))) {
                                u = !1;
                                break
                            } if (!u || r && s.tagName === r.tagName && e === r.tagName.toUpperCase() || c && a.tagName === c.tagName && e === c.tagName.toUpperCase()) {
                            const t = r ? r.parentNode : r,
                                n = c ? c.parentNode : c;
                            r = t && !o.isWysiwygDiv(t) && t.nodeName === e ? t : r, c = n && !o.isWysiwygDiv(n) && n.nodeName === e ? n : c;
                            const i = r && r.tagName === e,
                                s = c && c.tagName === e;
                            let a = i ? r : o.createElement(e),
                                d = null,
                                u = null,
                                h = null,
                                g = null;
                            const p = function(e) {
                                return !this.isComponent(e) && !this.isList(e)
                            }.bind(o);
                            for (let t, n, s, r, c, g, m, f, _, b = 0, v = l.length; b < v; b++)
                                if (n = l[b], 0 !== n.childNodes.length || o._isIgnoreNodeChange(n)) {
                                    if (r = l[b + 1], c = n.parentNode, g = r ? r.parentNode : null, s = o.isListCell(n), _ = o.isRangeFormatElement(c) ? c : null, m = s && !o.isWysiwygDiv(c) ? c.parentNode : c, f = s && !o.isWysiwygDiv(c) ? !r || o.isListCell(m) ? c : c.nextSibling : n.nextSibling, t = o.createElement("LI"), o.copyFormatAttributes(t, n), o.isComponent(n)) {
                                        const e = /^HR$/i.test(n.nodeName);
                                        e || (t.innerHTML = "<br>"), t.innerHTML += n.outerHTML, e && (t.innerHTML += "<br>")
                                    } else {
                                        const e = n.childNodes;
                                        for (; e[0];) t.appendChild(e[0])
                                    }
                                    a.appendChild(t), r || (u = a), r && m === g && !o.isRangeFormatElement(f) || (d || (d = a), i && r && m === g || r && o.isList(g) && g === c || a.parentNode !== m && m.insertBefore(a, f)), o.removeItem(n), i && null === h && (h = a.children.length - 1), r && (o.getRangeFormatElement(g, p) !== o.getRangeFormatElement(c, p) || o.isList(g) && o.isList(c) && o.getElementDepth(g) !== o.getElementDepth(c)) && (a = o.createElement(e)), _ && 0 === _.children.length && o.removeItem(_)
                                } else o.removeItem(n);
                            h && (d = d.children[h]), s && (g = a.children.length - 1, a.innerHTML += c.innerHTML, u = a.children[g], o.removeItem(c))
                        } else {
                            if (n)
                                for (let e = 0, t = l.length; e < t; e++)
                                    for (let n = e - 1; n >= 0; n--)
                                        if (l[n].contains(l[e])) {
                                            l.splice(e, 1), e--, t--;
                                            break
                                        } const t = o.getRangeFormatElement(s),
                                i = t && t.tagName === e;
                            let a, r;
                            const c = function(e) {
                                return !this.isComponent(e)
                            }.bind(o);
                            i || (r = o.createElement(e));
                            for (let t, s, d = 0, u = l.length; d < u; d++) s = o.getRangeFormatElement(l[d], c), s && o.isList(s) && (t ? t !== s ? (n && o.isListCell(s.parentNode) ? this.plugins.list._detachNested.call(this, a.f) : this.detachRangeFormatElement(a.f[0].parentNode, a.f, r, !1, !0), s = l[d].parentNode, i || (r = o.createElement(e)), t = s, a = {
                                r: t,
                                f: [o.getParentElement(l[d], "LI")]
                            }) : a.f.push(o.getParentElement(l[d], "LI")) : (t = s, a = {
                                r: t,
                                f: [o.getParentElement(l[d], "LI")]
                            }), d === u - 1 && (n && o.isListCell(s.parentNode) ? this.plugins.list._detachNested.call(this, a.f) : this.detachRangeFormatElement(a.f[0].parentNode, a.f, r, !1, !0)))
                        }
                        return this.effectNode = null, d
                    },
                    _detachNested: function(e) {
                        const t = e[0],
                            n = e[e.length - 1],
                            i = n.nextElementSibling,
                            l = t.parentNode,
                            o = l.parentNode.nextElementSibling,
                            s = l.parentNode.parentNode;
                        for (let t = 0, n = e.length; t < n; t++) s.insertBefore(e[t], o);
                        if (i && l.children.length > 0) {
                            const e = l.cloneNode(!1),
                                t = l.childNodes,
                                o = this.util.getPositionIndex(i);
                            for (; t[o];) e.appendChild(t[o]);
                            n.appendChild(e)
                        }
                        0 === l.children.length && this.util.removeItem(l), this.util.mergeSameTags(s);
                        const a = this.util.getEdgeChildNodes(t, n);
                        return {
                            cc: t.parentNode,
                            sc: a.sc,
                            ec: a.ec
                        }
                    },
                    editInsideList: function(e, t) {
                        const n = (t = t || this.getSelectedElements().filter(function(e) {
                            return this.isListCell(e)
                        }.bind(this.util))).length;
                        if (0 === n || !e && !this.util.isListCell(t[0].previousElementSibling) && !this.util.isListCell(t[n - 1].nextElementSibling)) return {
                            sc: t[0],
                            so: 0,
                            ec: t[n - 1],
                            eo: 1
                        };
                        let i = t[0].parentNode,
                            l = t[n - 1],
                            o = null;
                        if (e) {
                            if (i !== l.parentNode && this.util.isList(l.parentNode.parentNode) && l.nextElementSibling)
                                for (l = l.nextElementSibling; l;) t.push(l), l = l.nextElementSibling;
                            o = this.plugins.list.editList.call(this, i.nodeName.toUpperCase(), t, !0)
                        } else {
                            let e = this.util.createElement(i.nodeName),
                                s = t[0].previousElementSibling,
                                a = l.nextElementSibling;
                            const r = {
                                s: null,
                                e: null,
                                sl: i,
                                el: i
                            };
                            for (let l, o = 0, c = n; o < c; o++) l = t[o], l.parentNode !== i && (this.plugins.list._insiedList.call(this, i, e, s, a, r), i = l.parentNode, e = this.util.createElement(i.nodeName)), s = l.previousElementSibling, a = l.nextElementSibling, e.appendChild(l);
                            this.plugins.list._insiedList.call(this, i, e, s, a, r);
                            const c = this.util.getNodeFromPath(r.s, r.sl),
                                d = this.util.getNodeFromPath(r.e, r.el);
                            o = {
                                sc: c,
                                so: 0,
                                ec: d,
                                eo: d.textContent.length
                            }
                        }
                        return o
                    },
                    _insiedList: function(e, t, n, i, l) {
                        let o = !1;
                        if (n && t.tagName === n.tagName) {
                            const e = t.children;
                            for (; e[0];) n.appendChild(e[0]);
                            t = n, o = !0
                        }
                        if (i && t.tagName === i.tagName) {
                            const e = i.children;
                            for (; e[0];) t.appendChild(e[0]);
                            const n = i.nextElementSibling;
                            i.parentNode.removeChild(i), i = n
                        }
                        if (!o) {
                            this.util.isListCell(n) && (e = n, i = null), e.insertBefore(t, i), l.s || (l.s = this.util.getNodePath(t.firstElementChild.firstChild, e, null), l.sl = e);
                            const o = e.contains(l.sl) ? this.util.getNodePath(l.sl, e) : null;
                            l.e = this.util.getNodePath(t.lastElementChild.firstChild, e, null), l.el = e, this.util.mergeSameTags(e, [l.s, l.e, o], !1), this.util.mergeNestedTags(e), o && (l.sl = this.util.getNodeFromPath(o, e))
                        }
                        return t
                    },
                    pickup: function(e) {
                        e.preventDefault(), e.stopPropagation();
                        let t = e.target,
                            n = "";
                        for (; !n && !/^UL$/i.test(t.tagName);) n = t.getAttribute("data-command"), t = t.parentNode;
                        if (!n) return;
                        const i = this.plugins.list.editList.call(this, n, null, !1);
                        i && this.setRange(i.sc, i.so, i.ec, i.eo), this.submenuOff(), this.history.push(!1)
                    }
                },
                table: {
                    name: "table",
                    display: "submenu",
                    add: function(e, t) {
                        const n = e.context;
                        n.table = {
                            _element: null,
                            _tdElement: null,
                            _trElement: null,
                            _trElements: null,
                            _tableXY: [],
                            _maxWidth: !0,
                            _fixedColumn: !1,
                            cellControllerTop: "top" === n.options.tableCellControllerPosition,
                            resizeText: null,
                            headerButton: null,
                            mergeButton: null,
                            splitButton: null,
                            splitMenu: null,
                            maxText: e.lang.controller.maxSize,
                            minText: e.lang.controller.minSize,
                            _physical_cellCnt: 0,
                            _logical_cellCnt: 0,
                            _rowCnt: 0,
                            _rowIndex: 0,
                            _physical_cellIndex: 0,
                            _logical_cellIndex: 0,
                            _current_colSpan: 0,
                            _current_rowSpan: 0,
                            icons: {
                                expansion: e.icons.expansion,
                                reduction: e.icons.reduction
                            }
                        };
                        let i = this.setSubmenu.call(e),
                            l = i.querySelector(".se-controller-table-picker");
                        n.table.tableHighlight = i.querySelector(".se-table-size-highlighted"), n.table.tableUnHighlight = i.querySelector(".se-table-size-unhighlighted"), n.table.tableDisplay = i.querySelector(".se-table-size-display");
                        let o = this.setController_table.call(e);
                        n.table.tableController = o, n.table.resizeButton = o.querySelector("._se_table_resize"), n.table.resizeText = o.querySelector("._se_table_resize > span > span"), n.table.columnFixedButton = o.querySelector("._se_table_fixed_column"), n.table.headerButton = o.querySelector("._se_table_header"), o.addEventListener("mousedown", e.eventStop);
                        let s = this.setController_tableEditor.call(e, n.table.cellControllerTop);
                        n.table.resizeDiv = s, n.table.splitMenu = s.querySelector(".se-btn-group-sub"), n.table.mergeButton = s.querySelector("._se_table_merge_button"), n.table.splitButton = s.querySelector("._se_table_split_button"), n.table.insertRowAboveButton = s.querySelector("._se_table_insert_row_a"), n.table.insertRowBelowButton = s.querySelector("._se_table_insert_row_b"), s.addEventListener("mousedown", e.eventStop), l.addEventListener("mousemove", this.onMouseMove_tablePicker.bind(e)), l.addEventListener("click", this.appendTable.bind(e)), s.addEventListener("click", this.onClick_tableController.bind(e)), o.addEventListener("click", this.onClick_tableController.bind(e)), e.initMenuTarget(this.name, t, i), n.element.relative.appendChild(s), n.element.relative.appendChild(o), i = null, l = null, s = null, o = null
                    },
                    setSubmenu: function() {
                        const e = this.util.createElement("DIV");
                        return e.className = "se-submenu se-selector-table", e.innerHTML = '<div class="se-table-size"><div class="se-table-size-picker se-controller-table-picker"></div><div class="se-table-size-highlighted"></div><div class="se-table-size-unhighlighted"></div></div><div class="se-table-size-display">1 x 1</div>', e
                    },
                    setController_table: function() {
                        const e = this.lang,
                            t = this.icons,
                            n = this.util.createElement("DIV");
                        return n.className = "se-controller se-controller-table", n.innerHTML = '<div><div class="se-btn-group"><button type="button" data-command="resize" class="se-btn se-tooltip _se_table_resize">' + t.expansion + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + e.controller.maxSize + '</span></span></button><button type="button" data-command="layout" class="se-btn se-tooltip _se_table_fixed_column">' + t.fixed_column_width + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + e.controller.fixedColumnWidth + '</span></span></button><button type="button" data-command="header" class="se-btn se-tooltip _se_table_header">' + t.table_header + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + e.controller.tableHeader + '</span></span></button><button type="button" data-command="remove" class="se-btn se-tooltip">' + t.delete + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + e.controller.remove + "</span></span></button></div></div>", n
                    },
                    setController_tableEditor: function(e) {
                        const t = this.lang,
                            n = this.icons,
                            i = this.util.createElement("DIV");
                        return i.className = "se-controller se-controller-table-cell", i.innerHTML = (e ? "" : '<div class="se-arrow se-arrow-up"></div>') + '<div class="se-btn-group"><button type="button" data-command="insert" data-value="row" data-option="up" class="se-btn se-tooltip _se_table_insert_row_a">' + n.insert_row_above + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.insertRowAbove + '</span></span></button><button type="button" data-command="insert" data-value="row" data-option="down" class="se-btn se-tooltip _se_table_insert_row_b">' + n.insert_row_below + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.insertRowBelow + '</span></span></button><button type="button" data-command="delete" data-value="row" class="se-btn se-tooltip">' + n.delete_row + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.deleteRow + '</span></span></button><button type="button" data-command="merge" class="_se_table_merge_button se-btn se-tooltip" disabled>' + n.merge_cell + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.mergeCells + '</span></span></button></div><div class="se-btn-group" style="padding-top: 0;"><button type="button" data-command="insert" data-value="cell" data-option="left" class="se-btn se-tooltip">' + n.insert_column_left + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.insertColumnBefore + '</span></span></button><button type="button" data-command="insert" data-value="cell" data-option="right" class="se-btn se-tooltip">' + n.insert_column_right + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.insertColumnAfter + '</span></span></button><button type="button" data-command="delete" data-value="cell" class="se-btn se-tooltip">' + n.delete_column + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.deleteColumn + '</span></span></button><button type="button" data-command="onsplit" class="_se_table_split_button se-btn se-tooltip">' + n.split_cell + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.splitCells + '</span></span></button><div class="se-btn-group-sub sun-editor-common se-list-layer"><div class="se-list-inner"><ul class="se-list-basic"><li class="se-btn-list" data-command="split" data-value="vertical" style="line-height:32px;" title="' + t.controller.VerticalSplit + '">' + t.controller.VerticalSplit + '</li><li class="se-btn-list" data-command="split" data-value="horizontal" style="line-height:32px;" title="' + t.controller.HorizontalSplit + '">' + t.controller.HorizontalSplit + "</li></ul></div></div></div>", i
                    },
                    appendTable: function() {
                        const e = this.util.createElement("TABLE"),
                            t = this.plugins.table.createCells,
                            n = this.context.table._tableXY[0];
                        let i = this.context.table._tableXY[1],
                            l = "<tbody>";
                        for (; i > 0;) l += "<tr>" + t.call(this, "td", n) + "</tr>", --i;
                        l += "</tbody>", e.innerHTML = l;
                        if (this.insertComponent(e, !1, !0, !1)) {
                            const t = e.querySelector("td div");
                            this.setRange(t, 0, t, 0), this.plugins.table.reset_table_picker.call(this)
                        }
                    },
                    createCells: function(e, t, n) {
                        if (e = e.toLowerCase(), n) {
                            const t = this.util.createElement(e);
                            return t.innerHTML = "<div><br></div>", t
                        } {
                            let n = "";
                            for (; t > 0;) n += "<" + e + "><div><br></div></" + e + ">", t--;
                            return n
                        }
                    },
                    onMouseMove_tablePicker: function(e) {
                        e.stopPropagation();
                        let t = this._w.Math.ceil(e.offsetX / 18),
                            n = this._w.Math.ceil(e.offsetY / 18);
                        t = t < 1 ? 1 : t, n = n < 1 ? 1 : n, this.context.table.tableHighlight.style.width = t + "em", this.context.table.tableHighlight.style.height = n + "em";
                        this.context.table.tableUnHighlight.style.width = "10em", this.context.table.tableUnHighlight.style.height = "10em", this.util.changeTxt(this.context.table.tableDisplay, t + " x " + n), this.context.table._tableXY = [t, n]
                    },
                    reset_table_picker: function() {
                        if (!this.context.table.tableHighlight) return;
                        const e = this.context.table.tableHighlight.style,
                            t = this.context.table.tableUnHighlight.style;
                        e.width = "1em", e.height = "1em", t.width = "10em", t.height = "10em", this.util.changeTxt(this.context.table.tableDisplay, "1 x 1"), this.submenuOff()
                    },
                    init: function() {
                        const e = this.context.table,
                            t = this.plugins.table;
                        if (t._removeEvents.call(this), t._selectedTable) {
                            const e = t._selectedTable.querySelectorAll(".se-table-selected-cell");
                            for (let t = 0, n = e.length; t < n; t++) this.util.removeClass(e[t], "se-table-selected-cell")
                        }
                        t._toggleEditor.call(this, !0), e._element = null, e._tdElement = null, e._trElement = null, e._trElements = null, e._tableXY = [], e._maxWidth = !0, e._fixedColumn = !1, e._physical_cellCnt = 0, e._logical_cellCnt = 0, e._rowCnt = 0, e._rowIndex = 0, e._physical_cellIndex = 0, e._logical_cellIndex = 0, e._current_colSpan = 0, e._current_rowSpan = 0, t._shift = !1, t._selectedCells = null, t._selectedTable = null, t._ref = null, t._fixedCell = null, t._selectedCell = null, t._fixedCellName = null
                    },
                    call_controller_tableEdit: function(e) {
                        const t = this.plugins.table,
                            n = this.context.table;
                        if (!this.getSelection().isCollapsed && !t._selectedCell) return this.controllersOff(), void this.util.removeClass(e, "se-table-selected-cell");
                        const i = n._element || this.plugins.table._selectedTable || this.util.getParentElement(e, "TABLE");
                        t.setPositionControllerTop.call(this, i), n._maxWidth = this.util.hasClass(i, "se-table-size-100") || "100%" === i.style.width || !i.style.width && !this.util.hasClass(i, "se-table-size-auto"), n._fixedColumn = this.util.hasClass(i, "se-table-layout-fixed") || "fixed" === i.style.tableLayout, t.setTableStyle.call(this, n._maxWidth ? "width|column" : "width"), t.setPositionControllerDiv.call(this, e, t._shift), t._shift || this.controllersOn(n.resizeDiv, n.tableController, t.init.bind(this), e, "table")
                    },
                    setPositionControllerTop: function(e) {
                        const t = this.context.table.tableController,
                            n = this.util.getOffset(e, this.context.element.wysiwygFrame);
                        t.style.left = n.left + "px", t.style.display = "block", t.style.top = n.top - t.offsetHeight - 2 + "px"
                    },
                    setPositionControllerDiv: function(e, t) {
                        const n = this.context.table,
                            i = n.resizeDiv;
                        if (this.plugins.table.setCellInfo.call(this, e, t), i.style.visibility = "hidden", i.style.display = "block", n.cellControllerTop) {
                            const e = this.util.getOffset(n._element, this.context.element.wysiwygFrame);
                            i.style.top = e.top - i.offsetHeight - 2 + "px", i.style.left = e.left + n.tableController.offsetWidth + "px"
                        } else {
                            const t = this.util.getOffset(e, this.context.element.wysiwygFrame);
                            i.style.left = t.left - this.context.element.wysiwygFrame.scrollLeft + "px", i.style.top = t.top + e.offsetHeight + 12 + "px";
                            const n = this.context.element.wysiwygFrame.offsetWidth - (i.offsetLeft + i.offsetWidth);
                            n < 0 ? (i.style.left = i.offsetLeft + n + "px", i.firstElementChild.style.left = 20 - n + "px") : i.firstElementChild.style.left = "20px"
                        }
                        i.style.visibility = ""
                    },
                    setCellInfo: function(e, t) {
                        const n = this.context.table,
                            i = n._element = this.plugins.table._selectedTable || this.util.getParentElement(e, "TABLE");
                        if (/THEAD/i.test(i.firstElementChild.nodeName) ? this.util.addClass(n.headerButton, "active") : this.util.removeClass(n.headerButton, "active"), t || 0 === n._physical_cellCnt) {
                            n._tdElement !== e && (n._tdElement = e, n._trElement = e.parentNode);
                            const t = n._trElements = i.rows,
                                l = e.cellIndex;
                            let o = 0;
                            for (let e = 0, n = t[0].cells, i = t[0].cells.length; e < i; e++) o += n[e].colSpan;
                            const s = n._rowIndex = n._trElement.rowIndex;
                            n._rowCnt = t.length, n._physical_cellCnt = n._trElement.cells.length, n._logical_cellCnt = o, n._physical_cellIndex = l, n._current_colSpan = n._tdElement.colSpan - 1, n._current_rowSpan, n._trElement.cells[l].rowSpan;
                            let a = [],
                                r = [];
                            for (let e, i, o = 0; o <= s; o++) {
                                e = t[o].cells, i = 0;
                                for (let t, c, d, u, h = 0, g = e.length; h < g; h++) {
                                    if (t = e[h], c = t.colSpan - 1, d = t.rowSpan - 1, u = h + i, r.length > 0)
                                        for (let e, t = 0; t < r.length; t++) e = r[t], e.row > o || (u >= e.index ? (i += e.cs, u += e.cs, e.rs -= 1, e.row = o + 1, e.rs < 1 && (r.splice(t, 1), t--)) : h === g - 1 && (e.rs -= 1, e.row = o + 1, e.rs < 1 && (r.splice(t, 1), t--)));
                                    if (o === s && h === l) {
                                        n._logical_cellIndex = u;
                                        break
                                    }
                                    d > 0 && a.push({
                                        index: u,
                                        cs: c + 1,
                                        rs: d,
                                        row: -1
                                    }), i += c
                                }
                                r = r.concat(a).sort((function(e, t) {
                                    return e.index - t.index
                                })), a = []
                            }
                            a = null, r = null
                        }
                    },
                    editTable: function(e, t) {
                        const n = this.plugins.table,
                            i = this.context.table,
                            l = i._element,
                            o = "row" === e;
                        if (o) {
                            const e = i._trElement.parentNode;
                            if (/^THEAD$/i.test(e.nodeName)) {
                                if ("up" === t) return;
                                if (!e.nextElementSibling || !/^TBODY$/i.test(e.nextElementSibling.nodeName)) return void(l.innerHTML += "<tbody><tr>" + n.createCells.call(this, "td", i._logical_cellCnt, !1) + "</tr></tbody>")
                            }
                        }
                        if (n._ref) {
                            const e = i._tdElement,
                                l = n._selectedCells;
                            if (o)
                                if (t) n.setCellInfo.call(this, "up" === t ? l[0] : l[l.length - 1], !0), n.editRow.call(this, t, e);
                                else {
                                    let e = l[0].parentNode;
                                    const i = [l[0]];
                                    for (let t, n = 1, o = l.length; n < o; n++) t = l[n], e !== t.parentNode && (i.push(t), e = t.parentNode);
                                    for (let e = 0, l = i.length; e < l; e++) n.setCellInfo.call(this, i[e], !0), n.editRow.call(this, t)
                                }
                            else {
                                const i = l[0].parentNode;
                                if (t) {
                                    let o = null;
                                    for (let e = 0, t = l.length - 1; e < t; e++)
                                        if (i !== l[e + 1].parentNode) {
                                            o = l[e];
                                            break
                                        } n.setCellInfo.call(this, "left" === t ? l[0] : o || l[0], !0), n.editCell.call(this, t, e)
                                } else {
                                    const e = [l[0]];
                                    for (let t, n = 1, o = l.length; n < o && (t = l[n], i === t.parentNode); n++) e.push(t);
                                    for (let i = 0, l = e.length; i < l; i++) n.setCellInfo.call(this, e[i], !0), n.editCell.call(this, t)
                                }
                            }
                            t || n.init.call(this)
                        } else n[o ? "editRow" : "editCell"].call(this, t);
                        if (!t) {
                            const e = l.children;
                            for (let t = 0; t < e.length; t++) 0 === e[t].children.length && (this.util.removeItem(e[t]), t--);
                            0 === l.children.length && this.util.removeItem(l)
                        }
                    },
                    editRow: function(e, t) {
                        const n = this.context.table,
                            i = !e,
                            l = "up" === e,
                            o = n._rowIndex,
                            s = i || l ? o : o + n._current_rowSpan + 1,
                            a = i ? -1 : 1,
                            r = n._trElements;
                        let c = n._logical_cellCnt;
                        for (let e, t = 0, n = o + (i ? -1 : 0); t <= n; t++) {
                            if (e = r[t].cells, 0 === e.length) return;
                            for (let n, i, l = 0, o = e.length; l < o; l++) n = e[l].rowSpan, i = e[l].colSpan, n < 2 && i < 2 || n + t > s && s > t && (e[l].rowSpan = n + a, c -= i)
                        }
                        if (i) {
                            const e = r[o + 1];
                            if (e) {
                                const t = [];
                                let n = r[o].cells,
                                    i = 0;
                                for (let e, l, o = 0, s = n.length; o < s; o++) e = n[o], l = o + i, i += e.colSpan - 1, e.rowSpan > 1 && (e.rowSpan -= 1, t.push({
                                    cell: e.cloneNode(!1),
                                    index: l
                                }));
                                if (t.length > 0) {
                                    let l = t.shift();
                                    n = e.cells, i = 0;
                                    for (let o, s, a = 0, r = n.length; a < r && (o = n[a], s = a + i, i += o.colSpan - 1, !(s >= l.index) || (a--, i--, i += l.cell.colSpan - 1, e.insertBefore(l.cell, o), l = t.shift(), l)); a++);
                                    if (l) {
                                        e.appendChild(l.cell);
                                        for (let n = 0, i = t.length; n < i; n++) e.appendChild(t[n].cell)
                                    }
                                }
                            }
                            n._element.deleteRow(s)
                        } else {
                            n._element.insertRow(s).innerHTML = this.plugins.table.createCells.call(this, "td", c, !1)
                        }
                        i ? this.controllersOff() : this.plugins.table.setPositionControllerDiv.call(this, t || n._tdElement, !0)
                    },
                    editCell: function(e, t) {
                        const n = this.context.table,
                            i = this.util,
                            l = !e,
                            o = "left" === e,
                            s = n._current_colSpan,
                            a = l || o ? n._logical_cellIndex : n._logical_cellIndex + s + 1,
                            r = n._trElements;
                        let c = [],
                            d = [],
                            u = 0;
                        const h = [],
                            g = [];
                        for (let e, t, o, p, m, f, _ = 0, b = n._rowCnt; _ < b; _++) {
                            e = r[_], t = a, m = !1, o = e.cells, f = 0;
                            for (let e, n, r, p, b = 0, v = o.length; b < v && (e = o[b], e); b++)
                                if (n = e.rowSpan - 1, r = e.colSpan - 1, l) {
                                    if (p = b + f, d.length > 0) {
                                        const e = !o[b + 1];
                                        for (let t, n = 0; n < d.length; n++) t = d[n], t.row > _ || (p >= t.index ? (f += t.cs, p = b + f, t.rs -= 1, t.row = _ + 1, t.rs < 1 && (d.splice(n, 1), n--)) : e && (t.rs -= 1, t.row = _ + 1, t.rs < 1 && (d.splice(n, 1), n--)))
                                    }
                                    n > 0 && c.push({
                                        rs: n,
                                        cs: r + 1,
                                        index: p,
                                        row: -1
                                    }), p >= t && p + r <= t + s ? h.push(e) : p <= t + s && p + r >= t ? e.colSpan -= i.getOverlapRangeAtIndex(a, a + s, p, p + r) : n > 0 && (p < t || p + r > t + s) && g.push({
                                        cell: e,
                                        i: _,
                                        rs: _ + n
                                    }), f += r
                                } else {
                                    if (b >= t) break;
                                    if (r > 0) {
                                        if (u < 1 && r + b >= t) {
                                            e.colSpan += 1, t = null, u = n + 1;
                                            break
                                        }
                                        t -= r
                                    }
                                    if (!m) {
                                        for (let e, n = 0; n < d.length; n++) e = d[n], t -= e.cs, e.rs -= 1, e.rs < 1 && (d.splice(n, 1), n--);
                                        m = !0
                                    }
                                } if (d = d.concat(c).sort((function(e, t) {
                                    return e.index - t.index
                                })), c = [], !l) {
                                if (u > 0) {
                                    u -= 1;
                                    continue
                                }
                                null !== t && o.length > 0 && (p = this.plugins.table.createCells.call(this, o[0].nodeName, 0, !0), p = e.insertBefore(p, o[t]))
                            }
                        }
                        if (l) {
                            let e, t;
                            for (let n, l = 0, o = h.length; l < o; l++) n = h[l].parentNode, i.removeItem(h[l]), 0 === n.cells.length && (e || (e = i.getArrayIndex(r, n)), t = i.getArrayIndex(r, n), i.removeItem(n));
                            for (let n, l = 0, o = g.length; l < o; l++) n = g[l], n.cell.rowSpan = i.getOverlapRangeAtIndex(e, t, n.i, n.rs);
                            this.controllersOff()
                        } else this.plugins.table.setPositionControllerDiv.call(this, t || n._tdElement, !0)
                    },
                    _closeSplitMenu: null,
                    openSplitMenu: function() {
                        this.util.addClass(this.context.table.splitButton, "on"), this.context.table.splitMenu.style.display = "inline-table", this.plugins.table._closeSplitMenu = function() {
                            this.util.removeClass(this.context.table.splitButton, "on"), this.context.table.splitMenu.style.display = "none", this.removeDocEvent("mousedown", this.plugins.table._closeSplitMenu), this.plugins.table._closeSplitMenu = null
                        }.bind(this), this.addDocEvent("mousedown", this.plugins.table._closeSplitMenu)
                    },
                    splitCells: function(e) {
                        const t = this.util,
                            n = "vertical" === e,
                            i = this.context.table,
                            l = i._tdElement,
                            o = i._trElements,
                            s = i._trElement,
                            a = i._logical_cellIndex,
                            r = i._rowIndex,
                            c = this.plugins.table.createCells.call(this, l.nodeName, 0, !0);
                        if (n) {
                            const e = l.colSpan;
                            if (c.rowSpan = l.rowSpan, e > 1) c.colSpan = this._w.Math.floor(e / 2), l.colSpan = e - c.colSpan, s.insertBefore(c, l.nextElementSibling);
                            else {
                                let t = [],
                                    n = [];
                                for (let s, r, c = 0, d = i._rowCnt; c < d; c++) {
                                    s = o[c].cells, r = 0;
                                    for (let i, o, d, u, h = 0, g = s.length; h < g; h++) {
                                        if (i = s[h], o = i.colSpan - 1, d = i.rowSpan - 1, u = h + r, n.length > 0)
                                            for (let e, t = 0; t < n.length; t++) e = n[t], e.row > c || (u >= e.index ? (r += e.cs, u += e.cs, e.rs -= 1, e.row = c + 1, e.rs < 1 && (n.splice(t, 1), t--)) : h === g - 1 && (e.rs -= 1, e.row = c + 1, e.rs < 1 && (n.splice(t, 1), t--)));
                                        if (u <= a && d > 0 && t.push({
                                                index: u,
                                                cs: o + 1,
                                                rs: d,
                                                row: -1
                                            }), i !== l && u <= a && u + o >= a + e - 1) {
                                            i.colSpan += 1;
                                            break
                                        }
                                        if (u > a) break;
                                        r += o
                                    }
                                    n = n.concat(t).sort((function(e, t) {
                                        return e.index - t.index
                                    })), t = []
                                }
                                s.insertBefore(c, l.nextElementSibling)
                            }
                        } else {
                            const e = l.rowSpan;
                            if (c.colSpan = l.colSpan, e > 1) {
                                c.rowSpan = this._w.Math.floor(e / 2);
                                const n = e - c.rowSpan,
                                    i = [],
                                    r = t.getArrayIndex(o, s) + n;
                                for (let e, t, n = 0; n < r; n++) {
                                    e = o[n].cells, t = 0;
                                    for (let l, o, s, c = 0, d = e.length; c < d && (s = c + t, !(s >= a)); c++) l = e[c], o = l.rowSpan - 1, o > 0 && o + n >= r && s < a && i.push({
                                        index: s,
                                        cs: l.colSpan
                                    }), t += l.colSpan - 1
                                }
                                const d = o[r],
                                    u = d.cells;
                                let h = i.shift();
                                for (let e, t, n, l, o = 0, s = u.length, r = 0; o < s; o++) {
                                    if (n = o + r, e = u[o], t = e.colSpan - 1, l = n + t + 1, h && l >= h.index && (r += h.cs, l += h.cs, h = i.shift()), l >= a || o === s - 1) {
                                        d.insertBefore(c, e.nextElementSibling);
                                        break
                                    }
                                    r += t
                                }
                                l.rowSpan = n
                            } else {
                                c.rowSpan = l.rowSpan;
                                const e = t.createElement("TR");
                                e.appendChild(c);
                                for (let e, t = 0; t < r; t++) {
                                    if (e = o[t].cells, 0 === e.length) return;
                                    for (let n = 0, i = e.length; n < i; n++) t + e[n].rowSpan - 1 >= r && (e[n].rowSpan += 1)
                                }
                                const n = i._physical_cellIndex,
                                    a = s.cells;
                                for (let e = 0, t = a.length; e < t; e++) e !== n && (a[e].rowSpan += 1);
                                s.parentNode.insertBefore(e, s.nextElementSibling)
                            }
                        }
                        this.focusEdge(l), this.plugins.table.setPositionControllerDiv.call(this, l, !0)
                    },
                    mergeCells: function() {
                        const e = this.plugins.table,
                            t = this.context.table,
                            n = this.util,
                            i = e._ref,
                            l = e._selectedCells,
                            o = l[0];
                        let s = null,
                            a = null,
                            r = i.ce - i.cs + 1,
                            c = i.re - i.rs + 1,
                            d = "",
                            u = null;
                        for (let e, t, i = 1, o = l.length; i < o; i++) {
                            e = l[i], u !== e.parentNode && (u = e.parentNode), t = e.children;
                            for (let e = 0, i = t.length; e < i; e++) n.isFormatElement(t[e]) && n.onlyZeroWidthSpace(t[e].textContent) && n.removeItem(t[e]);
                            d += e.innerHTML, n.removeItem(e), 0 === u.cells.length && (s ? a = u : s = u, c -= 1)
                        }
                        if (s) {
                            const e = t._trElements,
                                i = n.getArrayIndex(e, s),
                                l = n.getArrayIndex(e, a || s),
                                o = [];
                            for (let t, s = 0; s <= l; s++)
                                if (t = e[s].cells, 0 !== t.length)
                                    for (let e, o, a = 0, r = t.length; a < r; a++) e = t[a], o = e.rowSpan - 1, o > 0 && s + o >= i && (e.rowSpan -= n.getOverlapRangeAtIndex(i, l, s, s + o));
                                else o.push(e[s]);
                            for (let e = 0, t = o.length; e < t; e++) n.removeItem(o[e])
                        }
                        o.innerHTML += d, o.colSpan = r, o.rowSpan = c, this.controllersOff(), e.setActiveButton.call(this, !0, !1), e.call_controller_tableEdit.call(this, o), n.addClass(o, "se-table-selected-cell"), this.focusEdge(o)
                    },
                    toggleHeader: function() {
                        const e = this.util,
                            t = this.context.table.headerButton,
                            n = e.hasClass(t, "active"),
                            i = this.context.table._element;
                        if (n) e.removeItem(i.querySelector("thead"));
                        else {
                            const t = e.createElement("THEAD");
                            t.innerHTML = "<tr>" + this.plugins.table.createCells.call(this, "th", this.context.table._logical_cellCnt, !1) + "</tr>", i.insertBefore(t, i.firstElementChild)
                        }
                        e.toggleClass(t, "active"), /TH/i.test(this.context.table._tdElement.nodeName) ? this.controllersOff() : this.plugins.table.setPositionControllerDiv.call(this, this.context.table._tdElement, !1)
                    },
                    setTableStyle: function(e) {
                        const t = this.context.table,
                            n = t._element;
                        let i, l, o, s;
                        e.indexOf("width") > -1 && (i = t.resizeButton.firstElementChild, l = t.resizeText, t._maxWidth ? (o = t.icons.reduction, s = t.minText, t.columnFixedButton.style.display = "block", this.util.removeClass(n, "se-table-size-auto"), this.util.addClass(n, "se-table-size-100")) : (o = t.icons.expansion, s = t.maxText, t.columnFixedButton.style.display = "none", this.util.removeClass(n, "se-table-size-100"), this.util.addClass(n, "se-table-size-auto")), this.util.changeElement(i, o), this.util.changeTxt(l, s)), e.indexOf("column") > -1 && (t._fixedColumn ? (this.util.removeClass(n, "se-table-layout-auto"), this.util.addClass(n, "se-table-layout-fixed"), this.util.addClass(t.columnFixedButton, "active")) : (this.util.removeClass(n, "se-table-layout-fixed"), this.util.addClass(n, "se-table-layout-auto"), this.util.removeClass(t.columnFixedButton, "active")))
                    },
                    setActiveButton: function(e, t) {
                        const n = this.context.table;
                        /^TH$/i.test(e.nodeName) ? (n.insertRowAboveButton.setAttribute("disabled", !0), n.insertRowBelowButton.setAttribute("disabled", !0)) : (n.insertRowAboveButton.removeAttribute("disabled"), n.insertRowBelowButton.removeAttribute("disabled")), t && e !== t ? (n.splitButton.setAttribute("disabled", !0), n.mergeButton.removeAttribute("disabled")) : (n.splitButton.removeAttribute("disabled"), n.mergeButton.setAttribute("disabled", !0))
                    },
                    _bindOnSelect: null,
                    _bindOffSelect: null,
                    _bindOffShift: null,
                    _selectedCells: null,
                    _shift: !1,
                    _fixedCell: null,
                    _fixedCellName: null,
                    _selectedCell: null,
                    _selectedTable: null,
                    _ref: null,
                    _toggleEditor: function(e) {
                        this.context.element.wysiwyg.setAttribute("contenteditable", e), e ? this.util.removeClass(this.context.element.wysiwyg, "se-disabled") : this.util.addClass(this.context.element.wysiwyg, "se-disabled")
                    },
                    _offCellMultiSelect: function(e) {
                        e.stopPropagation();
                        const t = this.plugins.table;
                        t._shift ? t._initBind && (this._wd.removeEventListener("touchmove", t._initBind), t._initBind = null) : (t._removeEvents.call(this), t._toggleEditor.call(this, !0)), t._fixedCell && t._selectedTable && (t.setActiveButton.call(this, t._fixedCell, t._selectedCell), t.call_controller_tableEdit.call(this, t._selectedCell || t._fixedCell), t._selectedCells = t._selectedTable.querySelectorAll(".se-table-selected-cell"), t._selectedCell && t._fixedCell && this.focusEdge(t._selectedCell), t._shift || (t._fixedCell = null, t._selectedCell = null, t._fixedCellName = null))
                    },
                    _onCellMultiSelect: function(e) {
                        this._antiBlur = !0;
                        const t = this.plugins.table,
                            n = this.util.getParentElement(e.target, this.util.isCell);
                        if (t._shift) n === t._fixedCell ? t._toggleEditor.call(this, !0) : t._toggleEditor.call(this, !1);
                        else if (!t._ref) {
                            if (n === t._fixedCell) return;
                            t._toggleEditor.call(this, !1)
                        }
                        n && n !== t._selectedCell && t._fixedCellName === n.nodeName && t._selectedTable === this.util.getParentElement(n, "TABLE") && (t._selectedCell = n, t._setMultiCells.call(this, t._fixedCell, n))
                    },
                    _setMultiCells: function(e, t) {
                        const n = this.plugins.table,
                            i = n._selectedTable.rows,
                            l = this.util,
                            o = n._selectedTable.querySelectorAll(".se-table-selected-cell");
                        for (let e = 0, t = o.length; e < t; e++) l.removeClass(o[e], "se-table-selected-cell");
                        if (e === t && (l.addClass(e, "se-table-selected-cell"), !n._shift)) return;
                        let s = !0,
                            a = [],
                            r = [];
                        const c = n._ref = {
                            _i: 0,
                            cs: null,
                            ce: null,
                            rs: null,
                            re: null
                        };
                        for (let n, o, d = 0, u = i.length; d < u; d++) {
                            n = i[d].cells, o = 0;
                            for (let i, u, h, g, p = 0, m = n.length; p < m; p++) {
                                if (i = n[p], h = i.colSpan - 1, g = i.rowSpan - 1, u = p + o, a.length > 0)
                                    for (let e, t = 0; t < a.length; t++) e = a[t], e.row > d || (u >= e.index ? (o += e.cs, u += e.cs, e.rs -= 1, e.row = d + 1, e.rs < 1 && (a.splice(t, 1), t--)) : p === m - 1 && (e.rs -= 1, e.row = d + 1, e.rs < 1 && (a.splice(t, 1), t--)));
                                if (s) {
                                    if (i !== e && i !== t || (c.cs = null !== c.cs && c.cs < u ? c.cs : u, c.ce = null !== c.ce && c.ce > u + h ? c.ce : u + h, c.rs = null !== c.rs && c.rs < d ? c.rs : d, c.re = null !== c.re && c.re > d + g ? c.re : d + g, c._i += 1), 2 === c._i) {
                                        s = !1, a = [], r = [], d = -1;
                                        break
                                    }
                                } else if (l.getOverlapRangeAtIndex(c.cs, c.ce, u, u + h) && l.getOverlapRangeAtIndex(c.rs, c.re, d, d + g)) {
                                    const e = c.cs < u ? c.cs : u,
                                        t = c.ce > u + h ? c.ce : u + h,
                                        n = c.rs < d ? c.rs : d,
                                        o = c.re > d + g ? c.re : d + g;
                                    if (c.cs !== e || c.ce !== t || c.rs !== n || c.re !== o) {
                                        c.cs = e, c.ce = t, c.rs = n, c.re = o, d = -1, a = [], r = [];
                                        break
                                    }
                                    l.addClass(i, "se-table-selected-cell")
                                }
                                g > 0 && r.push({
                                    index: u,
                                    cs: h + 1,
                                    rs: g,
                                    row: -1
                                }), o += i.colSpan - 1
                            }
                            a = a.concat(r).sort((function(e, t) {
                                return e.index - t.index
                            })), r = []
                        }
                    },
                    _removeEvents: function() {
                        const e = this.plugins.table;
                        e._initBind && (this._wd.removeEventListener("touchmove", e._initBind), e._initBind = null), e._bindOnSelect && (this._wd.removeEventListener("mousedown", e._bindOnSelect), this._wd.removeEventListener("mousemove", e._bindOnSelect), e._bindOnSelect = null), e._bindOffSelect && (this._wd.removeEventListener("mouseup", e._bindOffSelect), e._bindOffSelect = null), e._bindOffShift && (this._wd.removeEventListener("keyup", e._bindOffShift), e._bindOffShift = null)
                    },
                    _initBind: null,
                    onTableCellMultiSelect: function(e, t) {
                        const n = this.plugins.table;
                        n._removeEvents.call(this), this.controllersOff(), n._shift = t, n._fixedCell = e, n._fixedCellName = e.nodeName, n._selectedTable = this.util.getParentElement(e, "TABLE");
                        const i = n._selectedTable.querySelectorAll(".se-table-selected-cell");
                        for (let e = 0, t = i.length; e < t; e++) this.util.removeClass(i[e], "se-table-selected-cell");
                        this.util.addClass(e, "se-table-selected-cell"), n._bindOnSelect = n._onCellMultiSelect.bind(this), n._bindOffSelect = n._offCellMultiSelect.bind(this), t ? (n._bindOffShift = function() {
                            this.controllersOn(this.context.table.resizeDiv, this.context.table.tableController, this.plugins.table.init.bind(this), e, "table"), n._ref || this.controllersOff()
                        }.bind(this), this._wd.addEventListener("keyup", n._bindOffShift, !1), this._wd.addEventListener("mousedown", n._bindOnSelect, !1)) : this._wd.addEventListener("mousemove", n._bindOnSelect, !1), this._wd.addEventListener("mouseup", n._bindOffSelect, !1), n._initBind = n.init.bind(this), this._wd.addEventListener("touchmove", n._initBind, !1)
                    },
                    onClick_tableController: function(e) {
                        e.stopPropagation();
                        const t = e.target.getAttribute("data-command") ? e.target : e.target.parentNode;
                        if (t.getAttribute("disabled")) return;
                        const n = t.getAttribute("data-command"),
                            i = t.getAttribute("data-value"),
                            l = t.getAttribute("data-option"),
                            o = this.plugins.table;
                        if ("function" == typeof o._closeSplitMenu && (o._closeSplitMenu(), "onsplit" === n)) return;
                        if (!n) return;
                        e.preventDefault();
                        const s = this.context.table;
                        switch (n) {
                            case "insert":
                            case "delete":
                                o.editTable.call(this, i, l);
                                break;
                            case "header":
                                o.toggleHeader.call(this);
                                break;
                            case "onsplit":
                                o.openSplitMenu.call(this);
                                break;
                            case "split":
                                o.splitCells.call(this, i);
                                break;
                            case "merge":
                                o.mergeCells.call(this);
                                break;
                            case "resize":
                                s._maxWidth = !s._maxWidth, o.setTableStyle.call(this, "width"), o.setPositionControllerTop.call(this, s._element), o.setPositionControllerDiv.call(this, s._tdElement, o._shift);
                                break;
                            case "layout":
                                s._fixedColumn = !s._fixedColumn, o.setTableStyle.call(this, "column"), o.setPositionControllerTop.call(this, s._element), o.setPositionControllerDiv.call(this, s._tdElement, o._shift);
                                break;
                            case "remove":
                                const e = s._element.parentNode;
                                this.util.removeItem(s._element), this.controllersOff(), e !== this.context.element.wysiwyg && this.util.removeItemAllParents(e, (function(e) {
                                    return 0 === e.childNodes.length
                                }), null), this.focus()
                        }
                        this.history.push(!1)
                    }
                },
                formatBlock: {
                    name: "formatBlock",
                    display: "submenu",
                    add: function(e, t) {
                        const n = e.context;
                        n.formatBlock = {
                            targetText: t.querySelector(".txt"),
                            targetTooltip: t.parentNode.querySelector(".se-tooltip-text"),
                            _formatList: null,
                            currentFormat: ""
                        };
                        let i = this.setSubmenu.call(e);
                        i.querySelector("ul").addEventListener("click", this.pickUp.bind(e)), n.formatBlock._formatList = i.querySelectorAll("li button"), e.initMenuTarget(this.name, t, i), i = null
                    },
                    setSubmenu: function() {
                        const e = this.context.option,
                            t = this.lang.toolbar,
                            n = this.util.createElement("DIV");
                        n.className = "se-submenu se-list-layer se-list-format";
                        const i = ["p", "div", "blockquote", "pre", "h1", "h2", "h3", "h4", "h5", "h6"],
                            l = e.formats && 0 !== e.formats.length ? e.formats : i;
                        let o = '<div class="se-list-inner"><ul class="se-list-basic">';
                        for (let e, n, s, a, r, c, d, u = 0, h = l.length; u < h; u++) e = l[u], "string" == typeof e && i.indexOf(e) > -1 ? (n = e.toLowerCase(), s = "blockquote" === n ? "range" : "pre" === n ? "free" : "replace", r = /^h/.test(n) ? n.match(/\d+/)[0] : "", a = t["tag_" + (r ? "h" : n)] + r, d = "", c = "") : (n = e.tag.toLowerCase(), s = e.command, a = e.name || n, d = e.class, c = d ? ' class="' + d + '"' : ""), o += '<li><button type="button" class="se-btn-list" data-command="' + s + '" data-value="' + n + '" data-class="' + d + '" title="' + a + '"><' + n + c + ">" + a + "</" + n + "></button></li>";
                        return o += "</ul></div>", n.innerHTML = o, n
                    },
                    active: function(e) {
                        let t = this.lang.toolbar.formats;
                        const n = this.context.formatBlock.targetText,
                            i = this.context.formatBlock.targetTooltip;
                        if (e) {
                            if (this.util.isFormatElement(e)) {
                                const l = this.context.formatBlock._formatList,
                                    o = e.nodeName.toLowerCase(),
                                    s = (e.className.match(/(\s|^)__se__format__[^\s]+/) || [""])[0].trim();
                                for (let e, n = 0, i = l.length; n < i; n++)
                                    if (e = l[n], o === e.getAttribute("data-value") && s === e.getAttribute("data-class")) {
                                        t = e.title;
                                        break
                                    } return this.util.changeTxt(n, t), this.util.changeTxt(i, t), n.setAttribute("data-value", o), n.setAttribute("data-class", s), !0
                            }
                        } else this.util.changeTxt(n, t), this.util.changeTxt(i, t);
                        return !1
                    },
                    on: function() {
                        const e = this.context.formatBlock,
                            t = e._formatList,
                            n = e.targetText,
                            i = (n.getAttribute("data-value") || "") + (n.getAttribute("data-class") || "");
                        if (i !== e.currentFormat) {
                            for (let e, n = 0, l = t.length; n < l; n++) e = t[n], i === e.getAttribute("data-value") + e.getAttribute("data-class") ? this.util.addClass(e, "active") : this.util.removeClass(e, "active");
                            e.currentFormat = i
                        }
                    },
                    pickUp: function(e) {
                        e.preventDefault(), e.stopPropagation();
                        let t = e.target,
                            n = null,
                            i = null,
                            l = null,
                            o = "";
                        for (; !n && !/UL/i.test(t.tagName);) {
                            if (n = t.getAttribute("data-command"), i = t.getAttribute("data-value"), o = t.getAttribute("data-class"), n) {
                                l = t.firstChild;
                                break
                            }
                            t = t.parentNode
                        }
                        if (n) {
                            if ("range" === n) {
                                const e = l.cloneNode(!1);
                                this.applyRangeFormatElement(e)
                            } else {
                                let e = this.getRange(),
                                    t = this.getSelectedElementsAndComponents(!1);
                                if (0 === t.length && (e = this.getRange_addLine(e), t = this.getSelectedElementsAndComponents(!1), 0 === t.length)) return;
                                const s = e.startOffset,
                                    a = e.endOffset,
                                    r = this.util;
                                let c = t[0],
                                    d = t[t.length - 1];
                                const u = r.getNodePath(e.startContainer, c, null, null),
                                    h = r.getNodePath(e.endContainer, d, null, null),
                                    g = this.detachList(t, !1);
                                g.sc && (c = g.sc), g.ec && (d = g.ec), this.setRange(r.getNodeFromPath(u, c), s, r.getNodeFromPath(h, d), a);
                                const p = this.getSelectedElementsAndComponents(!1);
                                if ("free" === n) {
                                    const e = p.length - 1;
                                    let t = p[e].parentNode,
                                        n = l.cloneNode(!1);
                                    const i = n;
                                    for (let i, o, s, a, c, d, u = e, h = !0; u >= 0; u--)
                                        if (i = p[u], i !== (p[u + 1] ? p[u + 1].parentNode : null)) {
                                            if (d = r.isComponent(i), o = d ? "" : i.innerHTML.replace(/(?!>)\s+(?=<)|\n/g, " "), s = r.getParentElement(i, (function(e) {
                                                    return e.parentNode === t
                                                })), (t !== i.parentNode || d) && (r.isFormatElement(t) ? (t.parentNode.insertBefore(n, t.nextSibling), t = t.parentNode) : (t.insertBefore(n, s ? s.nextSibling : null), t = i.parentNode), a = n.nextSibling, a && n.nodeName === a.nodeName && r.isSameAttributes(n, a) && (n.innerHTML += "<BR>" + a.innerHTML, r.removeItem(a)), n = l.cloneNode(!1), h = !0), c = n.innerHTML, n.innerHTML = (h || !o || !c || /<br>$/i.test(o) ? o : o + "<BR>") + c, 0 === u) {
                                                t.insertBefore(n, i), a = i.nextSibling, a && n.nodeName === a.nodeName && r.isSameAttributes(n, a) && (n.innerHTML += "<BR>" + a.innerHTML, r.removeItem(a));
                                                const e = n.previousSibling;
                                                e && n.nodeName === e.nodeName && r.isSameAttributes(n, e) && (e.innerHTML += "<BR>" + n.innerHTML, r.removeItem(n))
                                            }
                                            d || r.removeItem(i), o && (h = !1)
                                        } this.setRange(i, 0, i, 0)
                                } else {
                                    for (let e, t, n = 0, s = p.length; n < s; n++) e = p[n], e.nodeName.toLowerCase() === i.toLowerCase() && (e.className.match(/(\s|^)__se__format__[^\s]+/) || [""])[0].trim() === o || r.isComponent(e) || (t = l.cloneNode(!1), r.copyFormatAttributes(t, e), t.innerHTML = e.innerHTML, e.parentNode.replaceChild(t, e)), 0 === n && (c = t || e), n === s - 1 && (d = t || e), t = null;
                                    this.setRange(r.getNodeFromPath(u, c), s, r.getNodeFromPath(h, d), a)
                                }
                                this.history.push(!1)
                            }
                            this.submenuOff()
                        }
                    }
                },
                lineHeight: {
                    name: "lineHeight",
                    display: "submenu",
                    add: function(e, t) {
                        const n = e.context;
                        n.lineHeight = {
                            _sizeList: null,
                            currentSize: -1
                        };
                        let i = this.setSubmenu.call(e),
                            l = i.querySelector("ul");
                        l.addEventListener("click", this.pickup.bind(e)), n.lineHeight._sizeList = l.querySelectorAll("li button"), e.initMenuTarget(this.name, t, i), i = null, l = null
                    },
                    setSubmenu: function() {
                        const e = this.context.option,
                            t = this.lang,
                            n = this.util.createElement("DIV");
                        n.className = "se-submenu se-list-layer";
                        const i = e.lineHeights ? e.lineHeights : [{
                            text: "1",
                            value: 1
                        }, {
                            text: "1.15",
                            value: 1.15
                        }, {
                            text: "1.5",
                            value: 1.5
                        }, {
                            text: "2",
                            value: 2
                        }];
                        let l = '<div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="default_value se-btn-list" title="' + t.toolbar.default+'">(' + t.toolbar.default+")</button></li>";
                        for (let e, t = 0, n = i.length; t < n; t++) e = i[t], l += '<li><button type="button" class="se-btn-list" data-value="' + e.value + '" title="' + e.text + '">' + e.text + "</button></li>";
                        return l += "</ul></div>", n.innerHTML = l, n
                    },
                    on: function() {
                        const e = this.context.lineHeight,
                            t = e._sizeList,
                            n = this.util.getFormatElement(this.getSelectionNode()),
                            i = n ? n.style.lineHeight + "" : "";
                        if (i !== e.currentSize) {
                            for (let e = 0, n = t.length; e < n; e++) i === t[e].getAttribute("data-value") ? this.util.addClass(t[e], "active") : this.util.removeClass(t[e], "active");
                            e.currentSize = i
                        }
                    },
                    pickup: function(e) {
                        if (!/^BUTTON$/i.test(e.target.tagName)) return !1;
                        e.preventDefault(), e.stopPropagation();
                        const t = e.target.getAttribute("data-value") || "",
                            n = this.getSelectedElements();
                        for (let e = 0, i = n.length; e < i; e++) n[e].style.lineHeight = t;
                        this.submenuOff(), this.history.push(!1)
                    }
                },
                template: s,
                paragraphStyle: {
                    name: "paragraphStyle",
                    display: "submenu",
                    add: function(e, t) {
                        const n = e.context;
                        n.paragraphStyle = {
                            _classList: null
                        };
                        let i = this.setSubmenu.call(e);
                        i.querySelector("ul").addEventListener("click", this.pickUp.bind(e)), n.paragraphStyle._classList = i.querySelectorAll("li button"), e.initMenuTarget(this.name, t, i), i = null
                    },
                    setSubmenu: function() {
                        const e = this.context.option,
                            t = this.util.createElement("DIV");
                        t.className = "se-submenu se-list-layer se-list-format";
                        const n = this.lang.menu,
                            i = {
                                spaced: {
                                    name: n.spaced,
                                    class: "__se__p-spaced",
                                    _class: ""
                                },
                                bordered: {
                                    name: n.bordered,
                                    class: "__se__p-bordered",
                                    _class: ""
                                },
                                neon: {
                                    name: n.neon,
                                    class: "__se__p-neon",
                                    _class: ""
                                }
                            },
                            l = e.paragraphStyles && 0 !== e.paragraphStyles.length ? e.paragraphStyles : ["spaced", "bordered", "neon"];
                        let o = '<div class="se-list-inner"><ul class="se-list-basic">';
                        for (let e, t, n, s, a = 0, r = l.length; a < r; a++) {
                            if (e = l[a], "string" == typeof e) {
                                const t = i[e.toLowerCase()];
                                if (!t) continue;
                                e = t
                            }
                            t = e.name, n = e.class ? ' class="' + e.class + '"' : "", s = e._class, o += '<li><button type="button" class="se-btn-list' + (s ? " " + s : "") + '" data-value="' + e.class + '" title="' + t + '"><div' + n + ">" + t + "</div></button></li>"
                        }
                        return o += "</ul></div>", t.innerHTML = o, t
                    },
                    on: function() {
                        const e = this.context.paragraphStyle._classList,
                            t = this.util.getFormatElement(this.getSelectionNode());
                        for (let n = 0, i = e.length; n < i; n++) this.util.hasClass(t, e[n].getAttribute("data-value")) ? this.util.addClass(e[n], "active") : this.util.removeClass(e[n], "active")
                    },
                    pickUp: function(e) {
                        e.preventDefault(), e.stopPropagation();
                        let t = e.target,
                            n = null;
                        for (; !/^UL$/i.test(t.tagName) && (n = t.getAttribute("data-value"), !n);) t = t.parentNode;
                        if (!n) return;
                        let i = this.getSelectedElements();
                        if (0 === i.length && (this.getRange_addLine(this.getRange()), i = this.getSelectedElements(), 0 === i.length)) return;
                        const l = this.util.hasClass(t, "active") ? this.util.removeClass.bind(this.util) : this.util.addClass.bind(this.util);
                        for (let e = 0, t = i.length; e < t; e++) l(i[e], n);
                        this.submenuOff(), this.history.push(!1)
                    }
                },
                textStyle: {
                    name: "textStyle",
                    display: "submenu",
                    add: function(e, t) {
                        const n = e.context;
                        n.textStyle = {
                            _styleList: null
                        };
                        let i = this.setSubmenu.call(e),
                            l = i.querySelector("ul");
                        l.addEventListener("click", this.pickup.bind(e)), n.textStyle._styleList = i.querySelectorAll("li button"), e.initMenuTarget(this.name, t, i), i = null, l = null
                    },
                    setSubmenu: function() {
                        const e = this.context.option,
                            t = this.util.createElement("DIV");
                        t.className = "se-submenu se-list-layer se-list-format";
                        const n = {
                                code: {
                                    name: this.lang.menu.code,
                                    class: "__se__t-code",
                                    tag: "code"
                                },
                                translucent: {
                                    name: this.lang.menu.translucent,
                                    style: "opacity: 0.5;",
                                    tag: "span"
                                },
                                shadow: {
                                    name: this.lang.menu.shadow,
                                    class: "__se__t-shadow",
                                    tag: "span"
                                }
                            },
                            i = e.textStyles ? e.textStyles : this._w.Object.keys(n);
                        let l = '<div class="se-list-inner"><ul class="se-list-basic">';
                        for (let e, t, o, s, a, r, c, d = 0, u = i.length; d < u; d++) {
                            if (e = i[d], s = "", r = "", a = [], "string" == typeof e) {
                                const t = n[e.toLowerCase()];
                                if (!t) continue;
                                e = t
                            }
                            o = e.name, t = e.tag || "span", c = e._class, e.style && (s += ' style="' + e.style + '"', r += e.style.replace(/:[^;]+(;|$)\s*/g, ","), a.push("style")), e.class && (s += ' class="' + e.class + '"', r += "." + e.class.trim().replace(/\s+/g, ",."), a.push("class")), r = r.replace(/,$/, ""), l += '<li><button type="button" class="se-btn-list' + (c ? " " + c : "") + '" data-command="' + t + '" data-value="' + r + '" title="' + o + '"><' + t + s + ">" + o + "</" + t + "></button></li>"
                        }
                        return l += "</ul></div>", t.innerHTML = l, t
                    },
                    on: function() {
                        const e = this.util,
                            t = this.context.textStyle._styleList,
                            n = this.getSelectionNode();
                        for (let i, l, o, s = 0, a = t.length; s < a; s++) {
                            i = t[s], l = i.getAttribute("data-value").split(",");
                            for (let t, s, a = 0; a < l.length; a++) {
                                for (t = n, o = !1; t && !e.isFormatElement(t) && !e.isComponent(t);) {
                                    if (t.nodeName.toLowerCase() === i.getAttribute("data-command").toLowerCase() && (s = l[a], /^\./.test(s) ? e.hasClass(t, s.replace(/^\./, "")) : t.style[s])) {
                                        o = !0;
                                        break
                                    }
                                    t = t.parentNode
                                }
                                if (!o) break
                            }
                            o ? e.addClass(i, "active") : e.removeClass(i, "active")
                        }
                    },
                    pickup: function(e) {
                        e.preventDefault(), e.stopPropagation();
                        let t = e.target,
                            n = null,
                            i = null;
                        for (; !n && !/UL/i.test(t.tagName);) {
                            if (n = t.getAttribute("data-command"), n) {
                                i = t.firstChild;
                                break
                            }
                            t = t.parentNode
                        }
                        if (!n) return;
                        const l = i.style.cssText.replace(/:.+(;|$)/g, ",").split(",");
                        l.pop();
                        const o = i.classList;
                        for (let e = 0, t = o.length; e < t; e++) l.push("." + o[e]);
                        const s = this.util.hasClass(t, "active") ? null : i.cloneNode(!1),
                            a = s ? null : [i.nodeName];
                        this.nodeChange(s, l, a, !0), this.submenuOff()
                    }
                },
                link: c,
                image: f,
                video: _,
                audio: b,
                math: v,
                imageGallery: {
                    name: "imageGallery",
                    add: function(e) {
                        e.addModule([C.a]);
                        const t = e.context;
                        t.imageGallery = {
                            title: e.lang.toolbar.imageGallery,
                            url: t.options.imageGalleryUrl,
                            listClass: "se-image-list",
                            itemTemplateHandler: this.drawItems,
                            selectorHandler: this.setImage.bind(e),
                            columnSize: 4
                        }
                    },
                    open: function(e) {
                        this.plugins.fileBrowser.open.call(this, "imageGallery", e)
                    },
                    drawItems: function(e) {
                        const t = e.src.split("/").pop();
                        return '<div class="se-file-item-img"><img src="' + e.src + '" alt="' + (e.alt || t) + '" data-command="pick"><div class="se-file-img-name se-file-name-back"></div><div class="se-file-img-name __se__img_name">' + (e.name || t) + "</div></div>"
                    },
                    setImage: function(e) {
                        this.callPlugin("image", function() {
                            const t = {
                                name: e.parentNode.querySelector(".__se__img_name").textContent,
                                size: 0
                            };
                            this.context.image._altText = e.alt, this.plugins.image.create_image.call(this, e.src, "", !1, this.context.image._origin_w, this.context.image._origin_h, "none", t)
                        }.bind(this), null)
                    }
                }
            },
            x = {
                redo: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.59 14.18"><g><path d="M11.58,18.48a6.84,6.84,0,1,1,6.85-6.85s0,.26,0,.67a8,8,0,0,1-.22,1.44l.91-.55a.51.51,0,0,1,.36,0,.45.45,0,0,1,.29.22.47.47,0,0,1,.06.36.45.45,0,0,1-.22.29L17.42,15.3l-.12,0h-.25l-.12-.06-.09-.09-.06-.07,0-.06-.87-2.12a.43.43,0,0,1,0-.37.49.49,0,0,1,.27-.26.41.41,0,0,1,.36,0,.53.53,0,0,1,.27.26l.44,1.09a6.51,6.51,0,0,0,.24-1.36,4.58,4.58,0,0,0,0-.64,5.83,5.83,0,0,0-1.73-4.17,5.88,5.88,0,0,0-8.34,0,5.9,5.9,0,0,0,4.17,10.06.51.51,0,0,1,.33.15.48.48,0,0,1,0,.68.53.53,0,0,1-.33.12Z" transform="translate(-4.48 -4.54)"/></g></svg>',
                undo: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.59 14.18"><g><path d="M5,14a.43.43,0,0,1-.22-.29.46.46,0,0,1,.06-.36.43.43,0,0,1,.29-.22.56.56,0,0,1,.36,0l.91.55a8.27,8.27,0,0,1-.22-1.45,5.07,5.07,0,0,1,0-.67A6.85,6.85,0,1,1,13,18.47a.44.44,0,0,1-.33-.13.48.48,0,0,1,0-.68.51.51,0,0,1,.33-.15A5.89,5.89,0,0,0,17.15,7.45a5.88,5.88,0,0,0-8.33,0,5.84,5.84,0,0,0-1.73,4.17s0,.25,0,.65a6.49,6.49,0,0,0,.24,1.37l.44-1.09a.57.57,0,0,1,.27-.26.41.41,0,0,1,.36,0,.53.53,0,0,1,.27.26.43.43,0,0,1,0,.37L7.82,15l0,.09-.09.09-.1.07-.06,0H7.28l-.13,0-1.09-.63c-.65-.36-1-.57-1.1-.63Z" transform="translate(-4.49 -4.53)"/></g></svg>',
                bold: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.76 15.75"><g><path d="M6.4,3.76V19.5h6.76a5.55,5.55,0,0,0,2-.32,4.93,4.93,0,0,0,1.52-1,4.27,4.27,0,0,0,1.48-3.34,3.87,3.87,0,0,0-.69-2.37,5.74,5.74,0,0,0-.71-.83,3.44,3.44,0,0,0-1.1-.65,3.6,3.6,0,0,0,1.58-1.36,3.66,3.66,0,0,0,.53-1.93,3.7,3.7,0,0,0-1.21-2.87,4.65,4.65,0,0,0-3.25-1.1H6.4Zm2.46,6.65V5.57h3.52a4.91,4.91,0,0,1,1.36.15,2.3,2.3,0,0,1,.85.45,2.06,2.06,0,0,1,.74,1.71,2.3,2.3,0,0,1-.78,1.92,2.54,2.54,0,0,1-.86.46,4.7,4.7,0,0,1-1.32.15H8.86Zm0,7.27V12.15H12.7a4.56,4.56,0,0,1,1.38.17,3.43,3.43,0,0,1,.95.49,2.29,2.29,0,0,1,.92,2,2.73,2.73,0,0,1-.83,2.1,2.66,2.66,0,0,1-.83.58,3.25,3.25,0,0,1-1.26.2H8.86Z" transform="translate(-6.4 -3.75)"/></g></svg>',
                underline: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.78 15.74"><g><path d="M14.64,3.76h2.52v7.72a4.51,4.51,0,0,1-.59,2.31,3.76,3.76,0,0,1-1.71,1.53,6.12,6.12,0,0,1-2.64.53,5,5,0,0,1-3.57-1.18,4.17,4.17,0,0,1-1.27-3.24V3.76H9.9v7.3a3,3,0,0,0,.55,2,2.3,2.3,0,0,0,1.83.65,2.26,2.26,0,0,0,1.8-.65,3.09,3.09,0,0,0,.55-2V3.76Zm2.52,13.31V19.5H7.39V17.08h9.77Z" transform="translate(-7.38 -3.76)"/></g></svg>',
                italic: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.49 15.76"><g><path d="M17.16,3.79l.37,0-.06.38-.14.52A10,10,0,0,1,16.21,5a9.37,9.37,0,0,0-1,.32,6.68,6.68,0,0,0-.25.89c-.06.31-.11.59-.14.85-.3,1.36-.52,2.41-.68,3.14l-.61,3.18L13.1,15l-.43,2.4-.12.46a.62.62,0,0,0,0,.28c.44.1.85.17,1.23.22l.68.11a4.51,4.51,0,0,1-.08.6l-.09.42a.92.92,0,0,0-.23,0l-.43,0a1.37,1.37,0,0,1-.29,0c-.13,0-.63-.08-1.49-.16l-2,0c-.28,0-.87,0-1.78.12L7,19.5l.17-.88.8-.2A6.61,6.61,0,0,0,9.19,18,2.62,2.62,0,0,0,9.61,17l.28-1.41.58-2.75.12-.66c.05-.3.11-.58.17-.86s.12-.51.17-.69l.12-.48.12-.43.31-1.6.15-.65.31-1.91V5.14a3.86,3.86,0,0,0-1.48-.29l-.38,0,.2-1.06,3.24.14.75,0c.45,0,1.18,0,2.18-.09.23,0,.46,0,.71,0Z" transform="translate(-7.04 -3.76)"/></g></svg>',
                strike: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 14.9"><g><path d="M12.94,13a4.27,4.27,0,0,1,1.32.58,1.46,1.46,0,0,1,.55,1.2,1.87,1.87,0,0,1-.88,1.64,4.17,4.17,0,0,1-2.35.59,4.44,4.44,0,0,1-2.74-.71,2.72,2.72,0,0,1-1-2.17H5.57a4.56,4.56,0,0,0,1.55,3.7,7,7,0,0,0,4.47,1.23,6,6,0,0,0,4.07-1.3,4.24,4.24,0,0,0,1.52-3.37,4,4,0,0,0-.26-1.4h-4ZM6.37,10.24A3.27,3.27,0,0,1,6,8.68a4,4,0,0,1,1.48-3.3,5.92,5.92,0,0,1,3.88-1.21,5.58,5.58,0,0,1,3.91,1.24,4.36,4.36,0,0,1,1.45,3.17H14.44a2.12,2.12,0,0,0-.91-1.81,4.45,4.45,0,0,0-2.44-.55,3.69,3.69,0,0,0-2,.51A1.64,1.64,0,0,0,8.3,8.22a1.3,1.3,0,0,0,.48,1.11,7,7,0,0,0,2.1.78l.28.06.28.08H6.37Zm13.09.68a.73.73,0,0,1,.49.21.66.66,0,0,1,.2.48.64.64,0,0,1-.2.48.71.71,0,0,1-.49.19H5.1a.67.67,0,0,1-.49-.19.66.66,0,0,1-.2-.48.64.64,0,0,1,.2-.48.73.73,0,0,1,.49-.21H19.46Z" transform="translate(-4.41 -4.17)"/></g></svg>',
                subscript: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.75 14.61"><g><path d="M15.38,4.33H12.74L11.19,7c-.28.46-.51.87-.69,1.21L10.07,9h0l-.44-.8c-.22-.4-.45-.81-.71-1.23L7.34,4.33H4.68L8.26,10,4.4,16.08H7.1l1.69-2.83c.38-.63.72-1.22,1-1.78l.25-.46h0l.49.92c.24.45.48.89.74,1.32L13,16.08h2.61L11.84,10l1.77-2.84,1.77-2.85Zm4.77,13.75H17v-.15c0-.4.05-.64.16-.72a4.42,4.42,0,0,1,1.16-.31,3.3,3.3,0,0,0,1.54-.56A1.84,1.84,0,0,0,20.15,15a1.78,1.78,0,0,0-.44-1.41A2.8,2.8,0,0,0,18,13.25a2.71,2.71,0,0,0-1.69.37,1.83,1.83,0,0,0-.44,1.43v.23H17v-.23q0-.63.18-.78a1.62,1.62,0,0,1,.88-.15,1.59,1.59,0,0,1,.88.15q.18.15.18.75t-.18.75a3.58,3.58,0,0,1-1.18.33,3.33,3.33,0,0,0-1.52.51,1.57,1.57,0,0,0-.32,1.18v1.15h4.27v-.86Z" transform="translate(-4.4 -4.33)"/></g></svg>',
                superscript: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.75 15.42"><g><path d="M12,13.14l3.61-5.81H12.94L11.33,10c-.28.46-.51.88-.69,1.25l-.45.83h0l-.45-.85c-.22-.41-.45-.82-.71-1.24L7.4,7.33H4.68l3.66,5.81L4.4,19.33H7.14l1.74-2.87q.58-1,1-1.83l.25-.48h0l.51.94.75,1.37,1.72,2.87h2.67l-1.92-3.09c-1.12-1.8-1.76-2.83-1.92-3.1Zm4.84-4.41h0l0,.15h3.27v.86H15.77V8.58a1.66,1.66,0,0,1,.33-1.22,3.51,3.51,0,0,1,1.56-.51,3.68,3.68,0,0,0,1.21-.34c.13-.1.19-.36.19-.77S19,5.07,18.87,5A1.63,1.63,0,0,0,18,4.8a1.58,1.58,0,0,0-.91.17c-.13.11-.19.38-.19.8V6H15.78V5.76a1.87,1.87,0,0,1,.45-1.47A2.84,2.84,0,0,1,18,3.91a2.8,2.8,0,0,1,1.72.38,1.84,1.84,0,0,1,.45,1.44,1.91,1.91,0,0,1-.34,1.35,3.24,3.24,0,0,1-1.58.57A3.69,3.69,0,0,0,17,8c-.12.1-.17.35-.17.76Z" transform="translate(-4.4 -3.91)"/></g></svg>',
                erase: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 13.76"><g><path d="M13.69,17.2h6.46v1.31H8.56L4.41,14.37,14,4.75l6.06,6.06L16.89,14l-3.2,3.19Zm-4.61,0h2.77L14.09,15,9.88,10.75,6.25,14.38l1.41,1.41c.84.82,1.31,1.29,1.42,1.41Z" transform="translate(-4.41 -4.75)"/></g></svg>',
                indent: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 12.36"><g><path d="M19.87,15.57a.27.27,0,0,1,.19.08.25.25,0,0,1,.08.19v1.69a.27.27,0,0,1-.08.19.25.25,0,0,1-.19.08H4.68a.27.27,0,0,1-.19-.08.25.25,0,0,1-.08-.19V15.84a.27.27,0,0,1,.27-.27H19.87ZM7.5,14.45a.25.25,0,0,1-.2-.09L4.76,11.84a.29.29,0,0,1,0-.4L7.3,8.9a.29.29,0,0,1,.4,0,.31.31,0,0,1,.07.2v5.06a.32.32,0,0,1-.08.21.26.26,0,0,1-.19.08ZM19.87,8.82a.27.27,0,0,1,.19.08.25.25,0,0,1,.08.19v1.69a.27.27,0,0,1-.08.19.25.25,0,0,1-.19.08H10.31a.27.27,0,0,1-.27-.27V9.1a.27.27,0,0,1,.27-.27h9.56Zm0,3.37a.27.27,0,0,1,.19.08.28.28,0,0,1,.08.21v1.68a.32.32,0,0,1-.08.21.25.25,0,0,1-.19.08H10.31a.27.27,0,0,1-.19-.08.3.3,0,0,1-.08-.21V12.48a.32.32,0,0,1,.08-.21.24.24,0,0,1,.19-.08h9.56Zm.2-6.66a.28.28,0,0,1,.08.2V7.41a.32.32,0,0,1-.08.21.25.25,0,0,1-.19.08H4.68a.27.27,0,0,1-.19-.08.3.3,0,0,1-.08-.21V5.73a.32.32,0,0,1,.08-.21.25.25,0,0,1,.19-.08H19.87a.28.28,0,0,1,.2.09Z" transform="translate(-4.41 -5.44)"/></g></svg>',
                outdent: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 12.36"><g><path d="M4.68,14.45a.27.27,0,0,1-.19-.08.3.3,0,0,1-.08-.21V9.1a.27.27,0,0,1,.08-.19.28.28,0,0,1,.2-.08.25.25,0,0,1,.19.07l2.54,2.54a.29.29,0,0,1,0,.4L4.88,14.36a.24.24,0,0,1-.2.09Zm15.19,1.12a.27.27,0,0,1,.19.08.25.25,0,0,1,.08.19v1.69a.27.27,0,0,1-.08.19.25.25,0,0,1-.19.08H4.68a.27.27,0,0,1-.19-.08.25.25,0,0,1-.08-.19V15.84a.27.27,0,0,1,.27-.27H19.87Zm0-3.38a.27.27,0,0,1,.19.08.28.28,0,0,1,.08.21v1.68a.32.32,0,0,1-.08.21.25.25,0,0,1-.19.08H10.31a.27.27,0,0,1-.19-.08.3.3,0,0,1-.08-.21V12.48a.32.32,0,0,1,.08-.21.24.24,0,0,1,.19-.08h9.56Zm0-3.37a.27.27,0,0,1,.19.08.25.25,0,0,1,.08.19v1.69a.27.27,0,0,1-.08.19.25.25,0,0,1-.19.08H10.31a.27.27,0,0,1-.27-.27V9.1a.27.27,0,0,1,.27-.27h9.56Zm.2-3.29a.28.28,0,0,1,.08.2V7.41a.32.32,0,0,1-.08.21.25.25,0,0,1-.19.08H4.68a.27.27,0,0,1-.19-.08.3.3,0,0,1-.08-.21V5.73a.32.32,0,0,1,.08-.21.25.25,0,0,1,.19-.08H19.87a.28.28,0,0,1,.2.09Z" transform="translate(-4.41 -5.44)"/></g></svg>',
                expansion: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 15.74"><g><path d="M11.8,13.06l-5.1,5.1H9.51V19.5H4.41V14.4H5.75v2.81L8.3,14.66q2.25-2.23,2.55-2.55Zm8.35-9.3v5.1H18.81V6.05l-5.1,5.1-1-1,5.1-5.1H15.05V3.76Z" transform="translate(-4.41 -3.76)"/></g></svg>',
                reduction: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 15.74"><g><path d="M14.91,10h2.87v1.38H12.55V6.12h1.38V9l5.24-5.24.48.49.49.48ZM6.77,11.92H12v5.23H10.62V14.26L5.37,19.5l-1-1L9.63,13.3H6.77Z" transform="translate(-4.4 -3.76)"/></g></svg>',
                code_view: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.73 11.8"><g><path d="M8.09,7.94a.76.76,0,0,1,.53.22.72.72,0,0,1,.21.52.76.76,0,0,1-.22.54L6.18,11.63l2.43,2.44a.69.69,0,0,1,.2.51.66.66,0,0,1-.21.51.75.75,0,0,1-.51.22.63.63,0,0,1-.51-.21h0L4.63,12.15a.7.7,0,0,1-.22-.53.67.67,0,0,1,.25-.55L7.57,8.16a.82.82,0,0,1,.52-.22Zm12.05,3.69a.7.7,0,0,1-.23.52L17,15.1h0a.66.66,0,0,1-.51.21.73.73,0,0,1-.51-.22.75.75,0,0,1-.22-.51.63.63,0,0,1,.21-.51l2.43-2.44L15.92,9.22a.73.73,0,0,1-.22-.53A.74.74,0,0,1,17,8.18h0l2.91,2.91a.67.67,0,0,1,.27.54Zm-5.9-5.9a.73.73,0,0,1,.61.32.71.71,0,0,1,.07.68L11,17a1,1,0,0,1-.22.32.6.6,0,0,1-.35.16.75.75,0,0,1-.69-.26.69.69,0,0,1-.12-.72L13.56,6.23a.75.75,0,0,1,.26-.35.74.74,0,0,1,.42-.15Z" transform="translate(-4.41 -5.73)"/></g></svg>',
                preview: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.65 15.66"><g><path d="M16.19,14.43l2.49,2.49a.73.73,0,0,1,.21.52.67.67,0,0,1-.22.51.7.7,0,0,1-.52.22.69.69,0,0,1-.51-.21l-2.49-2.48a5.17,5.17,0,0,1-1.34.69,4.64,4.64,0,0,1-1.48.24,4.78,4.78,0,1,1,0-9.56,4.79,4.79,0,0,1,1.84.36,4.9,4.9,0,0,1,1.56,1,4.77,4.77,0,0,1,.46,6.18ZM10,14a3.3,3.3,0,0,0,2.34.93A3.37,3.37,0,0,0,14.7,14a3.3,3.3,0,0,0-1.08-5.41,3.47,3.47,0,0,0-2.56,0A3,3,0,0,0,10,9.28,3.31,3.31,0,0,0,10,14ZM16,4a3.86,3.86,0,0,1,2.77,1.14A3.9,3.9,0,0,1,20,7.85v4a.77.77,0,0,1-.22.53.7.7,0,0,1-.52.21.72.72,0,0,1-.74-.74v-4a2.46,2.46,0,0,0-.72-1.73A2.37,2.37,0,0,0,16,5.45H8.53A2.42,2.42,0,0,0,6.08,7.89v7.52a2.41,2.41,0,0,0,.71,1.73,2.46,2.46,0,0,0,1.74.72h4.08a.73.73,0,0,1,0,1.46H8.53a3.85,3.85,0,0,1-2.78-1.14A3.93,3.93,0,0,1,4.6,15.4V7.87A3.94,3.94,0,0,1,5.76,5.09,3.88,3.88,0,0,1,8.54,4H16Z" transform="translate(-4.45 -3.8)"/></g></svg>',
                print: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.05 16.04"><g><path d="M19.76,15.84a1.29,1.29,0,0,0,.39-.92V8.35A2.05,2.05,0,0,0,19.57,7a1.93,1.93,0,0,0-1.38-.57H6.37a1.95,1.95,0,0,0-2,2v6.56a1.23,1.23,0,0,0,.38.92,1.35,1.35,0,0,0,.93.38h2V14.9l-2,0V8.35a.67.67,0,0,1,.18-.47.62.62,0,0,1,.48-.19H18.18a.6.6,0,0,1,.46.19.66.66,0,0,1,.18.47V14.9h-2v1.32h2A1.35,1.35,0,0,0,19.76,15.84ZM17.52,7.69V5.06a1.31,1.31,0,0,0-.38-.92,1.34,1.34,0,0,0-.94-.38H8.34A1.3,1.3,0,0,0,7,5.06V7.69H8.34V5.06h7.87V7.69h1.31ZM8.34,12.93h7.87l0,5.26H8.34V12.93Zm7.87,5.26v0Zm.65,1.31a.6.6,0,0,0,.46-.19.72.72,0,0,0,.2-.47V12.29a.74.74,0,0,0-.2-.47.6.6,0,0,0-.46-.19H7.68a.6.6,0,0,0-.46.19.72.72,0,0,0-.2.47v6.55a.74.74,0,0,0,.2.47.6.6,0,0,0,.46.19h9.18ZM16.67,9.28a.7.7,0,0,0-.94,0,.63.63,0,0,0-.18.46.67.67,0,0,0,.18.47.68.68,0,0,0,.94,0,.66.66,0,0,0,.18-.47A.58.58,0,0,0,16.67,9.28Z" transform="translate(-4.25 -3.61)"/></g></svg>',
                template: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.27 15.64"><g><path d="M18.18,19.16a1,1,0,0,0,1-1V5.73a1,1,0,0,0-1-1h-2v1h2V18.19H6.37V5.73h2v-1h-2A.94.94,0,0,0,5.68,5a1,1,0,0,0-.29.7V18.18a.94.94,0,0,0,.29.69,1,1,0,0,0,.69.29H18.18ZM9.82,10.31h4.92a.49.49,0,0,0,.35-.15.47.47,0,0,0,.15-.35.49.49,0,0,0-.15-.35.47.47,0,0,0-.35-.15H9.82a.49.49,0,0,0-.35.15.47.47,0,0,0-.15.35.49.49,0,0,0,.15.35.47.47,0,0,0,.35.15Zm5.9,4.92H8.83a.49.49,0,0,0-.35.15.47.47,0,0,0-.15.35.49.49,0,0,0,.15.35.47.47,0,0,0,.35.15h6.89a.49.49,0,0,0,.35-.15.47.47,0,0,0,.15-.35.51.51,0,0,0-.5-.5ZM7.36,12.77a.49.49,0,0,0,.15.35.47.47,0,0,0,.35.15h8.85a.49.49,0,0,0,.35-.15.47.47,0,0,0,.15-.35.49.49,0,0,0-.15-.35.47.47,0,0,0-.35-.15H7.85a.49.49,0,0,0-.35.15.52.52,0,0,0-.14.35Z" transform="translate(-5.14 -3.77)"/><path d="M14.24,6.71a1,1,0,0,0,1-1,1,1,0,0,0-1-1,1,1,0,0,0-1-1h-2a.94.94,0,0,0-.69.28,1,1,0,0,0-.29.7A.94.94,0,0,0,9.62,5a.91.91,0,0,0-.29.69,1,1,0,0,0,.29.7,1,1,0,0,0,.69.29h3.93Z" transform="translate(-5.14 -3.77)"/></g></svg>',
                line_height: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.76 13.56"><g><path d="M4.4,4.88V8.26a2,2,0,0,0,.5.39s.1,0,.18-.12a.62.62,0,0,0,.17-.28c.06-.19.13-.44.21-.74s.14-.52.19-.66a.58.58,0,0,1,.21-.3,2.41,2.41,0,0,1,.63-.21,3.83,3.83,0,0,1,.88-.12,9.15,9.15,0,0,1,1.31.06.16.16,0,0,1,.11,0,.26.26,0,0,1,.06.14,4,4,0,0,1,0,.49v2l.05,3.77c0,1.41,0,2.68-.05,3.81a1.79,1.79,0,0,1-.11.49,10.68,10.68,0,0,1-1.4.45,1.12,1.12,0,0,0-.69.43v.31l0,.22.61,0c.85-.08,1.54-.12,2.06-.12a19.76,19.76,0,0,1,2.09.08,15.08,15.08,0,0,0,1.64.08,1.4,1.4,0,0,0,.29,0,1.58,1.58,0,0,0,0-.26l-.05-.43a2.26,2.26,0,0,0-.43-.17l-.77-.22-.15,0a2.55,2.55,0,0,1-.78-.28,2.56,2.56,0,0,1-.11-.75l0-1.29,0-3.15V7.53a10.51,10.51,0,0,1,.06-1.2,3.83,3.83,0,0,1,.6,0l1.88,0a2.18,2.18,0,0,1,.38,0,.45.45,0,0,1,.23.17.9.9,0,0,1,.05.25c0,.16.06.35.1.58a3.33,3.33,0,0,0,.14.55A6.39,6.39,0,0,0,15,9a2.91,2.91,0,0,0,.6-.15,2.77,2.77,0,0,0,0-.46l0-.51,0-2.95-.25,0-.38,0L15,4.94a.71.71,0,0,1-.18.15.45.45,0,0,1-.25.07l-.29,0H8.75l-.15,0H7.45a17,17,0,0,1-1.86,0L5.36,5l-.25-.13ZM19.75,16.14h-.69v-9h.69A.4.4,0,0,0,20.13,7c.06-.11,0-.24-.1-.39L18.92,5.15a.52.52,0,0,0-.86,0L17,6.58c-.12.15-.16.28-.1.39s.18.16.38.16h.69v9h-.69a.4.4,0,0,0-.38.16c-.06.11,0,.24.1.39l1.11,1.43a.52.52,0,0,0,.86,0L20,16.69c.12-.15.16-.28.1-.39a.4.4,0,0,0-.38-.16Z" transform="translate(-4.4 -4.86)"/></g></svg>',
                paragraph_style: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.81 15.74"><g><path d="M18.18,3.76v2h-2V19.5h-2V5.73h-2V19.5h-2V11.63a3.94,3.94,0,0,1,0-7.87h7.87Z" transform="translate(-6.37 -3.76)"/></g></svg>',
                text_style: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.76 15.74"><g><path d="M17.68,6.71a2.22,2.22,0,0,0,1.06-.22.74.74,0,0,0,.42-.7.73.73,0,0,0-.08-.33.67.67,0,0,0-.17-.22,1,1,0,0,0-.31-.15L18.26,5l-.45-.09A15.27,15.27,0,0,0,13.26,5V4.74c0-.66-.63-1-1.92-1-.24,0-.43.15-.59.46a4,4,0,0,0-.36,1.14h0v0a26.45,26.45,0,0,1-3.5.35A2,2,0,0,0,5.77,6a.84.84,0,0,0-.37.79,2.14,2.14,0,0,0,.41,1.29,1.23,1.23,0,0,0,1.05.63,16.62,16.62,0,0,0,3.29-.45l-.34,3.35c-.16,1.61-.29,2.9-.37,3.86s-.12,1.66-.12,2.09l0,.65a5.15,5.15,0,0,0,.05.6,1.28,1.28,0,0,0,.16.54.34.34,0,0,0,.28.18,1.16,1.16,0,0,0,.79-.46,3.66,3.66,0,0,0,.68-1,22.08,22.08,0,0,0,1-4.33q.49-3.1.78-6.15a24.69,24.69,0,0,1,4.62-.84Z" transform="translate(-5.4 -3.76)"/></g></svg>',
                save: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 15.74"><g><path d="M18.53,19.5l.2-.05A1.78,1.78,0,0,0,20.13,18l0-.09V7.14a2,2,0,0,0-.28-.64A3.18,3.18,0,0,0,19.43,6c-.5-.52-1-1-1.55-1.54A2.59,2.59,0,0,0,17.37,4a1.83,1.83,0,0,0-.61-.25H6l-.21,0a1.78,1.78,0,0,0-1.4,1.49l0,.1V17.87a2.49,2.49,0,0,0,.09.37,1.79,1.79,0,0,0,1.44,1.23l.09,0Zm-6.25-.6H6.92a.61.61,0,0,1-.68-.48.78.78,0,0,1,0-.22V12.3a.62.62,0,0,1,.69-.68H17.64a.62.62,0,0,1,.69.69V18.2a.64.64,0,0,1-.71.69H12.28ZM12,9.81H8.15a.63.63,0,0,1-.72-.71v-4a.64.64,0,0,1,.72-.72h7.66a.64.64,0,0,1,.72.72v4a.65.65,0,0,1-.74.72ZM13.5,5V9.18h1.78V5Z" transform="translate(-4.41 -3.76)"/></g></svg>',
                blockquote: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 475.082 475.081"><g><path d="M164.45,219.27h-63.954c-7.614,0-14.087-2.664-19.417-7.994c-5.327-5.33-7.994-11.801-7.994-19.417v-9.132c0-20.177,7.139-37.401,21.416-51.678c14.276-14.272,31.503-21.411,51.678-21.411h18.271c4.948,0,9.229-1.809,12.847-5.424c3.616-3.617,5.424-7.898,5.424-12.847V54.819c0-4.948-1.809-9.233-5.424-12.85c-3.617-3.612-7.898-5.424-12.847-5.424h-18.271c-19.797,0-38.684,3.858-56.673,11.563c-17.987,7.71-33.545,18.132-46.68,31.267c-13.134,13.129-23.553,28.688-31.262,46.677C3.855,144.039,0,162.931,0,182.726v200.991c0,15.235,5.327,28.171,15.986,38.834c10.66,10.657,23.606,15.985,38.832,15.985h109.639c15.225,0,28.167-5.328,38.828-15.985c10.657-10.663,15.987-23.599,15.987-38.834V274.088c0-15.232-5.33-28.168-15.994-38.832C192.622,224.6,179.675,219.27,164.45,219.27z"/><path d="M459.103,235.256c-10.656-10.656-23.599-15.986-38.828-15.986h-63.953c-7.61,0-14.089-2.664-19.41-7.994c-5.332-5.33-7.994-11.801-7.994-19.417v-9.132c0-20.177,7.139-37.401,21.409-51.678c14.271-14.272,31.497-21.411,51.682-21.411h18.267c4.949,0,9.233-1.809,12.848-5.424c3.613-3.617,5.428-7.898,5.428-12.847V54.819c0-4.948-1.814-9.233-5.428-12.85c-3.614-3.612-7.898-5.424-12.848-5.424h-18.267c-19.808,0-38.691,3.858-56.685,11.563c-17.984,7.71-33.537,18.132-46.672,31.267c-13.135,13.129-23.559,28.688-31.265,46.677c-7.707,17.987-11.567,36.879-11.567,56.674v200.991c0,15.235,5.332,28.171,15.988,38.834c10.657,10.657,23.6,15.985,38.828,15.985h109.633c15.229,0,28.171-5.328,38.827-15.985c10.664-10.663,15.985-23.599,15.985-38.834V274.088C475.082,258.855,469.76,245.92,459.103,235.256z"/></g></svg>',
                arrow_down: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.73 8.67"><g><path d="M18.79,7.52a.8.8,0,0,1,.56-.23.82.82,0,0,1,.79.79.8.8,0,0,1-.23.56l-7.07,7.07a.79.79,0,0,1-.57.25.77.77,0,0,1-.57-.25h0L4.64,8.65a.8.8,0,0,1-.23-.57.82.82,0,0,1,.79-.79.8.8,0,0,1,.56.23L12.28,14l3.26-3.26,3.25-3.26Z" transform="translate(-4.41 -7.29)"/></g></svg>',
                align_justify: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 13.77"><g><path d="M4.41,4.74v2H20.15v-2H4.41Zm0,5.9H20.15v-2H4.41v2Zm0,3.94H20.15v-2H4.41v2Zm0,3.93h7.87v-2H4.41v2Z" transform="translate(-4.41 -4.74)"/></g></svg>',
                align_left: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 13.77"><g><path d="M4.41,4.74v2H20.15v-2H4.41Zm11.8,3.94H4.41v2H16.22v-2Zm-11.8,5.9H18.18v-2H4.41v2Zm0,3.93h9.84v-2H4.41v2Z" transform="translate(-4.41 -4.74)"/></g></svg>',
                align_right: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 13.77"><g><path d="M4.41,4.74v2H20.15v-2H4.41Zm3.93,5.9H20.15v-2H8.34v2Zm-2,3.94H20.14v-2H6.37v2Zm3.94,3.93h9.84v-2H10.31v2Z" transform="translate(-4.41 -4.74)"/></g></svg>',
                align_center: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 13.77"><g><path d="M4.41,4.74v2H20.15v-2H4.41Zm2,3.94v2H18.18v-2H6.37Zm-1,5.9H19.16v-2H5.39v2Zm2,3.93H17.2v-2H7.36v2Z" transform="translate(-4.41 -4.74)"/></g></svg>',
                font_color: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 14.61"><g><path d="M18.5,15.57,14.28,4.32h-3.4L6.65,15.57h3l.8-2.26h4.23l.8,2.26h3ZM14,11.07H11.14L12.54,7,13.25,9c.41,1.18.64,1.86.7,2ZM4.41,16.69v2.24H20.15V16.69H4.41Z" transform="translate(-4.41 -4.32)"/></g></svg>',
                highlight_color: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.66 15.74"><g><path d="M12.32,9.31,13.38,13H11.21l.52-1.83q.46-1.61.54-1.83ZM4.44,3.76H20.1V19.5H4.44V3.76ZM14.71,17.32h2.63L13.7,6H10.89L7.26,17.32H9.89l.63-2.24h3.55l.32,1.12c.18.65.29,1,.32,1.12Z" transform="translate(-4.44 -3.76)"/></g></svg>',
                list_bullets: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 12.37"><g><path d="M7.77,16.12a1.59,1.59,0,0,0-.49-1.18,1.62,1.62,0,0,0-1.19-.49,1.68,1.68,0,1,0,0,3.36,1.67,1.67,0,0,0,1.68-1.69Zm0-4.48A1.67,1.67,0,0,0,6.09,10,1.68,1.68,0,0,0,4.9,12.82a1.62,1.62,0,0,0,1.19.49,1.67,1.67,0,0,0,1.68-1.67Zm12.38,3.64a.27.27,0,0,0-.08-.19.28.28,0,0,0-.2-.09H9.19a.28.28,0,0,0-.2.08.29.29,0,0,0-.08.19V17a.27.27,0,0,0,.28.28H19.87a.27.27,0,0,0,.19-.08.24.24,0,0,0,.08-.2V15.28ZM7.77,7.13a1.63,1.63,0,0,0-.49-1.2,1.61,1.61,0,0,0-1.19-.49,1.61,1.61,0,0,0-1.19.49,1.71,1.71,0,0,0,0,2.4,1.62,1.62,0,0,0,1.19.49,1.61,1.61,0,0,0,1.19-.49,1.63,1.63,0,0,0,.49-1.2Zm12.38,3.66a.28.28,0,0,0-.08-.2.29.29,0,0,0-.19-.08H9.19a.27.27,0,0,0-.28.28v1.69a.27.27,0,0,0,.08.19.24.24,0,0,0,.2.08H19.87a.27.27,0,0,0,.19-.08.25.25,0,0,0,.08-.19V10.79Zm0-4.5a.27.27,0,0,0-.08-.19A.25.25,0,0,0,19.88,6H9.19A.28.28,0,0,0,9,6.1a.26.26,0,0,0-.08.19V8A.27.27,0,0,0,9,8.17a.24.24,0,0,0,.2.08H19.87a.27.27,0,0,0,.19-.08A.25.25,0,0,0,20.14,8V6.29Z" transform="translate(-4.41 -5.44)"/></g></svg>',
                list_number: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.69 15.74"><g><path d="M7.66,18a1.24,1.24,0,0,0-.26-.78,1.17,1.17,0,0,0-.72-.42l.85-1V15H4.58v1.34h.94v-.46l.85,0h0c-.11.11-.22.23-.32.35s-.23.27-.37.47L5.39,17l.23.51c.61-.05.92.11.92.49a.42.42,0,0,1-.18.37.79.79,0,0,1-.45.12A1.41,1.41,0,0,1,5,18.15l-.51.77A2.06,2.06,0,0,0,6,19.5a1.8,1.8,0,0,0,1.2-.41A1.38,1.38,0,0,0,7.66,18Zm0-5.54H6.75V13H5.63A.72.72,0,0,1,6,12.51a5.45,5.45,0,0,1,.66-.45,2.71,2.71,0,0,0,.67-.57,1.19,1.19,0,0,0,.31-.81,1.29,1.29,0,0,0-.45-1,1.86,1.86,0,0,0-2-.11,1.51,1.51,0,0,0-.62.7l.74.52A.87.87,0,0,1,6,10.28a.51.51,0,0,1,.35.12.42.42,0,0,1,.13.33.55.55,0,0,1-.21.4,3,3,0,0,1-.5.38c-.19.13-.39.27-.58.42a2,2,0,0,0-.5.6,1.63,1.63,0,0,0-.21.81,3.89,3.89,0,0,0,.05.48h3.2V12.44Zm12.45,2.82a.27.27,0,0,0-.08-.19.28.28,0,0,0-.21-.08H9.1a.32.32,0,0,0-.21.08.24.24,0,0,0-.08.2V17a.27.27,0,0,0,.08.19.3.3,0,0,0,.21.08H19.83a.32.32,0,0,0,.21-.08.25.25,0,0,0,.08-.19V15.26ZM7.69,7.32h-1V3.76H5.8L4.6,4.88l.63.68a1.85,1.85,0,0,0,.43-.48h0l0,2.24H4.74V8.2h3V7.32Zm12.43,3.42a.27.27,0,0,0-.08-.19.28.28,0,0,0-.21-.08H9.1a.32.32,0,0,0-.21.08.24.24,0,0,0-.08.2v1.71a.27.27,0,0,0,.08.19.3.3,0,0,0,.21.08H19.83a.32.32,0,0,0,.21-.08.25.25,0,0,0,.08-.19V10.74Zm0-4.52A.27.27,0,0,0,20,6,.28.28,0,0,0,19.83,6H9.1A.32.32,0,0,0,8.89,6a.24.24,0,0,0-.08.19V7.93a.27.27,0,0,0,.08.19.32.32,0,0,0,.21.08H19.83A.32.32,0,0,0,20,8.12a.26.26,0,0,0,.08-.2V6.22Z" transform="translate(-4.43 -3.76)"/></g></svg>',
                table: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 15.74"><g><path d="M4.41,8.05V3.76H8.7V8.05H4.41Zm5.71,0V3.76h4.3V8.05h-4.3Zm5.74-4.29h4.29V8.05H15.86V3.76Zm-11.45,10V9.48H8.7v4.3H4.41Zm5.71,0V9.48h4.3v4.3h-4.3Zm5.74,0V9.48h4.29v4.3H15.86ZM4.41,19.5V15.21H8.7V19.5H4.41Zm5.71,0V15.21h4.3V19.5h-4.3Zm5.74,0V15.21h4.29V19.5H15.86Z" transform="translate(-4.41 -3.76)"/></g></svg>',
                horizontal_rule: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 2.24"><g><path d="M20.15,12.75V10.51H4.41v2.24H20.15Z" transform="translate(-4.41 -10.51)"/></g></svg>',
                show_blocks: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.66 15.67"><g><path d="M19.72,5.58a1.64,1.64,0,0,0-1.64-1.64H6.23a1.62,1.62,0,0,0-1.16.48,1.63,1.63,0,0,0-.48,1.16V9.63a1.6,1.6,0,0,0,.48,1.16,1.62,1.62,0,0,0,1.16.47H18.09a1.67,1.67,0,0,0,1.16-.47,1.62,1.62,0,0,0,.48-1.16V5.58Zm-.94,4.05a.68.68,0,0,1-.7.7H6.23a.66.66,0,0,1-.48-.2.74.74,0,0,1-.21-.5V5.58a.66.66,0,0,1,.2-.48.71.71,0,0,1,.48-.21H18.08a.74.74,0,0,1,.5.21.66.66,0,0,1,.2.48ZM6.48,7.72a.21.21,0,0,0,.17-.07.22.22,0,0,0,.07-.17V7.06a1.27,1.27,0,0,1,.11-.52.37.37,0,0,1,.36-.23H8.77A.25.25,0,0,0,9,6.17a.19.19,0,0,0,0-.23.27.27,0,0,0-.2-.12H7.19a.88.88,0,0,0-.72.39,1.51,1.51,0,0,0-.23.85v.42a.24.24,0,0,0,.24.24Zm-.19.81a.21.21,0,0,0,.17-.07.26.26,0,0,0,.07-.17.24.24,0,0,0-.24-.24.2.2,0,0,0-.16.09.2.2,0,0,0-.07.16.22.22,0,0,0,.07.17.23.23,0,0,0,.16.06Zm8.46,5.1a1.63,1.63,0,0,0-.47-1.16A1.61,1.61,0,0,0,13.12,12H6.23a1.6,1.6,0,0,0-1.16.46,1.62,1.62,0,0,0-.48,1.16v4.05a1.64,1.64,0,0,0,1.64,1.64h6.89a1.6,1.6,0,0,0,1.16-.48,1.62,1.62,0,0,0,.47-1.16Zm-.94,4a.7.7,0,0,1-.2.49.65.65,0,0,1-.5.2H6.23a.66.66,0,0,1-.48-.2.75.75,0,0,1-.21-.49v-4a.74.74,0,0,1,.21-.5.66.66,0,0,1,.48-.2h6.89a.68.68,0,0,1,.7.7v4Zm6.15,0v-4a1.6,1.6,0,0,0-.48-1.16A1.67,1.67,0,0,0,18.32,12H17.1a1.63,1.63,0,0,0-1.16.47,1.61,1.61,0,0,0-.47,1.16v4a1.67,1.67,0,0,0,.47,1.16,1.62,1.62,0,0,0,1.16.48h1.22A1.64,1.64,0,0,0,20,17.68Zm-.94-4v4a.75.75,0,0,1-.21.49.62.62,0,0,1-.48.2H17.11a.69.69,0,0,1-.5-.2.7.7,0,0,1-.2-.49v-4a.68.68,0,0,1,.7-.7h1.22a.66.66,0,0,1,.48.2.72.72,0,0,1,.21.5Z" transform="translate(-4.44 -3.79)"/></g></svg>',
                cancel: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 15.74"><g><path d="M14.15,11.63l5.61,5.61a1.29,1.29,0,0,1,.38.93,1.27,1.27,0,0,1-.4.93,1.25,1.25,0,0,1-.92.4,1.31,1.31,0,0,1-.94-.4l-5.61-5.61L6.67,19.1a1.31,1.31,0,0,1-.94.4,1.24,1.24,0,0,1-.92-.4,1.27,1.27,0,0,1-.4-.93,1.33,1.33,0,0,1,.38-.93l5.61-5.63L4.79,6a1.26,1.26,0,0,1-.38-.93,1.22,1.22,0,0,1,.4-.92,1.28,1.28,0,0,1,.92-.39,1.38,1.38,0,0,1,.94.38l5.61,5.61,5.61-5.61a1.33,1.33,0,0,1,.94-.38,1.26,1.26,0,0,1,.92.39,1.24,1.24,0,0,1,.4.92,1.29,1.29,0,0,1-.39.93L17,8.81l-2.8,2.82Z" transform="translate(-4.41 -3.76)"/></g></svg>',
                image: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.75 15.77"><g><path d="M8.77,8.72a.88.88,0,0,1-.61-.27.82.82,0,0,1-.25-.61.89.89,0,0,1,.25-.62A.82.82,0,0,1,8.77,7a.81.81,0,0,1,.61.25.83.83,0,0,1,.27.62.81.81,0,0,1-.25.61.91.91,0,0,1-.63.27Zm9.62-5a1.74,1.74,0,0,1,1.76,1.76V17.76a1.74,1.74,0,0,1-1.76,1.76H6.16A1.74,1.74,0,0,1,4.4,17.76V5.51A1.74,1.74,0,0,1,6.16,3.75H18.39Zm0,1.75H6.16v8L8.53,11.8a.94.94,0,0,1,.54-.17.86.86,0,0,1,.54.2L11.09,13l3.64-4.55a.78.78,0,0,1,.34-.25.85.85,0,0,1,.42-.07.89.89,0,0,1,.39.12.78.78,0,0,1,.28.29l2.24,3.67V5.51Zm0,12.24V15.6L15.3,10.53,11.89,14.8a.89.89,0,0,1-.59.32.82.82,0,0,1-.64-.18L9,13.62,6.16,15.74v2Z" transform="translate(-4.4 -3.75)"/></g></svg>',
                video: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 14.55"><g><path d="M20.15,10.26V18.9l-3.94-1.57v1.2H4.41V10.66H16.22v1.23l2-.81,2-.82ZM14.64,17h0V12.54h0v-.31H6V17h8.67Zm3.94-.37v-4l-2.37,1v2l1.18.48,1.19.48ZM7.94,9.86A2.77,2.77,0,0,1,5.19,7.11a2.76,2.76,0,0,1,5.51,0A2.78,2.78,0,0,1,7.94,9.86Zm0-3.93a1.21,1.21,0,0,0-.83.35,1.15,1.15,0,0,0-.34.84A1.09,1.09,0,0,0,7.11,8,1.15,1.15,0,0,0,8,8.28,1.13,1.13,0,0,0,9.11,7.12,1.16,1.16,0,0,0,7.94,5.93Zm5.9,3.93a2.34,2.34,0,0,1-1.67-.68,2.3,2.3,0,0,1-.68-1.67,2.35,2.35,0,0,1,4-1.67,2.37,2.37,0,0,1,0,3.34,2.33,2.33,0,0,1-1.68.68Zm0-3.14a.75.75,0,1,0,.55.22.73.73,0,0,0-.55-.22Z" transform="translate(-4.41 -4.35)"/></g></svg>',
                link: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 15.72"><g><path d="M13.05,13.63a.24.24,0,0,1,.15.22L13.42,16a.19.19,0,0,1-.08.18l-2.12,2.14a4.08,4.08,0,0,1-1.29.85A4,4,0,0,1,4.71,17a3.92,3.92,0,0,1-.3-1.52A4,4,0,0,1,4.71,14a3.91,3.91,0,0,1,.87-1.3L7.7,10.56a.25.25,0,0,1,.2-.06l2.17.22a.21.21,0,0,1,.19.15.24.24,0,0,1,0,.25L7.12,14.23a1.81,1.81,0,0,0,0,2.58,1.78,1.78,0,0,0,1.29.52,1.74,1.74,0,0,0,1.28-.52L12.8,13.7a.24.24,0,0,1,.25-.07ZM19,4.92a4,4,0,0,1,0,5.66L16.86,12.7a.25.25,0,0,1-.17.08l-2.2-.23a.21.21,0,0,1-.19-.15.22.22,0,0,1,0-.25L17.44,9a1.81,1.81,0,0,0,0-2.58,1.78,1.78,0,0,0-1.29-.52,1.74,1.74,0,0,0-1.28.52L11.76,9.57a.21.21,0,0,1-.25,0,.24.24,0,0,1-.16-.21l-.22-2.17a.19.19,0,0,1,.08-.18l2.12-2.14a4.08,4.08,0,0,1,1.29-.85,4.05,4.05,0,0,1,3.06,0,3.85,3.85,0,0,1,1.3.85ZM5.84,9.82a.25.25,0,0,1-.18-.08.19.19,0,0,1-.07-.19l.11-.77a.2.2,0,0,1,.11-.17.24.24,0,0,1,.2,0l2.5.72a.25.25,0,0,1,.15.27.22.22,0,0,1-.23.21l-2.59,0Zm4.12-2-.73-2.5a.27.27,0,0,1,0-.2A.21.21,0,0,1,9.41,5L10.19,5a.25.25,0,0,1,.19,0,.23.23,0,0,1,.08.18l-.05,2.61a.2.2,0,0,1-.19.23h0A.22.22,0,0,1,10,7.85Zm8.76,5.58a.25.25,0,0,1,.18.08.23.23,0,0,1,.06.2l-.11.77a.25.25,0,0,1-.11.17.21.21,0,0,1-.12,0l-.08,0L16,14a.25.25,0,0,1-.15-.27.22.22,0,0,1,.22-.21l1.29,0,1.33,0Zm-4.12,2,.74,2.51a.28.28,0,0,1,0,.2.23.23,0,0,1-.18.11l-.8.11a.23.23,0,0,1-.17-.07.25.25,0,0,1-.08-.18l0-2.61a.22.22,0,0,1,.22-.22.21.21,0,0,1,.26.15Z" transform="translate(-4.41 -3.77)"/></g></svg>',
                math: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.81 15.73"><g><path d="M17.19,5.73a1,1,0,0,0,.71-.29,1,1,0,0,0,.28-.7,1,1,0,0,0-1-1H7.35a1,1,0,0,0-1,1,.77.77,0,0,0,.13.47h0l4.58,6.43L6.68,17.81a1.25,1.25,0,0,0-.29.71.94.94,0,0,0,.28.7.92.92,0,0,0,.69.28H17.2a1,1,0,0,0,.71-.28,1,1,0,0,0,0-1.39.92.92,0,0,0-.71-.29H9.26l3.87-5.43a.86.86,0,0,0,0-.95L9.26,5.73h7.93Z" transform="translate(-6.38 -3.77)"/></g></svg>',
                unlink: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 15.72"><g><path d="M19,18.32a4,4,0,0,0,0-5.68L15.85,9.5l-1.17,1.55L17.57,14a2,2,0,0,1,.61,1.47,2.08,2.08,0,0,1-2.09,2.09,2,2,0,0,1-1.47-.61l-.38-.37-1.74,1,.8.78a4,4,0,0,0,5.68,0ZM8,9.77a2,2,0,0,1-1.27-1,1.89,1.89,0,0,1-.21-1.57A2.1,2.1,0,0,1,7.45,6,2,2,0,0,1,9,5.76L12.27,7.2l.49-2L9.48,3.9a4,4,0,0,0-3.06.41A3.82,3.82,0,0,0,4.56,6.73a3.8,3.8,0,0,0,.4,3A3.78,3.78,0,0,0,7.39,11.6l5.38,2,.49-2-2.64-.94L8,9.77Z" transform="translate(-4.41 -3.76)"/></g></svg>',
                table_header: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.75 15.74"><g><path d="M17,19.5v-.78H15.5v.78H17Zm-3,0v-.78H12.5v.78H14Zm-3,0v-.78H9.53v.78H11Zm-3,0v-.78H6.53v.78H8Zm10.55,0a1.73,1.73,0,0,0,.85-.35,1.67,1.67,0,0,0,.56-.76l-.71-.31a1.21,1.21,0,0,1-.35.4,1.34,1.34,0,0,1-.53.23l.08.38c.06.24.09.38.1.41Zm-13.7-.63.55-.55A.77.77,0,0,1,5.25,18a1.31,1.31,0,0,1-.06-.38v-.38H4.41v.38a2,2,0,0,0,.12.68,1.6,1.6,0,0,0,.35.57Zm15.27-2.12V15.26h-.78v1.49h.78Zm-15-1V14.23H4.41v1.49h.78Zm15-2V12.26h-.78v1.49h.78Zm-15-1V11.22H4.41v1.51h.78Zm15-2V9.26h-.78v1.51h.78Zm-15-1V8.17H4.41V9.74h.78Zm15-2V6.28h-.78V7.77h.78Zm-15-1.11V5.33L4.48,5.1a.77.77,0,0,0-.07.27,2.72,2.72,0,0,0,0,.28v1h.79ZM19.21,5l.63-.4A1.62,1.62,0,0,0,19.16,4a1.94,1.94,0,0,0-.91-.22v.78a1.31,1.31,0,0,1,.56.12.88.88,0,0,1,.4.36ZM6,4.54H7.78V3.76H6a.82.82,0,0,0-.28.06l.12.35c.07.21.1.33.11.36Zm10.8,0V3.76H15.28v.78h1.49Zm-3,0V3.76H12.28v.78h1.49Zm-3,0V3.76H9.28v.78h1.51ZM6,10.84h12.6V6.91H6Z" transform="translate(-4.4 -3.76)"/></g></svg>',
                merge_cell: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.76 15.74"><g><path d="M18.92,13.5h1.23v4.15A1.84,1.84,0,0,1,18.3,19.5H14V18.27H18.3a.6.6,0,0,0,.44-.18.59.59,0,0,0,.18-.44V13.5ZM18.3,3.76a1.84,1.84,0,0,1,1.85,1.85V9.82H18.92V5.6a.6.6,0,0,0-.18-.44A.59.59,0,0,0,18.3,5H14V3.76H18.3Zm1.85,8.51H15.6L17.26,14l-.86.86-3.14-3.17L16.4,8.51l.86.86L15.62,11h4.54v1.24Zm-13.9,6h4.27V19.5H6.25A1.84,1.84,0,0,1,4.4,17.65V13.5H5.63v4.15a.61.61,0,0,0,.62.62Zm0-14.51h4.27V5H6.25a.6.6,0,0,0-.44.18.57.57,0,0,0-.17.43V9.81H4.41V5.6A1.83,1.83,0,0,1,6.25,3.76Zm5,7.9L8.15,14.83,7.3,14,9,12.27H4.41V11H8.94L7.3,9.38,7.73,9l.43-.43Z" transform="translate(-4.4 -3.76)"/></g></svg>',
                split_cell: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.75 15.74"><g><path d="M10.37,12.25H6.74L8.4,13.94l-.87.86L4.41,11.63,7.53,8.5l.87.86L6.74,11h3.62v1.23Zm9.78-.61L17,14.81,16.13,14l1.66-1.69H14.16V11h3.63L16.13,9.37l.43-.43A5.24,5.24,0,0,1,17,8.51ZM18.9,8.22V5.61a.57.57,0,0,0-.18-.43A.65.65,0,0,0,18.29,5H12.88V18.28h5.41a.7.7,0,0,0,.44-.18.57.57,0,0,0,.18-.43V15h1.23v2.64a1.84,1.84,0,0,1-1.85,1.83h-12A1.84,1.84,0,0,1,4.94,19a1.81,1.81,0,0,1-.54-1.29V15H5.63v2.64a.57.57,0,0,0,.18.43.67.67,0,0,0,.44.18h5.41V5H6.25a.7.7,0,0,0-.44.18.56.56,0,0,0-.17.43V8.22H4.41V5.61A1.8,1.8,0,0,1,5,4.31a1.91,1.91,0,0,1,1.31-.55h12a1.89,1.89,0,0,1,1.31.55,1.8,1.8,0,0,1,.54,1.3V8.23H18.9Z" transform="translate(-4.4 -3.76)"/></g></svg>',
                caption: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 13.79"><g><path d="M4.41,18.52H20.15v-2H4.41ZM20,4.73H18.07V6h.65v.65H20V4.73ZM17,6V4.73H14.55V6H17ZM13.49,6V4.73H11V6h2.47ZM10,6V4.73H7.5V6H10ZM5.79,6h.65V4.73H4.5V6.67H5.8V6ZM4.5,11.34H5.79V8.48H4.5ZM6.44,13.8H5.79v-.65H4.5v1.94H6.44ZM17,15.09V13.8H14.55v1.29H17Zm-3.52,0V13.8H11v1.29h2.47Zm-3.53,0V13.8H7.5v1.29H10ZM20,13.16H18.72v.65h-.65V15.1H20Zm-1.29-1.82H20V8.48h-1.3v2.86Z" transform="translate(-4.41 -4.73)"/></g></svg>',
                edit: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 15.73"><g><path d="M7.51,5.68h6l1.52-1.57H6.94a2.4,2.4,0,0,0-1.79.82A2.8,2.8,0,0,0,4.41,6.8V17a2.55,2.55,0,0,0,.75,1.8A2.48,2.48,0,0,0,7,19.5H17.22a2.57,2.57,0,0,0,1.83-.74,2.52,2.52,0,0,0,.77-1.8V8.83l-1.58,1.54v6a1.54,1.54,0,0,1-1.53,1.53H7.51A1.54,1.54,0,0,1,6,16.41V7.21A1.52,1.52,0,0,1,7.51,5.68Zm5.63,7.47h0L10.7,10.74l-1,3.38,1.71-.48,1.7-.49Zm.34-.34h0l5.36-5.32L16.4,5.08,11,10.4l1.23,1.21,1.21,1.2ZM19.93,6.4a.82.82,0,0,0,.22-.48A.54.54,0,0,0,20,5.47L18.45,4A.67.67,0,0,0,18,3.77a.7.7,0,0,0-.48.21l-.74.72,2.44,2.43.37-.37.35-.36Z" transform="translate(-4.41 -3.77)"/></g></svg>',
                delete: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.73 15.74"><g><path d="M19.16,6.71a.94.94,0,0,0,.69-.28.91.91,0,0,0,.29-.68A1,1,0,0,0,19.85,5a.93.93,0,0,0-.69-.3H14.24A.94.94,0,0,0,14,4.06a.92.92,0,0,0-.7-.3h-2a1,1,0,0,0-.7.3.93.93,0,0,0-.28.68H5.39A.92.92,0,0,0,4.7,5a1,1,0,0,0-.29.71.91.91,0,0,0,.29.68,1,1,0,0,0,.69.28H19.16Zm-12.79,1a1,1,0,0,0-.7.3.94.94,0,0,0-.28.69v8.85A1.88,1.88,0,0,0,6,18.93a1.9,1.9,0,0,0,1.39.57H17.2a1.87,1.87,0,0,0,1.39-.58,1.91,1.91,0,0,0,.58-1.39V8.68A1,1,0,0,0,18.88,8a.89.89,0,0,0-.7-.29,1,1,0,0,0-.69.29.92.92,0,0,0-.29.68v7.87a1,1,0,0,1-1,1H8.34a.94.94,0,0,1-.69-.28,1,1,0,0,1-.29-.71V8.68a1,1,0,0,0-1-1Z" transform="translate(-4.41 -3.76)"/></g></svg>',
                modify: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.7 15.74"><g><path d="M19.79,15.23a.66.66,0,0,1,.3.38.59.59,0,0,1-.07.48l-.8,1.38a.66.66,0,0,1-.38.3.59.59,0,0,1-.48-.07l-.68-.38a4.55,4.55,0,0,1-1.34.77v.78a.64.64,0,0,1-.18.45.61.61,0,0,1-.45.18h-1.6a.6.6,0,0,1-.44-.18.66.66,0,0,1-.19-.45v-.78a4.36,4.36,0,0,1-1.32-.77l-.69.38a.58.58,0,0,1-.48.07.66.66,0,0,1-.38-.3l-.38-.66h.83a1.77,1.77,0,0,0,1.23-.52,1.72,1.72,0,0,0,.51-1.23v-.18a3,3,0,0,0,.49-.28l.15.09a1.83,1.83,0,0,0,.88.23A1.75,1.75,0,0,0,15.84,14l.88-1.52a1.7,1.7,0,0,0,.17-1.32,1.66,1.66,0,0,0-.3-.61,1.84,1.84,0,0,0-.51-.45l-.15-.09,0-.29,0-.28.15-.09a1,1,0,0,0,.26-.18l0,.06v.78a4.34,4.34,0,0,1,1.34.77l.68-.38a.68.68,0,0,1,.48-.06.64.64,0,0,1,.38.29l.8,1.38a.58.58,0,0,1,.07.48.63.63,0,0,1-.3.38l-.68.4a3.84,3.84,0,0,1,.08.76,4.13,4.13,0,0,1-.08.78l.34.18.32.2ZM10.17,7.86a1.9,1.9,0,0,1,1.35,3.23,1.85,1.85,0,0,1-1.35.55A1.9,1.9,0,0,1,8.83,8.41a1.92,1.92,0,0,1,1.34-.55Zm1.58,7.2a.73.73,0,0,1-.21.49.66.66,0,0,1-.48.2H9.29a.68.68,0,0,1-.69-.69V14.2a4.75,4.75,0,0,1-1.48-.86l-.75.45a.73.73,0,0,1-.7,0,.63.63,0,0,1-.25-.26L4.54,12a.67.67,0,0,1-.08-.53.71.71,0,0,1,.32-.42l.75-.43a4.8,4.8,0,0,1-.08-.85,4.71,4.71,0,0,1,.08-.85l-.74-.44a.71.71,0,0,1-.32-.42.65.65,0,0,1,.07-.54L5.42,6a.66.66,0,0,1,.42-.32l.18,0a.73.73,0,0,1,.35.09l.75.43A4.68,4.68,0,0,1,8.6,5.33V4.45a.68.68,0,0,1,.69-.69h1.77a.64.64,0,0,1,.48.2.73.73,0,0,1,.21.49v.88a4.75,4.75,0,0,1,1.48.85L14,5.75a.67.67,0,0,1,.34-.09l.18,0a.71.71,0,0,1,.42.32l.89,1.54a.67.67,0,0,1,.06.52.73.73,0,0,1-.32.43l-.75.42a4.8,4.8,0,0,1,.08.85,4.71,4.71,0,0,1-.08.85l.75.43a.66.66,0,0,1,.32.42.73.73,0,0,1-.06.54l-.89,1.52a.69.69,0,0,1-.25.26.7.7,0,0,1-.35.09.64.64,0,0,1-.34-.09l-.75-.45a4.87,4.87,0,0,1-1.48.86v.87ZM7.23,9.75a3,3,0,0,0,.86,2.08,2.94,2.94,0,1,0,4.16-4.16,3,3,0,0,0-2.08-.85A2.94,2.94,0,0,0,7.23,9.75Z" transform="translate(-4.44 -3.76)"/></g></svg>',
                revert: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.76 14.69"><g><path d="M18.26,15V12.3l1.89-2V15a2.58,2.58,0,0,1-.24,1c-.2.58-.75.92-1.65,1H7.56v2L4.41,15.63,7.56,13v2h10.7ZM6.3,8.28V11L4.41,13V8.28a2.58,2.58,0,0,1,.24-1c.2-.58.75-.92,1.65-1H17v-2l3.15,3.34L17,10.3v-2H6.3Z" transform="translate(-4.4 -4.28)"/></g></svg>',
                auto_size: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 15.74"><g><path d="M6.71,17.19,6.89,16l1.21-.15A6,6,0,0,1,6.81,13.9a5.78,5.78,0,0,1-.45-2.27A6,6,0,0,1,8.1,7.45a5.83,5.83,0,0,1,4.17-1.73l1-1-1-1A7.89,7.89,0,0,0,5,14.64a7.73,7.73,0,0,0,1.71,2.55Zm5.57,2.31h0A7.86,7.86,0,0,0,17.85,6.07L17.67,7.3l-1.21.15a5.9,5.9,0,0,1,1.29,1.92,5.81,5.81,0,0,1,.45,2.26,5.91,5.91,0,0,1-5.9,5.9l-1,1,.49.49.47.5Z" transform="translate(-4.41 -3.76)"/></g></svg>',
                insert_row_below: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.8 15.8"><g><path d="M15.7,1.3c-0.1-0.1-0.1-0.2-0.2-0.2L15.3,1H0.4L0.3,1.1c0,0-0.1,0.1-0.1,0.1c0,0-0.1,0.1-0.1,0.1L0,1.4v7.7l0.1,0.1c0,0.1,0.1,0.1,0.2,0.2l0.1,0.1h2.3V9.3l0.1-0.5L3,8.5l0.1-0.2c-0.1,0-0.2,0-0.3,0H1.2v-6h13.3v6h-1.6c-0.1,0-0.2,0-0.3,0l0.1,0.2l0.2,0.4C12.9,9,13,9.2,13,9.3v0.1h2.3l0.2-0.1c0.1,0,0.1-0.1,0.2-0.2l0.1-0.1V1.4L15.7,1.3z"/><path d="M10.5,7.5C9.9,7.1,9.3,6.8,8.6,6.7c-0.2,0-0.5-0.1-0.7,0c-0.2,0-0.5,0-0.7,0C6.6,6.7,6.1,6.9,5.6,7.3C5.2,7.6,4.7,8,4.4,8.4C4.3,8.6,4.2,8.8,4.2,8.9C4.1,9.1,4,9.3,3.9,9.4C3.9,9.6,3.8,9.7,3.8,9.9c0,0.2-0.1,0.3-0.1,0.5v-0.1c-0.1,0.8,0.1,1.6,0.5,2.4c0.4,0.7,1,1.3,1.7,1.7c0.3,0.2,0.6,0.3,0.9,0.3c0.3,0.1,0.7,0.1,1,0.1c0.3,0,0.7,0,1-0.1c0.3-0.1,0.6-0.2,0.9-0.3c0.5-0.3,0.9-0.6,1.3-1c0.3-0.4,0.6-0.8,0.8-1.3c0.1-0.4,0.2-0.9,0.2-1.4c0-0.5-0.1-1-0.3-1.4C11.5,8.6,11.1,8,10.5,7.5z M10.1,11.3H8.5v1.6H8H7.9H7.3v0v-0.1v-1.4H5.7v-0.4v-0.2v-0.6h0h1.5V8.5h1.2v1.6h1.6V11.3z"/></g></svg>',
                insert_row_above: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.8 15.8"><g><path d="M0.1,14.5c0.1,0.1,0.1,0.2,0.2,0.2l0.1,0.1h14.9l0.1-0.1c0,0,0.1-0.1,0.1-0.1c0,0,0.1-0.1,0.1-0.1l0.1-0.1V6.7l-0.1-0.1c0-0.1-0.1-0.1-0.2-0.2l-0.1-0.1h-2.3v0.1l-0.1,0.5l-0.2,0.4l-0.1,0.2c0.1,0,0.2,0,0.3,0h1.6v6H1.3v-6h1.6c0.1,0,0.2,0,0.3,0L3.1,7.3L2.9,6.9C2.8,6.8,2.8,6.6,2.7,6.5V6.3H0.4L0.3,6.4c-0.1,0-0.1,0.1-0.2,0.2L0,6.7v7.7L0.1,14.5z"/><path d="M5.3,8.3c0.6,0.5,1.2,0.8,1.9,0.9c0.2,0,0.5,0.1,0.7,0c0.2,0,0.5,0,0.7,0c0.6-0.1,1.1-0.3,1.6-0.6c0.5-0.3,0.9-0.7,1.2-1.2c0.1-0.2,0.2-0.3,0.3-0.5c0.1-0.2,0.2-0.4,0.2-0.5c0.1-0.1,0.1-0.3,0.1-0.4C12,5.8,12,5.6,12,5.4v0.1c0.1-0.8-0.1-1.6-0.5-2.4c-0.4-0.7-1-1.3-1.7-1.7C9.5,1.3,9.2,1.2,8.9,1.1C8.5,1,8.2,1,7.9,1c-0.3,0-0.7,0-1,0.1C6.6,1.2,6.3,1.3,6,1.4C5.5,1.7,5.1,2,4.7,2.4C4.4,2.8,4.1,3.3,3.9,3.8C3.8,4.2,3.7,4.7,3.7,5.2c0,0.5,0.1,1,0.3,1.4C4.3,7.2,4.7,7.8,5.3,8.3z M5.7,4.5h1.6V2.9h0.5h0.1h0.6v0v0.1v1.4H10v0.4v0.2v0.6h0H8.5v1.6H7.3V5.7H5.7V4.5z"/></g></svg>',
                insert_column_left: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.8 15.8"><g><path d="M14.5,15.7c0.1-0.1,0.2-0.1,0.2-0.2l0.1-0.1V0.4l-0.1-0.1c0,0-0.1-0.1-0.1-0.1c0,0-0.1-0.1-0.1-0.1L14.4,0H6.7L6.6,0.1c-0.1,0-0.1,0.1-0.2,0.2L6.3,0.4v2.3h0.1l0.5,0.1L7.3,3l0.2,0.1c0-0.1,0-0.2,0-0.3V1.2h6v13.3h-6v-1.6c0-0.1,0-0.2,0-0.3l-0.2,0.1l-0.4,0.2C6.7,12.9,6.6,13,6.4,13H6.3v2.3l0.1,0.2c0,0.1,0.1,0.1,0.2,0.2l0.1,0.1h7.7L14.5,15.7z"/><path d="M8.3,10.5C8.7,10,9,9.3,9.1,8.6c0-0.2,0.1-0.5,0-0.7c0-0.2,0-0.5,0-0.7C9,6.7,8.8,6.1,8.5,5.7C8.2,5.2,7.8,4.8,7.3,4.5C7.2,4.4,7,4.3,6.9,4.2C6.7,4.1,6.5,4,6.4,4C6.2,3.9,6.1,3.9,5.9,3.8c-0.2,0-0.3-0.1-0.5-0.1h0.1C4.7,3.7,3.8,3.9,3.1,4.3C2.4,4.7,1.8,5.3,1.4,6C1.3,6.3,1.2,6.6,1.1,6.9C1,7.2,1,7.6,1,7.9c0,0.3,0,0.7,0.1,1c0.1,0.3,0.2,0.6,0.3,0.9c0.3,0.5,0.6,0.9,1,1.3c0.4,0.3,0.8,0.6,1.3,0.8C4.2,12,4.7,12.1,5.1,12c0.5,0,1-0.1,1.4-0.3C7.2,11.5,7.8,11.1,8.3,10.5zM4.5,10.1V8.5H2.9V8V7.9V7.3h0H3h1.4V5.7h0.4h0.2h0.6v0v1.5h1.6v1.2H5.7v1.6H4.5z"/></g></svg>',
                insert_column_right: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.8 15.8"><g><path d="M1.3,0.1C1.2,0.2,1.1,0.2,1.1,0.3L1,0.4v14.9l0.1,0.1c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1l0.1,0.1h7.7l0.1-0.1c0.1,0,0.1-0.1,0.2-0.2l0.1-0.1v-2.3H9.3l-0.5-0.1l-0.4-0.2l-0.2-0.1c0,0.1,0,0.2,0,0.3v1.6h-6V1.3h6v1.6c0,0.1,0,0.2,0,0.3l0.2-0.1l0.4-0.2C9,2.9,9.2,2.8,9.3,2.8h0.1V0.5L9.4,0.3c0-0.1-0.1-0.1-0.2-0.2L9.1,0H1.4L1.3,0.1z"/><path d="M7.5,5.3C7,5.8,6.7,6.5,6.6,7.2c0,0.2-0.1,0.5,0,0.7c0,0.2,0,0.5,0,0.7c0.1,0.6,0.3,1.1,0.6,1.6c0.3,0.5,0.7,0.9,1.2,1.2c0.2,0.1,0.3,0.2,0.5,0.3c0.2,0.1,0.4,0.2,0.5,0.2c0.1,0.1,0.3,0.1,0.4,0.1c0.2,0,0.3,0.1,0.5,0.1h-0.1c0.8,0.1,1.6-0.1,2.4-0.5c0.7-0.4,1.3-1,1.7-1.7c0.2-0.3,0.3-0.6,0.3-0.9c0.1-0.3,0.1-0.7,0.1-1c0-0.3,0-0.7-0.1-1c-0.1-0.3-0.2-0.6-0.3-0.9c-0.3-0.5-0.6-0.9-1-1.3C13,4.4,12.5,4.2,12,4c-0.4-0.1-0.9-0.2-1.4-0.2c-0.5,0-1,0.1-1.4,0.2C8.5,4.3,7.9,4.7,7.5,5.3z M11.3,5.7v1.6h1.6v0.5v0.1v0.6h0h-0.1h-1.4v1.6h-0.4h-0.2h-0.6v0V8.5H8.5V7.3h1.6V5.7H11.3z"/></g></svg>',
                delete_row: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.75 13.83"><g><path d="M4.7,18.46l.12.08H19.73l.12-.08a.58.58,0,0,0,.22-.22l.08-.12,0-7.69-.08-.11a.77.77,0,0,0-.18-.18l-.11-.08-2.31,0-.08.28-.1.29a1.58,1.58,0,0,1-.12.29l-.14.34s0,0,.18,0H18.9v6H5.64v-6H7.35c.14,0,.2,0,.18,0l-.14-.34a2.85,2.85,0,0,1-.12-.29l-.1-.29-.07-.27-2.31,0-.11.08a.77.77,0,0,0-.18.18l-.08.11,0,7.69.08.12a.47.47,0,0,0,.09.12l.13.09ZM12.11,13a4,4,0,0,0,1.46-.21,4.51,4.51,0,0,0,1.31-.71A4,4,0,0,0,16.26,10a4.32,4.32,0,0,0-.08-2.54,4.34,4.34,0,0,0-1-1.52,4.15,4.15,0,0,0-1.54-1,4.34,4.34,0,0,0-1.35-.22A4.07,4.07,0,0,0,11,4.93,3.94,3.94,0,0,0,9.24,6.07,3.92,3.92,0,0,0,8.15,8.88a3.91,3.91,0,0,0,.12.95A4.16,4.16,0,0,0,12.11,13Zm2.35-4.14v.58H10.09V8.27h4.37v.58Z" transform="translate(-4.4 -4.71)"/></g></svg>',
                delete_column: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.81 15.74"><g><path d="M5.66,19.42l.12.08,7.69,0,.11-.08a.77.77,0,0,0,.18-.18l.08-.11,0-2.32-.15,0-.45-.15-.42-.18-.17-.07a1,1,0,0,0,0,.27v1.63h-6V5h6V6.62a.9.9,0,0,0,0,.26l.17-.07.42-.17a3.91,3.91,0,0,1,.45-.15l.15,0,0-2.32L13.75,4a.77.77,0,0,0-.18-.18l-.11-.08H5.79l-.13.07a.63.63,0,0,0-.21.22l-.08.12V19.08l.08.12a.47.47,0,0,0,.09.12.35.35,0,0,0,.12.1Zm9-3.67a4.16,4.16,0,0,0,2.36-.51,4.08,4.08,0,0,0,1.67-1.72,4,4,0,0,0,.35-.91,3.79,3.79,0,0,0,.1-1,4.71,4.71,0,0,0-.11-1,5,5,0,0,0-.3-.87,4.25,4.25,0,0,0-1-1.25,4.49,4.49,0,0,0-1.34-.81A4.26,4.26,0,0,0,15,7.48a3.88,3.88,0,0,0-1.41.25A4.32,4.32,0,0,0,11.86,9,4,4,0,0,0,11,10.94a4.4,4.4,0,0,0-.05.68,4.5,4.5,0,0,0,.05.68,3.93,3.93,0,0,0,.61,1.57,4.22,4.22,0,0,0,1.18,1.2,4.59,4.59,0,0,0,.48.27c.2.1.37.17.5.22a2.44,2.44,0,0,0,.45.12,4.61,4.61,0,0,0,.5.07Zm2.54-4.12v.58H12.87V11h4.37v.59Z" transform="translate(-5.37 -3.76)"/></g></svg>',
                fixed_column_width: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6,5H18A1,1 0 0,1 19,6A1,1 0 0,1 18,7H6A1,1 0 0,1 5,6A1,1 0 0,1 6,5M21,2V4H3V2H21M15,8H17V22H15V8M7,8H9V22H7V8M11,8H13V22H11V8Z" /></svg>',
                rotate_left: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.8 15.8"><g><path d="M0.5,10.2c0,0.1,0,0.2,0,0.3v0.2l0,0c0.1,0.3,0.3,0.6,0.4,0.9l0,0C1,11.8,1.3,12,1.5,11.9h0.1h0.2h0.1c0.1-0.1,0.3-0.3,0.4-0.5v-0.2c0-0.1,0-0.2-0.1-0.3l0,0c-0.2-0.2-0.3-0.4-0.3-0.7l0,0C1.8,10,1.7,9.9,1.5,9.8c-0.1,0-0.2,0-0.3,0H0.9C0.7,9.9,0.6,10,0.5,10.2L0.5,10.2z"/><path d="M2.2,11.5L2.2,11.5L2.2,11.5z"/><path d="M5.9,3.6L5.9,3.6L5.9,3.6z"/><path d="M0.1,7.9c0,0.3,0,0.6,0,0.9l0,0l0,0l0,0l0,0c0,0.2,0.1,0.3,0.2,0.4l0,0c0.2,0.1,0.3,0.2,0.5,0.2l0,0l0,0c0.2,0,0.4-0.1,0.5-0.3l0,0c0-0.1,0.1-0.3,0.1-0.4V8.6l0,0c0-0.2,0-0.5,0-0.7l0,0c0-0.2-0.1-0.4-0.2-0.5C1.1,7.3,0.9,7.2,0.7,7.2S0.3,7.3,0.2,7.4C0.1,7.5,0,7.7,0.1,7.9z"/><path d="M1.9,12.7L1.9,12.7c0,0.2,0,0.4,0.2,0.5l0,0l0.2,0.3l0,0c0.2,0.1,0.3,0.2,0.5,0.4l0,0l0,0l0,0l0,0C2.9,14,3,14.1,3.2,14.1s0.4-0.1,0.5-0.2c0.1-0.2,0.2-0.3,0.2-0.5v-0.1c0-0.2-0.1-0.4-0.2-0.5l0,0l-0.4-0.4l-0.2-0.2l0,0C3,12.1,2.8,12,2.6,12l0,0c-0.2,0-0.4,0.1-0.5,0.2l0,0C2,12.3,1.9,12.5,1.9,12.7z"/><path d="M6.6,15c0,0.2,0.1,0.4,0.2,0.5c0.1,0.1,0.2,0.2,0.4,0.3l0,0c0.3,0,0.5,0,0.7,0h0.3l0,0c0.2,0,0.4-0.1,0.5-0.2c0.1-0.2,0.2-0.3,0.2-0.5l0,0l0,0c0-0.2-0.1-0.4-0.2-0.5l0,0c-0.1-0.1-0.3-0.2-0.5-0.2l0,0H7.9c-0.1,0-0.3,0-0.5,0l0,0H7.3c-0.2-0.1-0.3,0-0.5,0.1l0,0C6.7,14.6,6.6,14.8,6.6,15L6.6,15L6.6,15L6.6,15z"/><path d="M4.2,7.4C4,7.5,4,7.7,4,7.9c0,0.2,0,0.4,0.2,0.5l0,0l3.2,3.2l0,0c0.1,0.1,0.3,0.2,0.5,0.2s0.3-0.1,0.5-0.2l0,0l3.2-3.2l0,0c0.1-0.1,0.2-0.3,0.2-0.5c0-0.2-0.1-0.4-0.2-0.5l0,0C11.5,7.3,11,6.7,10,5.8l0,0L8.4,4.2l0,0C8.3,4.1,8.1,4,7.9,4S7.5,4.1,7.4,4.2L4.2,7.4L4.2,7.4z M6.8,9L5.7,7.9l2.2-2.2l2.3,2.2l-2.3,2.2C7.7,9.9,7.3,9.5,6.8,9L6.8,9z"/><path d="M4.1,14.1C4,14.2,4,14.3,4,14.4v0.2l0,0c0.1,0.1,0.2,0.3,0.4,0.4l0,0c0.3,0.1,0.6,0.2,0.9,0.4h0.1h0.1l0,0c0.2,0,0.3-0.1,0.5-0.1l0,0c0.2-0.1,0.3-0.3,0.3-0.4l0,0l0,0l0,0l0,0v-0.2c0-0.1-0.1-0.2-0.1-0.3l0,0C6.1,14.2,6,14.1,5.8,14l0,0c-0.3-0.1-0.5-0.2-0.8-0.2l0,0c-0.1-0.1-0.2-0.1-0.3-0.1H4.5C4.3,13.7,4.2,13.9,4.1,14.1z"/><path d="M9.3,14.4c0,0.1-0.1,0.3,0,0.4V15l0,0c0,0.1,0.1,0.3,0.5,0.4c0.1,0.1,0.3,0.1,0.4,0.1l0,0h0.1l0,0c0.3-0.1,0.6-0.2,0.9-0.3l0,0c0.1-0.1,0.2-0.2,0.3-0.4l0.1-0.3c0-0.1-0.1-0.2-0.1-0.3l0,0c-0.1-0.2-0.2-0.3-0.4-0.4l0,0h-0.3c-0.1,0-0.2,0-0.3,0l0,0c-0.2,0.1-0.5,0.2-0.8,0.3l0,0C9.5,14.1,9.4,14.2,9.3,14.4L9.3,14.4z"/><path d="M11.4,14.7L11.4,14.7L11.4,14.7z"/><path d="M9.5,15.3L9.5,15.3L9.5,15.3z"/><path d="M15.9,7.9c0-1-0.2-2-0.6-3l0,0c-0.4-1-1-1.9-1.7-2.6C12.8,1.6,12,1,11,0.6l0,0C10.1,0.2,9,0,8,0C7.3,0,6.5,0.1,5.8,0.3l0,0C5.2,0.5,4.6,0.8,4,1.1L3.1,0.2l0,0C2.9,0.1,2.8,0,2.6,0H2.4l0,0C2.2,0,2,0.2,1.9,0.4l0,0L0.1,4.9l0,0C0,5,0,5.1,0,5.2c0,0.2,0.1,0.4,0.2,0.5l0,0c0.2,0.1,0.3,0.2,0.5,0.2h0.1H1l0,0l4.7-1.8l0,0C5.9,4,6.1,3.8,6.1,3.6V3.4C6.1,3.2,6,3,5.9,2.9l0,0L5.1,2.1c0.4-0.2,0.8-0.4,1.3-0.5c0.5-0.1,1.1-0.2,1.7-0.2c0.9,0,1.7,0.2,2.5,0.5l0,0c0.8,0.3,1.5,0.8,2.1,1.4c0.6,0.6,1.1,1.3,1.4,2.1l0,0c0.3,0.8,0.5,1.6,0.5,2.5s-0.2,1.7-0.5,2.5l0,0c-0.3,0.8-0.8,1.5-1.4,2.1c-0.2,0.2-0.4,0.3-0.6,0.5l0,0c-0.2,0.1-0.3,0.3-0.3,0.5v0.1c0,0.1,0,0.3,0.1,0.4l0,0c0.1,0.2,0.3,0.3,0.5,0.3l0,0c0.1,0,0.3-0.1,0.4-0.2l0,0l0,0l0,0l0,0c0.2-0.2,0.5-0.4,0.7-0.6l0,0l0,0l0,0l0,0c0.7-0.8,1.3-1.6,1.7-2.6C15.6,10,15.8,9,15.9,7.9z M1.9,4C2,3.8,2.1,3.5,2.3,3.1l0,0L2.7,2l1.2,1.2L1.9,4z"/><path d="M6.8,15.5L6.8,15.5L6.8,15.5z"/></g></svg>',
                rotate_right: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.8 15.8"><g><path d="M9.9,15.3L9.9,15.3L9.9,15.3z"/><path d="M6.9,15.1L6.9,15.1c0,0.1,0.1,0.3,0.2,0.4l0,0c0.1,0.2,0.3,0.3,0.5,0.3l0,0h0.3c0.2,0,0.4,0,0.7,0l0,0c0.2-0.1,0.3-0.2,0.4-0.3c0.1-0.1,0.2-0.2,0.2-0.4V15c0-0.2-0.1-0.4-0.2-0.4c-0.2-0.1-0.3-0.2-0.5-0.2H8.4l0,0c-0.1,0-0.3,0-0.5,0H7.6l0,0c-0.2,0-0.4,0.1-0.5,0.2C7,14.7,6.9,14.9,6.9,15.1z"/><path d="M6.5,14.4L6.5,14.4L6.5,14.4z"/><path d="M5.8,5.8L5.8,5.8c-1,0.9-1.5,1.5-1.7,1.6l0,0C4,7.5,4,7.7,4,7.9c0,0.2,0,0.4,0.2,0.5l0,0l3.2,3.2l0,0c0.2,0.1,0.3,0.2,0.5,0.2s0.4-0.1,0.5-0.2l0,0l3.2-3.2l0,0c0.1-0.1,0.2-0.3,0.2-0.5c0-0.2-0.1-0.4-0.2-0.5l0,0L8.4,4.2C8.3,4.1,8.1,4,7.9,4C7.7,4,7.5,4.1,7.4,4.2l0,0L5.8,5.8z M5.6,7.9l2.3-2.2l2.2,2.2L9,9l0,0l0,0l0,0l0,0c-0.5,0.6-0.9,0.9-1.1,1.1L5.6,7.9z"/><path d="M9,15.5L9,15.5L9,15.5z"/><path d="M9.6,14.7v0.2l0,0l0,0l0,0l0,0c0.1,0.2,0.1,0.3,0.3,0.3c0.1,0.1,0.3,0.1,0.4,0.1l0,0h0.1h0.1c0.3-0.1,0.6-0.3,0.9-0.4l0,0c0.1-0.1,0.2-0.2,0.3-0.4l0,0v-0.2c0-0.1,0-0.2-0.1-0.3c-0.1-0.2-0.2-0.3-0.4-0.4H11c-0.1,0-0.2,0.1-0.3,0.1l0,0c-0.2,0.1-0.4,0.2-0.7,0.3l0,0l0,0c-0.1,0.1-0.3,0.2-0.4,0.4C9.6,14.5,9.6,14.6,9.6,14.7z"/><path d="M9,14.5L9,14.5L9,14.5z"/><path d="M9.6,14.4L9.6,14.4L9.6,14.4z"/><path d="M11.7,14L11.7,14L11.7,14z"/><path d="M15.6,7.4L15.6,7.4L15.6,7.4z"/><path d="M15,9.4c0.2,0,0.4,0,0.6-0.2l0,0c0.1-0.1,0.2-0.2,0.2-0.4l0,0l0,0l0,0l0,0c0-0.3,0-0.6,0-0.9c0-0.2-0.1-0.4-0.2-0.5c-0.1-0.1-0.3-0.2-0.5-0.2s-0.4,0.1-0.5,0.2c-0.1,0.1-0.2,0.3-0.2,0.5l0,0c0,0.2,0,0.4,0,0.7l0,0v0.1c0,0.1,0,0.3,0.1,0.4l0,0C14.6,9.3,14.8,9.4,15,9.4L15,9.4L15,9.4z"/><path d="M14,12h0.1h0.2h0.1c0.2,0,0.5-0.2,0.6-0.4l0,0c0.2-0.3,0.3-0.6,0.4-0.9l0,0v-0.2c0-0.1-0.1-0.2-0.1-0.3c-0.1-0.2-0.2-0.3-0.4-0.4h-0.3c-0.1,0-0.2,0-0.3,0C14.2,9.9,14,10,14,10.3l0,0c-0.1,0.2-0.2,0.5-0.3,0.7l0,0c-0.1,0.1-0.1,0.2-0.1,0.3v0.2l0,0l0,0C13.6,11.6,13.8,11.8,14,12z"/><path d="M14.6,7.4L14.6,7.4L14.6,7.4z"/><path d="M4.4,14.2c-0.1,0.1-0.1,0.2-0.1,0.3l0.1,0.2c0,0.2,0.2,0.3,0.3,0.4l0,0c0.3,0.1,0.6,0.3,1.1,0.4l0,0h0.1l0,0c0.1,0,0.2-0.1,0.4-0.2c0.1,0,0.2-0.2,0.3-0.3l0,0v-0.2c0-0.1-0.1-0.3-0.2-0.4c-0.1-0.1-0.2-0.2-0.4-0.3l0,0c-0.2-0.1-0.5-0.2-0.7-0.3l0,0c-0.1,0-0.2,0-0.3,0H4.7l0,0C4.6,13.9,4.4,14,4.4,14.2L4.4,14.2z"/><path d="M11.9,13.3c0,0.2,0.1,0.4,0.2,0.6c0.1,0.1,0.3,0.2,0.5,0.2s0.4-0.1,0.5-0.2l0,0l0,0l0,0l0,0c0.1-0.1,0.3-0.3,0.4-0.4l0,0l0.2-0.3l0,0c0.1-0.2,0.2-0.3,0.2-0.5l0,0c0-0.2-0.1-0.4-0.2-0.5l0,0c-0.1-0.1-0.3-0.2-0.5-0.2l0,0c-0.2,0-0.4,0.1-0.5,0.2l0,0l-0.2,0.2l-0.4,0.4l0,0C12,13,11.9,13.1,11.9,13.3L11.9,13.3z"/><path d="M12.1,13.8L12.1,13.8L12.1,13.8z"/><path d="M11.9,13.3L11.9,13.3L11.9,13.3z"/><path d="M15.9,5.2c0-0.1-0.1-0.2-0.1-0.3l0,0L14,0.4l0,0C13.9,0.2,13.7,0,13.5,0l0,0l0,0h-0.2c-0.2,0-0.4,0.1-0.5,0.2l0,0l-0.9,0.9c-0.5-0.3-1.1-0.6-1.8-0.8l0,0C9.4,0.1,8.7,0,7.9,0c-1,0-2,0.2-3,0.6S3,1.6,2.3,2.3C1.6,3.1,1,3.9,0.6,4.9l0,0C0.2,5.8,0,6.8,0,7.9c0,1,0.2,2,0.6,3s0.9,1.8,1.7,2.6l0,0l0,0l0,0l0,0c0.2,0.2,0.5,0.4,0.7,0.6l0,0l0,0l0,0l0,0c0.2,0.1,0.3,0.2,0.5,0.2l0,0c0.2,0,0.4-0.1,0.6-0.3l0,0c0.1-0.1,0.1-0.3,0.1-0.4v-0.1l0,0C4.1,13.3,4,13.1,3.9,13l0,0c-0.2-0.1-0.4-0.3-0.6-0.5c-0.6-0.6-1.1-1.3-1.4-2.1l0,0C1.6,9.6,1.4,8.8,1.4,7.9s0.2-1.7,0.5-2.5l0,0c0.3-0.8,0.8-1.5,1.4-2.1c0.6-0.6,1.3-1.1,2.1-1.4l0,0C6.2,1.6,7,1.4,7.9,1.4c0.6,0,1.1,0.1,1.7,0.2c0.5,0.1,0.9,0.3,1.3,0.5l-0.8,0.8l0,0C10,3.1,9.9,3.2,9.9,3.4v0.2l0,0l0,0c0,0.2,0.2,0.4,0.4,0.5l0,0l4.5,1.8l0,0H15h0.1c0.2,0,0.4-0.1,0.5-0.2l0,0C15.7,5.6,15.8,5.4,15.9,5.2z M11.8,3.2L13,2l0.4,1.1l0,0c0.2,0.4,0.3,0.7,0.4,0.9L11.8,3.2z"/></g></svg>',
                mirror_horizontal: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.75 15.74"><g><path d="M13.75,3.76l5.9,15.74h-5.9V3.76ZM4.9,19.5,10.8,3.76V19.5H4.9Z" transform="translate(-4.9 -3.76)"/></g></svg>',
                mirror_vertical: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 14.75"><g><path d="M20.15,13.1,4.41,19V13.1H20.15ZM4.41,4.25l15.74,5.9H4.41V4.25Z" transform="translate(-4.41 -4.25)"/></g></svg>',
                checked: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.75 12.1"><g><path d="M4.59,12.23l.12.18L9.43,17.5a.58.58,0,0,0,.84,0L20,7.45h0a.58.58,0,0,0,0-.84l-.85-.85a.58.58,0,0,0-.84,0H18.2l-8.12,8.41a.29.29,0,0,1-.42,0l-3.4-3.63a.58.58,0,0,0-.84,0l-.85.85a.6.6,0,0,0-.14.21.51.51,0,0,0,0,.44c.05.06.1.13.16.19Z" transform="translate(-4.38 -5.58)"/></g></svg>',
                line_break: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,6a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H7.41l1.3-1.29A1,1,0,0,0,7.29,9.29l-3,3a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l3,3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L7.41,14H17a3,3,0,0,0,3-3V7A1,1,0,0,0,19,6Z"/></svg>',
                audio: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z" /></svg>',
                image_gallery: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="30 30 150 150"><g><path d="M152.775,120.548V51.651c0-12.271-9.984-22.254-22.254-22.254H43.727c-12.271,0-22.254,9.983-22.254,22.254v68.896c0,12.27,9.983,22.254,22.254,22.254h86.795C142.791,142.802,152.775,132.817,152.775,120.548z M36.394,51.651c0-4.042,3.291-7.333,7.333-7.333h86.795c4.042,0,7.332,3.291,7.332,7.333v23.917l-14.938-17.767c-1.41-1.678-3.487-2.649-5.68-2.658h-0.029c-2.184,0-4.255,0.954-5.674,2.613L76.709,98.519l-9.096-9.398c-1.427-1.474-3.392-2.291-5.448-2.273c-2.052,0.025-4.004,0.893-5.396,2.4L36.394,111.32V51.651z M41.684,127.585l20.697-22.416l9.312,9.622c1.461,1.511,3.489,2.334,5.592,2.27c2.101-0.066,4.075-1.013,5.44-2.612l34.436-40.308l20.693,24.613v21.794c0,4.042-3.29,7.332-7.332,7.332H43.727C43.018,127.88,42.334,127.775,41.684,127.585z M182.616,152.5V75.657c0-4.12-3.34-7.46-7.461-7.46c-4.119,0-7.46,3.34-7.46,7.46V152.5c0,4.112-3.347,7.46-7.461,7.46h-94c-4.119,0-7.46,3.339-7.46,7.459c0,4.123,3.341,7.462,7.46,7.462h94C172.576,174.881,182.616,164.841,182.616,152.5z"/></g></svg>',
                more_text: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 10 180 180"><g><path d="M49.711,142.188h49.027c2.328,0.002,4.394,1.492,5.129,3.699l9.742,29.252c0.363,1.092,1.385,1.828,2.537,1.83l15.883,0.01c0.859,0,1.667-0.412,2.17-1.109s0.641-1.594,0.37-2.41l-16.625-50.045L86.503,28.953c-0.36-1.097-1.383-1.839-2.537-1.842H64.532c-1.153-0.001-2.178,0.736-2.542,1.831L13.847,173.457c-0.271,0.816-0.135,1.713,0.369,2.412c0.503,0.697,1.311,1.109,2.171,1.109h15.872c1.151,0,2.173-0.736,2.537-1.828l9.793-29.287C45.325,143.66,47.39,142.18,49.711,142.188L49.711,142.188z M53.493,119.098l15.607-46.9c0.744-2.196,2.806-3.674,5.125-3.674s4.381,1.478,5.125,3.674l15.607,46.904c0.537,1.621,0.263,3.402-0.736,4.789c-1.018,1.408-2.649,2.24-4.386,2.24H58.615c-1.736,0-3.368-0.832-4.386-2.24C53.23,122.504,52.956,120.721,53.493,119.098L53.493,119.098z M190.465,63.32c0-2.919-1.015-5.396-3.059-7.428c-2.029-2.031-4.496-3.047-7.383-3.047c-2.889,0-5.355,1.016-7.388,3.047c-2.029,2.032-3.056,4.498-3.056,7.386c0,2.889,1.026,5.354,3.056,7.385c2.032,2.032,4.499,3.059,7.388,3.059c2.887,0,5.354-1.026,7.383-3.059C189.45,68.633,190.465,66.178,190.465,63.32L190.465,63.32z M190.465,101.994c0-2.858-1.015-5.313-3.059-7.333c-2.029-2.042-4.496-3.047-7.383-3.047c-2.889,0-5.355,1.005-7.388,3.047c-2.029,2.021-3.056,4.486-3.056,7.376c0,2.887,1.026,5.352,3.056,7.395c2.032,2.021,4.499,3.047,7.388,3.047c2.887,0,5.354-1.025,7.383-3.047C189.45,107.389,190.465,104.914,190.465,101.994L190.465,101.994z M190.465,140.76c0-2.918-1.015-5.395-3.059-7.438c-2.029-2.041-4.496-3.047-7.383-3.047c-2.889,0-5.355,1.006-7.388,3.047c-2.029,2.043-3.056,4.52-3.056,7.438c0,2.922,1.026,5.398,3.056,7.439c2.032,2.021,4.499,3.047,7.388,3.047c2.887,0,5.354-1.025,7.383-3.047C189.45,146.158,190.465,143.682,190.465,140.76L190.465,140.76z"/></g></svg>',
                more_paragraph: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 10 180 180"><g><path d="M128.39,28.499H63.493c-25.558,0-46.354,20.796-46.354,46.354c0,25.559,20.796,46.353,46.354,46.353h9.271v55.625h18.542V47.04h9.271V176.83h18.543V47.04h9.271V28.499z M72.764,102.664h-9.271c-15.337,0-27.813-12.475-27.813-27.812c0-15.336,12.476-27.813,27.813-27.813h9.271V102.664z M190.465,63.32c0-2.919-1.015-5.396-3.059-7.428c-2.029-2.031-4.496-3.047-7.383-3.047c-2.889,0-5.355,1.016-7.388,3.047c-2.029,2.032-3.056,4.498-3.056,7.386c0,2.889,1.026,5.354,3.056,7.385c2.032,2.032,4.499,3.059,7.388,3.059c2.887,0,5.354-1.026,7.383-3.059C189.45,68.633,190.465,66.178,190.465,63.32L190.465,63.32z M190.465,101.994c0-2.858-1.015-5.313-3.059-7.333c-2.029-2.042-4.496-3.047-7.383-3.047c-2.889,0-5.355,1.005-7.388,3.047c-2.029,2.021-3.056,4.486-3.056,7.376c0,2.887,1.026,5.352,3.056,7.395c2.032,2.021,4.499,3.047,7.388,3.047c2.887,0,5.354-1.025,7.383-3.047C189.45,107.389,190.465,104.914,190.465,101.994L190.465,101.994z M190.465,140.76c0-2.918-1.015-5.395-3.059-7.438c-2.029-2.041-4.496-3.047-7.383-3.047c-2.889,0-5.355,1.006-7.388,3.047c-2.029,2.043-3.056,4.52-3.056,7.438c0,2.922,1.026,5.398,3.056,7.439c2.032,2.021,4.499,3.047,7.388,3.047c2.887,0,5.354-1.025,7.383-3.047C189.45,146.158,190.465,143.682,190.465,140.76L190.465,140.76z"/></g></svg>',
                more_plus: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="35 30 140 140"><g><path d="M137.215,102.045c0,3.498-2.835,6.332-6.333,6.332H24.549c-3.498,0-6.334-2.834-6.334-6.332l0,0c0-3.498,2.836-6.333,6.334-6.333h106.333C134.38,95.711,137.215,98.547,137.215,102.045L137.215,102.045z M77.715,161.545c-3.498,0-6.333-2.836-6.333-6.334V48.878c0-3.498,2.836-6.333,6.333-6.333l0,0c3.498,0,6.334,2.835,6.334,6.333v106.333C84.049,158.709,81.213,161.545,77.715,161.545L77.715,161.545z M190.465,63.32c0-2.919-1.015-5.396-3.059-7.428c-2.029-2.031-4.496-3.047-7.383-3.047c-2.889,0-5.355,1.016-7.388,3.047c-2.029,2.032-3.056,4.498-3.056,7.386c0,2.889,1.026,5.354,3.056,7.385c2.032,2.032,4.499,3.059,7.388,3.059c2.887,0,5.354-1.026,7.383-3.059C189.45,68.632,190.465,66.177,190.465,63.32L190.465,63.32z M190.465,101.993c0-2.858-1.015-5.313-3.059-7.333c-2.029-2.042-4.496-3.047-7.383-3.047c-2.889,0-5.355,1.005-7.388,3.047c-2.029,2.021-3.056,4.486-3.056,7.376c0,2.888,1.026,5.353,3.056,7.396c2.032,2.021,4.499,3.047,7.388,3.047c2.887,0,5.354-1.025,7.383-3.047C189.45,107.389,190.465,104.914,190.465,101.993L190.465,101.993z M190.465,140.76c0-2.918-1.015-5.395-3.059-7.438c-2.029-2.041-4.496-3.047-7.383-3.047c-2.889,0-5.355,1.006-7.388,3.047c-2.029,2.043-3.056,4.52-3.056,7.438c0,2.922,1.026,5.398,3.056,7.439c2.032,2.021,4.499,3.047,7.388,3.047c2.887,0,5.354-1.025,7.383-3.047C189.45,146.158,190.465,143.682,190.465,140.76L190.465,140.76z"/></g></svg>',
                more_horizontal: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.76 3.58"><g><path d="M4.64,10.73a1.84,1.84,0,0,1,.65-.65,1.76,1.76,0,0,1,1.79,0A1.79,1.79,0,0,1,8,11.63a1.84,1.84,0,0,1-.25.9,1.69,1.69,0,0,1-.65.65,1.8,1.8,0,0,1-2.69-1.55A2.08,2.08,0,0,1,4.64,10.73Zm6.09,0a1.84,1.84,0,0,1,.65-.65,1.78,1.78,0,0,1,2.67,1.55,1.73,1.73,0,0,1-.24.9,1.84,1.84,0,0,1-.65.65,1.76,1.76,0,0,1-1.79,0,1.79,1.79,0,0,1-.64-2.44Zm6.08,0a1.69,1.69,0,0,1,.65-.65,1.76,1.76,0,0,1,1.79,0,1.79,1.79,0,0,1,.9,1.54,1.73,1.73,0,0,1-.24.9,1.84,1.84,0,0,1-.65.65,1.8,1.8,0,0,1-2.69-1.55A2,2,0,0,1,16.81,10.73Z" transform="translate(-4.39 -9.84)"/></g></svg>',
                more_vertical: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3.94 15.75"><g><path d="M12.28,7.69a1.92,1.92,0,0,1-1.39-.58,2,2,0,0,1-.58-1.39,1.92,1.92,0,0,1,.58-1.39,2,2,0,0,1,1.39-.58,1.92,1.92,0,0,1,1.39.58,2,2,0,0,1,.58,1.39,1.92,1.92,0,0,1-.58,1.39,2,2,0,0,1-1.39.58Zm0,2a1.92,1.92,0,0,1,1.39.58,2,2,0,0,1,.58,1.39A1.92,1.92,0,0,1,13.67,13a2,2,0,0,1-1.39.58A1.92,1.92,0,0,1,10.89,13a2,2,0,0,1-.58-1.39,2,2,0,0,1,2-2Zm0,5.9a1.92,1.92,0,0,1,1.39.58,2,2,0,0,1,.58,1.39,1.92,1.92,0,0,1-.58,1.39,2,2,0,0,1-1.39.58,1.92,1.92,0,0,1-1.39-.58,2,2,0,0,1-.58-1.39,1.92,1.92,0,0,1,.58-1.39,1.94,1.94,0,0,1,1.39-.58Z" transform="translate(-10.31 -3.75)"/></g></svg>',
                attachment: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.38 15.68"><g><path d="M15.23,6h1v9.78a3.88,3.88,0,0,1-1.31,2.45,4,4,0,0,1-6.57-2.45V7A3,3,0,0,1,9.2,4.89a3,3,0,0,1,5,2.09v8.31a1.92,1.92,0,0,1-.58,1.39,2,2,0,0,1-1.39.58,1.92,1.92,0,0,1-1.39-.58,2,2,0,0,1-.58-1.39V8h1v7.32a1,1,0,0,0,.29.69,1,1,0,0,0,.69.28A.9.9,0,0,0,13,16a1,1,0,0,0,.29-.69V7a1.92,1.92,0,0,0-.58-1.39A2,2,0,0,0,11.27,5a1.92,1.92,0,0,0-1.39.58A2,2,0,0,0,9.33,7v8.31a3,3,0,1,0,5.9,0V6Z" transform="translate(-8.08 -3.78)"/></g></svg>',
                map: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.7 15.62"><g><path d="M12.05,12.42a2.93,2.93,0,1,1,2.07-5A2.88,2.88,0,0,1,15,9.49a3,3,0,0,1-.86,2.07,2.89,2.89,0,0,1-2.07.86Zm0-5.36a2.43,2.43,0,0,0-1.72,4.16,2.48,2.48,0,0,0,1.72.72,2.44,2.44,0,0,0,0-4.88Zm0-3.3A5.84,5.84,0,0,1,17.9,9.62a9.94,9.94,0,0,1-1.73,5A33.59,33.59,0,0,1,12.84,19a1.52,1.52,0,0,1-.23.2,1,1,0,0,1-.55.2h0a1,1,0,0,1-.55-.2,1.52,1.52,0,0,1-.23-.2,33.59,33.59,0,0,1-3.33-4.32,9.93,9.93,0,0,1-1.72-5,5.84,5.84,0,0,1,5.85-5.86ZM12,18.34l.08.05.06-.06a35.58,35.58,0,0,0,3.06-3.93,9.35,9.35,0,0,0,1.74-4.77,4.88,4.88,0,0,0-4.88-4.88A4.79,4.79,0,0,0,8.6,6.17,4.84,4.84,0,0,0,7.17,9.62,9.29,9.29,0,0,0,8.91,14.4,36,36,0,0,0,12,18.34Z" transform="translate(-6.2 -3.76)"/></g></svg>',
                magic_stick: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.73 15.75"><g><path d="M19.86,19.21a1,1,0,0,0,.28-.68,1,1,0,0,0-.28-.7L13,10.93a1,1,0,0,0-.7-.28,1,1,0,0,0-.68,1.65l6.9,6.9a1,1,0,0,0,.69.29.93.93,0,0,0,.69-.28ZM9.19,8.55a3,3,0,0,0,1.68,0,14.12,14.12,0,0,0,1.41-.32A11.26,11.26,0,0,0,10.8,7.06c-.56-.36-.86-.56-.91-.58S10,5.91,10,5.11s0-1.26-.15-1.37a4.35,4.35,0,0,0-1.19.71c-.53.4-.81.62-.87.68a9,9,0,0,0-2-.6,6.84,6.84,0,0,0-.76-.09s0,.27.08.77a8.6,8.6,0,0,0,.61,2q-.09.09-.69.87a3.59,3.59,0,0,0-.68,1.17c.12.17.57.23,1.36.15S7,9.26,7.15,9.23s.21.36.57.91a10.49,10.49,0,0,0,1.14,1.48c0-.1.14-.57.31-1.4a3,3,0,0,0,0-1.67Z" transform="translate(-4.41 -3.74)"/></g></svg>',
                empty_file: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12.78 15.75"><g><path d="M14.73,3.76,18.67,7.7v9.84a2,2,0,0,1-2,2H7.84a1.89,1.89,0,0,1-1.38-.58,2,2,0,0,1-.57-1.39V5.73a1.93,1.93,0,0,1,.57-1.38,2,2,0,0,1,1.38-.58h6.62l.26,0v0Zm2.95,4.92h-2a1.93,1.93,0,0,1-1.38-.57,2,2,0,0,1-.58-1.4V6.17c0-.36,0-.84,0-1.43H7.85a1,1,0,0,0-.7.29,1,1,0,0,0-.29.7V17.54a1,1,0,0,0,.29.69,1,1,0,0,0,.69.29h8.85a1,1,0,0,0,.71-.29.92.92,0,0,0,.28-.69Zm0-1L14.73,4.74v2A1,1,0,0,0,15,7.4a1,1,0,0,0,.69.29Z" transform="translate(-5.89 -3.76)"/></g></svg>'
            },
            E = n("P6u4"),
            S = n.n(E);
        const N = {
            _d: null,
            _w: null,
            isIE: null,
            isIE_Edge: null,
            isOSX_IOS: null,
            _propertiesInit: function() {
                this._d || (this._d = document, this._w = window, this.isIE = navigator.userAgent.indexOf("Trident") > -1, this.isIE_Edge = navigator.userAgent.indexOf("Trident") > -1 || navigator.appVersion.indexOf("Edge") > -1, this.isOSX_IOS = /(Mac|iPhone|iPod|iPad)/.test(navigator.platform))
            },
            _HTMLConvertor: function(e) {
                const t = {
                    "&": "&amp;",
                    " ": "&nbsp;",
                    "'": "&apos;",
                    '"': "&quot;",
                    "<": "&lt;",
                    ">": "&gt;"
                };
                return e.replace(/&|\u00A0|'|"|<|>/g, (function(e) {
                    return "string" == typeof t[e] ? t[e] : e
                }))
            },
            zeroWidthSpace: String.fromCharCode(8203),
            zeroWidthRegExp: new RegExp(String.fromCharCode(8203), "g"),
            onlyZeroWidthRegExp: new RegExp("^" + String.fromCharCode(8203) + "+$"),
            onlyZeroWidthSpace: function(e) {
                return "string" != typeof e && (e = e.textContent), "" === e || this.onlyZeroWidthRegExp.test(e)
            },
            getXMLHttpRequest: function() {
                if (!this._w.ActiveXObject) return this._w.XMLHttpRequest ? new XMLHttpRequest : null;
                try {
                    return new ActiveXObject("Msxml2.XMLHTTP")
                } catch (e) {
                    try {
                        return new ActiveXObject("Microsoft.XMLHTTP")
                    } catch (e) {
                        return null
                    }
                }
            },
            createElement: function(e) {
                return this._d.createElement(e)
            },
            createTextNode: function(e) {
                return this._d.createTextNode(e || "")
            },
            HTMLEncoder: function(e) {
                const t = {
                    "<": "$lt;",
                    ">": "$gt;"
                };
                return e.replace(/<|>/g, (function(e) {
                    return "string" == typeof t[e] ? t[e] : e
                }))
            },
            HTMLDecoder: function(e) {
                const t = {
                    "$lt;": "<",
                    "$gt;": ">"
                };
                return e.replace(/\$lt;|\$gt;/g, (function(e) {
                    return "string" == typeof t[e] ? t[e] : e
                }))
            },
            hasOwn: function(e, t) {
                return this._hasOwn.call(e, t)
            },
            _hasOwn: Object.prototype.hasOwnProperty,
            getIncludePath: function(e, t) {
                let n = "";
                const i = [],
                    l = "js" === t ? "script" : "link",
                    o = "js" === t ? "src" : "href";
                let s = "(?:";
                for (let t = 0, n = e.length; t < n; t++) s += e[t] + (t < n - 1 ? "|" : ")");
                const a = new this._w.RegExp("(^|.*[\\/])" + s + "(\\.[^\\/]+)?." + t + "(?:\\?.*|;.*)?$", "i"),
                    r = new this._w.RegExp(".+\\." + t + "(?:\\?.*|;.*)?$", "i");
                for (let e = this._d.getElementsByTagName(l), t = 0; t < e.length; t++) r.test(e[t][o]) && i.push(e[t]);
                for (let e = 0; e < i.length; e++) {
                    let t = i[e][o].match(a);
                    if (t) {
                        n = t[0];
                        break
                    }
                }
                if ("" === n && (n = i.length > 0 ? i[0][o] : ""), -1 === n.indexOf(":/") && "//" !== n.slice(0, 2) && (n = 0 === n.indexOf("/") ? location.href.match(/^.*?:\/\/[^\/]*/)[0] + n : location.href.match(/^[^\?]*\/(?:)/)[0] + n), !n) throw "[SUNEDITOR.util.getIncludePath.fail] The SUNEDITOR installation path could not be automatically detected. (name: +" + name + ", extension: " + t + ")";
                return n
            },
            getPageStyle: function(e) {
                let t = "";
                const n = (e || this._d).styleSheets;
                for (let e, i = 0, l = n.length; i < l; i++) {
                    try {
                        e = n[i].cssRules
                    } catch (e) {
                        continue
                    }
                    for (let n = 0, i = e.length; n < i; n++) t += e[n].cssText
                }
                return t
            },
            getIframeDocument: function(e) {
                let t = e.contentWindow || e.contentDocument;
                return t.document && (t = t.document), t
            },
            getAttributesToString: function(e, t) {
                if (!e.attributes) return "";
                const n = e.attributes;
                let i = "";
                for (let e = 0, l = n.length; e < l; e++) t && t.indexOf(n[e].name) > -1 || (i += n[e].name + '="' + n[e].value + '" ');
                return i
            },
            getByteLength: function(e) {
                const t = this._w.encodeURIComponent;
                let n, i;
                return this.isIE_Edge ? (i = this._w.unescape(t(e.toString())).length, n = 0, null !== t(e.toString()).match(/(%0A|%0D)/gi) && (n = t(e.toString()).match(/(%0A|%0D)/gi).length), i + n) : (i = new this._w.TextEncoder("utf-8").encode(e.toString()).length, n = 0, null !== t(e.toString()).match(/(%0A|%0D)/gi) && (n = t(e.toString()).match(/(%0A|%0D)/gi).length), i + n)
            },
            isWysiwygDiv: function(e) {
                return e && 1 === e.nodeType && (this.hasClass(e, "se-wrapper-wysiwyg") || /^BODY$/i.test(e.nodeName))
            },
            isNonEditable: function(e) {
                return e && 1 === e.nodeType && "false" === e.getAttribute("contenteditable")
            },
            isTextStyleElement: function(e) {
                return e && 1 === e.nodeType && /^(strong|span|font|b|var|i|em|u|ins|s|strike|del|sub|sup|mark|a|label|code)$/i.test(e.nodeName)
            },
            isFormatElement: function(e) {
                return e && 1 === e.nodeType && (/^(P|DIV|H[1-6]|PRE|LI|TH|TD)$/i.test(e.nodeName) || this.hasClass(e, "(\\s|^)__se__format__replace_.+(\\s|$)|(\\s|^)__se__format__free_.+(\\s|$)")) && !this.isComponent(e) && !this.isWysiwygDiv(e)
            },
            isRangeFormatElement: function(e) {
                return e && 1 === e.nodeType && (/^(BLOCKQUOTE|OL|UL|FIGCAPTION|TABLE|THEAD|TBODY|TR|TH|TD)$/i.test(e.nodeName) || this.hasClass(e, "(\\s|^)__se__format__range_.+(\\s|$)"))
            },
            isClosureRangeFormatElement: function(e) {
                return e && 1 === e.nodeType && (/^(TH|TD)$/i.test(e.nodeName) || this.hasClass(e, "(\\s|^)__se__format__range__closure_.+(\\s|$)"))
            },
            isFreeFormatElement: function(e) {
                return e && 1 === e.nodeType && (/^PRE$/i.test(e.nodeName) || this.hasClass(e, "(\\s|^)__se__format__free_.+(\\s|$)")) && !this.isComponent(e) && !this.isWysiwygDiv(e)
            },
            isClosureFreeFormatElement: function(e) {
                return e && 1 === e.nodeType && this.hasClass(e, "(\\s|^)__se__format__free__closure_.+(\\s|$)")
            },
            isComponent: function(e) {
                return e && (/se-component/.test(e.className) || /^(TABLE|HR)$/.test(e.nodeName))
            },
            isMediaComponent: function(e) {
                return e && /se-component/.test(e.className)
            },
            isNotCheckingNode: function(e) {
                return e && /katex|__se__tag/.test(e.className)
            },
            getFormatElement: function(e, t) {
                if (!e) return null;
                for (t || (t = function() {
                        return !0
                    }); e;) {
                    if (this.isWysiwygDiv(e)) return null;
                    if (this.isRangeFormatElement(e) && e.firstElementChild, this.isFormatElement(e) && t(e)) return e;
                    e = e.parentNode
                }
                return null
            },
            getRangeFormatElement: function(e, t) {
                if (!e) return null;
                for (t || (t = function() {
                        return !0
                    }); e;) {
                    if (this.isWysiwygDiv(e)) return null;
                    if (this.isRangeFormatElement(e) && !/^(THEAD|TBODY|TR)$/i.test(e.nodeName) && t(e)) return e;
                    e = e.parentNode
                }
                return null
            },
            getFreeFormatElement: function(e, t) {
                if (!e) return null;
                for (t || (t = function() {
                        return !0
                    }); e;) {
                    if (this.isWysiwygDiv(e)) return null;
                    if (this.isFreeFormatElement(e) && t(e)) return e;
                    e = e.parentNode
                }
                return null
            },
            getClosureFreeFormatElement: function(e, t) {
                if (!e) return null;
                for (t || (t = function() {
                        return !0
                    }); e;) {
                    if (this.isWysiwygDiv(e)) return null;
                    if (this.isClosureFreeFormatElement(e) && t(e)) return e;
                    e = e.parentNode
                }
                return null
            },
            copyTagAttributes: function(e, t) {
                t.style.cssText && (e.style.cssText += t.style.cssText);
                const n = t.classList;
                for (let t = 0, i = n.length; t < i; t++) this.addClass(e, n[t]);
                e.style.cssText || e.removeAttribute("style"), e.className.trim() || e.removeAttribute("class")
            },
            copyFormatAttributes: function(e, t) {
                (t = t.cloneNode(!1)).className = t.className.replace(/(\s|^)__se__format__[^\s]+/g, ""), this.copyTagAttributes(e, t)
            },
            getArrayItem: function(e, t, n) {
                if (!e || 0 === e.length) return null;
                t = t || function() {
                    return !0
                };
                const i = [];
                for (let l, o = 0, s = e.length; o < s; o++)
                    if (l = e[o], t(l)) {
                        if (!n) return l;
                        i.push(l)
                    } return n ? i : null
            },
            getArrayIndex: function(e, t) {
                let n = -1;
                for (let i = 0, l = e.length; i < l; i++)
                    if (e[i] === t) {
                        n = i;
                        break
                    } return n
            },
            nextIdx: function(e, t) {
                let n = this.getArrayIndex(e, t);
                return -1 === n ? -1 : n + 1
            },
            prevIdx: function(e, t) {
                let n = this.getArrayIndex(e, t);
                return -1 === n ? -1 : n - 1
            },
            getPositionIndex: function(e) {
                let t = 0;
                for (; e = e.previousSibling;) t += 1;
                return t
            },
            getNodePath: function(e, t, n) {
                const i = [];
                let l = !0;
                return this.getParentElement(e, function(e) {
                    if (e === t && (l = !1), l && !this.isWysiwygDiv(e)) {
                        if (n && 3 === e.nodeType) {
                            let t = null,
                                i = null;
                            n.s = n.e = 0;
                            let l = e.previousSibling;
                            for (; l && 3 === l.nodeType;) i = l.textContent.replace(this.zeroWidthRegExp, ""), n.s += i.length, e.textContent = i + e.textContent, t = l, l = l.previousSibling, this.removeItem(t);
                            let o = e.nextSibling;
                            for (; o && 3 === o.nodeType;) i = o.textContent.replace(this.zeroWidthRegExp, ""), n.e += i.length, e.textContent += i, t = o, o = o.nextSibling, this.removeItem(t)
                        }
                        i.push(e)
                    }
                    return !1
                }.bind(this)), i.map(this.getPositionIndex).reverse()
            },
            getNodeFromPath: function(e, t) {
                let n, i = t;
                for (let t = 0, l = e.length; t < l && (n = i.childNodes, 0 !== n.length); t++) i = n.length <= e[t] ? n[n.length - 1] : n[e[t]];
                return i
            },
            isSameAttributes: function(e, t) {
                if (3 === e.nodeType && 3 === t.nodeType) return !0;
                if (3 === e.nodeType || 3 === t.nodeType) return !1;
                const n = e.style,
                    i = t.style;
                let l = 0;
                for (let e = 0, t = n.length; e < t; e++) n[n[e]] === i[n[e]] && l++;
                const o = e.classList,
                    s = t.classList,
                    a = this._w.RegExp;
                let r = 0;
                for (let e = 0, t = o.length; e < t; e++) a("(s|^)" + o[e] + "(s|$)").test(s.value) && r++;
                return l === i.length && l === n.length && r === s.length && r === o.length
            },
            isList: function(e) {
                return e && /^(OL|UL)$/i.test("string" == typeof e ? e : e.nodeName)
            },
            isListCell: function(e) {
                return e && /^LI$/i.test("string" == typeof e ? e : e.nodeName)
            },
            isTable: function(e) {
                return e && /^(TABLE|THEAD|TBODY|TR|TH|TD)$/i.test("string" == typeof e ? e : e.nodeName)
            },
            isCell: function(e) {
                return e && /^(TD|TH)$/i.test("string" == typeof e ? e : e.nodeName)
            },
            isBreak: function(e) {
                return e && /^BR$/i.test("string" == typeof e ? e : e.nodeName)
            },
            isAnchor: function(e) {
                return e && /^A$/i.test("string" == typeof e ? e : e.nodeName)
            },
            isMedia: function(e) {
                return e && /^(IMG|IFRAME|AUDIO|VIDEO|CANVAS)$/i.test("string" == typeof e ? e : e.nodeName)
            },
            isNumber: function(e) {
                return !!e && /^-?\d+(\.\d+)?$/.test(e + "")
            },
            getNumber: function(e, t) {
                if (!e) return 0;
                let n = (e + "").match(/-?\d+(\.\d+)?/);
                return n && n[0] ? (n = n[0], t < 0 ? 1 * n : 0 === t ? this._w.Math.round(1 * n) : 1 * (1 * n).toFixed(t)) : 0
            },
            getListChildren: function(e, t) {
                const n = [];
                return e && e.children && 0 !== e.children.length ? (t = t || function() {
                    return !0
                }, function i(l) {
                    e !== l && t(l) && n.push(l);
                    for (let e = 0, t = l.children.length; e < t; e++) i(l.children[e])
                }(e), n) : n
            },
            getListChildNodes: function(e, t) {
                const n = [];
                return e && 0 !== e.childNodes.length ? (t = t || function() {
                    return !0
                }, function i(l) {
                    e !== l && t(l) && n.push(l);
                    for (let e = 0, t = l.childNodes.length; e < t; e++) i(l.childNodes[e])
                }(e), n) : n
            },
            getElementDepth: function(e) {
                if (!e || this.isWysiwygDiv(e)) return -1;
                let t = 0;
                for (e = e.parentNode; e && !this.isWysiwygDiv(e);) t += 1, e = e.parentNode;
                return t
            },
            compareElements: function(e, t) {
                let n = e,
                    i = t;
                for (; n && i && n.parentNode !== i.parentNode;) n = n.parentNode, i = i.parentNode;
                if (!n || !i) return {
                    ancestor: null,
                    a: e,
                    b: t,
                    result: 0
                };
                const l = n.parentNode.childNodes,
                    o = this.getArrayIndex(l, n),
                    s = this.getArrayIndex(l, i);
                return {
                    ancestor: n.parentNode,
                    a: n,
                    b: i,
                    result: o > s ? 1 : o < s ? -1 : 0
                }
            },
            getParentElement: function(e, t) {
                let n;
                if ("function" == typeof t) n = t;
                else {
                    let e;
                    /^\./.test(t) ? (e = "className", t = t.split(".")[1]) : /^#/.test(t) ? (e = "id", t = "^" + t.split("#")[1] + "$") : /^:/.test(t) ? (e = "name", t = "^" + t.split(":")[1] + "$") : (e = "nodeName", t = "^" + t + "$");
                    const i = new this._w.RegExp(t, "i");
                    n = function(t) {
                        return i.test(t[e])
                    }
                }
                for (; e && !n(e);) {
                    if (this.isWysiwygDiv(e)) return null;
                    e = e.parentNode
                }
                return e
            },
            getChildElement: function(e, t, n) {
                let i;
                if ("function" == typeof t) i = t;
                else {
                    let e;
                    /^\./.test(t) ? (e = "className", t = t.split(".")[1]) : /^#/.test(t) ? (e = "id", t = "^" + t.split("#")[1] + "$") : /^:/.test(t) ? (e = "name", t = "^" + t.split(":")[1] + "$") : (e = "nodeName", t = "^" + ("text" === t ? "#" + t : t) + "$");
                    const n = new this._w.RegExp(t, "i");
                    i = function(t) {
                        return n.test(t[e])
                    }
                }
                const l = this.getListChildNodes(e, (function(e) {
                    return i(e)
                }));
                return l[n ? l.length - 1 : 0]
            },
            getEdgeChildNodes: function(e, t) {
                if (e) {
                    for (t || (t = e); e && 1 === e.nodeType && e.childNodes.length > 0 && !this.isBreak(e);) e = e.firstChild;
                    for (; t && 1 === t.nodeType && t.childNodes.length > 0 && !this.isBreak(t);) t = t.lastChild;
                    return {
                        sc: e,
                        ec: t || e
                    }
                }
            },
            getOffset: function(e, t) {
                let n = 0,
                    i = 0,
                    l = 3 === e.nodeType ? e.parentElement : e;
                const o = this.getParentElement(e, this.isWysiwygDiv.bind(this));
                for (; l && !this.hasClass(l, "se-container") && l !== o;) n += l.offsetLeft, i += l.offsetTop, l = l.offsetParent;
                const s = t && /iframe/i.test(t.nodeName);
                return {
                    left: n + (s ? t.parentElement.offsetLeft : 0),
                    top: i - o.scrollTop + (s ? t.parentElement.offsetTop : 0)
                }
            },
            getOverlapRangeAtIndex: function(e, t, n, i) {
                if (e <= i ? t < n : t > n) return 0;
                const l = (e > n ? e : n) - (t < i ? t : i);
                return (l < 0 ? -1 * l : l) + 1
            },
            changeTxt: function(e, t) {
                e && t && (e.textContent = t)
            },
            changeElement: function(e, t) {
                if ("string" == typeof t)
                    if (e.outerHTML) e.outerHTML = t;
                    else {
                        const n = this.createElement("DIV");
                        n.innerHTML = t, t = n.firstChild, e.parentNode.replaceChild(t, e)
                    }
                else 1 === t.nodeType && e.parentNode.replaceChild(t, e)
            },
            setStyle: function(e, t, n) {
                e.style[t] = n, n || e.style.cssText || e.removeAttribute("style")
            },
            hasClass: function(e, t) {
                if (e) return new this._w.RegExp(t).test(e.className)
            },
            addClass: function(e, t) {
                if (!e) return;
                new this._w.RegExp("(\\s|^)" + t + "(\\s|$)").test(e.className) || (e.className += (e.className.length > 0 ? " " : "") + t)
            },
            removeClass: function(e, t) {
                if (!e) return;
                const n = new this._w.RegExp("(\\s|^)" + t + "(\\s|$)");
                e.className = e.className.replace(n, " ").trim(), e.className.trim() || e.removeAttribute("class")
            },
            toggleClass: function(e, t) {
                if (!e) return;
                const n = new this._w.RegExp("(\\s|^)" + t + "(\\s|$)");
                n.test(e.className) ? e.className = e.className.replace(n, " ").trim() : e.className += " " + t, e.className.trim() || e.removeAttribute("class")
            },
            setDisabledButtons: function(e, t) {
                for (let n = 0, i = t.length; n < i; n++) t[n].disabled = e
            },
            removeItem: function(e) {
                if (e) try {
                    e.remove()
                } catch (t) {
                    e.parentNode && e.parentNode.removeChild(e)
                }
            },
            removeItemAllParents: function(e, t, n) {
                if (!e) return null;
                let i = null;
                return t || (t = function(e) {
                        if (e === n || this.isComponent(e)) return !1;
                        const t = e.textContent.trim();
                        return 0 === t.length || /^(\n|\u200B)+$/.test(t)
                    }.bind(this)),
                    function e(n) {
                        if (!N.isWysiwygDiv(n)) {
                            const l = n.parentNode;
                            l && t(n) && (i = {
                                sc: n.previousElementSibling,
                                ec: n.nextElementSibling
                            }, N.removeItem(n), e(l))
                        }
                    }(e), i
            },
            detachNestedList: function(e, t) {
                const n = this._deleteNestedList(e);
                let i, l, o;
                if (n) {
                    i = n.cloneNode(!1), l = n.childNodes;
                    const t = this.getPositionIndex(e);
                    for (; l[t];) i.appendChild(l[t])
                } else i = e;
                if (t) o = this.getListChildren(i, function(e) {
                    return this.isListCell(e) && !e.previousElementSibling
                }.bind(this));
                else {
                    const t = this.getElementDepth(e) + 2;
                    o = this.getListChildren(e, function(e) {
                        return this.isListCell(e) && !e.previousElementSibling && this.getElementDepth(e) === t
                    }.bind(this))
                }
                for (let e = 0, t = o.length; e < t; e++) this._deleteNestedList(o[e]);
                return n && (n.parentNode.insertBefore(i, n.nextSibling), l && 0 === l.length && this.removeItem(n)), i === e ? i.parentNode : i
            },
            _deleteNestedList: function(e) {
                const t = e.parentNode;
                let n, i, l, o, s, a = t,
                    r = a.parentNode;
                for (; this.isListCell(r);) {
                    for (o = this.getPositionIndex(e), n = r.nextElementSibling, i = r.parentNode, l = a; l;) {
                        if (a = a.nextSibling, this.isList(l)) {
                            for (s = l.childNodes; s[o];) i.insertBefore(s[o], n);
                            0 === s.length && this.removeItem(l)
                        } else i.appendChild(l);
                        l = a
                    }
                    a = i, r = i.parentNode
                }
                return 0 === t.children.length && this.removeItem(t), i
            },
            splitElement: function(e, t, n) {
                const i = e.parentNode;
                let l, o, s, a = 0,
                    r = !0;
                if ((!n || n < 0) && (n = 0), 3 === e.nodeType) {
                    if (a = this.getPositionIndex(e), t >= 0) {
                        e.splitText(t);
                        const n = this.getNodeFromPath([a + 1], i);
                        this.onlyZeroWidthSpace(n) && (n.data = this.zeroWidthSpace)
                    }
                } else 1 === e.nodeType && (e.previousSibling ? e = e.previousSibling : this.getElementDepth(e) === n && (r = !1));
                let c = e;
                for (; this.getElementDepth(c) > n;)
                    for (a = this.getPositionIndex(c) + 1, c = c.parentNode, s = l, l = c.cloneNode(!1), o = c.childNodes, s && (this.isListCell(l) && this.isList(s) && s.firstElementChild ? (l.innerHTML = s.firstElementChild.innerHTML, N.removeItem(s.firstElementChild), s.children.length > 0 && l.appendChild(s)) : l.appendChild(s)); o[a];) l.appendChild(o[a]);
                c.childNodes.length <= 1 && (!c.firstChild || 0 === c.firstChild.textContent.length) && (c.innerHTML = "<br>");
                const d = c.parentNode;
                return r && (c = c.nextSibling), l ? (this.mergeSameTags(l, null, !1), this.mergeNestedTags(l, function(e) {
                    return this.isList(e)
                }.bind(this)), l.childNodes.length > 0 ? d.insertBefore(l, c) : l = c, 0 === i.childNodes.length && this.removeItem(i), l) : c
            },
            mergeSameTags: function(e, t, n) {
                const i = this,
                    l = t ? t.length : 0;
                let o = null;
                return l && (o = this._w.Array.apply(null, new this._w.Array(l)).map(this._w.Number.prototype.valueOf, 0)),
                    function e(s, a, r) {
                        const c = s.childNodes;
                        for (let d, u, h = 0, g = c.length; h < g && (d = c[h], u = c[h + 1], d); h++)
                            if (n && i._isIgnoreNodeChange(d) || !n && (i.isTable(d) || i.isListCell(d) || i.isFormatElement(d) && !i.isFreeFormatElement(d)))(i.isTable(d) || i.isListCell(d)) && e(d, a + 1, h);
                            else {
                                if (1 === g && s.nodeName === d.nodeName && s.parentNode) {
                                    if (l) {
                                        let e, n, o, r, c;
                                        for (let u = 0; u < l; u++)
                                            if (e = t[u], e && e[a] === h) {
                                                for (n = d, o = s, r = a, c = !0; r >= 0;) {
                                                    if (i.getArrayIndex(o.childNodes, n) !== e[r]) {
                                                        c = !1;
                                                        break
                                                    }
                                                    n = d.parentNode, o = n.parentNode, r--
                                                }
                                                c && (e.splice(a, 1), e[a] = h)
                                            }
                                    }
                                    i.copyTagAttributes(d, s), s.parentNode.insertBefore(d, s), i.removeItem(s)
                                }
                                if (!u) {
                                    1 === d.nodeType && e(d, a + 1, h);
                                    break
                                }
                                if (d.nodeName === u.nodeName && i.isSameAttributes(d, u) && d.href === u.href) {
                                    const e = d.childNodes;
                                    let n = 0;
                                    for (let t = 0, i = e.length; t < i; t++) e[t].textContent.length > 0 && n++;
                                    const s = d.lastChild,
                                        c = u.firstChild;
                                    let g = 0;
                                    if (s && c) {
                                        const e = 3 === s.nodeType && 3 === c.nodeType;
                                        g = s.textContent.length;
                                        let i = s.previousSibling;
                                        for (; i && 3 === i.nodeType;) g += i.textContent.length, i = i.previousSibling;
                                        if (n > 0 && 3 === s.nodeType && 3 === c.nodeType && (s.textContent.length > 0 || c.textContent.length > 0) && n--, l) {
                                            let i = null;
                                            for (let d = 0; d < l; d++)
                                                if (i = t[d], i && i[a] > h) {
                                                    if (a > 0 && i[a - 1] !== r) continue;
                                                    i[a] -= 1, i[a + 1] >= 0 && i[a] === h && (i[a + 1] += n, e && s && 3 === s.nodeType && c && 3 === c.nodeType && (o[d] += g))
                                                }
                                        }
                                    }
                                    if (3 === d.nodeType) {
                                        if (g = d.textContent.length, d.textContent += u.textContent, l) {
                                            let e = null;
                                            for (let i = 0; i < l; i++)
                                                if (e = t[i], e && e[a] > h) {
                                                    if (a > 0 && e[a - 1] !== r) continue;
                                                    e[a] -= 1, e[a + 1] >= 0 && e[a] === h && (e[a + 1] += n, o[i] += g)
                                                }
                                        }
                                    } else d.innerHTML += u.innerHTML;
                                    i.removeItem(u), h--
                                } else 1 === d.nodeType && e(d, a + 1, h)
                            }
                    }(e, 0, 0), o
            },
            mergeNestedTags: function(e, t) {
                "string" == typeof t ? t = function(e) {
                        return this.test(e.tagName)
                    }.bind(new this._w.RegExp("^(" + (t || ".+") + ")$", "i")) : "function" != typeof t && (t = function() {
                        return !0
                    }),
                    function e(n) {
                        let i = n.children;
                        if (1 === i.length && i[0].nodeName === n.nodeName && t(n)) {
                            const e = i[0];
                            for (i = e.children; i[0];) n.appendChild(i[0]);
                            n.removeChild(e)
                        }
                        for (let t = 0, i = n.children.length; t < i; t++) e(n.children[t])
                    }(e)
            },
            removeEmptyNode: function(e, t) {
                const n = this;
                t && (t = n.getParentElement(t, (function(t) {
                        return e === t.parentElement
                    }))),
                    function i(l) {
                        if (n._notTextNode(l) || l === t || n.isNonEditable(l)) return 0;
                        if (l === e || !n.onlyZeroWidthSpace(l.textContent) || l.firstChild && n.isBreak(l.firstChild)) {
                            const e = l.children;
                            for (let t = 0, l = e.length, o = 0; t < l; t++) e[t + o] && !n.isComponent(e[t + o]) && (o += i(e[t + o]))
                        } else if (l.parentNode) return l.parentNode.removeChild(l), -1;
                        return 0
                    }(e), 0 === e.childNodes.length && (e.innerHTML = "<br>")
            },
            htmlRemoveWhiteSpace: function(e) {
                return e ? e.trim().replace(/<\/?(?!strong|span|font|b|var|i|em|u|ins|s|strike|del|sub|sup|mark|a|label|code)[^>^<]+>\s+(?=<)/gi, (function(e) {
                    return e.trim()
                })) : ""
            },
            sortByDepth: function(e, t) {
                const n = t ? 1 : -1,
                    i = -1 * n;
                e.sort(function(e, t) {
                    return this.isListCell(e) && this.isListCell(t) ? (e = this.getElementDepth(e)) > (t = this.getElementDepth(t)) ? n : e < t ? i : 0 : 0
                }.bind(this))
            },
            _isIgnoreNodeChange: function(e) {
                return e && 1 === e.nodeType && (this.isNonEditable(e) || !this.isTextStyleElement(e))
            },
            _isMaintainedNode: function(e) {
                return e && 1 === e.nodeType && /^(a|label|code)$/i.test("string" == typeof e ? e : e.nodeName)
            },
            _isSizeNode: function(e) {
                return e && 1 === e.nodeType && this.isTextStyleElement(e) && !!e.style.fontSize
            },
            _notTextNode: function(e) {
                return 1 === e.nodeType && (this.isComponent(e) || /^(br|input|select|canvas|img|iframe|audio|video)$/i.test("string" == typeof e ? e : e.nodeName))
            },
            _disallowedTags: function(e) {
                return /^(meta|script|link|style|[a-z]+\:[a-z]+)$/i.test(e.nodeName)
            },
            createTagsWhitelist: function(e) {
                const t = e.split("|");
                let n = "<\\/?(";
                for (let e = 0, i = t.length; e < i; e++) n += "(?!\\b" + t[e] + "\\b)";
                return n += ")[^>]>", new RegExp(n, "g")
            },
            _consistencyCheckOfHTML: function(e, t) {
                const n = [],
                    i = [],
                    l = [],
                    o = [],
                    s = this.getListChildNodes(e, function(s) {
                        if (1 !== s.nodeType) return !1;
                        if (!t.test(s.nodeName) && 0 === s.childNodes.length && this.isNotCheckingNode(s)) return n.push(s), !1;
                        const a = !this.getParentElement(s, this.isNotCheckingNode);
                        if (!this.isTable(s) && !this.isListCell(s) && (this.isFormatElement(s) || this.isRangeFormatElement(s) || this.isTextStyleElement(s)) && 0 === s.childNodes.length && a) return i.push(s), !1;
                        if (this.isList(s.parentNode) && !this.isList(s) && !this.isListCell(s)) return l.push(s), !1;
                        if (this.isCell(s)) {
                            const e = s.firstElementChild;
                            if (!this.isFormatElement(e) && !this.isRangeFormatElement(e) && !this.isComponent(e)) return o.push(s), !1
                        }
                        return s.parentNode !== e && (this.isFormatElement(s) || this.isComponent(s) || this.isList(s)) && !this.isRangeFormatElement(s.parentNode) && !this.isListCell(s.parentNode) && !this.getParentElement(s, this.isComponent) && a
                    }.bind(this));
                for (let e = 0, t = n.length; e < t; e++) this.removeItem(n[e]);
                const a = [];
                for (let e, t, n = 0, i = s.length; n < i; n++) e = s[n], t = e.parentNode, t && t.parentNode && (t.parentNode.insertBefore(e, t), a.push(t));
                for (let e, t = 0, n = a.length; t < n; t++) e = a[t], this.onlyZeroWidthSpace(e.textContent.trim()) && this.removeItem(e);
                for (let e = 0, t = i.length; e < t; e++) this.removeItem(i[e]);
                for (let e, t, n, i, o = 0, s = l.length; o < s; o++) {
                    for (e = l[o], t = this.createElement("LI"), n = e.childNodes; n[0];) t.appendChild(n[0]);
                    i = e.parentNode, i && (i.insertBefore(t, e), this.removeItem(e))
                }
                for (let e, t, n = 0, i = o.length; n < i; n++) e = o[n], t = this.createElement("DIV"), t.innerHTML = 0 === e.textContent.trim().length ? "<br>" : e.innerHTML, e.innerHTML = t.outerHTML
            },
            _setDefaultOptionStyle: function(e, t) {
                let n = "";
                e.height && (n += "height:" + e.height + ";"), e.minHeight && (n += "min-height:" + e.minHeight + ";"), e.maxHeight && (n += "max-height:" + e.maxHeight + ";"), e.position && (n += "position:" + e.position + ";"), e.width && (n += "width:" + e.width + ";"), e.minWidth && (n += "min-width:" + e.minWidth + ";"), e.maxWidth && (n += "max-width:" + e.maxWidth + ";");
                let i = "",
                    l = "",
                    o = "";
                const s = (t = n + t).split(";");
                for (let t, n = 0, a = s.length; n < a; n++) t = s[n].trim(), t && (/^(min-|max-)?width\s*:/.test(t) ? i += t + ";" : /^(min-|max-)?height\s*:/.test(t) ? (/^height/.test(t) && "auto" === t.split(":")[1].trim() && (e.height = "auto"), l += t + ";") : o += t + ";");
                return {
                    top: i,
                    frame: l,
                    editor: o
                }
            },
            _setIframeDocument: function(e, t) {
                e.setAttribute("scrolling", "auto"), e.contentDocument.head.innerHTML = '<meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1"><title></title>' + this._setIframeCssTags(t), e.contentDocument.body.className = "sun-editor-editable", e.contentDocument.body.setAttribute("contenteditable", !0)
            },
            _setIframeCssTags: function(e) {
                const t = e.iframeCSSFileName,
                    n = this._w.RegExp;
                let i = "";
                for (let e, l = 0, o = t.length; l < o; l++) {
                    if (e = [], /(^https?:\/\/)|(^data:text\/css,)/.test(t[l])) e.push(t[l]);
                    else {
                        const i = new n("(^|.*[\\/])" + t[l] + "(\\..+)?\\.css(?:\\?.*|;.*)?$", "i");
                        for (let t, n = document.getElementsByTagName("link"), l = 0, o = n.length; l < o; l++) t = n[l].href.match(i), t && e.push(t[0])
                    }
                    if (!e || 0 === e.length) throw '[SUNEDITOR.constructor.iframe.fail] The suneditor CSS files installation path could not be automatically detected. Please set the option property "iframeCSSFileName" before creating editor instances.';
                    for (let t = 0, n = e.length; t < n; t++) i += '<link href="' + e[t] + '" rel="stylesheet">'
                }
                return i + ("auto" === e.height ? "<style>\n/** Iframe height auto */\nbody{height: min-content; overflow: hidden;}\n</style>" : "")
            }
        };
        var T = N,
            L = {
                init: function(e, t) {
                    "object" != typeof t && (t = {});
                    const n = document;
                    this._initOptions(e, t);
                    const i = n.createElement("DIV");
                    i.className = "sun-editor", e.id && (i.id = "suneditor_" + e.id);
                    const l = n.createElement("DIV");
                    l.className = "se-container";
                    const o = this._createToolBar(n, t.buttonList, t.plugins, t);
                    o.element.style.visibility = "hidden", o.pluginCallButtons.math && this._checkKatexMath(t.katex);
                    const s = n.createElement("DIV");
                    s.className = "se-arrow";
                    const a = n.createElement("DIV");
                    a.className = "se-toolbar-sticky-dummy";
                    const r = n.createElement("DIV");
                    r.className = "se-wrapper";
                    const c = this._initElements(t, i, o.element, s),
                        d = c.bottomBar,
                        u = c.wysiwygFrame,
                        h = c.placeholder;
                    let g = c.codeView;
                    const p = d.resizingBar,
                        m = d.navigation,
                        f = d.charWrapper,
                        _ = d.charCounter,
                        b = n.createElement("DIV");
                    b.className = "se-loading-box sun-editor-common", b.innerHTML = '<div class="se-loading-effect"></div>';
                    const v = n.createElement("DIV");
                    v.className = "se-line-breaker", v.innerHTML = '<button class="se-btn">' + t.icons.line_break + "</button>";
                    const y = n.createElement("DIV");
                    y.className += "se-line-breaker-component";
                    const C = y.cloneNode(!0);
                    y.innerHTML = C.innerHTML = t.icons.line_break;
                    const w = n.createElement("DIV");
                    w.className = "se-resizing-back";
                    const x = t.toolbarContainer;
                    return x && x.appendChild(o.element), r.appendChild(g), h && r.appendChild(h), x || l.appendChild(o.element), l.appendChild(a), l.appendChild(r), l.appendChild(w), l.appendChild(b), l.appendChild(v), l.appendChild(y), l.appendChild(C), p && l.appendChild(p), i.appendChild(l), g = this._checkCodeMirror(t, g), {
                        constructed: {
                            _top: i,
                            _relative: l,
                            _toolBar: o.element,
                            _menuTray: o._menuTray,
                            _editorArea: r,
                            _wysiwygArea: u,
                            _codeArea: g,
                            _placeholder: h,
                            _resizingBar: p,
                            _navigation: m,
                            _charWrapper: f,
                            _charCounter: _,
                            _loading: b,
                            _lineBreaker: v,
                            _lineBreaker_t: y,
                            _lineBreaker_b: C,
                            _resizeBack: w,
                            _stickyDummy: a,
                            _arrow: s
                        },
                        options: t,
                        plugins: o.plugins,
                        pluginCallButtons: o.pluginCallButtons,
                        _responsiveButtons: o.responsiveButtons
                    }
                },
                _checkCodeMirror: function(e, t) {
                    if (e.codeMirror) {
                        const n = [{
                            mode: "htmlmixed",
                            htmlMode: !0,
                            lineNumbers: !0,
                            lineWrapping: !0
                        }, e.codeMirror.options || {}].reduce((function(e, t) {
                            for (let n in t) T.hasOwn(t, n) && (e[n] = t[n]);
                            return e
                        }), {});
                        "auto" === e.height && (n.viewportMargin = 1 / 0, n.height = "auto");
                        const i = e.codeMirror.src.fromTextArea(t, n);
                        i.display.wrapper.style.cssText = t.style.cssText, e.codeMirrorEditor = i, (t = i.display.wrapper).className += " se-wrapper-code-mirror"
                    }
                    return t
                },
                _checkKatexMath: function(e) {
                    if (!e) throw Error('[SUNEDITOR.create.fail] To use the math button you need to add a "katex" object to the options.');
                    const t = [{
                        throwOnError: !1
                    }, e.options || {}].reduce((function(e, t) {
                        for (let n in t) T.hasOwn(t, n) && (e[n] = t[n]);
                        return e
                    }), {});
                    e.options = t
                },
                _setOptions: function(e, t, n, i) {
                    this._initOptions(t.element.originElement, e);
                    const l = t.element,
                        o = l.relative,
                        s = l.editorArea,
                        a = e.toolbarContainer && e.toolbarContainer !== i.toolbarContainer,
                        r = !!e.buttonList || e.mode !== i.mode || a,
                        c = !!e.plugins,
                        d = this._createToolBar(document, r ? e.buttonList : i.buttonList, c ? e.plugins : n, e);
                    d.pluginCallButtons.math && this._checkKatexMath(e.katex);
                    const u = document.createElement("DIV");
                    u.className = "se-arrow", r && (d.element.style.visibility = "hidden", a ? (e.toolbarContainer.appendChild(d.element), l.toolbar.parentElement.removeChild(l.toolbar)) : l.toolbar.parentElement.replaceChild(d.element, l.toolbar), l.toolbar = d.element, l._menuTray = d._menuTray, l._arrow = u);
                    const h = this._initElements(e, l.topArea, r ? d.element : l.toolbar, u),
                        g = h.bottomBar,
                        p = h.wysiwygFrame,
                        m = h.placeholder;
                    let f = h.codeView;
                    return l.resizingBar && o.removeChild(l.resizingBar), g.resizingBar && o.appendChild(g.resizingBar), s.innerHTML = "", s.appendChild(f), m && s.appendChild(m), f = this._checkCodeMirror(e, f), l.resizingBar = g.resizingBar, l.navigation = g.navigation, l.charWrapper = g.charWrapper, l.charCounter = g.charCounter, l.wysiwygFrame = p, l.code = f, l.placeholder = m, {
                        callButtons: r ? d.pluginCallButtons : null,
                        plugins: r || c ? d.plugins : null,
                        toolbar: d
                    }
                },
                _initElements: function(e, t, n, i) {
                    t.style.cssText = e._editorStyles.top, /inline/i.test(e.mode) ? (n.className += " se-toolbar-inline", n.style.width = e.toolbarWidth) : /balloon/i.test(e.mode) && (n.className += " se-toolbar-balloon", n.style.width = e.toolbarWidth, n.appendChild(i));
                    const l = document.createElement(e.iframe ? "IFRAME" : "DIV");
                    l.className = "se-wrapper-inner se-wrapper-wysiwyg", e.iframe ? (l.allowFullscreen = !0, l.frameBorder = 0, l.style.cssText = e._editorStyles.frame) : (l.setAttribute("contenteditable", !0), l.setAttribute("scrolling", "auto"), l.className += " sun-editor-editable", l.style.cssText = e._editorStyles.frame + e._editorStyles.editor);
                    const o = document.createElement("TEXTAREA");
                    o.className = "se-wrapper-inner se-wrapper-code", o.style.cssText = e._editorStyles.frame, o.style.display = "none", "auto" === e.height && (o.style.overflow = "hidden");
                    let s = null,
                        a = null,
                        r = null,
                        c = null;
                    if (e.resizingBar && (s = document.createElement("DIV"), s.className = "se-resizing-bar sun-editor-common", a = document.createElement("DIV"), a.className = "se-navigation sun-editor-common", s.appendChild(a), e.charCounter)) {
                        if (r = document.createElement("DIV"), r.className = "se-char-counter-wrapper", e.charCounterLabel) {
                            const t = document.createElement("SPAN");
                            t.className = "se-char-label", t.textContent = e.charCounterLabel, r.appendChild(t)
                        }
                        if (c = document.createElement("SPAN"), c.className = "se-char-counter", c.textContent = "0", r.appendChild(c), e.maxCharCount > 0) {
                            const t = document.createElement("SPAN");
                            t.textContent = " / " + e.maxCharCount, r.appendChild(t)
                        }
                        s.appendChild(r)
                    }
                    let d = null;
                    return e.placeholder && (d = document.createElement("SPAN"), d.className = "se-placeholder", d.innerText = e.placeholder), {
                        bottomBar: {
                            resizingBar: s,
                            navigation: a,
                            charWrapper: r,
                            charCounter: c
                        },
                        wysiwygFrame: l,
                        codeView: o,
                        placeholder: d
                    }
                },
                _initOptions: function(e, t) {
                    t.lang = t.lang || S.a, t.value = "string" == typeof t.value ? t.value : null, t.historyStackDelayTime = "number" == typeof t.historyStackDelayTime ? t.historyStackDelayTime : 400, t._defaultTagsWhitelist = "string" == typeof t._defaultTagsWhitelist ? t._defaultTagsWhitelist : "br|p|div|pre|blockquote|h[1-6]|ol|ul|li|hr|figure|figcaption|img|iframe|audio|video|source|table|thead|tbody|tr|th|td|a|b|strong|var|i|em|u|ins|s|span|strike|del|sub|sup|code", t._editorTagsWhitelist = t._defaultTagsWhitelist + ("string" == typeof t.addTagsWhitelist && t.addTagsWhitelist.length > 0 ? "|" + t.addTagsWhitelist : ""), t.pasteTagsWhitelist = "string" == typeof t.pasteTagsWhitelist ? t.pasteTagsWhitelist : t._editorTagsWhitelist, t.attributesWhitelist = t.attributesWhitelist && "object" == typeof t.attributesWhitelist ? t.attributesWhitelist : null, t.mode = t.mode || "classic", t.toolbarWidth = t.toolbarWidth ? T.isNumber(t.toolbarWidth) ? t.toolbarWidth + "px" : t.toolbarWidth : "auto", t.toolbarContainer = /balloon/i.test(t.mode) ? null : "string" == typeof t.toolbarContainer ? document.querySelector(t.toolbarContainer) : t.toolbarContainer, t.stickyToolbar = /balloon/i.test(t.mode) || t.toolbarContainer ? -1 : void 0 === t.stickyToolbar ? 0 : /^\d+/.test(t.stickyToolbar) ? T.getNumber(t.stickyToolbar, 0) : -1, t.fullPage = !!t.fullPage, t.iframe = t.fullPage || t.iframe, t.iframeCSSFileName = t.iframe ? "string" == typeof t.iframeCSSFileName ? [t.iframeCSSFileName] : t.iframeCSSFileName || ["suneditor"] : null, t.codeMirror = t.codeMirror ? t.codeMirror.src ? t.codeMirror : {
                        src: t.codeMirror
                    } : null, t.position = "string" == typeof t.position ? t.position : null, t.display = t.display || ("none" !== e.style.display && e.style.display ? e.style.display : "block"), t.popupDisplay = t.popupDisplay || "full", t.resizingBar = void 0 === t.resizingBar ? !/inline|balloon/i.test(t.mode) : t.resizingBar, t.showPathLabel = !!t.resizingBar && ("boolean" != typeof t.showPathLabel || t.showPathLabel), t.charCounter = t.maxCharCount > 0 || "boolean" == typeof t.charCounter && t.charCounter, t.charCounterType = "string" == typeof t.charCounterType ? t.charCounterType : "char", t.charCounterLabel = "string" == typeof t.charCounterLabel ? t.charCounterLabel.trim() : null, t.maxCharCount = T.isNumber(t.maxCharCount) && t.maxCharCount > -1 ? 1 * t.maxCharCount : null, t.width = t.width ? T.isNumber(t.width) ? t.width + "px" : t.width : e.clientWidth ? e.clientWidth + "px" : "100%", t.minWidth = (T.isNumber(t.minWidth) ? t.minWidth + "px" : t.minWidth) || "", t.maxWidth = (T.isNumber(t.maxWidth) ? t.maxWidth + "px" : t.maxWidth) || "", t.height = t.height ? T.isNumber(t.height) ? t.height + "px" : t.height : e.clientHeight ? e.clientHeight + "px" : "auto", t.minHeight = (T.isNumber(t.minHeight) ? t.minHeight + "px" : t.minHeight) || "", t.maxHeight = (T.isNumber(t.maxHeight) ? t.maxHeight + "px" : t.maxHeight) || "", t.defaultStyle = "string" == typeof t.defaultStyle ? t.defaultStyle : "", t.font = t.font ? t.font : null, t.fontSize = t.fontSize ? t.fontSize : null, t.formats = t.formats ? t.formats : null, t.colorList = t.colorList ? t.colorList : null, t.lineHeights = t.lineHeights ? t.lineHeights : null, t.paragraphStyles = t.paragraphStyles ? t.paragraphStyles : null, t.textStyles = t.textStyles ? t.textStyles : null, t.fontSizeUnit = "string" == typeof t.fontSizeUnit && t.fontSizeUnit.trim() || "px", t.imageResizing = void 0 === t.imageResizing || t.imageResizing, t.imageHeightShow = void 0 === t.imageHeightShow || !!t.imageHeightShow, t.imageWidth = t.imageWidth ? T.isNumber(t.imageWidth) ? t.imageWidth + "px" : t.imageWidth : "auto", t.imageHeight = t.imageHeight ? T.isNumber(t.imageHeight) ? t.imageHeight + "px" : t.imageHeight : "auto", t.imageSizeOnlyPercentage = !!t.imageSizeOnlyPercentage, t._imageSizeUnit = t.imageSizeOnlyPercentage ? "%" : "px", t.imageRotation = void 0 !== t.imageRotation ? t.imageRotation : !(t.imageSizeOnlyPercentage || !t.imageHeightShow), t.imageFileInput = void 0 === t.imageFileInput || t.imageFileInput, t.imageUrlInput = void 0 === t.imageUrlInput || !t.imageFileInput || t.imageUrlInput, t.imageUploadHeader = t.imageUploadHeader || null, t.imageUploadUrl = "string" == typeof t.imageUploadUrl ? t.imageUploadUrl : null, t.imageUploadSizeLimit = /\d+/.test(t.imageUploadSizeLimit) ? T.getNumber(t.imageUploadSizeLimit, 0) : null, t.imageMultipleFile = !!t.imageMultipleFile, t.imageAccept = "string" == typeof t.imageAccept && t.imageAccept.trim() || "*", t.imageGalleryUrl = "string" == typeof t.imageGalleryUrl ? t.imageGalleryUrl : null, t.videoResizing = void 0 === t.videoResizing || t.videoResizing, t.videoHeightShow = void 0 === t.videoHeightShow || !!t.videoHeightShow, t.videoRatioShow = void 0 === t.videoRatioShow || !!t.videoRatioShow, t.videoWidth = t.videoWidth && T.getNumber(t.videoWidth, 0) ? T.isNumber(t.videoWidth) ? t.videoWidth + "px" : t.videoWidth : "", t.videoHeight = t.videoHeight && T.getNumber(t.videoHeight, 0) ? T.isNumber(t.videoHeight) ? t.videoHeight + "px" : t.videoHeight : "", t.videoSizeOnlyPercentage = !!t.videoSizeOnlyPercentage, t._videoSizeUnit = t.videoSizeOnlyPercentage ? "%" : "px", t.videoRotation = void 0 !== t.videoRotation ? t.videoRotation : !(t.videoSizeOnlyPercentage || !t.videoHeightShow), t.videoRatio = T.getNumber(t.videoRatio, 4) || .5625, t.videoRatioList = t.videoRatioList ? t.videoRatioList : null, t.youtubeQuery = (t.youtubeQuery || "").replace("?", ""), t.videoFileInput = !!t.videoFileInput, t.videoUrlInput = void 0 === t.videoUrlInput || !t.videoFileInput || t.videoUrlInput, t.videoUploadHeader = t.videoUploadHeader || null, t.videoUploadUrl = "string" == typeof t.videoUploadUrl ? t.videoUploadUrl : null, t.videoUploadSizeLimit = /\d+/.test(t.videoUploadSizeLimit) ? T.getNumber(t.videoUploadSizeLimit, 0) : null, t.videoMultipleFile = !!t.videoMultipleFile, t.videoTagAttrs = t.videoTagAttrs || null, t.videoIframeAttrs = t.videoIframeAttrs || null, t.videoAccept = "string" == typeof t.videoAccept && t.videoAccept.trim() || "*", t.audioWidth = t.audioWidth ? T.isNumber(t.audioWidth) ? t.audioWidth + "px" : t.audioWidth : "", t.audioHeight = t.audioHeight ? T.isNumber(t.audioHeight) ? t.audioHeight + "px" : t.audioHeight : "", t.audioFileInput = !!t.audioFileInput, t.audioUrlInput = void 0 === t.audioUrlInput || !t.audioFileInput || t.audioUrlInput, t.audioUploadHeader = t.audioUploadHeader || null, t.audioUploadUrl = "string" == typeof t.audioUploadUrl ? t.audioUploadUrl : null, t.audioUploadSizeLimit = /\d+/.test(t.audioUploadSizeLimit) ? T.getNumber(t.audioUploadSizeLimit, 0) : null, t.audioMultipleFile = !!t.audioMultipleFile, t.audioTagAttrs = t.audioTagAttrs || null, t.audioAccept = "string" == typeof t.audioAccept && t.audioAccept.trim() || "*", t.tableCellControllerPosition = "string" == typeof t.tableCellControllerPosition ? t.tableCellControllerPosition.toLowerCase() : "cell", t.tabDisable = !!t.tabDisable, t.shortcutsDisable = Array.isArray(t.shortcutsDisable) && t.shortcutsDisable.length > 0 ? t.shortcutsDisable.map((function(e) {
                        return e.toLowerCase()
                    })) : [], t.shortcutsHint = void 0 === t.shortcutsHint || !!t.shortcutsHint, t.callBackSave = t.callBackSave ? t.callBackSave : null, t.templates = t.templates ? t.templates : null, t.placeholder = "string" == typeof t.placeholder ? t.placeholder : null, t.linkProtocol = "string" == typeof t.linkProtocol ? t.linkProtocol : null, t.katex = t.katex ? t.katex.src ? t.katex : {
                        src: t.katex
                    } : null, t.buttonList = t.buttonList || [
                        ["undo", "redo"],
                        ["bold", "underline", "italic", "strike", "subscript", "superscript"],
                        ["removeFormat"],
                        ["outdent", "indent"],
                        ["fullScreen", "showBlocks", "codeView"],
                        ["preview", "print"]
                    ], t.icons = t.icons && "object" == typeof t.icons ? [x, t.icons].reduce((function(e, t) {
                        for (let n in t) T.hasOwn(t, n) && (e[n] = t[n]);
                        return e
                    }), {}) : x, t._editorStyles = T._setDefaultOptionStyle(t, t.defaultStyle)
                },
                _defaultButtons: function(e) {
                    const t = e.icons,
                        n = e.lang,
                        i = T.isOSX_IOS ? "⌘" : "CTRL",
                        l = e.shortcutsHint ? e.shortcutsDisable : ["bold", "strike", "underline", "italic", "undo", "indent"];
                    return {
                        bold: ["_se_command_bold", n.toolbar.bold + (l.indexOf("bold") > -1 ? "" : " (" + i + "+B)"), "STRONG", "", t.bold],
                        underline: ["_se_command_underline", n.toolbar.underline + (l.indexOf("underline") > -1 ? "" : " (" + i + "+U)"), "U", "", t.underline],
                        italic: ["_se_command_italic", n.toolbar.italic + (l.indexOf("italic") > -1 ? "" : " (" + i + "+I)"), "EM", "", t.italic],
                        strike: ["_se_command_strike", n.toolbar.strike + (l.indexOf("strike") > -1 ? "" : " (" + i + "+SHIFT+S)"), "DEL", "", t.strike],
                        subscript: ["_se_command_subscript", n.toolbar.subscript, "SUB", "", t.subscript],
                        superscript: ["_se_command_superscript", n.toolbar.superscript, "SUP", "", t.superscript],
                        removeFormat: ["", n.toolbar.removeFormat, "removeFormat", "", t.erase],
                        indent: ["_se_command_indent", n.toolbar.indent + (l.indexOf("indent") > -1 ? "" : " (" + i + "+])"), "indent", "", t.outdent],
                        outdent: ["_se_command_outdent", n.toolbar.outdent + (l.indexOf("indent") > -1 ? "" : " (" + i + "+[)"), "outdent", "", t.indent],
                        fullScreen: ["se-code-view-enabled se-resizing-enabled _se_command_fullScreen", n.toolbar.fullScreen, "fullScreen", "", t.expansion],
                        showBlocks: ["_se_command_showBlocks", n.toolbar.showBlocks, "showBlocks", "", t.show_blocks],
                        codeView: ["se-code-view-enabled se-resizing-enabled _se_command_codeView", n.toolbar.codeView, "codeView", "", t.code_view],
                        undo: ["_se_command_undo se-resizing-enabled", n.toolbar.undo + (l.indexOf("undo") > -1 ? "" : " (" + i + "+Z)"), "undo", "", t.undo],
                        redo: ["_se_command_redo se-resizing-enabled", n.toolbar.redo + (l.indexOf("undo") > -1 ? "" : " (" + i + "+Y / " + i + "+SHIFT+Z)"), "redo", "", t.redo],
                        preview: ["se-resizing-enabled", n.toolbar.preview, "preview", "", t.preview],
                        print: ["se-resizing-enabled", n.toolbar.print, "print", "", t.print],
                        save: ["_se_command_save se-resizing-enabled", n.toolbar.save, "save", "", t.save],
                        blockquote: ["", n.toolbar.tag_blockquote, "blockquote", "command", t.blockquote],
                        font: ["se-btn-select se-btn-tool-font", n.toolbar.font, "font", "submenu", '<span class="txt">' + n.toolbar.font + "</span>" + t.arrow_down],
                        formatBlock: ["se-btn-select se-btn-tool-format", n.toolbar.formats, "formatBlock", "submenu", '<span class="txt">' + n.toolbar.formats + "</span>" + t.arrow_down],
                        fontSize: ["se-btn-select se-btn-tool-size", n.toolbar.fontSize, "fontSize", "submenu", '<span class="txt">' + n.toolbar.fontSize + "</span>" + t.arrow_down],
                        fontColor: ["", n.toolbar.fontColor, "fontColor", "submenu", t.font_color],
                        hiliteColor: ["", n.toolbar.hiliteColor, "hiliteColor", "submenu", t.highlight_color],
                        align: ["se-btn-align", n.toolbar.align, "align", "submenu", t.align_left],
                        list: ["", n.toolbar.list, "list", "submenu", t.list_number],
                        horizontalRule: ["btn_line", n.toolbar.horizontalRule, "horizontalRule", "submenu", t.horizontal_rule],
                        table: ["", n.toolbar.table, "table", "submenu", t.table],
                        lineHeight: ["", n.toolbar.lineHeight, "lineHeight", "submenu", t.line_height],
                        template: ["", n.toolbar.template, "template", "submenu", t.template],
                        paragraphStyle: ["", n.toolbar.paragraphStyle, "paragraphStyle", "submenu", t.paragraph_style],
                        textStyle: ["", n.toolbar.textStyle, "textStyle", "submenu", t.text_style],
                        link: ["", n.toolbar.link, "link", "dialog", t.link],
                        image: ["", n.toolbar.image, "image", "dialog", t.image],
                        video: ["", n.toolbar.video, "video", "dialog", t.video],
                        audio: ["", n.toolbar.audio, "audio", "dialog", t.audio],
                        math: ["", n.toolbar.math, "math", "dialog", t.math],
                        imageGallery: ["", n.toolbar.imageGallery, "imageGallery", "fileBrowser", t.image_gallery]
                    }
                },
                _createModuleGroup: function() {
                    const e = T.createElement("DIV");
                    e.className = "se-btn-module se-btn-module-border";
                    const t = T.createElement("UL");
                    return t.className = "se-menu-list", e.appendChild(t), {
                        div: e,
                        ul: t
                    }
                },
                _createButton: function(e, t, n, i, l, o, s) {
                    const a = T.createElement("LI"),
                        r = T.createElement("BUTTON");
                    return r.setAttribute("type", "button"), r.setAttribute("class", "se-btn" + (e ? " " + e : "") + " se-tooltip"), r.setAttribute("data-command", n), r.setAttribute("data-display", i), r.setAttribute("tabindex", "-1"), l || (l = '<span class="se-icon-text">!</span>'), /^default\./i.test(l) && (l = s[l.replace(/^default\./i, "")]), /^text\./i.test(l) && (l = l.replace(/^text\./i, ""), r.className += " se-btn-more-text"), l += '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + (t || n) + "</span></span>", o && r.setAttribute("disabled", !0), r.innerHTML = l, a.appendChild(r), {
                        li: a,
                        button: r
                    }
                },
                _createToolBar: function(e, t, n, i) {
                    const l = e.createElement("DIV");
                    l.className = "se-toolbar-separator-vertical";
                    const o = e.createElement("DIV");
                    o.className = "se-toolbar sun-editor-common";
                    const s = e.createElement("DIV");
                    s.className = "se-btn-tray", o.appendChild(s);
                    const a = i.icons,
                        r = this._defaultButtons(i),
                        c = {},
                        d = [],
                        u = {};
                    if (n) {
                        const e = n.length ? n : Object.keys(n).map((function(e) {
                            return n[e]
                        }));
                        for (let t, n = 0, i = e.length; n < i; n++) t = e[n].default || e[n], u[t.name] = t
                    }
                    let h = null,
                        g = null,
                        p = null,
                        m = null,
                        f = "",
                        _ = !1;
                    const b = T.createElement("DIV");
                    b.className = "se-toolbar-more-layer";
                    e: for (let n, i, o, v, y, C = 0; C < t.length; C++)
                        if (n = !1, y = "", v = t[C], p = this._createModuleGroup(), "object" == typeof v) {
                            for (let e, l = 0; l < v.length; l++) {
                                if (g = v[l], e = !1, /^\%\d+/.test(g) && 0 === l) {
                                    v[0] = g.replace(/[^\d]/g, ""), d.push(v), t.splice(C--, 1);
                                    continue e
                                }
                                if ("object" == typeof g) "function" == typeof g.add ? (f = g.name, h = r[f], u[f] = g) : (f = g.name, h = [g.buttonClass, g.title, g.name, g.dataDisplay, g.innerHTML, g._disabled]);
                                else {
                                    if (/^\-/.test(g)) {
                                        y = g.substr(1), p.div.style.float = y;
                                        continue
                                    }
                                    if (/^\:/.test(g)) {
                                        e = !0;
                                        const t = g.match(/^\:([^\-]+)\-([^\-]+)\-([^\-]+)/);
                                        o = "__se__" + t[1].trim();
                                        h = ["se-btn-more", t[2].trim(), o, "MORE", t[3].trim()]
                                    } else h = r[g];
                                    if (f = g, !h) {
                                        const e = u[f];
                                        if (!e) throw Error("[SUNEDITOR.create.toolbar.fail] The button name of a plugin that does not exist. [" + f + "]");
                                        h = [e.buttonClass, e.title, e.name, e.display, e.innerHTML, e._disabled]
                                    }
                                }
                                m = this._createButton(h[0], h[1], h[2], h[3], h[4], h[5], a), (n ? i : p.ul).appendChild(m.li), u[f] && (c[f] = m.button), e && (n = !0, i = T.createElement("DIV"), i.className = "se-more-layer " + o, i.innerHTML = '<div class="se-more-form"><ul class="se-menu-list"' + (y ? ' style="float: ' + y + ';"' : "") + "></ul></div>", b.appendChild(i), i = i.firstElementChild.firstElementChild)
                            }
                            if (_) {
                                const e = l.cloneNode(!1);
                                y && (e.style.float = y), s.appendChild(e)
                            }
                            s.appendChild(p.div), _ = !0
                        } else if (/^\/$/.test(v)) {
                        const t = e.createElement("DIV");
                        t.className = "se-btn-module-enter", s.appendChild(t), _ = !1
                    }
                    1 === s.children.length && T.removeClass(s.firstElementChild, "se-btn-module-border"), d.length > 0 && d.unshift(t), b.children.length > 0 && s.appendChild(b);
                    const v = e.createElement("DIV");
                    v.className = "se-menu-tray", o.appendChild(v);
                    const y = e.createElement("DIV");
                    return y.className = "se-toolbar-cover", o.appendChild(y), {
                        element: o,
                        plugins: u,
                        pluginCallButtons: c,
                        responsiveButtons: d,
                        _menuTray: v,
                        _buttonTray: s
                    }
                }
            };
        var k = function(e, t, n) {
                return {
                    element: {
                        originElement: e,
                        topArea: t._top,
                        relative: t._relative,
                        toolbar: t._toolBar,
                        _buttonTray: t._toolBar.querySelector(".se-btn-tray"),
                        _menuTray: t._menuTray,
                        resizingBar: t._resizingBar,
                        navigation: t._navigation,
                        charWrapper: t._charWrapper,
                        charCounter: t._charCounter,
                        editorArea: t._editorArea,
                        wysiwygFrame: t._wysiwygArea,
                        wysiwyg: t._wysiwygArea,
                        code: t._codeArea,
                        placeholder: t._placeholder,
                        loading: t._loading,
                        lineBreaker: t._lineBreaker,
                        lineBreaker_t: t._lineBreaker_t,
                        lineBreaker_b: t._lineBreaker_b,
                        resizeBackground: t._resizeBack,
                        _stickyDummy: t._stickyDummy,
                        _arrow: t._arrow
                    },
                    tool: {
                        cover: t._toolBar.querySelector(".se-toolbar-cover"),
                        bold: t._toolBar.querySelector("._se_command_bold"),
                        underline: t._toolBar.querySelector("._se_command_underline"),
                        italic: t._toolBar.querySelector("._se_command_italic"),
                        strike: t._toolBar.querySelector("._se_command_strike"),
                        subscript: t._toolBar.querySelector("._se_command_subscript"),
                        superscript: t._toolBar.querySelector("._se_command_superscript"),
                        undo: t._toolBar.querySelector("._se_command_undo"),
                        redo: t._toolBar.querySelector("._se_command_redo"),
                        save: t._toolBar.querySelector("._se_command_save"),
                        outdent: t._toolBar.querySelector("._se_command_outdent"),
                        indent: t._toolBar.querySelector("._se_command_indent"),
                        fullScreen: t._toolBar.querySelector("._se_command_fullScreen"),
                        showBlocks: t._toolBar.querySelector("._se_command_showBlocks"),
                        codeView: t._toolBar.querySelector("._se_command_codeView")
                    },
                    options: n,
                    option: n
                }
            },
            B = {
                name: "notice",
                add: function(e) {
                    const t = e.context;
                    t.notice = {};
                    let n = e.util.createElement("DIV"),
                        i = e.util.createElement("SPAN"),
                        l = e.util.createElement("BUTTON");
                    n.className = "se-notice", l.className = "close", l.setAttribute("aria-label", "Close"), l.setAttribute("title", e.lang.dialogBox.close), l.innerHTML = e.icons.cancel, n.appendChild(i), n.appendChild(l), t.notice.modal = n, t.notice.message = i, l.addEventListener("click", this.onClick_cancel.bind(e)), t.element.editorArea.appendChild(n), n = null
                },
                onClick_cancel: function(e) {
                    e.preventDefault(), e.stopPropagation(), this.plugins.notice.close.call(this)
                },
                open: function(e) {
                    this.context.notice.message.textContent = e, this.context.notice.modal.style.display = "block"
                },
                close: function() {
                    this.context.notice.modal.style.display = "none"
                }
            },
            A = {
                init: function(e) {
                    return {
                        create: function(t, n) {
                            return this.create(t, n, e)
                        }.bind(this)
                    }
                },
                create: function(e, t, n) {
                    T._propertiesInit(), "object" != typeof t && (t = {}), n && (t = [n, t].reduce((function(e, t) {
                        for (let n in t)
                            if (T.hasOwn(t, n))
                                if ("plugins" === n && t[n] && e[n]) {
                                    let i = e[n],
                                        l = t[n];
                                    i = i.length ? i : Object.keys(i).map((function(e) {
                                        return i[e]
                                    })), l = l.length ? l : Object.keys(l).map((function(e) {
                                        return l[e]
                                    })), e[n] = l.filter((function(e) {
                                        return -1 === i.indexOf(e)
                                    })).concat(i)
                                } else e[n] = t[n];
                        return e
                    }), {}));
                    const i = "string" == typeof e ? document.getElementById(e) : e;
                    if (!i) {
                        if ("string" == typeof e) throw Error('[SUNEDITOR.create.fail] The element for that id was not found (ID:"' + e + '")');
                        throw Error("[SUNEDITOR.create.fail] suneditor requires textarea's element or id value")
                    }
                    const l = L.init(i, t);
                    if (l.constructed._top.id && document.getElementById(l.constructed._top.id)) throw Error('[SUNEDITOR.create.fail] The ID of the suneditor you are trying to create already exists (ID:"' + l.constructed._top.id + '")');
                    return function(e, t, n, i, l, o) {
                        const s = e.element.originElement.ownerDocument || document,
                            a = s.defaultView || window,
                            r = T,
                            c = l.icons,
                            d = {
                                _d: s,
                                _w: a,
                                _parser: new a.DOMParser,
                                _wd: null,
                                _ww: null,
                                _shadowRoot: null,
                                util: r,
                                functions: null,
                                notice: B,
                                icons: c,
                                history: null,
                                context: e,
                                pluginCallButtons: t,
                                plugins: n || {},
                                initPlugins: {},
                                _targetPlugins: {},
                                _menuTray: {},
                                lang: i,
                                effectNode: null,
                                submenu: null,
                                container: null,
                                _submenuName: "",
                                _bindedSubmenuOff: null,
                                _bindedContainerOff: null,
                                submenuActiveButton: null,
                                containerActiveButton: null,
                                controllerArray: [],
                                currentControllerName: "",
                                currentControllerTarget: null,
                                currentFileComponentInfo: null,
                                codeViewDisabledButtons: null,
                                resizingDisabledButtons: null,
                                _moreLayerActiveButton: null,
                                _htmlCheckWhitelistRegExp: null,
                                _disallowedTextTagsRegExp: null,
                                editorTagsWhitelistRegExp: null,
                                pasteTagsWhitelistRegExp: null,
                                hasFocus: !1,
                                isDisabled: !1,
                                _attributesWhitelistRegExp: null,
                                _attributesTagsWhitelist: null,
                                _bindControllersOff: null,
                                _isInline: null,
                                _isBalloon: null,
                                _isBalloonAlways: null,
                                _inlineToolbarAttr: {
                                    top: "",
                                    width: "",
                                    isShow: !1
                                },
                                _notHideToolbar: !1,
                                _sticky: !1,
                                _antiBlur: !1,
                                _lineBreaker: null,
                                _lineBreakerButton: null,
                                _componentsInfoInit: !0,
                                _componentsInfoReset: !1,
                                activePlugins: null,
                                managedTagsInfo: null,
                                _charTypeHTML: !1,
                                _fileInfoPluginsCheck: null,
                                _fileInfoPluginsReset: null,
                                _fileManager: {
                                    tags: null,
                                    regExp: null,
                                    queryString: null,
                                    pluginRegExp: null,
                                    pluginMap: null
                                },
                                commandMap: null,
                                _styleCommandMap: null,
                                _defaultCommand: {
                                    bold: "STRONG",
                                    underline: "U",
                                    italic: "EM",
                                    strike: "DEL",
                                    subscript: "SUB",
                                    superscript: "SUP"
                                },
                                _variable: {
                                    isCodeView: !1,
                                    isFullScreen: !1,
                                    innerHeight_fullScreen: 0,
                                    resizeClientY: 0,
                                    tabSize: 4,
                                    codeIndent: 4,
                                    minResizingSize: r.getNumber(e.element.wysiwygFrame.style.minHeight || "65", 0),
                                    currentNodes: [],
                                    currentNodesMap: [],
                                    _range: null,
                                    _selectionNode: null,
                                    _originCssText: e.element.topArea.style.cssText,
                                    _bodyOverflow: "",
                                    _editorAreaOriginCssText: "",
                                    _wysiwygOriginCssText: "",
                                    _codeOriginCssText: "",
                                    _fullScreenAttrs: {
                                        sticky: !1,
                                        balloon: !1,
                                        inline: !1
                                    },
                                    _lineBreakComp: null,
                                    _lineBreakDir: ""
                                },
                                callPlugin: function(e, n, i) {
                                    if (i = i || t[e], !this.plugins[e]) throw Error('[SUNEDITOR.core.callPlugin.fail] The called plugin does not exist or is in an invalid format. (pluginName:"' + e + '")');
                                    this.initPlugins[e] ? "object" == typeof this._targetPlugins[e] && i && this.initMenuTarget(e, i, this._targetPlugins[e]) : (this.plugins[e].add(this, i), this.initPlugins[e] = !0), this.plugins[e].active && !this.commandMap[e] && i && (this.commandMap[e] = i, this.activePlugins.push(e)), "function" == typeof n && n()
                                },
                                addModule: function(e) {
                                    for (let t, n = 0, i = e.length; n < i; n++) t = e[n].name, this.plugins[t] || (this.plugins[t] = e[n]), this.initPlugins[t] || (this.initPlugins[t] = !0, "function" == typeof this.plugins[t].add && this.plugins[t].add(this))
                                },
                                initMenuTarget: function(t, n, i) {
                                    n ? (e.element._menuTray.appendChild(i), this._targetPlugins[t] = !0, this._menuTray[n.getAttribute("data-command")] = i) : this._targetPlugins[t] = i
                                },
                                submenuOn: function(e) {
                                    this._bindedSubmenuOff && this._bindedSubmenuOff(), this._bindControllersOff && this.controllersOff();
                                    const t = this._submenuName = e.getAttribute("data-command"),
                                        n = this.submenu = this._menuTray[t];
                                    this.submenuActiveButton = e, this._setMenuPosition(e, n), this._bindedSubmenuOff = this.submenuOff.bind(this), this.addDocEvent("mousedown", this._bindedSubmenuOff, !1), this.plugins[t].on && this.plugins[t].on.call(this), this._antiBlur = !0
                                },
                                submenuOff: function() {
                                    this.removeDocEvent("mousedown", this._bindedSubmenuOff), this._bindedSubmenuOff = null, this.submenu && (this._submenuName = "", this.submenu.style.display = "none", this.submenu = null, r.removeClass(this.submenuActiveButton, "on"), this.submenuActiveButton = null, this._notHideToolbar = !1), this._antiBlur = !1
                                },
                                containerOn: function(e) {
                                    this._bindedContainerOff && this._bindedContainerOff();
                                    const t = this._containerName = e.getAttribute("data-command"),
                                        n = this.container = this._menuTray[t];
                                    this.containerActiveButton = e, this._setMenuPosition(e, n), this._bindedContainerOff = this.containerOff.bind(this), this.addDocEvent("mousedown", this._bindedContainerOff, !1), this.plugins[t].on && this.plugins[t].on.call(this), this._antiBlur = !0
                                },
                                containerOff: function() {
                                    this.removeDocEvent("mousedown", this._bindedContainerOff), this._bindedContainerOff = null, this.container && (this._containerName = "", this.container.style.display = "none", this.container = null, r.removeClass(this.containerActiveButton, "on"), this.containerActiveButton = null, this._notHideToolbar = !1), this._antiBlur = !1
                                },
                                _setMenuPosition: function(t, n) {
                                    n.style.top = "-10000px", n.style.visibility = "hidden", n.style.display = "block", n.style.height = "", r.addClass(t, "on");
                                    const i = this.context.element.toolbar,
                                        l = i.offsetWidth,
                                        o = n.offsetWidth,
                                        s = t.parentElement.offsetLeft + 3,
                                        c = l <= o ? 0 : l - (s + o);
                                    n.style.left = c < 0 ? s + c + "px" : s + "px";
                                    let d = 0,
                                        h = t;
                                    for (; h && h !== i;) d += h.offsetTop, h = h.offsetParent;
                                    const g = d;
                                    this._isBalloon ? d += i.offsetTop + t.offsetHeight : d -= t.offsetHeight;
                                    const p = u._getEditorOffsets(e.element.toolbar).top;
                                    let m = n.offsetHeight,
                                        f = e.element.topArea,
                                        _ = 0;
                                    for (; f;) _ += f.scrollTop, f = f.parentElement;
                                    const b = a.innerHeight - (p - _ + g + t.parentElement.offsetHeight);
                                    if (b < m) {
                                        let e = -1 * (m - g + 3);
                                        const i = p - _ + e,
                                            l = m + (i < 0 ? i : 0);
                                        l > b ? (n.style.height = l + "px", e = -1 * (l - g + 3)) : (n.style.height = b + "px", e = g + t.parentElement.offsetHeight), n.style.top = e + "px"
                                    } else n.style.top = g + t.parentElement.offsetHeight + "px";
                                    n.style.visibility = ""
                                },
                                controllersOn: function() {
                                    this._bindControllersOff && this._bindControllersOff(), this.controllerArray = [];
                                    for (let e, t = 0; t < arguments.length; t++) e = arguments[t], e && ("string" != typeof e ? "function" != typeof e ? r.hasClass(e, "se-controller") ? (e.style && (e.style.display = "block"), this.controllerArray.push(e)) : (this.currentControllerTarget = e, this.currentFileComponentInfo = this.getFileComponent(e)) : this.controllerArray.push(e) : this.currentControllerName = e);
                                    this._bindControllersOff = this.controllersOff.bind(this), this.addDocEvent("mousedown", this._bindControllersOff, !1), this.addDocEvent("keydown", this._bindControllersOff, !1), this._antiBlur = !0, "function" == typeof h.showController && h.showController(this.currentControllerName, this.controllerArray, this)
                                },
                                controllersOff: function(t) {
                                    if (this._fileManager.pluginRegExp.test(this.currentControllerName) && t && "keydown" === t.type && 27 !== t.keyCode) return;
                                    if (e.element.lineBreaker_t.style.display = e.element.lineBreaker_b.style.display = "none", this._variable._lineBreakComp = null, this.currentControllerName = "", this.currentControllerTarget = null, this.currentFileComponentInfo = null, this.effectNode = null, !this._bindControllersOff) return;
                                    this.removeDocEvent("mousedown", this._bindControllersOff), this.removeDocEvent("keydown", this._bindControllersOff), this._bindControllersOff = null;
                                    const n = this.controllerArray.length;
                                    if (n > 0) {
                                        for (let e = 0; e < n; e++) "function" == typeof this.controllerArray[e] ? this.controllerArray[e]() : this.controllerArray[e].style.display = "none";
                                        this.controllerArray = []
                                    }
                                    this._antiBlur = !1
                                },
                                eventStop: function(e) {
                                    e.stopPropagation(), e.preventDefault()
                                },
                                execCommand: function(e, t, n) {
                                    this._wd.execCommand(e, t, "formatBlock" === e ? "<" + n + ">" : n), this.history.push(!0)
                                },
                                nativeFocus: function() {
                                    const t = r.getParentElement(this.getSelectionNode(), "figcaption");
                                    t ? t.focus() : e.element.wysiwyg.focus(), this._editorRange()
                                },
                                focus: function() {
                                    if ("none" !== e.element.wysiwygFrame.style.display) {
                                        if (l.iframe) this.nativeFocus();
                                        else try {
                                            const t = this.getRange();
                                            if (t.startContainer === t.endContainer && r.isWysiwygDiv(t.startContainer)) {
                                                const t = r.createElement("P"),
                                                    n = r.createElement("BR");
                                                t.appendChild(n), e.element.wysiwyg.appendChild(t), this.setRange(n, 0, n, 0)
                                            } else this.setRange(t.startContainer, t.startOffset, t.endContainer, t.endOffset)
                                        } catch (e) {
                                            this.nativeFocus()
                                        }
                                        u._applyTagEffects(), this._isBalloon && u._toggleToolbarBalloon()
                                    }
                                },
                                focusEdge: function(t) {
                                    t || (t = e.element.wysiwyg.lastElementChild);
                                    const n = this.getFileComponent(t);
                                    n ? this.selectComponent(n.target, n.pluginName) : t ? (t = r.getChildElement(t, (function(e) {
                                        return 0 === e.childNodes.length || 3 === e.nodeType
                                    }), !0)) ? this.setRange(t, t.textContent.length, t, t.textContent.length) : this.nativeFocus() : this.focus()
                                },
                                setRange: function(e, t, n, i) {
                                    if (!e || !n) return;
                                    t > e.textContent.length && (t = e.textContent.length), i > n.textContent.length && (i = n.textContent.length);
                                    const o = this._wd.createRange();
                                    try {
                                        o.setStart(e, t), o.setEnd(n, i)
                                    } catch (e) {
                                        return console.warn("[SUNEDITOR.core.focus.error] " + e), void this.nativeFocus()
                                    }
                                    const s = this.getSelection();
                                    return s.removeAllRanges && s.removeAllRanges(), s.addRange(o), this._editorRange(), l.iframe && this.nativeFocus(), o
                                },
                                removeRange: function() {
                                    this._variable._range = null, this._variable._selectionNode = null, this.getSelection().removeAllRanges();
                                    const e = this.commandMap,
                                        t = this.activePlugins;
                                    for (let i in e) r.hasOwn(e, i) && (t.indexOf(i) > -1 ? n[i].active.call(this, null) : e.OUTDENT && /^OUTDENT$/i.test(i) ? e.OUTDENT.setAttribute("disabled", !0) : e.INDENT && /^INDENT$/i.test(i) ? e.INDENT.removeAttribute("disabled") : r.removeClass(e[i], "active"))
                                },
                                getRange: function() {
                                    const t = this._variable._range || this._createDefaultRange(),
                                        n = this.getSelection();
                                    if (t.collapsed === n.isCollapsed || !e.element.wysiwyg.contains(n.focusNode)) return t;
                                    if (n.rangeCount > 0) return this._variable._range = n.getRangeAt(0), this._variable._range; {
                                        const e = n.anchorNode,
                                            t = n.focusNode,
                                            i = n.anchorOffset,
                                            l = n.focusOffset,
                                            o = r.compareElements(e, t),
                                            s = o.ancestor && (0 === o.result ? i <= l : o.result > 1);
                                        return this.setRange(s ? e : t, s ? i : l, s ? t : e, s ? l : i)
                                    }
                                },
                                getRange_addLine: function(t) {
                                    if (this._selectionVoid(t)) {
                                        const n = e.element.wysiwyg,
                                            i = r.createElement("P");
                                        i.innerHTML = "<br>", n.insertBefore(i, n.firstElementChild), this.setRange(i.firstElementChild, 0, i.firstElementChild, 1), t = this._variable._range
                                    }
                                    return t
                                },
                                getSelection: function() {
                                    return this._shadowRoot && this._shadowRoot.getSelection ? this._shadowRoot.getSelection() : this._ww.getSelection()
                                },
                                getSelectionNode: function() {
                                    if (r.isWysiwygDiv(this._variable._selectionNode) && this._editorRange(), !this._variable._selectionNode) {
                                        const t = r.getChildElement(e.element.wysiwyg.firstChild, (function(e) {
                                            return 0 === e.childNodes.length || 3 === e.nodeType
                                        }), !1);
                                        if (t) return this._variable._selectionNode = t, t;
                                        this._editorRange()
                                    }
                                    return this._variable._selectionNode
                                },
                                _editorRange: function() {
                                    const e = this.getSelection();
                                    if (!e) return null;
                                    let t = null,
                                        n = null;
                                    t = e.rangeCount > 0 ? e.getRangeAt(0) : this._createDefaultRange(), this._variable._range = t, n = t.collapsed ? t.commonAncestorContainer : e.extentNode || e.anchorNode, this._variable._selectionNode = n
                                },
                                _createDefaultRange: function() {
                                    const t = e.element.wysiwyg;
                                    t.focus();
                                    const n = this._wd.createRange();
                                    let i = t.firstElementChild;
                                    return i || (i = r.createElement("P"), i.innerHTML = "<br>", t.appendChild(i)), n.setStart(i, 0), n.setEnd(i, 0), n
                                },
                                _selectionVoid: function(e) {
                                    const t = e.commonAncestorContainer;
                                    return r.isWysiwygDiv(e.startContainer) && r.isWysiwygDiv(e.endContainer) || /FIGURE/i.test(t.nodeName) || this._fileManager.regExp.test(t.nodeName) || r.isMediaComponent(t)
                                },
                                _resetRangeToTextNode: function() {
                                    const t = this.getRange();
                                    if (this._selectionVoid(t)) return !1;
                                    let n, i, l, o = t.startContainer,
                                        s = t.startOffset,
                                        a = t.endContainer,
                                        c = t.endOffset;
                                    if (r.isFormatElement(o) && (o = o.childNodes[s] || o.lastChild, s = o.textContent.length), r.isFormatElement(a) && (a = a.childNodes[c] || a.lastChild, c = a.textContent.length), n = r.isWysiwygDiv(o) ? e.element.wysiwyg.firstChild : o, i = s, r.isBreak(n) || 1 === n.nodeType && n.childNodes.length > 0) {
                                        const e = r.isBreak(n);
                                        if (!e) {
                                            for (; n && !r.isBreak(n) && 1 === n.nodeType;) n = n.childNodes[i] || n.nextElementSibling || n.nextSibling, i = 0;
                                            let e = r.getFormatElement(n, null);
                                            e === r.getRangeFormatElement(e, null) && (e = r.createElement(r.getParentElement(n, r.isCell) ? "DIV" : "P"), n.parentNode.insertBefore(e, n), e.appendChild(n))
                                        }
                                        if (r.isBreak(n)) {
                                            const t = r.createTextNode(r.zeroWidthSpace);
                                            n.parentNode.insertBefore(t, n), n = t, e && o === a && (a = n, c = 1)
                                        }
                                    }
                                    if (o = n, s = i, n = r.isWysiwygDiv(a) ? e.element.wysiwyg.lastChild : a, i = c, r.isBreak(n) || 1 === n.nodeType && n.childNodes.length > 0) {
                                        const e = r.isBreak(n);
                                        if (!e) {
                                            for (; n && !r.isBreak(n) && 1 === n.nodeType && (l = n.childNodes, 0 !== l.length);) n = l[i > 0 ? i - 1 : i] || !/FIGURE/i.test(l[0].nodeName) ? l[0] : n.previousElementSibling || n.previousSibling || o, i = i > 0 ? n.textContent.length : i;
                                            let e = r.getFormatElement(n, null);
                                            e === r.getRangeFormatElement(e, null) && (e = r.createElement(r.isCell(e) ? "DIV" : "P"), n.parentNode.insertBefore(e, n), e.appendChild(n))
                                        }
                                        if (r.isBreak(n)) {
                                            const t = r.createTextNode(r.zeroWidthSpace);
                                            n.parentNode.insertBefore(t, n), n = t, i = 1, e && !n.previousSibling && r.removeItem(a)
                                        }
                                    }
                                    return a = n, c = i, this.setRange(o, s, a, c), !0
                                },
                                getSelectedElements: function(t) {
                                    if (!this._resetRangeToTextNode()) return [];
                                    let n = this.getRange();
                                    if (r.isWysiwygDiv(n.startContainer)) {
                                        const t = e.element.wysiwyg.children;
                                        if (0 === t.length) return [];
                                        this.setRange(t[0], 0, t[t.length - 1], t[t.length - 1].textContent.trim().length), n = this.getRange()
                                    }
                                    const i = n.startContainer,
                                        l = n.endContainer,
                                        o = n.commonAncestorContainer,
                                        s = r.getListChildren(o, (function(e) {
                                            return t ? t(e) : r.isFormatElement(e)
                                        }));
                                    if (r.isWysiwygDiv(o) || r.isRangeFormatElement(o) || s.unshift(r.getFormatElement(o, null)), i === l || 1 === s.length) return s;
                                    let a = r.getFormatElement(i, null),
                                        c = r.getFormatElement(l, null),
                                        d = null,
                                        u = null;
                                    const h = function(e) {
                                        return !r.isTable(e) || /^TABLE$/i.test(e.nodeName)
                                    };
                                    let g = r.getRangeFormatElement(a, h),
                                        p = r.getRangeFormatElement(c, h);
                                    r.isTable(g) && r.isListCell(g.parentNode) && (g = g.parentNode), r.isTable(p) && r.isListCell(p.parentNode) && (p = p.parentNode);
                                    const m = g === p;
                                    for (let e, t = 0, n = s.length; t < n; t++)
                                        if (e = s[t], a === e || !m && e === g) d = t;
                                        else if (c === e || !m && e === p) {
                                        u = t;
                                        break
                                    }
                                    return null === d && (d = 0), null === u && (u = s.length - 1), s.slice(d, u + 1)
                                },
                                getSelectedElementsAndComponents: function(e) {
                                    const t = this.getRange().commonAncestorContainer,
                                        n = r.getParentElement(t, r.isComponent),
                                        i = r.isTable(t) ? this.getSelectedElements(null) : this.getSelectedElements(function(e) {
                                            const t = this.getParentElement(e, this.isComponent);
                                            return this.isFormatElement(e) && (!t || t === n) || this.isComponent(e) && !this.getFormatElement(e)
                                        }.bind(r));
                                    if (e)
                                        for (let e = 0, t = i.length; e < t; e++)
                                            for (let n = e - 1; n >= 0; n--)
                                                if (i[n].contains(i[e])) {
                                                    i.splice(e, 1), e--, t--;
                                                    break
                                                } return i
                                },
                                isEdgePoint: function(e, t) {
                                    return 0 === t || !e.nodeValue && 1 === t || t === e.nodeValue.length
                                },
                                showLoading: function() {
                                    e.element.loading.style.display = "block"
                                },
                                closeLoading: function() {
                                    e.element.loading.style.display = "none"
                                },
                                appendFormatTag: function(e, t) {
                                    const n = r.getFormatElement(this.getSelectionNode(), null),
                                        i = t ? "string" == typeof t ? t : t.nodeName : r.isFormatElement(n) && !r.isFreeFormatElement(n) ? n.nodeName : "P",
                                        l = r.createElement(i);
                                    return l.innerHTML = "<br>", (t && "string" != typeof t || !t && r.isFormatElement(n)) && r.copyTagAttributes(l, t || n), r.isCell(e) ? e.insertBefore(l, e.nextElementSibling) : e.parentNode.insertBefore(l, e.nextElementSibling), l
                                },
                                insertComponent: function(e, t, n, i) {
                                    if (n && !this.checkCharCount(e, null)) return null;
                                    const l = this.removeNode();
                                    this.getRange_addLine(this.getRange());
                                    let o = null,
                                        s = this.getSelectionNode(),
                                        a = r.getFormatElement(s, null);
                                    if (r.isListCell(a)) this.insertNode(e, s === a ? null : l.container.nextSibling, !1), e.nextSibling || e.parentNode.appendChild(r.createElement("BR"));
                                    else {
                                        if (this.getRange().collapsed && (3 === l.container.nodeType || r.isBreak(l.container))) {
                                            const e = r.getParentElement(l.container, function(e) {
                                                return this.isRangeFormatElement(e)
                                            }.bind(r));
                                            o = r.splitElement(l.container, l.offset, e ? r.getElementDepth(e) + 1 : 0), o && (a = o.previousSibling)
                                        }
                                        this.insertNode(e, a, !1), a && r.onlyZeroWidthSpace(a) && r.removeItem(a)
                                    }
                                    if (!i) {
                                        const t = this.getFileComponent(e);
                                        t ? this.selectComponent(t.target, t.pluginName) : o && (o = r.getEdgeChildNodes(o, null).sc || o, this.setRange(o, 0, o, 0))
                                    }
                                    return t || this.history.push(1), o || e
                                },
                                getFileComponent: function(e) {
                                    if (!this._fileManager.queryString || !e) return null;
                                    let t, n;
                                    return (/^FIGURE$/i.test(e.nodeName) || /se-component/.test(e.className)) && (t = e.querySelector(this._fileManager.queryString)), !t && e.nodeName && this._fileManager.regExp.test(e.nodeName) && (t = e), t && (n = this._fileManager.pluginMap[t.nodeName.toLowerCase()], n) ? {
                                        target: t,
                                        component: r.getParentElement(t, r.isComponent),
                                        pluginName: n
                                    } : null
                                },
                                selectComponent: function(e, t) {
                                    this.hasFocus || this.focus();
                                    const n = this.plugins[t];
                                    n && a.setTimeout(function() {
                                        "function" == typeof n.select && this.callPlugin(t, n.select.bind(this, e), null), this._setComponentLineBreaker(e)
                                    }.bind(this))
                                },
                                _setComponentLineBreaker: function(t) {
                                    this._lineBreaker.style.display = "none";
                                    const n = r.getParentElement(t, r.isComponent),
                                        i = e.element.lineBreaker_t.style,
                                        l = e.element.lineBreaker_b.style,
                                        o = "block" === this.context.resizing.resizeContainer.style.display ? this.context.resizing.resizeContainer : t,
                                        s = r.isListCell(n.parentNode);
                                    let a, c, d;
                                    (s ? n.previousSibling : r.isFormatElement(n.previousElementSibling)) ? i.display = "none": (this._variable._lineBreakComp = n, c = e.element.wysiwyg.scrollTop, a = r.getOffset(t, e.element.wysiwygFrame).top + c, d = o.offsetWidth / 2 / 2, i.top = a - c - 12 + "px", i.left = r.getOffset(o).left + d + "px", i.display = "block"), (s ? n.nextSibling : r.isFormatElement(n.nextElementSibling)) ? l.display = "none" : (a || (this._variable._lineBreakComp = n, c = e.element.wysiwyg.scrollTop, a = r.getOffset(t, e.element.wysiwygFrame).top + c, d = o.offsetWidth / 2 / 2), l.top = a + o.offsetHeight - c - 12 + "px", l.left = r.getOffset(o).left + o.offsetWidth - d - 24 + "px", l.display = "block")
                                },
                                insertNode: function(e, t, n) {
                                    if (n && !this.checkCharCount(e, null)) return null;
                                    const i = r.getFreeFormatElement(this.getSelectionNode(), null),
                                        l = !i && (r.isFormatElement(e) || r.isRangeFormatElement(e)) || r.isComponent(e);
                                    if (!t && l) {
                                        const e = this.removeNode();
                                        if (3 === e.container.nodeType || r.isBreak(e.container)) {
                                            const n = r.getParentElement(e.container, function(e) {
                                                return this.isRangeFormatElement(e) || this.isListCell(e)
                                            }.bind(r));
                                            (t = r.splitElement(e.container, e.offset, n ? r.getElementDepth(n) + 1 : 0)) && (t = t.previousSibling)
                                        }
                                    }
                                    const o = t || l ? this.getRange() : this.getRange_addLine(this.getRange()),
                                        s = o.commonAncestorContainer,
                                        a = o.startOffset,
                                        c = o.endOffset,
                                        d = o.startContainer === s && r.isFormatElement(s),
                                        u = d ? s.childNodes[a] : o.startContainer,
                                        h = d ? s.childNodes[c] : o.endContainer;
                                    let g, p = null;
                                    if (t) g = t.parentNode, t = t.nextSibling, p = !0;
                                    else if (g = u, 3 === u.nodeType && (g = u.parentNode), o.collapsed)
                                        if (3 === s.nodeType) t = s.textContent.length > c ? s.splitText(c) : s.nextSibling;
                                        else if (r.isBreak(g)) t = g, g = g.parentNode;
                                    else {
                                        let n = g.childNodes[a];
                                        const i = n && 3 === n.nodeType && r.onlyZeroWidthSpace(n) && r.isBreak(n.nextSibling) ? n.nextSibling : n;
                                        i ? i.nextSibling ? t = r.isBreak(i) && !r.isBreak(e) ? i : i.nextSibling : (g.removeChild(i), t = null) : t = null
                                    } else {
                                        if (u === h) {
                                            t = this.isEdgePoint(h, c) ? h.nextSibling : h.splitText(c);
                                            let e = u;
                                            this.isEdgePoint(u, a) || (e = u.splitText(a)), g.removeChild(e), 0 === g.childNodes.length && l && (g.innerHTML = "<br>")
                                        } else {
                                            const e = this.removeNode(),
                                                n = e.container,
                                                i = e.prevContainer;
                                            if (n && 0 === n.childNodes.length && l && (r.isFormatElement(n) ? n.innerHTML = "<br>" : r.isRangeFormatElement(n) && (n.innerHTML = "<p><br></p>")), !l && i)
                                                if (g = 3 === i.nodeType ? i.parentNode : i, g.contains(n))
                                                    for (t = n; t.parentNode === g;) t = t.parentNode;
                                                else t = null;
                                            else g = l ? s : n, t = l ? h : null;
                                            for (; t && !r.isFormatElement(t) && t.parentNode !== s;) t = t.parentNode
                                        }
                                    }
                                    try {
                                        if (r.isFormatElement(e) || r.isRangeFormatElement(e) || !r.isListCell(g) && r.isComponent(e)) {
                                            const e = g;
                                            if (r.isList(t)) g = t, t = null;
                                            else if (r.isListCell(t)) g = t.previousElementSibling || t;
                                            else if (!p && !t) {
                                                const e = this.removeNode(),
                                                    n = 3 === e.container.nodeType ? r.isListCell(r.getFormatElement(e.container, null)) ? e.container : r.getFormatElement(e.container, null) || e.container.parentNode : e.container,
                                                    i = r.isWysiwygDiv(n) || r.isRangeFormatElement(n);
                                                g = i ? n : n.parentNode, t = i ? null : n.nextSibling
                                            }
                                            0 === e.childNodes.length && g !== e && r.removeItem(e)
                                        }!l || i || r.isRangeFormatElement(g) || r.isListCell(g) || r.isWysiwygDiv(g) || (t = g.nextElementSibling, g = g.parentNode), g.insertBefore(e, g === t ? g.lastChild : t)
                                    } catch (t) {
                                        g.appendChild(e)
                                    } finally {
                                        if (i && (r.isFormatElement(e) || r.isRangeFormatElement(e)) && (e = this._setIntoFreeFormat(e)), !r.isComponent(e)) {
                                            let t = 1;
                                            if (3 === e.nodeType) {
                                                const t = e.previousSibling,
                                                    n = e.nextSibling,
                                                    i = !t || 1 === t.nodeType || r.onlyZeroWidthSpace(t) ? "" : t.textContent,
                                                    l = !n || 1 === n.nodeType || r.onlyZeroWidthSpace(n) ? "" : n.textContent;
                                                t && i.length > 0 && (e.textContent = i + e.textContent, r.removeItem(t)), n && n.length > 0 && (e.textContent += l, r.removeItem(n));
                                                const o = {
                                                    container: e,
                                                    startOffset: i.length,
                                                    endOffset: e.textContent.length - l.length
                                                };
                                                return this.setRange(e, o.startOffset, e, o.endOffset), o
                                            }
                                            if (!r.isBreak(e) && r.isFormatElement(g)) {
                                                let n = null;
                                                e.previousSibling || (n = r.createTextNode(r.zeroWidthSpace), e.parentNode.insertBefore(n, e)), e.nextSibling || (n = r.createTextNode(r.zeroWidthSpace), e.parentNode.appendChild(n)), r._isIgnoreNodeChange(e) && (e = e.nextSibling, t = 0)
                                            }
                                            this.setRange(e, t, e, t)
                                        }
                                        return this.history.push(!0), e
                                    }
                                },
                                _setIntoFreeFormat: function(e) {
                                    const t = e.parentNode;
                                    let n, i;
                                    for (; r.isFormatElement(e) || r.isRangeFormatElement(e);) {
                                        for (n = e.childNodes, i = null; n[0];)
                                            if (i = n[0], r.isFormatElement(i) || r.isRangeFormatElement(i)) {
                                                if (this._setIntoFreeFormat(i), !e.parentNode) break;
                                                n = e.childNodes
                                            } else t.insertBefore(i, e);
                                        0 === e.childNodes.length && r.removeItem(e), e = r.createElement("BR"), t.insertBefore(e, i.nextSibling)
                                    }
                                    return e
                                },
                                removeNode: function() {
                                    this._resetRangeToTextNode() || console.warn('[SUNEDITOR.core.removeNode.exception] An exception occurred while resetting the "Range" object.');
                                    const t = this.getRange();
                                    let n, i = 0,
                                        l = t.startContainer,
                                        o = t.endContainer;
                                    const s = t.startOffset,
                                        a = t.endOffset,
                                        c = t.commonAncestorContainer;
                                    let d = null,
                                        u = null;
                                    const h = r.getListChildNodes(c, null);
                                    let g = r.getArrayIndex(h, l),
                                        p = r.getArrayIndex(h, o);
                                    if (h.length > 0 && g > -1 && p > -1) {
                                        for (let e = g + 1, t = l; e >= 0; e--) h[e] === t.parentNode && h[e].firstChild === t && 0 === s && (g = e, t = t.parentNode);
                                        for (let e = p - 1, t = o; e > g; e--) h[e] === t.parentNode && 1 === h[e].nodeType && (h.splice(e, 1), t = t.parentNode, --p)
                                    } else {
                                        if (0 === h.length) {
                                            if (r.isFormatElement(c) || r.isRangeFormatElement(c) || r.isWysiwygDiv(c) || r.isBreak(c) || r.isMedia(c)) return {
                                                container: c,
                                                offset: 0
                                            };
                                            h.push(c), l = o = c
                                        } else if (l = o = h[0], r.isBreak(l) || r.onlyZeroWidthSpace(l)) return {
                                            container: l,
                                            offset: 0
                                        };
                                        g = p = 0
                                    }

                                    function m(e) {
                                        const t = r.getFormatElement(e, null);
                                        if (r.removeItem(e), r.isListCell(t)) {
                                            const e = r.getArrayItem(t.children, r.isList, !1);
                                            if (e) {
                                                const n = e.firstElementChild,
                                                    i = n.childNodes;
                                                for (; i[0];) t.insertBefore(i[0], e);
                                                r.removeItemAllParents(n, null, null)
                                            }
                                        }
                                    }
                                    for (let e = g; e <= p; e++) {
                                        const t = h[e];
                                        if (0 === t.length || 3 === t.nodeType && void 0 === t.data) m(t);
                                        else if (t !== l) t !== o ? m(t) : (u = 1 === o.nodeType ? r.createTextNode(o.textContent) : r.createTextNode(o.substringData(a, o.length - a)), u.length > 0 ? o.data = u.data : m(o));
                                        else if (1 === l.nodeType ? d = r.createTextNode(l.textContent) : t === o ? (d = r.createTextNode(l.substringData(0, s) + o.substringData(a, o.length - a)), i = s) : d = r.createTextNode(l.substringData(0, s)), d.length > 0 ? l.data = d.data : m(l), t === o) break
                                    }
                                    if (n = o && o.parentNode ? o : l && l.parentNode ? l : t.endContainer || t.startContainer, !r.isWysiwygDiv(n)) {
                                        const t = r.removeItemAllParents(n, function(e) {
                                            if (this.isComponent(e)) return !1;
                                            const t = e.textContent;
                                            return 0 === t.length || /^(\n|\u200B)+$/.test(t)
                                        }.bind(r), null);
                                        t && (n = t.sc || t.ec || e.element.wysiwyg)
                                    }
                                    return this.setRange(n, i, n, i), this.history.push(!0), {
                                        container: n,
                                        offset: i,
                                        prevContainer: l && l.parentNode ? l : null
                                    }
                                },
                                applyRangeFormatElement: function(e) {
                                    this.getRange_addLine(this.getRange());
                                    const t = this.getSelectedElementsAndComponents(!1);
                                    if (!t || 0 === t.length) return;
                                    e: for (let e, n, i, l, o, s, a = 0, c = t.length; a < c; a++)
                                        if (e = t[a], r.isListCell(e))
                                            if (n = e.lastElementChild, n && r.isListCell(e.nextElementSibling) && t.indexOf(e.nextElementSibling) > -1 && (l = n.lastElementChild, t.indexOf(l) > -1)) {
                                                let e = null;
                                                for (; e = l.lastElementChild;)
                                                    if (r.isList(e)) {
                                                        if (!(t.indexOf(e.lastElementChild) > -1)) continue e;
                                                        l = e.lastElementChild
                                                    } i = n.firstElementChild, o = t.indexOf(i), s = t.indexOf(l), t.splice(o, s - o + 1), c = t.length
                                            } else;
                                    let n, i, l, o = t[t.length - 1];
                                    n = r.isRangeFormatElement(o) || r.isFormatElement(o) ? o : r.getRangeFormatElement(o, null) || r.getFormatElement(o, null), r.isCell(n) ? (i = null, l = n) : (i = n.nextSibling, l = n.parentNode);
                                    let s = r.getElementDepth(n),
                                        a = null;
                                    const c = [],
                                        d = function(e, t, n) {
                                            let i = null;
                                            if (e !== t && !r.isTable(t)) {
                                                if (t && r.getElementDepth(e) === r.getElementDepth(t)) return n;
                                                i = r.removeItemAllParents(t, null, e)
                                            }
                                            return i ? i.ec : n
                                        };
                                    for (let n, o, u, h, g, p, m, f = 0, _ = t.length; f < _; f++)
                                        if (n = t[f], o = n.parentNode, o && !e.contains(o))
                                            if (u = r.getElementDepth(n), r.isList(o)) {
                                                if (null === a && (p ? (a = p, m = !0, p = null) : a = o.cloneNode(!1)), c.push(n), g = t[f + 1], f === _ - 1 || g && g.parentNode !== o) {
                                                    g && n.contains(g.parentNode) && (p = g.parentNode.cloneNode(!1));
                                                    let t, f = o.parentNode;
                                                    for (; r.isList(f);) t = r.createElement(f.nodeName), t.appendChild(a), a = t, f = f.parentNode;
                                                    const _ = this.detachRangeFormatElement(o, c, null, !0, !0);
                                                    s >= u ? (s = u, l = _.cc, i = d(l, o, _.ec), i && (l = i.parentNode)) : l === _.cc && (i = _.ec), l !== _.cc && (h = d(l, _.cc, h), i = void 0 !== h ? h : _.cc);
                                                    for (let e = 0, t = _.removeArray.length; e < t; e++) a.appendChild(_.removeArray[e]);
                                                    m || e.appendChild(a), p && _.removeArray[_.removeArray.length - 1].appendChild(p), a = null, m = !1
                                                }
                                            } else s >= u && (s = u, l = o, i = n.nextSibling), e.appendChild(n), l !== o && (h = d(l, o), void 0 !== h && (i = h));
                                    if (this.effectNode = null, r.mergeSameTags(e, null, !1), r.mergeNestedTags(e, function(e) {
                                            return this.isList(e)
                                        }.bind(r)), i && r.getElementDepth(i) > 0 && (r.isList(i.parentNode) || r.isList(i.parentNode.parentNode))) {
                                        const t = r.getParentElement(i, function(e) {
                                                return this.isRangeFormatElement(e) && !this.isList(e)
                                            }.bind(r)),
                                            n = r.splitElement(i, null, t ? r.getElementDepth(t) + 1 : 0);
                                        n.parentNode.insertBefore(e, n)
                                    } else l.insertBefore(e, i), d(e, i);
                                    const u = r.getEdgeChildNodes(e.firstElementChild, e.lastElementChild);
                                    t.length > 1 ? this.setRange(u.sc, 0, u.ec, u.ec.textContent.length) : this.setRange(u.ec, u.ec.textContent.length, u.ec, u.ec.textContent.length), this.history.push(!1)
                                },
                                detachRangeFormatElement: function(e, t, n, i, l) {
                                    const o = this.getRange(),
                                        s = o.startOffset,
                                        a = o.endOffset;
                                    let c = r.getListChildNodes(e, (function(t) {
                                            return t.parentNode === e
                                        })),
                                        d = e.parentNode,
                                        u = null,
                                        h = null,
                                        g = e.cloneNode(!1);
                                    const p = [],
                                        m = r.isList(n);
                                    let f = !1,
                                        _ = !1,
                                        b = !1;

                                    function v(t, n, i, l) {
                                        if (r.onlyZeroWidthSpace(n) && (n.innerHTML = r.zeroWidthSpace), 3 === n.nodeType) return t.insertBefore(n, i), n;
                                        const o = (b ? n : l).childNodes;
                                        let s = n.cloneNode(!1),
                                            a = null,
                                            c = null;
                                        for (; o[0];) c = o[0], !r._notTextNode(c) || r.isBreak(c) || r.isListCell(s) ? s.appendChild(c) : (s.childNodes.length > 0 && (a || (a = s), t.insertBefore(s, i), s = n.cloneNode(!1)), t.insertBefore(c, i), a || (a = c));
                                        if (s.childNodes.length > 0) {
                                            if (r.isListCell(t) && r.isListCell(s) && r.isList(i))
                                                if (m) {
                                                    for (a = i; i;) s.appendChild(i), i = i.nextSibling;
                                                    t.parentNode.insertBefore(s, t.nextElementSibling)
                                                } else {
                                                    const t = l.nextElementSibling,
                                                        n = r.detachNestedList(l, !1);
                                                    if (e !== n || t !== l.nextElementSibling) {
                                                        const t = s.childNodes;
                                                        for (; t[0];) l.appendChild(t[0]);
                                                        e = n, _ = !0
                                                    }
                                                }
                                            else t.insertBefore(s, i);
                                            a || (a = s)
                                        }
                                        return a
                                    }
                                    for (let l, o, s, a = 0, y = c.length; a < y; a++)
                                        if (l = c[a], 3 !== l.nodeType || !r.isList(g))
                                            if (b = !1, i && 0 === a && (u = t && t.length !== y && t[0] !== l ? g : e.previousSibling), t && (o = t.indexOf(l)), t && -1 === o) g || (g = e.cloneNode(!1)), g.appendChild(l);
                                            else {
                                                if (t && (s = t[o + 1]), g && g.children.length > 0 && (d.insertBefore(g, e), g = null), !m && r.isListCell(l))
                                                    if (s && r.getElementDepth(l) !== r.getElementDepth(s) && (r.isListCell(d) || r.getArrayItem(l.children, r.isList, !1))) {
                                                        const t = l.nextElementSibling,
                                                            n = r.detachNestedList(l, !1);
                                                        e === n && t === l.nextElementSibling || (e = n, _ = !0)
                                                    } else {
                                                        const t = l;
                                                        l = r.createElement(i ? t.nodeName : r.isList(e.parentNode) || r.isListCell(e.parentNode) ? "LI" : r.isCell(e.parentNode) ? "DIV" : "P");
                                                        const n = r.isListCell(l),
                                                            o = t.childNodes;
                                                        for (; o[0] && (!r.isList(o[0]) || n);) l.appendChild(o[0]);
                                                        r.copyFormatAttributes(l, t), b = !0
                                                    }
                                                else l = l.cloneNode(!1);
                                                if (!_ && (i ? (p.push(l), r.removeItem(c[a])) : (n ? (f || (d.insertBefore(n, e), f = !0), l = v(n, l, null, c[a])) : l = v(d, l, e, c[a]), _ || (t ? (h = l, u || (u = l)) : u || (u = h = l))), _)) {
                                                    _ = b = !1, c = r.getListChildNodes(e, (function(t) {
                                                        return t.parentNode === e
                                                    })), g = e.cloneNode(!1), d = e.parentNode, a = -1, y = c.length;
                                                    continue
                                                }
                                            } const y = e.parentNode;
                                    let C = e.nextSibling;
                                    g && g.children.length > 0 && y.insertBefore(g, C), n ? u = n.previousSibling : u || (u = e.previousSibling), C = e.nextSibling, 0 === e.children.length || 0 === e.textContent.length ? r.removeItem(e) : r.removeEmptyNode(e, null);
                                    let w = null;
                                    if (i) w = {
                                        cc: y,
                                        sc: u,
                                        ec: C,
                                        removeArray: p
                                    };
                                    else {
                                        u || (u = h), h || (h = u);
                                        const e = r.getEdgeChildNodes(u, h.parentNode ? u : h);
                                        w = {
                                            cc: (e.sc || e.ec).parentNode,
                                            sc: e.sc,
                                            ec: e.ec
                                        }
                                    }
                                    if (this.effectNode = null, l) return w;
                                    !i && w && (t ? this.setRange(w.sc, s, w.ec, a) : this.setRange(w.sc, 0, w.sc, 0)), this.history.push(!1)
                                },
                                detachList: function(e, t) {
                                    let n = {},
                                        i = !1,
                                        l = !1,
                                        o = null,
                                        s = null;
                                    const a = function(e) {
                                        return !this.isComponent(e)
                                    }.bind(r);
                                    for (let c, d, u, h, g = 0, p = e.length; g < p; g++) {
                                        if (u = g === p - 1, d = r.getRangeFormatElement(e[g], a), h = r.isList(d), !c && h) c = d, n = {
                                            r: c,
                                            f: [r.getParentElement(e[g], "LI")]
                                        }, 0 === g && (i = !0);
                                        else if (c && h)
                                            if (c !== d) {
                                                const a = this.detachRangeFormatElement(n.f[0].parentNode, n.f, null, t, !0);
                                                d = e[g].parentNode, i && (o = a.sc, i = !1), u && (s = a.ec), h ? (c = d, n = {
                                                    r: c,
                                                    f: [r.getParentElement(e[g], "LI")]
                                                }, u && (l = !0)) : c = null
                                            } else n.f.push(r.getParentElement(e[g], "LI")), u && (l = !0);
                                        if (u && r.isList(c)) {
                                            const e = this.detachRangeFormatElement(n.f[0].parentNode, n.f, null, t, !0);
                                            (l || 1 === p) && (s = e.ec), i && (o = e.sc || s)
                                        }
                                    }
                                    return {
                                        sc: o,
                                        ec: s
                                    }
                                },
                                nodeChange: function(e, t, n, i) {
                                    this._resetRangeToTextNode();
                                    let l = this.getRange_addLine(this.getRange());
                                    t = !!(t && t.length > 0) && t, n = !!(n && n.length > 0) && n;
                                    const o = !e,
                                        s = o && !n && !t;
                                    let c = l.startContainer,
                                        d = l.startOffset,
                                        u = l.endContainer,
                                        h = l.endOffset;
                                    if (s && l.collapsed && r.isFormatElement(c.parentNode) && r.isFormatElement(u.parentNode) || c === u && 1 === c.nodeType && r.isNonEditable(c)) return;
                                    if (l.collapsed && !s && 1 === c.nodeType && !r.isBreak(c) && !r.isComponent(c)) {
                                        let e = null;
                                        const t = c.childNodes[d];
                                        t && (e = t.nextSibling ? r.isBreak(t) ? t : t.nextSibling : null);
                                        const n = r.createTextNode(r.zeroWidthSpace);
                                        c.insertBefore(n, e), this.setRange(n, 1, n, 1), l = this.getRange(), c = l.startContainer, d = l.startOffset, u = l.endContainer, h = l.endOffset
                                    }
                                    r.isFormatElement(c) && (c = c.childNodes[d] || c.firstChild, d = 0), r.isFormatElement(u) && (u = u.childNodes[h] || u.lastChild, h = u.textContent.length), o && (e = r.createElement("DIV"));
                                    const g = a.RegExp,
                                        p = e.nodeName;
                                    if (!s && c === u && !n && e) {
                                        let t = c,
                                            n = 0;
                                        const i = [],
                                            l = e.style;
                                        for (let e = 0, t = l.length; e < t; e++) i.push(l[e]);
                                        const s = e.classList;
                                        for (let e = 0, t = s.length; e < t; e++) i.push("." + s[e]);
                                        if (i.length > 0) {
                                            for (; !r.isFormatElement(t) && !r.isWysiwygDiv(t);) {
                                                for (let l = 0; l < i.length; l++)
                                                    if (1 === t.nodeType) {
                                                        const s = i[l],
                                                            a = !!/^\./.test(s) && new g("\\s*" + s.replace(/^\./, "") + "(\\s+|$)", "ig"),
                                                            r = o ? !!t.style[s] : !!t.style[s] && !!e.style[s] && t.style[s] === e.style[s],
                                                            c = !1 !== a && (o ? !!t.className.match(a) : !!t.className.match(a) && !!e.className.match(a));
                                                        (r || c) && n++
                                                    } t = t.parentNode
                                            }
                                            if (n >= i.length) return
                                        }
                                    }
                                    let m, f = {},
                                        _ = {},
                                        b = "",
                                        v = "",
                                        y = "";
                                    if (t) {
                                        for (let e, n = 0, i = t.length; n < i; n++) e = t[n], /^\./.test(e) ? v += (v ? "|" : "\\s*(?:") + e.replace(/^\./, "") : b += (b ? "|" : "(?:;|^|\\s)(?:") + e;
                                        b && (b += ")\\s*:[^;]*\\s*(?:;|$)", b = new g(b, "ig")), v && (v += ")(?=\\s+|$)", v = new g(v, "ig"))
                                    }
                                    if (n) {
                                        y = "^(?:" + n[0];
                                        for (let e = 1; e < n.length; e++) y += "|" + n[e];
                                        y += ")$", y = new g(y, "i")
                                    }
                                    const C = a.Boolean,
                                        w = {
                                            v: !1
                                        },
                                        x = function(e) {
                                            const t = e.cloneNode(!1);
                                            if (3 === t.nodeType || r.isBreak(t)) return t;
                                            if (s) return null;
                                            const n = !y && o || y && y.test(t.nodeName);
                                            if (n && !i) return w.v = !0, null;
                                            const l = t.style.cssText;
                                            let a = "";
                                            b && l.length > 0 && (a = l.replace(b, "").trim(), a !== l && (w.v = !0));
                                            const c = t.className;
                                            let d = "";
                                            return v && c.length > 0 && (d = c.replace(v, "").trim(), d !== c && (w.v = !0)), (!o || !v && c || !b && l || a || d || !n) && (a || d || t.nodeName !== p || C(b) !== C(l) || C(v) !== C(c)) ? (b && l.length > 0 && (t.style.cssText = a), t.style.cssText || t.removeAttribute("style"), v && c.length > 0 && (t.className = d.trim()), t.className.trim() || t.removeAttribute("class"), t.style.cssText || t.className || t.nodeName !== p && !n ? t : (w.v = !0, null)) : (w.v = !0, null)
                                        },
                                        E = this.getSelectedElements(null);
                                    l = this.getRange(), c = l.startContainer, d = l.startOffset, u = l.endContainer, h = l.endOffset, r.getFormatElement(c, null) || (c = r.getChildElement(E[0], (function(e) {
                                        return 3 === e.nodeType
                                    }), !1), d = 0), r.getFormatElement(u, null) || (u = r.getChildElement(E[E.length - 1], (function(e) {
                                        return 3 === e.nodeType
                                    }), !1), h = u.textContent.length);
                                    const S = r.getFormatElement(c, null) === r.getFormatElement(u, null),
                                        N = E.length - (S ? 0 : 1);
                                    m = e.cloneNode(!1);
                                    const T = s || o && function(e) {
                                            for (let t = 0, n = e.length; t < n; t++)
                                                if (r._isMaintainedNode(e[t]) || r._isSizeNode(e[t])) return !0;
                                            return !1
                                        }(n),
                                        L = r._isSizeNode(m),
                                        k = this._util_getMaintainedNode.bind(r, T, L),
                                        B = this._util_isMaintainedNode.bind(r, T, L);
                                    if (S) {
                                        const e = this._nodeChange_oneLine(E[0], m, x, c, d, u, h, s, o, l.collapsed, w, k, B);
                                        f.container = e.startContainer, f.offset = e.startOffset, _.container = e.endContainer, _.offset = e.endOffset, f.container === _.container && r.onlyZeroWidthSpace(f.container) && (f.offset = _.offset = 1), this._setCommonListStyle(e.ancestor, null)
                                    } else {
                                        N > 0 && (m = e.cloneNode(!1), _ = this._nodeChange_endLine(E[N], m, x, u, h, s, o, w, k, B));
                                        for (let t, n = N - 1; n > 0; n--) m = e.cloneNode(!1), t = this._nodeChange_middleLine(E[n], m, x, s, o, w, _.container), t.endContainer && (_.ancestor = null, _.container = t.endContainer), this._setCommonListStyle(t.ancestor, null);
                                        m = e.cloneNode(!1), f = this._nodeChange_startLine(E[0], m, x, c, d, s, o, w, k, B, _.container), f.endContainer && (_.ancestor = null, _.container = f.endContainer), N <= 0 ? _ = f : _.container || (_.ancestor = null, _.container = f.container, _.offset = f.container.textContent.length), this._setCommonListStyle(f.ancestor, null), this._setCommonListStyle(_.ancestor || r.getFormatElement(_.container), null)
                                    }
                                    this.controllersOff(), this.setRange(f.container, f.offset, _.container, _.offset), this.history.push(!1)
                                },
                                _setCommonListStyle: function(e, t) {
                                    if (!r.isListCell(e)) return;
                                    t || e.removeAttribute("style");
                                    const n = r.getArrayItem((t || e).childNodes, (function(e) {
                                        return !r.isBreak(e) && !r.onlyZeroWidthSpace(e.textContent.trim())
                                    }), !0);
                                    if (n[0] && 1 === n.length) {
                                        if (!(t = n[0]) || 1 !== t.nodeType) return;
                                        const i = t.style,
                                            l = e.style;
                                        /STRONG/i.test(t.nodeName) ? l.fontWeight = "bold" : i.fontWeight && (l.fontWeight = i.fontWeight), i.color && (l.color = i.color), i.fontSize && (l.fontSize = i.fontSize), this._setCommonListStyle(e, t)
                                    }
                                },
                                _stripRemoveNode: function(e) {
                                    const t = e.parentNode;
                                    if (!e || 3 === e.nodeType || !t) return;
                                    const n = e.childNodes;
                                    for (; n[0];) t.insertBefore(n[0], e);
                                    t.removeChild(e)
                                },
                                _util_getMaintainedNode: function(e, t, n) {
                                    return !n || e ? null : this.getParentElement(n, this._isMaintainedNode.bind(this)) || (t ? null : this.getParentElement(n, this._isSizeNode.bind(this)))
                                },
                                _util_isMaintainedNode: function(e, t, n) {
                                    if (!n || e || 1 !== n.nodeType) return !1;
                                    const i = this._isMaintainedNode(n);
                                    return this.getParentElement(n, this._isMaintainedNode.bind(this)) ? i : i || !t && this._isSizeNode(n)
                                },
                                _nodeChange_oneLine: function(e, t, n, i, l, o, s, c, d, u, h, g, p) {
                                    let m = i.parentNode;
                                    for (; !(m.nextSibling || m.previousSibling || r.isFormatElement(m.parentNode) || r.isWysiwygDiv(m.parentNode)) && m.nodeName !== t.nodeName;) m = m.parentNode;
                                    if (!d && m === o.parentNode && m.nodeName === t.nodeName && r.onlyZeroWidthSpace(i.textContent.slice(0, l)) && r.onlyZeroWidthSpace(o.textContent.slice(s))) {
                                        const e = m.childNodes;
                                        let n = !0;
                                        for (let t, l, s, a, c = 0, d = e.length; c < d; c++)
                                            if (t = e[c], a = !r.onlyZeroWidthSpace(t), t !== i)
                                                if (t !== o) {
                                                    if (!l && a || l && s && a) {
                                                        n = !1;
                                                        break
                                                    }
                                                } else s = !0;
                                        else l = !0;
                                        if (n) return r.copyTagAttributes(m, t), {
                                            startContainer: i,
                                            startOffset: l,
                                            endContainer: o,
                                            endOffset: s
                                        }
                                    }
                                    h.v = !1;
                                    const f = e,
                                        _ = [t],
                                        b = e.cloneNode(!1),
                                        v = i === o;
                                    let y, C, w, x, E, S = i,
                                        N = l,
                                        T = o,
                                        L = s,
                                        k = !1,
                                        B = !1;
                                    const A = a.RegExp;

                                    function z(e) {
                                        const t = new A("(?:;|^|\\s)(?:" + x + "null)\\s*:[^;]*\\s*(?:;|$)", "ig");
                                        let n = "";
                                        return t && e.style.cssText.length > 0 && (n = t.test(e.style.cssText)), !n
                                    }
                                    if (function e(i, l) {
                                            const o = i.childNodes;
                                            for (let i, s = 0, a = o.length; s < a; s++) {
                                                let a = o[s];
                                                if (!a) continue;
                                                let d, h = l;
                                                if (!k && a === S) {
                                                    let e = b;
                                                    E = g(a);
                                                    const o = r.createTextNode(1 === S.nodeType ? "" : S.substringData(0, N)),
                                                        s = r.createTextNode(1 === S.nodeType ? "" : S.substringData(N, v && L >= N ? L - N : S.data.length - N));
                                                    if (E) {
                                                        const t = g(l);
                                                        if (t && t.parentNode !== e) {
                                                            let n = t,
                                                                i = null;
                                                            for (; n.parentNode !== e;) {
                                                                for (l = i = n.parentNode.cloneNode(!1); n.childNodes[0];) i.appendChild(n.childNodes[0]);
                                                                n.appendChild(i), n = n.parentNode
                                                            }
                                                            n.parentNode.appendChild(t)
                                                        }
                                                        E = E.cloneNode(!1)
                                                    }
                                                    r.onlyZeroWidthSpace(o) || l.appendChild(o);
                                                    const c = g(l);
                                                    for (c && (E = c), E && (e = E), C = a, y = [], x = ""; C !== e && C !== f && null !== C;) i = p(C) ? null : n(C), i && 1 === C.nodeType && z(C) && (y.push(i), x += C.style.cssText.substr(0, C.style.cssText.indexOf(":")) + "|"), C = C.parentNode;
                                                    const d = y.pop() || s;
                                                    for (w = C = d; y.length > 0;) C = y.pop(), w.appendChild(C), w = C;
                                                    if (t.appendChild(d), e.appendChild(t), E && !g(T) && (t = t.cloneNode(!1), b.appendChild(t), _.push(t)), S = s, N = 0, k = !0, C !== s && C.appendChild(S), !v) continue
                                                }
                                                if (B || a !== T) {
                                                    if (k) {
                                                        if (1 === a.nodeType && !r.isBreak(a)) {
                                                            r._isIgnoreNodeChange(a) ? (b.appendChild(a.cloneNode(!0)), u || (t = t.cloneNode(!1), b.appendChild(t), _.push(t))) : e(a, a);
                                                            continue
                                                        }
                                                        C = a, y = [], x = "";
                                                        const o = [];
                                                        for (; null !== C.parentNode && C !== f && C !== t;) i = B ? C.cloneNode(!1) : n(C), 1 === C.nodeType && !r.isBreak(a) && i && z(C) && (p(C) ? E || o.push(i) : y.push(i), x += C.style.cssText.substr(0, C.style.cssText.indexOf(":")) + "|"), C = C.parentNode;
                                                        y = y.concat(o);
                                                        const s = y.pop() || a;
                                                        for (w = C = s; y.length > 0;) C = y.pop(), w.appendChild(C), w = C;
                                                        if (p(t.parentNode) && !p(s) && (t = t.cloneNode(!1), b.appendChild(t), _.push(t)), B || E || !p(s)) s === a ? l = B ? b : t : B ? (b.appendChild(s), l = C) : (t.appendChild(s), l = C);
                                                        else {
                                                            t = t.cloneNode(!1);
                                                            const e = s.childNodes;
                                                            for (let n = 0, i = e.length; n < i; n++) t.appendChild(e[n]);
                                                            s.appendChild(t), b.appendChild(s), _.push(t), l = t.children.length > 0 ? C : t
                                                        }
                                                        if (E && 3 === a.nodeType)
                                                            if (g(a)) {
                                                                const e = r.getParentElement(l, function(e) {
                                                                    return this._isMaintainedNode(e.parentNode) || e.parentNode === b
                                                                }.bind(r));
                                                                E.appendChild(e), t = e.cloneNode(!1), _.push(t), b.appendChild(t)
                                                            } else E = null
                                                    }
                                                    d = a.cloneNode(!1), l.appendChild(d), 1 !== a.nodeType || r.isBreak(a) || (h = d), e(a, h)
                                                } else {
                                                    E = g(a);
                                                    const e = r.createTextNode(1 === T.nodeType ? "" : T.substringData(L, T.length - L)),
                                                        l = r.createTextNode(v || 1 === T.nodeType ? "" : T.substringData(0, L));
                                                    if (E ? E = E.cloneNode(!1) : p(t.parentNode) && !E && (t = t.cloneNode(!1), b.appendChild(t), _.push(t)), !r.onlyZeroWidthSpace(e)) {
                                                        C = a, x = "", y = [];
                                                        const t = [];
                                                        for (; C !== b && C !== f && null !== C;) 1 === C.nodeType && z(C) && (p(C) ? t.push(C.cloneNode(!1)) : y.push(C.cloneNode(!1)), x += C.style.cssText.substr(0, C.style.cssText.indexOf(":")) + "|"), C = C.parentNode;
                                                        for (y = y.concat(t), d = w = C = y.pop() || e; y.length > 0;) C = y.pop(), w.appendChild(C), w = C;
                                                        b.appendChild(d), C.textContent = e.data
                                                    }
                                                    if (E && d) {
                                                        const e = g(d);
                                                        e && (E = e)
                                                    }
                                                    for (C = a, y = [], x = ""; C !== b && C !== f && null !== C;) i = p(C) ? null : n(C), i && 1 === C.nodeType && z(C) && (y.push(i), x += C.style.cssText.substr(0, C.style.cssText.indexOf(":")) + "|"), C = C.parentNode;
                                                    const o = y.pop() || l;
                                                    for (w = C = o; y.length > 0;) C = y.pop(), w.appendChild(C), w = C;
                                                    E ? ((t = t.cloneNode(!1)).appendChild(o), E.insertBefore(t, E.firstChild), b.appendChild(E), _.push(t), E = null) : t.appendChild(o), T = l, L = l.data.length, B = !0, !c && u && (t = l, l.textContent = r.zeroWidthSpace), C !== l && C.appendChild(T)
                                                }
                                            }
                                        }(e, b), d && !c && !h.v) return {
                                        ancestor: e,
                                        startContainer: i,
                                        startOffset: l,
                                        endContainer: o,
                                        endOffset: s
                                    };
                                    if (c = c && d)
                                        for (let e = 0; e < _.length; e++) {
                                            let t, n, i, l = _[e];
                                            if (u) t = r.createTextNode(r.zeroWidthSpace), b.replaceChild(t, l);
                                            else {
                                                const e = l.childNodes;
                                                for (n = e[0]; e[0];) i = e[0], b.insertBefore(i, l);
                                                r.removeItem(l)
                                            }
                                            0 === e && (u ? S = T = t : (S = n, T = i))
                                        } else {
                                            if (d)
                                                for (let e = 0; e < _.length; e++) this._stripRemoveNode(_[e]);
                                            u && (S = T = t)
                                        }
                                    r.removeEmptyNode(b, t), u && (N = S.textContent.length, L = T.textContent.length);
                                    const M = c || 0 === T.textContent.length;
                                    r.isBreak(T) || 0 !== T.textContent.length || (r.removeItem(T), T = S), L = M ? T.textContent.length : L;
                                    const H = {
                                            s: 0,
                                            e: 0
                                        },
                                        I = r.getNodePath(S, b, H),
                                        D = !T.parentNode;
                                    D && (T = S);
                                    const O = {
                                            s: 0,
                                            e: 0
                                        },
                                        F = r.getNodePath(T, b, D || M ? null : O);
                                    N += H.s, L = u ? N : D ? S.textContent.length : M ? L + H.s : L + O.s;
                                    const R = r.mergeSameTags(b, [I, F], !0);
                                    return e.parentNode.replaceChild(b, e), S = r.getNodeFromPath(I, b), T = r.getNodeFromPath(F, b), {
                                        ancestor: b,
                                        startContainer: S,
                                        startOffset: N + R[0],
                                        endContainer: T,
                                        endOffset: L + R[1]
                                    }
                                },
                                _nodeChange_startLine: function(e, t, n, i, l, o, s, a, c, d, u) {
                                    let h = i.parentNode;
                                    for (; !(h.nextSibling || h.previousSibling || r.isFormatElement(h.parentNode) || r.isWysiwygDiv(h.parentNode)) && h.nodeName !== t.nodeName;) h = h.parentNode;
                                    if (!s && h.nodeName === t.nodeName && !r.isFormatElement(h) && !h.nextSibling && r.onlyZeroWidthSpace(i.textContent.slice(0, l))) {
                                        let n = !0,
                                            o = i.previousSibling;
                                        for (; o;) {
                                            if (!r.onlyZeroWidthSpace(o)) {
                                                n = !1;
                                                break
                                            }
                                            o = o.previousSibling
                                        }
                                        if (n) return r.copyTagAttributes(h, t), {
                                            ancestor: e,
                                            container: i,
                                            offset: l
                                        }
                                    }
                                    a.v = !1;
                                    const g = e,
                                        p = [t],
                                        m = e.cloneNode(!1);
                                    let f, _, b, v, y = i,
                                        C = l,
                                        w = !1;
                                    if (function e(i, l) {
                                            const o = i.childNodes;
                                            for (let i, s, a = 0, h = o.length; a < h; a++) {
                                                const h = o[a];
                                                if (!h) continue;
                                                let x = l;
                                                if (w && !r.isBreak(h)) {
                                                    if (1 === h.nodeType) {
                                                        if (r._isIgnoreNodeChange(h)) {
                                                            if (t = t.cloneNode(!1), s = h.cloneNode(!0), m.appendChild(s), m.appendChild(t), p.push(t), u && h.contains(u)) {
                                                                const e = r.getNodePath(u, h);
                                                                u = r.getNodeFromPath(e, s)
                                                            }
                                                        } else e(h, h);
                                                        continue
                                                    }
                                                    _ = h, f = [];
                                                    const o = [];
                                                    for (; null !== _.parentNode && _ !== g && _ !== t;) i = n(_), 1 === _.nodeType && i && (d(_) ? v || o.push(i) : f.push(i)), _ = _.parentNode;
                                                    f = f.concat(o);
                                                    const a = f.length > 0,
                                                        y = f.pop() || h;
                                                    for (b = _ = y; f.length > 0;) _ = f.pop(), b.appendChild(_), b = _;
                                                    if (d(t.parentNode) && !d(y) && (t = t.cloneNode(!1), m.appendChild(t), p.push(t)), !v && d(y)) {
                                                        t = t.cloneNode(!1);
                                                        const e = y.childNodes;
                                                        for (let n = 0, i = e.length; n < i; n++) t.appendChild(e[n]);
                                                        y.appendChild(t), m.appendChild(y), l = d(_) ? t : _, p.push(t)
                                                    } else a ? (t.appendChild(y), l = _) : l = t;
                                                    if (v && 3 === h.nodeType)
                                                        if (c(h)) {
                                                            const e = r.getParentElement(l, function(e) {
                                                                return this._isMaintainedNode(e.parentNode) || e.parentNode === m
                                                            }.bind(r));
                                                            v.appendChild(e), t = e.cloneNode(!1), p.push(t), m.appendChild(t)
                                                        } else v = null
                                                }
                                                if (w || h !== y) i = w ? n(h) : h.cloneNode(!1), i && (l.appendChild(i), 1 !== h.nodeType || r.isBreak(h) || (x = i)), e(h, x);
                                                else {
                                                    let e = m;
                                                    v = c(h);
                                                    const o = r.createTextNode(1 === y.nodeType ? "" : y.substringData(0, C)),
                                                        s = r.createTextNode(1 === y.nodeType ? "" : y.substringData(C, y.length - C));
                                                    if (v) {
                                                        const t = c(l);
                                                        if (t && t.parentNode !== e) {
                                                            let n = t,
                                                                i = null;
                                                            for (; n.parentNode !== e;) {
                                                                for (l = i = n.parentNode.cloneNode(!1); n.childNodes[0];) i.appendChild(n.childNodes[0]);
                                                                n.appendChild(i), n = n.parentNode
                                                            }
                                                            n.parentNode.appendChild(t)
                                                        }
                                                        v = v.cloneNode(!1)
                                                    }
                                                    r.onlyZeroWidthSpace(o) || l.appendChild(o);
                                                    const a = c(l);
                                                    for (a && (v = a), v && (e = v), _ = l, f = []; _ !== e && null !== _;) i = n(_), 1 === _.nodeType && i && f.push(i), _ = _.parentNode;
                                                    const d = f.pop() || l;
                                                    for (b = _ = d; f.length > 0;) _ = f.pop(), b.appendChild(_), b = _;
                                                    d !== l ? (t.appendChild(d), l = _) : l = t, r.isBreak(h) && t.appendChild(h.cloneNode(!1)), e.appendChild(t), y = s, C = 0, w = !0, l.appendChild(y)
                                                }
                                            }
                                        }(e, m), s && !o && !a.v) return {
                                        ancestor: e,
                                        container: i,
                                        offset: l,
                                        endContainer: u
                                    };
                                    if (o = o && s)
                                        for (let e = 0; e < p.length; e++) {
                                            let t = p[e];
                                            const n = t.childNodes,
                                                i = n[0];
                                            for (; n[0];) m.insertBefore(n[0], t);
                                            r.removeItem(t), 0 === e && (y = i)
                                        } else if (s)
                                            for (let e = 0; e < p.length; e++) this._stripRemoveNode(p[e]);
                                    if (o || 0 !== m.childNodes.length) {
                                        r.removeEmptyNode(m, t), r.onlyZeroWidthSpace(m.textContent) && (y = m.firstChild, C = 0);
                                        const n = {
                                                s: 0,
                                                e: 0
                                            },
                                            i = r.getNodePath(y, m, n);
                                        C += n.s;
                                        const l = r.mergeSameTags(m, [i], !0);
                                        e.parentNode.replaceChild(m, e), y = r.getNodeFromPath(i, m), C += l[0]
                                    } else e.childNodes ? y = e.childNodes[0] : (y = r.createTextNode(r.zeroWidthSpace), e.appendChild(y));
                                    return {
                                        ancestor: m,
                                        container: y,
                                        offset: C,
                                        endContainer: u
                                    }
                                },
                                _nodeChange_middleLine: function(e, t, n, i, l, o, s) {
                                    if (!l) {
                                        let n = null;
                                        s && e.contains(s) && (n = r.getNodePath(s, e));
                                        const i = e.cloneNode(!0),
                                            l = t.nodeName,
                                            o = t.style.cssText,
                                            a = t.className;
                                        let c, d = i.childNodes,
                                            u = 0,
                                            h = d.length;
                                        for (; u < h && (c = d[u], 3 !== c.nodeType); u++) {
                                            if (c.nodeName !== l) {
                                                if (!r.isBreak(c) && r._isIgnoreNodeChange(c)) continue;
                                                if (1 === h) {
                                                    d = c.childNodes, h = d.length, u = -1;
                                                    continue
                                                }
                                                break
                                            }
                                            c.style.cssText += o, r.addClass(c, a)
                                        }
                                        if (h > 0 && u === h) return e.innerHTML = i.innerHTML, {
                                            ancestor: e,
                                            endContainer: n ? r.getNodeFromPath(n, e) : null
                                        }
                                    }
                                    o.v = !1;
                                    const a = e.cloneNode(!1),
                                        c = [t];
                                    let d = !0;
                                    if (function e(i, l) {
                                            const o = i.childNodes;
                                            for (let i, u, h = 0, g = o.length; h < g; h++) {
                                                let g = o[h];
                                                if (!g) continue;
                                                let p = l;
                                                if (r.isBreak(g) || !r._isIgnoreNodeChange(g)) i = n(g), i && (d = !1, l.appendChild(i), 1 === g.nodeType && (p = i)), r.isBreak(g) || e(g, p);
                                                else if (t.childNodes.length > 0 && (a.appendChild(t), t = t.cloneNode(!1)), u = g.cloneNode(!0), a.appendChild(u), a.appendChild(t), c.push(t), l = t, s && g.contains(s)) {
                                                    const e = r.getNodePath(s, g);
                                                    s = r.getNodeFromPath(e, u)
                                                }
                                            }
                                        }(e, t), d || l && !i && !o.v) return {
                                        ancestor: e,
                                        endContainer: s
                                    };
                                    if (a.appendChild(t), i && l)
                                        for (let e = 0; e < c.length; e++) {
                                            let t = c[e];
                                            const n = t.childNodes;
                                            for (; n[0];) a.insertBefore(n[0], t);
                                            r.removeItem(t)
                                        } else if (l)
                                            for (let e = 0; e < c.length; e++) this._stripRemoveNode(c[e]);
                                    return r.removeEmptyNode(a, t), r.mergeSameTags(a, null, !0), e.parentNode.replaceChild(a, e), {
                                        ancestor: a,
                                        endContainer: s
                                    }
                                },
                                _nodeChange_endLine: function(e, t, n, i, l, o, s, a, c, d) {
                                    let u = i.parentNode;
                                    for (; !(u.nextSibling || u.previousSibling || r.isFormatElement(u.parentNode) || r.isWysiwygDiv(u.parentNode)) && u.nodeName !== t.nodeName;) u = u.parentNode;
                                    if (!s && u.nodeName === t.nodeName && !r.isFormatElement(u) && !u.previousSibling && r.onlyZeroWidthSpace(i.textContent.slice(l))) {
                                        let n = !0,
                                            o = i.nextSibling;
                                        for (; o;) {
                                            if (!r.onlyZeroWidthSpace(o)) {
                                                n = !1;
                                                break
                                            }
                                            o = o.nextSibling
                                        }
                                        if (n) return r.copyTagAttributes(u, t), {
                                            ancestor: e,
                                            container: i,
                                            offset: l
                                        }
                                    }
                                    a.v = !1;
                                    const h = e,
                                        g = [t],
                                        p = e.cloneNode(!1);
                                    let m, f, _, b, v = i,
                                        y = l,
                                        C = !1;
                                    if (function e(i, l) {
                                            const o = i.childNodes;
                                            for (let i, s = o.length - 1; 0 <= s; s--) {
                                                const a = o[s];
                                                if (!a) continue;
                                                let u = l;
                                                if (C && !r.isBreak(a)) {
                                                    if (1 === a.nodeType) {
                                                        if (r._isIgnoreNodeChange(a)) {
                                                            t = t.cloneNode(!1);
                                                            const e = a.cloneNode(!0);
                                                            p.insertBefore(e, l), p.insertBefore(t, e), g.push(t)
                                                        } else e(a, a);
                                                        continue
                                                    }
                                                    f = a, m = [];
                                                    const o = [];
                                                    for (; null !== f.parentNode && f !== h && f !== t;) i = n(f), i && 1 === f.nodeType && (d(f) ? b || o.push(i) : m.push(i)), f = f.parentNode;
                                                    m = m.concat(o);
                                                    const s = m.length > 0,
                                                        u = m.pop() || a;
                                                    for (_ = f = u; m.length > 0;) f = m.pop(), _.appendChild(f), _ = f;
                                                    if (d(t.parentNode) && !d(u) && (t = t.cloneNode(!1), p.insertBefore(t, p.firstChild), g.push(t)), !b && d(u)) {
                                                        t = t.cloneNode(!1);
                                                        const e = u.childNodes;
                                                        for (let n = 0, i = e.length; n < i; n++) t.appendChild(e[n]);
                                                        u.appendChild(t), p.insertBefore(u, p.firstChild), g.push(t), l = t.children.length > 0 ? f : t
                                                    } else s ? (t.insertBefore(u, t.firstChild), l = f) : l = t;
                                                    if (b && 3 === a.nodeType)
                                                        if (c(a)) {
                                                            const e = r.getParentElement(l, function(e) {
                                                                return this._isMaintainedNode(e.parentNode) || e.parentNode === p
                                                            }.bind(r));
                                                            b.appendChild(e), t = e.cloneNode(!1), g.push(t), p.insertBefore(t, p.firstChild)
                                                        } else b = null
                                                }
                                                if (C || a !== v) i = C ? n(a) : a.cloneNode(!1), i && (l.insertBefore(i, l.firstChild), 1 !== a.nodeType || r.isBreak(a) || (u = i)), e(a, u);
                                                else {
                                                    b = c(a);
                                                    const e = r.createTextNode(1 === v.nodeType ? "" : v.substringData(y, v.length - y)),
                                                        o = r.createTextNode(1 === v.nodeType ? "" : v.substringData(0, y));
                                                    if (b) {
                                                        b = b.cloneNode(!1);
                                                        const e = c(l);
                                                        if (e && e.parentNode !== p) {
                                                            let t = e,
                                                                n = null;
                                                            for (; t.parentNode !== p;) {
                                                                for (l = n = t.parentNode.cloneNode(!1); t.childNodes[0];) n.appendChild(t.childNodes[0]);
                                                                t.appendChild(n), t = t.parentNode
                                                            }
                                                            t.parentNode.insertBefore(e, t.parentNode.firstChild)
                                                        }
                                                        b = b.cloneNode(!1)
                                                    } else d(t.parentNode) && !b && (t = t.cloneNode(!1), p.appendChild(t), g.push(t));
                                                    for (r.onlyZeroWidthSpace(e) || l.insertBefore(e, l.firstChild), f = l, m = []; f !== p && null !== f;) i = d(f) ? null : n(f), i && 1 === f.nodeType && m.push(i), f = f.parentNode;
                                                    const s = m.pop() || l;
                                                    for (_ = f = s; m.length > 0;) f = m.pop(), _.appendChild(f), _ = f;
                                                    s !== l ? (t.insertBefore(s, t.firstChild), l = f) : l = t, r.isBreak(a) && t.appendChild(a.cloneNode(!1)), b ? (b.insertBefore(t, b.firstChild), p.insertBefore(b, p.firstChild), b = null) : p.insertBefore(t, p.firstChild), v = o, y = o.data.length, C = !0, l.insertBefore(v, l.firstChild)
                                                }
                                            }
                                        }(e, p), s && !o && !a.v) return {
                                        ancestor: e,
                                        container: i,
                                        offset: l
                                    };
                                    if (o = o && s)
                                        for (let e = 0; e < g.length; e++) {
                                            let t = g[e];
                                            const n = t.childNodes;
                                            let i = null;
                                            for (; n[0];) i = n[0], p.insertBefore(i, t);
                                            r.removeItem(t), e === g.length - 1 && (v = i, y = i.textContent.length)
                                        } else if (s)
                                            for (let e = 0; e < g.length; e++) this._stripRemoveNode(g[e]);
                                    if (o || 0 !== p.childNodes.length) {
                                        if (!s && 0 === t.textContent.length) return r.removeEmptyNode(p, null), {
                                            ancestor: null,
                                            container: null,
                                            offset: 0
                                        };
                                        r.removeEmptyNode(p, t), r.onlyZeroWidthSpace(p.textContent) ? (v = p.firstChild, y = v.textContent.length) : r.onlyZeroWidthSpace(v) && (v = t, y = 1);
                                        const n = {
                                                s: 0,
                                                e: 0
                                            },
                                            i = r.getNodePath(v, p, n);
                                        y += n.s;
                                        const l = r.mergeSameTags(p, [i], !0);
                                        e.parentNode.replaceChild(p, e), v = r.getNodeFromPath(i, p), y += l[0]
                                    } else e.childNodes ? v = e.childNodes[0] : (v = r.createTextNode(r.zeroWidthSpace), e.appendChild(v));
                                    return {
                                        ancestor: p,
                                        container: v,
                                        offset: y
                                    }
                                },
                                actionCall: function(t, n, i) {
                                    if (n) {
                                        if (/more/i.test(n) && i !== this._moreLayerActiveButton) {
                                            const n = e.element.toolbar.querySelector("." + t);
                                            return void(n && (this._moreLayerActiveButton && (e.element.toolbar.querySelector("." + this._moreLayerActiveButton.getAttribute("data-command")).style.display = "none", r.removeClass(this._moreLayerActiveButton, "on")), r.addClass(i, "on"), this._moreLayerActiveButton = i, n.style.display = "block", u._showToolbarBalloon(), u._showToolbarInline()))
                                        }
                                        if (/submenu/.test(n) && (null === this._menuTray[t] || i !== this.submenuActiveButton)) return void this.callPlugin(t, this.submenuOn.bind(this, i), i);
                                        if (/dialog/.test(n)) return void this.callPlugin(t, this.plugins[t].open.bind(this), i);
                                        if (/command/.test(n)) this.callPlugin(t, this.plugins[t].action.bind(this), i);
                                        else {
                                            if (/container/.test(n) && (null === this._menuTray[t] || i !== this.containerActiveButton)) return void this.callPlugin(t, this.containerOn.bind(this, i), i);
                                            /fileBrowser/.test(n) && this.callPlugin(t, this.plugins[t].open.bind(this, null), i)
                                        }
                                    } else t && this.commandHandler(i, t);
                                    if (/more/i.test(n)) {
                                        const t = e.element.toolbar.querySelector("." + this._moreLayerActiveButton.getAttribute("data-command"));
                                        t && (r.removeClass(this._moreLayerActiveButton, "on"), this._moreLayerActiveButton = null, t.style.display = "none", u._showToolbarBalloon(), u._showToolbarInline())
                                    } else /submenu/.test(n) ? this.submenuOff() : (this.submenuOff(), this.containerOff())
                                },
                                commandHandler: function(t, n) {
                                    switch (n) {
                                        case "selectAll":
                                            const i = e.element.wysiwyg,
                                                o = r.getChildElement(i.firstChild, (function(e) {
                                                    return 0 === e.childNodes.length || 3 === e.nodeType
                                                }), !1) || i.firstChild,
                                                s = r.getChildElement(i.lastChild, (function(e) {
                                                    return 0 === e.childNodes.length || 3 === e.nodeType
                                                }), !0) || i.lastChild;
                                            if (!o || !s) return;
                                            this.setRange(o, 0, s, s.textContent.length);
                                            break;
                                        case "codeView":
                                            this.toggleCodeView();
                                            break;
                                        case "fullScreen":
                                            this.toggleFullScreen(t);
                                            break;
                                        case "indent":
                                        case "outdent":
                                            this.indent(n);
                                            break;
                                        case "undo":
                                            this.history.undo();
                                            break;
                                        case "redo":
                                            this.history.redo();
                                            break;
                                        case "removeFormat":
                                            this.removeFormat(), this.focus();
                                            break;
                                        case "print":
                                            this.print();
                                            break;
                                        case "preview":
                                            this.preview();
                                            break;
                                        case "showBlocks":
                                            this.toggleDisplayBlocks();
                                            break;
                                        case "save":
                                            if ("function" == typeof l.callBackSave) l.callBackSave(this.getContents(!1));
                                            else {
                                                if ("function" != typeof h.save) throw Error("[SUNEDITOR.core.commandHandler.fail] Please register call back function in creation option. (callBackSave : Function)");
                                                h.save()
                                            }
                                            e.tool.save && e.tool.save.setAttribute("disabled", !0);
                                            break;
                                        default:
                                            n = this._defaultCommand[n.toLowerCase()] || n, this.commandMap[n] || (this.commandMap[n] = t);
                                            const a = this._variable.currentNodesMap,
                                                c = a.indexOf(n) > -1 ? null : r.createElement(n);
                                            let d = n;
                                            /^SUB$/i.test(n) && a.indexOf("SUP") > -1 ? d = "SUP" : /^SUP$/i.test(n) && a.indexOf("SUB") > -1 && (d = "SUB"), this.nodeChange(c, null, [d], !1), this.focus()
                                    }
                                },
                                removeFormat: function() {
                                    this.nodeChange(null, null, null, null)
                                },
                                indent: function(e) {
                                    const t = this.getRange(),
                                        n = this.getSelectedElements(null),
                                        i = [],
                                        l = "indent" !== e;
                                    let o = t.startContainer,
                                        s = t.endContainer,
                                        a = t.startOffset,
                                        c = t.endOffset;
                                    for (let e, t, o = 0, s = n.length; o < s; o++) e = n[o], r.isListCell(e) && this.plugins.list ? (l || e.previousElementSibling) && i.push(e) : (t = /\d+/.test(e.style.marginLeft) ? r.getNumber(e.style.marginLeft, 0) : 0, l ? t -= 25 : t += 25, r.setStyle(e, "marginLeft", t <= 0 ? "" : t + "px"));
                                    i.length > 0 && this.plugins.list.editInsideList.call(this, l, i), this.effectNode = null, this.setRange(o, a, s, c), this.history.push(!1)
                                },
                                toggleDisplayBlocks: function() {
                                    const t = e.element.wysiwyg;
                                    r.toggleClass(t, "se-show-block"), r.hasClass(t, "se-show-block") ? r.addClass(this._styleCommandMap.showBlocks, "active") : r.removeClass(this._styleCommandMap.showBlocks, "active"), this._resourcesStateChange()
                                },
                                toggleCodeView: function() {
                                    const t = this._variable.isCodeView;
                                    this.controllersOff(), r.setDisabledButtons(!t, this.codeViewDisabledButtons), t ? (this._setCodeDataToEditor(), e.element.wysiwygFrame.scrollTop = 0, e.element.code.style.display = "none", e.element.wysiwygFrame.style.display = "block", this._variable._codeOriginCssText = this._variable._codeOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: none"), this._variable._wysiwygOriginCssText = this._variable._wysiwygOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: block"), "auto" !== l.height || l.codeMirrorEditor || (e.element.code.style.height = "0px"), this._variable.isCodeView = !1, this._variable.isFullScreen || (this._notHideToolbar = !1, /balloon|balloon-always/i.test(l.mode) && (e.element._arrow.style.display = "", this._isInline = !1, this._isBalloon = !0, u._hideToolbar())), this.nativeFocus(), r.removeClass(this._styleCommandMap.codeView, "active"), this.history.push(!1)) : (this._setEditorDataToCodeView(), this._variable._codeOriginCssText = this._variable._codeOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: block"), this._variable._wysiwygOriginCssText = this._variable._wysiwygOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: none"), "auto" !== l.height || l.codeMirrorEditor || (e.element.code.style.height = e.element.code.scrollHeight > 0 ? e.element.code.scrollHeight + "px" : "auto"), l.codeMirrorEditor && l.codeMirrorEditor.refresh(), this._variable.isCodeView = !0, this._variable.isFullScreen || (this._notHideToolbar = !0, this._isBalloon && (e.element._arrow.style.display = "none", e.element.toolbar.style.left = "", this._isInline = !0, this._isBalloon = !1, u._showToolbarInline())), this._variable._range = null, e.element.code.focus(), r.addClass(this._styleCommandMap.codeView, "active")), this._checkPlaceholder(), "function" == typeof h.toggleCodeView && h.toggleCodeView(this._variable.isCodeView, this)
                                },
                                _setCodeDataToEditor: function() {
                                    const t = this._getCodeView();
                                    if (l.fullPage) {
                                        const e = this._parser.parseFromString(t, "text/html"),
                                            n = e.head.children;
                                        for (let t = 0, i = n.length; t < i; t++) /script/i.test(n[t].tagName) && (e.head.removeChild(n[t]), t--, i--);
                                        this._wd.head.innerHTML = e.head.innerHTML, this._wd.body.innerHTML = this.convertContentsForEditor(e.body.innerHTML);
                                        const i = e.body.attributes;
                                        for (let e = 0, t = i.length; e < t; e++) "contenteditable" !== i[e].name && this._wd.body.setAttribute(i[e].name, i[e].value);
                                        r.hasClass(this._wd.body, "sun-editor-editable") || r.addClass(this._wd.body, "sun-editor-editable")
                                    } else e.element.wysiwyg.innerHTML = t.length > 0 ? this.convertContentsForEditor(t) : "<p><br></p>"
                                },
                                _setEditorDataToCodeView: function() {
                                    const t = this.convertHTMLForCodeView(e.element.wysiwyg);
                                    let n = "";
                                    if (l.fullPage) {
                                        const e = r.getAttributesToString(this._wd.body, null);
                                        n = "<!DOCTYPE html>\n<html>\n" + this._wd.head.outerHTML.replace(/>(?!\n)/g, ">\n") + "<body " + e + ">\n" + t + "</body>\n</html>"
                                    } else n = t;
                                    e.element.code.style.display = "block", e.element.wysiwygFrame.style.display = "none", this._setCodeView(n)
                                },
                                toggleFullScreen: function(t) {
                                    const n = e.element.topArea,
                                        i = e.element.toolbar,
                                        o = e.element.editorArea,
                                        d = e.element.wysiwygFrame,
                                        g = e.element.code,
                                        p = this._variable;
                                    this.controllersOff(), p.isFullScreen ? (p.isFullScreen = !1, d.style.cssText = p._wysiwygOriginCssText, g.style.cssText = p._codeOriginCssText, i.style.cssText = "", o.style.cssText = p._editorAreaOriginCssText, n.style.cssText = p._originCssText, s.body.style.overflow = p._bodyOverflow, l.toolbarContainer && l.toolbarContainer.appendChild(i), l.stickyToolbar > -1 && r.removeClass(i, "se-toolbar-sticky"), p._fullScreenAttrs.sticky && !l.toolbarContainer && (p._fullScreenAttrs.sticky = !1, e.element._stickyDummy.style.display = "block", r.addClass(i, "se-toolbar-sticky")), this._isInline = p._fullScreenAttrs.inline, this._isBalloon = p._fullScreenAttrs.balloon, this._isInline && u._showToolbarInline(), l.toolbarContainer && r.removeClass(i, "se-toolbar-balloon"), u.onScroll_window(), r.changeElement(t.firstElementChild, c.expansion), r.removeClass(this._styleCommandMap.fullScreen, "active")) : (p.isFullScreen = !0, p._fullScreenAttrs.inline = this._isInline, p._fullScreenAttrs.balloon = this._isBalloon, (this._isInline || this._isBalloon) && (this._isInline = !1, this._isBalloon = !1), l.toolbarContainer && e.element.relative.insertBefore(i, o), n.style.position = "fixed", n.style.top = "0", n.style.left = "0", n.style.width = "100%", n.style.maxWidth = "100%", n.style.height = "100%", n.style.zIndex = "2147483647", "" !== e.element._stickyDummy.style.display && (p._fullScreenAttrs.sticky = !0, e.element._stickyDummy.style.display = "none", r.removeClass(i, "se-toolbar-sticky")), p._bodyOverflow = s.body.style.overflow, s.body.style.overflow = "hidden", p._editorAreaOriginCssText = o.style.cssText, p._wysiwygOriginCssText = d.style.cssText, p._codeOriginCssText = g.style.cssText, o.style.cssText = i.style.cssText = "", d.style.cssText = (d.style.cssText.match(/\s?display(\s+)?:(\s+)?[a-zA-Z]+;/) || [""])[0], g.style.cssText = (g.style.cssText.match(/\s?display(\s+)?:(\s+)?[a-zA-Z]+;/) || [""])[0], i.style.width = d.style.height = g.style.height = "100%", i.style.position = "relative", i.style.display = "block", p.innerHeight_fullScreen = a.innerHeight - i.offsetHeight, o.style.height = p.innerHeight_fullScreen + "px", r.changeElement(t.firstElementChild, c.reduction), l.iframe && "auto" === l.height && (o.style.overflow = "auto", this._iframeAutoHeight()), r.addClass(this._styleCommandMap.fullScreen, "active")), "function" == typeof h.toggleFullScreen && h.toggleFullScreen(this._variable.isFullScreen, this)
                                },
                                print: function() {
                                    const e = r.createElement("IFRAME");
                                    e.style.display = "none", s.body.appendChild(e);
                                    const t = r.getIframeDocument(e),
                                        n = this.getContents(!0),
                                        i = this._wd;
                                    if (l.iframe) {
                                        const e = l.fullPage ? r.getAttributesToString(i.body, ["contenteditable"]) : 'class="sun-editor-editable"';
                                        t.write("<!DOCTYPE html><html><head>" + i.head.innerHTML + "</head><body " + e + ">" + n + "</body></html>")
                                    } else {
                                        const e = s.head.getElementsByTagName("link"),
                                            i = s.head.getElementsByTagName("style");
                                        let l = "";
                                        for (let t = 0, n = e.length; t < n; t++) l += e[t].outerHTML;
                                        for (let e = 0, t = i.length; e < t; e++) l += i[e].outerHTML;
                                        t.write("<!DOCTYPE html><html><head>" + l + '</head><body class="sun-editor-editable">' + n + "</body></html>")
                                    }
                                    this.showLoading(), a.setTimeout((function() {
                                        try {
                                            if (e.focus(), r.isIE_Edge || s.documentMode || a.StyleMedia) try {
                                                e.contentWindow.document.execCommand("print", !1, null)
                                            } catch (t) {
                                                e.contentWindow.print()
                                            } else e.contentWindow.print()
                                        } catch (e) {
                                            throw Error("[SUNEDITOR.core.print.fail] error: " + e)
                                        } finally {
                                            d.closeLoading(), r.removeItem(e)
                                        }
                                    }), 1e3)
                                },
                                preview: function() {
                                    d.submenuOff(), d.containerOff(), d.controllersOff();
                                    const t = this.getContents(!0),
                                        n = a.open("", "_blank");
                                    n.mimeType = "text/html";
                                    const o = e.element.wysiwygFrame.offsetWidth + "px !important",
                                        c = this._wd;
                                    if (l.iframe) {
                                        const e = l.fullPage ? r.getAttributesToString(c.body, ["contenteditable"]) : 'class="sun-editor-editable"';
                                        n.document.write("<!DOCTYPE html><html><head>" + c.head.innerHTML + "<style>body {overflow:auto !important; width:" + o + "; border:1px solid #ccc; margin: 10px auto !important; height:auto !important;}</style></head><body " + e + ">" + t + "</body></html>")
                                    } else {
                                        const e = s.head.getElementsByTagName("link"),
                                            l = s.head.getElementsByTagName("style");
                                        let a = "";
                                        for (let t = 0, n = e.length; t < n; t++) a += e[t].outerHTML;
                                        for (let e = 0, t = l.length; e < t; e++) a += l[e].outerHTML;
                                        n.document.write('<!DOCTYPE html><html><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1"><title>' + i.toolbar.preview + "</title>" + a + '</head><body class="sun-editor-editable" style="width:' + o + '; border:1px solid #ccc; margin:10px auto !important; height:auto !important;">' + t + "</body></html>")
                                    }
                                },
                                setContents: function(t) {
                                    const n = this.convertContentsForEditor(t);
                                    if (this._resetComponents(), this._variable.isCodeView) {
                                        const e = this.convertHTMLForCodeView(n);
                                        this._setCodeView(e)
                                    } else e.element.wysiwyg.innerHTML = n, this.history.push(!1)
                                },
                                getContents: function(t) {
                                    const n = e.element.wysiwyg.innerHTML,
                                        i = r.createElement("DIV");
                                    i.innerHTML = n;
                                    const o = r.getListChildren(i, (function(e) {
                                        return /FIGCAPTION/i.test(e.nodeName)
                                    }));
                                    for (let e = 0, t = o.length; e < t; e++) o[e].removeAttribute("contenteditable");
                                    if (l.fullPage && !t) {
                                        const e = r.getAttributesToString(this._wd.body, ["contenteditable"]);
                                        return "<!DOCTYPE html><html>" + this._wd.head.outerHTML + "<body " + e + ">" + i.innerHTML + "</body></html>"
                                    }
                                    return i.innerHTML
                                },
                                _makeLine: function(e, t) {
                                    if (1 === e.nodeType) return r._disallowedTags(e) ? "" : !t || r.isFormatElement(e) || r.isRangeFormatElement(e) || r.isComponent(e) || r.isMedia(e) || r.isAnchor(e) && r.isMedia(e.firstElementChild) ? e.outerHTML : "<p>" + e.outerHTML + "</p>";
                                    if (3 === e.nodeType) {
                                        if (!t) return e.textContent;
                                        const n = e.textContent.split(/\n/g);
                                        let i = "";
                                        for (let e, t = 0, l = n.length; t < l; t++) e = n[t].trim(), e.length > 0 && (i += "<p>" + e + "</p>");
                                        return i
                                    }
                                    return 8 === e.nodeType && this._allowHTMLComments ? "\x3c!--" + e.textContent.trim() + "--\x3e" : ""
                                },
                                _tagConvertor: function(e) {
                                    if (!this._disallowedTextTagsRegExp) return e;
                                    const t = {
                                        b: "strong",
                                        i: "em",
                                        ins: "u",
                                        strike: "del",
                                        s: "del"
                                    };
                                    return e.replace(this._disallowedTextTagsRegExp, (function(e, n, i) {
                                        return n + ("string" == typeof t[i] ? t[i] : i)
                                    }))
                                },
                                _deleteDisallowedTags: function(e) {
                                    return e.replace(/\n/g, "").replace(/<(script|style).*>(\n|.)*<\/(script|style)>/gi, "").replace(/<[a-z0-9]+\:[a-z0-9]+[^>^\/]*>[^>]*<\/[a-z0-9]+\:[a-z0-9]+>/gi, "").replace(this.editorTagsWhitelistRegExp, "")
                                },
                                cleanHTML: function(e, t) {
                                    e = this._deleteDisallowedTags(e).replace(/(<[a-zA-Z0-9]+)[^>]*(?=>)/g, function(e, t) {
                                        if (/^<[a-z0-9]+\:[a-z0-9]+/i.test(e)) return e;
                                        let n = null;
                                        const i = this._attributesTagsWhitelist[t.match(/(?!<)[a-zA-Z0-9]+/)[0].toLowerCase()];
                                        if (n = i ? e.match(i) : e.match(this._attributesWhitelistRegExp), /<span/i.test(t) && (!n || !/style=/i.test(n.toString()))) {
                                            const t = e.match(/style\s*=\s*"[^"]*"/);
                                            t && (n || (n = []), n.push(t[0]))
                                        }
                                        if (n)
                                            for (let e = 0, i = n.length; e < i; e++) /^class="(?!(__se__|se-|katex))/.test(n[e]) || (t += " " + n[e]);
                                        return t
                                    }.bind(this));
                                    const n = s.createRange().createContextualFragment(e);
                                    try {
                                        r._consistencyCheckOfHTML(n, this._htmlCheckWhitelistRegExp)
                                    } catch (e) {
                                        console.warn("[SUNEDITOR.cleanHTML.consistencyCheck.fail] " + e)
                                    }
                                    if (this.managedTagsInfo && this.managedTagsInfo.query) {
                                        const e = n.querySelectorAll(this.managedTagsInfo.query);
                                        for (let t, n, i = 0, l = e.length; i < l; i++) {
                                            n = [].slice.call(e[i].classList);
                                            for (let l = 0, o = n.length; l < o; l++)
                                                if (t = this.managedTagsInfo.map[n[l]], t) {
                                                    t(e[i]);
                                                    break
                                                }
                                        }
                                    }
                                    const i = n.childNodes;
                                    let l = "",
                                        o = !1;
                                    for (let e, t = 0, n = i.length; t < n; t++)
                                        if (e = i[t], 1 === e.nodeType && !r.isTextStyleElement(e) && !r.isBreak(e) && !r._disallowedTags(e)) {
                                            o = !0;
                                            break
                                        } for (let e = 0, t = i.length; e < t; e++) l += this._makeLine(i[e], o);
                                    return l = r.htmlRemoveWhiteSpace(l), this._tagConvertor(l ? t ? l.replace("string" == typeof t ? r.createTagsWhitelist(t) : t, "") : l : e)
                                },
                                convertContentsForEditor: function(e) {
                                    const t = s.createRange().createContextualFragment(this._deleteDisallowedTags(e));
                                    try {
                                        r._consistencyCheckOfHTML(t, this._htmlCheckWhitelistRegExp)
                                    } catch (e) {
                                        console.warn("[SUNEDITOR.convertContentsForEditor.consistencyCheck.fail] " + e)
                                    }
                                    const n = t.childNodes;
                                    let i = "";
                                    for (let e = 0, t = n.length; e < t; e++) i += this._makeLine(n[e], !0);
                                    return 0 === i.length ? "<p><br></p>" : (i = r.htmlRemoveWhiteSpace(i), this._tagConvertor(i))
                                },
                                convertHTMLForCodeView: function(e) {
                                    let t = "";
                                    const n = a.RegExp,
                                        i = new n("^(BLOCKQUOTE|PRE|TABLE|THEAD|TBODY|TR|TH|TD|OL|UL|IMG|IFRAME|VIDEO|AUDIO|FIGURE|FIGCAPTION|HR|BR|CANVAS|SELECT)$", "i"),
                                        l = r.isFormatElement.bind(r),
                                        o = "string" == typeof e ? s.createRange().createContextualFragment(e) : e;
                                    let c = 1 * this._variable.codeIndent;
                                    return c = c > 0 ? new a.Array(c + 1).join(" ") : "",
                                        function e(o, s, a) {
                                            const d = o.childNodes,
                                                u = i.test(o.nodeName),
                                                h = u ? s : "";
                                            for (let g, p, m, f = 0, _ = d.length; f < _; f++) {
                                                if (g = d[f], m = i.test(g.nodeName), p = m ? "\n" : "", a = !l(g) || u || /^(TH|TD)$/i.test(o.nodeName) ? "" : "\n", 8 === g.nodeType) {
                                                    t += "\n\x3c!-- " + g.textContent.trim() + " --\x3e" + p;
                                                    continue
                                                }
                                                if (3 === g.nodeType) {
                                                    t += r._HTMLConvertor(/^\n+$/.test(g.data) ? "" : g.data);
                                                    continue
                                                }
                                                if (0 === g.childNodes.length) {
                                                    t += (/^HR$/i.test(g.nodeName) ? "\n" : "") + h + g.outerHTML + p;
                                                    continue
                                                }
                                                g.innerHTML = g.innerHTML;
                                                const _ = g.nodeName.toLowerCase();
                                                t += (a || (u ? "" : p)) + (h || m ? s : "") + g.outerHTML.match(n("<" + _ + "[^>]*>", "i"))[0] + p, e(g, s + c, ""), t += (m ? s : "") + "</" + _ + ">" + (a || p || u || /^(TH|TD)$/i.test(g.nodeName) ? "\n" : "")
                                            }
                                        }(o, "", "\n"), t.trim() + "\n"
                                },
                                addDocEvent: function(e, t, n) {
                                    s.addEventListener(e, t, n), l.iframe && this._wd.addEventListener(e, t)
                                },
                                removeDocEvent: function(e, t) {
                                    s.removeEventListener(e, t), l.iframe && this._wd.removeEventListener(e, t)
                                },
                                _charCount: function(e) {
                                    const t = l.maxCharCount,
                                        n = l.charCounterType;
                                    let i = 0;
                                    if (e && (i = this.getCharLength(e, n)), this._setCharCount(), t > 0) {
                                        let e = !1;
                                        const l = h.getCharCount(n);
                                        if (l > t) {
                                            if (e = !0, i > 0) {
                                                this._editorRange();
                                                const e = this.getRange(),
                                                    n = e.endOffset - 1,
                                                    i = this.getSelectionNode().textContent,
                                                    o = e.endOffset - (l - t);
                                                this.getSelectionNode().textContent = i.slice(0, o < 0 ? 0 : o) + i.slice(e.endOffset, i.length), this.setRange(e.endContainer, n, e.endContainer, n)
                                            }
                                        } else l + i > t && (e = !0);
                                        if (e && (this._callCounterBlink(), i > 0)) return !1
                                    }
                                    return !0
                                },
                                checkCharCount: function(e, t) {
                                    if (l.maxCharCount) {
                                        const n = t || l.charCounterType,
                                            i = this.getCharLength("string" == typeof e ? e : this._charTypeHTML ? e.outerHTML : e.textContent, n);
                                        if (i > 0 && i + h.getCharCount(n) > l.maxCharCount) return this._callCounterBlink(), !1
                                    }
                                    return !0
                                },
                                getCharLength: function(e, t) {
                                    return /byte/.test(t) ? r.getByteLength(e) : e.length
                                },
                                _setCharCount: function() {
                                    e.element.charCounter && a.setTimeout((function() {
                                        e.element.charCounter.textContent = h.getCharCount(l.charCounterType)
                                    }))
                                },
                                _callCounterBlink: function() {
                                    const t = e.element.charWrapper;
                                    t && !r.hasClass(t, "se-blink") && (r.addClass(t, "se-blink"), a.setTimeout((function() {
                                        r.removeClass(t, "se-blink")
                                    }), 600))
                                },
                                _checkComponents: function() {
                                    for (let e = 0, t = this._fileInfoPluginsCheck.length; e < t; e++) this._fileInfoPluginsCheck[e]()
                                },
                                _resetComponents: function() {
                                    for (let e = 0, t = this._fileInfoPluginsReset.length; e < t; e++) this._fileInfoPluginsReset[e]()
                                },
                                _setCodeView: function(t) {
                                    l.codeMirrorEditor ? l.codeMirrorEditor.getDoc().setValue(t) : e.element.code.value = t
                                },
                                _getCodeView: function() {
                                    return l.codeMirrorEditor ? l.codeMirrorEditor.getDoc().getValue() : e.element.code.value
                                },
                                _init: function(i, o) {
                                    const c = a.RegExp;
                                    if (this._ww = l.iframe ? e.element.wysiwygFrame.contentWindow : a, this._wd = s, this._charTypeHTML = "byte-html" === l.charCounterType, !l.iframe && "function" == typeof a.ShadowRoot) {
                                        let t = e.element.wysiwygFrame;
                                        for (; t;) {
                                            if (t.shadowRoot) {
                                                this._shadowRoot = t.shadowRoot;
                                                break
                                            }
                                            if (t instanceof a.ShadowRoot) {
                                                this._shadowRoot = t;
                                                break
                                            }
                                            t = t.parentNode
                                        }
                                    }
                                    const d = ["b", "i", "ins", "s", "strike"],
                                        u = l.addTagsWhitelist ? l.addTagsWhitelist.split("|").filter((function(e) {
                                            return /b|i|ins|s|strike/i.test(e)
                                        })) : [];
                                    for (let e = 0; e < u.length; e++) d.splice(d.indexOf(u[e].toLowerCase()), 1);
                                    this._disallowedTextTagsRegExp = 0 === d.length ? null : new c("(<\\/?)(" + d.join("|") + ")\\b\\s*(?:[^>^<]+)?\\s*(?=>)", "gi");
                                    const h = "contenteditable|colspan|rowspan|target|href|src|class|type|controls|data-format|data-size|data-file-size|data-file-name|data-origin|data-align|data-image-link|data-rotate|data-proportion|data-percentage|origin-size|data-exp|data-font-size";
                                    this._allowHTMLComments = l._editorTagsWhitelist.indexOf("//") > -1, this._htmlCheckWhitelistRegExp = new c("^(" + l._editorTagsWhitelist.replace("|//", "") + ")$", "i"), this.editorTagsWhitelistRegExp = r.createTagsWhitelist(l._editorTagsWhitelist.replace("|//", "|\x3c!--|--\x3e")), this.pasteTagsWhitelistRegExp = r.createTagsWhitelist(l.pasteTagsWhitelist);
                                    const g = l.attributesWhitelist,
                                        p = {};
                                    let m = "";
                                    if (g)
                                        for (let e in g) r.hasOwn(g, e) && ("all" === e ? m = g[e] + "|" : p[e] = new c("((?:" + g[e] + "|" + h + ')s*=s*"[^"]*")', "ig"));
                                    this._attributesWhitelistRegExp = new c("((?:" + m + h + ')s*=s*"[^"]*")', "ig"), this._attributesTagsWhitelist = p, this._isInline = /inline/i.test(l.mode), this._isBalloon = /balloon|balloon-always/i.test(l.mode), this._isBalloonAlways = /balloon-always/i.test(l.mode), this._cachingButtons(), this._fileInfoPluginsCheck = [], this._fileInfoPluginsReset = [], this.managedTagsInfo = {
                                        query: "",
                                        map: {}
                                    };
                                    const f = [];
                                    this.activePlugins = [], this._fileManager.tags = [], this._fileManager.pluginMap = {};
                                    let _, b, v = [];
                                    for (let e in n)
                                        if (r.hasOwn(n, e)) {
                                            if (_ = n[e], b = t[e], _.active && b && this.callPlugin(e, null, b), "function" == typeof _.checkFileInfo && "function" == typeof _.resetFileInfo && (this.callPlugin(e, null, b), this._fileInfoPluginsCheck.push(_.checkFileInfo.bind(this)), this._fileInfoPluginsReset.push(_.resetFileInfo.bind(this))), a.Array.isArray(_.fileTags)) {
                                                const t = _.fileTags;
                                                this.callPlugin(e, null, b), this._fileManager.tags = this._fileManager.tags.concat(t), v.push(e);
                                                for (let n = 0, i = t.length; n < i; n++) this._fileManager.pluginMap[t[n].toLowerCase()] = e
                                            }
                                            if (_.managedTags) {
                                                const e = _.managedTags();
                                                f.push("." + e.className), this.managedTagsInfo.map[e.className] = e.method.bind(this)
                                            }
                                        } this.managedTagsInfo.query = f.toString(), this._fileManager.queryString = this._fileManager.tags.join(","), this._fileManager.regExp = new c("^(" + this._fileManager.tags.join("|") + ")$", "i"), this._fileManager.pluginRegExp = new c("^(" + (0 === v.length ? "undefined" : v.join("|")) + ")$", "i"), this._variable._originCssText = e.element.topArea.style.cssText, this._placeholder = e.element.placeholder, this._lineBreaker = e.element.lineBreaker, this._lineBreakerButton = this._lineBreaker.querySelector("button"), this.history = function(e, t) {
                                        const n = e._w,
                                            i = e.util,
                                            l = e.context.options.historyStackDelayTime;
                                        let o = e.context.element,
                                            s = e.context.tool.undo,
                                            a = e.context.tool.redo,
                                            r = null,
                                            c = 0,
                                            d = [];

                                        function u() {
                                            const n = d[c];
                                            o.wysiwyg.innerHTML = n.contents, e.setRange(i.getNodeFromPath(n.s.path, o.wysiwyg), n.s.offset, i.getNodeFromPath(n.e.path, o.wysiwyg), n.e.offset), e.focus(), 0 === c ? (s && s.setAttribute("disabled", !0), a && a.removeAttribute("disabled")) : c === d.length - 1 ? (s && s.removeAttribute("disabled"), a && a.setAttribute("disabled", !0)) : (s && s.removeAttribute("disabled"), a && a.removeAttribute("disabled")), e.controllersOff(), e._checkComponents(), e._setCharCount(), e._resourcesStateChange(), t()
                                        }

                                        function h() {
                                            e._checkComponents();
                                            const n = e.getContents(!0);
                                            if (d[c] && n === d[c].contents) return;
                                            c++;
                                            const l = e._variable._range;
                                            d.length > c && (d = d.slice(0, c), a && a.setAttribute("disabled", !0)), d[c] = l ? {
                                                contents: n,
                                                s: {
                                                    path: i.getNodePath(l.startContainer, null, null),
                                                    offset: l.startOffset
                                                },
                                                e: {
                                                    path: i.getNodePath(l.endContainer, null, null),
                                                    offset: l.endOffset
                                                }
                                            } : {
                                                contents: n,
                                                s: {
                                                    path: [0, 0],
                                                    offset: [0, 0]
                                                },
                                                e: {
                                                    path: 0,
                                                    offset: 0
                                                }
                                            }, 1 === c && s && s.removeAttribute("disabled"), e._setCharCount(), t()
                                        }
                                        return {
                                            stack: d,
                                            push: function(t) {
                                                n.setTimeout(e._resourcesStateChange.bind(e));
                                                const i = "number" == typeof t ? t > 0 ? t : 0 : t ? l : 0;
                                                i && !r || (n.clearTimeout(r), i) ? r = n.setTimeout((function() {
                                                    n.clearTimeout(r), r = null, h()
                                                }), i) : h()
                                            },
                                            undo: function() {
                                                c > 0 && (c--, u())
                                            },
                                            redo: function() {
                                                d.length - 1 > c && (c++, u())
                                            },
                                            go: function(e) {
                                                c = e < 0 ? d.length - 1 : e, u()
                                            },
                                            reset: function(n) {
                                                s && s.setAttribute("disabled", !0), a && a.setAttribute("disabled", !0), e.context.tool.save && e.context.tool.save.setAttribute("disabled", !0), d.splice(0), c = 0, d[c] = {
                                                    contents: e.getContents(!0),
                                                    s: {
                                                        path: [0, 0],
                                                        offset: 0
                                                    },
                                                    e: {
                                                        path: [0, 0],
                                                        offset: 0
                                                    }
                                                }, n || t()
                                            },
                                            _resetCachingButton: function() {
                                                o = e.context.element, s = e.context.tool.undo, a = e.context.tool.redo, 0 === c ? (s && s.setAttribute("disabled", !0), a && c === d.length - 1 && a.setAttribute("disabled", !0), e.context.tool.save && e.context.tool.save.setAttribute("disabled", !0)) : c === d.length - 1 && a && a.setAttribute("disabled", !0)
                                            },
                                            _destroy: function() {
                                                r && n.clearTimeout(r), d = null
                                            }
                                        }
                                    }(this, this._onChange_historyStack.bind(this)), this.addModule([B]), l.iframe && (this._wd = e.element.wysiwygFrame.contentDocument, e.element.wysiwyg = this._wd.body, l._editorStyles.editor && (e.element.wysiwyg.style.cssText = l._editorStyles.editor), "auto" === l.height && (this._iframeAuto = this._wd.body)), this._initWysiwygArea(i, o)
                                },
                                _cachingButtons: function() {
                                    this.codeViewDisabledButtons = e.element.toolbar.querySelectorAll('.se-toolbar button:not([class~="se-code-view-enabled"])'), this.resizingDisabledButtons = e.element.toolbar.querySelectorAll('.se-toolbar button:not([class~="se-resizing-enabled"])');
                                    const t = e.tool;
                                    this.commandMap = {
                                        STRONG: t.bold,
                                        U: t.underline,
                                        EM: t.italic,
                                        DEL: t.strike,
                                        SUB: t.subscript,
                                        SUP: t.superscript,
                                        OUTDENT: t.outdent,
                                        INDENT: t.indent
                                    }, this._styleCommandMap = {
                                        fullScreen: t.fullScreen,
                                        showBlocks: t.showBlocks,
                                        codeView: t.codeView
                                    }
                                },
                                _initWysiwygArea: function(t, n) {
                                    e.element.wysiwyg.innerHTML = t ? n : this.convertContentsForEditor("string" == typeof n ? n : e.element.originElement.value)
                                },
                                _resourcesStateChange: function() {
                                    this._iframeAutoHeight(), this._checkPlaceholder()
                                },
                                _onChange_historyStack: function() {
                                    u._applyTagEffects(), e.tool.save && e.tool.save.removeAttribute("disabled"), h.onChange && h.onChange(this.getContents(!0), this)
                                },
                                _iframeAutoHeight: function() {
                                    this._iframeAuto && a.setTimeout((function() {
                                        e.element.wysiwygFrame.style.height = d._iframeAuto.offsetHeight + "px"
                                    }))
                                },
                                _checkPlaceholder: function() {
                                    if (this._placeholder) {
                                        if (this._variable.isCodeView) return void(this._placeholder.style.display = "none");
                                        const t = e.element.wysiwyg;
                                        !r.onlyZeroWidthSpace(t.textContent) || t.querySelector(".se-component, pre, blockquote, hr, li, table, img, iframe, video") || (t.innerText.match(/\n/g) || "").length > 1 ? this._placeholder.style.display = "none" : this._placeholder.style.display = "block"
                                    }
                                },
                                _setDefaultFormat: function(e) {
                                    if (this._fileManager.pluginRegExp.test(this.currentControllerName)) return;
                                    const t = this.getRange(),
                                        n = t.commonAncestorContainer,
                                        i = t.startContainer,
                                        l = r.getRangeFormatElement(n, null);
                                    let o, s, a;
                                    const c = r.getParentElement(n, r.isComponent);
                                    if ((!c || r.isTable(c)) && (!r.isRangeFormatElement(i) && !r.isWysiwygDiv(i) || !r.isComponent(i.childNodes[t.startOffset]))) {
                                        if (l) return a = r.createElement(e || "P"), a.innerHTML = l.innerHTML, 0 === a.childNodes.length && (a.innerHTML = r.zeroWidthSpace), l.innerHTML = a.outerHTML, a = l.firstChild, o = r.getEdgeChildNodes(a, null).sc, o || (o = r.createTextNode(r.zeroWidthSpace), a.insertBefore(o, a.firstChild)), s = o.textContent.length, void this.setRange(o, s, o, s);
                                        if (r.isRangeFormatElement(n) && n.childNodes.length <= 1) {
                                            let e = null;
                                            return 1 === n.childNodes.length && r.isBreak(n.firstChild) ? e = n.firstChild : (e = r.createTextNode(r.zeroWidthSpace), n.appendChild(e)), void this.setRange(e, 1, e, 1)
                                        }
                                        if (this.execCommand("formatBlock", !1, e || "P"), o = r.getEdgeChildNodes(n, n), o = o ? o.ec : n, a = r.getFormatElement(o, null), !a) return this.removeRange(), void this._editorRange();
                                        if (r.isBreak(a.nextSibling) && r.removeItem(a.nextSibling), r.isBreak(a.previousSibling) && r.removeItem(a.previousSibling), r.isBreak(o)) {
                                            const e = r.createTextNode(r.zeroWidthSpace);
                                            o.parentNode.insertBefore(e, o), o = e
                                        }
                                        this.effectNode = null, this.nativeFocus()
                                    }
                                },
                                _setOptionsInit: function(t, n) {
                                    this.context = e = k(t.originElement, this._getConstructed(t), l), this._componentsInfoReset = !0, this._editorInit(!0, n)
                                },
                                _editorInit: function(t, n) {
                                    this._init(t, n), u._addEvent(), this._setCharCount(), u._offStickyToolbar(), u.onResize_window(), e.element.toolbar.style.visibility = "", this._checkComponents(), this._componentsInfoInit = !1, this._componentsInfoReset = !1, this.history.reset(!0), this._resourcesStateChange(), a.setTimeout((function() {
                                        "function" == typeof h.onload && h.onload(d, t)
                                    }))
                                },
                                _getConstructed: function(e) {
                                    return {
                                        _top: e.topArea,
                                        _relative: e.relative,
                                        _toolBar: e.toolbar,
                                        _menuTray: e._menuTray,
                                        _editorArea: e.editorArea,
                                        _wysiwygArea: e.wysiwygFrame,
                                        _codeArea: e.code,
                                        _placeholder: e.placeholder,
                                        _resizingBar: e.resizingBar,
                                        _navigation: e.navigation,
                                        _charCounter: e.charCounter,
                                        _charWrapper: e.charWrapper,
                                        _loading: e.loading,
                                        _lineBreaker: e.lineBreaker,
                                        _lineBreaker_t: e.lineBreaker_t,
                                        _lineBreaker_b: e.lineBreaker_b,
                                        _resizeBack: e.resizeBackground,
                                        _stickyDummy: e._stickyDummy,
                                        _arrow: e._arrow
                                    }
                                }
                            },
                            u = {
                                _IEisComposing: !1,
                                _lineBreakerBind: null,
                                _responsiveCurrentSize: "default",
                                _responsiveButtonSize: null,
                                _responsiveButtons: null,
                                _directionKeyCode: new a.RegExp("^(8|13|3[2-9]|40|46)$"),
                                _nonTextKeyCode: new a.RegExp("^(8|13|1[6-9]|20|27|3[3-9]|40|45|46|11[2-9]|12[0-3]|144|145)$"),
                                _historyIgnoreKeyCode: new a.RegExp("^(1[6-9]|20|27|3[3-9]|40|45|11[2-9]|12[0-3]|144|145)$"),
                                _onButtonsCheck: new a.RegExp("^(STRONG|U|EM|DEL|SUB|SUP)$"),
                                _frontZeroWidthReg: new a.RegExp(r.zeroWidthSpace + "+", ""),
                                _keyCodeShortcut: {
                                    65: "A",
                                    66: "B",
                                    83: "S",
                                    85: "U",
                                    73: "I",
                                    89: "Y",
                                    90: "Z",
                                    219: "[",
                                    221: "]"
                                },
                                _shortcutCommand: function(e, t) {
                                    let n = null;
                                    switch (u._keyCodeShortcut[e]) {
                                        case "A":
                                            n = "selectAll";
                                            break;
                                        case "B":
                                            -1 === l.shortcutsDisable.indexOf("bold") && (n = "STRONG");
                                            break;
                                        case "S":
                                            t && -1 === l.shortcutsDisable.indexOf("strike") && (n = "DEL");
                                            break;
                                        case "U":
                                            -1 === l.shortcutsDisable.indexOf("underline") && (n = "U");
                                            break;
                                        case "I":
                                            -1 === l.shortcutsDisable.indexOf("italic") && (n = "EM");
                                            break;
                                        case "Z":
                                            -1 === l.shortcutsDisable.indexOf("undo") && (n = t ? "redo" : "undo");
                                            break;
                                        case "Y":
                                            -1 === l.shortcutsDisable.indexOf("undo") && (n = "redo");
                                            break;
                                        case "[":
                                            -1 === l.shortcutsDisable.indexOf("indent") && (n = "outdent");
                                            break;
                                        case "]":
                                            -1 === l.shortcutsDisable.indexOf("indent") && (n = "indent")
                                    }
                                    return !!n && (d.commandHandler(d.commandMap[n], n), !0)
                                },
                                _applyTagEffects: function() {
                                    let t = d.getSelectionNode();
                                    if (t === d.effectNode) return;
                                    d.effectNode = t;
                                    const i = d.commandMap,
                                        o = this._onButtonsCheck,
                                        s = [],
                                        a = [],
                                        c = d.activePlugins,
                                        u = c.length;
                                    let h = "";
                                    for (; t.firstChild;) t = t.firstChild;
                                    for (let e = t; !r.isWysiwygDiv(e) && e; e = e.parentNode)
                                        if (1 === e.nodeType && !r.isBreak(e)) {
                                            h = e.nodeName.toUpperCase(), a.push(h);
                                            for (let t, i = 0; i < u; i++) t = c[i], -1 === s.indexOf(t) && n[t].active.call(d, e) && s.push(t);
                                            r.isFormatElement(e) ? (-1 === s.indexOf("OUTDENT") && i.OUTDENT && (r.isListCell(e) || e.style.marginLeft && r.getNumber(e.style.marginLeft, 0) > 0) && (s.push("OUTDENT"), i.OUTDENT.removeAttribute("disabled")), -1 === s.indexOf("INDENT") && i.INDENT && r.isListCell(e) && !e.previousElementSibling && (s.push("INDENT"), i.INDENT.setAttribute("disabled", !0))) : o.test(h) && (s.push(h), r.addClass(i[h], "active"))
                                        } for (let e in i) s.indexOf(e) > -1 || !r.hasOwn(i, e) || (c.indexOf(e) > -1 ? n[e].active.call(d, null) : i.OUTDENT && /^OUTDENT$/i.test(e) ? i.OUTDENT.setAttribute("disabled", !0) : i.INDENT && /^INDENT$/i.test(e) ? i.INDENT.removeAttribute("disabled") : r.removeClass(i[e], "active"));
                                    d._variable.currentNodes = a.reverse(), d._variable.currentNodesMap = s, l.showPathLabel && (e.element.navigation.textContent = d._variable.currentNodes.join(" > "))
                                },
                                _cancelCaptionEdit: function() {
                                    this.setAttribute("contenteditable", !1), this.removeEventListener("blur", u._cancelCaptionEdit)
                                },
                                _buttonsEventHandler: function(e) {
                                    let t = e.target;
                                    if (d._bindControllersOff && e.stopPropagation(), /^(input|textarea|select|option)$/i.test(t.nodeName) ? d._antiBlur = !1 : e.preventDefault(), r.getParentElement(t, ".se-submenu")) e.stopPropagation(), d._notHideToolbar = !0;
                                    else {
                                        let n = t.getAttribute("data-command"),
                                            i = t.className;
                                        for (; !n && !/se-menu-list/.test(i) && !/sun-editor-common/.test(i);) t = t.parentNode, n = t.getAttribute("data-command"), i = t.className;
                                        n !== d._submenuName && n !== d._containerName || e.stopPropagation()
                                    }
                                },
                                onClick_toolbar: function(e) {
                                    let t = e.target,
                                        n = t.getAttribute("data-display"),
                                        i = t.getAttribute("data-command"),
                                        l = t.className;
                                    for (; t.parentNode && !i && !/se-menu-list/.test(l) && !/se-toolbar/.test(l);) t = t.parentNode, i = t.getAttribute("data-command"), n = t.getAttribute("data-display"), l = t.className;
                                    (i || n) && (t.disabled || (d.hasFocus || d.nativeFocus(), d._variable.isCodeView || d._editorRange(), d.actionCall(i, n, t)))
                                },
                                onMouseDown_wysiwyg: function(t) {
                                    if (r.isNonEditable(e.element.wysiwyg)) return;
                                    const n = r.getParentElement(t.target, r.isCell);
                                    if (n) {
                                        const e = d.plugins.table;
                                        e && n !== e._fixedCell && !e._shift && d.callPlugin("table", (function() {
                                            e.onTableCellMultiSelect.call(d, n, !1)
                                        }), null)
                                    }
                                    d._isBalloon && u._hideToolbar(), /FIGURE/i.test(t.target.nodeName) && t.preventDefault(), "function" == typeof h.onMouseDown && h.onMouseDown(t, d)
                                },
                                onClick_wysiwyg: function(t) {
                                    const n = t.target;
                                    if (r.isNonEditable(e.element.wysiwyg)) return;
                                    const i = d.getFileComponent(n);
                                    if (i) return t.preventDefault(), void d.selectComponent(i.target, i.pluginName);
                                    const l = r.getParentElement(n, "FIGCAPTION");
                                    if (r.isNonEditable(l) && (t.preventDefault(), l.setAttribute("contenteditable", !0), l.focus(), d._isInline && !d._inlineToolbarAttr.isShow)) {
                                        u._showToolbarInline();
                                        const e = function() {
                                            u._hideToolbar(), l.removeEventListener("blur", e)
                                        };
                                        l.addEventListener("blur", e)
                                    }
                                    a.setTimeout(d._editorRange.bind(d)), d._editorRange();
                                    const o = d.getSelectionNode(),
                                        s = r.getFormatElement(o, null),
                                        c = r.getRangeFormatElement(o, null);
                                    if (s && s !== c || r.isNonEditable(n) || r.isList(c)) u._applyTagEffects();
                                    else {
                                        const e = d.getRange();
                                        if (r.getFormatElement(e.startContainer) === r.getFormatElement(e.endContainer)) {
                                            if (r.isList(c)) {
                                                const e = r.createElement("LI"),
                                                    t = o.nextElementSibling;
                                                e.appendChild(o), c.insertBefore(e, t)
                                            } else r.isWysiwygDiv(o) || r.isComponent(o) || r.isTable(o) && !r.isCell(o) || d._setDefaultFormat(r.isRangeFormatElement(c) ? "DIV" : "P");
                                            t.preventDefault(), d.focus()
                                        }
                                    }
                                    d._isBalloon && a.setTimeout(u._toggleToolbarBalloon), "function" == typeof h.onClick && h.onClick(t, d)
                                },
                                _balloonDelay: null,
                                _showToolbarBalloonDelay: function() {
                                    u._balloonDelay && a.clearTimeout(u._balloonDelay), u._balloonDelay = a.setTimeout(function() {
                                        a.clearTimeout(this._balloonDelay), this._balloonDelay = null, this._showToolbarBalloon()
                                    }.bind(u), 350)
                                },
                                _toggleToolbarBalloon: function() {
                                    d._editorRange();
                                    const e = d.getRange();
                                    d._bindControllersOff || !d._isBalloonAlways && e.collapsed ? u._hideToolbar() : u._showToolbarBalloon(e)
                                },
                                _showToolbarBalloon: function(t) {
                                    if (!d._isBalloon) return;
                                    const n = t || d.getRange(),
                                        i = e.element.toolbar,
                                        l = d.getSelection();
                                    let o;
                                    if (d._isBalloonAlways && n.collapsed) o = !0;
                                    else if (l.focusNode === l.anchorNode) o = l.focusOffset < l.anchorOffset;
                                    else {
                                        const e = r.getListChildNodes(n.commonAncestorContainer, null);
                                        o = r.getArrayIndex(e, l.focusNode) < r.getArrayIndex(e, l.anchorNode)
                                    }
                                    let s = n.getClientRects();
                                    s = s[o ? 0 : s.length - 1];
                                    let c = 0,
                                        h = 0,
                                        g = e.element.topArea;
                                    for (; g;) c += g.scrollLeft, h += g.scrollTop, g = g.parentElement;
                                    const p = e.element.topArea.offsetWidth,
                                        m = u._getEditorOffsets(null),
                                        f = m.top,
                                        _ = m.left;
                                    if (i.style.top = "-10000px", i.style.visibility = "hidden", i.style.display = "block", !s) {
                                        const t = d.getSelectionNode();
                                        if (r.isFormatElement(t)) {
                                            const e = r.createTextNode(r.zeroWidthSpace);
                                            d.insertNode(e, null, !1), d.setRange(e, 1, e, 1), d._editorRange(), s = d.getRange().getClientRects(), s = s[o ? 0 : s.length - 1]
                                        }
                                        if (!s) {
                                            const n = r.getOffset(t, e.element.wysiwygFrame);
                                            s = {
                                                left: n.left,
                                                top: n.top,
                                                right: n.left,
                                                bottom: n.top + t.offsetHeight,
                                                noText: !0
                                            }, c = 0, h = 0
                                        }
                                        o = !0
                                    }
                                    const b = a.Math.round(e.element._arrow.offsetWidth / 2),
                                        v = i.offsetWidth,
                                        y = i.offsetHeight,
                                        C = /iframe/i.test(e.element.wysiwygFrame.nodeName) ? e.element.wysiwygFrame.getClientRects()[0] : null;
                                    C && (s = {
                                        left: s.left + C.left,
                                        top: s.top + C.top,
                                        right: s.right + C.right - C.width,
                                        bottom: s.bottom + C.bottom - C.height
                                    }), u._setToolbarOffset(o, s, i, _, p, c, h, f, b), v === i.offsetWidth && y === i.offsetHeight || u._setToolbarOffset(o, s, i, _, p, c, h, f, b), i.style.visibility = ""
                                },
                                _setToolbarOffset: function(t, n, i, l, o, c, d, h, g) {
                                    const p = i.offsetWidth,
                                        m = n.noText && !t ? 0 : i.offsetHeight,
                                        f = (t ? n.left : n.right) - l - p / 2 + c,
                                        _ = f + p - o;
                                    let b = (t ? n.top - m - g : n.bottom + g) - (n.noText ? 0 : h) + d,
                                        v = f < 0 ? 1 : _ < 0 ? f : f - _ - 1 - 1,
                                        y = !1;
                                    const C = b + (t ? u._getEditorOffsets(null).top : i.offsetHeight - e.element.wysiwyg.offsetHeight);
                                    !t && C > 0 && u._getPageBottomSpace() < C ? (t = !0, y = !0) : t && s.documentElement.offsetTop > C && (t = !1, y = !0), y && (b = (t ? n.top - m - g : n.bottom + g) - (n.noText ? 0 : h) + d), i.style.left = a.Math.floor(v) + "px", i.style.top = a.Math.floor(b) + "px", t ? (r.removeClass(e.element._arrow, "se-arrow-up"), r.addClass(e.element._arrow, "se-arrow-down"), e.element._arrow.style.top = m + "px") : (r.removeClass(e.element._arrow, "se-arrow-down"), r.addClass(e.element._arrow, "se-arrow-up"), e.element._arrow.style.top = -g + "px");
                                    const w = a.Math.floor(p / 2 + (f - v));
                                    e.element._arrow.style.left = (w + g > i.offsetWidth ? i.offsetWidth - g : w < g ? g : w) + "px"
                                },
                                _showToolbarInline: function() {
                                    if (!d._isInline) return;
                                    const t = e.element.toolbar;
                                    l.toolbarContainer ? t.style.position = "relative" : t.style.position = "absolute", t.style.visibility = "hidden", t.style.display = "block", d._inlineToolbarAttr.width = t.style.width = l.toolbarWidth, d._inlineToolbarAttr.top = t.style.top = (l.toolbarContainer ? 0 : -1 - t.offsetHeight) + "px", "function" == typeof h.showInline && h.showInline(t, e, d), u.onScroll_window(), d._inlineToolbarAttr.isShow = !0, t.style.visibility = ""
                                },
                                _hideToolbar: function() {
                                    d._notHideToolbar || d._variable.isFullScreen || (e.element.toolbar.style.display = "none", d._inlineToolbarAttr.isShow = !1)
                                },
                                onInput_wysiwyg: function(e) {
                                    d._editorRange();
                                    const t = (null === e.data ? "" : void 0 === e.data ? " " : e.data) || "";
                                    d._charCount(t) || (e.preventDefault(), e.stopPropagation()), d.history.push(!0), "function" == typeof h.onInput && h.onInput(e, d)
                                },
                                _onShortcutKey: !1,
                                onKeyDown_wysiwyg: function(t) {
                                    const n = t.keyCode,
                                        i = t.shiftKey,
                                        o = t.ctrlKey || t.metaKey || 91 === n || 92 === n || 224 === n,
                                        s = t.altKey;
                                    if (u._IEisComposing = 229 === n, d.submenuOff(), d._isBalloon && u._hideToolbar(), o && u._shortcutCommand(n, i)) return u._onShortcutKey = !0, t.preventDefault(), t.stopPropagation(), !1;
                                    u._onShortcutKey && (u._onShortcutKey = !1);
                                    let c = d.getSelectionNode();
                                    const g = d.getRange(),
                                        p = !g.collapsed || g.startContainer !== g.endContainer,
                                        m = d._fileManager.pluginRegExp.test(d.currentControllerName) ? d.currentControllerName : "";
                                    let f = r.getFormatElement(c, null) || c,
                                        _ = r.getRangeFormatElement(f, null);
                                    switch (n) {
                                        case 8:
                                            if (!p && m) {
                                                t.preventDefault(), t.stopPropagation(), d.plugins[m].destroy.call(d);
                                                break
                                            }
                                            if (p && u._hardDelete()) {
                                                t.preventDefault(), t.stopPropagation();
                                                break
                                            }
                                            if (!r.isFormatElement(f) && !e.element.wysiwyg.firstElementChild && !r.isComponent(c)) return t.preventDefault(), t.stopPropagation(), d._setDefaultFormat("P"), !1;
                                            if (!p && !f.previousElementSibling && 0 === g.startOffset && !c.previousSibling && !r.isListCell(f) && r.isFormatElement(f) && (!r.isFreeFormatElement(f) || r.isClosureFreeFormatElement(f))) {
                                                if (r.isClosureRangeFormatElement(f.parentNode)) return t.preventDefault(), t.stopPropagation(), !1;
                                                if (r.isWysiwygDiv(f.parentNode) && f.childNodes.length <= 1 && (!f.firstChild || r.onlyZeroWidthSpace(f.textContent))) {
                                                    t.preventDefault(), t.stopPropagation(), f.innerHTML = "<br>";
                                                    const e = f.attributes;
                                                    for (; e[0];) f.removeAttribute(e[0].name);
                                                    return d.nativeFocus(), !1
                                                }
                                            }
                                            if (f && g.startContainer === g.endContainer && 3 === c.nodeType && !r.isFormatElement(c.parentNode) && (g.collapsed ? 1 === c.textContent.length : g.endOffset - g.startOffset === c.textContent.length)) {
                                                t.preventDefault();
                                                let e = null,
                                                    n = c.parentNode.previousSibling;
                                                const i = c.parentNode.nextSibling;
                                                n || (i ? (n = i, e = 0) : (n = r.createElement("BR"), f.appendChild(n))), c.textContent = "", r.removeItemAllParents(c, null, f), e = "number" == typeof e ? e : 3 === n.nodeType ? n.textContent.length : 1, d.setRange(n, e, n, e);
                                                break
                                            }
                                            const n = g.commonAncestorContainer;
                                            if (f = r.getFormatElement(g.startContainer, null), _ = r.getRangeFormatElement(f, null), _ && f && !r.isCell(_) && !/^FIGCAPTION$/i.test(_.nodeName)) {
                                                if (r.isListCell(f) && r.isList(_) && (r.isListCell(_.parentNode) || f.previousElementSibling) && (c === f || 3 === c.nodeType && (!c.previousSibling || r.isList(c.previousSibling))) && (r.getFormatElement(g.startContainer, null) !== r.getFormatElement(g.endContainer, null) ? _.contains(g.startContainer) : 0 === g.startOffset && g.collapsed)) {
                                                    if (g.startContainer !== g.endContainer) t.preventDefault(), d.removeNode(), 3 === g.startContainer.nodeType && d.setRange(g.startContainer, g.startContainer.textContent.length, g.startContainer, g.startContainer.textContent.length), d.history.push(!0);
                                                    else {
                                                        let e = f.previousElementSibling || _.parentNode;
                                                        if (r.isListCell(e)) {
                                                            t.preventDefault();
                                                            let n = e;
                                                            if (!e.contains(f) && r.isListCell(n) && r.isList(n.lastElementChild)) {
                                                                for (n = n.lastElementChild.lastElementChild; r.isListCell(n) && r.isList(n.lastElementChild);) n = n.lastElementChild && n.lastElementChild.lastElementChild;
                                                                e = n
                                                            }
                                                            let i = e === _.parentNode ? _.previousSibling : e.lastChild;
                                                            i || (i = r.createTextNode(r.zeroWidthSpace), _.parentNode.insertBefore(i, _.parentNode.firstChild));
                                                            const l = 3 === i.nodeType ? i.textContent.length : 1,
                                                                o = f.childNodes;
                                                            let s = i,
                                                                a = o[0];
                                                            for (; a = o[0];) e.insertBefore(a, s.nextSibling), s = a;
                                                            r.removeItem(f), 0 === _.children.length && r.removeItem(_), d.setRange(i, l, i, l), d.history.push(!0)
                                                        }
                                                    }
                                                    break
                                                }
                                                if (!p && 0 === g.startOffset) {
                                                    let e = !0,
                                                        i = n;
                                                    for (; i && i !== _ && !r.isWysiwygDiv(i);) {
                                                        if (i.previousSibling && (1 === i.previousSibling.nodeType || !r.onlyZeroWidthSpace(i.previousSibling.textContent.trim()))) {
                                                            e = !1;
                                                            break
                                                        }
                                                        i = i.parentNode
                                                    }
                                                    if (e && _.parentNode) {
                                                        t.preventDefault(), d.detachRangeFormatElement(_, r.isListCell(f) ? [f] : null, null, !1, !1), d.history.push(!0);
                                                        break
                                                    }
                                                }
                                            }
                                            if (!p && (0 === g.startOffset || c === f && f.childNodes[g.startOffset])) {
                                                const e = c === f ? f.childNodes[g.startOffset] : c,
                                                    i = (3 === n.nodeType || r.isBreak(n)) && !n.previousSibling && 0 === g.startOffset;
                                                if (!e.previousSibling && (r.isComponent(n.previousSibling) || i && r.isComponent(f.previousSibling))) {
                                                    const e = d.getFileComponent(f.previousSibling);
                                                    e && (t.preventDefault(), t.stopPropagation(), 0 === f.textContent.length && r.removeItem(f), d.selectComponent(e.target, e.pluginName));
                                                    break
                                                }
                                                if (r.isNonEditable(e.previousSibling)) {
                                                    t.preventDefault(), t.stopPropagation(), r.removeItem(e.previousSibling);
                                                    break
                                                }
                                            }
                                            break;
                                        case 46:
                                            if (m) {
                                                t.preventDefault(), t.stopPropagation(), d.plugins[m].destroy.call(d);
                                                break
                                            }
                                            if (p && u._hardDelete()) {
                                                t.preventDefault(), t.stopPropagation();
                                                break
                                            }
                                            if ((r.isFormatElement(c) || null === c.nextSibling || r.onlyZeroWidthSpace(c.nextSibling) && null === c.nextSibling.nextSibling) && g.startOffset === c.textContent.length) {
                                                let e = f.nextElementSibling;
                                                if (!e) {
                                                    t.preventDefault();
                                                    break
                                                }
                                                if (r.isComponent(e)) {
                                                    if (t.preventDefault(), r.onlyZeroWidthSpace(f) && (r.removeItem(f), r.isTable(e))) {
                                                        let t = r.getChildElement(e, r.isCell, !1);
                                                        t = t.firstElementChild || t, d.setRange(t, 0, t, 0);
                                                        break
                                                    }
                                                    const n = d.getFileComponent(e);
                                                    n && (t.stopPropagation(), d.selectComponent(n.target, n.pluginName));
                                                    break
                                                }
                                            }
                                            if (!p && (d.isEdgePoint(g.endContainer, g.endOffset) || c === f && f.childNodes[g.startOffset])) {
                                                const e = c === f ? f.childNodes[g.startOffset] : c;
                                                if (r.isNonEditable(e.nextSibling)) {
                                                    t.preventDefault(), t.stopPropagation(), r.removeItem(e.nextSibling);
                                                    break
                                                }
                                            }
                                            if (f = r.getFormatElement(g.startContainer, null), _ = r.getRangeFormatElement(f, null), r.isListCell(f) && r.isList(_) && (c === f || 3 === c.nodeType && (!c.nextSibling || r.isList(c.nextSibling)) && (r.getFormatElement(g.startContainer, null) !== r.getFormatElement(g.endContainer, null) ? _.contains(g.endContainer) : g.endOffset === c.textContent.length && g.collapsed))) {
                                                g.startContainer !== g.endContainer && d.removeNode();
                                                let e = r.getArrayItem(f.children, r.isList, !1);
                                                if (e = e || f.nextElementSibling || _.parentNode.nextElementSibling, e && (r.isList(e) || r.getArrayItem(e.children, r.isList, !1))) {
                                                    let n, i;
                                                    if (t.preventDefault(), r.isList(e)) {
                                                        const t = e.firstElementChild;
                                                        for (i = t.childNodes, n = i[0]; i[0];) f.insertBefore(i[0], e);
                                                        r.removeItem(t)
                                                    } else {
                                                        for (n = e.firstChild, i = e.childNodes; i[0];) f.appendChild(i[0]);
                                                        r.removeItem(e)
                                                    }
                                                    d.setRange(n, 0, n, 0), d.history.push(!0)
                                                }
                                                break
                                            }
                                            break;
                                        case 9:
                                            if (m || l.tabDisable) break;
                                            if (t.preventDefault(), o || s || r.isWysiwygDiv(c)) break;
                                            const b = !g.collapsed || d.isEdgePoint(g.startContainer, g.startOffset),
                                                v = d.getSelectedElements(null);
                                            c = d.getSelectionNode();
                                            const y = [];
                                            let C = [],
                                                w = r.isListCell(v[0]),
                                                x = r.isListCell(v[v.length - 1]),
                                                E = {
                                                    sc: g.startContainer,
                                                    so: g.startOffset,
                                                    ec: g.endContainer,
                                                    eo: g.endOffset
                                                };
                                            for (let e, t = 0, n = v.length; t < n; t++)
                                                if (e = v[t], r.isListCell(e)) {
                                                    if (!e.previousElementSibling && !i) continue;
                                                    y.push(e)
                                                } else C.push(e);
                                            if (y.length > 0 && b && d.plugins.list) E = d.plugins.list.editInsideList.call(d, i, y);
                                            else {
                                                const e = r.getParentElement(c, r.isCell);
                                                if (e && b) {
                                                    const t = r.getParentElement(e, "table"),
                                                        n = r.getListChildren(t, r.isCell);
                                                    let l = i ? r.prevIdx(n, e) : r.nextIdx(n, e);
                                                    l !== n.length || i || (l = 0), -1 === l && i && (l = n.length - 1);
                                                    let o = n[l];
                                                    if (!o) break;
                                                    o = o.firstElementChild || o, d.setRange(o, 0, o, 0);
                                                    break
                                                }
                                                C = C.concat(y), w = x = null
                                            }
                                            if (C.length > 0)
                                                if (i) {
                                                    const e = C.length - 1;
                                                    for (let t, n = 0; n <= e; n++) {
                                                        t = C[n].childNodes;
                                                        for (let e, n = 0, i = t.length; n < i && (e = t[n], e); n++)
                                                            if (!r.onlyZeroWidthSpace(e)) {
                                                                /^\s{1,4}$/.test(e.textContent) ? r.removeItem(e) : /^\s{1,4}/.test(e.textContent) && (e.textContent = e.textContent.replace(/^\s{1,4}/, ""));
                                                                break
                                                            }
                                                    }
                                                    const t = r.getChildElement(C[0], "text", !1),
                                                        n = r.getChildElement(C[e], "text", !0);
                                                    !w && t && (E.sc = t, E.so = 0), !x && n && (E.ec = n, E.eo = n.textContent.length)
                                                } else {
                                                    const e = r.createTextNode(new a.Array(d._variable.tabSize + 1).join(" "));
                                                    if (1 === C.length) {
                                                        const t = d.insertNode(e, null, !0);
                                                        if (!t) return !1;
                                                        w || (E.sc = e, E.so = t.endOffset), x || (E.ec = e, E.eo = t.endOffset)
                                                    } else {
                                                        const t = C.length - 1;
                                                        for (let n, i = 0; i <= t; i++) n = C[i].firstChild, n && (r.isBreak(n) ? C[i].insertBefore(e.cloneNode(!1), n) : n.textContent = e.textContent + n.textContent);
                                                        const n = r.getChildElement(C[0], "text", !1),
                                                            i = r.getChildElement(C[t], "text", !0);
                                                        !w && n && (E.sc = n, E.so = 0), !x && i && (E.ec = i, E.eo = i.textContent.length)
                                                    }
                                                } d.setRange(E.sc, E.so, E.ec, E.eo), d.history.push(!1);
                                            break;
                                        case 13:
                                            const S = r.getFreeFormatElement(c, null);
                                            if (d._charTypeHTML) {
                                                let e = "";
                                                if (e = !i && S || i ? "<br>" : "<" + f.nodeName + "><br></" + f.nodeName + ">", !d.checkCharCount(e, "byte-html")) return t.preventDefault(), !1
                                            }
                                            if (!i && S) {
                                                t.preventDefault();
                                                const e = c === S,
                                                    n = d.getSelection(),
                                                    i = c.childNodes,
                                                    l = n.focusOffset,
                                                    o = c.previousElementSibling,
                                                    s = c.nextSibling;
                                                if (!r.isClosureFreeFormatElement(S) && i && (e && g.collapsed && i.length - 1 <= l + 1 && r.isBreak(i[l]) && (!i[l + 1] || (!i[l + 2] || r.onlyZeroWidthSpace(i[l + 2].textContent)) && 3 === i[l + 1].nodeType && r.onlyZeroWidthSpace(i[l + 1].textContent)) && l > 0 && r.isBreak(i[l - 1]) || !e && r.onlyZeroWidthSpace(c.textContent) && r.isBreak(o) && (r.isBreak(o.previousSibling) || !r.onlyZeroWidthSpace(o.previousSibling.textContent)) && (!s || !r.isBreak(s) && r.onlyZeroWidthSpace(s.textContent)))) {
                                                    e ? r.removeItem(i[l - 1]) : r.removeItem(c);
                                                    const t = d.appendFormatTag(S, r.isFormatElement(S.nextElementSibling) ? S.nextElementSibling : null);
                                                    r.copyFormatAttributes(t, S), d.setRange(t, 1, t, 1);
                                                    break
                                                }
                                                if (e) {
                                                    h.insertHTML(g.collapsed && r.isBreak(g.startContainer.childNodes[g.startOffset - 1]) ? "<br>" : "<br><br>", !0, !1);
                                                    let e = n.focusNode;
                                                    const t = n.focusOffset;
                                                    S === e && (e = e.childNodes[t - l > 1 ? t - 1 : t]), d.setRange(e, 1, e, 1)
                                                } else {
                                                    const e = n.focusNode.nextSibling,
                                                        t = r.createElement("BR");
                                                    d.insertNode(t, null, !1);
                                                    const i = t.previousSibling,
                                                        l = t.nextSibling;
                                                    r.isBreak(e) || r.isBreak(i) || l && !r.onlyZeroWidthSpace(l) ? d.setRange(l, 0, l, 0) : (t.parentNode.insertBefore(t.cloneNode(!1), t), d.setRange(t, 1, t, 1))
                                                }
                                                u._onShortcutKey = !0;
                                                break
                                            }
                                            if (p) break;
                                            if (_ && f && !r.isCell(_) && !/^FIGCAPTION$/i.test(_.nodeName)) {
                                                const e = d.getRange();
                                                if (d.isEdgePoint(e.endContainer, e.endOffset) && r.isList(c.nextSibling)) {
                                                    t.preventDefault();
                                                    const e = r.createElement("LI"),
                                                        n = r.createElement("BR");
                                                    e.appendChild(n), f.parentNode.insertBefore(e, f.nextElementSibling), e.appendChild(c.nextSibling), d.setRange(n, 1, n, 1);
                                                    break
                                                }
                                                if ((3 !== e.commonAncestorContainer.nodeType || !e.commonAncestorContainer.nextElementSibling) && r.onlyZeroWidthSpace(f.innerText.trim())) {
                                                    t.preventDefault();
                                                    let e = null;
                                                    if (r.isListCell(_.parentNode)) {
                                                        if (_ = f.parentNode.parentNode.parentNode, e = r.splitElement(f, null, r.getElementDepth(f) - 2), !e) {
                                                            const t = r.createElement("LI");
                                                            t.innerHTML = "<br>", _.insertBefore(t, e), e = t
                                                        }
                                                    } else {
                                                        const t = r.isCell(_.parentNode) ? "DIV" : r.isList(_.parentNode) ? "LI" : r.isFormatElement(_.nextElementSibling) ? _.nextElementSibling.nodeName : r.isFormatElement(_.previousElementSibling) ? _.previousElementSibling.nodeName : "P";
                                                        e = r.createElement(t);
                                                        const n = d.detachRangeFormatElement(_, [f], null, !0, !0);
                                                        n.cc.insertBefore(e, n.ec)
                                                    }
                                                    e.innerHTML = "<br>", r.copyFormatAttributes(e, f), r.removeItemAllParents(f, null, null), d.setRange(e, 1, e, 1);
                                                    break
                                                }
                                            }
                                            if (_ && r.getParentElement(_, "FIGCAPTION") && r.getParentElement(_, r.isList) && (t.preventDefault(), f = d.appendFormatTag(f, null), d.setRange(f, 0, f, 0)), m) {
                                                t.preventDefault(), t.stopPropagation();
                                                const n = e[m],
                                                    i = n._container,
                                                    l = i.previousElementSibling || i.nextElementSibling;
                                                let o = null;
                                                r.isListCell(i.parentNode) ? o = r.createElement("BR") : (o = r.createElement(r.isFormatElement(l) ? l.nodeName : "P"), o.innerHTML = "<br>"), i.parentNode.insertBefore(o, i), d.callPlugin(m, (function() {
                                                    d.selectComponent(n._element, m)
                                                }), null)
                                            }
                                            break;
                                        case 27:
                                            if (m) return t.preventDefault(), t.stopPropagation(), d.controllersOff(), !1
                                    }
                                    if (i && /16/.test(n)) {
                                        t.preventDefault(), t.stopPropagation();
                                        const e = d.plugins.table;
                                        if (e && !e._shift && !e._ref) {
                                            const t = r.getParentElement(f, r.isCell);
                                            if (t) return void e.onTableCellMultiSelect.call(d, t, !0)
                                        }
                                    }
                                    if (!(o || s || p || u._nonTextKeyCode.test(n)) && g.collapsed && g.startContainer === g.endContainer && r.isBreak(g.commonAncestorContainer)) {
                                        const e = r.createTextNode(r.zeroWidthSpace);
                                        d.insertNode(e, null, !1), d.setRange(e, 1, e, 1)
                                    }
                                    "function" == typeof h.onKeyDown && h.onKeyDown(t, d)
                                },
                                onKeyUp_wysiwyg: function(e) {
                                    if (u._onShortcutKey) return;
                                    d._editorRange();
                                    const t = d.getRange(),
                                        n = e.keyCode,
                                        i = e.ctrlKey || e.metaKey || 91 === n || 92 === n || 224 === n,
                                        l = e.altKey;
                                    let o = d.getSelectionNode();
                                    if (d._isBalloon && (d._isBalloonAlways && 27 !== n || !t.collapsed)) {
                                        if (!d._isBalloonAlways) return void u._showToolbarBalloon();
                                        27 !== n && u._showToolbarBalloonDelay()
                                    }
                                    if (8 === n && r.isWysiwygDiv(o) && "" === o.textContent && 0 === o.children.length) {
                                        e.preventDefault(), e.stopPropagation(), o.innerHTML = "";
                                        const t = r.createElement(r.isFormatElement(d._variable.currentNodes[0]) ? d._variable.currentNodes[0] : "P");
                                        return t.innerHTML = "<br>", o.appendChild(t), d.setRange(t, 0, t, 0), u._applyTagEffects(), void d.history.push(!1)
                                    }
                                    const s = r.getFormatElement(o, null),
                                        a = r.getRangeFormatElement(o, null);
                                    (s || !t.collapsed) && s !== a || r.isComponent(o) || r.isList(o) || (d._setDefaultFormat(r.isRangeFormatElement(a) ? "DIV" : "P"), o = d.getSelectionNode()), u._directionKeyCode.test(n) && u._applyTagEffects();
                                    if (!i && !l && !u._nonTextKeyCode.test(n) && 3 === o.nodeType && r.zeroWidthRegExp.test(o.textContent) && !(void 0 !== e.isComposing ? e.isComposing : u._IEisComposing)) {
                                        let e = t.startOffset,
                                            n = t.endOffset;
                                        const i = (o.textContent.substring(0, n).match(u._frontZeroWidthReg) || "").length;
                                        e = t.startOffset - i, n = t.endOffset - i, o.textContent = o.textContent.replace(r.zeroWidthRegExp, ""), d.setRange(o, e < 0 ? 0 : e, o, n < 0 ? 0 : n)
                                    }
                                    d._charCount(""), d.history.push(!0), "function" == typeof h.onKeyUp && h.onKeyUp(e, d)
                                },
                                onScroll_wysiwyg: function(e) {
                                    d.controllersOff(), d._lineBreaker.style.display = "none", d._isBalloon && u._hideToolbar(), "function" == typeof h.onScroll && h.onScroll(e, d)
                                },
                                onFocus_wysiwyg: function(e) {
                                    d._antiBlur || (d.hasFocus = !0, d._isInline && u._showToolbarInline(), "function" == typeof h.onFocus && h.onFocus(e, d))
                                },
                                onBlur_wysiwyg: function(t) {
                                    if (d._antiBlur) return;
                                    d.hasFocus = !1, d.controllersOff(), (d._isInline || d._isBalloon) && u._hideToolbar(), "function" == typeof h.onBlur && h.onBlur(t, d);
                                    const i = d.commandMap,
                                        o = d.activePlugins;
                                    for (let e in i) r.hasOwn(i, e) && (o.indexOf(e) > -1 ? n[e].active.call(d, null) : i.OUTDENT && /^OUTDENT$/i.test(e) ? i.OUTDENT.setAttribute("disabled", !0) : i.INDENT && /^INDENT$/i.test(e) ? i.INDENT.removeAttribute("disabled") : r.removeClass(i[e], "active"));
                                    d._variable.currentNodes = [], d._variable.currentNodesMap = [], l.showPathLabel && (e.element.navigation.textContent = "")
                                },
                                onMouseDown_resizingBar: function(t) {
                                    t.stopPropagation(), d._variable.resizeClientY = t.clientY, e.element.resizeBackground.style.display = "block", s.addEventListener("mousemove", u._resize_editor), s.addEventListener("mouseup", (function t() {
                                        e.element.resizeBackground.style.display = "none", s.removeEventListener("mousemove", u._resize_editor), s.removeEventListener("mouseup", t)
                                    }))
                                },
                                _resize_editor: function(t) {
                                    const n = e.element.editorArea.offsetHeight + (t.clientY - d._variable.resizeClientY);
                                    e.element.wysiwygFrame.style.height = e.element.code.style.height = (n < d._variable.minResizingSize ? d._variable.minResizingSize : n) + "px", d._variable.resizeClientY = t.clientY
                                },
                                onResize_window: function() {
                                    d.controllersOff();
                                    const t = u._responsiveButtonSize;
                                    if (t) {
                                        const e = a.innerWidth;
                                        let n = "default";
                                        for (let i = 1, l = t.length; i < l; i++) e < t[i] && (n = t[i] + "");
                                        u._responsiveCurrentSize !== n && (u._responsiveCurrentSize = n, h.setToolbarButtons(u._responsiveButtons[n]))
                                    }
                                    if (0 !== e.element.toolbar.offsetWidth) {
                                        if (e.fileBrowser && "block" === e.fileBrowser.area.style.display && (e.fileBrowser.body.style.maxHeight = a.innerHeight - e.fileBrowser.header.offsetHeight - 50 + "px"), d.submenuActiveButton && d.submenu && d._setMenuPosition(d.submenuActiveButton, d.submenu), d._variable.isFullScreen) return d._variable.innerHeight_fullScreen += a.innerHeight - e.element.toolbar.offsetHeight - d._variable.innerHeight_fullScreen, void(e.element.editorArea.style.height = d._variable.innerHeight_fullScreen + "px");
                                        d._variable.isCodeView && d._isInline ? u._showToolbarInline() : (d._iframeAutoHeight(), d._sticky && (e.element.toolbar.style.width = e.element.topArea.offsetWidth - 2 + "px", u.onScroll_window()))
                                    }
                                },
                                onScroll_window: function() {
                                    if (d._variable.isFullScreen || 0 === e.element.toolbar.offsetWidth || l.stickyToolbar < 0) return;
                                    const t = e.element,
                                        n = t.editorArea.offsetHeight,
                                        i = (this.scrollY || s.documentElement.scrollTop) + l.stickyToolbar,
                                        o = u._getEditorOffsets(l.toolbarContainer).top - (d._isInline ? t.toolbar.offsetHeight : 0);
                                    i < o ? u._offStickyToolbar() : i + d._variable.minResizingSize >= n + o ? (d._sticky || u._onStickyToolbar(), t.toolbar.style.top = n + o + l.stickyToolbar - i - d._variable.minResizingSize + "px") : i >= o && u._onStickyToolbar()
                                },
                                _getEditorOffsets: function(t) {
                                    let n = t || e.element.topArea,
                                        i = 0,
                                        l = 0,
                                        o = 0;
                                    for (; n;) i += n.offsetTop, l += n.offsetLeft, o += n.scrollTop, n = n.offsetParent;
                                    return {
                                        top: i,
                                        left: l,
                                        scroll: o
                                    }
                                },
                                _getPageBottomSpace: function() {
                                    return s.documentElement.scrollHeight - (u._getEditorOffsets(null).top + e.element.topArea.offsetHeight)
                                },
                                _onStickyToolbar: function() {
                                    const t = e.element;
                                    d._isInline || l.toolbarContainer || (t._stickyDummy.style.height = t.toolbar.offsetHeight + "px", t._stickyDummy.style.display = "block"), t.toolbar.style.top = l.stickyToolbar + "px", t.toolbar.style.width = d._isInline ? d._inlineToolbarAttr.width : t.toolbar.offsetWidth + "px", r.addClass(t.toolbar, "se-toolbar-sticky"), d._sticky = !0
                                },
                                _offStickyToolbar: function() {
                                    const t = e.element;
                                    t._stickyDummy.style.display = "none", t.toolbar.style.top = d._isInline ? d._inlineToolbarAttr.top : "", t.toolbar.style.width = d._isInline ? d._inlineToolbarAttr.width : "", t.editorArea.style.marginTop = "", r.removeClass(t.toolbar, "se-toolbar-sticky"), d._sticky = !1
                                },
                                _codeViewAutoHeight: function() {
                                    e.element.code.style.height = e.element.code.scrollHeight + "px"
                                },
                                _hardDelete: function() {
                                    const e = d.getRange(),
                                        t = e.startContainer,
                                        n = e.endContainer,
                                        i = r.getRangeFormatElement(t),
                                        l = r.getRangeFormatElement(n),
                                        o = r.isCell(i),
                                        s = r.isCell(l);
                                    if ((o && !i.previousElementSibling && !i.parentElement.previousElementSibling || s && !l.nextElementSibling && !l.parentElement.nextElementSibling) && i !== l)
                                        if (o) {
                                            if (s) return r.removeItem(r.getParentElement(i, r.isComponent)), d.nativeFocus(), !0;
                                            r.removeItem(r.getParentElement(i, r.isComponent))
                                        } else r.removeItem(r.getParentElement(l, r.isComponent));
                                    const a = 1 === t.nodeType ? r.getParentElement(t, ".se-component") : null,
                                        c = 1 === n.nodeType ? r.getParentElement(n, ".se-component") : null;
                                    return a && r.removeItem(a), c && r.removeItem(c), !1
                                },
                                onPaste_wysiwyg: function(e) {
                                    const t = r.isIE ? a.clipboardData : e.clipboardData;
                                    return !t || u._dataTransferAction("paste", e, t)
                                },
                                _setClipboardComponent: function(e, t, n) {
                                    e.preventDefault(), e.stopPropagation(), n.setData("text/html", t.component.outerHTML)
                                },
                                onCopy_wysiwyg: function(e) {
                                    const t = r.isIE ? a.clipboardData : e.clipboardData;
                                    if ("function" == typeof h.onCopy && !h.onCopy(e, t, d)) return e.preventDefault(), e.stopPropagation(), !1;
                                    const n = d.currentFileComponentInfo;
                                    n && !r.isIE && (u._setClipboardComponent(e, n, t), r.addClass(n.component, "se-component-copy"), a.setTimeout((function() {
                                        r.removeClass(n.component, "se-component-copy")
                                    }), 150))
                                },
                                onCut_wysiwyg: function(e) {
                                    const t = r.isIE ? a.clipboardData : e.clipboardData;
                                    if ("function" == typeof h.onCut && !h.onCut(e, t, d)) return e.preventDefault(), e.stopPropagation(), !1;
                                    const n = d.currentFileComponentInfo;
                                    n && !r.isIE && (u._setClipboardComponent(e, n, t), r.removeItem(n.component), d.controllersOff()), a.setTimeout((function() {
                                        d.history.push(!1)
                                    }))
                                },
                                onDrop_wysiwyg: function(e) {
                                    const t = e.dataTransfer;
                                    return !t || (r.isIE ? (e.preventDefault(), e.stopPropagation(), !1) : (d.removeNode(), u._setDropLocationSelection(e), u._dataTransferAction("drop", e, t)))
                                },
                                _setDropLocationSelection: function(e) {
                                    if (e.rangeParent) d.setRange(e.rangeParent, e.rangeOffset, e.rangeParent, e.rangeOffset);
                                    else if (d._wd.caretRangeFromPoint) {
                                        const t = d._wd.caretRangeFromPoint(e.clientX, e.clientY);
                                        d.setRange(t.startContainer, t.startOffset, t.endContainer, t.endOffset)
                                    } else {
                                        const e = d.getRange();
                                        d.setRange(e.startContainer, e.startOffset, e.endContainer, e.endOffset)
                                    }
                                },
                                _dataTransferAction: function(t, n, i) {
                                    let l, o;
                                    if (r.isIE) {
                                        l = i.getData("Text");
                                        const s = d.getRange(),
                                            c = r.createElement("DIV"),
                                            h = {
                                                sc: s.startContainer,
                                                so: s.startOffset,
                                                ec: s.endContainer,
                                                eo: s.endOffset
                                            };
                                        return c.setAttribute("contenteditable", !0), c.style.cssText = "position:absolute; top:0; left:0; width:1px; height:1px; overflow:hidden;", e.element.relative.appendChild(c), c.focus(), a.setTimeout((function() {
                                            o = c.innerHTML, r.removeItem(c), d.setRange(h.sc, h.so, h.ec, h.eo), u._setClipboardData(t, n, l, o, i)
                                        })), !0
                                    }
                                    if (l = i.getData("text/plain"), o = i.getData("text/html"), !1 === u._setClipboardData(t, n, l, o, i)) return n.preventDefault(), n.stopPropagation(), !1
                                },
                                _setClipboardData: function(e, t, n, i, l) {
                                    /class=["']*Mso(Normal|List)/i.test(i) || /content=["']*Word.Document/i.test(i) || /content=["']*OneNote.File/i.test(i) ? (i = i.replace(/\n/g, " "), n = n.replace(/\n/g, " ")) : n = n.replace(/\n/g, ""), 
                                    const o = d._charCount(d._charTypeHTML ? i : n);
                                    if ("paste" === e && "function" == typeof h.onPaste && !h.onPaste(t, i, o, d)) return !1;
                                    if ("drop" === e && "function" == typeof h.onDrop && !h.onDrop(t, l, d)) return !1;
                                    const s = l.files;
                                    return s.length > 0 ? (/^image/.test(s[0].type) && d.plugins.image && h.insertImage(s), !1) : !!o && (i ? (h.insertHTML(i, !0, !1), !1) : void 0)
                                },
                                onMouseMove_wysiwyg: function(t) {
                                    if (d.isDisabled) return;
                                    const n = r.getParentElement(t.target, r.isComponent),
                                        i = d._lineBreaker.style;
                                    if (n && !d.currentControllerName) {
                                        let o = 0,
                                            s = e.element.wysiwyg;
                                        do {
                                            o += s.scrollTop, s = s.parentElement
                                        } while (s && !/^(BODY|HTML)$/i.test(s.nodeName));
                                        const a = e.element.wysiwyg.scrollTop,
                                            c = u._getEditorOffsets(null),
                                            h = r.getOffset(n, e.element.wysiwygFrame).top + a,
                                            g = t.pageY + o + (l.iframe && !l.toolbarContainer ? e.element.toolbar.offsetHeight : 0),
                                            p = h + (l.iframe ? o : c.top),
                                            m = r.isListCell(n.parentNode);
                                        let f = "",
                                            _ = "";
                                        if ((m ? !n.previousSibling : !r.isFormatElement(n.previousElementSibling)) && g < p + 20) _ = h, f = "t";
                                        else {
                                            if ((m ? n.nextSibling : r.isFormatElement(n.nextElementSibling)) || !(g > p + n.offsetHeight - 20)) return void(i.display = "none");
                                            _ = h + n.offsetHeight, f = "b"
                                        }
                                        d._variable._lineBreakComp = n, d._variable._lineBreakDir = f, i.top = _ - a + "px", d._lineBreakerButton.style.left = r.getOffset(n).left + n.offsetWidth / 2 - 15 + "px", i.display = "block"
                                    } else "none" !== i.display && (i.display = "none")
                                },
                                _onMouseDown_lineBreak: function(e) {
                                    e.preventDefault()
                                },
                                _onLineBreak: function(e) {
                                    e.preventDefault();
                                    const t = d._variable._lineBreakComp,
                                        n = this ? this : d._variable._lineBreakDir,
                                        i = r.isListCell(t.parentNode),
                                        l = r.createElement(i ? "BR" : r.isCell(t.parentNode) ? "DIV" : "P");
                                    if (i || (l.innerHTML = "<br>"), d._charTypeHTML && !d.checkCharCount(l.outerHTML, "byte-html")) return;
                                    t.parentNode.insertBefore(l, "t" === n ? t : t.nextSibling), d._lineBreaker.style.display = "none", d._variable._lineBreakComp = null;
                                    const o = i ? l : l.firstChild;
                                    d.setRange(o, 1, o, 1), d.history.push(!1)
                                },
                                _addEvent: function() {
                                    const t = l.iframe ? d._ww : e.element.wysiwyg;
                                    e.element.toolbar.addEventListener("mousedown", u._buttonsEventHandler, !1), e.element._menuTray.addEventListener("mousedown", u._buttonsEventHandler, !1), e.element.toolbar.addEventListener("click", u.onClick_toolbar, !1), t.addEventListener("mousedown", u.onMouseDown_wysiwyg, !1), t.addEventListener("click", u.onClick_wysiwyg, !1), t.addEventListener(r.isIE ? "textinput" : "input", u.onInput_wysiwyg, !1), t.addEventListener("keydown", u.onKeyDown_wysiwyg, !1), t.addEventListener("keyup", u.onKeyUp_wysiwyg, !1), t.addEventListener("paste", u.onPaste_wysiwyg, !1), t.addEventListener("copy", u.onCopy_wysiwyg, !1), t.addEventListener("cut", u.onCut_wysiwyg, !1), t.addEventListener("drop", u.onDrop_wysiwyg, !1), t.addEventListener("scroll", u.onScroll_wysiwyg, !1), t.addEventListener("focus", u.onFocus_wysiwyg, !1), t.addEventListener("blur", u.onBlur_wysiwyg, !1), u._lineBreakerBind = {
                                        a: u._onLineBreak.bind(""),
                                        t: u._onLineBreak.bind("t"),
                                        b: u._onLineBreak.bind("b")
                                    }, t.addEventListener("mousemove", u.onMouseMove_wysiwyg, !1), d._lineBreakerButton.addEventListener("mousedown", u._onMouseDown_lineBreak, !1), d._lineBreakerButton.addEventListener("click", u._lineBreakerBind.a, !1), e.element.lineBreaker_t.addEventListener("mousedown", u._lineBreakerBind.t, !1), e.element.lineBreaker_b.addEventListener("mousedown", u._lineBreakerBind.b, !1), d.plugins.table && t.addEventListener("touchstart", u.onMouseDown_wysiwyg, {
                                        passive: !0,
                                        useCapture: !1
                                    }), "auto" !== l.height || l.codeMirrorEditor || (e.element.code.addEventListener("keydown", u._codeViewAutoHeight, !1), e.element.code.addEventListener("keyup", u._codeViewAutoHeight, !1), e.element.code.addEventListener("paste", u._codeViewAutoHeight, !1)), e.element.resizingBar && (/\d+/.test(l.height) ? e.element.resizingBar.addEventListener("mousedown", u.onMouseDown_resizingBar, !1) : r.addClass(e.element.resizingBar, "se-resizing-none")), u._setResponsiveToolbar(), a.removeEventListener("resize", u.onResize_window), a.removeEventListener("scroll", u.onScroll_window), a.addEventListener("resize", u.onResize_window, !1), l.stickyToolbar > -1 && a.addEventListener("scroll", u.onScroll_window, !1)
                                },
                                _removeEvent: function() {
                                    const t = l.iframe ? d._ww : e.element.wysiwyg;
                                    e.element.toolbar.removeEventListener("mousedown", u._buttonsEventHandler), e.element._menuTray.removeEventListener("mousedown", u._buttonsEventHandler), e.element.toolbar.removeEventListener("click", u.onClick_toolbar), t.removeEventListener("mousedown", u.onMouseDown_wysiwyg), t.removeEventListener("click", u.onClick_wysiwyg), t.removeEventListener(r.isIE ? "textinput" : "input", u.onInput_wysiwyg), t.removeEventListener("keydown", u.onKeyDown_wysiwyg), t.removeEventListener("keyup", u.onKeyUp_wysiwyg), t.removeEventListener("paste", u.onPaste_wysiwyg), t.removeEventListener("copy", u.onCopy_wysiwyg), t.removeEventListener("cut", u.onCut_wysiwyg), t.removeEventListener("drop", u.onDrop_wysiwyg), t.removeEventListener("scroll", u.onScroll_wysiwyg), t.removeEventListener("mousemove", u.onMouseMove_wysiwyg), d._lineBreakerButton.removeEventListener("mousedown", u._onMouseDown_lineBreak), d._lineBreakerButton.removeEventListener("click", u._lineBreakerBind.a), e.element.lineBreaker_t.removeEventListener("mousedown", u._lineBreakerBind.t), e.element.lineBreaker_b.removeEventListener("mousedown", u._lineBreakerBind.b), u._lineBreakerBind = null, t.removeEventListener("touchstart", u.onMouseDown_wysiwyg, {
                                        passive: !0,
                                        useCapture: !1
                                    }), t.removeEventListener("focus", u.onFocus_wysiwyg), t.removeEventListener("blur", u.onBlur_wysiwyg), e.element.code.removeEventListener("keydown", u._codeViewAutoHeight), e.element.code.removeEventListener("keyup", u._codeViewAutoHeight), e.element.code.removeEventListener("paste", u._codeViewAutoHeight), e.element.resizingBar && e.element.resizingBar.removeEventListener("mousedown", u.onMouseDown_resizingBar), a.removeEventListener("resize", u.onResize_window), a.removeEventListener("scroll", u.onScroll_window)
                                },
                                _setResponsiveToolbar: function() {
                                    if (0 === o.length) return void(o = null);
                                    const e = u._responsiveButtonSize = ["default"],
                                        t = u._responsiveButtons = {
                                            default: o[0]
                                        };
                                    for (let n, i, l = 1, s = o.length; l < s; l++) i = o[l], n = 1 * i[0], e.push(n), t[n] = i[1]
                                }
                            },
                            h = {
                                core: d,
                                util: r,
                                onload: null,
                                onScroll: null,
                                onMouseDown: null,
                                onClick: null,
                                onInput: null,
                                onKeyDown: null,
                                onKeyUp: null,
                                onDrop: null,
                                onChange: null,
                                onCopy: null,
                                onCut: null,
                                onPaste: null,
                                onFocus: null,
                                onBlur: null,
                                showInline: null,
                                showController: null,
                                toggleCodeView: null,
                                toggleFullScreen: null,
                                imageUploadHandler: null,
                                videoUploadHandler: null,
                                audioUploadHandler: null,
                                onImageUploadBefore: null,
                                onVideoUploadBefore: null,
                                onAudioUploadBefore: null,
                                onImageUpload: null,
                                onVideoUpload: null,
                                onAudioUpload: null,
                                onImageUploadError: null,
                                onVideoUploadError: null,
                                onAudioUploadError: null,
                                setToolbarButtons: function(i) {
                                    d.submenuOff(), d.containerOff();
                                    const a = L._createToolBar(s, i, d.plugins, l);
                                    o = a.responsiveButtons, d._moreLayerActiveButton = null, u._setResponsiveToolbar(), e.element.toolbar.replaceChild(a._buttonTray, e.element._buttonTray);
                                    const c = k(e.element.originElement, d._getConstructed(e.element), l);
                                    e.element = c.element, e.tool = c.tool, l.iframe && (e.element.wysiwyg = d._wd.body), d._cachingButtons(), d.history._resetCachingButton(), d.activePlugins = [];
                                    const h = t;
                                    let g, p, m;
                                    t = a.pluginCallButtons;
                                    for (let e in t) r.hasOwn(t, e) && (g = n[e], p = t[e], g.active && p && (m = h[e], d.callPlugin(e, null, m || p), m && (p.parentElement.replaceChild(m, p), t[e] = m)));
                                    d.hasFocus && u._applyTagEffects(), d._variable.isCodeView && r.addClass(d._styleCommandMap.codeView, "active"), d._variable.isFullScreen && r.addClass(d._styleCommandMap.fullScreen, "active"), r.hasClass(e.element.wysiwyg, "se-show-block") && r.addClass(d._styleCommandMap.showBlocks, "active")
                                },
                                setOptions: function(s) {
                                    u._removeEvent(), d._resetComponents(), r.removeClass(d._styleCommandMap.showBlocks, "active"), r.removeClass(d._styleCommandMap.codeView, "active"), d._variable.isCodeView = !1, d._iframeAuto = null, d.plugins = s.plugins || d.plugins;
                                    const c = [l, s].reduce((function(e, t) {
                                            for (let n in t)
                                                if (r.hasOwn(t, n))
                                                    if ("plugins" === n && t[n] && e[n]) {
                                                        let i = e[n],
                                                            l = t[n];
                                                        i = i.length ? i : a.Object.keys(i).map((function(e) {
                                                            return i[e]
                                                        })), l = l.length ? l : a.Object.keys(l).map((function(e) {
                                                            return l[e]
                                                        })), e[n] = l.filter((function(e) {
                                                            return -1 === i.indexOf(e)
                                                        })).concat(i)
                                                    } else e[n] = t[n];
                                            return e
                                        }), {}),
                                        h = e.element,
                                        g = h.wysiwyg.innerHTML,
                                        p = L._setOptions(c, e, d.plugins, l);
                                    p.callButtons && (t = p.callButtons, d.initPlugins = {}), p.plugins && (d.plugins = n = p.plugins), 0 === h._menuTray.children.length && (this._menuTray = {}), o = p.toolbar.responsiveButtons, l = c, d.lang = i = l.lang, l.iframe && h.wysiwygFrame.addEventListener("load", (function() {
                                        r._setIframeDocument(this, l), d._setOptionsInit(h, g)
                                    })), h.editorArea.appendChild(h.wysiwygFrame), l.iframe || d._setOptionsInit(h, g)
                                },
                                setDefaultStyle: function(t) {
                                    const n = l._editorStyles = r._setDefaultOptionStyle(l, t),
                                        i = e.element;
                                    i.topArea.style.cssText = n.top, i.code.style.cssText = l._editorStyles.frame, i.code.style.display = "none", "auto" === l.height ? i.code.style.overflow = "hidden" : i.code.style.overflow = "", l.iframe ? (i.wysiwygFrame.style.cssText = n.frame, i.wysiwyg.style.cssText = n.editor) : i.wysiwygFrame.style.cssText = n.frame + n.editor
                                },
                                noticeOpen: function(e) {
                                    d.notice.open.call(d, e)
                                },
                                noticeClose: function() {
                                    d.notice.close.call(d)
                                },
                                save: function() {
                                    e.element.originElement.value = d.getContents(!1)
                                },
                                getContext: function() {
                                    return e
                                },
                                getContents: function(e) {
                                    return d.getContents(e)
                                },
                                getText: function() {
                                    return e.element.wysiwyg.textContent
                                },
                                getCharCount: function(t) {
                                    return t = "string" == typeof t ? t : l.charCounterType, d.getCharLength(d._charTypeHTML ? e.element.wysiwyg.innerHTML : e.element.wysiwyg.textContent, t)
                                },
                                getImagesInfo: function() {
                                    return e.image ? e.image._infoList : []
                                },
                                getFilesInfo: function(t) {
                                    return e[t] ? e[t]._infoList : []
                                },
                                insertImage: function(e) {
                                    d.plugins.image && e && (d.initPlugins.image ? d.plugins.image.submitAction.call(d, e) : d.callPlugin("image", d.plugins.image.submitAction.bind(d, e), null), d.focus())
                                },
                                insertHTML: function(e, t, n, i) {
                                    if ("string" == typeof e) {
                                        
                                        try {
                                            const t = s.createRange().createContextualFragment(e).childNodes;
                                            if (n) {
                                                const e = d._charTypeHTML ? "outerHTML" : "textContent";
                                                let n = "";
                                                for (let i = 0, l = t.length; i < l; i++) n += t[i][e];
                                                if (!d.checkCharCount(n, null)) return
                                            }
                                            let l, o, a, r;
                                            for (; l = t[0];) a = d.insertNode(l, o, !1), o = a.container || a, r || (r = a);
                                            const c = 3 === o.nodeType ? a.endOffset || o.textContent.length : o.childNodes.length;
                                            i ? d.setRange(r.container || r, r.startOffset || 0, o, c) : d.setRange(o, c, o, c)
                                        } catch (t) {
                                            d.execCommand("insertHTML", !1, e)
                                        }
                                    } else if (r.isComponent(e)) d.insertComponent(e, !1, n, !1);
                                    else {
                                        let t = null;
                                        (r.isFormatElement(e) || r.isMedia(e)) && (t = r.getFormatElement(d.getSelectionNode(), null)), d.insertNode(e, t, n)
                                    }
                                    d.effectNode = null, d.focus(), d.history.push(!1)
                                },
                                setContents: function(e) {
                                    d.setContents(e)
                                },
                                appendContents: function(t) {
                                    const n = d.convertContentsForEditor(t);
                                    if (d._variable.isCodeView) d._setCodeView(d._getCodeView() + "\n" + d.convertHTMLForCodeView(n));
                                    else {
                                        const t = r.createElement("DIV");
                                        t.innerHTML = n;
                                        const i = e.element.wysiwyg,
                                            l = t.children;
                                        for (let e = 0, t = l.length; e < t; e++) i.appendChild(l[e])
                                    }
                                    d.history.push(!1)
                                },
                                disabled: function() {
                                    e.tool.cover.style.display = "block", e.element.wysiwyg.setAttribute("contenteditable", !1), d.isDisabled = !0, l.codeMirrorEditor ? l.codeMirrorEditor.setOption("readOnly", !0) : e.element.code.setAttribute("disabled", "disabled")
                                },
                                enabled: function() {
                                    e.tool.cover.style.display = "none", e.element.wysiwyg.setAttribute("contenteditable", !0), d.isDisabled = !1, l.codeMirrorEditor ? l.codeMirrorEditor.setOption("readOnly", !1) : e.element.code.removeAttribute("disabled")
                                },
                                show: function() {
                                    const t = e.element.topArea.style;
                                    "none" === t.display && (t.display = l.display)
                                },
                                hide: function() {
                                    e.element.topArea.style.display = "none"
                                },
                                destroy: function() {
                                    d.submenuOff(), d.containerOff(), d.controllersOff(), d.notice && d.notice.close.call(d), d.modalForm && d.plugins.dialog.close.call(d), d.history._destroy(), u._removeEvent(), r.removeItem(e.element.toolbar), r.removeItem(e.element.topArea);
                                    for (let e in d) r.hasOwn(d, e) && delete d[e];
                                    for (let e in u) r.hasOwn(u, e) && delete u[e];
                                    for (let t in e) r.hasOwn(e, t) && delete e[t];
                                    for (let e in t) r.hasOwn(t, e) && delete t[e];
                                    for (let e in this) r.hasOwn(this, e) && delete this[e]
                                },
                                toolbar: {
                                    disabled: function() {
                                        e.tool.cover.style.display = "block"
                                    },
                                    enabled: function() {
                                        e.tool.cover.style.display = "none"
                                    },
                                    show: function() {
                                        d._isInline ? u._showToolbarInline() : (e.element.toolbar.style.display = "", e.element._stickyDummy.style.display = "")
                                    },
                                    hide: function() {
                                        d._isInline ? u._hideToolbar() : (e.element.toolbar.style.display = "none", e.element._stickyDummy.style.display = "none")
                                    }
                                }
                            };
                        d.functions = h;
                        let g = e.element,
                            p = g.originElement,
                            m = g.topArea;
                        return p.style.display = "none", m.style.display = "block", l.iframe && g.wysiwygFrame.addEventListener("load", (function() {
                            r._setIframeDocument(this, l), d._editorInit(!1, l.value), l.value = null
                        })), "object" == typeof p.nextElementSibling ? p.parentNode.insertBefore(m, p.nextElementSibling) : p.parentNode.appendChild(m), g.editorArea.appendChild(g.wysiwygFrame), g = p = m = null, l.iframe || (d._editorInit(!1, l.value), l.value = null), h
                    }(k(i, l.constructed, l.options), l.pluginCallButtons, l.plugins, l.options.lang, t, l._responsiveButtons)
                }
            };
        Object.defineProperty(window, "SUNEDITOR", {
            enumerable: !0,
            writable: !1,
            configurable: !1,
            value: A.init({
                plugins: w
            })
        })
    },
    ZED3: function(e, t, n) {
        "use strict";
        var i, l;
        i = "undefined" != typeof window ? window : this, l = function(e, t) {
            const n = {
                name: "component",
                set_container: function(e, t) {
                    const n = this.util.createElement("DIV");
                    return n.className = "se-component " + t, n.setAttribute("contenteditable", !1), n.appendChild(e), n
                },
                set_cover: function(e) {
                    const t = this.util.createElement("FIGURE");
                    return t.appendChild(e), t
                },
                create_caption: function() {
                    const e = this.util.createElement("FIGCAPTION");
                    return e.setAttribute("contenteditable", !0), e.innerHTML = "<div>" + this.lang.dialogBox.caption + "</div>", e
                }
            };
            return void 0 === t && (e.SUNEDITOR_MODULES || Object.defineProperty(e, "SUNEDITOR_MODULES", {
                enumerable: !0,
                writable: !1,
                configurable: !1,
                value: {}
            }), Object.defineProperty(e.SUNEDITOR_MODULES, "component", {
                enumerable: !0,
                writable: !1,
                configurable: !1,
                value: n
            })), n
        }, "object" == typeof e.exports ? e.exports = i.document ? l(i, !0) : function(e) {
            if (!e.document) throw new Error("SUNEDITOR_MODULES a window with a document");
            return l(e)
        } : l(i)
    },
    ee5k: function(e, t, n) {
        "use strict";
        var i, l;
        i = "undefined" != typeof window ? window : this, l = function(e, t) {
            const n = {
                name: "resizing",
                add: function(e) {
                    const t = e.icons,
                        n = e.context;
                    n.resizing = {
                        _resizeClientX: 0,
                        _resizeClientY: 0,
                        _resize_plugin: "",
                        _resize_w: 0,
                        _resize_h: 0,
                        _origin_w: 0,
                        _origin_h: 0,
                        _rotateVertical: !1,
                        _resize_direction: "",
                        _move_path: null,
                        _isChange: !1,
                        alignIcons: {
                            basic: t.align_justify,
                            left: t.align_left,
                            right: t.align_right,
                            center: t.align_center
                        }
                    };
                    let i = this.setController_resize.call(e);
                    n.resizing.resizeContainer = i, n.resizing.resizeDiv = i.querySelector(".se-modal-resize"), n.resizing.resizeDot = i.querySelector(".se-resize-dot"), n.resizing.resizeDisplay = i.querySelector(".se-resize-display");
                    let l = this.setController_button.call(e);
                    n.resizing.resizeButton = l;
                    let o = n.resizing.resizeHandles = n.resizing.resizeDot.querySelectorAll("span");
                    n.resizing.resizeButtonGroup = l.querySelector("._se_resizing_btn_group"), n.resizing.rotationButtons = l.querySelectorAll("._se_resizing_btn_group ._se_rotation"), n.resizing.percentageButtons = l.querySelectorAll("._se_resizing_btn_group ._se_percentage"), n.resizing.alignMenu = l.querySelector(".se-resizing-align-list"), n.resizing.alignMenuList = n.resizing.alignMenu.querySelectorAll("button"), n.resizing.alignButton = l.querySelector("._se_resizing_align_button"), n.resizing.autoSizeButton = l.querySelector("._se_resizing_btn_group ._se_auto_size"), n.resizing.captionButton = l.querySelector("._se_resizing_caption_button"), i.addEventListener("mousedown", (function(e) {
                        e.preventDefault()
                    })), l.addEventListener("mousedown", e.eventStop), o[0].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(e)), o[1].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(e)), o[2].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(e)), o[3].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(e)), o[4].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(e)), o[5].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(e)), o[6].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(e)), o[7].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(e)), l.addEventListener("click", this.onClick_resizeButton.bind(e)), n.element.relative.appendChild(i), n.element.relative.appendChild(l), i = null, l = null, o = null
                },
                setController_resize: function() {
                    const e = this.util.createElement("DIV");
                    return e.className = "se-controller se-resizing-container", e.style.display = "none", e.innerHTML = '<div class="se-modal-resize"></div><div class="se-resize-dot"><span class="tl"></span><span class="tr"></span><span class="bl"></span><span class="br"></span><span class="lw"></span><span class="th"></span><span class="rw"></span><span class="bh"></span><div class="se-resize-display"></div></div>', e
                },
                setController_button: function() {
                    const e = this.lang,
                        t = this.icons,
                        n = this.util.createElement("DIV");
                    return n.className = "se-controller se-controller-resizing", n.innerHTML = '<div class="se-arrow se-arrow-up"></div><div class="se-btn-group _se_resizing_btn_group"><button type="button" data-command="percent" data-value="1" class="se-tooltip _se_percentage"><span>100%</span><span class="se-tooltip-inner"><span class="se-tooltip-text">' + e.controller.resize100 + '</span></span></button><button type="button" data-command="percent" data-value="0.75" class="se-tooltip _se_percentage"><span>75%</span><span class="se-tooltip-inner"><span class="se-tooltip-text">' + e.controller.resize75 + '</span></span></button><button type="button" data-command="percent" data-value="0.5" class="se-tooltip _se_percentage"><span>50%</span><span class="se-tooltip-inner"><span class="se-tooltip-text">' + e.controller.resize50 + '</span></span></button><button type="button" data-command="auto" class="se-btn se-tooltip _se_auto_size">' + t.auto_size + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + e.controller.autoSize + '</span></span></button><button type="button" data-command="rotate" data-value="-90" class="se-btn se-tooltip _se_rotation">' + t.rotate_left + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + e.controller.rotateLeft + '</span></span></button><button type="button" data-command="rotate" data-value="90" class="se-btn se-tooltip _se_rotation">' + t.rotate_right + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + e.controller.rotateRight + '</span></span></button></div><div class="se-btn-group" style="padding-top: 0;"><button type="button" data-command="mirror" data-value="h" class="se-btn se-tooltip">' + t.mirror_horizontal + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + e.controller.mirrorHorizontal + '</span></span></button><button type="button" data-command="mirror" data-value="v" class="se-btn se-tooltip">' + t.mirror_vertical + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + e.controller.mirrorVertical + '</span></span></button><button type="button" data-command="onalign" class="se-btn se-tooltip _se_resizing_align_button">' + t.align_justify + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + e.toolbar.align + '</span></span></button><div class="se-btn-group-sub sun-editor-common se-list-layer se-resizing-align-list"><div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="se-btn-list se-tooltip" data-command="align" data-value="basic">' + t.align_justify + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + e.dialogBox.basic + '</span></span></button></li><li><button type="button" class="se-btn-list se-tooltip" data-command="align" data-value="left">' + t.align_left + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + e.dialogBox.left + '</span></span></button></li><li><button type="button" class="se-btn-list se-tooltip" data-command="align" data-value="center">' + t.align_center + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + e.dialogBox.center + '</span></span></button></li><li><button type="button" class="se-btn-list se-tooltip" data-command="align" data-value="right">' + t.align_right + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + e.dialogBox.right + '</span></span></button></li></ul></div></div><button type="button" data-command="caption" class="se-btn se-tooltip _se_resizing_caption_button">' + t.caption + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + e.dialogBox.caption + '</span></span></button><button type="button" data-command="revert" class="se-btn se-tooltip">' + t.revert + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + e.dialogBox.revertButton + '</span></span></button><button type="button" data-command="update" class="se-btn se-tooltip">' + t.modify + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + e.controller.edit + '</span></span></button><button type="button" data-command="delete" class="se-btn se-tooltip">' + t.delete + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + e.controller.remove + "</span></span></button></div>", n
                },
                _module_getSizeX: function(e, t, n, i) {
                    return t || (t = e._element), n || (n = e._cover), i || (i = e._container), t ? /%$/.test(t.style.width) ? (i && this.util.getNumber(i.style.width, 2) || 100) + "%" : t.style.width : ""
                },
                _module_getSizeY: function(e, t, n, i) {
                    return t || (t = e._element), n || (n = e._cover), i || (i = e._container), i && n ? this.util.getNumber(n.style.paddingBottom, 0) > 0 && !this.context.resizing._rotateVertical ? n.style.height : /%$/.test(t.style.height) && /%$/.test(t.style.width) ? (i && this.util.getNumber(i.style.height, 2) || 100) + "%" : t.style.height : t && t.style.height || ""
                },
                _module_setModifyInputSize: function(e, t) {
                    const n = e._onlyPercentage && this.context.resizing._rotateVertical;
                    e.proportion.checked = e._proportionChecked = "false" !== e._element.getAttribute("data-proportion");
                    let i = n ? "" : this.plugins.resizing._module_getSizeX.call(this, e);
                    if (i === e._defaultSizeX && (i = ""), e._onlyPercentage && (i = this.util.getNumber(i, 2)), e.inputX.value = i, t.setInputSize.call(this, "x"), !e._onlyPercentage) {
                        let t = n ? "" : this.plugins.resizing._module_getSizeY.call(this, e);
                        t === e._defaultSizeY && (t = ""), e._onlyPercentage && (t = this.util.getNumber(t, 2)), e.inputY.value = t
                    }
                    e.inputX.disabled = !!n, e.inputY.disabled = !!n, e.proportion.disabled = !!n, t.setRatio.call(this)
                },
                _module_setInputSize: function(e, t) {
                    if (e._onlyPercentage) "x" === t && e.inputX.value > 100 && (e.inputX.value = 100);
                    else if (e.proportion.checked && e._ratio && /\d/.test(e.inputX.value) && /\d/.test(e.inputY.value)) {
                        const n = e.inputX.value.replace(/\d+|\./g, "") || e.sizeUnit,
                            i = e.inputY.value.replace(/\d+|\./g, "") || e.sizeUnit;
                        if (n !== i) return;
                        const l = "%" === n ? 2 : 0;
                        "x" === t ? e.inputY.value = this.util.getNumber(e._ratioY * this.util.getNumber(e.inputX.value, l), l) + i : e.inputX.value = this.util.getNumber(e._ratioX * this.util.getNumber(e.inputY.value, l), l) + n
                    }
                },
                _module_setRatio: function(e) {
                    const t = e.inputX.value,
                        n = e.inputY.value;
                    if (e.proportion.checked && /\d+/.test(t) && /\d+/.test(n)) {
                        if ((t.replace(/\d+|\./g, "") || e.sizeUnit) !== (n.replace(/\d+|\./g, "") || e.sizeUnit)) e._ratio = !1;
                        else if (!e._ratio) {
                            const i = this.util.getNumber(t, 0),
                                l = this.util.getNumber(n, 0);
                            e._ratio = !0, e._ratioX = i / l, e._ratioY = l / i
                        }
                    } else e._ratio = !1
                },
                _module_sizeRevert: function(e) {
                    e._onlyPercentage ? e.inputX.value = e._origin_w > 100 ? 100 : e._origin_w : (e.inputX.value = e._origin_w, e.inputY.value = e._origin_h)
                },
                _module_saveCurrentSize: function(e) {
                    const t = this.plugins.resizing._module_getSizeX.call(this, e),
                        n = this.plugins.resizing._module_getSizeY.call(this, e);
                    e._element.setAttribute("data-size", t + "," + n), e._videoRatio && (e._videoRatio = n)
                },
                call_controller_resize: function(e, t) {
                    const n = this.context.resizing,
                        i = this.context[t];
                    n._resize_plugin = t;
                    const l = n.resizeContainer,
                        o = n.resizeDiv,
                        s = this.util.getOffset(e, this.context.element.wysiwygFrame),
                        a = n._rotateVertical = /^(90|270)$/.test(Math.abs(e.getAttribute("data-rotate")).toString()),
                        r = a ? e.offsetHeight : e.offsetWidth,
                        c = a ? e.offsetWidth : e.offsetHeight,
                        d = s.top,
                        u = s.left - this.context.element.wysiwygFrame.scrollLeft;
                    l.style.top = d + "px", l.style.left = u + "px", l.style.width = r + "px", l.style.height = c + "px", o.style.top = "0px", o.style.left = "0px", o.style.width = r + "px", o.style.height = c + "px";
                    let h = e.getAttribute("data-align") || "basic";
                    h = "none" === h ? "basic" : h;
                    const g = this.util.getParentElement(e, this.util.isComponent),
                        p = this.util.getParentElement(e, "FIGURE"),
                        m = this.plugins.resizing._module_getSizeX.call(this, i, e, p, g) || "auto",
                        f = i._onlyPercentage && "image" === t ? "" : ", " + (this.plugins.resizing._module_getSizeY.call(this, i, e, p, g) || "auto");
                    this.util.changeTxt(n.resizeDisplay, this.lang.dialogBox[h] + " (" + m + f + ")"), n.resizeButtonGroup.style.display = i._resizing ? "" : "none";
                    const _ = !i._resizing || i._resizeDotHide || i._onlyPercentage ? "none" : "flex",
                        b = n.resizeHandles;
                    for (let e = 0, t = b.length; e < t; e++) b[e].style.display = _;
                    if (i._resizing) {
                        const e = n.rotationButtons;
                        e[0].style.display = e[1].style.display = i._rotation ? "" : "none"
                    }
                    const v = n.alignMenuList;
                    this.util.changeElement(n.alignButton.firstElementChild, n.alignIcons[h]);
                    for (let e = 0, t = v.length; e < t; e++) v[e].getAttribute("data-value") === h ? this.util.addClass(v[e], "on") : this.util.removeClass(v[e], "on");
                    const y = n.percentageButtons,
                        C = /%$/.test(e.style.width) && /%$/.test(g.style.width) ? this.util.getNumber(g.style.width, 0) / 100 + "" : "";
                    for (let e = 0, t = y.length; e < t; e++) y[e].getAttribute("data-value") === C ? this.util.addClass(y[e], "active") : this.util.removeClass(y[e], "active");
                    i._captionShow ? (n.captionButton.style.display = "", this.util.getChildElement(e.parentNode, "figcaption") ? (this.util.addClass(n.captionButton, "active"), i._captionChecked = !0) : (this.util.removeClass(n.captionButton, "active"), i._captionChecked = !1)) : n.captionButton.style.display = "none", this.currentControllerName !== t && (this.util.setDisabledButtons(!0, this.resizingDisabledButtons), this.controllersOn(n.resizeContainer, n.resizeButton, this.util.setDisabledButtons.bind(this, !1, this.resizingDisabledButtons), e, t));
                    const w = this.context.element.wysiwygFrame.offsetWidth - u - n.resizeButton.offsetWidth;
                    n.resizeButton.style.top = c + d + 60 + "px", n.resizeButton.style.left = u + (w < 0 ? w : 0) + "px", n.resizeButton.firstElementChild.style.left = w < 0 ? 20 - w + "px" : "20px", n._resize_w = r, n._resize_h = c;
                    const x = (e.getAttribute("origin-size") || "").split(",");
                    return n._origin_w = x[0] || e.naturalWidth, n._origin_h = x[1] || e.naturalHeight, {
                        w: r,
                        h: c,
                        t: d,
                        l: u
                    }
                },
                _closeAlignMenu: null,
                openAlignMenu: function() {
                    this.util.addClass(this.context.resizing.alignButton, "on"), this.context.resizing.alignMenu.style.display = "block", this.plugins.resizing._closeAlignMenu = function() {
                        this.util.removeClass(this.context.resizing.alignButton, "on"), this.context.resizing.alignMenu.style.display = "none", this.removeDocEvent("mousedown", this.plugins.resizing._closeAlignMenu), this.plugins.resizing._closeAlignMenu = null
                    }.bind(this), this.addDocEvent("mousedown", this.plugins.resizing._closeAlignMenu)
                },
                onClick_resizeButton: function(e) {
                    e.stopPropagation();
                    const t = e.target,
                        n = t.getAttribute("data-command") || t.parentNode.getAttribute("data-command");
                    if (!n) return;
                    const i = t.getAttribute("data-value") || t.parentNode.getAttribute("data-value"),
                        l = this.context.resizing._resize_plugin,
                        o = this.context[l],
                        s = o._element,
                        a = this.plugins[l];
                    if (e.preventDefault(), "function" != typeof this.plugins.resizing._closeAlignMenu || (this.plugins.resizing._closeAlignMenu(), "onalign" !== n)) {
                        switch (n) {
                            case "auto":
                                this.plugins.resizing.resetTransform.call(this, s), a.setAutoSize.call(this), this.selectComponent(s, l);
                                break;
                            case "percent":
                                let e = this.plugins.resizing._module_getSizeY.call(this, o);
                                if (this.context.resizing._rotateVertical) {
                                    const t = s.getAttribute("data-percentage");
                                    t && (e = t.split(",")[1])
                                }
                                this.plugins.resizing.resetTransform.call(this, s), a.setPercentSize.call(this, 100 * i, null !== this.util.getNumber(e, 0) && /%$/.test(e) ? e : ""), this.selectComponent(s, l);
                                break;
                            case "mirror":
                                const t = s.getAttribute("data-rotate") || "0";
                                let n = s.getAttribute("data-rotateX") || "",
                                    r = s.getAttribute("data-rotateY") || "";
                                "h" === i && !this.context.resizing._rotateVertical || "v" === i && this.context.resizing._rotateVertical ? r = r ? "" : "180" : n = n ? "" : "180", s.setAttribute("data-rotateX", n), s.setAttribute("data-rotateY", r), this.plugins.resizing._setTransForm(s, t, n, r);
                                break;
                            case "rotate":
                                const c = this.context.resizing,
                                    d = 1 * s.getAttribute("data-rotate") + 1 * i,
                                    u = this._w.Math.abs(d) >= 360 ? 0 : d;
                                s.setAttribute("data-rotate", u), c._rotateVertical = /^(90|270)$/.test(this._w.Math.abs(u).toString()), this.plugins.resizing.setTransformSize.call(this, s, null, null), this.selectComponent(s, l);
                                break;
                            case "onalign":
                                return void this.plugins.resizing.openAlignMenu.call(this);
                            case "align":
                                const h = "basic" === i ? "none" : i;
                                a.setAlign.call(this, h, null, null, null), this.selectComponent(s, l);
                                break;
                            case "caption":
                                const g = !o._captionChecked;
                                if (a.openModify.call(this, !0), o._captionChecked = o.captionCheckEl.checked = g, a.update_image.call(this, !1, !1, !1), g) {
                                    const e = this.util.getChildElement(o._caption, (function(e) {
                                        return 3 === e.nodeType
                                    }));
                                    e ? this.setRange(e, 0, e, e.textContent.length) : o._caption.focus(), this.controllersOff()
                                } else this.selectComponent(s, l), a.openModify.call(this, !0);
                                break;
                            case "revert":
                                a.setOriginSize.call(this), this.selectComponent(s, l);
                                break;
                            case "update":
                                a.openModify.call(this), this.controllersOff();
                                break;
                            case "delete":
                                a.destroy.call(this)
                        }
                        this.history.push(!1)
                    }
                },
                resetTransform: function(e) {
                    const t = (e.getAttribute("data-size") || e.getAttribute("data-origin") || "").split(",");
                    this.context.resizing._rotateVertical = !1, e.style.maxWidth = "", e.style.transform = "", e.style.transformOrigin = "", e.setAttribute("data-rotate", ""), e.setAttribute("data-rotateX", ""), e.setAttribute("data-rotateY", ""), this.plugins[this.context.resizing._resize_plugin].setSize.call(this, t[0] ? t[0] : "auto", t[1] ? t[1] : "", !0)
                },
                setTransformSize: function(e, t, n) {
                    let i = e.getAttribute("data-percentage");
                    const l = this.context.resizing._rotateVertical,
                        o = 1 * e.getAttribute("data-rotate");
                    let s = "";
                    if (i && !l) i = i.split(","), "auto" === i[0] && "auto" === i[1] ? this.plugins[this.context.resizing._resize_plugin].setAutoSize.call(this) : this.plugins[this.context.resizing._resize_plugin].setPercentSize.call(this, i[0], i[1]);
                    else {
                        const i = this.util.getParentElement(e, "FIGURE"),
                            a = t || e.offsetWidth,
                            r = n || e.offsetHeight,
                            c = (l ? r : a) + "px",
                            d = (l ? a : r) + "px";
                        if (this.plugins[this.context.resizing._resize_plugin].cancelPercentAttr.call(this), this.plugins[this.context.resizing._resize_plugin].setSize.call(this, a + "px", r + "px", !0), i.style.width = c, i.style.height = this.context[this.context.resizing._resize_plugin]._caption ? "" : d, l) {
                            let e = a / 2 + "px " + a / 2 + "px 0",
                                t = r / 2 + "px " + r / 2 + "px 0";
                            s = 90 === o || -270 === o ? t : e
                        }
                    }
                    e.style.transformOrigin = s, this.plugins.resizing._setTransForm(e, o.toString(), e.getAttribute("data-rotateX") || "", e.getAttribute("data-rotateY") || ""), e.style.maxWidth = l ? "none" : "", this.plugins.resizing.setCaptionPosition.call(this, e)
                },
                _setTransForm: function(e, t, n, i) {
                    let l = (e.offsetWidth - e.offsetHeight) * (/-/.test(t) ? 1 : -1),
                        o = "";
                    if (/[1-9]/.test(t) && (n || i)) switch (o = n ? "Y" : "X", t) {
                        case "90":
                            o = n && i ? "X" : i ? o : "";
                            break;
                        case "270":
                            l *= -1, o = n && i ? "Y" : n ? o : "";
                            break;
                        case "-90":
                            o = n && i ? "Y" : n ? o : "";
                            break;
                        case "-270":
                            l *= -1, o = n && i ? "X" : i ? o : "";
                            break;
                        default:
                            o = ""
                    }
                    t % 180 == 0 && (e.style.maxWidth = ""), e.style.transform = "rotate(" + t + "deg)" + (n ? " rotateX(" + n + "deg)" : "") + (i ? " rotateY(" + i + "deg)" : "") + (o ? " translate" + o + "(" + l + "px)" : "")
                },
                setCaptionPosition: function(e) {
                    const t = this.util.getChildElement(this.util.getParentElement(e, "FIGURE"), "FIGCAPTION");
                    t && (t.style.marginTop = (this.context.resizing._rotateVertical ? e.offsetWidth - e.offsetHeight : 0) + "px")
                },
                onMouseDown_resize_handle: function(e) {
                    e.stopPropagation(), e.preventDefault();
                    const t = this.context.resizing,
                        n = t._resize_direction = e.target.classList[0];
                    t._resizeClientX = e.clientX, t._resizeClientY = e.clientY, this.context.element.resizeBackground.style.display = "block", t.resizeButton.style.display = "none", t.resizeDiv.style.float = /l/.test(n) ? "right" : /r/.test(n) ? "left" : "none";
                    const i = function(e) {
                            if ("keydown" === e.type && 27 !== e.keyCode) return;
                            const o = t._isChange;
                            t._isChange = !1, this.removeDocEvent("mousemove", l), this.removeDocEvent("mouseup", i), this.removeDocEvent("keydown", i), "keydown" === e.type ? (this.controllersOff(), this.context.element.resizeBackground.style.display = "none", this.plugins[this.context.resizing._resize_plugin].init.call(this)) : (this.plugins.resizing.cancel_controller_resize.call(this, n), o && this.history.push(!1))
                        }.bind(this),
                        l = this.plugins.resizing.resizing_element.bind(this, t, n, this.context[t._resize_plugin]);
                    this.addDocEvent("mousemove", l), this.addDocEvent("mouseup", i), this.addDocEvent("keydown", i)
                },
                resizing_element: function(e, t, n, i) {
                    const l = i.clientX,
                        o = i.clientY;
                    let s = n._element_w,
                        a = n._element_h;
                    const r = n._element_w + (/r/.test(t) ? l - e._resizeClientX : e._resizeClientX - l),
                        c = n._element_h + (/b/.test(t) ? o - e._resizeClientY : e._resizeClientY - o),
                        d = n._element_h / n._element_w * r;
                    /t/.test(t) && (e.resizeDiv.style.top = n._element_h - (/h/.test(t) ? c : d) + "px"), /l/.test(t) && (e.resizeDiv.style.left = n._element_w - r + "px"), /r|l/.test(t) && (e.resizeDiv.style.width = r + "px", s = r), /^(t|b)[^h]$/.test(t) ? (e.resizeDiv.style.height = d + "px", a = d) : /^(t|b)h$/.test(t) && (e.resizeDiv.style.height = c + "px", a = c), e._resize_w = s, e._resize_h = a, this.util.changeTxt(e.resizeDisplay, this._w.Math.round(s) + " x " + this._w.Math.round(a)), e._isChange = !0
                },
                cancel_controller_resize: function(e) {
                    const t = this.context.resizing._rotateVertical;
                    this.controllersOff(), this.context.element.resizeBackground.style.display = "none";
                    let n = this._w.Math.round(t ? this.context.resizing._resize_h : this.context.resizing._resize_w),
                        i = this._w.Math.round(t ? this.context.resizing._resize_w : this.context.resizing._resize_h);
                    if (!t && !/%$/.test(n)) {
                        const e = 16,
                            t = this.context.element.wysiwygFrame.clientWidth - 2 * e - 2;
                        this.util.getNumber(n, 0) > t && (i = this._w.Math.round(i / n * t), n = t)
                    }
                    const l = this.context.resizing._resize_plugin;
                    this.plugins[l].setSize.call(this, n, i, !1, e), this.selectComponent(this.context[l]._element, l)
                }
            };
            return void 0 === t && (e.SUNEDITOR_MODULES || Object.defineProperty(e, "SUNEDITOR_MODULES", {
                enumerable: !0,
                writable: !1,
                configurable: !1,
                value: {}
            }), Object.defineProperty(e.SUNEDITOR_MODULES, "resizing", {
                enumerable: !0,
                writable: !1,
                configurable: !1,
                value: n
            })), n
        }, "object" == typeof e.exports ? e.exports = i.document ? l(i, !0) : function(e) {
            if (!e.document) throw new Error("SUNEDITOR_MODULES a window with a document");
            return l(e)
        } : l(i)
    },
    "gjS+": function(e, t, n) {
        "use strict";
        var i, l;
        i = "undefined" != typeof window ? window : this, l = function(e, t) {
            const n = {
                name: "fileManager",
                _xmlHttp: null,
                upload: function(e, t, n, i, l) {
                    this.showLoading();
                    const o = this.plugins.fileManager,
                        s = o._xmlHttp = this.util.getXMLHttpRequest();
                    if (s.onreadystatechange = o._callBackUpload.bind(this, s, i, l), s.open("post", e, !0), null !== t && "object" == typeof t && this._w.Object.keys(t).length > 0)
                        for (let e in t) s.setRequestHeader(e, t[e]);
                    s.send(n)
                },
                _callBackUpload: function(e, t, n) {
                    if (4 === e.readyState)
                        if (200 === e.status) try {
                            t(e)
                        } catch (e) {
                            throw Error('[SUNEDITOR.fileManager.upload.callBack.fail] cause : "' + e.message + '"')
                        } finally {
                            this.closeLoading()
                        } else {
                            this.closeLoading();
                            const t = e.responseText ? JSON.parse(e.responseText) : e;
                            if ("function" != typeof n || n("", t, this)) {
                                const n = "[SUNEDITOR.fileManager.upload.serverException] status: " + e.status + ", response: " + (t.errorMessage || e.responseText);
                                throw this.functions.noticeOpen(n), Error(n)
                            }
                        }
                },
                checkInfo: function(e, t, n, i, l) {
                    let o = [];
                    for (let e = 0, n = t.length; e < n; e++) o = o.concat([].slice.call(this.context.element.wysiwyg.getElementsByTagName(t[e])));
                    const s = this.context[e],
                        a = s._infoList,
                        r = this.plugins.fileManager.setInfo.bind(this);
                    if (o.length === a.length) {
                        if (this._componentsInfoReset) {
                            for (let t = 0, i = o.length; t < i; t++) r(e, o[t], n, null, l);
                            return
                        } {
                            let e = !1;
                            for (let t, n = 0, i = a.length; n < i; n++)
                                if (t = a[n], 0 === o.filter((function(e) {
                                        return t.src === e.src && t.index.toString() === e.getAttribute("data-index")
                                    })).length) {
                                    e = !0;
                                    break
                                } if (!e) return
                        }
                    }
                    const c = l ? this.context.resizing._resize_plugin : "";
                    l && (this.context.resizing._resize_plugin = e);
                    const d = [],
                        u = [];
                    for (let e = 0, t = a.length; e < t; e++) u[e] = a[e].index;
                    for (let t, a = 0, c = o.length; a < c; a++) t = o[a], this.util.getParentElement(t, this.util.isMediaComponent) && /FIGURE/i.test(t.parentElement.nodeName) ? !t.getAttribute("data-index") || u.indexOf(1 * t.getAttribute("data-index")) < 0 ? (d.push(s._infoIndex), t.removeAttribute("data-index"), r(e, t, n, null, l)) : d.push(1 * t.getAttribute("data-index")) : (d.push(s._infoIndex), i(t));
                    for (let e, t = 0; t < a.length; t++) e = a[t].index, d.indexOf(e) > -1 || (a.splice(t, 1), "function" == typeof n && n(null, e, "delete", null, 0, this), t--);
                    l && (this.context.resizing._resize_plugin = c)
                },
                setInfo: function(e, t, n, i, l) {
                    const o = l ? this.context.resizing._resize_plugin : "";
                    l && (this.context.resizing._resize_plugin = e);
                    const s = this.plugins[e],
                        a = this.context[e],
                        r = a._infoList;
                    let c = t.getAttribute("data-index"),
                        d = null,
                        u = "";
                    if (i || (i = {
                            name: t.getAttribute("data-file-name") || ("string" == typeof t.src ? t.src.split("/").pop() : ""),
                            size: t.getAttribute("data-file-size") || 0
                        }), !c || this._componentsInfoInit) u = "create", c = a._infoIndex++, t.setAttribute("data-index", c), t.setAttribute("data-file-name", i.name), t.setAttribute("data-file-size", i.size), d = {
                        src: t.src,
                        index: 1 * c,
                        name: i.name,
                        size: i.size
                    }, r.push(d);
                    else {
                        u = "update", c *= 1;
                        for (let e = 0, t = r.length; e < t; e++)
                            if (c === r[e].index) {
                                d = r[e];
                                break
                            } d || (c = a._infoIndex++, d = {
                            index: c
                        }, r.push(d)), d.src = t.src, d.name = t.getAttribute("data-file-name"), d.size = 1 * t.getAttribute("data-file-size")
                    }
                    if (d.element = t, d.delete = s.destroy.bind(this, t), d.select = function(e) {
                            e.scrollIntoView(!0), this._w.setTimeout(s.select.bind(this, e))
                        }.bind(this, t), l) {
                        if (!t.getAttribute("origin-size") && t.naturalWidth && t.setAttribute("origin-size", t.naturalWidth + "," + t.naturalHeight), !t.getAttribute("data-origin")) {
                            const e = this.util.getParentElement(t, this.util.isMediaComponent),
                                n = this.util.getParentElement(t, "FIGURE"),
                                i = this.plugins.resizing._module_getSizeX.call(this, a, t, n, e),
                                l = this.plugins.resizing._module_getSizeY.call(this, a, t, n, e);
                            t.setAttribute("data-origin", i + "," + l), t.setAttribute("data-size", i + "," + l)
                        }
                        if (!t.style.width) {
                            const e = (t.getAttribute("data-size") || t.getAttribute("data-origin") || "").split(",");
                            s.onModifyMode.call(this, t, null), s.applySize.call(this, e[0], e[1])
                        }
                        this.context.resizing._resize_plugin = o
                    }
                    "function" == typeof n && n(t, c, u, d, --a._uploadFileLength < 0 ? 0 : a._uploadFileLength, this)
                },
                deleteInfo: function(e, t, n) {
                    if (t >= 0) {
                        const i = this.context[e]._infoList;
                        for (let e = 0, l = i.length; e < l; e++)
                            if (t === i[e].index) return i.splice(e, 1), void("function" == typeof n && n(null, t, "delete", null, 0, this))
                    }
                },
                resetInfo: function(e, t) {
                    const n = this.context[e];
                    if ("function" == typeof t) {
                        const e = n._infoList;
                        for (let n = 0, i = e.length; n < i; n++) t(null, e[n].index, "delete", null, 0, this)
                    }
                    n._infoList = [], n._infoIndex = 0
                }
            };
            return void 0 === t && (e.SUNEDITOR_MODULES || Object.defineProperty(e, "SUNEDITOR_MODULES", {
                enumerable: !0,
                writable: !1,
                configurable: !1,
                value: {}
            }), Object.defineProperty(e.SUNEDITOR_MODULES, "fileManager", {
                enumerable: !0,
                writable: !1,
                configurable: !1,
                value: n
            })), n
        }, "object" == typeof e.exports ? e.exports = i.document ? l(i, !0) : function(e) {
            if (!e.document) throw new Error("SUNEDITOR_MODULES a window with a document");
            return l(e)
        } : l(i)
    }
});