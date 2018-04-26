$(document).ready(function(){
    $('form').submit(function(){

        var cityName=($('form #srchBx').val());
        $.get("http://api.openweathermap.org/data/2.5/weather?q="+cityName+"&APPID=525e05e76caf52079228fa10cf0b6662",function(res){
            console.log(res.name);
            var kTemp =res.main.temp;
            var fTemp = 9/5*(kTemp - 273) + 32;
            fTemp=Math.floor(fTemp);
            console.log(fTemp);
            $('h1').text(cityName);
            $('h3').text("Temprature: "+fTemp+" F");
        });
        return false;
    });
   
//   $('#srchBx').text("aaaa");

     
         
});