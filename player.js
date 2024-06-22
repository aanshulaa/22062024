class Player {
    constructor(health, strength, attack) {
        this.health = health;
        this.strength = strength;
        this.attack = attack;
    }

    isAlive() {
        return this.health > 0;
    }

    attack() {
        return this.attack * this.rollDie();
    }

    defend() {
        return this.strength * this.rollDie();
    }

    takeDamage(damage) {
        this.health = Math.max(0, this.health - damage);
    }

    rollDie() {
        return Math.floor(Math.random() * 6) + 1;
    }
}

module.exports = Player;



