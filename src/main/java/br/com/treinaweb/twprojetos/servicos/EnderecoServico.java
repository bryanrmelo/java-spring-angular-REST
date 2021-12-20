package br.com.treinaweb.twprojetos.servicos;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.treinaweb.twprojetos.api.dto.EnderecoDTO;
import br.com.treinaweb.twprojetos.api.mapeadores.EnderecoMapeador;
import br.com.treinaweb.twprojetos.entidades.Endereco;
import br.com.treinaweb.twprojetos.repositorios.EnderecoRepositorio;

@Service
public class EnderecoServico {

    @Autowired
    private EnderecoRepositorio enderecoRepositorio;

    @Autowired
    private EnderecoMapeador enderecoMapeador;

    public Endereco cadastrar(EnderecoDTO enderecoDTO) {
        Endereco endereco = enderecoMapeador.converterParaEntidade(enderecoDTO);

        return enderecoRepositorio.save(endereco);
    }
    
}
