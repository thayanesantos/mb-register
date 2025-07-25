<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
  light: {
    type: Boolean,
    required: false,
  },
  dark: {
    type: Boolean,
    required: false,
  }
})
</script>

<template >
  <button v-if="light" class="light-orange">{{ text }}</button>
  <button v-else="dark" class="dark-orange">{{ text }}</button>
</template>


<style scoped>
.light-orange{
  color: #FF9900;
  background-color: #ffff;
  border: 1px solid #FF9900;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 8px;
}
.dark-orange{
  color: #ffff;
  background-color: #FF9900;
  border: none;
  padding: 15px 52px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 8px;
}

</style>