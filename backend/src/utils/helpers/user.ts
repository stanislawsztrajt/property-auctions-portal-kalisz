export const checkIsUserIsAdmin: (roles: string[]) => boolean = (roles) => {
  return roles.includes('admin');
};
