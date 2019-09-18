var slideIndex=0;
rollSlides();

function slideVerif(slidesArray)
{
    console.log(slideIndex);
    console.log(slidesArray.length);
    if(slideIndex >= slidesArray.length )
    {
        slideIndex = 0;
    }
}

function rollSlides()
{
    var slides = document.getElementsByClassName("newsSlide");
    slides[slideIndex].style.display="none";
    slideIndex++;
    slideVerif(slides);
    slides[slideIndex].style.display="block";
    setTimeout(rollSlides, 5000);
}