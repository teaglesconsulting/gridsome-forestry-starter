<template lang="pug">
  Layout
    div.container
      div.hero
        h1.title(v-html="$settings.heroTitle")
        h2.subtitle(v-html="$settings.heroSubtitle")
</template>
