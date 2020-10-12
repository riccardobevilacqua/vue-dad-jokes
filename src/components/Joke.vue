<template>
  <div v-if="text.length" class="box">
    <article class="media">
      <div class="media-content">
        <div class="content">
          <p>
            {{ text }}
          </p>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Joke',
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
