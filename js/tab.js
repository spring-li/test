window.onload = function(){
        var span = document.getElementById("button").getElementsByTagName("span");
        var divs = document.getElementById("bottom").children;
        for(var i =0;i<span.length;i++){
            span[i].index = i;   //难点
            span[i].onclick = function(){
                for(j=0;j<span.length;j++){
                    span[j].className = "tabCon";
                    divs[j].className = "none";
                }
                this.className += " active";
                 divs[this.index].className = "show";
            }
        }
}