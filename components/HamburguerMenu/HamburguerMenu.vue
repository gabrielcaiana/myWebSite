<template>
  <div class="menu" :class="[show ? 'fixed right-0 z-10 -mt-[240px]' : '']">
    <div id="pencet" @click="change">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <MenuMobile :show="show" @close="change()" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => ({
    show: false,
  }),
  methods: {
    change() {
      const click = document.getElementById('pencet')
      click?.classList.toggle('Diam')
      this.show = !this.show
    },
  },
})
</script>

<style lang="css" scoped>
#pencet {
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  z-index: 2;
  position: absolute;
  top: 100px;
  right: 1rem;
}

#pencet span {
  background-color: #ffffff;
  width: 2em;
  height: 0.2em;
  margin: 0.26em 0;
  display: block;
  transition: all 0.4s ease;
  transform-origin: 0 0;
}

.dark-mode #pencet span {
  background-color: #fff;
}

.Diam span:nth-child(1) {
  transform: rotate(45deg) translate(1px, -1px);
}

.Diam span:nth-child(2) {
  transform: scaleX(0);
}

.Diam span:nth-child(3) {
  transform: rotate(-45deg) translate(1px, 0);
}
</style>
