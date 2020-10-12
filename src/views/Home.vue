<template>
  <div class="container">
    <h1 class="title">Dad Jokes</h1>
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
