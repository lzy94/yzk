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
$(function() {
	var show = false;
	$(".spread").click(function() {
		if(show) {
			$('.form-horizontal .dis').hide();
			$(this).children('span').text('展开');
			$(this).find('.iconfont').removeClass('icon-shouqi').addClass('icon-xiala')
			show = false;
		} else {
			$('.form-horizontal .dis').show();
			show = true;
			$(this).children('span').text('收起');
			console.log($(this).find('i'))
			$(this).find('.iconfont').removeClass('icon-xiala').addClass('icon-shouqi')
		}

	})

	function getParameter(param) {
		var query = window.location.search;
		var iLen = param.length;
		var iStart = query.indexOf(param);
		if(iStart == -1)
			return "";
		iStart += iLen + 1;
		var iEnd = query.indexOf("&", iStart);
		if(iEnd == -1)
			return query.substring(iStart);
		return query.substring(iStart, iEnd);
	}

	$('.remove-question').click(function() {
		$(this).parent().remove();
	})

	// 获取第一级菜单;
	function getMenuOne(callback) {
		var html = '';
		$.each(menu, function(i, n) {
			html+= `<li class="head-menu" data-num="${i}">
						<a href="javascript:void(0)"><span class="icon iconfont ${ n.icon }"></span>${n.title}</a>
					</li>`;
		});
		$(html).insertBefore('.header-msg-num'); 
		
		if(typeof callback === 'function') {
			callback();
		}
	}
	getMenuOne(function() {
		var num = getParameter('num');
		var newNum = num ? num.split('-')[0] : 0;
		readMenu(newNum)
	});

	$('.head-nav').on('click', '.head-menu', function() {
		var num = $(this).data('num');
		readMenu(num);
	})
	
	/**
	 * 读取本地菜单
	 * @param {Object} index
	 */
	function readMenu(index) {
		var html = '';
		var child = menu[index];
		var childs = child.childs;
		if(childs) {
			$.each(childs, function(i, n) {
				var className = n.childs ? "panel panel-default dropdown" : "";
				var href = '/';
				if(n.path!='/'){
					href = n.childs ? ("#" + n.path) : n.path + '?num=' + index + '-' + i;
				}
				var collapse = n.childs?"collapse":"";
				
				html+=`<li class="${ className }"><a href=" ${ href } " data-toggle="${ collapse }"><span class="icon iconfont ${n.icon}"></span><span class="title">${ n.title }</span></a>`;
				if(n.childs) {
					
					html+=`<div id="${n.path}" class="panel-collapse collapse"><div class="panel-body"><ul class="nav navbar-nav">`;
					$.each(n.childs, function(j, m) {
						html+=`<li><a href="${m.path}?num=${index}-${i}-${j}">&nbsp;&nbsp;${m.title}</a></li>`
					})
					html += `</ul></div></div>`;
				}
				html += `</li>`;
			})
		}
		$('.left-menu').html(html);
	}
})