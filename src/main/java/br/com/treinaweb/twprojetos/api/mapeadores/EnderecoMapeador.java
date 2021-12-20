package br.com.treinaweb.twprojetos.api.mapeadores;

import br.com.treinaweb.twprojetos.api.dto.EnderecoDTO;
import br.com.treinaweb.twprojetos.entidades.Endereco;

public class EnderecoMapeador {

    public Endereco converterParaEntidade(EnderecoDTO enderecoDTO) {
        Endereco endereco = new Endereco();

        endereco.setCep(enderecoDTO.getCep());
        endereco.setLogradouro(enderecoDTO.getLogradouro());

        return endereco;
    }
    
}
