class Course{
    constructor(title, length, price){
    this.title = title;
    this.length = length;
    this.price = price;
    }

    calculates(){
        return this.price / this.length.length
    }

    summary(){
        return this.title, this.length, this.price
    }
}

const class1 = new Course("class A", 5, 20);
const class2 = new Course("class B", 6, 25);

console.log(class1.calculates());
console.log(class1.summary());
console.log(class2.calculates());
console.log(class2.summary());


class PracticalCourse extends Course{
    super(title, length, price);
    constructor(numOFExercises)
}
class TheoreticalCourse extends Course{
    super(title, length, price);
    publish(){
        console.log("something")
    }
}
