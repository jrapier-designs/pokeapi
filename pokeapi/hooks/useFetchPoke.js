import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function useFetchPoke() {
  const { data, error } = useSWR('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0', fetcher)

  return {
    poke: data,
    isLoading: !error && !data,
    isError: error
  }
}
