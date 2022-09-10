<template>
  <footer>
    <div class="text-center py-6 text-white">
      <span
        >&copy; {{ new Date().getFullYear() }} Desenvolvido por Gabriel Caiana
      </span>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Footer',
})
</script>
