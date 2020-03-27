export class Dice{
    private _value: number
    
    constructor() {
        this._value = 0
    }

    get value() {
        return this._value
    }

    lancer = () => {
        this._value = Math.floor(Math.random() * 6 + 1)
    }

}