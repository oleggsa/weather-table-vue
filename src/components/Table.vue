<template>
  <v-data-table
      v-if="cities.length"
      v-model:items-per-page="itemsPerPage"
      :headers="headers"
      :items="cities"
      item-value="name"
      class="elevation-1"
      @click:row="log()"
  >
  </v-data-table>
</template>

<script>
export default {
  name: "table",
  data () {
    return {
      itemsPerPage: 10,
      headers: [
        { title: 'City', align: 'start', key: 'name' },
        { title: 'Country', align: 'start', key: 'country' },
        { title: 'Admin', align: 'start', key: 'admin1' },
        { title: 'MinTemp', align: 'end', key: 'weather.daily.temperature_2m_min[0]' },
        { title: 'MaxTemp', align: 'end', key: 'weather.daily.temperature_2m_max[0]' },
        { title: '', align: 'end', key: '' },
      ],
      cities: this.$store.getters.getChosenCities,

    }
  },
  methods: {
    log(e){
      console.log('some data', e)
    }
  }
}
</script>

<style lang="scss" scoped>
.v-table {
  margin-top:100px;
}
</style>