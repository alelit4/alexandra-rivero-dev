<template>
  <div id="app">

    <header class="header">
      <div class="header-left">
        <Logo v-if="showLogo" />
      </div>

      <div class="header-right">
        <ToggleTheme />
      </div>
    </header>

    <main class="main">
      <Nav/>
      <slot/>
    </main>

    <footer class="footer">
      <span class="footer-copyright">Copyright © {{ new Date().getFullYear() }}. </span>
      <span class="footer-links">Powered by Alexandra</span>
    </footer>

  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import ToggleTheme from '~/components/ToggleTheme.vue'
import Nav from "../components/Nav";

export default {
  props: {
    showLogo: { default: true }
  },
  components: {
    Nav, ToggleTheme, Logo
  }
}
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: var(--header-height);
  padding: 0 calc(var(--space) / 2);
  top:0;
  z-index: 10;

  &-left,
  &-right {
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 1300px) {
    position: sticky;
    width: 100%;
  }
}

.main {
  margin: 0 auto;
  padding: 1.5vw 15px 0;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: calc(var(--space) / 2);
  text-align: center;
  font-size: .8em;

  > span {
    margin: 0 .35em;
  }

  a {
    color: currentColor;
  }
}
</style>

