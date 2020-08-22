<template>
  <h1>
    {{ inputContent }}
  </h1>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapMutations } from 'vuex'

export default Vue.extend({
  data: () => ({
    inputContent: ''
  }),
  mounted: function (): void {
    console.log('test', this.$store.getters.getInputContent, this.$store.getters)
    this.inputContent = this.$store.getters['input/getInputContent']
  }
})
</script>