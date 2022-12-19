const tiposDeSuscripcion = {
    free: "Solo puedes tomar los cursos gratis",
    basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    expertDuo: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
}

function suscription(suscription){
    if(tiposDeSuscripcion[suscription]){
        console.log(tiposDeSuscripcion[suscription]);
        return;
    }
    console.warn("No existe");
}

suscription("fdfdf");