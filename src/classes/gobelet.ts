import { Dice } from "./de"

export class Gobelet{
    private _value :number = 0
    private _dices : Dice[] = []

    constructor(nbDices:number) {
        for (let index = 0; index < nbDices; index++) {
            this._dices.push(new Dice())
        }
    }

    get dices() {
        return this._dices
    }

    get value() {
        return this._value
    }

    set value(value) {
        this._value = value
    }

    lancer = () => {
        for (let index = 0; index < this.dices.length; index++) {
            this.dices[index].lancer()
            this.value += this.dices[index].value
        }
    }

    afficherScore = ():number => {
        let score = 0
        for (let index = 0; index < this.dices.length; index++) {
            score += this.dices[index].value
        }
        return score
    }
}