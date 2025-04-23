<?php
    $loopCount = $_POST['loopCount'];

    $data = [];
    $data[]="<span class='loader'></span>";
    for($i = $loopCount-1; $i > 0; $i--){
        // 商品数に合わせて加減
        $data[]= "<div class='reception-inside border-radius-1'>
<div class='raception-table-order-number'>$i</div>
<div id='reception-prod1-$i' class='reception-table-prod1'></div>
<div id='reception-prod2-$i' class='reception-table-prod2'></div>
<div class='reception-table-cooked'><input id='reception-cooked-$i' onclick='on_cooked($i)' type='checkbox'></div>
<div class='reception-table-received'><input id='reception-received-$i' onclick='on_received($i)' type='checkbox'></div>
</div>";
    }
    header('Content-Type: application/json');
    echo json_encode($data);
?>