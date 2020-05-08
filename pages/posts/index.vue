<template>
  <div class="post-page">
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList.vue';
export default {
  components: {
    PostList
  },
  // fetch(context) {
    // if (context.store.state.loadedPosts.length > 0) {
    //   return null;
    // }

    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve({
    //       loadedPosts: [
    //         {
    //           id: '1',
    //           title: 'First Post - 1',
    //           previewText: 'This is our first post!!',
    //           thumbnail: 'none'
    //         },
    //         {
    //           id: '2',
    //           title: 'First Post - 2',
    //           previewText: 'This is our first post!!',
    //           thumbnail: 'none'
    //         },
    //         {
    //           id: '3',
    //           title: 'First Post - 3',
    //           previewText: 'This is our first post!!',
    //           thumbnail: 'none'
    //         },
    //         {
    //           id: '4',
    //           title: 'First Post - 4',
    //           previewText: 'This is our first post!!',
    //           thumbnail: 'none'
    //         },
    //         {
    //           id: '5',
    //           title: 'First Post - 5',
    //           previewText: 'This is our first post!!',
    //           thumbnail: 'none'
    //         },
    //         {
    //           id: '6',
    //           title: 'First Post - 6',
    //           previewText: 'This is our first post!!',
    //           thumbnail: 'none'
    //         }
    //       ]
    //     });
    //   }, 1000);
    //   // reject(new Error())
    // })
    //   .then(data => {
    //     context.store.commit('setPosts', data.loadedPosts);
    //   })
    //   .catch(e => {
    //     context.error(e);
    //   });
  // },
  computed: {
    loadedPosts() {
      debugger;
      return this.$store.getters.loadedPosts;
    }
  }
  // created() {
  //   this.$store.dispatch('setPosts', this.loadedPosts);
  //   console.log(this.$store.getters.loadedPosts);
  // }
};
</script>

