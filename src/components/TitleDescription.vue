<script setup>
defineProps({
  title: {
    type: String,
    default: "",
    required: false,
  },
  class: {
    type: String,
    default: "",
    required: false,
  },
});
</script>

<template>
  <div class="title-description" :class="class">
    <span>{{ title }}</span>
  </div>
</template>

<style scoped lang="scss">
.title-description {
  width: fit-content;
  padding: 10px 18px;
  border-radius: 56px;
  border: 1px solid #D8E3E3;
  background: #FFF;
  margin-bottom: 20px;
  cursor: context-menu;

  span {
    font-family: 'Raleway-SemiBold';
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
}
</style>