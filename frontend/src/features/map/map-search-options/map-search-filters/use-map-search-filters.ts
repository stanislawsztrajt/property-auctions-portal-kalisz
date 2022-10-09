import * as Yup from 'yup'

const initialValues = {
  price: '',
  priceType: '',
  areaSize: '',
  type: 'inne',
  location: undefined,
  investment: undefined,
  rooms: undefined,
  level: undefined,
  rent: undefined,
  additions: undefined,
  parkingSpace: undefined,
} as const

const validationSchema = {
  price: Yup.string().max(16),
  priceType: Yup.string().max(16),
  areaSize: Yup.string().max(16),
  type: 'inne',
  location: undefined,
  investment: undefined,
  rooms: undefined,
  level: undefined,
  rent: undefined,
  additions: undefined,
  parkingSpace: undefined,
}

const useMapSearchFilters = () => {
  const filterAuctions = (values: any) => {
    console.log(values)
  }
  
  return { initialValues, validationSchema, filterAuctions };
};

export default useMapSearchFilters;
