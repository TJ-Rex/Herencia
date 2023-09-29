import { empleado } from "./empleado";

export class personservicio extends empleado{

    private _seccion_asignado: string;

    public get seccion_asignado(): string {
        return this._seccion_asignado;
    }
    public set seccion_asignado(value: string) {
        this._seccion_asignado = value;
    }
    constructor(nombre: string , apellido: string, id: number, estado_civil: string, ano_incorporacion: string , numero_despacho : number, seccion_asignado: string){

        super(nombre, apellido , id , estado_civil , ano_incorporacion , numero_despacho);
        
        this._seccion_asignado = seccion_asignado;
    }

    public traslado_seccion(new_seccion: string){

        this._seccion_asignado = new_seccion;
    }

    datos_personservicio(){

        super.datos_persona()

        console.log(`Mi año de incorporación: ${this.ano_incorporacion}`);

        console.log(`Número de despacho: ${this.numero_despacho}`);

        console.log(`Seccion asignada: ${this.seccion_asignado}`);

    }
    
}