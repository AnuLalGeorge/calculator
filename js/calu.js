let val = document.getElementById("result");

function display(dis)
{
document.getElementById("result").value+=dis;
}

function equels()
{
val.value=eval(val.value);
}
function clear()
{
val.value=val.value.substring(0,val.value.length-1);
}

function clearScreen(){
 val.value=" ";
 }

