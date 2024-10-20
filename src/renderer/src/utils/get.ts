/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'
import useSWR from 'swr'

const fetcher = async (url: string): Promise<string> => {
  const res = await axios.get(url)
  return res.data
}

type UseGet = {
  data: string | undefined
  isLoading: boolean
  isError: any
}
export const useGet = (url: string): UseGet => {
  const { data, error } = useSWR(url, fetcher)
  return {
    data,
    isLoading: !error && !data,
    isError: error
  }
}
