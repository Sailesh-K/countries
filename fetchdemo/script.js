
var container = document.createElement("div");
container.className="container";

var row=document.createElement("div");
row.className="row";

async function foo()
{
    try
    {
        let data=await fetch("https://restcountries.com/v3.1/all");
        let res=await data.json();
        for(var i=0;i<res.length;i++)
            {
                var test=res[i].latlng;
                var col=document.createElement("div");
                col.className="col-lg-4";
                col.innerHTML=`<div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${res[i].flags.png}" alt="Card image cap">
                <div class="card-body">
                <h5 class="card-title">${res[i].name.common}</h5>
                <p class="card-text">${res[i].capital}</p>
                <p class="card-text">${res[i].region}</p>
                <p class="card-text">${res[i].latlng}</p>
                <p class="card-text">${res[i].altSpellings[0]}</p>
                <p class="card-text">${open_weather(...test)}</p>
                </div>
                </div>`;
                row.append(col);
                container.append(row);
                document.body.append(container);
            }
        foo(res);
    }
    catch(error)
    {
        console.log(error);
    }
}

async function open_weather(lat,lon){
    try{
        let data_1= await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=47024e065cadff52d0c5ff90b3d153c1`);
        let data_2= await data_1.json();
        return data_2.main.temp;
    }
    catch(error)
    {
        console.log(error);
    }
}
foo();



 