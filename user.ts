import { namespaceHTML } from '@angular/core/src/render3';

export class User{
    id: number;
    name: string;
    age : number;
    constructor(id,name,age){
        this.id=id;
        this.name=name;
        this.age=age;
    }
}