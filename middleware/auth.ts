export default defineNuxtRouteMiddleware(async (to, from) => {
  const auth = useAuth();

  if ( ! auth.user.value) {
    console.log('not logged in');
    navigateTo('/login');
    // await useRouter().push({ path: '/login', force: true })
    // window.location.href = '/login'
  }
  else {
    console.log('logged in')
  }
})