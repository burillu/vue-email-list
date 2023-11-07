

const { createApp } = Vue

createApp({
  data() {
    return {
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
      emailList: []
    }
  },
  mounted() {
    for (let index = 0; index < 10; index++) {
    axios.get(this.apiUrl).then((resp) => {
      const email = resp.data.response
      this.emailList.push(email);

    })
  }
  },
  computed:{
    // emailList(){
    //   const list=[];
    //   for (let index = 0; index < 10; index++) {
    //     //const element = array[index];
    //      axios.get(this.apiUrl).then((resp) => {
    //     const email = resp.data.response
    //     list.push(email);
  
    //   })
    //     return list;
    //   }
     
    // }
  }
}).mount('#app')