export enum PriceType {
  EXCHANGE = "wymiana",
  PAYMENT = "zapłata",
  RENTAL = "wynajem",
}

export enum AreaUnit {
  M2 = "m2",
  A = "a",
  HA = "Ha",
}

export const AreaUnitArray = Object.entries(AreaUnit).map((unit) => unit[1]);

export enum PropertyType {
  APARTMENT = "mieszkanie",
  HOME = "dom",
  ALLOTMENT = "działka",
  FIELD = "pole",
  OTHER = "inne",
}

export const PropertyTypeArray = Object.entries(PropertyType).map((unit) => unit[1]);
