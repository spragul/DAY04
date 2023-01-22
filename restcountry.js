//xml-http request
var request= new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    for(let i in result)
    console.log("countriesName:"+result[i].name.common,  "  Region:"+result[i].region, "  SubRegion:"+result[i].subregion, "  population:"+result[i].population);
}