jQuery(document).ready(function() {
	var QRBox	=	$('#QRBox');
	var MainBox	=	$('#MainBox');
	var BTCQR	=	'images/BTCQR.png';	// 二维码路径
	var AliPayQR	=	'images/AliPayQR.png';
	var WeChanQR	=	'images/WeChanSQ.png';

	

	function showQR(QR) {
		if (QR) {
			MainBox.css('background-image','url('+QR+')');
		}
		$('#DonateText,#donateBox,#github').addClass('blur');
		QRBox.fadeIn(300,function(argument) {
			MainBox.addClass('showQR');
		});
	}

	$('#donateBox>li').click(function(event) {
		var thisID	=	$(this).attr('id');
		if (thisID === 'BTC') {
			showQR(BTCQR);
			new Clipboard('#BTCBn');
		} else if (thisID === 'AliPay') {
			showQR(AliPayQR);
		} else if (thisID === 'WeChat') {
			showQR(WeChanQR);
		}
	});

	MainBox.click(function(event) {
		MainBox.removeClass('showQR').addClass('hideQR');
		setTimeout (function(a) {
			QRBox.fadeOut(300,function(argument) {
				MainBox.removeClass('hideQR');
			});
			$('#DonateText,#donateBox,#github').removeClass('blur');
		},600);

	});
});

if (isMobile) {
    donate_buttons.addClass('Mobile');
}

icon_donate.on('click',drinks_an[0]); // drinks 图标点击

donate_button_bg.on('click',drinks_an[1]); // 隐藏 donate box

donate_button.on('click',function(){
    var thisID = $(this).attr("id");
    if (isMobile && thisID === 'alipay_donate') {
        // 当前网页在手机端打开跳转到支付宝 App
        window.open(qrcodes['alipay_donate_link']);
    } else {
        // 当前网页在PC端打开
    drinks_qrcode.css({'background-image' : 'url('+qrcodes[thisID]+')'});
    drinks_an[2]();
    // 显示二维码
    }
});

drinks_qrcode.on('click',drinks_an[3]); // 隐藏二维码
//
})
