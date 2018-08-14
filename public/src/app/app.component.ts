import { HttpService } from './http.service';
import { Animal } from './animal';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Endangered Species';
  all: String = 'Show All';
  add: String = 'Add Animal';
  one: String = 'Show One';
  animal: Animal = new Animal();
  showAnimal: Animal;
  animals: Animal[];

  constructor(private _aService: HttpService) {
    this.getAnimal();
  }

  getAnimal() {
    this._aService.getAnimals().subscribe(animals => this.animals = animals as Animal[]);
  }

  showOne(id: number): void {
    console.log(id);
    this._aService.showAnimal(id).subscribe(animal => this.showAnimal = animal as Animal);
  }

  addAnimal(): void {
    const temp = this._aService.addAnimals(this.animal);
    temp.subscribe(data => {
      this.animals.push(data as Animal);
    });

    this.animal = new Animal();
  }
}
