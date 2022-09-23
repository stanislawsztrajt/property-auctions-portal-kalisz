export const parseJwt: (jwt: string) => string = (jwt) => {
  return jwt.split(' ')[1];
};
