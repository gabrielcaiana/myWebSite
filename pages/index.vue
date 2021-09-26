<template>
  <Container class="flex items-center max-w-screen-lg">
    <main class="flex flex-col h-full justify-center items-center">
      <div class="container flex flex-col items-center">
        <h1>Heey, I`m Gabriel Caiana!</h1>
        <p>
          I'm a 24-year-old software developer working primarily with JavaScript
          | TypeScript | Vue and Nuxt. Passionate about technology, innovation
          and UX | User interface design. I'm currently studying technologist in
          systems analysis and development and specializing in software
          development with a focus on usability and accessibility, in addition
          to providing a good experience for users.
        </p>
        <nuxt-link
          to="articles/page"
          class="rounded-lg p-5 text-white bg-blue-500 mb-10"
          >Read my blog</nuxt-link
        >
      </div>
      <ColorModePicker />
    </main>
  </Container>
</template>

<script>
export default {}
</script>
