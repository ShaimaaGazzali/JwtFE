export class Task{
    id?:number=undefined;
    name: string = "";
    description: string = "";
    submissionDate: string = "";
    employee?: number = undefined;

    constructor( name: string, description: string, submissionDate: string, employee?: number,id?: number){
        this.id =id
        this.name = name;
        this.description = description;
        this.submissionDate = submissionDate;
        this.employee = employee;
    }
}