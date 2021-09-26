<template>
  <div>
    <Header />
    <transition name="slide" mode="out-in">
      <Nuxt />
    </transition>
    <Footer />
  </div>
</template>

<script>
export default {}
</script>
