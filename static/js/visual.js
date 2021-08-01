let selection = document.querySelector("select");
let result=document.querySelector("h2");
const confirmmap=document.getElementById("confirmmap")
const confirmbar=document.getElementById("confirmbar")
const overallbar=document.getElementById("overallbar")
const heading=document.getElementById("heading");

selection.addEventListener('change',()=>{
    console.log(selection.selectedIndex);
    if(selection.selectedIndex==1)
    {
        confirmmap.src="static/img/deaths.png";
        confirmbar.src="https://aquwin11.github.io/visual/deathbar1.html"
        overallbar.src="https://aquwin11.github.io/visual/deathoverall1.html"
        heading.innerHTML="Deaths all over india"
    }
    else if(selection.selectedIndex==2)
    {
        confirmmap.src="static/img/recovery.png";
        confirmbar.src="https://aquwin11.github.io/visual/recoverybar1.html"
        overallbar.src="https://aquwin11.github.io/visual/recoveryoverall1.html"
        heading.innerHTML="Recovery all over india"
    }
    if(selection.selectedIndex==0)
    {
        confirmmap.src="static/img/confirmcases.png";
        confirmbar.src="https://aquwin11.github.io/visual/confirmcasesbar1.html"
        overallbar.src="https://aquwin11.github.io/visual/confirmoverall1.html"
        heading.innerHTML="Confirm  cases"
    }
    if(selection.selectedIndex==3)
    {
        confirmmap.src="static/img/ratio.png";
        confirmbar.src="https://aquwin11.github.io/visual/ratiobar1.html"
        overallbar.src="https://aquwin11.github.io/visual/ratiooverall1.html"
        heading.innerHTML="death to confirmed ratio"
    }
})
