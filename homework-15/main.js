'use strict';

function Human(name, gender) {
    this.name = name;
    this.gender = gender;
}

function Flat() {
    this.residents = [];
}

Flat.prototype.addResident = function(inhabitant) {
    if (inhabitant instanceof Human) {
        this.residents.push(inhabitant);
    } else {
        return 'Error';
    }
}

function Apartment(maxFlats) {
    this.flats = [];
    this.maxFlats = maxFlats;
}

Apartment.prototype.addFlat = function(flat) {
    if (flat instanceof Flat && this.flats.length < this.maxFlats) {
        this.flats.push(flat);
    } else {
        console.log('Cannot add more flats, maximum capacity reached or invalid flat');
    }
}

const inhabitants = [
    { name: 'Oleg', gender: 'male' },
    { name: 'Kate', gender: 'female' },
    { name: 'Ann', gender: 'female' },
    { name: 'Stas', gender: 'male' },
];

const humanInstances = inhabitants.map(resident => new Human(resident.name, resident.gender));
humanInstances.forEach(resident => console.log(resident));

const flatOne = new Flat();
const flatTwo = new Flat();

flatOne.addResident(humanInstances[0]);
flatOne.addResident(humanInstances[1]);

flatTwo.addResident(humanInstances[2]);
flatTwo.addResident(humanInstances[3]);

const apartmentOne = new Apartment(2);

apartmentOne.addFlat(flatOne);
apartmentOne.addFlat(flatTwo);

// Check error
apartmentOne.addFlat(new Flat());

console.log(apartmentOne);
