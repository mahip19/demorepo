class person {
    constructor(gender, bornYear){
        this.gender = gender;
        this.bornYear = bornYear;
    }
    age(){
        return `Age is ${(new Date().getFullYear()) - this.bornYear}`
    }
}


class employee  extends person{
    constructor(gender, bornYear,name, position){
        super(gender, bornYear);
        this.name = name;
        this.position = position;
    }
    show(){
        return this.name+" "+this.gender+" "+this.position+" "+this.age();
    }
}

// let person1 = new person('male', 2000)
// document.getElementById("p1").innerHTML = person1.age();


let emp1 = new employee('male', 2000,"rajesh", "janitor");
document.getElementById("p1").innerHTML = emp1.show();