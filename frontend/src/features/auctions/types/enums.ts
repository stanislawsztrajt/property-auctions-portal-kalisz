export enum PriceType {
  EXCHANGE = "wymiana",
  PAYMENT = "zapłata",
  RENTAL = "wynajem",
}

export enum AreaUnit {
  A = "a",
  HA = "ha",
  M2 = "m2",
}

export const AreaUnitArray = Object.entries(AreaUnit).map((unit) => unit[1])

export enum PropertyType {
  HOME = "dom",
  APARTMENT = "mieszkanie",
  ALLOTMENT = "działka",
  FIELD = "pole",
  OTHER = "inne",
}
