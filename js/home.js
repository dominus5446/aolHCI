var dropdown = document.getElementById('dropdown');

document.getElementById('profile-img').addEventListener('click', function() {
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    } 
    else {
    dropdown.style.display = 'block';
    }
});

function logout() {
    alert('Anda berhasil logout.');
}

function search() {
    var searchTerm = document.getElementById('search-bar').value;
    alert('Hasil Pencarian Untuk: ' + searchTerm);
}

var map;
    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
        });
    }