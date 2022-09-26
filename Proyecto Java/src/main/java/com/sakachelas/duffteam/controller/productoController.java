package com.sakachelas.duffteam.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;


import com.sakachelas.duffteam.model.producto;
import com.sakachelas.duffteam.servicio.productoServicio;



@RestController // ayuda a decirle a java que esta clase es un controlador
@RequestMapping(path="/api/cervezas/") //ruta
@CrossOrigin(origins="*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE,RequestMethod.PUT })

public class productoController {
	
	
	
	//constante para el autowire, debe ser publica o privada pero debe ser final para que detecte que es constante
		public final productoServicio prodService;
		
		@Autowired
		public productoController(productoServicio prodService) {
			this.prodService = prodService;
		}//end constructor

		//Metodo GET (para mostrar toda la lista)
		@GetMapping
		public List<producto>getproductos(){
			return prodService.getProductos();
		}//getAllproductos
		
	//Metodo GET para un producto por id
		@GetMapping(path="/prodid")
		public producto getProducto(@RequestParam Long prodid) {
			return prodService.getProducto(prodid);
		}//getproducto
		
		
		//get marca
		@GetMapping(path="/marca")
		public producto getProductoMarca(@RequestParam String marca) {
			return prodService.getProductoMarca(marca);
		}//getproducto
		
		
		//get precio
				@GetMapping(path="/precio")
				public producto getProductoPrecio(@RequestParam Double precio) {
					return prodService.getProductoPrecio(precio);
				}//getproducto
		
				//get estilo
				@GetMapping(path="/estilo")
				public producto getProductoEstilo(@RequestParam String estilo) {
					return prodService.getProductoEstilo(estilo);
				}//getproducto

				
		
		//Metodo POST agregar un producto
		@PostMapping
		public void addProducto(@RequestBody producto prod) {
			prodService.addProducto(prod);
		}
		
	//Método DELETE para borrar un producto por id
		@DeleteMapping(path="{prodid}")
		public void deleteProducto(@PathVariable("prodid")Long prodid) {
			prodService.deleteProducto(prodid);
		}//deleteproducto

		//Método PUT par modificar un producto por id
		@PutMapping (path="{prodid}")
		public void updateProducto(
			@PathVariable("prodid")Long prodid,
			@RequestParam (required = false) String nombre,
			@RequestParam (required = false) String descripcion,
			@RequestParam (required = false) String marca,
			@RequestParam (required = false) Double precio,
			@RequestParam (required = false) String estilo,
			@RequestParam (required = false) String imagen,
			@RequestParam (required = false) Long cerveceros_id_cerveceros
					){
				prodService.updateProducto(prodid, nombre, descripcion, marca, precio, estilo,imagen, cerveceros_id_cerveceros );
			}//updateproducto

}//end class
