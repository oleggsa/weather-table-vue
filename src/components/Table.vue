<template>
  <el-table
      :data="this.$store.getters.getChosenCities"
      :default-sort="{ prop: 'date', order: 'descending' }"
      style="width: 100%"
  >
    <el-table-column prop="name" label="City" sortable width="180"  />
    <el-table-column prop="country" label="Country" sortable width="180" />
    <el-table-column prop="admin1" label="Admin" sortable />
    <el-table-column prop="weather.daily.temperature_2m_min[0]" label="MinTemp" sortable />
    <el-table-column prop="weather.daily.temperature_2m_max[0]" label="MaxTemp" sortable />
    <el-table-column label="Operations">
      <template #default="scope">
        <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.row)"
        >Delete</el-button
        >
      </template>
    </el-table-column>
  </el-table>
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
    }
  },
  methods: {
    handleDelete(elem){
      this.$store.commit('DELETE_ITEM_FROM_CHOSEN_CITIES', this.$store.getters.getChosenCities.filter(item => item.id !== elem.id))

    }
  }
}
</script>

<style lang="scss" scoped>
.v-table {
  margin-top:100px;
}
</style>