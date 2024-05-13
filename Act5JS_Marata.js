document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const formData = new FormData(form);
      const formDataJSON = Object.fromEntries(formData.entries());
      console.log(formDataJSON);
     
    });
  });
  