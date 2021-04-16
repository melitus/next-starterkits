import useSWR from 'swr'

const init = { method: 'GET' }

const fetcher = async (input: RequestInfo, init?: RequestInit) =>
  fetch(input, init).then((res) => res.json())

const useFetch = (url: string) => useSWR([`/api/${url}`, init], fetcher)

export default useFetch