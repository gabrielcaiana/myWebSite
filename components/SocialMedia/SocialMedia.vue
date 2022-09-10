<template>
  <ul class="flex">
    <li
      v-for="(icon, index) of socialMedia"
      :key="index"
      class="cursor-pointer"
    >
      <a :href="icon.url" target="_blank" rel="noopener">
        <component :is="`${icon.name}`" />
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  components: {
    twitter: () =>
      import(
        /* webpackChunkName: "twitter" */ '@/assets/icons/twitter.svg?inline'
      ),
    linkedin: () =>
      import(
        /* webpackChunkName: "linkedin" */ '@/assets/icons/linkedin.svg?inline'
      ),
    github: () =>
      import(
        /* webpackChunkName: "github" */ '@/assets/icons/github.svg?inline'
      ),
    email: () =>
      import(/* webpackChunkName: "email" */ '@/assets/icons/email.svg?inline'),
  },

  props: {
    socialMedia: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="css" scoped>
.feather {
  position: relative;
  top: 0px;
  cursor: pointer;
  padding: 7px;
  margin: 1rem 0;
  border-radius: 5px;
  transition: all 0.1s ease;
  width: 32px;
  height: 32px;
  color: #ffffff;
}
.feather:hover {
  top: -3px;
}
</style>
