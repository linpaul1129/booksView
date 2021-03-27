<template>
<div class="main">
  <BookList/>
  <div class="about">
    <div class="price">
      <div class="title">價格</div>
      <div class="count">
          <button @click="priceSub">-</button>
            <input class="inputbox" v-model="price"  />
          <button @click="pricePlus">+</button>
      </div> 
    </div>
    <div class="counts">
      <div class="title">數量</div>
      <div class="count">
          <button @click="countSub">-</button>
            <input class="inputbox" v-model="count" />
          <button @click="countPlus">+</button>
      </div> 
    </div>
    <div class="confirm"><button @click="saveChange" >確認修改</button></div>
  </div>
</div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

import BookList from "@/components/Booklist.vue";



export default {
  name: "About",
  components: {
    BookList,
  },
  data () {
    return {
      price: null,
      count: null
    }
  },
  methods : {
    pricePlus(){
      this.price++;
    },
    priceSub(){
      if ( this.price > 0 ) 
        this.price--;
    },
    countPlus(){
      this.count++;
    },
    countSub(){
      if ( this.count > 0 ) 
        this.count--;
    },
    saveChange() {
      const { id } = this.$route.params;
      Vue.axios.patch('https://fe-interview-api.unnotech.com/profile/'+id, {
        price:this.price,
        count:this.count
      })
      .catch(function(){
        alert("Get book profile error!")
      })
    }
  },
  created() {
    const { id } = this.$route.params;
    Vue.axios.get('https://fe-interview-api.unnotech.com/profile/'+id).then( (res) => {
      this.price = res.data.price
      this.count = res.data.count
    })
    .catch(function(){
      alert("Get book profile error!")
    })
  },
  beforeRouteUpdate(to, from, next) {
    // get data when route change
    const { id } = to.params;
    Vue.axios.get('https://fe-interview-api.unnotech.com/profile/'+id).then( (res) => {
      this.price = res.data.price
      this.count = res.data.count
    })
    .catch(function(){
      alert("Get book profile error!")
    })
    next();
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/detail.scss';
</style>