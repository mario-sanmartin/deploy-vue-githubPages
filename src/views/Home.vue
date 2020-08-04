<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/madara.gif">
    <Madara msg="Tengo pura hambre si....Mensaje desde el componente"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Madara from '@/components/Madara.vue'

export default {
  name: 'Home',
  components: {
    Madara
  }
}
</script>
