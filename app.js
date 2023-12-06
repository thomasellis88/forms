const form = document.getElementById("loginForm");

function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(form); // Create a new FormData object from our form element
    const formValues = Object.fromEntries(formData); // Convert the FormData fields into an object
    
    console.log(formValues);

    form.addEventListener("submit", handleSubmit);
}

