function cambiarImagen(producto){
    var productoSeleccionado = document.querySelector("#producto-"+producto);
    if(productoSeleccionado.hasAttribute("seleccionado")){
        document.querySelector("#producto-"+producto+"-1").style="";
        document.querySelector("#producto-"+producto+"-2").style="display:none";
        productoSeleccionado.removeAttribute("seleccionado");
    }else{
        document.querySelector("#producto-"+producto+"-1").style="display:none";
        document.querySelector("#producto-"+producto+"-2").style="border:2px solid #ef0078";
        productoSeleccionado.setAttribute("seleccionado","");
    }

}

function desplazarPagina(id){
    var destino = document.getElementById(id);
    destino.scrollIntoView({ behavior: 'smooth' });
}