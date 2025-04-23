const non_docRef = classcollection.doc("nextordernumber");

window.addEventListener( "load" , ()=> {
    // 商品数に合わせて加減
    document.getElementById("order-button-1-minus").setAttribute("disabled", true);
    document.getElementById("order-button-2-minus").setAttribute("disabled", true);
    document.getElementById("order-send-button").setAttribute("disabled", true);
    document.getElementById("order-send-button").classList.add("order-send-button-after");
});


function prod_button_onclick(num, type){
    // 商品数に合わせて加減
    var prod1=document.getElementById("prod-num-output1");
    var prod2=document.getElementById("prod-num-output2");
    // 商品数に合わせて加減
    var prod1_num=Number(prod1.innerHTML);
    var prod2_num=Number(prod2.innerHTML);
    const send_button=document.getElementById("order-send-button");
    // 商品数に合わせて加減
    if (num == "1"){
        if (type=="minus"){
            prod1_num=prod1_num-1;
            prod1.innerHTML=prod1_num;
            if(prod1_num==0){
                document.getElementById("order-button-1-minus").setAttribute("disabled", true);
                if(prod2_num==0){
                    send_button.setAttribute("disabled", true);
                    document.getElementById("order-send-button").classList.add("order-send-button-after");
                } else{
                    send_button.removeAttribute("disabled");
                    document.getElementById("order-send-button").classList.remove("order-send-button-after");
                }
            }
        } else if(type=="plus"){
            prod1_num=prod1_num+1;
            prod1.innerHTML=prod1_num;
            document.getElementById("order-button-1-minus").removeAttribute("disabled");
            send_button.removeAttribute("disabled");
            document.getElementById("order-send-button").classList.remove("order-send-button-after");
        }
    } else if(num=="2"){
        if (type=="minus"){
            prod2_num=prod2_num-1;
            prod2.innerHTML=prod2_num;
            if(prod2_num==0){
                document.getElementById("order-button-2-minus").setAttribute("disabled", true);
                if(prod1_num==0){
                    send_button.setAttribute("disabled", true);
                    document.getElementById("order-send-button").classList.add("order-send-button-after");
                } else{
                    send_button.removeAttribute("disabled");
                    document.getElementById("order-send-button").classList.remove("order-send-button-after");
                }
            }
        } else if(type=="plus"){
            prod2_num=prod2_num+1;
            prod2.innerHTML=prod2_num;
            document.getElementById("order-button-2-minus").removeAttribute("disabled");
            send_button.removeAttribute("disabled");
            document.getElementById("order-send-button").classList.remove("order-send-button-after");
        }
    }
}
function order_send(){
    document.getElementById("order-confirm").classList.add("order-confirm-after");
}
function order_send_cancel(){
    document.getElementById("order-confirm").classList.remove("order-confirm-after");
}
function order_send_continue(){
    var nextordernumber=Number(document.getElementById("next-order-number").innerHTML);
    var now=new Date();
    var now_hour=now.getHours();
    // 商品数に合わせて加減
    var prod1=document.getElementById("prod-num-output1");
    var prod2=document.getElementById("prod-num-output2");
    // 商品数に合わせて加減
    var prod1_num=Number(prod1.innerHTML);
    var prod2_num=Number(prod2.innerHTML);
    // 商品数に合わせて{}の中を加減
    var neworder={
        num:nextordernumber,
        prod1:prod1_num,
        prod2:prod2_num,
        cooked:false,
        received:false,
        hour:now_hour
    }
    fetch(neworder_controll, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(neworder)
    })
    .then(response => {
        if (!response.ok) {
        throw new Error('POST request failed');
        }
        return response.json();
    })
    .then(data => {
    })
    .then(()=>{
        non_docRef.set({
            nextordernumber:nextordernumber+1
            })
            .then(() => {
                // 商品数に合わせて加減
                document.getElementById("prod-num-output1").innerHTML=0;
                document.getElementById("prod-num-output2").innerHTML=0;
                document.getElementById("order-confirm").classList.remove("order-confirm-after");
                document.getElementById("order-send-button").classList.add("order-send-button-after");
                document.getElementById("order-button-1-minus").setAttribute("disabled", true);
                document.getElementById("order-button-2-minus").setAttribute("disabled", true);
            })
            .catch((error) => {
                alert("エラー:NonWrite:", error);
            });
    })
    .catch(error => {
        alert("エラー:neworder_fetch",error);
    });
}