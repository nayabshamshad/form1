<template>
  <div
    class="top-bar"
    v-if="
      isAuthenticated &&
      userData?.role != 'admin' &&
      userData?.role != 'department' &&
      $route.path != '/sign-up' &&
      $route.path != '/category-list' &&
      $route.path != '/sign-in'
    "
  >
    <div class="top-center">
      <q-btn
        no-caps
        color="black"
        flat
        type="button"
        @click="$router.push('/')"
        class="btn"
        :class="$route.path === '/' ? 'add-border' : ''"
      >
        Panou de bord
      </q-btn>
      <q-btn
        no-caps
        type="button"
        color="black"
        flat
        @click="$router.push('/event-list')"
        class="btn"
        :class="$route.path === '/event-list' ? 'add-border' : ''"
      >
        Întâlniri
      </q-btn>
    </div>
    <div class="q-ml-auto">
      <q-btn
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
      ></q-btn>
    </div>
  </div>
  <div
    class="top-bar"
    v-else-if="
      !isAuthenticated &&
      $route.path != '/sign-up' &&
      $route.path != '/category-list' &&
      $route.path !== '/sign-in'
    "
  >
    <q-btn
      no-caps
      @click="$router.go(-1)"
      round
      style="transform: rotate(-90deg)"
      icon="navigation"
      v-if="$route.path != '/sign-in'"
    />
    <div v-else></div>
    <h3>{{ $route.name }}</h3>
    <div>
      <q-btn
        v-if="$route.path != '/sign-in'"
        no-caps
        color="grey"
        text-color="black"
        @click="$router.push('/sign-in')"
        type="button"
        class="btn"
      >
        Conectare
      </q-btn>
      <q-btn
        v-if="$route.path != '/sign-up'"
        no-caps
        color="grey"
        text-color="black"
        type="button"
        @click="$router.push('/sign-up')"
        class="btn"
      >
        Înregistrare
      </q-btn>
    </div>
  </div>
  <div
    class="top-bar"
    v-else-if="
      isAuthenticated &&
      (userData?.role == 'admin' || userData?.role == 'department')
    "
  >
    <q-btn
      no-caps
      @click="$router.go(-1)"
      round
      style="transform: rotate(-90deg)"
      icon="navigation"
      v-if="$route.path != '/sign-in'"
    />
    <div v-else></div>
    <div class="flex admin-nav">
      <button class="heading" @click="$router.push('/?q=approved')">
        Aprobat
      </button>
      <button class="heading" @click="$router.push('/?q=pending')">
        În așteptare
      </button>
      <button class="heading" @click="$router.push('/?q=declined')">
        Refuzat
      </button>
      <button
        class="heading"
        v-show="userData.role == 'department'"
        @click="$router.push('/?q=date')"
      >
        Data
      </button>
      <button
        class="heading"
        v-show="userData.role == 'admin'"
        @click="$router.push('/?q=departments')"
      >
        Departments
      </button>
    </div>
    <div>
      <q-btn
        no-caps
        color="grey"
        text-color="black"
        to="/"
        type="button"
        @click="logOut"
        class="btn"
        >Deconectare</q-btn
      >
      <q-btn
        no-caps
        color="grey"
        text-color="black"
        type="button"
        v-if="
          $route.path != '/event-list' &&
          userData?.status &&
          userData?.role != 'admin' &&
          userData?.isAuthorized == true
        "
        @click="$router.push('/event-list')"
        class="btn"
      >
        Întâlnirile
      </q-btn>
    </div>
  </div>
  <router-view />
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {},
  data() {
    return {};
  },
  methods: {
    logOut() {
      this.$store.dispatch("signOutUser");
    },
  },
  computed: {
    userData() {
      return this.$store.getters.userData;
    },
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
  },
});
</script>
