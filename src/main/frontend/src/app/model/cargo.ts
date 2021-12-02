import { ILink } from "./link";


export interface ICargo {
  id: number;
  nome: string;
  _links: Array<ILink>[];
}
