import { ofetch } from "ofetch"
import type { FetchOptions, FetchRequest } from "ofetch";

export async function getCSRFCookie(): Promise<string> {
  await requestCSRF()
  return useCookie<string>('XSRF-TOKEN').value
}

export async function requestCSRF(): Promise<void> {
  await $fetch('http://localhost:8000/sanctum/csrf-cookie', {
    credentials: "include"
  })
}

export const useApi = () => {
  const runtimeConfig = useRuntimeConfig()

  const baseFetch = ofetch.create({
    baseURL: runtimeConfig.public.laravelApi,
    headers: {
      "Accept": "application/json"
    },
    credentials: "include",
  })

  return {
    async get<Type>(request: FetchRequest, options?: FetchOptions<'json'>) {
    return await baseFetch<Type>(request, {
        ...options
    })
    },
    async post<Type>(request: FetchRequest, options?: FetchOptions<'json'>) {
    return await baseFetch<Type>(request, {
        method: "POST",
        ...options
    })
    },
  }
}