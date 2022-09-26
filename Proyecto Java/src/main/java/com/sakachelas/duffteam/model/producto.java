package com.sakachelas.duffteam.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity//clase se convierte en entidad de una db, aquí relaciona con mysql
@Table (name="producto") //aqui ponemos el nombre de la tabla que vamos a utilizar de sql




public class producto {

	@Id //especificamos la primary key
	@GeneratedValue(strategy = GenerationType.IDENTITY) //Identity es primary key y es autoincremental
		
		@Column (name = "id", unique= true, nullable = false ) //Columa unica, no nula
	
	//atributos
	private Long id;
	private String nombre;
	private String descripcion;
	private String marca;
	private Double precio;
	private String estilo;
	private String imagen;
	private Long cerveceros_id_cerveceros;
	
	
	//constructores
	public producto(Long id, String nombre, String descripcion, String marca, Double precio, String estilo, String imagen, Long cerveceros_id_cerveceros) {
		super();
		this.id= id;
		this.nombre = nombre;
		this.descripcion = descripcion;
		this.marca = marca;
		this.precio = precio;
		this.estilo = estilo;
		this.imagen = imagen;
		this.cerveceros_id_cerveceros = cerveceros_id_cerveceros;
		
	}//end constructors
	

	//se tiene que generar un constructor vacio 
	public producto() {
	
	}// end empty constructor


	//getters and setters
	
	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}

	
	public String getNombre() {
		return nombre;
	}


	public void setNombre(String nombre) {
		this.nombre = nombre;
	}


	public String getDescripcion() {
		return descripcion;
	}


	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}


	public String getMarca() {
		return marca;
	}


	public void setMarca(String marca) {
		this.marca = marca;
	}


	public Double getPrecio() {
		return precio;
	}


	public void setPrecio(Double precio) {
		this.precio = precio;
	}


	public String getEstilo() {
		return estilo;
	}


	public void setEstilo(String estilo) {
		this.estilo = estilo;
	}


	public String getImagen() {
		return imagen;
	}


	public void setImagen(String imagen) {
		this.imagen = imagen;
		
	}
	

	public Long getCerveceros_id_cerveceros() {
		return cerveceros_id_cerveceros;
	}


	public void setCerveceros_id_cerveceros(Long cerveceros_id_cerveceros) {
		this.cerveceros_id_cerveceros = cerveceros_id_cerveceros;
	}


	@Override
	public String toString() {
		return "producto [id=" + id + ", nombre=" + nombre + ", descripcion=" + descripcion + ", marca=" + marca
				+ ", precio=" + precio + ", estilo=" + estilo + ", imagen=" + imagen + ", cerveceros_id_cerveceros="
				+ cerveceros_id_cerveceros + "]";
	}


	//to string
	
	
		
}//end class
