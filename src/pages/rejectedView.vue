<template>
  <div class="">
    <q-card style="height: 100vh;" class="q-py-lg q-px-lg">
      <q-card-section class="q-py-lg q-my-lg q-px-lg">
        <h2 class="text-center text-weight-bold reset-lec">LEC</h2>
        <div class="q-my-lg reject-icon"><q-icon @click="logOut" class="cursor-pointer linkcolor" name="west" size="xl"></q-icon></div>
        <h3 class="text-weight-bold text-center q-py-lg q-mt-lg reject-h3">
          {{ $t('cerereRespinsă') }}
        </h3>
        <h6
          class="q-mx-auto  text-center reject-h6"
        >
        {{ $t('cerereaTaaFost') }}
        </h6>
        <div class="q-pt-lg q-mt-lg flex items-center justify-center" style="gap: 1rem;">
          <q-btn
          outline
            class="linkcolor reject-btn"
            flat
            :loading="isFetching"
            @click="logOut"
          >
          {{ $t('inapoi') }}
          </q-btn>
          <q-btn
            class="bg-linkcolor"
            :loading="isFetching"
            @click="requestReconsideration"
          >
          {{ $t('inapretrimiteoi') }}
          </q-btn>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFetching: false,
    };
  },
  methods: {
    async requestReconsideration() {
      if (this.isFetching) {
        return;
      }
      this.isFetching = true;
      await this.$store.dispatch("updateUserProfile", {
        isAuthorized: "pending",
      });
      this.isFetching = false;
      this.$router.push("/pending");
    },
    logOut() {
      this.$store.dispatch("signOutUser");
    },
  },
};
</script>

<style></style>
