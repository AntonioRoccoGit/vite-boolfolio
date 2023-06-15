<script>
export default {
  name: 'AppNavHeader',
  data() {
    return {
      navLink: [
        {
          label: 'Home',
          routeName: 'home',
        },
        {
          label: 'Posts',
          routeName: 'posts',
        },
        // {
        //   label: 'About-Us',
        //   routeName: 'about-us',
        // },
      ]
    }
  }
}
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <h2 class="navbar-brand">PortFolio</h2>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li v-for="link in navLink" class="nav-item">
            <router-link 
              :to="{ name: link.routeName }"
              :class="{'active' : link.routeName === $route.name}"
              class="nav-link" 
              aria-current="page"
            >
                {{ link.label }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>