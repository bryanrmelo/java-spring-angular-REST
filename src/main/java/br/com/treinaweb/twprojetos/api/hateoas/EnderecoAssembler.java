package br.com.treinaweb.twprojetos.api.hateoas;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.server.SimpleRepresentationModelAssembler;
import org.springframework.stereotype.Component;

import br.com.treinaweb.twprojetos.api.controles.EnderecoControleApi;
import br.com.treinaweb.twprojetos.entidades.Endereco;

@Component
public class EnderecoAssembler implements SimpleRepresentationModelAssembler<Endereco> {

    @Override
    public void addLinks(EntityModel<Endereco> resource) {
    }

    @Override
    public void addLinks(CollectionModel<EntityModel<Endereco>> resources) {
        Link cadastroLink = linkTo(methodOn(EnderecoControleApi.class).cadastrar(null))
                .withSelfRel()
                .withType("POST");

        resources.add(cadastroLink);

    }

}
