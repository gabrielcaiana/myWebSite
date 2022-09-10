<template>
  <div class="bg-primary-900">
    <Header />
    <transition name="slide" mode="out-in">
      <Nuxt />
    </transition>
    <Footer />
  </div>
</template>
