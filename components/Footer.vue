<template>
  <footer class="bg-black text-white">
    <div class="container mx-auto p-4 text-center">
      <small>&copy; {{ new Date().getFullYear() }} {{ Name }}</small>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    Name() {
      return `developed by Gabriel Caiana`;
    },
  },
};
</script>