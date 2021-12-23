package br.com.treinaweb.twprojetos.api.mapeadores;

import org.springframework.stereotype.Component;

import br.com.treinaweb.twprojetos.api.dto.EnderecoDTO;
import br.com.treinaweb.twprojetos.entidades.Endereco;

@Component
public class EnderecoMapeador {

    public Endereco converterParaEntidade(EnderecoDTO enderecoDTO) {
        Endereco endereco = new Endereco();

        endereco.setCep(enderecoDTO.getCep());
        endereco.setLogradouro(enderecoDTO.getLogradouro());
        endereco.setComplemento(enderecoDTO.getComplemento());
        endereco.setNumero(enderecoDTO.getNumero());
        endereco.setBairro(enderecoDTO.getBairro());
        endereco.setCidade(enderecoDTO.getCidade());
        endereco.setUf(enderecoDTO.getUf());

        return endereco;
    }
    
}
