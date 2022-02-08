function addTasks(){
    var outer = document.createElement("div");
    outer.className = "outer";
    document.getElementById("items").appendChild(outer);
    var addTask = document.createElement("p");
    addTask.className = "item";
    addTask.innerHTML = document.getElementById("inputText").value;
    outer.appendChild(addTask);
    //Crossing button
    var crossBtn = document.createElement("button");
    crossBtn.innerHTML = "Cut";
    crossBtn.className = "crossBtn";
    outer.appendChild(crossBtn);
    var cross = document.getElementsByClassName("crossBtn");
    var j;
    for(j=0;j<cross.length;j++){
        cross[j].onclick = function(){
            var crossDiv = this.parentElement;
            var childDiv = crossDiv.children[0];
            childDiv.style.textDecoration = "line-through";
        }
    }
    //Closing button
    var delButton = document.createElement("button");
    delButton.innerHTML = "Done"; //HTML code for cross mark
    delButton.className = "delButton";
    outer.appendChild(delButton);
    var close = document.getElementsByClassName("delButton");
    var i;
    for(i=0;i<close.length;i++){
        close[i].onclick = function(){
            var closeDiv = this.parentElement;
            closeDiv.style.display = "none";
        }
    }
}