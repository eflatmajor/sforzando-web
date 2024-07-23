<template>
  <nav>
    <ul>
      <li>
        <NuxtLink to="/login">Login</NuxtLink>
      </li>

      <li>
        <NuxtLink to="/logout">Logout</NuxtLink>
      </li>

      <li>
        <NuxtLink to="/register">Register</NuxtLink>
      </li>

      <li>
        <NuxtLink to="/only_auth">Only Auth</NuxtLink>
      </li>
    </ul>
  </nav>

  <div>
    <h1>user</h1>
    <pre>{{ auth.user }}</pre>
  </div>
</template>

<script lang="ts" setup>
const auth = useAuth()
</script>

<style>
</style>