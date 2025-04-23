const right=document.querySelectorAll(".right");
const left=document.querySelectorAll(".left");
const line=document.getElementById("line");
const a=document.getElementById("23")
const b=document.getElementById("24")
const a9=document.getElementById("23-9");
const a10=document.getElementById("23-10");
const a12=document.getElementById("23-12");
const b1=document.getElementById("24-1");
const b2=document.getElementById("24-2");
const b3=document.getElementById("24-3");
const b5=document.getElementById("24-5");
const b6=document.getElementById("24-6");
window.addEventListener('scroll', function() {
        const scrollPosition = this.window.scrollY;
        line.style.height=scrollPosition+'px';
        if(scrollPosition>0 && scrollPosition<this.window.innerHeight/2){
                a.classList.remove("fadein")
                b.classList.remove("fadein")
        }
        if(a.getBoundingClientRect().top-this.window.innerHeight<-200){
                a.classList.add("fadein")
        }
        if(b.getBoundingClientRect().top-this.window.innerHeight<-200){
                b.classList.add("fadein")
        }
        if(a9.getBoundingClientRect().top-this.window.innerHeight<-200){
                a9.classList.remove("fadeoutr")
                if(!(a9.classList.contains("fadedr") || a9.classList.contains("fadeinr"))){
                        a9.classList.add("fadeinr")
                }
        }else{
                if(a9.classList.contains('fadeinr') || a9.classList.contains('fadedr')){
                        a9.classList.remove("fadedr","fadeinr")
                        a9.classList.add("fadeoutr")
                }
        }
        if(a10.getBoundingClientRect().top-this.window.innerHeight<-200){
                a10.classList.remove("fadeoutl")
                if(!(a10.classList.contains("fadedl") || a10.classList.contains("fadeinl"))){
                        a10.classList.add("fadeinl")
                }
        }
        else{
                if(a10.classList.contains('fadeinl') || a10.classList.contains('fadedl')){
                        a10.classList.remove("fadedl","fadeinl")
                        a10.classList.add("fadeoutl")
                }
        }
        if(a12.getBoundingClientRect().top-this.window.innerHeight<-200){
                a12.classList.remove("fadeoutr")
                if(!(a12.classList.contains("fadedr") || a12.classList.contains("fadeinr"))){
                        a12.classList.add("fadeinr")
                }
        }else{
                if(a12.classList.contains('fadeinr') || a12.classList.contains('fadedr')){
                        a12.classList.remove("fadedr","fadeinr")
                        a12.classList.add("fadeoutr")
                }
        }
        if(b1.getBoundingClientRect().top-this.window.innerHeight<-200){
                b1.classList.remove("fadeoutl")
                if(!(b1.classList.contains("fadedl") || b1.classList.contains("fadeinl"))){
                        b1.classList.add("fadeinl")
                }
        }else{
                if(b1.classList.contains('fadeinl') || b1.classList.contains('fadedl')){
                        b1.classList.remove("fadedl","fadeinl")
                        b1.classList.add("fadeoutl")
                }
        }
        if(b2.getBoundingClientRect().top-this.window.innerHeight<-200){
                b2.classList.remove("fadeoutr")
                if(!(b2.classList.contains("fadedr") || b2.classList.contains("fadeinr"))){
                        b2.classList.add("fadeinr")
                }
        }else{
                if(b2.classList.contains('fadeinr') || b2.classList.contains('fadedr')){
                        b2.classList.remove("fadedr","fadeinr")
                        b2.classList.add("fadeoutr")
                }
        }
        if(b3.getBoundingClientRect().top-this.window.innerHeight<-200){
                b3.classList.remove("fadeoutl")
                if(!(b3.classList.contains("fadedl") || b3.classList.contains("fadeinl"))){
                        b3.classList.add("fadeinl")
                }
        }else{
                if(b3.classList.contains('fadeinl') || b3.classList.contains('fadedl')){
                        b3.classList.remove("fadedl","fadeinl")
                        b3.classList.add("fadeoutl")
                }
        }
        if(b5.getBoundingClientRect().top-this.window.innerHeight<-200){
                b5.classList.remove("fadeoutr")
                if(!(b5.classList.contains("fadedr") || b5.classList.contains("fadeinr"))){
                        b5.classList.add("fadeinr")
                }
        }else{
                if(b5.classList.contains('fadeinr') || b5.classList.contains('fadedr')){
                        b5.classList.remove("fadedr","fadeinr")
                        b5.classList.add("fadeoutr")
                }
        }
        if(b6.getBoundingClientRect().top-this.window.innerHeight<-200){
                b6.classList.remove("fadeoutl")
                if(!(b6.classList.contains("fadedl") || b6.classList.contains("fadeinl"))){
                        b6.classList.add("fadeinl")
                }
        }else{
                if(b6.classList.contains('fadeinl') || b6.classList.contains('fadedl')){
                        b6.classList.remove("fadedl","fadeinl")
                        b6.classList.add("fadeoutl")
                }
        }
});
right.forEach((container) => {
        container.addEventListener('animationend', () => {
                if (container.classList.contains('fadeinr')) {
                        container.classList.remove('fadeinr');
                        container.classList.add('fadedr')
                } else {
                        container.classList.remove('fadeoutr');
                }
        });
        container.addEventListener('animationcancel', () => {
                if (container.classList.contains('fadeinr')) {
                        container.classList.remove('fadeinr');
                        container.classList.add('fadedr')
                } else {
                        container.classList.remove('fadeoutr');
                }
        });
})
left.forEach((container) => {
        container.addEventListener('animationend', () => {
                if (container.classList.contains('fadeinl')) {
                        container.classList.remove('fadeinl');
                        container.classList.add('fadedl')
                } else {
                        container.classList.remove('fadeoutl');
                }
        });
        container.addEventListener('animationcancel', () => {
                if (container.classList.contains('fadeinl')) {
                        container.classList.remove('fadeinl');
                        container.classList.add('fadedl')
                } else {
                        container.classList.remove('fadeoutl');
                }
        });
})

