//ScrollDown

window.onload = function() {
    const videoLink = document.querySelector('.ul1 li:first-child a');
    
    if (videoLink) {
        videoLink.onclick = function(e) {
            e.preventDefault();
            window.scrollBy({ top: 830, behavior: 'smooth' });
        };
    }

    const videoLink2 = document.querySelector(".ul1 li:nth-child(2) a");

    if (videoLink2){
        videoLink2.onclick = function(e){
            e.preventDefault();
            window.scrollBy({top: 1660, behavior: "smooth"})
        }
    }

    const videoLink3 = document.querySelector(".ul2 li:first-child a");

    if (videoLink3){
        videoLink3.onclick = function(e){
            e.preventDefault();
            window.scrollBy({top: 2520, behavior: "smooth"})
        }
    }

    const videoLink4 = document.querySelector(".ul2 li:nth-child(2) a");

    if (videoLink4){
        videoLink4.onclick = function(e){
            e.preventDefault();
            window.scrollBy({top: 1660*2, behavior: "smooth"})
        }
    }
};
