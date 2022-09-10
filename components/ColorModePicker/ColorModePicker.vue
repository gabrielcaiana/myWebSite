<template>
  <div>
    <ul class="flex">
      <li v-for="color of colors" :key="color" class="cursor-pointer">
        <component
          :is="`icon-${color}`"
          :class="getClasses(color)"
          @click="$colorMode.preference = color"
        />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {
    IconSystem: () => import('@/assets/icons/system.svg?inline'),
    IconLight: () => import('@/assets/icons/light.svg?inline'),
    IconDark: () => import('@/assets/icons/dark.svg?inline'),
    IconSepia: () => import('@/assets/icons/sepia.svg?inline'),
  },

  data() {
    return {
      colors: ['system', 'light', 'dark', 'sepia'],
    }
  },

  methods: {
    getClasses(color) {
      if (this.$colorMode.unknown) {
        return {}
      }
      return {
        preferred: color === this.$colorMode.preference,
        selected: color === this.$colorMode.value,
      }
    },
  },
}
</script>

<style scoped>
.feather {
  position: relative;
  top: 0px;
  cursor: pointer;
  padding: 7px;
  background-color: var(--bg-secondary);
  border: 2px solid var(--border-color);
  margin: 0;
  border-radius: 5px;
  transition: all 0.1s ease;
  width: 42px;
  height: 42px;
}
.feather:hover {
  top: -3px;
}
.feather.preferred {
  border-color: #8b5cf6;
  top: -3px;
}
.feather.selected {
  color: #8b5cf6;
}
</style>
