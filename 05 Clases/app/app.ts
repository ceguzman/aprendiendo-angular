class Avenger {
    name: string;
    team: string;
    realName: string;
    poder: string;
    age: number;

    constructor(name:string,team:string,realName:string,poder:string,age:number){
        this.name = name;
        this.team = team;
        this.realName = realName;
        this.poder = poder;
        this.age = age;
    }
}

let antman:Avenger = new Avenger("antman","avengers","pedrito","volverse pequeño",35);
console.log(antman);