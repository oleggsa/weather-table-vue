<template>
  <div class="field">
    <input type="text" v-debounce:300ms="showList" v-model="this.inputValue" >
    <Button />
    <select v-model="chosenCity" @click="showLog">
      <option v-for="item in listOfCities" :key='item' v-bind:value="item">{{`${item.name}, ${item.country}, ${item.admin1}`}}</option>
    </select>
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
      chosenCity: ''
    }
  },
  components: {Button},
  mounted() {
    this.$store.dispatch('loadCities', 10)
  },
  methods: {
    showList(){
      this.$store.dispatch('loadCities', this.inputValue)
      console.log(this.inputValue)
    },
    showLog(){
      console.log(this.chosenCity)
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
  max-width: 300px;
}
</style>