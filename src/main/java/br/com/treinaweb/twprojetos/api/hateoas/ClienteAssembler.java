package br.com.treinaweb.twprojetos.api.hateoas;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.server.SimpleRepresentationModelAssembler;
import org.springframework.stereotype.Component;

import br.com.treinaweb.twprojetos.api.controles.ClienteControleApi;
import br.com.treinaweb.twprojetos.entidades.Cliente;

@Component
public class ClienteAssembler implements SimpleRepresentationModelAssembler<Cliente> {

    @Override
    public void addLinks(EntityModel<Cliente> resource) {
        Long id = resource.getContent().getId();

        Link selfLink = linkTo(methodOn(ClienteControleApi.class).buscarPorId(id))
                .withSelfRel()
                .withType("GET");

        Link editarLink = linkTo(methodOn(ClienteControleApi.class).atualizar(null, id))
                .withSelfRel()
                .withType("PUT");

        Link excluirLink = linkTo(methodOn(ClienteControleApi.class).excluirPorId(id))
                .withSelfRel()
                .withType("DELETE");

        Link projetosLink = linkTo(methodOn(ClienteControleApi.class).buscarProjetos(id))
                .withSelfRel()
                .withType("GET");

        resource.add(selfLink, editarLink, excluirLink, projetosLink);

    }

    @Override
    public void addLinks(CollectionModel<EntityModel<Cliente>> resources) {
        Link cadastroLink = linkTo(methodOn(ClienteControleApi.class).cadastrar(null))
                .withSelfRel()
                .withType("POST");

        Link selfLink = linkTo(methodOn(ClienteControleApi.class).buscarTodos(null))
                .withSelfRel()
                .withType("GET");

        resources.add(selfLink, cadastroLink);

    }

}
