function Stylish(){
    console.log("Stylish is running");
    
    this.hair_container = document.querySelector(".hair-container");
    this.detector_container = document.querySelector(".detector-container");
    this.tool_bar = document.querySelector(".tool-bar");
    this.detectors = {};
    
    this.selectLocation = this.selectLocation.bind(this);
    this.selectTool = this.selectTool.bind(this);
    
    this.currentStyle = "longWild";
    this.currentTool = "cut";
    this.availableTools = [];
    
    this.cursor = document.querySelector('#cursor');
    this.mouseFollow = false;

    this.showIntroAnimation = true;
    
    this.setUp();
}

Stylish.prototype.setUp = function(){
    for(var y= 0; y < 6; y++){
        var row = document.createElement("div");
        row.className = "inline-flex";
        for(var x = 0; x < 3; x++){
            var detector = document.createElement("div");
                detector.className = "detector";
                detector.id = "detector_" + x + "_" + y;
                detector.innerHTML = "stylish";
            row.appendChild(detector);
        }
        this.detector_container.appendChild(row);
    }
    for(var y= 0; y < 6; y++){
        for(var x = 0; x < 3; x++){
            var d = document.querySelector("#detector_" + x + "_" + y);
            d.addEventListener("click",(e) => this.selectLocation(e.target.id))
            this.detectors[x + "_" + y] = d;
        }
    }
    
    this.buildTools();
    
    if(this.showIntroAnimation){
        this.introAnimation();
    }
}

Stylish.prototype.introAnimation = function(){
    
}

Stylish.prototype.start = function(){
    this.interval = requestAnimationFrame(()=>{
        this.updateCursor();
    })
}

Stylish.prototype.updateCursor = function(){
    console.log("updating cursor");
}

Stylish.prototype.updateStyle = function(newStyle){
    console.log("new style! " + newStyle);
    this.currentStyle = newStyle;
    this.hair_container.className = "hair-container " + newStyle;
    this.buildTools();
}

Stylish.prototype.selectLocation = function(id){
    var x = id.split("_")[1];
    var y = id.split("_")[2];
    console.log("x: " + x);
    console.log("y: " + y);
    var map = this.styleMaps[this.currentStyle]['map'];
    var hairThere = map[y][x];
    console.log(hairThere);
    if(hairThere){
        console.log("hair found!");
        this.findNextStyle();
    }
}

Stylish.prototype.findNextStyle = function(){
    console.log("finding next style");
    var next_style = null;
        try{
            next_style = styleMaps[this.currentStyle][this.currentTool];
        } catch(e){}
        if(next_style){
            this.updateStyle(next_style);
    }
}

Stylish.prototype.selectTool = function(tool_id){
    var tool = tool_id.split("_")[0];
    this.currentTool = tool;
    console.log("tool selected " + this.currentTool);
    this.cursor.className = tool_id;
    //temp without tools
    this.findNextStyle();
}

Stylish.prototype.buildTools = function(){
    while(this.tool_bar.firstChild){
        this.tool_bar.removeChild(this.tool_bar.firstChild);
    }
    var info = styleMaps[this.currentStyle];
    for(var i in info){
        if(i !== "name" && i !== "map"){
            var icon = document.createElement("button");
                icon.textContent = i;
                icon.id = i + "_icon";
                icon.addEventListener("click",(e)=>this.selectTool(e.target.id));
            this.tool_bar.appendChild(icon);
        }
    }
}
