<template>
  <div class="posts">
    <b-loading :active.sync="loading"/>
    <h1 class="header">Request using Axios</h1>
    <div class="card"
         v-for="post in posts"
         :key="post.id"
    >
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
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import axios from 'axios';
  import {mapGetters} from 'vuex';
  import {GET_LOADING_STATE} from '@/store/loading/getter-types';

  export default Vue.extend({
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
    created() {
      axios.get('https://jsonplaceholder.typicode.com/posts')
              .then ((res) => this.posts = res.data)
              .catch ((error) => console.log('Error: ', error));
    },
  });
</script>

<style scoped lang="scss">
  .card {
    margin-left: 50px;
    margin-right: 50px;
    margin-bottom: 20px;
    text-align: left;
  }
  .header {
    font-size: 28px;
    font-weight: bold;
    color: #41b883;
    margin-bottom: 10px;
  }
</style>
