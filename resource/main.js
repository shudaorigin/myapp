Vue.directive('focus', {
	  // ����Ԫ�ز��뵽 DOM �С�
	  inserted: function (el) {
		// �۽�Ԫ��
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
		// <my-component> ��ֻ�ڸ�ģ�����		
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
		// ��� question �����ı䣬��������ͻ�����
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
