<template>
  <router-view />
</template>

<script>
import { defineComponent } from "vue";
import { auth } from "./store/firebase";
export default defineComponent({
  name: "App",
  mounted() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch("getUserData");
        if (this.$route.path == "/sign-in" || this.$route.path == "/sign-up")
          this.$router.push("/");
      } else {
        this.$router.push("/sign-in");
      }
    });
  },
});
</script>
