package br.com.treinaweb.twprojetos.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.treinaweb.twprojetos.entidades.Endereco;

public interface EnderecoRepositorio extends JpaRepository<Endereco, Long> {
    
}