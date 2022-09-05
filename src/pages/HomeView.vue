<template>
  <teamHome />
  <!-- <adminHome v-else /> -->
</template>

<script>
import teamHome from "../components/teamHome.vue";
export default {
  components: { teamHome },
  computed: {
    userData() {
      return this.$store.getters.userData;
    },
  },
};
</script>
