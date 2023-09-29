import { estudiante } from "./estudiante";

import { personservicio } from "./personservicio";

import { profesor } from "./profesor";

    const profesor1 = new profesor("Paquita", "la del barrio", 134976620, "viuda", "2019", 124, "Estrucutra de datos" );

        profesor1.cambio_departamento("Base de datos")

        profesor1.datos_profesor()

    const personservicio1 = new personservicio("Sergio" , "Lopéz" , 13488209 , "Casado" , "2012", 23 , "Laboratorio" );

        //personservicio1.traslado_seccion("Aulas del tercer piso")

        //personservicio1.datos_personservicio()

    const estudiante1 = new estudiante("Pablo" , "Escobar", 130099283 , "Soltero" , "Programación basica");

        //estudiante1.nuevo_curso("Sistemas digitales")

        //estudiante1.datos_estudiante()
