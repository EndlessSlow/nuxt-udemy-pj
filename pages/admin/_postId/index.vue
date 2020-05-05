<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm.vue'
export default {
  layout: 'admin',
  components: {
    AdminPostForm
  },
  data() {
    return {
      loadedPost: {
        author: 'Lee',
        title: 'My awesome Post',
        content: 'Super Amazing Nuxt!!',
        thumbnailLink: 'none'
      }
    }
  }
}
</script>

<style></style>
