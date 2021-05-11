var imgs= Array.from(document.querySelectorAll(".img-fluid"));
var fixedBox=document.getElementById("fixedBox");
var closeIcon=document.getElementById("close");
var boxItem=document.getElementById("boxItem");
var nextIcon=document.getElementById("next");
var prevIcon=document.getElementById("prev");
var currentIndex;
var nextBtn=document.getElementById("nextBtn")

for(var i=0;i<imgs.length;i++)
{
        imgs[i].addEventListener("click",function(e){
                fixedBox.style.display="flex";
                var imgSrc=e.target.src;
                boxItem.style.backgroundImage=`url(${imgSrc})`;
                currentIndex=imgs.indexOf(e.target);
                prevIcon.style.backgroundColor="rgba(0, 0, 0,.8)";
                prevIcon.style.color="#fff";
                nextIcon.style.backgroundColor="rgba(0, 0, 0,.8)";
                nextIcon.style.color="#fff"


        })
}
closeIcon.addEventListener("click",closeSlider)
function closeSlider()
{
        fixedBox.style.display="none"
}
nextIcon.addEventListener("click",nextSlide)
function nextSlide()
{
        
        if(currentIndex<imgs.length-1)
        {
                currentIndex++;
                var imgSrc=imgs[currentIndex].src;
                boxItem.style.backgroundImage=`url(${imgSrc})`; 
                prevIcon.style.backgroundColor="rgba(0, 0, 0,.8)";
                prevIcon.style.color="#fff"
              
        }else 
        {
                nextIcon.style.backgroundColor="rgba(0, 0, 0,.4)"
                nextIcon.style.color="rgba(0, 0, 0,.3)"
        }
                   
}

prevIcon.addEventListener("click",prevSlide)
function prevSlide()
{
       
        if(currentIndex>0)
        {
                currentIndex--;
                var imgSrc=imgs[currentIndex].src;
                boxItem.style.backgroundImage=`url(${imgSrc})`;
                nextIcon.style.backgroundColor="rgba(0, 0, 0,.8)";
                nextIcon.style.color="#fff"

        }else{
                prevIcon.style.backgroundColor="rgba(0, 0, 0,.4)"
                prevIcon.style.color="rgba(0, 0, 0,.3)"        }

             
}
// function nextSlide()
// {
//         currentIndex++;
//         if(currentIndex==imgs.length)
//         {
//                  currentIndex=0;
//         }
//                 var imgSrc=imgs[currentIndex].src;
//                 boxItem.style.backgroundImage=`url(${imgSrc})`;       
// }

// prevIcon.addEventListener("click",prevSlide)
// function prevSlide()
// {
//         currentIndex--;
//         if(currentIndex<0)
//         {
//                 currentIndex=imgs.length-1;
//         }

//                 var imgSrc=imgs[currentIndex].src;
//                 boxItem.style.backgroundImage=`url(${imgSrc})`;

// }
document.addEventListener("keydown",function(e){
        if(e.key=="Escape")
        {
                closeSlider();
        }else if(e.key=="ArrowRight")
        {
                nextSlide();
        }else if(e.key=="ArrowLeft")
        {
                prevSlide();
        }
})

