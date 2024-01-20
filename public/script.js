// Feature Section
function applyFeature(feature) {
    const parentDiv = document.getElementById(feature);
    const childDiv = parentDiv.querySelector('div');
    const featureImage = document.querySelector('.feature-image');
    const featureContentHeading = document.querySelector('.feature-content-h3');
    const featureContetnPara = document.querySelector('.feature-content-p');

    // Remove 'bg-bookmark-red' from all feature options
    document.querySelectorAll('.feature-option').forEach((option) => {
        option.classList.remove('bg-bookmark-red');
    });

    switch (feature) {
        case 'simple':
            childDiv.classList.add("bg-bookmark-red");
            changeFeatureOption(parentDiv, 'speedy').classList.remove('bg-bookmark-red');
            changeFeatureOption(parentDiv, 'easy').classList.remove('bg-bookmark-red');
            featureImage.src = "./images/illustration-features-tab-1.svg";
            featureContentHeading.innerHTML = 'Bookmark in one click';
            featureContetnPara.innerHTML = 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.';
            break;
        case 'speedy':
            childDiv.classList.add("bg-bookmark-red");
            changeFeatureOption(parentDiv, 'simple').classList.remove('bg-bookmark-red');
            changeFeatureOption(parentDiv, 'easy').classList.remove('bg-bookmark-red');
            featureImage.src = "./images/illustration-features-tab-2.svg";
            featureContentHeading.innerHTML = 'Intelligent search';
            featureContetnPara.innerHTML = 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.';
            break;
        case 'easy':
            childDiv.classList.add("bg-bookmark-red");
            changeFeatureOption(parentDiv, 'speedy').classList.remove('bg-bookmark-red');
            changeFeatureOption(parentDiv, 'simple').classList.remove('bg-bookmark-red');
            featureImage.src = "./images/illustration-features-tab-3.svg";
            featureContentHeading.innerHTML = 'Share your bookmarks';
            featureContetnPara.innerHTML = 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.';
            break;
        default:
            break;
    }
}

function changeFeatureOption(parentDiv, feature) {
    return document.getElementById(feature).querySelector('div');
}

// FAQs
const faqBoxes = document.querySelectorAll('.faq-box');
faqBoxes.forEach((faqBox) => {
    faqBox.addEventListener('click', () => {
        const faqDesc = faqBox.querySelector('.faq-desc');

        // Close all other faq-desc elements
        faqBoxes.forEach((otherFaqBox) => {
            if (otherFaqBox !== faqBox) {
                const otherFaqDesc = otherFaqBox.querySelector('.faq-desc');
                otherFaqDesc.classList.add('hidden');
            }
        });

        // Toggle visibility of the clicked faq-desc
        faqDesc.classList.toggle('hidden');
    });
});

// validate email
function validateEmail() {
    var email = document.getElementById("email").value;
    var rel = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    if (!rel.test(email)) {
      document.getElementById("valid").innerHTML =
        "\nPlease Enter a valid email address";
      document.getElementById("email").style.border = "0.5px solid red";
      document.getElementById("email").style.color = "red"; 
      document.getElementById("valid").classList.remove('hidden') ;
      document.getElementById("email-box").style.background = "#FA5959";
      document.getElementById("email-box").style.padding = '.2rem' ; 
      document.getElementById("email-box").style.borderRadius = '.5rem'

      
    } else {
        document.getElementById("valid").classList.add('hidden') ;
      document.getElementById("valid").innerHTML = "";

      document.getElementById("email").style.border =
        "0.5px solid rgba(0,0,0,0.3)";
    }
  }

//   Bars icon
const bars = document.getElementById('bars');
const mobileNavContainer = document.getElementById('mobile-nav-container');
const closeMobileNav = document.getElementById('closeMobileNav');
closeMobileNav.addEventListener("click" ,() =>{
    mobileNavContainer.classList.add('hidden');
})
bars.addEventListener("click" ,()=>{
    mobileNavContainer.classList.remove('hidden');
})