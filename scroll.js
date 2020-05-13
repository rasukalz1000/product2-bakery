$(function(){

	//#で始まるa要素をクリックしたときの処理
	$('a[href^="#"]').click(function(){
		//移動先を0px下げる調整
		var adjust = -60;
		//スクロール速度（ミリ秒）
		var speed = 500;
		//アンカーの値を取得　リンク先(href)を取得して、hrefという変数に代入
		var href = $(this).attr("href");
		//移動先を取得　リンク先(href)のidがある要素を取得して、targetに代入
		var target = $(href == "#" || href == "" ? 'html' : href);
		//移動先を調整　idの要素の位置をoffsetで取得して、positionに代入
		var position = target.offset().top + adjust;
		//スクロールスムース linear(等速) or swing(変則)
		$('body,html').animate({scrollTop:position}, speed, 'swing');
		//falseを返してURLに影響がないようにする
		return false;
	});

});