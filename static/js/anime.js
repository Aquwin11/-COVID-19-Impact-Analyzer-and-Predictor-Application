const cover = document.querySelector('.slider');
const article = document.querySelector('article');
const para = document.querySelector('article p');
const slide=document.getElementById("slide");
const paragraph=document.getElementById("paragraph");


var i=0;
var images =[];
var time =6000;

images[0]='static/img/info and resources.png'
images[2]='static/img/Covid-19-vaccine-.jpg'
images[1]='static/img/mask.jpg'

function changeImg(){
    slide.src=images[i];
    if(i<   images.length-1)
    {
        i++;
        const t1 =new TimelineMax();
        t1.fromTo(cover,1,{x:"-800"},{x:"0",ease:Power2.easeInOut})
        .fromTo(article,1.2,{x:"-200",opacity:"0"},{x:"0",opacity:"1",ease:Power2.easeInOut})
        .fromTo(para,1.5,{x:"-150",opacity:"0"},{x:"0",opacity:"1",ease:Power2.easeInOut},"-=1.2")
        paragraph.innerHTML="Hospitals Bed Availability Covid-19 Prediction Covid Updates";
    }
    else
    {
        i=0;
        const t1 =new TimelineMax();
        t1.fromTo(cover,1,{x:"-800"},{x:"0",ease:Power2.easeInOut})
        .fromTo(article,1.2,{x:"-200",opacity:"0"},{x:"0",opacity:"1",ease:Power2.easeInOut})
        .fromTo(para,1.5,{x:"-150",opacity:"0"},{x:"0",opacity:"1",ease:Power2.easeInOut},"-=1.2")
        paragraph.innerHTML="Vaccination Register and Schedule Appointment";

    }
    setTimeout("changeImg()",time)
    const t1 =new TimelineMax();
    t1.fromTo(cover,1,{x:"-800"},{x:"0",ease:Power2.easeInOut})
    .fromTo(article,1.2,{x:"-200",opacity:"0"},{x:"0",opacity:"1",ease:Power2.easeInOut})
    .fromTo(para,1.5,{x:"-150",opacity:"0"},{x:"0",opacity:"1",ease:Power2.easeInOut},"-=1.2")
}

window.onload=changeImg;
