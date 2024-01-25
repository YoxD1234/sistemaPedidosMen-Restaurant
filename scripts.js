const usuario = {
    nombre:"Beto",
    edad: 30,
    deuda: 0
}

let pedido=[]

let costoPedido=0

const mostrarMenu = () => {
    console.log(`CÓDIGO : NOMBRE PRODUCTO => COSTO`)
    productos.forEach(producto => console.log(`${producto.codigo}: ${producto.nombre} => ${producto.costo}`) )

    
}

const pedirProducto = cod => {
    if(!cod) return "Ingrese un código valido"

    const productoEncontrado = productos.find(producto => producto.codigo === cod)
    
    if(!productoEncontrado) return "El producto no Existe"

    pedido.push(productoEncontrado)
    console.log("Su producto ha sido agregado a su pedido. Su pedido es: ")
    return verPedido()
}



const verPedido=()=>pedido

const calcularCosto=()=>{
    let costo=0
    for(producto of pedido){
        costo += producto.costo
    }

    costoPedido=costo
    return costoPedido
}

const finalizarPedido = ()=>{
    calcularCosto()
    usuario.deuda=costoPedido

    pedido= []

    costoPedido = 0
    return `${usuario.nombre}, debes pagar ${usuario.deuda} dólars`
}

//Función que permite pagar todo un pedido 
//y entrega cambio si es necesario.

const pagarPedido=(montoEntregado)=>{
let mensaje=""
    if(typeof montoEntregado === "number"){
        if(montoEntregado<usuario.deuda){
            mensaje= `No te alcanza para pagar tu pedido.`
        } else if(montoEntregado===usuario.deuda){
            usuario.deuda=0
            mensaje= `Tu pedido ha sido pagado.`
        } else{
            mensaje= `Tu pedido ha sido pagado y tu cambio es de ${montoEntregado - usuario.deuda}`
            usuario.deuda=0
        }
    }
    return mensaje
    
    
}
