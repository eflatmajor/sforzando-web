export default defineNuxtRouteMiddleware(async (to, from) => {
  const { user } = useAuth()

  if ( ! user.value) {
    console.log('not logged in');
    return navigateTo('/login');
    // await useRouter().push({ path: '/login', force: true })
    // window.location.href = '/login'
  }
  else {
    console.log('logged in')
  }
})