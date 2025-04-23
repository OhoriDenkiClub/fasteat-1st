const num_docRef=classcollection.doc("currentnumber");
num_docRef.onSnapshot((doc) => {
    document.getElementById("num_view_num").innerHTML=doc.data().currentnumber;
    document.getElementById("num_view_3").innerHTML=`最後尾推定${(Number(document.getElementById("next-order-number").innerHTML)-Number(doc.data().currentnumber)-1)*Number(document.getElementById("cook-time").value)}分待ち`;
}, (error) => {
    document.getElementById("num_view_num").innerHTML="Error"
});