"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DialogRangeType_1 = require("plugin-dialog/DialogRangeType");
const DialogWindowType_1 = require("plugin-dialog/DialogWindowType");
class DialogBase {
    constructor() {
        this.id = null;
        /**
         * #### type
         * Specify the layout type of the dialog screen.
         * See the **plugin-dialog/DialogWindowType** module for details.
         */
        this.type = DialogWindowType_1.default.ONE;
        /**
         * #### width
         * Specify the width of the dialog screen.
         * If not specified, specification from the style sheet is required.
         */
        this.width = null;
        /**
         * #### widthRange
         * Specify length unit when specifying layout screen width.
         * If not specified, "PIXEL(px)" is applied by default.
         */
        this.widthRange = DialogRangeType_1.default.PIXEL;
        /**
         * #### height
         * Specify the height of the dialog screen.
         * If not specified, specification from the style sheet is required.
         */
        this.height = null;
        /**
         * #### heightRange
         * Specify length unit when specifying layout screen height.
         * If not specified, "PIXEL(px)" is applied by default.
         */
        this.heightRange = DialogRangeType_1.default.PIXEL;
        /**
         * #### header
         * Specify header content.
         */
        this.header = "";
        /**
         * #### footer
         * Specify footer content.
         */
        this.footer = "";
        /**
         * #### content
         * Specify footer content.
         */
        this.content = "";
        this.mainElement = null;
        this.bgElement = null;
        this.windowElement = null;
    }
    /**
     * #### handleOpen
     * Specify this for the process to be executed when the dialog is displayed.
     */
    handleOpen() { }
    /**
     * #### handleClose
     * Specify this for the process to be executed when the dialog display ends.
     */
    handleClose() { }
}
exports.default = DialogBase;
