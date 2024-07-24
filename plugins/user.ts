export default defineNuxtPlugin(async (nuxtApp) => {
  const { getUser } = useAuth()
  await getUser()

  /*
  try {
    const result: any = await me()
    user.value = result
  }
  catch(e) {
    console.error(e)
  }
  */
})
