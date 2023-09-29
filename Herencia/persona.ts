export class persona{

    private _nombre: string;

    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }

    private _apellido: string;

    public get apellido(): string {
        return this._apellido;
    }
    public set apellido(value: string) {
        this._apellido = value;
    }

    private _id: number;

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    private _estado_civil: string;

    public get estado_civil(): string {
        return this._estado_civil;
    }
    public set estado_civil(value: string) {
        this._estado_civil = value;
    }

    constructor(nombre:string , apellido: string, id: number , estado_civil: string ){

        this._nombre = nombre;

        this._apellido = apellido;

        this._id = id;

        this._estado_civil = estado_civil;
    }

    public cambio_estado_civil(new_estado_civil: string){

        this._estado_civil = new_estado_civil; 
    }
    
    datos_persona(){

        console.log(`Mi nombre es: ${this.nombre}`);

        console.log(`Con apellido: ${this.apellido}`);

        console.log(`Id: ${this.id}`);

        console.log(`Estado civil: ${this.estado_civil}`)
    }
    
}