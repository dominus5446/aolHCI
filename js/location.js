let map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -6.2075, lng: 106.8452 },
        zoom: 13
    });
    getNearbyHospitals();
}

function getNearbyHospitals() {
    const hospitals = [
        { name: 'Rumah Sakit A', location: { lat: -6.2075, lng: 106.8452 } },
        { name: 'Rumah Sakit B', location: { lat: -6.2100, lng: 106.8500 } },
        { name: 'Rumah Sakit C', location: { lat: -6.2050, lng: 106.8400 } }
    ];
    hospitals.forEach(hospital => {
        const hospitalMarker = new google.maps.Marker({
            position: hospital.location,
            map: map,
            title: hospital.name
        });

        const hospitalInfoWindow = new google.maps.InfoWindow({
            content: `<h3>${hospital.name}</h3><p>Alamat: ${getAddress(hospital.location)}</p>`
        });

        hospitalMarker.addListener('click', function () {
            hospitalInfoWindow.open(map, hospitalMarker);
        });
    });
}

function getAddress(location) {
    return `Alamat palsu, ${location.lat}, ${location.lng}`;
}
