import { Link } from "./link";
import { Endereco } from "./endereco"
import { Projeto } from "./projeto";


export class Cliente {
  id: number;
  nome: string;
  cpf: string;
  telefone: string;
  email: string;
  dataNascimento: string;
  endereco: Endereco;
  projetos: Projeto[];
  _links: Array<Link>[];
}
