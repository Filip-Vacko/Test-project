class helloClass {
    constructor(name) {
        this.name = name;
    }

    greet(adjective) {
        console.log("Hello " + adjective + " world from " + this.name );
    }

    farewell(adjective) {
        console.log("Goodbye " + adjective + "world from " + this.name );
    }
}

class anotherClass extends helloClass {

    greet(adjective) {
        console.log("Hi there " + adjective + " world from " + this.name );
    }
    supergreet (adjective) {
        this.greet(adjective); //refers to the greet() function in this class (anotherClass)
        super.greet(adjective); //refers to the greet() function in parent's class (helloClass)
    }
}

class setterAndPrivatePropertyClass {
    constructor(surname) {
        this._surname = surname;
    }

    set surname(value) {
        if (value.length > 3) {   //this means the the value from the parameter is passed to ._surname (= surname) only if it is longer than 3 charecters.
            this._surname = value;
        } else {
            console.log("Too short!")
        }
    }
}

let test = new helloClass("John");
test.greet("pretty");

let anotherTest = new anotherClass("Joseph");
anotherTest.greet("cruel");
anotherTest.supergreet("beautiful");

let lastClass = new setterAndPrivatePropertyClass("Smith");
console.log(lastClass._surname);
lastClass.surname = "Wo"; //since "wo" is too short, it does not override the default surname and so instead of setting anything, it only writes to the console "Too short!"
console.log(lastClass._surname); //since the value of surname has not changed since the last console.log, it will again print "Smith"
lastClass.surname = "Wong";
console.log(lastClass._surname); //prints out "Wong"