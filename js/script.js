// vars 
let landingPage = document.querySelector(".landing-page"),
 navItems = document.querySelectorAll(".nav-links-list-item"),
 landingSection=document.getElementById("home"),
 aboutSection=document.getElementById("about"),
 ourSkillsSection=document.getElementById("our-skills"),
 gallerySection=document.getElementById("gallery"),
 imgsArray = ["img_1.jpg", "img_2.jpg" , "img_3.jpg" , "img_4.jpg" ,"img_5.jpg"];


/************************************************ */
 // activa clicked nav item 
 navItems.forEach(navItem => {
    navItem.onclick= function(e){
        removeActiveClass(navItems , navItem)      
        e.currentTarget.classList.add("active")
    }
})
/************************************************ */
let bar =  document.querySelector("#bar"),
    navManue=  document.querySelector("#navBar");
 // show nav item links
 bar.onclick = function () {
  navManue.classList.toggle("show-nav-links")
        
       }
  // close navList 
// function closeNavList(){
//   document.onclick = function(e){
// if (  e.ta&& e.target !== navManue &&   navManue.classList.contains("show-nav-links")){
//   navManue.classList.toggle("show-nav-links")
//   console.log("not bar")
// }
//   }
// }
// closeNavList()     
/************************************************ */
// setting-box 
// show setting-box list
document.querySelector("#setting-icon").onclick = function () {
       document.querySelector(".setting-box").classList.toggle("open-setting-box")
       document.querySelector(".fa-gear").classList.toggle("fa-spin")
   }
//  setting-box color option 
 const colors = document.querySelectorAll(".colors-option-list li")  ;
 if (localStorage.getItem("mainColor")){
     document.documentElement.style.setProperty("--main-color" , localStorage.getItem("mainColor"));
     colors.forEach(li =>{
          if (li.dataset.color == localStorage.getItem("mainColor")){
              li.classList.add("active")             
            }
            else{
                li.classList.remove("active")
            }
    })
    }
//  select color option 
  colors.forEach(li =>{
      li.addEventListener("click" , function (e){
        removeActiveClass (colors , li);
        e.currentTarget.classList.add("active");
    localStorage.setItem("mainColor" ,   e.currentTarget.dataset.color)
    document.documentElement.style.setProperty("--main-color" , localStorage.getItem("mainColor"))
    changeImgColor()
      })
  })

  //  setting-box random background option 
  let randomOptions = [...document.querySelectorAll(".random-background span")],
   RandomBackgrounds ;

    // local storge status 
    if (localStorage.getItem("randomBackground") && localStorage.getItem("randomBackground") === "yes" ){
      startRandom()
      
     }else{
      StopRandom()
     }

   //random function 
  function random(){
    let randomNumber = Math.floor(Math.random() * imgsArray.length) ;
    console.log (randomNumber)
     landingPage.style.backgroundImage='url("images/landing-page/' + imgsArray[randomNumber] + ' ")';
      }

  function startRandom(){
        document.querySelector('.no').classList.remove("active")
        document.querySelector('.yes').classList.add("active")
        localStorage.setItem("randomBackground" , "yes" )
          RandomBackgrounds = setInterval( random, 10000) 
          console.log("yes")
      }
      // startRandom()
  function StopRandom(){
      localStorage.setItem("randomBackground" , "no" )
      clearInterval(RandomBackgrounds)
      landingPage.style.backgroundImage='url("images/landing-page/img_1.jpg")'
      document.querySelector('.yes').classList.remove("active")
      document.querySelector(".no").classList.add("active")
      }


  // select random options
      document.querySelector(".yes").onclick = startRandom;
      document.querySelector(".no").onclick = StopRandom
      
  /************************************************************** */
  //  setting-box show section bollet option 
  let showBolletOptions = [...document.querySelectorAll(".random-background span")],
   showBolletSection= document.querySelector(".section-bollet") ;

    // local storge status 
    if (localStorage.getItem("showSectionBollet") && localStorage.getItem("showSectionBollet") === "yes" ){
      showBollet()
      
     }else{
      StopShowBollet()
     }

   //random function 
  function showBollet(){
        document.querySelector('.no-bollet').classList.remove("active")
        document.querySelector('.yes-bollet').classList.add("active")
        localStorage.setItem("showSectionBollet" , "yes" )
        showBolletSection.style.display="block"
      }
      // startRandom()
  function StopShowBollet(){
      localStorage.setItem("showSectionBollet" , "no" )
      showBolletSection.style.display="none"
      document.querySelector('.yes-bollet').classList.remove("active")
      document.querySelector(".no-bollet").classList.add("active")
      }


  // select random options
      document.querySelector(".yes-bollet").onclick = showBollet;
      document.querySelector(".no-bollet").onclick = StopShowBollet
      
  /************************************************************** */
  // create bollet section 
  let navItemsLinks = document.querySelectorAll(".nav-links-list-item a");
  for(i = 1 ; i< navItemsLinks.length ; i++){
    document.querySelector(".section-bollet").innerHTML +=`    
    <div class="bollet-item">
    <span class="bollet" data-name='${navItemsLinks[i].dataset.section}'></span>
    <span class="section-name">${navItemsLinks[i].dataset.section}</span>
</div>`

  }
  //bollet section
let bollets = Array.from(document.querySelectorAll(".bollet")) 
bollets.map(bollet => {
bollet.addEventListener("click" ,  (e) => {
  console.log(e.currentTarget.dataset.name)
  let ele=  document.querySelector(`.${e.currentTarget.dataset.name}`)
  ele.scrollIntoView({behavior:"smooth"})

 
})
})
  /************************************************************** */
  //reset option
let resetButton = document.querySelector(".reset");
  resetButton.addEventListener("click" ,  (e) => {
localStorage.removeItem("mainColor")
localStorage.removeItem("randomBackground")
localStorage.removeItem("showSectionBollet")
location.reload()
 
})

  /************************************************************** */
  function removeActiveClass (array , item) {
      array.forEach(item => {
          item.classList.remove("active")
        })
    }
  // function removeActiveClass () {
  //   navItems.forEach(navItem => {
  //     navItem.onclick= function(e){
  //         navItem.classList.remove("active")      
  //         e.currentTarget.classList.add("active")
  //     }
  // })
  //   }
    /************************************************************** */
 // about_us section 
 // change img color
 let AboutImg = document.getElementById("about-img");
 function changeImgColor(){
   if (localStorage.getItem("mainColor")){
     if(localStorage.getItem("mainColor") == "#ff26c2"){
       
       AboutImg.setAttribute("src", "images/about-us/img-1.svg");
     }
     if(localStorage.getItem("mainColor") == "#bbb238"){
       AboutImg.setAttribute("src", "images/about-us/img-2.svg");
     }
     if(localStorage.getItem("mainColor") == "#0ac2b4"){
       AboutImg.setAttribute("src", "images/about-us/img-3.svg");
     }
     if(localStorage.getItem("mainColor") == "#ff253a"){
       AboutImg.setAttribute("src", "images/about-us/img-4.svg");
     }
     if(localStorage.getItem("mainColor") == "#6ca456"){
       AboutImg.setAttribute("src", "images/about-us/img-5.svg");
     }
   }
  }
  changeImgColor()

  /************************************************************** */
 // ourskills section 
   // scroll to ourskills section
   function scrollToSkillsSection(){
     window.onscroll = function(){

      // section offsetTop  => element.offsetHeight المسافة من بداية الصفحة لحد اول نقطة فيها 
      // section total height => element.offsetHeight      ارتفاع العنصر شامل padding & border 
      // المسافة التى نعمل لها scroll  => window.pageYOffset
      //  امساحة اللى ظاهرة من الشاشة => window.innerHeight

  
       let skillsSpan = document.querySelectorAll(".skill-box-content span") 
       if (window.pageYOffset > (  ourSkillsSection.offsetTop + ourSkillsSection.offsetHeight - window.innerHeight -200 ) ){
        skillsSpan.forEach(span => {
          //  console.log(span.dataset)
           span.style.width = span.dataset.width 
         })
        }
        else{
          skillsSpan.forEach(span => {
            // console.log(span.dataset)
            span.style.width = 0
          })
        }
     }
   }
   scrollToSkillsSection()
/**************************************************************** */
// gallery section 
let galleryItems =[... document.querySelectorAll(".gallery-item")],
    galleryContent= document.querySelector(".gallery-content");
    galleryItems.map(galleryItem => {
    galleryItem.onclick = function(e){
     let currentImgItem =  e.currentTarget
      // create ovrlay for popup
      let overlayPopup =  document.createElement("div");
      overlayPopup.classList.add("gallery-popup-overlay")
      document.body.appendChild(overlayPopup)

      // create gallery-popup-element
    let galleryPopup =  document.createElement("div");
    galleryPopup.classList.add("gallery-popup");
    galleryPopup.innerHTML=`<div class="popup-icon" id="close-popup">
                            <i class="fa-solid fa-circle-xmark"></i>
                            </div>
                            <h3 class="popup-head">${currentImgItem.dataset.name}</h3>
                          <img src="images/gallery/${currentImgItem.dataset.name}.jpg" alt="">`
      // pusk popup after gallery content                    
      galleryContent.after(galleryPopup)
      
      // close popup 
      document.getElementById("close-popup").onclick = function(){
        galleryPopup.remove()
        overlayPopup.remove()
      }                   
    }
})
/***************************************************************/
//stop form work 
document.getElementById("send").addEventListener("click" , (e) => {
  e.preventDefault()
  console.log("k")
})

/***************************************************************/
