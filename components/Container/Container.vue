<template>
  <div class="container content-area mx-auto my-9 px-6">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
   name: "Container"
})
</script>