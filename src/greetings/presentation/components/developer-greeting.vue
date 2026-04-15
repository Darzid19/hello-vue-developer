<script setup>

  import {computed} from "vue";

  const props = defineProps(['firstName', 'lastName']);


  const greeting = computed(() => {

    if (!pros.firstName?.trim() || !props.lastName?.trim())

    return "Welcome Anonymous Developer";
    const developer = new Developer(props.firstName, props.lastName);
    return `Congrats ${developer.fullName}! Now you are a Vue Developer`;
  });
</script>

<template>
  <p>
    {{greeting}}
  </p>

</template>




<style scoped>

</style>