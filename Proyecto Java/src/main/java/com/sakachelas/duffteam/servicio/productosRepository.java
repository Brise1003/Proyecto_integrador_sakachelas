//aqui viviran mis productos, será mi interface. 
//aqui vivira mi tabal de mysql


package com.sakachelas.duffteam.servicio;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.sakachelas.duffteam.model.producto;



public interface productosRepository extends JpaRepository<producto, Long>{
	//lo que busco tipo, (producto) y por que lo busco (long) id donde lo busco
	//extends ayuda a que queden en la base de datos
	
	//si no tengo un metodo para agregar cierto tipo de dato, yo lo puedo crear con un query
	
	//filtro por nombre
	@Query("SELECT p FROM producto p WHERE p.nombre=?1")//el signo de interrogacion es el parametro.
	Optional<producto> findByNombre (String nombre);
	
	//filtro por marca
	@Query("SELECT p FROM producto p WHERE p.marca=?1")//el signo de interrogacion es el parametro.
	Optional<producto> findByMarca(String marca);
	
	//filtro por precio
		@Query("SELECT p FROM producto p WHERE p.precio=?1")//el signo de interrogacion es el parametro.
		Optional<producto> findByPrecio(Double precio);

		//filtro por estilo
				@Query("SELECT p FROM producto p WHERE p.estilo=?1")//el signo de interrogacion es el parametro.
				Optional<producto> findByEstilo(String estilo);
	
	
	
	//si agrego más parametros, debo enumerarlos y declararlos dentro del parentesis
	//optional ayuda a que corra y si tiene error nos diga donde esta el error

}//end class
