let cars = [
    {company : "Porche", model: "911 GT"},
    {company : "BMW", model: "M5"},
    {company : "McLaren", model: "P1"},
    
]

function getData() {
    setTimeout(()=>{
        let r = '';
        cars.forEach(item =>{
            r += '<p>'+item.company+' '+item.model+'<p>';
        })
        // document.body.innerHTML = r;
        console.log(r)
    }, 4000)
}
// getData();

function setData(val, callback){
    setTimeout(() => {
        cars.push(val)
        callback(); 
    },1000);
}

setData({company: "Mercedes", model: 'SLS'}, getData)

const getName = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("Heisenberg")
    }, 4000); 
})

const saymyname = async () => {
    let name = await getName;
    document.getElementById("saymyname").innerHTML = name;
    console.log(name);
}

saymyname()