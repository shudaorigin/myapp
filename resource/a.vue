<style scoped>
.container {
  border: 1px solid #00f;
}
.red {
  color: #f00;
}
</style>

<template>
  <div class="container">
    <h2 class="red">{{$store.state.platform}}</h2>
	<h2 class="red">{{storeData}}</h2>
	
	  <validity :validators="{ required: true,  minlength:2,  maxlength:3}">
		<input type="text" @input="handleValidate" @focusout="handleValidate">
      </validity>
	  
	  <div class="errors">
		<p class="required" v-if="result.required">required username!!</p>
		<p class="minlength" v-if="result.minlength">too short username!!</p>
		<p class="maxlength" v-if="result.maxlength">too maxlength username!!</p>		
	  </div>
	
	<input v-model="$store.state.platform">
	<button @click="addTodo">77888Reverse Message</button>
	  
	<h1>Hello App!{{msg}}23442 /h1>
	  <p>
		<!-- 使用 router-link 组件来导航. -->
		<!-- 通过传入 `to` 属性指定链接. -->
		<!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
		<router-link to="/foo">Go to Foo</router-link>
		<router-link to="/bar">Go to Bar</router-link>
	  </p>
	  <!-- 路由出口 -->
	  <!-- 路由匹配到的组件将渲染在这里 -->
	  <router-view></router-view>
  </div>
</template>

<script>
import { toggleAlert } from './actions.js'

export default {
  data () {
    return {
	  rules: {
		  minlength: 3,
		  maxlength: 16
	  },
	  result: {},
      msg: 'Hello from Component A!'
    }
  }, 
  vuex: {
    getters: {
      activeNote: state => state.activeNote
    },
    actions: {
      toggleAlert
    }
  },
  mounted () {
    let u = navigator.userAgent;
    console.info("------------" +u);
	
	this.$store.dispatch('setApp', 'android');
    
	if ( u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 ) {
      this.$store.dispatch('setApp', 'android');
    } else if ( !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) ) {
      this.$store.dispatch('setApp', 'ios');
    }
  },  
  computed: {
    storeData() {	
   	   return this.$store.state.platform ;
	}
  },
  methods:{
    addTodo: function () {
	   this.msg =this.$store.getters.getApp;
	},
	handleValidate: function (e) {
            var self = this
            // get validity instance
            var $validity = e.target.$validity 
            // run validate method !!
            $validity.validate(function () {
              // keep validation result from result property of validity instance
              self.result = $validity.result
            })
    }
  }
  
}
</script>