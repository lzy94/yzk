$(function() {
	$("#add-img").click(function(e) {
		e.preventDefault();
		var html = `<div class="imgbox">
			<img width="150" height="150" id="imageUrl" /><br /><br />
			<input name="headimg" type="hidden" id="headimg" value="" />
			<span class="fileinput-button">
			<span>上传头像</span>
			<input type="file" name="file" id="imageFile"  />
			</span>
			</div> `;
		$(this).next().append(html);
	})

	$("#add-operate").click(function(e) {
		e.preventDefault()
		var val = $("#b-z").val();
		var operatehtml = `<div class="operate">
							<p class="operate-title"> ${val} <button class="btn btn-danger radius del-operate">删除</button></p>
							<form class="form-horizontal">
								<div class="row">
									<div class="col-sm-6">
										<div class="form-group">
											<label for="firstname" class="col-sm-4 control-label pr-0"><span class="red">*</span>选择账本:</label>
											<div class="col-sm-6">
												<select class="form-control radius">
													<option>记账凭证</option>
												</select>
											</div>
											<div class="col-sm-2">
												<button class="btn btn-add radius add-Account"> <span class="iconfont icon-plus"></span>添加</button>
											</div>
										</div>
									</div>
									<div class="col-sm-6">
										<div class="form-group">
											<label for="firstname" class="col-sm-4 control-label pr-0"><span class="red">*</span>单元格设置分数:</label>
											<div class="col-sm-6">
												<input type="text" class="form-control radius">
											</div>
											<div class="col-sm-2">
												<button class="btn btn-add radius"><span class="iconfont icon-plus"></span>设置</button>
											</div>
										</div>
									</div>
									<div class="col-sm-6">
										<div class="form-group">
											<label for="firstname" class="col-sm-4 control-label pr-0"><span class="red">*</span>分数检测模式:</label>
											<div class="col-sm-6">
												<select class="form-control radius">
													<option>关闭</option>
													<option>开启</option>
												</select>
											</div>
										</div>
									</div>

									<div class="col-sm-12 excel-box">
                                          
                                          
									</div>
									
									<div class="col-sm-6">
										<div class="form-group">
											<label for="firstname" class="col-sm-4 control-label pr-0"><span class="red">*</span>数据同步:</label>
											<div class="col-sm-6">
												<button class="btn btn-add radius">同步</button>
											</div>
										</div>
									</div>

								</div>
							</form>
						</div>`;

		$("#operate-box").append(operatehtml);
		
		
		//添加账本
		$(".add-Account").click(function(e){
			e.preventDefault();
			var accounthtml=`<div class="excel-child"></div>`;
			$(this).parent().parent().parent().parent().find(".excel-box").append(accounthtml);
		})
		
		//删除操作
		
		$(".del-operate").click(function(e){
			e.preventDefault();
			$(this).parent().parent().remove();
			
		})
		
	})

})