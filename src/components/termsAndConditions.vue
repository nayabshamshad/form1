<template>
  <q-card class="termsAndConditions" style="max-height: 80vh !important">
    <q-card-section>
      <q-btn
        icon="close"
        rounded
        flat
        color="#233975"
        align-self="center"
        v-close-popup
      ></q-btn>
      <h3>{{ $t('termAndCondition') }}</h3>
      <h2>
        {{ $t('note') }}
      </h2>

      <p>{{ $t('stimate') }}</p>
      <li>
        {{ $t('paragraph1') }}
      </li>
      <li>
        {{ $t('paragraph2') }}
      </li>
      <p>
        {{ $t('paragraph3') }}
      </p>
      <p>
        {{ $t('paragraph4') }}
      </p>
      <li>
        {{ $t('paragraph5') }}
      </li>
      <p>
        {{ $t('paragraph6') }}
      </p>
      <p>
        {{ $t('paragraph7') }}
      </p>
      <p>
        {{ $t('paragraph8') }}
      </p>
    </q-card-section>
  </q-card>
</template>

<script>
export default {};
</script>

<style></style>
