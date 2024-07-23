export default defineNuxtPlugin(async (nuxtApp) => {
  const { me, user } = useAuth()

  try {
    const result: any = await me()
    user.value = result
  }
  catch(e) {
    console.error(e)
  }
})
