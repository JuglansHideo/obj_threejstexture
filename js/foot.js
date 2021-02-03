window.onload=function (){

    function auto_height()

    {

        document.getElementById("foot").style.margin-top=document.documentElement.clientHeight-10+"px";




    }

    auto_height();

    onresize=auto_height;

}