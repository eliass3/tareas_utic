function create_person(name, last_name, document) {
    this.name = name
    this.last_name = last_name
    this.document = document
}

let Elias = new create_person('Elias', 'Moreno', '123')
Elias.document = '1515'
// console.log(Elias)

class People {
    constructor(name, last_name, document, heigth) {
        this.name = name
        this.last_name = last_name
        this.document = document
        this.gender = ''
        this.heigth = heigth
        this.friend = []
    }
    add_friend(friend) {
        if(friend) {
            this.friend.push(friend)
        }
    }
}

let Juan = new People('Juan', 'Perez', '838383', 1.70)
Juan.gender = 'Attack Helicopter K52 Aligator'
Juan.add_friend(Elias)
console.log(Juan)

class Animal {
    constructor(name, color, age) {
        this.name = name
        this.color = color
        this.age = age
        this.friends = [] 
    }
    add_friend(friends) {
        if(friends) {
            this.friends.push(friends)
        }
    }
}

let Attila = new Animal('Attila', 'White and Black', 0.5)
let Blue = new Animal('Blue', 'Orange', 0.3)
let Jorge = new Animal('Jorge','Orange', 3)
Attila.add_friend(Blue, Jorge)
Blue.add_friend(Attila, Jorge)
Jorge.add_friend(Attila, Blue)
console.log(Attila)