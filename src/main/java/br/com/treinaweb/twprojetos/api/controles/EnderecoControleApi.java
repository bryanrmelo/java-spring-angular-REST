package br.com.treinaweb.twprojetos.api.controles;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.EntityModel;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.treinaweb.twprojetos.api.dto.EnderecoDTO;
import br.com.treinaweb.twprojetos.api.hateoas.EnderecoAssembler;
import br.com.treinaweb.twprojetos.entidades.Endereco;
import br.com.treinaweb.twprojetos.servicos.EnderecoServico;

@RestController
@RequestMapping("/api/v1/cliente/endereco")
public class EnderecoControleApi {
    
    @Autowired
    private EnderecoServico enderecoServico;

    @Autowired
    private EnderecoAssembler enderecoAssembler;

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public EntityModel<Endereco> cadastrar(@RequestBody EnderecoDTO enderecoDTO) {
        Endereco endereco = enderecoServico.cadastrar(enderecoDTO);

        return enderecoAssembler.toModel(endereco);
    }

}
