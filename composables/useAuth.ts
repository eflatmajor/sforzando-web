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

    if (response.user.name && response.user.email) {
      user.value = response.user
    }

    return response
  }

  async function logout() {
    const response = await api.post("/logout", {
      headers: {
        "X-XSRF-TOKEN": await getCSRFCookie(),
      }
    })
    
    user.value = null

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

    return response
  }

  async function getUser(): Promise<User | null> {
    try {
      const requestHeaders = useRequestHeaders(['cookie'])
      const response = await api.get<User>('/user', {
        headers: {
          ...requestHeaders,
        },
      })

      user.value = response

      return response
    }
    catch {
      return null
    }
  }

  return {
    me,
    user,
    login,
    logout,
    register,
    getUser
  }
}
