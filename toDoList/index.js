


function mainJob() {
    let currentInput = document.getElementById("myInput");

    if (currentInput.value === "") {
        flashRed();
    } else {
        let taskComponent = document.createElement("p");
        let nodeText = document.createTextNode(currentInput.value);
        taskComponent.appendChild(nodeText);
        document.getElementById("list").appendChild(taskComponent);
        document.getElementById("myInput").value = "";
        
    }
    
    
    
}

function flashRed() {
    document.body.style.backgroundColor = "red";
    setTimeout(function(){ document.body.style.backgroundColor = "white";console.log("flash1");}, 300);
    setTimeout(function(){ document.body.style.backgroundColor = "red";}, 600);
    setTimeout(function(){ document.body.style.backgroundColor = "white";console.log("flash2");}, 900);
}