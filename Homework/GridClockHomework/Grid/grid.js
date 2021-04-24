var color=["blue","green","red", "yellow"]
var nextcolor=0;
function changeColor(){
    var outerdiv=document.getElementById("grid")
    var boxes= outerdiv.getElementsByTagName("div")
    for(i=0; i<boxes.length; i++)
    {
        boxes[i].style.backgroundColor=color[nextcolor];
    }
        if (nextcolor<color.length-1)
        {
            nextcolor +=1
        }
        else{
            nextcolor=0
        }    
}