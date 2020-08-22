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
    console.log('test', this.$store)
    this.inputContent = this.$store.state.input.inputContent
  }
})
</script>