<template>
  <div class="container">
    <h1 class="title">Dad Jokes</h1>
    <Joke :text="text" />
    <button @click="fetchJoke()" class="button">Next Joke</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import Joke from '@/components/Joke.vue'

export default {
  name: 'Home',
  components: {
    Joke
  },
  mounted: function () {
    this.fetchJoke()
  },
  methods: {
    ...mapActions(['fetchJoke'])
  },
  computed: {
    ...mapGetters({ text: 'getCurrentJoke' })
  }
}
</script>
