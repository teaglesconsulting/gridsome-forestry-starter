<template lang="pug">
  header
    nav.navbar
      div.container
          div.navbar-brand
            a.navbar-item(href="/") {{ $settings.siteName }}
            a.navbar-burger(role="button", aria-label="menu", aria-expanded="false")
                span(aria-hidden="true")
                span(aria-hidden="true")
                span(aria-hidden="true")
          div.navbar-menu
              div.navbar-start
              div.navbar-end
                g-link.navbar-item.is-tab(to="/posts" active-class="is-active") Posts
                g-link.navbar-item.is-tab(to="/contact" active-class="is-active") Contact
</template>
