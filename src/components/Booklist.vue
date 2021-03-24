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
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

Vue.use(VueAxios, axios)
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
        slidesPerGroup: 3,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
    }
  },
  created() {
    Vue.axios.get('https://fe-interview-api.unnotech.com/books').then((res) => {
      this.books = res.data;
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
    width: auto;
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