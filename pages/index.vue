<template>
  <div class="container p-4">
    <input type="text" name="" id="" v-model=inputContent class="bg-gray-200 px-4 py-2 text-sm focus:outline-none rounded" @keydown.enter=process>
    <span class="block m-2 font-mono">
      {{ inputContent }}
    </span>
    <nuxt-link to="about">About</nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapMutations } from 'vuex'

export default Vue.extend({
  data: () => ({
    inputContent: ''
  }),
  methods: {
    process: function (): void {
      this.$store.commit('input/changeInputContent', this.inputContent)
      console.log(this.$store)
    }
  }
})
</script>