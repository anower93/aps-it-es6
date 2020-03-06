class Father {
    constructor(){
        this.fatherName = "Anower Hossain Abid";
    }

}


class Child extends Father{
    constructor(name, mother){
        //JavaScript a Child class a 
        //super() method call korte hobe

        super();

        this.name = name;
        this.mother = mother;
    }


    getFunction(){
        //Ei method thiye Parant class Or Child class er 
        // jekono property access kora jabe.

        return this.fatherName + "\n" + this.mother;

    }

}


const putuputu = new Child("Tahmid", "Priyoti");
const akupaku = new Child("Tanshir", "Priyoti");

console.log(putuputu, akupaku);
console.log(putuputu.getFunction());
