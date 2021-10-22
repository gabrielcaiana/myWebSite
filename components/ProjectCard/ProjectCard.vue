<template>
  <div class="rounded-lg">
    <div
      class="
        bg-white bg-opacity-5
        rounded-lg
        shadow-lg
        relative
        hover:shadow-2xl
        transition
        duration-500
        flex
        flex-col
      "
    >
      <article
        class="
          relative
          w-auto
          h-64
          bg-cover bg-center
          group
          overflow-hidden
          shadow-lg
          hover:shadow-2xl
          rounded-t-lg
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
            </a>
          </h3>
        </div>
      </article>
      <div class="px-4 pb-4">
        <h1 class="text-2xl font-semibold">
          {{ card.title }}
        </h1>
        <p class="text-gray-400 leading-6 tracking-normal">
          {{ card.description }}
        </p>
        <button
          class="py-2 px-4 mt-8 bg-blue-500 text-white rounded-md shadow-xl"
        >
          Learn More
        </button>
        <div
          class="
            flex
            justify-end
            absolute
            top-0
            right-0
            transform
            translate-x-2
            -translate-y-3
            w-full
          "
        >
          <span
            v-for="(technologie, index) in card.technologies"
            :key="index"
            class="
              py-2
              px-6
              ml-2
              text-sm text-white
              rounded-md
              shadow-xl
            "
            :style="`background: ${technologie.color}`"
            >{{ technologie.name }}</span
          >
        </div>
      </div>
    </div>
  </div>
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
