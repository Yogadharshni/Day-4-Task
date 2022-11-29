//1)-->to compare two JSON
var obj1={name:"Person 1",age:5};
var obj2={age:5,name:"Person 1"};
var flag=true;
if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(key in obj1) { 
        if(obj1[key] == obj2[key]) {
            continue;
        }
        else {
            flag=false;
            break;
        }
    }
}
console.log("Yes! All are Same");

// 2)--> to display flag
var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send()
request.onload=function(){
    var dataa=request.response
    var flags= JSON.parse(dataa)
   for (let key of flags)
   {
    console.log("flag : "+key.flag);
   } 
}

// 3)--> to display country,region,subregion and population
var req=new XMLHttpRequest();
req.open("GET","https://restcountries.com/v3.1/all",true)
req.send()
req.onload=function(){
    var data=req.response
    var ans= JSON.parse(data)
   for (let key of ans)
   { //console.log(key)
     console.log(key.name.common+" , ",key.region+" , ",key.subregion+" , population is:",key.population);
   } 
}
