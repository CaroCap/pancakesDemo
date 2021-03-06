import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { listeCrepes, Pancake } from '../pancake';

@Component({
  selector: 'app-pancake-fiche',
  templateUrl: './pancake-fiche.page.html',
  styleUrls: ['./pancake-fiche.page.scss'],
})
export class PancakeFichePage implements OnInit {

  maCrepe: Pancake;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const paramMap = this.activatedRoute.snapshot.paramMap;
    const idPancake = Number(paramMap.get("id"));

    this.maCrepe = listeCrepes.find(crepe => crepe.id == idPancake); 
  }

  retourHome(){
    this.router.navigateByUrl("/home")
  }

}
