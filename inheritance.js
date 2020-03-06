class Father {
    constructor(){
        this.fatherName = "Anower Hossain Abid";
    }

}


class Child extends Father{
    constructor(name, mother){
        super();
        this.name = name;
        this.mother = mother;
    }

}


const putuputu = new Child("Tahmid", "Priyoti");
const akupaku = new Child("Tanshir", "Priyoti");

console.log(putuputu, akupaku);