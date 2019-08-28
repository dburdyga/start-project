<template>
  <div class="posts">
    <h1 class="header">Request using Fetch</h1>
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

  export default Vue.extend({
    data() {
      return {
        posts: [],
      };
    },
    created () {
      fetch('https://jsonplaceholder.typicode.com/posts')
              .then(res => res.json())
              .then(data => (this.posts = data));
    }
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
