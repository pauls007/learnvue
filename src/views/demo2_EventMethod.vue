<template>
  <div app="demo2">
      <h1>Demo2 EnventMethod</h1>
      <button v-on:click="clickMe">ช่วย Click ฉันทีตะ</button>
      <button v-on:click="clickMe2('Welcome to VueJS')">Click แล้วความหมายเปลี่ยนเลยน๊า</button>
      <button @click="clickMe3('Welcome Aye')">Click3 แล้วความหมายเปลี่ยนเลยน๊า</button>
      <h3>{{getTimeStamp()}}</h3>
  </div>
</template>

<script>
export default {
    name:"demo2",
    mounted(){
        this.initial()
    },
    methods: {
        initial(){
            console.log("Initialization")
        },
        clickMe(){
            alert('Hi')
        },
        clickMe2(message){
            alert(message)
        },
        clickMe3(message){
            alert(message)
        },
        getTimeStamp(){
            return Date()
        }
    },
}
</script>

<style>

</style>