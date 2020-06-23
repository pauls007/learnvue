<template>
  <div>
      <h1>Data 3</h1>
      <button @click="count++; isLogged=true;">Count++</button>
      <span>{{count}}</span>
      <div>{{message}} </div>  
      <div>{{isLogged}}</div>
      <input type="text" placeholder="Enter" v-model="message">
      <h2 v-if="isLogged">Yahoo</h2>
  </div>
</template>

<script>
export default {
    name:"demo3",
    mounted(){
        this.message="Welcome To Codemobile"
    },
    data() {
        return {
            count:0,
            message:"",
            isLogged:false
        }
    },
}
</script>

<style>

</style>