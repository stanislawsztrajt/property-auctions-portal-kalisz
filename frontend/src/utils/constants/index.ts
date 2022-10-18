export const jwt = "";
export const authHeader = { headers: { Authorization: `Bearer ${jwt}` } };

export const defaultCurrency = "PLN";

export const defaultGetRange = {
  startRange: 0,
  range: 10,
} as const;
