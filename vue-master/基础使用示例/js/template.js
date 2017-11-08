/**
 * 功能：Vue模版语法
 * 日期：2017/4/19
 **/

let app1 = new Vue({
	el: '#app-1',
	data: {
		content: '一次性插值的内容，数据更新不会影响插值的节点'
	},
	methods: {
		modifContent: function () {
			this.content = '修改后的内容';
		}
	}
});

let app2 = new Vue({
	el: '#app-2',
	data: {
		content1: '<span style="color: #2397ec">正常的文本内容</span>',
		content2: '<span style="color: #2397ec">能显示HTML的内容，注意写法</span>'
	}
});

let app3 = new Vue({
	el: '#app-3',
	data: {
		content1: 'Mustache不能在HTML属性中使用，应使用v-bind指令。Mustache语法如下：',
		content2: '$("#content").html(Mustache.render("{{title}} spends {{cacl}}", view);',
		content3: '也就是说双花括符“{{}}”的写法不能用于属性'
	}
});

let app4 = new Vue({
	el: '#app-4',
	data: {
		state: true
	}
});
let btn1 = document.getElementById('app-4-btn1'),
	btn2 = document.getElementById('app-4-btn2'),
	btn3 = document.getElementById('app-4-btn3');
btn1.onclick = function () {
	alert(1);
};
btn2.onclick = function () {
	app4.state = false;
};
btn3.onclick = function () {
	app4.state = true;
};

let app5 = new Vue({
	el: '#app-5',
	data: {
		total: 1000,
		state: '正确',
		skillArr: ['Angular', 'React', 'Vue'],
		obj: {
			quantifier:	'个',
			personName: '葫芦娃'
		},
		fn: function (a,b) {
			return a * b;
		}
	}
});

let app6 = new Vue({
	el: '#app-6',
	data: {
		gender: '保密'
	}
});

let app7 = new Vue({
	el: '#app-7',
	data: {
		hoby: ['电影']
	}
});

