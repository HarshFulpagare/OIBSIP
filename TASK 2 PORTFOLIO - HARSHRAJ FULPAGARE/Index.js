//Function to expand card in Courses section

const cards = document.querySelectorAll(".Card");
const card1=document.querySelectorAll(".Card1");
const closebtn=document.querySelectorAll("#close");

function clickHandler()
{
    
    cards.forEach((card,index) => card.addEventListener('click',function()
    {
      const tl = new TimelineMax({defaults:{ease:"power2.out"}});

      tl.fromTo(card1[index], 0.8,{height:"0",width:"0",opacity:"0"},{height: "72%",
        width: "90%",opacity:"1",pointerEvents:"all"})
    })
    )
     
    closebtn.forEach((btn,index) => btn.addEventListener('click',function()
  {
  const tl = new TimelineMax({defaults:{ease:"power2.out"}});
  tl.to(card1, 0.8,{height:"0",width:"0",opacity:"0",pointerEvents:"none"})
 }
 )
 )
}

clickHandler();

//function to change slides and active section in navbar

function Initialize()
{
   const Slides = document.querySelectorAll('.slides');
   const pages = document.querySelectorAll('section');
   let current=0;

   Slides.forEach((slide,index) => {
       slide.addEventListener('click', function(){
           changeDots(this);
           nextSlide(index);
       });
   });


   function changeDots(dot)
   {
    Slides.forEach(slide => {
        slide.classList.remove("active");
    })

    dot.classList.add("active");
   }

   function nextSlide(pageNumber)
   {
      const nextPage = pages[pageNumber];
      const currentPage = pages[current];

      const tl = new TimelineMax({defaults:{ease:"power2.out"}});

      tl.fromTo(currentPage , 0.8,{opacity:1,pointerEvents:"all"},{opacity:0,pointerEvents:"none"})
        .fromTo(nextPage,0.8,{opacity:0,pointerEvents:"none"},{opacity:1,pointerEvents:"all"},'-=0.4') 

       current = pageNumber;
   }
}

Initialize();

//Same function as above for mobile nav

function Initialize2()
{
   const Slides = document.querySelectorAll('.slides1');
   const pages = document.querySelectorAll('section');
   let current=0;

   Slides.forEach((slide,index) => {
       slide.addEventListener('click', function(){
           changeDots(this);
           nextSlide(index);
       });
   });


   function changeDots(dot)
   {
    Slides.forEach(slide => {
        slide.classList.remove("active");
    })

    dot.classList.add("active");
   }

   function nextSlide(pageNumber)
   {
      const nextPage = pages[pageNumber];
      const currentPage = pages[current];

      const tl = new TimelineMax({defaults:{ease:"power2.out"}});

      tl.fromTo(currentPage , 0.8,{opacity:1,pointerEvents:"all"},{opacity:0,pointerEvents:"none"})
        .fromTo(nextPage,0.8,{opacity:0,pointerEvents:"none"},{opacity:1,pointerEvents:"all"},'-=0.4') 

       current = pageNumber;
   }
}

Initialize2();

