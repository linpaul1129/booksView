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
import BookList from "@/components/Booklist.vue";

Vue.use(VueAxios, axios)

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
    }
  },
  created() {
    const { id } = this.$route.params;
    Vue.axios.get('https://fe-interview-api.unnotech.com/profile/'+id).then( (res) => {
      this.price = res.data.price
      this.count = res.data.count
    })
  },
  beforeRouteUpdate(to, from, next) {
    // get data when route change
    const { id } = to.params;
    Vue.axios.get('https://fe-interview-api.unnotech.com/profile/'+id).then( (res) => {
      this.price = res.data.price
      this.count = res.data.count
    })
    next();
  },
}
</script>

<style lang="scss">
.about {
  border: 1px solid black;
  margin: {
    top:50px;
    left: 20%;
    right:20%;
  };
  .title {
    font-size: 24px;
    line-height: 30px;
    width:120px;
    display: inline-block;
  }
  .count {
    display: inline-block;
  }
  .inputbox {
    font-size: 24px;
    margin: {
      left: 10px;
      right: 10px;
    };
  }
  .price {
    text-align: left;
    padding: 40px;
  } 
  .counts {
    text-align: left;
    padding: 40px;
  }
  .confirm {
    text-align: right;
    margin: 40px;
  }
  button {
    font-size: 24px;
    cursor: pointer;
  }
}

</style>