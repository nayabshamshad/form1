<template>
  <teamHome
    v-if="
      (userData?.role !== 'admin' &&
        userData?.role !== 'department' &&
        userData?.role !== 'categoryLead') ||
      $route.fullPath.includes('profile')
    "
  />
  <adminHome v-else />
</template>

<script>
import teamHome from "../components/teamHome.vue";
import adminHome from "../components/adminHome.vue";
export default {
  components: { teamHome, adminHome },
  computed: {
    userData() {
      return this.$store.getters.userData;
    },
  },
};
</script>
