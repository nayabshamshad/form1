<template>
  <div class="mobileNav">
    <ul
      v-if="
        $store.getters.userData.role == 'department' ||
        $store.getters.userData.role == 'admin'
      "
    >
      <li>
        <q-btn flat color="black" @click="viewUsers('approved')">{{ $t('aprobat') }}</q-btn>
      </li>
      <li>
        <q-btn flat color="black" @click="viewUsers('pending')"
          >{{ $t('Înașteptare') }}</q-btn
        >
      </li>
      <li>
        <q-btn flat color="black" @click="viewUsers('declined')">{{ $t('Refuzat') }}</q-btn>
      </li>
      <li v-show="$store.getters.userData.role  == 'department'">
        <q-btn flat color="black" @click="viewUsers('date')">{{ $t('data') }}</q-btn>
      </li>
      <li>
        <q-btn
          no-caps
          color="black"
          flat
          to="/"
          type="button"
          @click="logOut"
          class="btn log-out"
          style="font-size: 12px; font-weight: 300"
          >{{ $t('Deconectare') }}
          <q-icon
            class="q-pl-md"
            style="font-size: 30px; color: rgba(150, 150, 150, 1)"
            name="exit_to_app"
          ></q-icon
        ></q-btn>
      </li>
    </ul>
    <ul v-else>
      <li>
        <q-btn flat color="black" @click="pushRoute('user')"
          >{{ $t('panouDeBord') }}</q-btn
        >
      </li>
      <li v-if="$store.getters.userData.status == true">
        <q-btn flat color="black" @click="pushRoute('events')">{{ $t('intalniri') }}</q-btn>
      </li>
      <li>
        <q-btn
          no-caps
          color="black"
          flat
          to="/"
          type="button"
          @click="logOut"
          class="btn log-out"
          style="font-size: 12px; font-weight: 300"
          >{{ $t('Deconectare') }}
          <q-icon
            class="q-pl-md"
            style="font-size: 30px; color: rgba(150, 150, 150, 1)"
            name="exit_to_app"
          ></q-icon
        ></q-btn>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    pushRoute(x) {
      if (x == "user") {
        this.$router.push("/");
      } else {
        this.$router.push("/event-list");
      }
      this.$emit("close");
    },
    viewUsers(x) {
      this.$router.push(`/?q=${x}`);
      this.$emit("close");
    },
    logOut() {
      this.$store.dispatch("signOutUser");
    },
  },
};
</script>

<style></style>
