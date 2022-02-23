
const ipAddress = document.querySelector(".ipAddress")
const locationn = document.querySelector(".locationn")
const timezone = document.querySelector(".timezone")
const isp = document.querySelector(".isp")
const btn = document.querySelector(".btn")
const input = document.querySelector(".search")

screen()
input.addEventListener("keyup", (e) => {
    
    const key = e.which || e.keycode
    const isEnterKeyPressed = key === 13
    if (isEnterKeyPressed) {
        screen() 
        }         
    }
)
btn.addEventListener("click", search =>{
    screen()       
       
})
async function consumindoDados(ipNumber){
    let url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_sBpm3Yv60bR0D6kr97pEzdS3rxJSV&ipAddress=${ipNumber}`
    let response = await fetch (url)    
   return await response.json()   
  
} 
console.log(consumindoDados())

async function screen(ipNumber){  
    ipNumber = input.value
    let serv  = await consumindoDados(ipNumber)
    ipAddress.innerHTML = serv.ip
    locationn.innerHTML = `${serv.location.city} ${serv.location.country} `
    timezone.innerHTML = serv.location.timezone
    isp.innerHTML = serv.isp          
                
     let map = L.map('map').setView([serv.location.lat, serv.location.lng], 13);
     console.log(serv.lat)
     L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
         attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
         maxZoom: 18,
         id: 'mapbox/streets-v11',
         tileSize: 512,
         zoomOffset: -1,
         accessToken: 'pk.eyJ1IjoibWFyY2Vsb2hjYiIsImEiOiJja3pxM2dld3IwZzMxMm5yeDZybmVwdmwwIn0.cvflYF7tjYgCGIsfxv_LYw'
     }).addTo(map);
     var marker = L.marker([serv.location.lat, serv.location.lng]).addTo(map);
          
}


    
   

    

// map.addControl(new mapboxgl.NavigationControl());


// L.marker([51.5, -0.09]).addTo(map)
//     .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
//     .openPopup();
 
//     var popup = L.popup()
//     .setLatLng([51.513, -0.09])
//     .setContent("I am a standalone popup.")
//     .openOn(map);

//     var popup = L.popup();

// function onMapClick(e) {
//     popup
//         .setLatLng(e.latlng)
//         .setContent("You clicked the map at " + e.latlng.toString())
//         .openOn(map);
// }

// map.on('click', onMapClick);




