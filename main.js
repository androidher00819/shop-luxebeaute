const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation1");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});

// animation window scroll
const header = document.querySelector('.header');

document.addEventListener('scroll',()=>{
  var scroll_position = window.scrollY;
  if(scroll_position > 10) {
      header.style.backgroundColor = '#f5f5f7';
      header.style.borderBottom = '#A2904E 2px solid'
      // header.style.fontColor = '#A2904E';
  } else {
      header.style.backgroundColor = 'transparent';
      header.style.borderBottom = 'none';
  }
});

//testimonials

"use strict";

const testimonials = [
  {
    name: "Paolo Brillante", 
    
   work: "",
   
    photoUrl:"https://i0.wp.com/luxebeaute.net/wp-content/uploads/2021/02/Untitled-design-5.png?fit=516%2C516&amp;ssl=1",
    
    text: "Thank you so much Luxebeaute for giving me the opportunity to learn and to discover a talent/skill I never thought I had before which then became my new Passion. You honed us really well, you really proved us that we dont have to be born with skills, all we need is to study and practice. All thanks to our great mentors and Masters Mimi & Pyan."
  },
  {
    name: " Kathryn Delos Reyes ", 
    
   work: "",
   
    photoUrl:"https://i2.wp.com/luxebeaute.net/wp-content/uploads/2021/02/Untitled-design-4.png?fit=516%2C516&amp;ssl=1",
    
    text: "This academy has helped me achieved my dream as a PMU artist. They are one of the best. Very informative and helpful. Even if I just did online training, they were very precise on showing and explaining every procedure to me. Highly recommended!"
  },
  {
    name: "Anna Marie Paler ", 
    
   work: "",
   
    photoUrl:"https://i1.wp.com/luxebeaute.net/wp-content/uploads/2021/02/Untitled-design-3.png?fit=516%2C516&amp;ssl=1",
    
    text: "I attended the full 5 days course of Batch 93/94 at the Luxe Academy and was very impressed with the standard of training given by Master Mimi and Master Pyan and their instructors. The expertise and professionalism displayed by all the staff gave me the confidence to complete the course without any concerns.",
  },
  {
      name: "Caren Arce ", 
    
   work: "",
   
    photoUrl:"https://i0.wp.com/luxebeaute.net/wp-content/uploads/2021/02/Untitled-design-2.png?fit=516%2C516&amp;ssl=1",
    
    text: "Five stars and two thumbs up for Luxebeaute International Academy. I am proud of myself because I chose you, the best training I have attended. I highly recommend, I am happy and proud to be one of the students of Luxebeaute International Academy. For Master Mimi and Sir Pyan, thank you very much."  },
];

const imgEl = document.querySelector("#testimonial-img");

const workEl = document.querySelector(".testimonial-job");
const textEl = document.querySelector(".testimonial-text");
const usernameEl = document.querySelector("#testimonial-name");

const btnRight = document.querySelector('.btn-right');

const btnLeft = document.querySelector('.btn-left');

const carouselBtn = document.querySelectorAll('.btn-dot')





let idx = 0;

const updateTestimonial= ()=> {
  const { name, work, photoUrl, text } = testimonials[idx];

  imgEl.src = photoUrl;
  textEl.innerText = text;
  usernameEl.innerText = name;
  workEl.innerText = work;
  
  carouselBtn.forEach(btn=>btn.classList.remove('btn-dot-active'))
    
 
    carouselBtn[idx].classList.add('btn-dot-active')

}  


const stopSlideshow = () =>
  clearInterval(intervalId);


  let intervalId;

const startSlideshow = () => intervalId = setInterval(nextTestimonial, 4000);




const nextTestimonial = () => {
  idx++;
  if (idx === testimonials.length) {
    idx = 0;
  }
  updateTestimonial();
  stopSlideshow()
  startSlideshow();
  
  }
  
  const previousTestimonial = () => {
  idx--;
  if (idx < 0) {
    idx = testimonials.length - 1;
  }
  updateTestimonial();
  stopSlideshow()
  startSlideshow();
}


btnRight.addEventListener('click', nextTestimonial);
btnLeft.addEventListener('click', previousTestimonial);




updateTestimonial();
startSlideshow();


carouselBtn.forEach((btn,i) =>{
    
    btn.addEventListener('click',function(){
    carouselBtn.forEach(btn=>btn.classList.remove('btn-dot-active'))
    
    idx = i;
    btn.classList.add('btn-dot-active')
   updateTestimonial();
  stopSlideshow()
  startSlideshow();
    }) })



// end testimonial






// on Scroll animation

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);




