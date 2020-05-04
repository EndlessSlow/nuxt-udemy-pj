<template>
  <h2>
    <input type="text" v-model="userId" />
    <button @click="onLoadUser">Load User</button>
    The Users Component View
  </h2>
</template>

<script>
export default {
  data() {
    return {
      userId: ""
    };
  },
  methods: {
    onLoadUser() {
      this.$router.push(`/users/${this.userId}`);
    }
  }
};
</script>

<style></style>
