import { Link } from "./link";
import { Endereco } from "./endereco"


export interface Cliente {
  id: number;
  nome: string;
  cpf: string;
  telefone: string;
  email: string;
  dataNascimento: string;
  endereco: Endereco;
  _links: Array<Link>[];
}
