import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useMapSearchSort = () => {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState(router.query?.sort ?? "");
  const [isFirstTime, setIsFirstTime] = useState(false);

  useEffect(() => {
    if (isFirstTime) {
      router.push({ pathname: router.pathname, query: { ...router.query, sort: selectedOption } });
    } else setIsFirstTime(true);
  }, [selectedOption]);

  return {
    selectedOption,
    setSelectedOption,
  };
};

export default useMapSearchSort;
