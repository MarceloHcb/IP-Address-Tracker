
const ipAddress = document.querySelector(".ipAddress")
const locationn = document.querySelector(".locationn")
const timezone = document.querySelector(".timezone")
const isp = document.querySelector(".isp")
const btn = document.querySelector(".btn")
const input = document.querySelector(".search")
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
async function screen(ipNumber){
    
    ipNumber = input.value
    let serv  = await consumindoDados(ipNumber)
    ipAddress.innerHTML = serv.ip
    locationn.innerHTML = `${serv.location.city} ${serv.location.country} `
    timezone.innerHTML = serv.location.timezone
    isp.innerHTML = serv.isp          
                
     let map = L.map('map').setView([serv.location.lat, serv.location.lng], 13);
     
     L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
         attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
         maxZoom: 18,
         id: 'mapbox/streets-v11',
         tileSize: 512,
         zoomOffset: -1,
         accessToken: 'pk.eyJ1IjoibWFyY2Vsb2hjYiIsImEiOiJja3pxM2dld3IwZzMxMm5yeDZybmVwdmwwIn0.cvflYF7tjYgCGIsfxv_LYw'
     }).addTo(map);
     var blackIcon = L.icon({
        iconUrl: 'src/images/icon-location.svg',      
    
        iconSize:     [48, 55], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });
     var marker = L.marker([serv.location.lat, serv.location.lng], {icon: blackIcon}).addTo(map);    
}
