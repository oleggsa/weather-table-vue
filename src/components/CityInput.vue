<template>
  <div class="field">
    <input type="text" v-debounce:300ms="showList" v-model="this.inputValue" >
    <Button />

<!--    <v-autocomplete-->
<!--        model-value="chosenCity"-->
<!--        @update:search="saveCity"-->
<!--        v-if="listOfCities"-->
<!--        label="Autocomplete"-->
<!--        :items='listOfCities.map(item => item.name)'-->
<!--        variant="solo"-->
<!--    ></v-autocomplete>-->
  </div>
  <select v-model="chosenCity" @change="saveCity">
    <option v-for="item in listOfCities" :key='item' v-bind:value="item">{{`${item.name}, ${item.country}, ${item.admin1}`}}</option>
  </select>
</template>

<script>
import { vue3Debounce } from 'vue-debounce'
import Button from "@/components/Button.vue";

export default {
  name: "CityInput",
  directives: {
    debounce: vue3Debounce({ lock: true })
  },
  data(){
    return {
      inputValue: '',
      chosenCity: null
    }
  },
  components: {Button},
  methods: {
    showList(){
      this.$store.dispatch('loadCities', this.inputValue)
      console.log(this.inputValue)
    },
    saveCity(){
      if(this.$store.getters.getChosenCities.find(item => item.id === this.chosenCity.id)) return;
      console.log('CITY IS ', this.chosenCity)
      this.$store.commit('SAVE_CHOSEN_CITIES', this.chosenCity)
      this.$store.dispatch('getCurrentCityWeather', {
        latitude: this.chosenCity.latitude,
        longitude: this.chosenCity.longitude,
        id: this.chosenCity.id
      })
    }
  },
  computed: {
    listOfCities: function() {
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
    width: 400px;
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
  width: 300px;
  border: 2px black solid;
}
</style>