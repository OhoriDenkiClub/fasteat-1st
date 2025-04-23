function handleFirestoreUpdate(loopCount) {
    fetch('reception_controll.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'loopCount=' + loopCount,
    })
    .then(response => response.json())
    .then(data => {
        const divElement = document.getElementById('reception-result');
        divElement.innerHTML = '';
        data.forEach(item => {
            const tempDiv=document.createElement('div');
            tempDiv.innerHTML=item;
            divElement.appendChild(tempDiv.firstChild);
        });
    })
    .then(()=> {
        fetch(data_json,{
            method:'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({ timestamp: new Date().getTime() })
        })
        .then(response=>response.json())
        .then(data=>{
            for (let i = 1; i < loopCount; i++) {
                // 商品数に合わせて増減
                document.getElementById('reception-prod1-' + i).innerHTML=data[i].prod1;
                document.getElementById('reception-prod2-' + i).innerHTML=data[i].prod2;
                document.getElementById('reception-cooked-' + i).checked=data[i].cooked;
                document.getElementById('reception-received-' + i).checked=data[i].received;
            }
        })
        .catch(error=>{
            alert("エラー:data-json_fetch:"+error);
        })
    })
    .catch(error => {
        alert("エラー:reception-PHP_fetch:"+error);
    });
}

function on_cooked(number){
    var beforenum=number-1;
    var afternum=number+1;
    var beforecooked=document.getElementById("reception-cooked-"+beforenum);
    var thiscooked=document.getElementById("reception-cooked-"+number);
    var aftercooked=document.getElementById("reception-cooked-"+afternum);
    if(thiscooked.checked){
        if(beforecooked!==null){
            if(beforecooked.checked){
                var subject={
                    num:number,
                    cooked:thiscooked.checked
                }
                fetch(cooked_controll, {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(subject)
                })
                .then(response => {
                    if (!response.ok) {
                    throw new Error('POST request failed');
                    }
                    return response.json();
                })
                .then(() => {
                    num_docRef.set({
                        currentnumber:number
                    })
                    .catch((error)=>{
                        alert("エラー:CnWrite:"+error)
                    })
                })
                .catch(error => {
                    alert("エラー:cooked-PHP_fetch",error);
                });
            }else{
                thiscooked.checked = false;
                alert("先に前の注文にチェックをつけて下さい");
            }
        }else{
            var subject={
                num:number,
                cooked:thiscooked.checked
            }
            fetch(cooked_controll, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(subject)
            })
            .then(response => {
                if (!response.ok) {
                throw new Error('POST request failed');
                }
                return response.json();
            })
            .then(() => {
                num_docRef.set({
                    currentnumber:number
                })
                .catch((error)=>{
                    alert("エラー:CnWrite:"+error)
                })
            })
            .catch(error => {
                alert("エラー:cooked-PHP_fetch",error);
            });
        }
    }else{
        if(aftercooked!==null){
            if(aftercooked.checked){
                thiscooked.checked = true;
                alert("先に後の注文にチェックをつけて下さい");
            }else{
                var subject={
                    num:number,
                    cooked:thiscooked.checked
                }
                fetch(cooked_controll, {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(subject)
                })
                .then(response => {
                    if (!response.ok) {
                    throw new Error('POST request failed');
                    }
                    return response.json();
                })
                .then(() => {
                    num_docRef.set({
                        currentnumber:beforenum
                    })
                    .catch((error)=>{
                        alert("エラー:CnWrite:"+error)
                    })
                })
                .catch(error => {
                    alert("エラー:cooked-PHP_fetch",error);
                });
            }
        }else{
            var subject={
                num:number,
                cooked:thiscooked.checked
            }
            fetch(cooked_controll, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(subject)
            })
            .then(response => {
                if (!response.ok) {
                throw new Error('POST request failed');
                }
                return response.json();
            })
            .then(() => {
                num_docRef.set({
                    currentnumber:number
                })
                .catch((error)=>{
                    alert("エラー:CnWrite:"+error)
                })
            })
            .catch(error => {
                alert("エラー:cooked-PHP_fetch",error);
            });
        }
    }
}

function on_received(number){
    var subject={
        num:number,
        received:document.getElementById("reception-received-"+number).checked
    }
    fetch(received_controll, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(subject)
    })
    .then(response => {
        if (!response.ok) {
        throw new Error('POST request failed');
        }
        return response.json();
    })
    .then(data => {
    })
    .catch(error => {
        alert("エラー:received-PHP_fetch",error);
    });
}

classcollection.doc("nextordernumber").onSnapshot((doc) => {
    var nextordernumber=doc.data().nextordernumber;
    document.getElementById("order-send-continue").removeAttribute("disabled");
    document.getElementById("next-order-number").innerHTML=nextordernumber;
    handleFirestoreUpdate(nextordernumber);
},(error)=>{
    document.getElementById("order-send-continue").setAttribute("disabled", true);
    document.getElementById("next-order-number").innerHTML="Error";
});