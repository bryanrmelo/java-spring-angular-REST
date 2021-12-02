import { Link } from "./link";


export interface Cargo {
  id: number;
  nome: string;
  _links: Array<Link>[];
}
