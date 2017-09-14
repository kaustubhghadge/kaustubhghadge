$(document).ready(function () {
    $(function () {

        $(".whoami").typed({
            strings: [" ^3000 whoami"],
            typeSpeed: 0,
            showCursor: true,
            contentType: 'text',
            startDelay: 10,
            callback: function () {
                setTimeout(function () {
                    $("#answhoami").removeClass("hide");
                    $("#pwd").removeClass("hide");
                    $("#whoami").find(".typed-cursor").hide();
                }, 3000);
            },
            preStringTyped: function () {
                setTimeout(function () {
                    $("#whoami").removeClass("hide");
                }, 700);
            }
        });

        $(".pwd").typed({
            strings: [" ^7000 pwd"],
            typeSpeed: 100,
            showCursor: true,
            contentType: 'text',
            startDelay: 10,
            showCursor: true,
            callback: function () {
                setTimeout(function () {
                    $("#anspwd").removeClass("hide")
                    $("#pwd").find(".typed-cursor").hide();
                    $("#cv").removeClass("hide");
                }, 3000);
            }
        });


        $(".catcv").typed({
            strings: [" ^14000 cat cv"],
            typeSpeed: 50,
            showCursor: true,
            contentType: 'text',
            startDelay: 10,
            showCursor: true,
            callback: function () {
                $("#cv").find(".typed-cursor").hide();
                $("#catcv-ans").removeClass("hide");
                $("#endDiv").removeClass("hide");
                $("#footer").removeClass("hide");
            }

        });

        $(".endDiv").typed({
            strings: [" "],
            typeSpeed: 0,
            showCursor: true,
            contentType: 'text',
            startDelay: 10,
            showCursor: true,
            callback: function () {
            }

        });
//matrix code

var c = document.getElementById("c");
var ctx = c.getContext("2d");

//making the canvas full screen
c.height = window.innerHeight - 40;
c.width = window.innerWidth - 40;

//chinese characters - taken from the unicode charset
var matrixCode = "田K由A甲U申S甴T电U甶B男H甸.甹G町H画A甼D甽G甾E甿@畀g畁m畂a畃i畄l畅.畆c畇o畈m畉γνῶθι.σεαυτόν.nosce.te.ipsum.temet.nosce";
//converting the string into an array of single characters
matrixCode = matrixCode.split("");

var font_size = 10;
var columns = c.width/font_size; //number of columns for the rain
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for(var x = 0; x < columns; x++)
    drops[x] = 1; 

//drawing the characters
function draw()
{
    //Black BG for the canvas
    //translucent BG to show trail
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, c.width, c.height);
    
    ctx.fillStyle = "#0F0"; //green text
    ctx.font = font_size + "px arial";
    //looping over drops
    for(var i = 0; i < drops.length; i++)
    {
        //a random matrixCode character to print
        var text = matrixCode[Math.floor(Math.random()*matrixCode.length)];
        //x = i*font_size, y = value of drops[i]*font_size
        ctx.fillText(text, i*font_size, drops[i]*font_size);
        
        //sending the drop back to the top randomly after it has crossed the screen
        //adding a randomness to the reset to make the drops scattered on the Y axis
        if(drops[i]*font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;
        
        //incrementing Y coordinate
        drops[i]++;
    }
}  
 function matrix(){
    var $konsole=$("#konsole").remove();
    $("#c").removeClass("hide");
    setInterval(draw, 40);
}
$('.username').on('click',matrix);
});
});