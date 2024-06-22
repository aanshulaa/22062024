const Player = require('./player');

class Game {
    constructor(playerA, playerB) {
        this.playerA = playerA;
        this.playerB = playerB;
    }

    startBattle() {
        console.log("Battle Start!");
        while (this.playerA.isAlive() && this.playerB.isAlive()) {
            this.playTurn();
        }

        if (this.playerA.isAlive()) {
            console.log("Player A wins!");
        } else {
            console.log("Player B wins!");
        }
    }

    playTurn() {
        let attacker, defender;

        if (this.playerA.health < this.playerB.health) {
            attacker = this.playerA;
            defender = this.playerB;
        } else {
            attacker = this.playerB;
            defender = this.playerA;
        }

        console.log(`Attacker: ${attacker === this.playerA ? 'A' : 'B'}`);
        const attackDamage = attacker.attack();
        const defenseValue = defender.defend();

        console.log(`Attack Damage: ${attackDamage}, Defense Value: ${defenseValue}`);

        if (attackDamage > defenseValue) {
            const damageDealt = attackDamage - defenseValue;
            defender.takeDamage(damageDealt);
            console.log(`Damage Dealt: ${damageDealt}`);
            console.log(`Defender's Health: ${defender.health}`);
        } else {
            console.log("No Damage Dealt");
        }

        console.log();
    }
}

module.exports = Game;
