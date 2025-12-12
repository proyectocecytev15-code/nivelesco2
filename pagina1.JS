function obtenerElemento() {
    const array=["a", "b","c"];
    const aleatorio=Math.floor(Math.random()*array.lenght);
    const elemento=array.splice(aleatorio,1)[0];
    return elemento;
}
alert(obtenerElemento());




function obtenerElemento() {
    const array=["a", "b","c"];
    const aleatorio=Math.floor(Math.random()* 3);
    const elemento=array.splice(aleatorio,1)[0];
    return elemento;
}
alert(obtenerElemento());
