function clickaction(){
    console.log("button is clicked");
    alert("button is clicked");
}
function downloadresume() {
    alert("Resume will be downloaded shortly");

    // Create a link element
    var link = document.createElement('a');

    // Set the download attribute with the desired file name
    link.download = 'resume.pdf';

    // Set the href to the file path
    link.href = 'SinglePageResume.pdf';  // Replace with the actual path to your resume PDF

    // Append the link to the body
    document.body.appendChild(link);

    // Programmatically click the link to trigger the download
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
}


function submitMail() {
var Params = {
     from_name : document.getElementById('name').value,
     subject : document.getElementById('subject').value,
     emailid : document.getElementById('emailid').value,
     message : document.getElementById('message').value

}

    // Send the email using EmailJS
    emailjs.send('service_ocr0zjq', 'template_7hdxjdr', Params)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully!');
            document.getElementById('contactForm').reset(); // Clear the form fields
        }, function(error) {
            console.log('FAILED...', error);
            alert('Message could not be sent. Please try again later.');
        });
}
