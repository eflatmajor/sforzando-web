<template>
  <div>
    <form method="POST" @submit.prevent="register">
      <div>
        <label for="username">Username</label>
        <input id="username" type="text" placeholder="Enter your username." v-model="user.username" />
      </div>

      <div>
        <label for="password">Password</label>
        <input id="password" type="password" placeholder="Enter your password." v-model="user.password" />
      </div>

      <div>
        <button type="submit">
          Register
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
const auth = useAuth()

const user = ref({
  username: '',
  password: ''
})

const login = async () => {}

</script>

<style>

</style>