"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Dom_1 = require("Dom");
const Util_1 = require("Util");
const DialogWindowType_1 = require("plugin-dialog/DialogWindowType");
const DialogRangeType_1 = require("plugin-dialog/DialogRangeType");
const DialogBase_1 = require("plugin-dialog/DialogBase");
class Dialog extends DialogBase_1.default {
    constructor() {
        super();
        this.id = Util_1.default.uniqId();
    }
    static convertRange(rangeType) {
        if (rangeType == DialogRangeType_1.default.PIXEL) {
            return "px";
        }
        else if (rangeType == DialogRangeType_1.default.PERSEC) {
            return "%";
        }
        else if (rangeType == DialogRangeType_1.default.INCHI) {
            return "in";
        }
    }
    /**
     * #### (static) open
     * By executing this method, you can display a dialog without initialization.
     * @returns {Dialog} Dialog class object
     */
    static open() {
        const d_ = new this();
        d_.open();
        return d_;
    }
    /**
     * #### open
     * Start displaying dialog.
     * @returns {Dialog} Dialog class object
     */
    open() {
        if (!(0, Dom_1.default)("style#d-dialog-stylesheet").length) {
            let stylesheet = use("plugin-dialog/style.html");
            stylesheet = Util_1.default.base64Decode(stylesheet);
            (0, Dom_1.default)("body").append(stylesheet);
        }
        let mainElement = document.createElement("d-dialog");
        let bgElement = document.createElement("d-bg");
        let windowElement = document.createElement("d-window");
        mainElement.setAttribute("d-id", this.id);
        if (this.width) {
            windowElement.style.width = this.width + Dialog.convertRange(this.widthRange);
        }
        if (this.height) {
            windowElement.style.height = this.height + Dialog.convertRange(this.heightRange);
        }
        let html = "";
        if (this.type == DialogWindowType_1.default.ONE) {
            html = Util_1.default.loadHtml("plugin-dialog/one.html", {
                "d-content": this.content,
            });
        }
        else if (this.type == DialogWindowType_1.default.HEADER_CONTENT) {
            html = Util_1.default.loadHtml("plugin-dialog/header_content.html", {
                "d-header": this.header,
                "d-content": this.content,
            });
        }
        else if (this.type == DialogWindowType_1.default.CONTENT_FOOTER) {
            html = Util_1.default.loadHtml("plugin-dialog/content_footer.html", {
                "d-content": this.content,
                "d-footer": this.footer,
            });
        }
        else if (this.type == DialogWindowType_1.default.HEADER_CONTENT_FOOTER) {
            html = Util_1.default.loadHtml("plugin-dialog/header_content_footer.html", {
                "d-header": this.header,
                "d-content": this.content,
                "d-footer": this.footer,
            });
        }
        ;
        windowElement.innerHTML = html;
        bgElement.append(windowElement);
        mainElement.append(bgElement);
        (0, Dom_1.default)("body").append(mainElement);
        this.windowElement = (0, Dom_1.default)(windowElement);
        if (this.handleOpen) {
            this.handleOpen();
        }
        this.windowElement.child("[d-close]").onClick(() => {
            this.close();
        });
        return this;
    }
    /**
     * #### close
     * Exit the display dialog.
     */
    close() {
        if (this.handleClose) {
            this.handleClose();
        }
        (0, Dom_1.default)("d-dialog[d-id=\"" + this.id + "\"]").remove();
        if (!(0, Dom_1.default)("d-dialog").length) {
            (0, Dom_1.default)("style#d-dialog-stylesheet").remove();
        }
    }
}
exports.default = Dialog;
