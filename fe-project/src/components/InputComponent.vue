<script setup>
defineProps({
  text: { type: String, required: true,},
  labelFor,
  type,
  id,
  nameInput,

})
</script>

<template>
    <label for={{labelFor}}>{{ text }}</label>
    <input type={{text}} id={{id}} name={{nameInput}}>
</template>

<style scoped>
input[type=text] {
  width: 100%;
  padding: 14px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid #081c1c;
  border-radius: 8px;
}
</style>