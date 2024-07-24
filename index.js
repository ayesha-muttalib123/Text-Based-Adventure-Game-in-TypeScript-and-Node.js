#! /usr/bin/env node
import inquirer from "inquirer";
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt([
    {
        name: "name",
        message: "Please enter your name",
        type: "input",
    },
]);
let opponent = await inquirer.prompt([
    {
        name: "select",
        message: "Select your opponent",
        type: "list",
        choices: ["Skeleton", "Zombie", "Alien"],
    },
]);
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
do {
    let ask = await inquirer.prompt([
        {
            name: "select",
            message: "Select your weapon",
            type: "list",
            choices: ["Sword", "Bow", "Gun"],
        },
    ]);
    // Simulate player attack
    let playerHit = Math.floor(Math.random() * 2);
    if (playerHit > 0) {
        o1.fuelDecrease();
        console.log("You hit the opponent!");
    }
    else {
        console.log("You missed!");
    }
    console.log(`You have ${p1.fuel} fuel left`);
    console.log(`Opponent has ${o1.fuel} fuel left`);
    // Simulate opponent attack
    let opponentHit = Math.floor(Math.random() * 2);
    if (opponentHit > 0) {
        p1.fuelDecrease();
        console.log("Opponent hit you!");
    }
    else {
        console.log("Opponent missed!");
    }
    console.log(`You have ${p1.fuel} fuel left`);
    console.log(`Opponent has ${o1.fuel} fuel left`);
    // Check for game end conditions
    if (p1.fuel <= 0 || o1.fuel <= 0) {
        break;
    }
} while (true);
if (p1.fuel <= 0) {
    console.log("Game Over! You ran out of fuel.");
}
else if (o1.fuel <= 0) {
    console.log("Congratulations! You defeated the opponent.");
}
