function iniciarMap(){
    var coordenadas={ lat:9.994708, lng:-84.148641};
    var mapa= new google.maps.Map(document.getElementById("map"),{
   
       zoom:17,
       center:coordenadas,
    });
    var marker= new google.maps.Marker({
   
   position: coordenadas,
   map:mapa,
   
   
    });
    initAutocomplete();
   
   }
   function initAutocomplete(){
  autocomplete= new google.maps.places.Autocomplete(input);


   }