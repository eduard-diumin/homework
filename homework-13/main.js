const loginForm = document.querySelector("#loginForm");

loginForm?.addEventListener("submit", function(e){
    e.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    console.log(`Email:  ${email} , Password: ${password}`);
    document.querySelector("#loader").style.display = "block";
    setTimeout(function(){
        document.querySelector("#loader").style.display = "none";
        window.location.href = "profile.html";
    }, 2000);
});

const goBack = document.querySelector('#back');

goBack?.addEventListener('click', () => window.history.back());

console.log("Screen width: " + screen.width + ", Screen height: " + screen.height);

const mapFrame = document.querySelector('#mapFrame');

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        let lat = position.coords.latitude;
        let lng = position.coords.longitude;
        const mapUrl = `https://maps.google.com/maps?q=${lat},${lng}&z=16&output=embed`;
        if (mapFrame) {
            mapFrame.src = mapUrl;
            mapFrame.style.display = 'block';
        }
    }, function(error) {
        document.body.innerHTML += `<p>Geolocation error occurred. Error code:  ${error.code}, Error message: ${error.message}</p>`;
    });
} else {
    console.log('Geolocation is not supported by this browser.');
}