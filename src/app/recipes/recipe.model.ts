export class Recipe {
    public name:string;
    public descripcion: string;
    public imagePath: string;
    
    constructor(name:string,descripcion:string,imagePath:string){
    this.name=name;
    this.descripcion=descripcion;
    this.imagePath=imagePath;
    }
}