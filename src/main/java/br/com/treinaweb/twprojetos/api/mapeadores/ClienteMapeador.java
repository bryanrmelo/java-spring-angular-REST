package br.com.treinaweb.twprojetos.api.mapeadores;

import org.springframework.stereotype.Component;

import br.com.treinaweb.twprojetos.api.dto.ClienteDTO;
import br.com.treinaweb.twprojetos.entidades.Cliente;

@Component
public class ClienteMapeador {
    
    public Cliente converterParaEntidade(ClienteDTO clienteDTO) {
        Cliente cliente = new Cliente();

        cliente.setNome(clienteDTO.getNome());

        return cliente;
    }
}
