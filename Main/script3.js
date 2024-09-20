var width = screen.width;
var height = screen.height;
var textAmount = 5;

for(var i = 0; i < textAmount; ++i)
{
    document.writeln("<span class=\"floatingText\" style=\"left:"+ (Math.floor((Math.random()* width))) +"px; top:"+ ((height/textAmount) * i)+"px;\"> Hope you're good </span><br>")
    document.writeln("<span class=\"floatingText2\" style=\"left:"+ (Math.floor((Math.random()* width))) +"px; top:"+ ((height/(textAmount*1.5))+((height/textAmount) * i))+"px;\"> Get well soon </span>")
    document.writeln("<span class=\"floatingText3\" style=\"left:"+ (Math.floor((Math.random()* width))) +"px; top:"+ ((height/(textAmount*3))+((height/textAmount) * i))+"px;\"> Stay safe </span>")
}