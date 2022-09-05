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
        this.isAuth = user;
      } else {
        this.isAuth = null;
      }
    });
  },
  data() {
    return {
      isAuth: null,
    };
  },
  watch: {
    isAuth: {
      handler: async function () {
        if(this.isAuth) {
          await this.$store.dispatch("getUserData");
        }
        // if (this.isAuth) {
        //   if (
        //     this.$route.path == "/sign-in" &&
        //     this.$store.getters.userData?.isUpdated
        //   ) {
        //     this.$router.push("/");
        //   } else if (!this.$store.getters.userData.isUpdated) {
        //     this.$router.push("/category-list");
        //   }
        // } else {
        //   if (this.$route.path != "/sign-in") {
        //     this.$router.push("/sign-in");
        //   }
        // }
      },
    },
  },
});
</script>
