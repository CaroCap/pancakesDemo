import { Injectable } from '@angular/core';
import { listeCrepes, Pancake, PancakeAddOptions } from '../pancake';

@Injectable({
  providedIn: 'root'
})
export class PancakeService {

  public newListeCrepes: Pancake[] = listeCrepes.slice();

  constructor() { }

  // Méthode 
  public addPancake(newPancake: PancakeAddOptions){
    // Créer un nouvel Id pour le pancake
    // Check la longueur du tableau ListeCrepes +1
    const newId = this.newListeCrepes.length + 1;

    // Création de l'objet newCrèpe
    const newCrepe = {
      id: newId,
      name:newPancake.name,
      description: newPancake.descr,
      photo:newPancake.photo
    }
    // Ajouter le pancake dans le tableau ListeCrepes
    this.newListeCrepes.push(newCrepe);

  }
}
