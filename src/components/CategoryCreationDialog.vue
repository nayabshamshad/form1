<template>
  <q-card>
    <q-card-section class="q-px-lg q-py-lg">
      <div class="text-center">
        <h5 class="q-my-lg text-weight-bold q-px-lg">{{ $t('categoryTitle') }}</h5>
        <p>{{ $t('categoryMsg') }}</p>
        <div class="flex justify-center">
          <span
            @click="copyPath"
            class="linkcolor text-weight-bold cursor-pointer"
            >{{ creationLink }} <q-icon name="content_copy"
          /></span>
        </div>
      </div>
    </q-card-section>
    <q-card-actions align="right">
      <q-btn v-close-popup flat class="linkcolor" label="Close" />
    </q-card-actions>
  </q-card>
</template>
<script>
export default {
  props: ["value"],
  data() {
    return {};
  },
  methods: {
    copyPath() {
      navigator.clipboard.writeText(this.creationLink);
      this.$q.notify({
        message: "Copied to clipboard",
        color: "green",
        icon: "done",
      });
    },
  },
  computed: {
    creationLink: () => `${window.location.host}/#/sign-up?mode=categoryLead`,
  },
};
</script>
