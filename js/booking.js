function searchHospitals() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const hospitalCards = document.querySelectorAll(".hotel-card");

    hospitalCards.forEach(card => {
        const hospitalName = card.querySelector("h3").innerText.toLowerCase();

        if (hospitalName.includes(searchInput)) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });
}

function showHospitalDetails(hospitalId) {
    const hospitalDetails = {
        name: "Hospital 1",
        description: "Description of Hospital 1.",
        image: "hospital1.jpg",
    };

    document.getElementById("hospitalImage").src = hospitalDetails.image;
    document.getElementById("hospitalName").innerText = hospitalDetails.name;
    document.getElementById("hospitalDescription").innerText = hospitalDetails.description;

    document.getElementById("backButton").classList.remove("hidden");
    showBookingForm();
}

function showBookingForm() {
    document.getElementById("bookingForm").classList.remove("hidden");
}

function goBack() {
    document.getElementById("backButton").classList.add("hidden");
    document.getElementById("bookingForm").classList.add("hidden");
}

function bookAppointment() {
    const patientInfo = {
        name: document.getElementById("name").value,
        dob: document.getElementById("dob").value,
        illness: document.getElementById("illness").value,
        age: document.getElementById("age").value,
        phone: document.getElementById("phone").value,
        roomType: document.getElementById("roomType").value,
    };

    console.log("Booking information sent:", patientInfo);
    alert("Appointment booked successfully!");
    document.getElementById("patientForm").reset();
    document.getElementById("bookingForm").classList.add("hidden");
}
