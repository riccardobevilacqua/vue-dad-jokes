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
export default {
  name: 'Joke',
  props: [
    'text'
  ]
}
</script>
