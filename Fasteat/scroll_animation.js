window.scroll(0,0);
const title = document.getElementById("title");
const title2=document.getElementById("title2");
const Scroll = document.getElementById("scroll")
const how_to_use_label1=document.getElementById("how-to-use-label1");
const how_to_use_label2=document.getElementById("how-to-use-label2");
const how_to_use_1=document.getElementById("how-to-use-1");
const how_to_use_2=document.getElementById("how-to-use-2");
const how_to_use_3=document.getElementById("how-to-use-3");
const how_to_use_4=document.getElementById("how-to-use-4");
const intro_label1=document.getElementById("intro-label1");
const intro_label2=document.getElementById("intro-label2");
const intro_inside=document.getElementById("intro-inside");
const intro_img=document.getElementById("intro-img");
const ui_label1=document.getElementById("ui-label1");
const ui_label2=document.getElementById("ui-label2");
const ui_inside=document.getElementById("ui-inside");
const ui_img=document.getElementById("ui-img");
const func_label1=document.getElementById("func-label1");
const func_label2=document.getElementById("func-label2");
const func_inside1=document.getElementById("func-inside1");
const func_inside2=document.getElementById("func-inside2");
const func_inside3=document.getElementById("func-inside3");
const func_inside4=document.getElementById("func-inside4");
const func_inside5=document.getElementById("func-inside5");
const func_reception=document.getElementById("func-reception");
const func_order=document.getElementById("func-order");
const func_graph=document.getElementById("func-graph");
const func_setting=document.getElementById("func-setting");
const func_ipad=document.getElementById("func-ipad");
const func_inside6=document.getElementById("func-inside6");
const spacer2_top=document.getElementById("spacer2").getBoundingClientRect().top;
const faq_label1=document.getElementById("faq-label1");
const faq_label2=document.getElementById("faq-label2");
const faqswiper=document.getElementById("faqswiper")
    window.addEventListener('scroll', function() {
        const scrollPosition = this.window.scrollY;

        if (scrollPosition > 0) {
            title.classList.remove("title-anim");
            var opacity = 1-scrollPosition/1000;
            var afterscale=1+scrollPosition/4000;
            title.style.opacity = opacity;
            title.style.transform="scale("+afterscale+")";
            title2.style.opacity=0;
        }
        if(1500<scrollPosition && scrollPosition<=2000){
            var opacity=scrollPosition/500 - 3;
            var afterscale=scrollPosition/1500; 
            title2.style.opacity=opacity;
            Scroll.style.opacity = 1;
            title2.style.transform="scale("+afterscale+")";
        }
        if(2000<scrollPosition && scrollPosition<2500){
            var opacity=5 - scrollPosition/500;
            var afterscale=scrollPosition/1500; 
            title2.style.opacity=opacity;
            Scroll.style.opacity = opacity;
            title2.style.transform="scale("+afterscale+")";
            how_to_use_label1.classList.remove("fadein");
            how_to_use_label2.classList.remove("fadein");
            how_to_use_1.classList.remove("fadein");
            how_to_use_2.classList.remove("fadein");
            how_to_use_3.classList.remove("fadein");
            how_to_use_4.classList.remove("fadein");
            faq_label1.classList.remove("fadein")
            faq_label2.classList.remove("fadein")
            faqswiper.classList.remove("fadein")
        }
        if(how_to_use_label1.getBoundingClientRect().top-this.window.innerHeight<-200){
            how_to_use_label1.classList.add("fadein");
            how_to_use_label2.classList.add("fadein");
        }
        if(how_to_use_1.getBoundingClientRect().top-this.window.innerHeight<-200){
            how_to_use_1.classList.add("fadein")
        }
        if(how_to_use_2.getBoundingClientRect().top-this.window.innerHeight<-200){
            how_to_use_2.classList.add("fadein")
        }
        if(how_to_use_3.getBoundingClientRect().top-this.window.innerHeight<-200){
            how_to_use_3.classList.add("fadein")
        }
        if(how_to_use_4.getBoundingClientRect().top-this.window.innerHeight<-200){
            how_to_use_4.classList.add("fadein")
        }else{
            intro_label1.classList.remove("fadein");
            intro_label2.classList.remove("fadein");
            intro_inside.classList.remove("fadein");
            intro_img.classList.remove("fadein2");
        }
        if(intro_label1.getBoundingClientRect().top-this.window.innerHeight<-200){
            intro_label1.classList.add("fadein");
            intro_label2.classList.add("fadein");
        }
        if(intro_img.getBoundingClientRect().top-this.window.innerHeight<-200){
            intro_img.classList.add("fadein2");
        }
        if(intro_inside.getBoundingClientRect().top-this.window.innerHeight<-200){
            intro_inside.classList.add("fadein");
        }else{
            ui_label1.classList.remove("fadein");
            ui_label2.classList.remove("fadein");
            ui_inside.classList.remove("fadein");
            ui_img.classList.remove("fadein3")
        }
        if(ui_label1.getBoundingClientRect().top-this.window.innerHeight<-200){
            ui_label1.classList.add("fadein");
            ui_label2.classList.add("fadein");
        }
        if(ui_inside.getBoundingClientRect().top-this.window.innerHeight<-200){
            ui_inside.classList.add("fadein")
        }
        if(ui_img.getBoundingClientRect().top-this.window.innerHeight<-200){
            ui_img.classList.add("fadein3")
        }else{
            func_label1.classList.remove("fadein");
            func_label2.classList.remove("fadein");
            func_inside1.classList.remove("fadein");
        }
        if(func_label1.getBoundingClientRect().top-this.window.innerHeight<-200){
            func_label1.classList.add("fadein")
        }
        if(func_label2.getBoundingClientRect().top-this.window.innerHeight<-200){
            func_label2.classList.add("fadein")
        }
        if(func_inside1.getBoundingClientRect().top-this.window.innerHeight<-200){
            func_inside1.classList.add("fadein")
        }
        if(scrollPosition<spacer2_top){
            func_inside2.style.opacity=0
            func_inside3.style.opacity=0
            func_inside4.style.opacity=0
            func_inside5.style.opacity=0
            func_inside6.style.opacity=0
            func_order.style.opacity=0
            func_reception.style.opacity=0
            func_graph.style.opacity=0
            func_setting.style.opacity=0
            func_ipad.style.opacity=0
        }
        if(spacer2_top<scrollPosition && scrollPosition<=spacer2_top+700){
            var opacity=1-((scrollPosition-spacer2_top-700)/500)**2
            var aftery=(-scrollPosition+spacer2_top+700)/15
            func_inside2.style.opacity=opacity
            func_inside2.style.transform="translateY("+aftery+"px)";
            func_reception.style.opacity=opacity
            func_ipad.style.opacity=opacity
            func_inside3.style.opacity=0
            func_inside4.style.opacity=0
            func_inside5.style.opacity=0
            func_inside6.style.opacity=0
            func_order.style.opacity=0
            func_graph.style.opacity=0
            func_setting.style.opacity=0
        }
        if(spacer2_top+700<=scrollPosition && scrollPosition<=spacer2_top+1300){
            var opacity=1-((scrollPosition-spacer2_top-700)/500)**2
            var aftery=(-scrollPosition+spacer2_top+700)/15
            func_inside2.style.opacity=opacity
            func_inside2.style.transform="translateY("+aftery+"px)";
            func_reception.style.opacity=opacity
            func_ipad.style.opacity=1
            func_inside4.style.opacity=0
            func_inside5.style.opacity=0
            func_inside6.style.opacity=0
            func_graph.style.opacity=0
            func_setting.style.opacity=0
        }
        if(spacer2_top+800<scrollPosition && scrollPosition<=spacer2_top+2100){
            var opacity=1-((scrollPosition-spacer2_top-1450)/500)**2
            var aftery=(-scrollPosition+spacer2_top+1450)/15
            func_inside3.style.opacity=opacity
            func_inside3.style.transform="translateY("+aftery+"px)";
            func_order.style.opacity=opacity
            func_ipad.style.opacity=1
            func_inside5.style.opacity=0
            func_inside6.style.opacity=0
            func_setting.style.opacity=0
        }
        if(spacer2_top+1600<scrollPosition && scrollPosition<=spacer2_top+2900){
            var opacity=1-((scrollPosition-spacer2_top-2250)/500)**2
            var aftery=(-scrollPosition+spacer2_top+2250)/15
            func_inside4.style.opacity=opacity
            func_inside4.style.transform="translateY("+aftery+"px)";
            func_graph.style.opacity=opacity
            func_ipad.style.opacity=1
            func_inside2.style.opacity=0
            func_inside6.style.opacity=0
            func_reception.style.opacity=0
        }
        if(spacer2_top+2400<scrollPosition && scrollPosition<=spacer2_top+3100){
            var opacity=1-((scrollPosition-spacer2_top-3100)/500)**2
            var aftery=(-scrollPosition+spacer2_top+3100)/15
            func_inside5.style.opacity=opacity
            func_inside5.style.transform="translateY("+aftery+"px)";
            func_setting.style.opacity=opacity
            func_ipad.style.opacity=1
            func_inside3.style.opacity=0
            func_inside2.style.opacity=0
            func_inside6.style.opacity=0
            func_order.style.opacity=0
            func_reception.style.opacity=0
        }
        if(spacer2_top+3100<=scrollPosition && scrollPosition<=spacer2_top+3700){
            var opacity=1-((scrollPosition-spacer2_top-3100)/500)**2
            var aftery=(-scrollPosition+spacer2_top+3100)/15
            func_inside5.style.opacity=opacity
            func_inside5.style.transform="translateY("+aftery+"px)";
            func_setting.style.opacity=opacity
            func_ipad.style.opacity=opacity
            func_inside3.style.opacity=0
            func_inside4.style.opacity=0
            func_inside2.style.opacity=0
            func_order.style.opacity=0
            func_graph.style.opacity=0
            func_reception.style.opacity=0
        }
        if(scrollPosition>spacer2_top+3700){
            var opacity=1-((scrollPosition-spacer2_top-4200)/500)**2
            func_inside6.style.opacity=opacity
            func_inside3.style.opacity=0
            func_inside4.style.opacity=0
            func_inside5.style.opacity=0
            func_inside2.style.opacity=0
            func_order.style.opacity=0
            func_graph.style.opacity=0
            func_reception.style.opacity=0
            func_setting.style.opacity=0
            func_ipad.style.opacity=0
        }
        if(faq_label1.getBoundingClientRect().top-this.window.innerHeight<-200){
            faq_label1.classList.add("fadein")
            faq_label2.classList.add("fadein")
        }
        if(faqswiper.getBoundingClientRect().top-this.window.innerHeight<-200){
            faqswiper.classList.add("fadein")
        }
    });