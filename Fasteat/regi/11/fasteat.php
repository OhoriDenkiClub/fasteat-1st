<!DOCTYPE html>

<html lang="ja">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <link rel="stylesheet" href="stylesheet.css" />
    <link rel="manifest" href="manifest.json">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Cache-Control" content="no-store">
    <meta http-equiv="Expires" content="0">
    <meta name=”robots” content=”noindex”>
    <title>2024文化祭食券システム_レジ</title>
    <link rel="apple-touch-icon" href="../icon-192x192.png" />
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore-compat.js"></script>
    <script src='https://code.jquery.com/jquery-3.3.1.js'></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="firebase_init.js"></script>
    <script src="json-controll-init.js"></script>
    <script src="disable-expandation.js"></script>
    <script src="disable-scroll.js"></script>
    <script src="nav-controll.js"></script>
    <script src="order-controll.js"></script>
    <script src="reception-controll.js"></script>
    <script src="num-controll.js"></script>
    <script src="charts-controll.js"></script>
    <script src="setting-controll.js"></script>
</head>
<body>
    <input id="nav_flip" type="checkbox">
    <label for="nav_flip" id="nav_flip_item"><i class='bx bx-sidebar'></i></label>
    <div id="nav_bar">
        <h1 id="nav_title"><!--クラスを入力-->3-11</h1>
        <div id="nav_button">
            <input id="order" type="radio" name="nav_input" checked onchange="orderchecked()">
            <label id="order_nav" class="nav_item border-radius-1" for="order"><i class='bx bx-food-menu'></i>  受付</label>
            <input type="radio" id="reception" name="nav_input" onchange="receptionchecked()">
            <label for="reception" class="nav_item border-radius-1" id="reception_nav"><i class='bx bx-list-check' ></i>  注文</label>
            <input type="radio" id="num" name="nav_input" onchange="numchecked()">
            <label for="num" class="nav_item border-radius-1" id="num_nav"><i class='bx bx-hash' ></i>   番号</label>
            <input type="radio" id="charts" name="nav_input" onchange="chartschecked()">
            <label for="charts" class="nav_item border-radius-1" id="charts_nav"><i class='bx bx-line-chart'></i>  売上</label>
            <input type="radio" id="settings" name="nav_input" onchange="settingschecked()">
            <label for="settings" class="nav_item border-radius-1" id="settings_nav"><i class='bx bx-cog' ></i>  設定</label>
        </div>
        <div id="ohori-icon">
            <img src="../ohori-icon.png">
        </div>
    </div>
    <div id="nav_content">
        <div id="order_view" class="view">
            <!-- 商品数に合わせて加減。それぞれの商品名も変える -->
            <div class="prods border-radius-1" id="prod1">
                <div class="spacer"></div>
                <div class="width-fit-content">ハムチーズ</div>
                <div id="prod-num-output1">0</div>
                <div class="prod-num-input border-radius-1">
                    <button type="button" id="order-button-1-minus" class="prod-num-btn border-radius-1" onclick="prod_button_onclick('1', 'minus')">-</button>
                    <div class="order-prods-partition width-fit-content">|</div>
                    <button type="button" id="order-button-1-plus" class="prod-num-btn border-radius-1" onclick="prod_button_onclick('1', 'plus')">+</button>
                </div>
                <div class="spacer"></div>
            </div>
            <br>
            <div class="prods border-radius-1" id="prod2">
                <div class="spacer"></div>
                <div class="width-fit-content">チョコマシュマロ</div>
                <div id="prod-num-output2">0</div>
                <div class="prod-num-input border-radius-1">
                    <button type="button" id="order-button-2-minus" class="prod-num-btn border-radius-1" onclick="prod_button_onclick('2', 'minus')">-</button>
                    <div class="order-prods-partition width-fit-content">|</div>
                    <button type="button" id="order-button-2-plus" class="prod-num-btn border-radius-1" onclick="prod_button_onclick('2', 'plus')">+</button>
                </div>
                <div class="spacer"></div>
            </div>
            <br>
            <div class="prods border-radius-1" id="prod3">
                <div class="spacer"></div>
                <div class="width-fit-content">シュガーバター</div>
                <div id="prod-num-output3">0</div>
                <div class="prod-num-input border-radius-1">
                    <button type="button" id="order-button-3-minus" class="prod-num-btn border-radius-1" onclick="prod_button_onclick('3', 'minus')">-</button>
                    <div class="order-prods-partition width-fit-content">|</div>
                    <button type="button" id="order-button-3-plus" class="prod-num-btn border-radius-1" onclick="prod_button_onclick('3', 'plus')">+</button>
                </div>
                <div class="spacer"></div>
            </div>
            <br>
            <button type="button" id="order-send-button" class="order-send-button border-radius-1" onclick="order_send()">
                <div><i class='bx bxs-arrow-from-bottom'></i>　送信</div>
            </button>
        </div>
        <div id="reception_view" class="view">
            <!-- 商品数に合わせて加減。それぞれの商品名も変える -->
            <div id="reception-table-head">
                <div id="reception-table-head-order-number" class="text-align-center height-fit-content">注文番号</div>
                <div id="reception-table-head-prod1" class="text-align-center height-fit-content">ハムチーズ</div>
                <div id="reception-table-head-prod2" class="text-align-center height-fit-content">チョコマシュマロ</div>
                <div id="reception-table-head-prod3" class="text-align-center height-fit-content">シュガーバター</div>
                <div id="reception-table-head-cooked" class="text-align-center height-fit-content">調理済み</div>
                <div id="reception-table-head-received" class="text-align-center height-fit-content">受け取り済み/<br>キャンセル済み</div>
            </div>
            <div id="reception-table">
                <div id="reception-result">
                    <!-- ここに注文一覧が入る、何も書かないで。関連するコードは、reception-controll.phpとreception-controll.js-->
                </div>
            </div>
        </div>
        <div id="num_view" class="view">
            <div id="num_view_1">現在</div>
            <div id="num_view_num">0</div>
            <div id="num_view_2">番まで受け取り可能</div>
            <div id="num_view_3"></div>
        </div>
        <div id="charts_view" class="view">
            <canvas id="myChart">
                <!-- ここに売上統計が入る、何も書かないで。関連するコードは、charts-controll.js -->
            </canvas>
        </div>
        <div id="settings_view" class="view">
            <div class="setting-inside">
                <div class="setting-labels">
                    店舗の状態
                </div>
                <div class="store-status">
                    <input type="radio" id="open" name="status" value="open" class=" display-none">
                    <label for="open" id="label-for-open" class="setting-button" onclick="store_setting(0)">　開店　</label>
                    <input type="radio" id="pause" name="status" value="pause" class="display-none">
                    <label for="pause" id="label-for-pause" class="setting-button" onclick="store_setting(1)">　一時休止　</label>
                    <input type="radio" id="close" name="status" value="close" class="display-none">
                    <label for="close" id="label-for-close" class="setting-button" onclick="store_setting(2)">　閉店　</label>
                </div>
            </div>
            <div class="setting-inside">
                <div class="setting-labels">
                    食材不足による注文済み商品受け渡し不可
                </div>
                <div class="food-loss">
                    <input type="radio" id="on" name="food-loss" value="on" class="display-none">
                    <label for="on" id="label-for-on" class="setting-button" onclick="foodloss_setting(true)">　オン　</label>
                    <input type="radio" id="off" name="food-loss" value="off" class="display-none">
                    <label for="off" id="label-for-off" class="setting-button" onclick="foodloss_setting(false)">　オフ　</label>
                </div>
            </div>
            <div class="setting-inside">
                <dvi class="setting-labels">
                    一つあたりの調理時間(概算)
                </dvi>
                <dvi class="cook-time">
                    <input type="tel" id="cook-time">
                    <div>分</div>
                    <input type="button"  id="set-cook-time" class="display-none">
                    <label for="set-cook-time" id="cook-time-button" onclick="send_cook_time()">　決定　</label>
                </dvi>
            </div>
        </div>
    </div>
    <div id="order-confirm" class="order-confirm">
        <div id="order-confirm-inside">
            次の受付番号
            <div id="next-order-number">
                0
            </div>
            <div id="order-send-or-cancel">
                <div class="spacer"></div>
                <button id="order-send-cancel" class="order-send border-radius-1" onclick="order_send_cancel()">
                    <i class='bx bx-x-circle'></i>キャンセル
                </button>
                <button id="order-send-continue" class="order-send border-radius-1" onclick="order_send_continue()">
                    完了<i class='bx bx-check-circle'></i>
                </button>
                <div class="spacer"></div>
            </div>
        </div>
    </div>
    <script>
    window.addEventListener('load', () => {
        if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('sw.js')
            .then(registration => console.log('registered', registration))
            .catch(error => console.log('error', error));
        }
    });
    </script>
</body>
</html>
