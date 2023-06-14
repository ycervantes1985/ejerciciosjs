//* ====== EJERCICIO 1 ======

const personalEmpresa = [
  {
    nombre: "Juan Carlos",
    edad: 25,
    profesion: "Contador",
    laborales: {
      sector: "Contabilidad",
      piso: 3,
    },
  },
  {
    nombre: "Maria",
    edad: 35,
    profesion: "Secretaria",
    laborales: {
      sector: "Administración",
      piso: 1,
    },
  },
  {
    nombre: "Juana",
    edad: 45,
    profesion: "Contadora",
    laborales: {
      sector: "Contabilidad",
      piso: 3,
    },
  },
  {
    nombre: "Angel",
    edad: 31,
    profesion: "Abogado",
    laborales: {
      sector: "Legales",
      piso: 1,
    },
  },
  {
    nombre: "Carlos",
    edad: 38,
    profesion: "Contador",
    laborales: {
      sector: "Contabilidad",
      piso: 3,
    },
  },
  {
    nombre: "Francisco",
    edad: 23,
    profesion: "Abogado",
    laborales: {
      sector: "Legales",
      piso: 1,
    },
  },
  {
    nombre: "Angela",
    edad: 49,
    profesion: "Contadora",
    laborales: {
      sector: "Contabilidad",
      piso: 4,
    },
  },
  {
    nombre: "Maria Laura",
    edad: 52,
    profesion: "Secretaria",
    laborales: {
      sector: "Atención al público",
      piso: 2,
    },
  },
  {
    nombre: "Lionel",
    edad: 35,
    profesion: "Programador",
    laborales: {
      sector: "Informatica",
      piso: 3,
    },
  },
];

//* Contamos con un listado con los datos del personal de una empresa y se desea saber cuántas personas menores de 40 años
//* pertenecen al secto "Contabilidad".

//* CONSIGNA: Crear una función que reciba como parámetro el listado del personal y retorne la cantidad solicitada.

function cantidad(arr) {
  
  const personal = arr.filter(trabajador => trabajador.edad < 40 && trabajador.laborales.sector === "Contabilidad");
  return personal.length

}

console.log(cantidad(personalEmpresa))
