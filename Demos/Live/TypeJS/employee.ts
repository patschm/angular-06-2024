import { Person } from "./person";

class Employee extends Person
{
    jobTitle:string;

    constructor(name:string, age:number, job:string)
    {
        super(name, age)
        this.jobTitle = job;
    }
}