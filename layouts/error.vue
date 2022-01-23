<template>
  <Container class="flex justify-center items-center max-w-screen-lg">
    <div
      v-if="error.statusCode === 404"
      class="flex flex-col items-center justify-center"
    >
      <h1>Página nāo encontrada!</h1>

      <nuxt-link to="/">
        <button
          to="/"
          class="
            p-2
            pl-5
            pr-5
            transition-colors
            duration-700
            transform
            bg-indigo-500
            hover:bg-blue-400
            text-gray-100 text-lg
            rounded-lg
            focus:border-4
            border-indigo-300
          "
        >
          Ir para o início
        </button>
      </nuxt-link>
    </div>
    <div v-else class="flex flex-col items-center justify-center">
      <h1>{{ error.message }}</h1>
    </div>
  </Container>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped></style>
