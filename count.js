$(function(){
	$('#count-text').keyup(function(){

		var count = $(this).val().length;

		$('.show-count-text').text(count);
	});

});

// html内に入れる
// <div class="counter">
// 	<span class="show-count-text">0</span>文字
// </div>

// jsで書いた場合(復習用に残す)
// window.addEventListener('DOMContentLoaded',

// 	function(){

// 		//テキストエリアのDOMを取得
// 		var node = document.getElementById('count-text');

// 		node.addEventListener('keyup',function(){

// 			//テキスト内の文字数を取得して数える
// 			var count = this.value.length;

// 			var counterNode = document.querySelector('.show-count-text');

// 			counterNode.innerText = count;

// 		}, false);
// 	}, false
// 	);