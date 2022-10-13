import { IinRangeBody } from "@features/auctions/types";
import { AreaUnit, PriceType, PropertyType } from "features/auctions/types/enums";
import { AuctionsServices } from "utils/api";
import * as Yup from "yup";

const initialValues = {
  price: {
    from: "",
    to: "",
  },
  priceType: "",
  area: {
    from: "",
    to: "",
    unit: AreaUnit.M2,
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
} as const;

const validationSchema = {};

const useMapSearchFilters = () => {
  const filterAuctions = async (values: any) => {
    const valuesEntries: [string, string | boolean | any][] = Object.entries(values);
    const filteredValuesEntries = valuesEntries.filter(([key, value]) => {
      if (value === "" || value === false || (value.from === "" && value.to === "")) {
        return false;
      }
      return true;
    });

    const newValues = Object.fromEntries(filteredValuesEntries);

    console.log(newValues);
    const res = await AuctionsServices.getInRangeWithFilterAndSort(
      0,
      10,
      newValues as IinRangeBody
    );
    console.log(res);
  };

  return { initialValues, validationSchema, filterAuctions };
};

export default useMapSearchFilters;
