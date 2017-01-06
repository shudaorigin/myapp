<template>
  <span>111111{{ btn }}
  <input  ref='input' v-model:btn='btn'  v-focus v-on:input='increment($event.target.value)'/></span>
</template>
<script>
var child = {
  		template:'#mytemplate',
		props:{'btn':{
					  type: String,
					  default: 100
					}},
		data:function () {
		  return {
		          childMessage: 'child oK'
		         };
		},
		methods: { 
			increment: function (val) {
			   
			   this.$emit('input', val)
			},		
            findParent: function (value) { 
				
            }  
        } 
}
</script>