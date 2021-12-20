package br.com.treinaweb.twprojetos.api.controles;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.web.PageableDefault;
import org.springframework.data.web.PagedResourcesAssembler;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.PagedModel;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.treinaweb.twprojetos.api.dto.ClienteDTO;
import br.com.treinaweb.twprojetos.api.hateoas.ClienteAssembler;
import br.com.treinaweb.twprojetos.api.hateoas.ProjetoAssembler;
import br.com.treinaweb.twprojetos.entidades.Cliente;
import br.com.treinaweb.twprojetos.entidades.Projeto;
import br.com.treinaweb.twprojetos.servicos.ClienteServico;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("api/v1/clientes")
public class ClienteControleApi {
    
    @Autowired
    private ClienteServico clienteServico;

    @Autowired
    private ClienteAssembler clienteAssembler;
    
    @Autowired
    private ProjetoAssembler projetoAssembler;

    @Autowired
    private PagedResourcesAssembler<Cliente> pagedResourcesAssembler;
    
    @GetMapping
    public PagedModel<EntityModel<Cliente>> buscarTodos(@PageableDefault(sort = {"id"}, direction = Direction.ASC) Pageable paginacao) {
        Page<Cliente> clientes = clienteServico.buscarTodos(paginacao);

        return pagedResourcesAssembler.toModel(clientes, clienteAssembler);
    }

    @GetMapping("/{id}")
    public EntityModel<Cliente> buscarPorId(@PathVariable Long id) {
        Cliente cliente = clienteServico.buscarPorId(id);
        
        return clienteAssembler.toModel(cliente);
    }
    @PutMapping("/{id}")
    public EntityModel<Cliente> atualizar(@RequestBody ClienteDTO clienteDto,@PathVariable Long id) {
        Cliente cliente = clienteServico.atualizar(clienteDto, id);

        return clienteAssembler.toModel(cliente);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> excluirPorId(@PathVariable Long id) {
        clienteServico.excluirPorId(id);

        return ResponseEntity.noContent().build();
    }

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public EntityModel<Cliente> cadastrar(@RequestBody ClienteDTO clienteDTO) {
        Cliente cliente = clienteServico.cadastrar(clienteDTO);

        return clienteAssembler.toModel(cliente);
    }

    @GetMapping("/{id}/projetos")
    public CollectionModel<EntityModel<Projeto>> buscarProjetos(@PathVariable Long id) {
        List<Projeto> projetos = clienteServico.buscarPorId(id).getProjetos();

        return projetoAssembler.toCollectionModel(projetos);
    }

}
