<template>
  <div class="field">
    <input type="text" v-debounce:300ms="showList" v-model="this.inputValue" placeholder="type the city name">
    <select v-model="chosenCity" @change="saveCity" id="insert" required>
      <option value="" disabled selected>Select your city</option>
      <option v-for="item in listOfCities" :key='item' v-bind:value="item">{{`${item.name}, ${item.country}, ${item.admin1}`}}</option>
    </select>
<!--    <Button />-->
<!--    <v-autocomplete-->
<!--        label="Enter the city name"-->
<!--        v-model="inputValue"-->
<!--        :items="this.listOfCities"-->
<!--        variant="solo"-->
<!--        @update:search="log(e)"-->
<!--        no-data-text="No cities found"-->
<!--    ></v-autocomplete>-->
  </div>
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
    log(e){
      console.log('id is ', e)
    },
    saveCity(){
      console.log('works')
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