function submitForm() {
    const form = document.getElementById("survey-form");
    const popup = document.getElementById("popup");
    const popupContent = document.getElementById("popup-content");
    const closePopupButton = document.getElementsByClassName("close")[0];
    
    if (form.checkValidity()) {
        popup.style.display = "block";
        
        const formData = new FormData(form);
        let popupHTML = "<ul>";
        for (let [key, value] of formData.entries()) {
            popupHTML += `<li><b>${key}:</b> ${value}</li>`;
        }
        popupHTML += "</ul>";
        popupContent.innerHTML = popupHTML;
    } else {
        alert("Please fill out all the required fields.");
    }
    
    closePopupButton.onclick = function() {
        popup.style.display = "none";
        form.reset();
    }
}

function resetForm() {
    const form = document.getElementById("survey-form");
    form.reset();
}

function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
}
