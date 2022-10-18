import { parseISO, formatDistanceToNow } from "date-fns";
import { pl } from "date-fns/locale";

export const parseDateFns = (date: Date) => {
  const parsedDate = parseISO(String(date));
  return formatDistanceToNow(parsedDate, { locale: pl });
};
