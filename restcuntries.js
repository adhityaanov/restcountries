//1 asia continent
var request = new XMLHttpRequest();

request.open('get','https://restcountries.com/v3.1/all',true);
request.send();
request.onload=function(){
    var data=json.parse(request.resoonse)
    console.log(data);
    var result=data.filter((ele)=>ele.region==="Asia");
    console.log(result);

}
//2 population less than 2lakhs

var result=countries.filter((contry)=> {
   if( contries.population===countriespopulation)
   return ountries
}
)
