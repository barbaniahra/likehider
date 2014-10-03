$(function() {
	setInterval(function() {
		
		$(".like_wrap:not(.notHiddenLike)").hide();
		
		$(".reply_table,.fw_reply").on("mouseover", function(){
			$(".like_wrap", this).addClass("notHiddenLike").show();
		}).on("mouseout", function(){
			$(".like_wrap", this).removeClass("notHiddenLike").hide();
		})

	},1000);
});
