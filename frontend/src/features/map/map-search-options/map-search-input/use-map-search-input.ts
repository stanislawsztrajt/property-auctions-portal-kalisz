import { useCallback, useEffect, useState } from 'react'
import { debounce } from 'radash'
import { useRouter } from 'next/router'

const useMapSearchInput = () => {
  const router = useRouter()
  const [value, setValue] = useState('')
  const [isFirstTime, setIsFirstTime] = useState(false);

  const handleInput = (searchValue: string, queryObject: object) => {
    router.push({ pathname: '/', query: { ...queryObject, title: searchValue, description: searchValue } })
  }

  const debouncedSearhValue = useCallback(debounce({ delay: 1000 }, handleInput), []);

  useEffect(() => {
    if (isFirstTime) debouncedSearhValue(value, router.query)
    else setIsFirstTime(true)
  }, [value])

  return {
    setValue
  }
}

export default useMapSearchInput