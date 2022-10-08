export type Tcategory = "dom" | "mieszkanie" | "działka" | "inna";


// FC type with children
import { FC, PropsWithChildren } from "react";
export type FCC<P = {}> = FC<PropsWithChildren<P>>;
