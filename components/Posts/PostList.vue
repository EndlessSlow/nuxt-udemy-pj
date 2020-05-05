<template>
  <div class="posts-page">
    <section class="post-list">
      <PostPreview
        id="1"
        thumbnail="https://cdn.wallpapersafari.com/97/84/FojnuC.jpg"
        title="Heelo there!"
        previewText="this my first posts"
      />
      <PostPreview
        id="2"
        thumbnail="https://cdn.wallpapersafari.com/97/84/FojnuC.jpg"
        title="Heelo there!2"
        previewText="this my first posts"
      />
      <PostPreview
        id="3"
        thumbnail="https://cdn.wallpapersafari.com/97/84/FojnuC.jpg"
        title="Heelo there!3"
        previewText="this my first posts"
      />
    </section>
  </div>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview.vue'
export default {
  name: 'PostList',
  components: {
    PostPreview
  }
}
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-self: center;
  align-items: center;
}

.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
