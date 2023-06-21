let markers, map;

function initMap() {
    const posicion = {
        lat: -25.363,
        lng: 131.044,
    };

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: posicion,
    });

    markers.push(
        new google.maps.Marker({
            position: {
                lat: -13.1631412,
                lng: -72.5449629,
            },
            map,
            title: "Machu Pichu",
        })
    );
    markers.push(
        new google.maps.Marker({
            position: {
                lat: 45.4371300,
                lng: 12.3326500,
            },
            map,
            title: "Venecia",
        })
    );
    markers.push(
        new google.maps.Marker({
            position: {
                lat: 26.820553,
                lng: 30.802498,
            },
            map,
            title: "Egipto",
        })
    );
}