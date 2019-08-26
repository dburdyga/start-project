<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="card" v-for="post in posts" :key="post.id">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">Title: {{ post.title }}</p>
          </div>
        </div>
        <div class="content">
          <p>Description: {{ post.body }}</p>
        </div>
      </div>
    </div>
      <b-loading :active.sync="loading"/>
  </div>
</template>


<script lang="ts">
  import Vue from 'vue';
  import {mapGetters} from 'vuex';
  import {GET_LOADING_STATE} from '@/store/loading/getter-types';
  export default Vue.extend({
    props: {
      msg: String,
    },
    data() {
      return {
        posts: [],
      };
    },
    computed: {
      ...mapGetters({
        loading: GET_LOADING_STATE,
      }),
    },
    created () {
      fetch('https://jsonplaceholder.typicode.com/posts')
              .then(res => res.json())
              .then(data => (this.posts = data));
    }
  });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  p {
    text-align: left;
  }
  .card {
    margin-left: 50px;
    margin-right: 50px;
    margin-bottom: 20px;
  }
  h1 {
    font-size: 28px;
    font-weight: bold;
    color: #41b883;
    margin-bottom: 10px;
  }

</style>
