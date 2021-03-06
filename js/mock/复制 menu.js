// 菜单数据 
//{
//	title: '首页',
//	path: '/',
//	icon: 'icon-shouye',
//	childs: [{
//		title: '首页',
//		path: '/',
//		icon: 'icon-shouye',
//		childs: ''
//	}]
//}, 
var menu = [{
	title: '用户系统',
	path: '#',
	icon: 'icon-yonghushezhi',
	childs: [{
		title: '用户系统',
		path: '/src/user/user.html',
		icon: 'icon-yonghushezhi',
		childs: ''
	}]
}, {
	title: '题库系统',
	path: 'dropdown-tkxt',
	icon: 'icon-kaodianqingdan',
	childs: [
		//	{
		//		title: '题库基础信息管理',
		//		path: 'dropdown-tkjcxxgl',
		//		icon: 'icon-kaodianqingdan',
		//		childs: [{
		//			title: '试题类型管理',
		//			path: '/tksys/testType.html',
		//			icon: 'icon-kaodianqingdan',
		//			childs: ''
		//		}, {
		//			title: '题目类型管理',
		//			path: '/tksys/titleType.html',
		//			icon: 'icon-kaodianqingdan',
		//			childs: ''
		//		}, {
		//			title: '岗位管理',
		//			path: '/tksys/postManagement.html',
		//			icon: 'icon-kaodianqingdan',
		//			childs: ''
		//		}, {
		//			title: '职务管理',
		//			path: '/tksys/jobManagement.html',
		//			childs: ''
		//		}, {
		//			title: '试卷标识管理',
		//			path: '/tksys/identification.html',
		//			icon: 'icon-kaodianqingdan',
		//			childs: ''
		//		}, {
		//			title: '实操键值管理',
		//			path: '/tksys/practicalManagement.html',
		//			icon: 'icon-kaodianqingdan',
		//			childs: ''
		//		}]
		//	}, 
		{
			title: '虚拟公司管理',
			path: 'dropdown-xngsgl',
			icon: 'icon-kaodianqingdan',
			pid: 0,
			id: 1,
			childs: [{
				title: '虚拟公司管理',
				path: '/src/xngs/index.html',
				icon: 'icon-kaodianqingdan',
				childs: '',
				pid: 1,
				id: 2,
			}, {
				title: '客户公司管理',
				path: '/src/xngs/customerCompany.html',
				icon: 'icon-kaodianqingdan',
				childs: '',
				pid: 1,
				id: 3,
			}, {
				title: '供应商管理',
				path: '/src/xngs/supplier.html',
				icon: 'icon-kaodianqingdan',
				childs: '',
				pid: 1,
				id: 4,
			}, {
				title: '维修商管理',
				path: '/src/xngs/maintainer.html',
				icon: 'icon-kaodianqingdan',
				childs: ''
			}, {
				title: '固定资产管理',
				path: '/src/xngs/fixedAssets.html',
				icon: 'icon-kaodianqingdan',
				childs: '',
				pid: 1,
				id: 5,
			}, {
				title: '库存产品管理',
				path: '/src/xngs/stockProduct.html',
				icon: 'icon-kaodianqingdan',
				childs: '',
				pid: 1,
				id: 6,
			}]
		}, {
			title: '试题管理',
			path: 'dropdown-stgl',
			icon: 'icon-kaodianqingdan',
			pid: 0,
			id: 7,
			childs: [
				//		{
				//			title: '试题信息管理',
				//			path: '#',
				//			icon: 'icon-kaodianqingdan',
				//			childs: ''
				//		},
				{
					title: '选择题管理',
					path: '/src/testQuestions/choiceQuestion.html',
					icon: 'icon-kaodianqingdan',
					childs: '',
					pid: 7,
					id: 8
				}, {
					title: '判断题管理',
					path: '/src/testQuestions/judgmentProblem.html',
					icon: 'icon-kaodianqingdan',
					childs: '',
					pid: 7,
					id: 9
				}, {
					title: '简答题管理',
					path: '/src/testQuestions/shortAnswer.html',
					icon: 'icon-kaodianqingdan',
					childs: '',
					pid: 7,
					id: 10
				}, {
					title: '实操题管理',
					path: '/src/testQuestions/practicalExercises.html',
					icon: 'icon-kaodianqingdan',
					childs: '',
					pid: 7,
					id: 11
				}
			]
		}, {
			title: '实操题账本管理',
			path: 'dropdown-sctzb',
			icon: 'icon-kaodianqingdan',
			pid: 0,
			id: 12,
			childs: [{
				title: '账本表单管理',
				path: '/src/testQuestions/accountBookForm.html',
				icon: 'icon-kaodianqingdan',
				childs: '',
				pid: 12,
				id: 13
			}, {
				title: '账本类型管理',
				path: '/src/testQuestions/accountBookType.html',
				icon: 'icon-kaodianqingdan',
				childs: '',
				pid: 12,
				id: 14
			}, {
				title: '账本管理',
				path: '/src/testQuestions/accountBook.html',
				icon: 'icon-kaodianqingdan',
				childs: '',
				pid: 12,
				id: 15
			}]

		}, {
			title: '试卷管理',
			path: '/src/testQuestions/examinationPaper.html',
			icon: 'icon-kaodianqingdan',
			childs: '',
			pid: 0,
			id: 9
		}
	]
}, {
	title: '考点系统',
	path: 'dropdown-kdxt',
	icon: 'icon-shitiguanli',
	childs: [{
			title: '考点管理',
			path: 'dropdown-kdgl',
			icon: 'icon-shitiguanli',
			childs: [{
					title: '考点类型管理',
					path: '/src/kdsys/examinationPointType.html',
					icon: 'icon-shitiguanli',
					childs: ''
				}, {
					title: '考点管理',
					path: '/src/kdsys/examinationPoint.html',
					icon: 'icon-shitiguanli',
					childs: ''
				}
				//		, {
				//			title: '个人考点管理',
				//			path: '#',
				//			icon: 'icon-shitiguanli',
				//			childs: ''
				//		}, {
				//			title: '学校考点管理',
				//			path: '#',
				//			icon: 'icon-shitiguanli',
				//			childs: ''
				//		}, {
				//			title: '企业考点管理',
				//			path: '#',
				//			icon: 'icon-shitiguanli',
				//			childs: ''
				//		}, {
				//			title: '机构考点管理',
				//			path: '#',
				//			icon: 'icon-shitiguanli',
				//			childs: ''
				//		}, {
				//			title: '个人考生管理',
				//			path: '#',
				//			icon: 'icon-shitiguanli',
				//			childs: ''
				//		}, {
				//			title: '学校考生管理',
				//			path: '#',
				//			icon: 'icon-shitiguanli',
				//			childs: ''
				//		}, {
				//			title: '企业考生管理',
				//			path: '#',
				//			icon: 'icon-shitiguanli',
				//			childs: ''
				//		}, {
				//			title: '机构考生管理',
				//			path: '#',
				//			icon: 'icon-shitiguanli',
				//			childs: ''
				//		}
			]
		}
		//	, {
		//		title: '成绩管理',
		//		path: '#',
		//		icon: 'icon-shitiguanli',
		//		childs: [{
		//			title: '成绩管理',
		//			path: '#',
		//			icon: 'icon-shitiguanli',
		//			childs: ''
		//		}]
		//	}
	]
}, {
	title: '系统管理',
	path: '#',
	icon: 'icon-xitongguanli',
	childs: [{
		title: '操作员管理',
		path: '/src/sys/operator.html',
		icon: 'icon-xitongguanli',
		childs: ''
	}, {
		title: '角色管理',
		path: '/src/sys/role.html',
		icon: 'icon-xitongguanli',
		childs: ''
	}, {

		title: '机构管理',
		path: 'dropdown-jggl',
		icon: 'icon-xitongguanli',
		childs: [{
			title: '机构类型管理',
			path: '/src/sys/institutionType.html',
			icon: 'icon-xitongguanli',
			childs: ''
		}, {
			title: '机构管理',
			path: '/src/sys/institution.html',
			icon: 'icon-xitongguanli',
			childs: ''
		}]

	}, {
		title: '数据字典',
		path: 'dropdown-sjzd',
		icon: 'icon-xitongguanli',
		childs: [{
				title: '单位管理',
				path: '/src/sjzd/dwgl.html',
				icon: 'icon-xitongguanli',
				childs: '',
			},
			{
				title: '货币管理',
				path: '/src/sjzd/hbgl.html',
				icon: 'icon-xitongguanli',
				childs: '',
			},
			{
				title: '行业管理',
				path: '/src/sjzd/hygl.html',
				icon: 'icon-xitongguanli',
				childs: '',
			}, {
				title: '部门管理',
				path: '/src/sjzd/bmgl.html',
				icon: 'icon-xitongguanli',
				childs: '',
			}, {
				title: '岗位管理',
				path: '/src/sjzd/gwgl.html',
				icon: 'icon-xitongguanli',
				childs: '',
			}, {
				title: '职务管理',
				path: '/src/sjzd/zwgl.html',
				icon: 'icon-xitongguanli',
				childs: '',
			}, {
				title: '行业类别管理',
				path: '/src/sjzd/hylbgl.html',
				icon: 'icon-xitongguanli',
				childs: '',
			}
		]
	}]
}]