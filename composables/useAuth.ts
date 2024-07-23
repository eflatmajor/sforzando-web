import { reactive } from "vue"

export interface LoginBody {
  email: string
  password: string
}
  
export interface RegisterBody {
  name: string
  email: string,
  password: string
}

export interface User {
  created_at: string,
  email: string,
  email_verified_at: string,
  id: number,
  name: string,
  updated_at: string
}

export interface UserResponse {
  user: User
}
  
export const useAuth = () => {
  const api = useApi()

  const user = useState<User | null>('user', () => null)

  async function login(body: LoginBody) {
    const response: UserResponse = await api.post("/login", {
      headers: {
        "X-XSRF-TOKEN": await getCSRFCookie(),
      },
      body
    })

    console.log('!!!', response, '!!!')

    if (response.user.name && response.user.email) {
      console.log('setting user')
      user.value = response.user
    }
    else {
      console.log('no user to set')
      console.log(response)
    }

    return response
  }

  async function register(body: RegisterBody) {
    await api.post('/register', { 
      headers: {
        "X-XSRF-TOKEN": await getCSRFCookie(),
      },
      body 
    })
  }

  async function me() {
    const response = await api.get('/user', { 
      headers: {
        "X-XSRF-TOKEN": await getCSRFCookie(),
      }
    })

    console.log('me response', response);

    return response
  }

  return {
    me,
    user,
    login,
    register
  }
}
