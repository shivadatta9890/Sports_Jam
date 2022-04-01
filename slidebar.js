function sliders() {

    var slider_1 = document.querySelector('.slider_1');
    var slider_2 = document.querySelector('.slider_2');
    var slide1 = document.querySelector('.slide1');
    var slide2 = document.querySelector('.slide2');
    var slide3 = document.querySelector('.slide3');
    var slide4 = document.querySelector('.slide4');
    
    var section_index = 0;
    
    slide1.addEventListener('mouseover', function(){
        slider_1.style.transform = 'translate('+ 0 +'%)';
    })
    slide2.addEventListener('mouseover', function(){
        slider_1.style.transform = 'translate('+ -45 +'%)';
    })
    slide3.addEventListener('mouseover', function(){
        slider_1.style.transform = 'translate('+ -90 +'%)';
    })
    slide4.addEventListener('mouseover', function(){
        slider_1.style.transform = 'translate('+ -130 +'%)';
    })
    
    slide1.addEventListener('mouseover', function(){
        slider_2.style.transform = 'translate('+ 0 +'%)';
    })
    slide2.addEventListener('mouseover', function(){
        slider_2.style.transform = 'translate('+ -25 +'%)';
    })
    slide3.addEventListener('mouseover', function(){
        slider_2.style.transform = 'translate('+ -50 +'%)';
    })
    slide4.addEventListener('mouseover', function(){
        slider_2.style.transform = 'translate('+ -75 +'%)';
    })

    }

    export default sliders;