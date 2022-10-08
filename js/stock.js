alert("Hola, esta es el area para compras de hadware");
alert("Recuerda que el espacio de stock es de 180 volúmenes.");
document.write("Capacidad y stock de planta");
document.write("<br>"+"***********************"+ "<br>");

let menuUser = 0;
let sumatoriaVol=[0];
let sumatoriaPrecIva=[0];
let sumatoriaPrecCont=[0];
let sumatoriaPrecCuota=[0];
let listadoProducto = []
let precIva=0;
let precCont=0;
let precCuota=0;
let sumTotal=0;
let sumatoriaTotalPrecIva=0;
let sumatoriaTotalPrecCont=0;
let sumatoriaTotalPrecCuota=0;

// Encapsulamiento de variables de intereses y descuentos porcentuales./desc= descuento / inter= interes
function VariblePorcent(desc, inter) {
    let _desc = desc;
    let _inter = inter;
    
    Object.defineProperty(this,"_getDesc",{
        get:function(){
            return _desc
        }
    })

    Object.defineProperty(this,"_getInter",{
        get:function(){
            return _inter
        }
    })

    Object.defineProperty(this,"_setDesc",{
        set:function(desc){
            _desc = desc
        }
    })

    Object.defineProperty(this,"_setInter",{
        set:function(inter){
            _inter = inter
        }
    })
}

VariblePorcent.prototype.getDesc= function(){
    return this._getDesc
}

VariblePorcent.prototype.getInter= function(){
    return this._getInter
}

VariblePorcent.prototype.setDesc= function( desc ){
    return this._setDesc= desc
}

VariblePorcent.prototype.setInetr= function( inter ){
    return this._setInter= inter
}

let v1 = new VariblePorcent(0.85, 1.13);

console.log("Salida de variable de descuento e intereses--> ", v1);
console.log(v1.getDesc());
console.log(v1.getInter());


// Array de objetos de variables
let datosProductos = [
    {pructo:'teclado', volEquiv: 3, precioProd: 6},
    {pructo:'scanner', volEquiv: 6, precioProd: 13},
    {pructo:'monitor 15 p.', volEquiv: 4, precioProd: 9},
    {pructo:'CPU', volEquiv: 7, precioProd: 11},
    {pructo:'camara web', volEquiv: 2, precioProd: 9},
    {pructo:'microfono', volEquiv: 4, precioProd: 8},
    {pructo:'cable USB 1.5m', volEquiv: 1, precioProd: 3},
    {pructo:'mouse', volEquiv: 2, precioProd: 5},    
]

// Listado de productos para comprar
datosProductos.forEach((element) =>{
    listadoProducto.push(element.pructo);
})
console.log("Listado de productos existentes.")
console.table(listadoProducto);


// Funciones de calculos y variables
function mensHad(nombre, valor, pedidHad, precio) {
    //Calculo de volumen por material
    //nombre=nombre del producto; valor=valor volumetrico del producto; pedidHad=cantidad de articulos pedidos; precio=precio de lista
    console.log(nombre+ "= " +valor+ " unidades volumétricas");            
    cantVol = valor*pedidHad;
    sumatoriaVol.push(cantVol);
    console.log("Compra de " + pedidHad +" "+ nombre+ " y ocupa "+ cantVol+" unidades volumétricas");
    document.write("<br>","Compra de " + pedidHad +" "+ nombre+ " y ocupa "+ cantVol+" unidades volumétricas");

    //Calculo de costo por volumen
    precIva = pedidHad*precio*1.21;
    precCont = pedidHad*precio*1.21*v1.getDesc();
    precCuota = pedidHad*precio*1.21*v1.getInter();
    let precIvaDd=precIva.toFixed(2);
    let precContDd=precCont.toFixed(2);
    let precCuotaDd=precCuota.toFixed(2);
    sumatoriaPrecIva.push(precIva);
    sumatoriaPrecCont.push(precCont);
    sumatoriaPrecCuota.push(precCuota);

    document.write("<br>" + 
    "Tiene un costo " + precIvaDd + " USD con IVA" + "<br>" + 
    "Precio de contado: " + precContDd + " USD"+ "<br>"+
    "Precio en cuotas: " + precCuotaDd +  " USD"+"<br>");
    
}

do{
    let menuUser = prompt(`
    Elija la opcion de compra:
    1: ${datosProductos[0].pructo} (${datosProductos[0].volEquiv} unidades de volumen) (Precio de lista: ${datosProductos[0].precioProd} USD)
    2: ${datosProductos[1].pructo} (${datosProductos[1].volEquiv} unidades de volumen) (Precio de lista: ${datosProductos[1].precioProd} USD)
    3: ${datosProductos[2].pructo} (${datosProductos[2].volEquiv} unidades de volumen) (Precio de lista: ${datosProductos[2].precioProd} USD)
    4: ${datosProductos[3].pructo} (${datosProductos[3].volEquiv} unidades de volumen) (Precio de lista: ${datosProductos[3].precioProd} USD)
    5: ${datosProductos[4].pructo} (${datosProductos[4].volEquiv} unidades de volumen) (Precio de lista: ${datosProductos[4].precioProd} USD)
    6: ${datosProductos[5].pructo} (${datosProductos[5].volEquiv} unidades de volumen) (Precio de lista: ${datosProductos[5].precioProd} USD)
    7: ${datosProductos[6].pructo} (${datosProductos[6].volEquiv} unidades de volumen) (Precio de lista: ${datosProductos[6].precioProd} USD)
    8: ${datosProductos[7].pructo} (${datosProductos[7].volEquiv} unidades de volumen) (Precio de lista: ${datosProductos[7].precioProd} USD)
    9: Salir 
    `)

    switch(menuUser){
        case '1':
            console.log(`Insumo pedido: ${datosProductos[0].pructo} (Precio de lista: ${datosProductos[0].precioProd} USD)`);        
        break;
        case '2':
            console.log(`Insumo pedido: ${datosProductos[1].pructo} (Precio de lista: ${datosProductos[1].precioProd} USD)`);
        break;
        case '3':
            console.log(`Insumo pedido: ${datosProductos[2].pructo} (Precio de lista: ${datosProductos[2].precioProd} USD)`);
        break;
        case '4':
            console.log(`Insumo pedido: ${datosProductos[3].pructo} (Precio de lista: ${datosProductos[3].precioProd} USD)`);
        break;
        case '5':
            console.log(`Insumo pedido: ${datosProductos[4].pructo} (Precio de lista: ${datosProductos[4].precioProd} USD)`);        
        break;
        case '6':
            console.log(`Insumo pedido: ${datosProductos[5].pructo} (Precio de lista: ${datosProductos[5].precioProd} USD)`);
        break;
        case '7':
            console.log(`Insumo pedido: ${datosProductos[6].pructo} (Precio de lista: ${datosProductos[6].precioProd} USD)`);
        break;
        case '8':
            console.log(`Insumo pedido: ${datosProductos[7].pructo} (Precio de lista: ${datosProductos[7].precioProd} USD)`);
        break;
        case '9':
            console.log("Salir");
        break;
        default:
            let menuUser = 9;
        break;
    }

        
    if(menuUser==1){       
        let pedidTecla = parseInt(prompt(`Pide la cantidad deseada de ${datosProductos[0].pructo}: `,0));
        const salida = mensHad(datosProductos[0].pructo, datosProductos[0].volEquiv, pedidTecla, datosProductos[0].precioProd);
            
    }else  if(menuUser==2){
        let pedidEsca = parseInt(prompt(`Pide la cantidad deseada de ${datosProductos[1].pructo}: `,0));
        const salida = mensHad(datosProductos[1].pructo, datosProductos[1].volEquiv, pedidEsca, datosProductos[1].precioProd)

    }else  if(menuUser==3){
        let pedidMon = parseInt(prompt(`Pide la cantidad deseada de ${datosProductos[2].pructo}: `,0));
        const salida = mensHad(datosProductos[2].pructo, datosProductos[2].volEquiv, pedidMon, datosProductos[2].precioProd)

    }else  if(menuUser==4){
        let pedidCpu = parseInt(prompt(`Pide la cantidad deseada de ${datosProductos[3].pructo}: `,0));
        const salida = mensHad(datosProductos[3].pructo, datosProductos[3].volEquiv, pedidCpu, datosProductos[3].precioProd)

    }else  if(menuUser==5){
        let pedidCpu = parseInt(prompt(`Pide la cantidad deseada de ${datosProductos[4].pructo}: `,0));
        const salida = mensHad(datosProductos[4].pructo, datosProductos[4].volEquiv, pedidCpu, datosProductos[4].precioProd)

    }else  if(menuUser==6){
        let pedidCpu = parseInt(prompt(`Pide la cantidad deseada de ${datosProductos[5].pructo}: `,0));
        const salida = mensHad(datosProductos[5].pructo, datosProductos[5].volEquiv, pedidCpu, datosProductos[5].precioProd)

    }else  if(menuUser==7){
        let pedidCpu = parseInt(prompt(`Pide la cantidad deseada de ${datosProductos[6].pructo}: `,0));
        const salida = mensHad(datosProductos[6].pructo, datosProductos[6].volEquiv, pedidCpu, datosProductos[6].precioProd)

    }else  if(menuUser==8){
        let pedidCpu = parseInt(prompt(`Pide la cantidad deseada de ${datosProductos[7].pructo}: `,0));
        const salida = mensHad(datosProductos[7].pructo, datosProductos[7].volEquiv, pedidCpu, datosProductos[7].precioProd)

    }else{       
        break;
    }

}while(menuUser<9){
    console.log("Capacidad máxima de stock: 180 volúmenes");
    document.write("<br>");
    document.write("<br>","Capacidad máxima de stock: 180 volúmenes");
}

//Testeos de las listas
console.log(sumatoriaVol);
console.log(sumatoriaPrecIva);
console.log(sumatoriaPrecCont);
console.log(sumatoriaPrecCuota);

//Calculo de sumatorias totales
for (let i = 0; i < sumatoriaVol.length; i++) {
    sumTotal += sumatoriaVol[i];     
}

for (let ii = 0; ii < sumatoriaPrecIva.length; ii++) {
    sumatoriaTotalPrecIva += sumatoriaPrecIva[ii];     
}

for (let ic = 0; ic < sumatoriaPrecCont.length; ic++) {
    sumatoriaTotalPrecCont += sumatoriaPrecCont[ic];     
}

for (let iu = 0; iu < sumatoriaPrecCuota.length; iu++) {
    sumatoriaTotalPrecCuota += sumatoriaPrecCuota[iu];     
}

//Metodo alternativo de calculo de sumatorias totales
/*
sumatoriaVol.forEach(function(a){sumTotal += a;});
sumatoriaPrecIva.forEach(function(a){sumatoriaTotalPrecIva += a;});
sumatoriaPrecCont.forEach(function(a){sumatoriaTotalPrecCont += a;});
sumatoriaPrecCuota.forEach(function(a){sumatoriaTotalPrecCuota += a;});
*/

//Control de limite de espacio de stock
if (sumTotal <= 180){


    //Reportes de estados globales
    console.log(sumTotal);
    let restVol= 180-sumTotal;

    console.log(sumatoriaTotalPrecIva);
    console.log(sumatoriaTotalPrecCont);
    console.log(sumatoriaTotalPrecCuota);

    let sumatoriaTotalPrecIvaDd=sumatoriaTotalPrecIva.toFixed(2);
    let sumatoriaTotalPrecContDd=sumatoriaTotalPrecCont.toFixed(2);
    let sumatoriaTotalPrecCuotaDd=sumatoriaTotalPrecCuota.toFixed(2);

    console.log("Espacio ocupado en stock: " + sumTotal + " volúmenes");
    console.log("Espacio restante en stock: " + restVol + " volúmenes");
    document.write("<br>","Espacio ocupado en stock: " + sumTotal + " volúmenes");
    document.write("<br>","Espacio restante en stock: " + restVol + " volúmenes "+ "<br>");
    document.write("<br>"+"Costo y formas de pagos");
    document.write("<br>"+"*********************");
    document.write("<br>","Costo total pagado con débito bancario: " + sumatoriaTotalPrecIvaDd + " USD");
    document.write("<br>","Costo total pagado al contado con descuento del 15%: " + sumatoriaTotalPrecContDd + " USD");
    document.write("<br>","Costo total pagado en más de 2 cuotas con un 13% de interés: " + sumatoriaTotalPrecCuotaDd + " USD");

}else{
    alert("Espacio total: "+ sumTotal + " volúmenes. "+"Se ha superado el límite máximo de volumen de stock. Reajustar valores de compra.")
}
