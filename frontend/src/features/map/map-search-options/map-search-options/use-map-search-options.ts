import { useRouter } from "next/router"
import { useEffect } from "react"

const useMapSearchOptions = () => {
  const router = useRouter()
  useEffect(() => {
    console.log(router.query)
    console.log(window.location.href)
  }, [router.query])

  return {}
}

export default useMapSearchOptions