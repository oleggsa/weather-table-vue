<template>
 <button @click="getStore">Add to List</button>
</template>

<script>
export default {
  name: "Button",
  methods: {
    getStore(){
      this.$store.getters.getCities.map(item => console.log(item))
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  height: 50px;
  cursor: pointer;
  padding: 8px;
  color: black;
  border: 2px solid #a4beff;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left: none;
  font-size: 22px;
  background: #a4beff;
}
</style>