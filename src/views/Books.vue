<template>
  <div class="home">
    <div v-for="book in books" :key="book.id" class="book" @click="showDetail(book.id)">
      <img :src="book.image" />
      <div>{{ book.name }}</div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
export default {
  name: 'books',
  data () {
    return {
      books: [],
    }
  },
  methods: {
    showDetail(id){
      console.log(id)
    }
  },
  created() {
    Vue.axios.get('https://fe-interview-api.unnotech.com/books').then((res) => {
      this.books = res.data;
    })
  }
}
</script>

<style lang="scss">
.home {
  display: flex;
  border: 1px solid black;
  overflow: auto;
  margin: {
    top:50px;
    left: 20%;
    right:20%;
  };
  .book {
    width: 320px;
    border: 1px solid black;
    padding:10px;
    margin: 10px;
    img {
      width: 300px;
      height: 300px;
    }
  }
}
</style>