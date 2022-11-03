//objestos
//es una entidad independiente que tien atributos
//esta compuesto por keys

//obketo carrio
const carro ={
    color: "azul",
    motor: 1.6,
    modelo: "mustang",
    marca: "toyota",
    nuevo: false
};

console.table(carro);

//object persona
const persona={
    edad: 23,
    nombre: "kevin",
    sexo: "Masculino",
    talla: "163",
    estadoCivil: "soltero",
    mayorEdad: true,
    donacionOrganos: true
};
//acceder a un atributo
console.log("Estado civil",persona.estadoCivil);
console.table(persona)

persona.nombre= "juan";
persona.talla = 2.00;


persona["profesion"]="ingeniero";
persona["bailarin"]= true;
persona.nacionalidad="ucrianiano"

const casa={
    Tamaño: "120m2",
    curtos: 6,
    pisos: 3,
    bañitos: "tres",
}

console.table(casa)

casa.pisos= 2;
casa.habitantes=6


const tecnologia={
    celular: "note10",
    pc: "core i7",
    monitor: "samSung",
    cantMonitores: 3,
    teclado: "hp gk520",
}

console.table(tecnologia)

tecnologia.cantMonitores= 2;
tecnologia.router= "De-link"
