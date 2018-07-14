$(function() {

	// 打开导航栏
	$(".navbar-expand-toggle").click(function() {
		$(".app-container").toggleClass("expanded");
		return $(".navbar-expand-toggle").toggleClass("fa-rotate-90");
	});
	return $(".navbar-right-expand-toggle").click(function() {
		$(".navbar-right").toggleClass("expanded");
		return $(".navbar-right-expand-toggle").toggleClass("fa-rotate-90");
	});

})
$(function(){
	var show = false;
	$(".spread").click(function(){
		if(show){
			$('.form-horizontal .dis').hide();
			$(this).children('span').text('展开');
			$(this).find('.iconfont').removeClass('icon-shouqi').addClass('icon-xiala')
			show = false;
		}else{
			$('.form-horizontal .dis').show();
			show = true;
			$(this).children('span').text('收起');
			console.log($(this).find('i'))
			$(this).find('.iconfont').removeClass('icon-xiala').addClass('icon-shouqi')
		}
		
	})
	
	$('.remove-question').click(function(){
		$(this).parent().remove();
	})
})
