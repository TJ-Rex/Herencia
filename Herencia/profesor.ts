import { empleado } from "./empleado";

export class profesor extends empleado{

    private _departamento: string;

    public get departamento(): string {
        return this._departamento;
    }
    public set departamento(value: string) {
        this._departamento = value;
    }
     constructor(nombre: string , apellido: string, id: number, estado_civil: string, ano_incorporacion: string , numero_despacho : number ,departamento: string){

        super(nombre, apellido , id , estado_civil , ano_incorporacion , numero_despacho );

        this._departamento = departamento;
     }
     
     public cambio_departamento(new_departamento: string){

        this._departamento = new_departamento;
     }

     datos_profesor(){

      super.datos_persona()

      console.log(`Departamento en el estoy asignado: ${this.departamento}`);

     }
}