// ページトップボタン
var topBtn=$('#pageTop');
// windowの高さ
var windowHeight = $(window).height();

// 一旦すべて非表示
$('head').append(
    '<style>body{display:none;}'
    );

$(window).on("load", function() {
    // 画面の一番上を必ず表示
    $('html,body').animate({ scrollTop: 0 }, 1);
    // load完了後にフェードイン
    $('body').fadeIn(2000);
    
    // ハンバーガーメニューの挙動
    $('#nav-button').on('click',function(){
        $('.btn-trigger').toggleClass('active');
        $('.navigation').fadeToggle();
    });
    // ページトップボタンをクリックしたら、スクロールして上に戻る
    topBtn.click(function(){
        $('html,body').animate({scrollTop: 0}, 500);
        return false;
    });
});

// 特定の位置までスクロールしたらフェードイン
$(window).scroll(function (){
    // スクロール値
    var scroll = $(window).scrollTop();
    
	$('.fadein').each(function(){
		// フェードイン対象の要素位置
		var elemPos = $(this).offset().top;
        
        // 各要素の制御
        if ($(this).attr('id') == 'scrolled-to-top') {
            // 画面のトップまでスクロールされたときに表示
            if (scroll - windowHeight >= -100){
                $(this).addClass('scrollin'); 
            }
        } else {
            // 画面の1/3までスクロールされたときに表示
            if (scroll > elemPos - windowHeight + windowHeight/4){
                $(this).addClass('scrollin');
            }
        }
        
        // ページトップボタンの制御
        if ($(this).attr('id') == 'pageTop'){
            // mainの高さ
            var mainHeight = $('main').height();
            // footerの高さ
            var footerHeight = $('.footer').height();

            // ヒーローイメージの疑似要素(グラデーション)※動的な取得方法不明のため、直打ち
            // 疑似要素の高さ
            var gradationHeight = 200;

            // コンテンツの高さ
            // main-windowの高さ+ヒーローイメージのグラデーション（可視部分85%）-footerの高さ
            var contentsHeight = mainHeight - windowHeight + (gradationHeight * 0.85) - footerHeight;
            
            // 画面のトップまでスクロールされたときに表示
            if (scroll - windowHeight >= -60){
                $(this).addClass('scrollin');
            }
            // スクロール値が、コンテンツの高さを超えたら固定
            if (scroll >= contentsHeight) {
                $(this).css('bottom',footerHeight);
                
            } else {
                $(this).css('bottom','30px');
            }
        }
        // スクロールが一番上に戻ったら全要素非表示
        if (scroll <= 0) {
            $(this).removeClass('scrollin');
        }
	});
});
