<template>
<div>
  <div class="home">
    <swiper class="swiper" :options="swiperOption">
    <swiper-slide v-for="book in books" :key="book.id" class="swiper book" :class="selected(book.id)">
      <router-link
          :to="{ name: 'book-detail', params: { id: book.id } }"
        >
        <img :src="book.image" />
        <div>{{ book.name }}</div>
      </router-link>
    </swiper-slide>
    </swiper>
  </div>
</div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

import { Swiper, SwiperSlide } from "vue-awesome-swiper";


export default {
  name: 'books',
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      books: [],
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 20,
        freeMode: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  created() {
    this.axios.get('https://fe-interview-api.unnotech.com/books').then((res) => {
      this.books = res.data;
    })
    .catch( function() {
      alert("Get book list failed!");
    })
  },
  methods : {
    selected: function(id) {
        var result = [];
        var paramid = this.$route.params.id;
        if ( id === paramid ) {
            result.push('class-a')
        }
        return result;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/base.scss';

.home {
  width:80%;
  margin:{
    left:10%;
    right:10%;
  }
  border: 1px solid black;
  .book {
    height: auto;
    border: 1px solid black;
    padding:10px;
    margin: 10px;
    img {
      width: 300px;
      height: 300px;
    }
    &:hover {
      background: orange;
    }
  }
}
.class-a {
  background:#AA7700;
}
</style>