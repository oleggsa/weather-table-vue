<template>
  <div class="field">
    <AutoComplete
        v-model="inputValue"
        :dropdown="true"
        :suggestions="listOfCities"
        optionLabel="fullName"
        @complete="showList"
        @item-select="saveCity"
        placeholder="Hint: type name of city"
        emptySearchMessage=""
        searchMessage=""
        :delay=500
        :minLength=3
    />
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import AutoComplete from 'primevue/autocomplete';

export default {
  name: "CityInput",
  components: {Button, AutoComplete},
  data(){
    return {
      inputValue: '',
      chosenCity: null
    }
  },
  methods: {
    showList(){
      this.$store.dispatch('loadCities', this.inputValue)
      console.log(this.inputValue)
    },
    log(e){
      console.log('IV is ', e)
    },
    saveCity(e){
      console.log('works and e is ', e.value)
      if(this.$store.getters.getChosenCities.find(item => item.id === e.value.id)) return;
      this.$store.commit('SAVE_CHOSEN_CITIES', e.value)
      this.$store.dispatch('getCurrentCityWeather', {
        latitude: e.value.latitude,
        longitude: e.value.longitude,
        id: e.value.id
      })
      this.inputValue = ''
    }
  },
  computed: {
    listOfCities: function() {
      return this.$store.getters.getCities
    },
    nameOfField: function() {
      return this.$store.getters.getCities
    }
  }
}
</script>

<style lang="scss" scoped>

.field {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    width: 250px;
    height: 50px;
    padding: 8px 16px;
    border: 2px solid #a4beff;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    font-size: 20px;
    font-weight: 700;
    &[type=text]:focus {
      outline: none;
    }
  }
}
select {
  width: 450px;
  height: 50px;
  padding: 8px 16px;
  border: 2px solid #a4beff;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left: none;
  font-size: 20px;
  font-weight: 700;
  &:focus {
    outline: none;
  }
}
</style>