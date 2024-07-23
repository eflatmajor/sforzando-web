<template>
  <div>
    <form method="POST" @submit.prevent="login">
      <div>
        <label for="email">Email</label>
        <input id="email" type="text" placeholder="Enter your email." v-model="formData.email" />
      </div>

      <div>
        <label for="password">Password</label>
        <input id="password" type="password" placeholder="Enter your password." v-model="formData.password" />
      </div>

      <div>
        <button type="submit">
          Login
        </button>
      </div>

      <div>
        {{ auth.user }}
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
const auth = useAuth()

const formData = ref({
  email: '',
  password: ''
})

const login = async () => {
  try {
    const result = await auth.login(formData.value)
    console.log(result)
  }
  catch (e) {
    console.error(e)
  }
}
</script>

<style>

</style>