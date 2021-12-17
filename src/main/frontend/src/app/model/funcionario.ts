import { Cargo } from "./cargo";
import { Endereco } from "./endereco";

export class Funcionario {
    id: number;
    nome: string;
    cpf: string;
    telefone: string;
    email: string;
    dataNascimento: string;
    endereco: Endereco;
    dataAdmissao: string;
    dataDemissao: string;
    _links: Cargo[];
}