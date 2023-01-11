<script setup lang="ts">
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary bg-primary text-white">
    <div class="container-fluid text-white" style="color>white">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <router-link class="navbar-brand text-white" to="/">CONVERTIDOR</router-link>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link active text-white" aria-current="page">Conversion</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link active text-white" aria-current="page">Historial</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <RouterView />
</template>

<style scoped>
</style>
