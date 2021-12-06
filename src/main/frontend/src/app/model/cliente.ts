import { Link } from "./link";


export interface Cliente {
  id: number;
  nome: string;
  _links: Array<Link>[];
}
