<template>
  <div class="container">
    <Joke />
  </div>
</template>

<script>
// @ is an alias to /src
import Joke from '@/components/Joke.vue'

export default {
  name: 'Home',
  components: {
    Joke
  }
}
</script>
