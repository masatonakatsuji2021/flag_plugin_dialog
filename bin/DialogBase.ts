import DialogRangeType from "plugin-dialog/DialogRangeType";
import DialogWindowType from "plugin-dialog/DialogWindowType";
import DomControl from "DomControl";

export default class DialogBase{
    id : string = null;

    /**
     * #### type
     * Specify the layout type of the dialog screen.  
     * See the **plugin-dialog/DialogWindowType** module for details.
     */
    type : number = DialogWindowType.ONE;

    /**
     * #### width
     * Specify the width of the dialog screen.  
     * If not specified, specification from the style sheet is required.
     */
    width : number = null;

    /**
     * #### widthRange
     * Specify length unit when specifying layout screen width.  
     * If not specified, "PIXEL(px)" is applied by default.
     */
    widthRange: number = DialogRangeType.PIXEL;

    /**
     * #### height
     * Specify the height of the dialog screen.  
     * If not specified, specification from the style sheet is required.
     */
    height : number = null;

    /**
     * #### heightRange
     * Specify length unit when specifying layout screen height.  
     * If not specified, "PIXEL(px)" is applied by default.
     */
    heightRange: number = DialogRangeType.PIXEL;

    /**
     * #### header
     * Specify header content.
     */
    header : string = "";

    /**
     * #### footer
     * Specify footer content.
     */
    footer : string = "";

    /**
     * #### content
     * Specify footer content.
     */
    content : string = "";

    /**
     * #### handleOpen
     * Specify this for the process to be executed when the dialog is displayed.
     */
    handleOpen(){}

    /**
     * #### handleClose
     * Specify this for the process to be executed when the dialog display ends.
     */
    handleClose(){}

    mainElement = null;
    bgElement = null;
    windowElement : DomControl = null;
}