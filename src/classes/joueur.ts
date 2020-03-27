import { Gobelet } from "./gobelet"

export class Joueur{
    private _name:string
    private _score:number = 0

    constructor(name:string) {
        this._name = name
    }
     
    get name() {
        return this._name
    }

    get score() {
        return this._score
    }

    set score(score:number) {
        this._score = score
    }

    jouer = (gobelet:Gobelet) => {
        gobelet.lancer()
        this.score += gobelet.afficherScore()
    }
}