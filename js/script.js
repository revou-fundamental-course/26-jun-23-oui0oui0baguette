
const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('li');
  
// Store the total number of images
const slideCount = slides.length;
let activeSlide = 0;
  
setInterval(() => {
    slides[activeSlide].classList.remove('active');
    activeSlide++;
    if (activeSlide === slideCount) {
        activeSlide = 0;
    }
    slides[activeSlide].classList.add('active');
}, 2000);


//sdsdsdsd

function validateForm() {
    var name = document.forms['FormText']['name'].value;
    var emailaddress = document.forms['FormText']['emailaddress'].value;
    var Options = document.forms['FormText']['Options'].value;
    
    if (name == '' || emailaddress =='' || Options == '') {
        alert("Tidak ada boleh yang kosong")
        return false;
    }
    else {
        alert("yey bisa")
    }

}
