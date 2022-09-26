package com.sakachelas.duffteam.servicio;



import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sakachelas.duffteam.model.producto;


@Service

public class productoServicio {
	
	
	//amos a hacer un autwired para conectarlol a repositorio
		//constante para autowired
	
		private final productosRepository productosRepository;
		
		@Autowired
		//constructor para conectar servicio a repositorio
		public productoServicio(productosRepository productosRepository) {
			this.productosRepository = productosRepository;
		}//end constructor
	
	
	
	
//metodo get para traer toda la lista de cervezas
	public List<producto> getProductos() {
	return productosRepository.findAll();
	}//end getall
	
	

	//metodo get para traer una cerveza por id
	public producto getProducto(Long prodid) {
	return productosRepository.findById(prodid).orElseThrow(()-> new IllegalStateException("El producto con el ID " + prodid + "no existe."));//muestra esto si no lo encuentras
				}//end method getall
	
	
		
	//metodo get para traer una cerveza por marca
	public producto getProductoMarca(String marca) {
		return productosRepository.findByMarca(marca).orElseThrow(()-> new IllegalStateException("El producto con la marca " + marca + "no existe."));//muestra esto si no lo encuentras
		}//end method getall
		
	//get para precio	
	public producto getProductoPrecio(Double precio) {
			return productosRepository.findByPrecio(precio).orElseThrow(()-> new IllegalStateException("El producto con la precio " + precio + "no existe."));//muestra esto si no lo encuentras
			}//end method getall
	
	//get estilo	
	public producto getProductoEstilo(String estilo) {		
		return productosRepository.findByEstilo(estilo).orElseThrow(()-> new IllegalStateException("El producto con la precio " + estilo + "no existe."));
	}//end method getall
	

		
	//Metodo POST agregar un producto
	public void addProducto(producto prod) {
		Optional <producto> prodByName =
				productosRepository.findByNombre(prod.getNombre()); //busco el nombre y lo asigno a la variable de arriba
		if (prodByName.isPresent()) { //si el producto existe lanzamos el trow
			throw new IllegalStateException("El producto con el nombre " + prod.getNombre() + " ya existe.");
		}else {
			productosRepository.save(prod); //si no existe, toma el producto y lo guarda
		}//else if
		
	}//end post
	
	
	
	//Método DELETE para borrar un producto por id

	public void deleteProducto(Long prodid) {
		//metodo para validar que algo exista
				if(productosRepository.existsById(prodid)) {//si el producto existe
					productosRepository.deleteById(prodid);//borralo
				}//end if
		
		
	}//end delete
	
	
	
	//Método PUT par modificar un producto por id
	
	//agrego suppersswarnings para que si agrege el getbyid
	@SuppressWarnings("deprecation")
public void updateProducto(Long prodid, String nombre, String descripcion, String marca, Double precio,
		String estilo, String imagen, Long cerveceros_id_cerveceros) {
	if (productosRepository.existsById(prodid)){//Reviso que el producto exista
		producto productoTemporal = productosRepository.getById(prodid);//si existe, lo guardo en la variable p
		
		if (nombre !=null) productoTemporal.setNombre(nombre);
		if (descripcion !=null) productoTemporal.setDescripcion(descripcion);
		if (marca !=null) productoTemporal.setDescripcion(marca);
		if (precio !=0) productoTemporal.setPrecio(precio);
		if (estilo !=null) productoTemporal.setDescripcion(estilo);
		if (imagen !=null) productoTemporal.setImagen(imagen);
		if (cerveceros_id_cerveceros !=null) productoTemporal.setCerveceros_id_cerveceros(cerveceros_id_cerveceros);
		productosRepository.save(productoTemporal);
	}else {
		System.out.println("No existe el id " + prodid);
	}//if else
}//updateProducto









	




	

	
}//end class
