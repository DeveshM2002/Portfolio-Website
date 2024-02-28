var typed = new Typed('#typed', 
{
    strings: ['Web Developer', 'Curious Learner', 'Aspiring Software Engineer'],
    typeSpeed: 40,
    backspeed: 40,
    loop: true
});

const contactForm = document.getElementById('contact-form'),
      contactName = document.getElementById('contact-name'),
      contactEmail = document.getElementById('contact-email'),
      contactProject = document.getElementById('contact-project'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    if(contactName.value === '' || contactEmail.value === '' || contactProject.value === '') {
        contactMessage.classList.remove('color-blue')
        contactMessage.classList.add('color-red')

        contactMessage.textContent = 'Write all the input fields'
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 3000)
    } else {
        emailjs.sendForm('service_fra3j2p','template_6oxepkc','#contact-form','MUJXaFjvWtYYyXCvE')
            .then(() =>{
                contactMessage.classList.add('color-blue')
                contactMessage.textContent = 'Message sent'

                setTimeout(() => {
                    contactMessage.textContent = ''
                }, 5000)
            }, (error) => {
                alert('OOPS! Something has failed...', error)
            })
            contactName.value = '';
            contactProject.value = '';
            contactEmail.value = '';
    }
}

contactForm.addEventListener('submit', sendEmail)