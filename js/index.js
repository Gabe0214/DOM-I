const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
// anchor Tags
let aLinks = document.getElementsByTagName('a');
console.log(aLinks); 
aLinks[0].textContent = siteContent['nav']['nav-item-1']; 
aLinks[1].textContent = siteContent['nav']['nav-item-2']; 
aLinks[2].textContent = siteContent['nav']['nav-item-3']; 
aLinks[3].textContent = siteContent['nav']['nav-item-4']; 
aLinks[4].textContent = siteContent['nav']['nav-item-5']; 
aLinks[5].textContent = siteContent['nav']['nav-item-6']; 

let mainHeader = document.querySelector('h1');
mainHeader.textContent = siteContent['cta']['h1'];

let button = document.querySelector('button');
button.textContent = siteContent['cta']['button'];

let headingImg = document.getElementById('cta-img');
headingImg.setAttribute('src', siteContent['cta']['img-src']);


//aLinks[0].textContent = 'Services'; 
// Array.from(aLinks)
//  const anchorText = Array.from(aLinks).forEach((link,text) =>{
//    link.textContent = text; 
//  })



// top Content 
// headers
let subHeader = document.querySelectorAll('h4');
subHeader[0].textContent = siteContent['main-content']['features-h4'];
subHeader[1].textContent = siteContent['main-content']['about-h4'];
subHeader[2].textContent = siteContent['main-content']['services-h4'];
subHeader[3].textContent = siteContent['main-content']['product-h4'];
subHeader[4].textContent = siteContent['main-content']['vision-h4'];

// main-section-img

let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

 //paragraphs 

 let mainSectionParagraphs = document.querySelectorAll('p');
const paragraphSection = (value,text) => {
  return value.textContent = text;
}
paragraphSection(mainSectionParagraphs[0],siteContent['main-content']['features-content']);
paragraphSection(mainSectionParagraphs[1],siteContent['main-content']['about-content']);
paragraphSection(mainSectionParagraphs[2],siteContent['main-content']['services-content']);
paragraphSection(mainSectionParagraphs[3],siteContent['main-content']['product-content']);
paragraphSection(mainSectionParagraphs[4],siteContent['main-content']['vision-content']);

