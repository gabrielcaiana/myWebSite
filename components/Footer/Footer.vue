<template>
  <footer>
    <div class="container mx-auto p-4 text-center">
      <span>&copy; {{ new Date().getFullYear() }} Desenvolvido por Gabriel Caiana </span>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Footer',
  
})
</script>