<template>
  <div class="">
    <q-card style="height: 100vh;" class="q-py-lg q-px-lg">
      <q-card-section class="q-py-lg q-my-lg q-px-lg">
        <div class="q-my-lg"><q-icon @click="logOut" class="cursor-pointer linkcolor" name="west" size="xl"></q-icon></div>
        <h3 class="text-weight-bold text-center q-py-lg q-mt-lg">
          Înregistrare reușită
        </h3>
        <h6
          class="q-mx-auto text-weight-light text-center"
          style="max-width: 70%"
        >
        Te rugăm să aștepți aprobarea unui administrator
        </h6>
        <div class="q-pt-lg q-mt-lg flex items-center justify-center" style="gap: 1rem;">
          <q-btn
          outline
            class="linkcolor"

            :loading="isFetching"
            @click="logOut"
          >
            Retrimite
          </q-btn>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  methods: {
    logOut() {
      this.$store.dispatch('signOutUser')
    }
  }
};
</script>

<style></style>
