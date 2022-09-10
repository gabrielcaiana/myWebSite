<template>
  <div class="bg-primary-900">
    <Header />
    <transition name="slide" mode="out-in">
      <main class="w-[864px] px-5 m-auto">
        <Nuxt />
      </main>
    </transition>
    <Footer />
  </div>
</template>
