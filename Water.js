// Get all the elements
const heroButton = document.querySelector('.hero button');
const aboutSection = document.querySelector('#about');
const servicesSection = document.querySelector('#services');
const contactSection = document.querySelector('#contact');
const contactForm = document.querySelector('#contact form');
const contactFormInputs = contactForm.querySelectorAll('input, textarea');

// Add event listeners
heroButton.addEventListener('click', () => {
  console.log('Hero button clicked!');
  // Scroll to about section
  aboutSection.scrollIntoView({ behavior: 'mooth' });
});

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('Contact form submitted!');
  // Get the form data
  const formData = new FormData(contactForm);
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');
  console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
  // Send the form data to the server or API
  //...
});

// Add functionality to services section
const servicesList = servicesSection.querySelector('ul');
const servicesItems = servicesList.querySelectorAll('li');
servicesItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    console.log(`Service ${index + 1} clicked!`);
    // Show or hide the service details
    const serviceDetails = item.querySelector('.service-details');
    serviceDetails.classList.toggle('show');
  });
});

// Add functionality to contact form inputs
contactFormInputs.forEach((input) => {
  input.addEventListener('focus', () => {
    input.classList.add('focused');
  });
  input.addEventListener('blur', () => {
    input.classList.remove('focused');
  });
});