import { persona } from "./persona";

export class estudiante extends persona{

    private _curso: string;

    public get curso(): string {
        return this._curso;
    }
    public set curso(value: string) {
        this._curso = value;
    }

   
    constructor(nombre: string , apellido: string, id: number, estado_civil: string, curso: string){

        super(nombre, apellido , id , estado_civil);

        this._curso = curso;
    }

    public nuevo_curso(new_curso: string){

        this._curso = new_curso;
    }

    datos_estudiante(){
        
        super.datos_persona()
        
        console.log(`Curso: ${this.curso}`);

    }
    
}