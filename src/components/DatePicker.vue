<template>
  <Datepicker
      v-if="this.$store.getters.getChosenCities"
      v-model="picked"
  />
</template>

<script setup>
import Datepicker from 'vue3-datepicker'
import { ref } from 'vue'
const picked = ref(new Date())
</script>

<style scoped>

</style>