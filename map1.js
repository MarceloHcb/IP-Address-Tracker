
const ipAddress = document.querySelector(".ipAddress")
const locationn = document.querySelector(".locationn")
const timezone = document.querySelector(".timezone")
const isp = document.querySelector(".isp")
const btn = document.querySelector(".btn")
const input = document.querySelector(".search")
showMap()
input.addEventListener("keyup", (input) => {
    
    const key = e.which || e.keycode
    const isEnterKeyPressed = key === 13
    if (isEnterKeyPressed) {
        if(input === ""){
            alert("Preencha o campo com o IP")
            return
        }
        screen()  
    }
})
btn.addEventListener("click", search =>{
    screen()       
       
})

async function consumindoDados(ipNumber){
    let url = `https://api.freegeoip.app/json/${ipNumber}?apikey=3bb50190-8fa3-11ec-8355-5ff655258135`
    let response = await fetch (url)    
    return await response.json()   
} 

async function screen(ipNumber){
    ipNumber = input.value
    let serv  = await consumindoDados(ipNumber)
    ipAddress.innerHTML = serv.ip
    locationn.innerHTML = `${serv.country_code} ${serv.zip_code} `
    timezone.innerHTML = serv.time_zone
    isp.innerHTML = `"Not Available" `    
    
}
    function showMap(){
        let lat = 51.505
        let long = -0.09        
     let map = L.map('map').setView([lat, long], 13);

     L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
         attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
         maxZoom: 18,
         id: 'mapbox/streets-v11',
         tileSize: 512,
         zoomOffset: -1,
         accessToken: 'pk.eyJ1IjoibWFyY2Vsb2hjYiIsImEiOiJja3pxM2dld3IwZzMxMm5yeDZybmVwdmwwIn0.cvflYF7tjYgCGIsfxv_LYw'
     }).addTo(map);
     var marker = L.marker([lat, long]).addTo(map);
          
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




