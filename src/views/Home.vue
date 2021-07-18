<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <AgGrid/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import AgGrid from '@/components/AgGrid.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    AgGrid
  }
}
</script>
