

const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!'
      }
    },
    mounted(){
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((resp)=>{
        console.log(resp);
      })
    }
  }).mount('#app')