<template>
  <Container class="flex items-center max-w-screen-lg">
    <main class="flex flex-col h-full justify-center items-center">
      <div class="container flex flex-col items-center text-center">
        <Person />
        <h1>Olá, meu nome é Gabriel!</h1>
        <p>
          Sou um desenvolvedor de software de 25 anos, trabalho com JavaScript |
          TypeScript | Node | Vue e Nuxt. Apaixonado por tecnologia, inovação e
          UX | UI design. Atualmente estou cursando tecnólogo em análise e
          desenvolvimento de sistemas e me especializando no desenvolvimento de
          softwares com foco em usabilidade e acessibilidade, além de
          proporcionar uma boa experiência para os usuários.
        </p>
      </div>
      <SocialMedia />
      <!-- <ColorModePicker /> -->
    </main>
  </Container>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  head: () => ({
    title: 'Home',
  }),
})
</script>
