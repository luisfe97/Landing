import emailjs from '@emailjs/browser';

export function Send() {
  const sendEmail = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_8uua4cu",
        "template_w2qw2xl",
        event.target,
        "9RdmzBPGcNAXPElUD"
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };
}
