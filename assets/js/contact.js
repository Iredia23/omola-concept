/* ==========================================================================
   Omola Concept: contact form (contact.html)
   The site has no server, so the form opens the visitor's email app with
   the message already written, addressed to the boutique.
   ========================================================================== */

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
    }

    const data = new FormData(contactForm);
    const body = [
        data.get('message'),
        '',
        '---',
        `Name: ${data.get('name')}`,
        `Email: ${data.get('email')}`,
        data.get('phone') ? `Phone: ${data.get('phone')}` : null,
    ].filter((line) => line !== null).join('\n');

    sendOrderByEmail(`${data.get('subject')}: ${data.get('name')}`, body);
    showToast('Opening your email app… just press send!');
});
