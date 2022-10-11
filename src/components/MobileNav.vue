<template>
  <div class="mobileNav">
    <ul>
      <li><q-btn  flat color="black" @click="viewUsers('approved')">Aprobat</q-btn></li>
      <li><q-btn flat color="black"  @click="viewUsers('pending')">In Asteptare</q-btn></li>
      <li><q-btn  flat color="black" @click="viewUsers('declined')">Refuzat</q-btn></li>
      <li><q-btn
        no-caps
        color="black"
        flat
        to="/"
        type="button"
        @click="logOut"
        class="btn log-out"
        style="font-size: 12px; font-weight: 300"
        >Deconectare
        <q-icon
          class="q-pl-md"
          style="font-size: 30px; color: rgba(150, 150, 150, 1)"
          name="exit_to_app"
        ></q-icon
      ></q-btn></li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    viewUsers(x) {
      this.$router.push(`/?q=${x}`);
      this.$emit('close')
    },
    logOut(){
      this.$store.dispatch('signOutUser')
    }
  },
};
</script>

<style></style>
