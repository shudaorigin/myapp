Vue.directive('focus', {
	  // 当绑定元素插入到 DOM 中。
	  inserted: function (el) {
		// 聚焦元素
		el.focus();
	  }
});

var app5 = new Vue({
	  el: '#app-5',
	  data: {
		message: 'Hello Vue.js!',
        items:[ ]		
	  },
      components: {
		// <my-component> 将只在父模板可用		
		//'my-tag': Child
	  },
	  created: function () {
		  /*
		    var vm = this			
			//vm.items = 'Thinking...';		  
		    this.$http.jsonp('http://211.149.193.19:8080/api/customers',{ dataType:"jsonp"}).then((response) => {
				// success callback
				vm.items=(response.data);
				console.info("loadAjax");
			  }, (response) => {
				return [];
			}); 
		  */			
	  },
	  watch: {
		// 如果 question 发生改变，这个函数就会运行
		 items:function(){
		   // console.info(999);
		 }
	  },
	  compiled: function(){
        setTimeout(function(){
		  this.loaded = true;
		}.bind(this), 1000);
      },
	  mounted : function() {
		console.info("mounted ");
	  },
	  methods: {
	    ajaxData:function () {
			
		},
		reverseMessage: function () {
			//for(var k=0 ;k<1000;k++){
			  this.items.push({"customerId": k});
			//}			
		  //this.message = this.message.split('').reverse().join('')		  
		}
	  }
	})
