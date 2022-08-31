<template>
  <div class="top-bar">
    <div class="a-page">
      Attendence Page {{ $store.getters.userData }}
      <button type="button" class="btn">Sign in</button>
      <button type="button" class="btn">Sign Up</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>
