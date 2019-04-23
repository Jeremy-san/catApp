import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MakeCatService {
  userCats = [];
  nameCat: string;
  raceCat: string;
  bdCat: any;
  urlCat: string;

  adoptedCats = [];

  constructor() { }

  addToMarket($event) {
    $event.preventDefault();

    if (this.nameCat == undefined) {
      return alert("Name is required !")
    }
    else if (this.raceCat  == undefined) {
      return alert("Race is required !")
    }
    else if (this.bdCat == undefined) {
      return alert("Birthday is required !")
    }
    else if (this.urlCat == undefined) {
      return alert("A picture is required !")
    }
    else {
    
    }

    const userCat = {
      name: this.nameCat,
      race: this.raceCat,
      bd: this.bdCat,
      url: this.urlCat,
    };

    this.userCats.push(userCat);
    this.nameCat = '';
    this.raceCat = '';
    this.bdCat = '';
    this.urlCat = '';
  }

  addToAdopted($event, i) {
    $event.preventDefault();

    this.adoptedCats.push(this.userCats[i])

  
    //const deletedElement = this.userCats.filter(newUserCats => newUserCats !== this.userCats[i])
    this.userCats.splice(i, 1)
    


  }

}

