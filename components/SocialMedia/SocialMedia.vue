<template>
  <ul class="flex">
    <li v-for="(icon, index) of icons" :key="index" class="cursor-pointer">
      <a :href="icon.url" target="_blank" rel="noopener">
        <component :is="`${icon.name}`" />
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  components: {
    twitter: () => import(/* webpackChunkName: "twitter" */ '@/assets/icons/twitter.svg?inline'),
    linkedin: () => import(/* webpackChunkName: "linkedin" */'@/assets/icons/linkedin.svg?inline'),
    github: () => import(/* webpackChunkName: "github" */'@/assets/icons/github.svg?inline'),
    email: () => import(/* webpackChunkName: "email" */ '@/assets/icons/email.svg?inline'),
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
  z-index: -1;
}
.feather:hover {
  top: -3px;
}
</style>
