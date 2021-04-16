import useSWR from 'swr'

const fetcher = async (input: RequestInfo, init?: RequestInit) =>
  fetch(input, init).then((res) => res.json())

const useFetch = (url: string) => useSWR([url], fetcher)
const useAuth = () => useFetch('/api/auth')

export default useAuth