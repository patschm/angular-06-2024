import { IIntroducable } from "./iintroducable";

export class Person implements IIntroducable
{
    name:string;
    age:number;

    constructor(name: string, age:number)
    {
        this.name = name;
        this.age = age;
    }

    public get Name()
    {
        return this.name;
    }
    public set Name(name:string)
    {
        this.name = name;
    }

    public introduce():void{
        console.log(`${this.name} (${this.age})`);
    }
}