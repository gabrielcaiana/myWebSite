<template>
  <div class="bg-primary-900 min-h-screen">
    <Header />
    <transition name="fade" mode="out-in">
      <Nuxt />
    </transition>
    <Footer />
  </div>
</template>
