"use strict";
class Avenger {
    constructor(name, team, realName, poder, age) {
        this.name = name;
        this.team = team;
        this.realName = realName;
        this.poder = poder;
        this.age = age;
    }
}
let antman = new Avenger("antman", "avengers", "pedrito", "volverse pequeño", 35);
console.log(antman);
