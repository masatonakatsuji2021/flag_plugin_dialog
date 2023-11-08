import Dom from "Dom";
import Util from "Util";
import DialogWindowType from "plugin-dialog/DialogWindowType";
import DialogRangeType from "plugin-dialog/DialogRangeType";
import DialogBase from "plugin-dialog/DialogBase";

export default class Dialog extends DialogBase{

    constructor(){
        super();
        this.id = Util.uniqId();
    }

    private static convertRange(rangeType){
        if(rangeType == DialogRangeType.PIXEL){
            return "px";
        }
        else if(rangeType == DialogRangeType.PERSEC){
            return "%";
        }
        else if(rangeType == DialogRangeType.INCHI){
            return "in";
        }
    }

    /**
     * #### (static) open
     * By executing this method, you can display a dialog without initialization.
     * @returns {Dialog} Dialog class object
     */
    public static open() : Dialog{
        const d_ = new this();
        d_.open();
        return d_;
    }

    /**
     * #### open
     * Start displaying dialog.
     * @returns {Dialog} Dialog class object
     */
    public open() : Dialog{

        if(!Dom("style#d-dialog-stylesheet").length){
            let stylesheet =use("plugin-dialog/style.html");
            stylesheet = Util.base64Decode(stylesheet);
            Dom("body").append(stylesheet);
        }

        let mainElement = document.createElement("d-dialog");
        let bgElement = document.createElement("d-bg");
        let windowElement = document.createElement("d-window");

        mainElement.setAttribute("d-id", this.id);

        if(this.width){
            windowElement.style.width = this.width + Dialog.convertRange(this.widthRange);
        }

        if(this.height){
            windowElement.style.height = this.height + Dialog.convertRange(this.heightRange);
        }

        let html = "";
        if(this.type == DialogWindowType.ONE){
            html = Util.loadHtml("plugin-dialog/one.html", {
                "d-content": this.content,
            });
        }
        else if(this.type == DialogWindowType.HEADER_CONTENT){
            html = Util.loadHtml("plugin-dialog/header_content.html", {
                "d-header": this.header,
                "d-content": this.content,
            });
        }
        else if(this.type == DialogWindowType.CONTENT_FOOTER){
            html = Util.loadHtml("plugin-dialog/content_footer.html", {
                "d-content": this.content,
                "d-footer": this.footer,
            });
        }
        else if(this.type == DialogWindowType.HEADER_CONTENT_FOOTER){
            html = Util.loadHtml("plugin-dialog/header_content_footer.html", {
                "d-header": this.header,
                "d-content": this.content,
                "d-footer": this.footer,
            });
        };
        windowElement.innerHTML = html;

        bgElement.append(windowElement);
        mainElement.append(bgElement);

        Dom("body").append(mainElement);

        this.windowElement = Dom(windowElement);

        if(this.handleOpen){
            this.handleOpen();
        }

        this.windowElement.child("[d-close]").onClick(()=>{
            this.close();
        });

        return this;
    }

    /**
     * #### close
     * Exit the display dialog.
     */
    public close() : void{

        if(this.handleClose){
            this.handleClose();
        }

        Dom("d-dialog[d-id=\"" + this.id + "\"]").remove();
        if(!Dom("d-dialog").length){
            Dom("style#d-dialog-stylesheet").remove();
        }
    }

}