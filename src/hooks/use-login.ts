import { mutate } from 'swr'

const useLogin = () => {
  const postLogin = (isAuthenticated: boolean) => {
    const url = '/api/auth'
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ isAuthenticated }),
    })
    mutate(url)
  }

  return {
    login: () => postLogin(true),
    logout: () => postLogin(false),
  }
}

export default useLogin