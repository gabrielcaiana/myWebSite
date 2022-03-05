<template>
  <p>Redirecionando...</p>
</template>

<script>
export default {
  asyncData({ redirect }) {
    redirect('https://admin.gabrielcaiana.com')
  },
}
</script>
