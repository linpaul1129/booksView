<template>
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
    <div class="confirm" @click="saveChange" >確認修改</div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

export default {
  name: "About",
  data () {
    return {
      price: 1,
      count: 1,
      id: 3,
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
      Vue.axios.patch('https://fe-interview-api.unnotech.com/profile/'+this.id, {
        price:this.price,
        count:this.count
      })
    }
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
    cursor: pointer;
    font-size: 24px;
    line-height: 30px;
    text-align: right;
    padding: 40px;
  }
}

</style>