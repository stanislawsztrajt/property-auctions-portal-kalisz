export const findById = (collection: string, id: number) => {
  return `SELECT * FROM public."${collection}" WHERE id = ${id}`;
};
