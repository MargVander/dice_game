import { Joueur } from "./joueur";
import { Gobelet } from "./gobelet";

export class Party{
    private _joueurs :Joueur[] = []
    private _nbTours :number
    private _gobelet:Gobelet

    constructor(nb_tours:number, nb_dice:number) {
        this._nbTours = nb_tours
        this._gobelet = new Gobelet(nb_dice)
    }

    get joueurs():Joueur[] {
        return this._joueurs
    }

    get nbTours():number {
        return this._nbTours
    }

    get gobelet():Gobelet {
        return this._gobelet
    }
    
    initialiser = () => {
        this._joueurs.push(new Joueur("Paul"))
        this._joueurs.push(new Joueur("Claudine"))
        this._joueurs.push(new Joueur("Suzette"))
        this._joueurs.push(new Joueur("Maurice"))
    }

    lancer = () => {
        console.log(`La partie commence ! Celle-ci comprendra ${this.nbTours} tours`);
        console.log('Les joueurs présents sont :');
        for (let index = 0; index < this.joueurs.length; index++) {
            console.log(this.joueurs[index].name); 
        }
        for (let index = 0; index < this.nbTours; index++) {
            console.log('Tour ' + (index + 1));
            for (let index = 0; index < this.joueurs.length; index++) {
                console.log(this.joueurs[index].name + " lance le gobelet");
                this.joueurs[index].jouer(this.gobelet)
                console.log(this.joueurs[index].name + " fait " + this.gobelet.afficherScore());
                console.log(this.joueurs[index].name + " a un total de " + this.joueurs[index].score);
            }
            console.log('...');
        }
        console.log("Fin de la partie");
        this.afficherGagnant()
    }

    afficherGagnant = () => {
        let winner:Joueur = this.joueurs.sort((a,b)=>b.score - a.score)[0]
        console.log('Le gagnant est ' + winner.name);
        
    }


}