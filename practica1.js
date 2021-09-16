let cambiarDolares=() => {
   let dolarHoy=103.5 
   let ingresoPesos= document.getElementById("pesos").value
   let impuestoGanancias= ingresoPesos * 0.35
   let impuestoPais= ingresoPesos * 0.3   
   let suma= parseInt(ingresoPesos) + parseInt(impuestoGanancias) +parseInt(impuestoPais) 
   let resultado= ingresoPesos/dolarHoy
   let boton= document.getElementById("boton")

    if(resultado<=0){
        alert('no se puede calcular eso')
    }

        else{
            document.getElementById("relleno").textContent=`${ingresoPesos}  pesos argentinos son ${resultado.toFixed(1)} USD. El impuesto pais es de  ${impuestoPais} y el impuesto a las ganancias es de ${impuestoGanancias}. El total a pagar es de ${Math.round(suma)}`
        
        }


}
boton.addEventListener("click",cambiarDolares)