class Controls{
    constructor(){
        this.forward = false;
        this.left = false;
        this.right = false;
        this.reverse = false;
console.log("Constructor called!");
        this.#addKeyboardListeners();


    }
    #addKeyboardListeners(){ //private method that's why we use #
        document.onkeydown=(event)=>{ //arrow fn
            switch(event.key){ //event.key don't know
                case "ArrowLeft":
                    this.left = true;
                    break;
                case "ArrowRight":
                    this.right = true;
                    break;
                case "ArrowUp":
                    this.forward = true;
                    break;
                    case "ArrowDown":
                    this.reverse = true;
                    break;

            }
           console.table(this);
        };

         document.onkeyup=(event)=>{
            switch(event.key){ //event.key don't know
                case "ArrowLeft":
                    this.left = false;
                    break;
                case "ArrowRight":
                    this.right = false;
                    break;
                case "ArrowUp":
                    this.forward = false;
                    break;
                    case "ArrowDown":
                    this.reverse = false;
                    break;

            }
            console.table(this);

    };
}
}



