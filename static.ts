class Employe{
    static _employeeName:string;
    protected _age:number;

    constructor(name:string,age:number){
        Employe._employeeName=name;
        this._age=age;
    }

    static get employeeName(){
        return Employe._employeeName;
    }

    static set employeeName(value:string){
       Employe._employeeName=value;
    }

    get age(){
        return this._age;
    }

    set age(value:number){
        this._age=value;
    }

    static printName(){
        console.log(Employe.employeeName); 
    }
}

const employee1:Employe=new Employe('Arul',21);
const employee2:Employe=new Employe('Kumaran',21);
console.log(Employe.employeeName);
Employe.employeeName='Test';
console.log(Employe.employeeName);
Employe.printName()

