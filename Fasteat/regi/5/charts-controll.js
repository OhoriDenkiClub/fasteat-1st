// JSONファイルからデータを読み込む
fetch(data_json, {
    method:'POST',
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ timestamp: new Date().getTime() })
})
.then(response => response.json())
.then(data => {
    const totalsByHour = {};
    // 商品数に合わせて加減
    let totalProd1 = 0; 
    let totalProd2 = 0; 
    let totalProd3 = 0; 
    let totalProd4 = 0; 
    for(let i=1;i<data.length; i++){
        const item=data[i];
        const hour = item.hour;
        if (!totalsByHour[hour]) {
            // {}の中を商品数に合わせて加減
            totalsByHour[hour] = { prod1: 0, prod2: 0, prod3: 0, prod4: 0, total:0};
        }
        // 商品数に合わせて加減
        totalsByHour[hour].prod1 += item.prod1;
        totalsByHour[hour].prod2 += item.prod2;
        totalsByHour[hour].prod3 += item.prod3;
        totalsByHour[hour].prod4 += item.prod4;
        // 全商品数に合わせて加減
        totalsByHour[hour].total += item.prod1+item.prod2+item.prod3+item.prod4;
        // 商品数に合わせて加減
        totalProd1 += item.prod1;
        totalProd2 += item.prod2;
        totalProd3 += item.prod3;
        totalProd4 += item.prod4;
    }

    // データの最大値を計算する
    let maxTotal = 0;
    Object.values(totalsByHour).forEach(hourData => {
        // ()の中を商品数に合わせて加減
    maxTotal = Math.max(maxTotal, hourData.prod1, hourData.prod2, hourData.prod3, hourData.prod4, hourData.total);
    });

    // Chart.jsを使ってグラフを描画する
    const ctx = document.getElementById('myChart').getContext('2d');
    // data:datasetsの中の{}の数と中を、商品数に合わせて調整。borderColorはそれぞれ別の色にして見やすくすることを推奨。
    // options:plugins:title:textを商品数に合わせて加減
    const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: Object.keys(totalsByHour),
        datasets: [
        {
        label: 'プレーン',
        data: Object.values(totalsByHour).map(hourData => hourData.prod1),
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 1
        },
        {
        label: 'ネギマヨ',
        data: Object.values(totalsByHour).map(hourData => hourData.prod2),
        borderColor: 'rgb(0, 255, 127)',
        borderWidth: 1
        },
        {
        label: 'マヨネーズ',
        data: Object.values(totalsByHour).map(hourData => hourData.prod3),
        borderColor: 'rgb(255, 146, 61)',
        borderWidth: 1
        },
        {
        label: '紅しょうが',
        data: Object.values(totalsByHour).map(hourData => hourData.prod4),
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 1
        },
        {
        label:'合計',
        data:Object.values(totalsByHour).map((hourData)=>hourData.total),
        borderColor:'rgb(55,55,57)',
        borderWidth:1
        }
        ]
    },
    options: {
        plugins:{
            title:{
                display:true,
                text:"プレーン合計:"+totalProd1+'　ネギマヨ合計:'+totalProd2+"　マヨネーズ合計:"+totalProd3+" 紅しょうが合計:"+totalProd4
            }
        },
        scales: {
        x:{
            title:{
                display:true,
                text:'時間(時)'
            }
        },
        y: {
            title:{
                display:true,
                text:"売上(個)"
            },
            max: maxTotal,
            min: 0
        }
        }
    }
    });
});