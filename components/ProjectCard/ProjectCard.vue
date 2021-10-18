<template>
  <article
    class="
      relative
      w-full
      h-64
      bg-cover bg-center
      group
      rounded-lg
      overflow-hidden
      shadow-lg
      hover:shadow-2xl
      transition
      duration-300
      ease-in-out
    "
    :style="`background-image: url('${card.cover}');`"
  >
    <div
      class="
        absolute
        inset-0
        bg-black bg-opacity-50
        group-hover:opacity-75
        transition
        duration-300
        ease-in-out
      "
    ></div>
    <div
      class="
        relative
        w-full
        h-full
        px-4
        sm:px-6
        lg:px-4
        flex
        justify-center
        items-center
      "
    >
      <h3 class="text-center">
        <a
          class="text-white text-2xl font-bold text-center"
          :href="card.link"
          target="_blank"
        >
          <span class="absolute inset-0"></span>
          {{ card.title }}
        </a>
      </h3>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
}
</script>
