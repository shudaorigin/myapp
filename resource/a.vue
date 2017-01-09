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
    <h2 class="red">{{$store.state.newNode}}</h2>
	<h2 class="red">{{storeData}}</h2>
	
	 <input v-model="$store.state.newNode">
	
	<h1>Hello App!</h1>
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
import { updateActiveNote } from './actions.js'
import { state } from 'vuex'

export default {
  data () {
    return {
      msg: 'Hello from Component A!',
	  //newNode : 'newNode ---------'
    }
  },  
  computed: {
    storeData() {	
   	   return this.$store.state.newNode ;
	}
  }
}
</script>