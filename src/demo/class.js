function PersonC(name, age, gender){
    this.name= name,
    this.age= age,
    this.gender= gender,

     this.info= function (){
     console.log(this.name, this.age, this.gender);
     
    }

}

PersonC.prototype.getName=function(){
console.log(this.name);

}


class Person {
    #key= 'hide me'
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    async info() {
        return Promise.resolve([this.name, this.age, this.gender]);
    }
}

Person.prototype.getName = async function() {
    return Promise.resolve([this.name]);
}


class Bangladeshi extends Person {
    constructor(name){
     super(name)
    }

    async getName(){
     return this.name
    }

}




async function classWorker(){
    const person1 = new Person('tanvir', 25, 'male');

    const info = await person1.info();
    const getName = await person1.getName();

    const p1= new Bangladeshi('tanvir', 25, 'male')
    const getNameB= await p1.getName()
    console.log(getNameB);
    console.log(Person);
    
    
}
classWorker()



class Parents {
    #password= '123'
    email= '123@mail.com';
    static x (){
        return "HI, What's up?"
    }
    getName(){
        return `your parent email is ${this.email} $ password is ${this.#password}`
    } 
}

class Childs extends Parents {
    constructor(name){
        super()
    this.pname= name;
    }

    getParent(){
        console.log(super.getName());
        

        return `your parent email is ${this.pname}`
    }

}

const child= new Childs('X')

console.log(child.getParent());
