<template>
</template>

<script lang="ts" setup>
const auth = useAuth()
const route = useRouter()

if (auth.user.value) {
  await auth.logout()
}

route.push('/')
</script>

<style>
</style>