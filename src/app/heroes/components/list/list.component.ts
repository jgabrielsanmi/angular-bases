import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames:string[] = ['Spiderman', 'Thor', 'Ironman', 'Hulk', 'She Hulk', 'Doctor Strange']

  public deletedHero?:string;

  removeLastHero():void{

    this.deletedHero = this.heroNames.pop()
  }

  resetList():void{
    this.heroNames = ['Spiderman', 'Thor', 'Ironman', 'Hulk', 'She Hulk', 'Doctor Strange']
    this.deletedHero = "";
  }
}
