import { useHandleModalShow } from "@features/ui/handle-modal/handle-modal-context";
import { AreaUnit } from "features/auctions/types/enums";
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as Yup from "yup";

interface IfilterValues {
  price?: {
    from: string | number;
    to: string | number;
  };
  priceType?: string | number;
  area?: {
    from: string | number;
    to: string | number;
    unit: AreaUnit | string;
  };
  type?: string | number;
  rooms?: {
    from: string | number;
    to: string | number;
  };
  level?: {
    from: string | number;
    to: string | number;
  };
  rent?: {
    from: string | number;
    to: string | number;
  };
  parkingSpace?: boolean;
}

let initialValues = {
  price: {
    from: "",
    to: "",
  },
  priceType: "",
  area: {
    from: "",
    to: "",
    unit: "",
  },
  type: "",
  rooms: {
    from: "",
    to: "",
  },
  level: {
    from: "",
    to: "",
  },
  rent: {
    from: "",
    to: "",
  },
  parkingSpace: false,
};

const validationSchema = {};

const useMapSearchFilters = () => {
  const router = useRouter();
  const { setIsModalShow } = useHandleModalShow();

  useEffect(() => {
    if (router.query.filterValues) {
      const prev = JSON.parse(String(router.query.filterValues));
      initialValues = { ...initialValues, ...prev };
    }
  }, [router.query]);

  const filterAuctions = async (values: IfilterValues) => {
    const valuesEntries: [string, string | boolean | any][] = Object.entries(values);
    const filteredValuesEntries = valuesEntries.filter((entry) => {
      if (
        entry[1] === "" ||
        entry[1] === false ||
        (entry[1].from === "" && entry[1].to === "" && (entry[1].unit === "" || !entry[1].unit))
      ) {
        return false;
      }
      return true;
    });

    const filterValues: IfilterValues = Object.fromEntries(filteredValuesEntries);
    const { slug, ...previousQuery } = router.query;
    console.log(filterValues);
    router.push({
      pathname: "/",
      query: { ...previousQuery, filterValues: JSON.stringify(filterValues) },
    });

    setIsModalShow(false);
  };

  return { initialValues, validationSchema, filterAuctions };
};

export default useMapSearchFilters;
