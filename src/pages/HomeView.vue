<template>
  
  <teamHome
    v-if="userData?.role !== 'admin' && $route.query?.q !== 'date'"
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
