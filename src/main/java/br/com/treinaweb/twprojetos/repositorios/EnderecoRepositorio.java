package br.com.treinaweb.twprojetos.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import br.com.treinaweb.twprojetos.entidades.Endereco;

public interface EnderecoRepositorio extends JpaRepository<Endereco, Long> {

    @Query(value = "SELECT * FROM endereco WHERE cep = ?1 AND numero = ?2", nativeQuery = true)
    Endereco findByCepNumero(String cep, String numero);
    
}