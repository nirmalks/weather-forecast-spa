$(document).ready(function(){
 getTemperature();
    });


   var isCelsiusOn = true;
   var temp ;

function getTemperature(){
    $.ajax({
        url:"http://api.openweathermap.org/data/2.5/weather?lat=13.09&lon=80.28&appid=YOUR_API_KEY&units=metric&callback=parseTemp",
        success: function(data){

        },
        crossDomain: true,
        dataType: 'jsonp',
        cache: false
    });

    
}

function parseTemp(response){
    console.log(response);
    temp = response.main.temp;
    var weatherDesc = response.weather[0].description;
    weatherDesc.substr(0,1).toUpperCase();
    var cityName = response.name;
    var countryName =  response.sys.country;
    var placeName = cityName + " , " + countryName;
    var weatherIcon = response.weather[0].icon;
    var iconUrl = "http://openweathermap.org/img/w/" + weatherIcon + ".png";
    var weatherCondition = response.weather[0].id;
    console.log(temp);
    console.log(weatherDesc);
      console.log(weatherIcon);
      console.log(weatherCondition);
    $("#weather-temperature").html("<p>" + temp + " &#8451; "+ "</p>");
      $("#weather-description").html("<p>" + weatherDesc + "</p>");
   $("#weather-icon").html("<img class='img-responsive' src=" + iconUrl  + " " + "/>");
  $("#weather-location").html("<p>" + placeName + "</p>");
//  if(weatherCondition >= 200 && weatherCondition < 300){
//        //thunderstorm
//        $("body").css("background","url('./images/thunderstorm.jpg')");
//    }

//  if(weatherCondition >= 300 && weatherCondition < 400){
//        //drizzle
//        $("body").css("background","url('./images/drizzle.jpg')");
//    }

//  if(weatherCondition >= 500 && weatherCondition < 600){
//        //rain
//        $("body").css("background-image","url('./images/rain.jpg')");
//    }
 
//  if(weatherCondition >= 600 && weatherCondition < 700){
//        //snow
//        $("body").css("background","url('./images/snow.jpg')");
//    }
 
//  if(weatherCondition == 800){
//     //clear sky
//       $("body").css("background","url('./images/clear-sky.jpg')");
//    }
 
//    if(weatherCondition > 800 && weatherCondition < 900){
//        //clouds
//        $("body").css("background","url('./images/cloud.jpg')");
//    }

//    if(weatherCondition >= 900 && weatherCondition < 1000){
//        //extreme
//        $("body").css("background","url('./images/hurricane.jpg')");
//    }
}

function convertCToFahreinheit(value){
    var fah = (value * (9/5)) + 32 ;
    console.log(fah);
        return fah;
}

function convertFToCelcius(value){
    console.log("value entering fah conv" + value);
    var cel = (value - 32) * (5 / 9);

    console.log(cel);
        return cel;
}

$("#temp-toggle").on('click',function(){
    if(isCelsiusOn){
    
        var tempCel =   convertCToFahreinheit(temp); 
        temp = tempCel;
        $("#weather-temperature").html("<p>" + tempCel + " &#8457; "+ "</p>");
        isCelsiusOn = false;
    } else {
           var tempFah =    convertFToCelcius(temp);
             temp = tempFah;
         $("#weather-temperature").html("<p>" + tempFah + " &#8451;" + "</p>");
        isCelsiusOn = true;
    }
});