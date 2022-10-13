import { useCallback, useEffect, useState } from "react";
import { debounce } from "radash";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";

const useMapSearchInput = () => {
  const router = useRouter();
  const [value, setValue] = useState((router.query?.title as string) ?? "");
  const [isFirstTime, setIsFirstTime] = useState(false);

  const handleInput = async (searchValue: string, routerQuery: ParsedUrlQuery) => {
    const { slug, ...query } = routerQuery;
    router.push({ pathname: "/", query: { ...query, title: searchValue } });
  };

  const debouncedSearhValue = useCallback(debounce({ delay: 1000 }, handleInput), []);

  useEffect(() => {
    if (isFirstTime) debouncedSearhValue(value, router.query);
    else setIsFirstTime(true);
  }, [value]);

  return {
    value,
    setValue,
  };
};

export default useMapSearchInput;
