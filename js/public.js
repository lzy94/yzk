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
			html += `<li class="head-menu" data-num="${i}">
						<a href="javascript:void(0)"><span class="icon iconfont ${ n.icon }"></span>${n.title}</a>
					</li>`;
		});
		$(html).insertBefore('.header-msg-num');

		if(typeof callback === 'function') {
			callback();
		}
	}
	getMenuOne(function() {
		//		var num = getParameter('num');
		//		var newNum = num ? num.split('-')[0] : 0;
		readMenu(0)
	});

	//	$('.head-nav').on('click', '.head-menu', function() {
	//		var num = $(this).data('num');
	//		readMenu(num);
	//	})

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
				if(n.path != '/') {
					href = n.childs ? ("#" + n.path) : n.path + '?num=' + n.pid + '-' + n.id;
				}
				var collapse = n.childs ? "collapse" : "";

				html += `<li class="${ className }" id="collapse_${n.id}" data-pid="${n.pid}" data-val="${n.pid}-${n.id}" ><a href=" ${ href } " data-toggle="${ collapse }"><span class="icon iconfont ${n.icon}"></span><span class="title">${ n.title }</span></a>`;
				if(n.childs) {

					html += `<div id="${n.path}" class="panel-collapse collapse"><div class="panel-body"><ul class="nav navbar-nav">`;
					$.each(n.childs, function(j, m) {
						html += `<li id="dropdown_${m.id}" data-pid="${m.pid}" data-val="${m.pid}-${m.id}"><a href="${m.path}?num=${m.pid}-${m.id}">&nbsp;&nbsp;${m.title}</a></li>`
					})
					html += `</ul></div></div>`;
				}
				html += `</li>`;
			})
		}
		$('.left-menu').html(html);
		//		setTimeout(function() {
		menuActive();

		//		}, 100)
	}

	//	function menuActive() {
	//		//		//		var nums = getParameter('num').split('-');
	//		if(localStorage.getItem('num')) {
	//
	//			var nums = localStorage.getItem('num').split('-');
	//			var pid = nums[0];
	//			var id = nums[1];
	//			if(pid != 0) {
	//				$('#collapse_' + pid).children('.collapse').addClass('in').attr('aria-expanded', "true");
	//				$('#dropdown_' + id).addClass('active');
	//			} else {
	//				$('#collapse_' + id).addClass('active');
	//			}
	//		}
	//	}
	//	$('.left-menu').on('click', 'a', function() {
	//		console.log($(this).attr('data-toggle'))
	//		if(!$(this).attr('data-toggle')) {
	//			var val = $(this).parent().data('val');
	//			console.log(val)
	//			localStorage.setItem('num', val);
	//
	//			location.href = $(this).attr('href');
	//			return false;
	//		}
	//
	//	})

	function menuActive() {
		//		//		var nums = getParameter('num').split('-');
		if(localStorage.getItem('num')) {

			var nums = localStorage.getItem('num').split('-');
			var pid = nums[0];
			var id = nums[1];
			if(pid != 0) {
				console.log($('#collapse_' + pid).children('a').attr('href'))
				$($('#collapse_' + pid).children('a').attr('href')).collapse('show')
				//				$('#collapse_' + pid).children('.collapse').addClass('in').attr('aria-expanded', "true");
				$('#dropdown_' + id).addClass('active');
			} else {
				$('#collapse_' + id).addClass('active');
			}
		}
	}
	$('.left-menu').on('click', 'a', function() {
		console.log($(this).attr('data-toggle'))
		if(!$(this).attr('data-toggle')) {
			var val = $(this).parent().data('val');
			console.log(val)
			localStorage.setItem('num', val);

			location.href = $(this).attr('href');
			return false;
		}

	})

	$('table td img').mouseover(function(event) {
		var left = event.pageX;
		var top = event.pageY;
		var right = $(document).width() - $(this).offset().left;
		if(right < 450) {
			left = left - 470;
		}
		$('<div class="showImg"> <img src="' + $(this).attr('src') + '" /> </div>').css({
			top: top,
			left: left
		}).appendTo('body')

	}).mouseout(function() {
		$('.showImg').remove()
	}).mousemove(function(event) {
		var left = event.pageX;
		var top = event.pageY;
		var right = $(document).width() - $(this).offset().left;
		if(right < 450) {
			left = left - 470;
		}
		$('.showImg').css({
			top: top + 10,
			left: left + 10
		})
	})

})