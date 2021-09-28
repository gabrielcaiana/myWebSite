<template>
  <ul class="flex">
    <li v-for="icon of icons" :key="icon" class="cursor-pointer">
      <a :href="icon.url" target="_blank">
        <component :is="`${icon.name}`" />
      </a>
    </li>
  </ul>
</template>

<script>
import twitter from '@/assets/icons/twitter.svg?inline'
import linkedin from '@/assets/icons/linkedin.svg?inline'
import github from '@/assets/icons/github.svg?inline'
import email from '@/assets/icons/email.svg?inline'

export default {
  components: {
    twitter,
    linkedin,
    github,
    email,
  },

  data() {
    return {
      icons: [
        {
          name: 'twitter',
          url: 'https://twitter.com/gabrielgueedes',
        },
        {
          name: 'linkedin',
          url: 'https://www.linkedin.com/in/gabrielcaiana/',
        },
        {
          name: 'github',
          url: 'https://github.com/gabrielcaiana',
        },
        {
          name: 'email',
          url: 'mailto:gabrielcaianaguedes@gmail.com',
        },
      ],
    }
  },
}
</script>

<style scoped>
.feather {
  position: relative;
  top: 0px;
  cursor: pointer;
  padding: 7px;
  margin: 2rem 0.5rem 4rem 0;
  border-radius: 5px;
  transition: all 0.1s ease;
  width: 50px;
  height: 50px;
}
.feather:hover {
  top: -3px;
}
</style>
