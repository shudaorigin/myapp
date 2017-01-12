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
	
	<input v-model="$store.state.platform">
	<button @click="addTodo">Reverse Message</button>
	  
	<h1>Hello App! 4578589 /h1>
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
	}
  }
  
}
</script>