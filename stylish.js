function Stylish(){
    console.log("Stylish is running");
    
    this.currentStyle = 'longWild';
    this.lastStyle = null;

    this.hair_container = document.querySelector(".hair-container");
    this.tool_bar = document.querySelector(".tool-bar");
        
    this.currentStyle = "longWild";
    this.currentTool = "cut";
    
    this.buildTools();
}

Stylish.prototype.updateStyle = function(){
    this.hair_container.className = "hair-container " + this.currentStyle;
    this.buildTools();
}

Stylish.prototype.findNextStyle = function(){
    var next_style = null;
        try{
            next_style = styleMaps[this.currentStyle][this.currentTool];
        } catch(e){}
        if(next_style){
            this.lastStyle = this.currentStyle;
            this.currentStyle = next_style;
            this.updateStyle();
    }
}

Stylish.prototype.selectTool = function(tool_id){
    this.currentTool = tool_id;
    this.findNextStyle();
}

Stylish.prototype.buildTools = function(){
    while(this.tool_bar.firstChild){
        this.tool_bar.removeChild(this.tool_bar.firstChild);
    }
    var info = styleMaps[this.currentStyle];
    for(var i in info){
        if(i !== "name" && i !== "map"){
            const id = i;
            var icon = document.createElement("button");
                icon.textContent = i;
                icon.addEventListener("click",()=>this.selectTool(id));
            this.tool_bar.appendChild(icon);
        }
    }
    var undoIcon = document.createElement("button");
                undoIcon.textContent = "undo";
                undoIcon.addEventListener("click",(e)=>{
                    console.log("undo");
                    if(this.lastStyle){
                        this.currentStyle = this.lastStyle;
                        this.lastStyle = null;
                        this.updateStyle();
                    }
                });
            this.tool_bar.appendChild(undoIcon);
    
    var resetIcon = document.createElement("button");
            resetIcon.textContent = "reset";
            resetIcon.addEventListener("click",(e)=>{
                console.log("reset");
                this.currentStyle = 'longWild';
                console.log(this.currentStyle);
                this.lastStyle = null;
                this.updateStyle();
            });
        this.tool_bar.appendChild(resetIcon);
}
