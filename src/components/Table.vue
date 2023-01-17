<template>
  <v-row justify="center">
    <v-date-picker v-model="picker"></v-date-picker>
  </v-row>
  <v-data-table
      v-model:items-per-page="itemsPerPage"
      :headers="headers"
      :items="cities"
      item-value="name"
      class="elevation-1"
  ></v-data-table>
</template>

<script>
export default {
  name: "table",
  data () {
    return {
      itemsPerPage: 10,
      headers: [
        { title: 'City', align: 'start', key: 'name' },
        { title: 'MinTemp', align: 'end', key: 'weather.daily.temperature_2m_min[0]' },
        { title: 'MaxTemp', align: 'end', key: 'weather.daily.temperature_2m_max[0]' },
      ],
      cities: this.$store.getters.getChosenCities,
      picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    }
  },
}
</script>

<style lang="scss" scoped>
body {
  background: red;
}
</style>