classcollection.doc("status").onSnapshot((doc)=>{
    var value=doc.data().status;
    var open=document.getElementById("open");
    var pause=document.getElementById("pause");
    var close=document.getElementById("close");
    if(value==0){
        open.checked=true;
    }else if(value==1){
        pause.checked=true;
    }else if(value==2){
        close.checked=true;
    }
})
classcollection.doc("foodloss").onSnapshot((doc)=>{
    var value=doc.data().foodloss;
    var on=document.getElementById("on");
    var off=document.getElementById("off");
    if(value){
        on.checked=true;
    }else {
        off.checked=true;
    }
})
classcollection.doc("cooktime").onSnapshot((doc)=>{
    document.getElementById("cook-time").value=doc.data().cooktime;
})
function store_setting(value){
    classcollection.doc("status").set({
        status:value
    })
    .catch((error)=>{
        alert("エラー:StatusSet:"+error);
    })
}
function foodloss_setting(value){
    classcollection.doc("foodloss").set({
        foodloss:value
    })
    .catch((error)=>{
        alert("エラー:FoodLossSet:"+error);
    })
}
function send_cook_time(){
    var input=document.getElementById("cook-time");
    var num=input.value
    if(!isNaN(num)){
        if(num<0){
            alert("時間は0以上の整数で入力してください。")
        }else{
            classcollection.doc("cooktime").set({
                cooktime:Number(input.value)
            })
            .catch((error)=>{
                alert("エラー:CtSet:"+error);
            });
            alert("調理時間が正常に変更されました")
        }
    }else{
        alert("時間は0以上の半角整数で入力してください。");
    }
}