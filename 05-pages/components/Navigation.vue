<template>
  <nav class="navigation navigation--main">
    <ul>
      <li><nuxt-link to="/" :data-active="$router.path === '/'">Musk</nuxt-link></li>
      <li><nuxt-link to="/jobs" :data-active="$router.path === '/jobs'">Jobs</nuxt-link></li>
      <li><nuxt-link to="/yeager" :data-active="$router.path === '/yeager'">yeager</nuxt-link></li>
    </ul>
  </nav>
</template>

<style lang="scss">
.navigation {
  text-align: center;
  ul {
    list-style-type: none;
    padding-top: 3em;
    margin: 0;

    li {
      display: inline-block;
      margin: 0 .75em;

      a {
        font-size: 1.2em;
        color: black;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 0.02em;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
