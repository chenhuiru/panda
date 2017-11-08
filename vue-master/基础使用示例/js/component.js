/**
 * 功能：vue组件
 * 日期：2017/4/17
 **/

/* 私有组件 */
let app1 = new Vue({
	el: '#app-1',
	components: {
		'comp-item': {
			template: '<div>' +
				'<p>我是自定义组件</p>' +
				'<p>在这里可以写<em id="htmlColor" style="color:#f18c1d">HTML</em>代码</p>' +
			'</div>'
		}
	}
});

/* 全局组件 */
Vue.component('li-carinfo-item', {
	props: ['carprop'],
	template: '<li>{{ carprop.name }}</li>'
});
/* 全局组件--示例1 */
let app2 = new Vue({
	el: '#app-2',
	data: {
		high_carInfo: [
			{ name: '兰博基尼' },
			{ name: '劳斯莱斯' },
			{ name: '宾利' },
			{ name: '法拉利' },
			{ name: '阿斯顿马丁' }
		]
	}
});
/* 全局组件--示例2 */
let app3 = new Vue({
	el: '#app-3',
	data: {
		norm_carInfo: [
			{ name: '上海大众' },
			{ name: '北京现代' },
			{ name: '长安福特' },
			{ name: '华晨宝马' },
			{ name: '成都公交' }
		]
	}
});
/* 全局组件--示例3 */
let app4 = new Vue({
	el: '#app-4',
	data: {
		lowe_mbick: [
			{ name: '钱江摩托' },
			{ name: '嘉陵摩托' },
			{ name: '力帆摩托' }
		],
		norm_mbick: [
			{ name: '本田摩托' },
			{ name: '宝马摩托' },
			{ name: '雅马哈摩托' }
		],
		high_mbick: [
			{ name: '川崎摩托' },
			{ name: '杜卡迪摩托' },
			{ name: '哈雷摩托' }
		]
	}
});
