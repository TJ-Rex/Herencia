import { persona } from "./persona";

export class empleado extends persona{

    private _ano_incorporacion: string; 

    public get ano_incorporacion(): string {
        return this._ano_incorporacion;
    }
    public set ano_incorporacion(value: string) {
        this._ano_incorporacion = value;
    }
    private _numero_despacho: number;

    public get numero_despacho(): number {
        return this._numero_despacho;
    }
    public set numero_despacho(value: number) {
        this._numero_despacho = value;
    }
    constructor(nombre:string, apellido: string, id: number, estado_civil: string, ano_incorporacion: string , numero_despacho : number){

        super(nombre, apellido , id , estado_civil);

        this._ano_incorporacion = ano_incorporacion;

        this._numero_despacho = numero_despacho;

    }

    public reasignar_despacho(new_despacho: number){

        this.numero_despacho = new_despacho;

    }

}