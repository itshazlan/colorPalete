import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ColorListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-color-list',
  templateUrl: 'color-list.html',
})
export class ColorListPage {

  food:Array<{Name: string, color: string, font: string}>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.food = 
    [{Name:"COFFEE",color:"#f3bd75",font:"sb-bistro-coffee"},
     {Name:"CAKES",color:"#f17fa0",font:"sb-bistro-cake"},
     {Name:"BURGERS",color:"#6de4e5",font:"sb-bistro-burger"},
     {Name:"CHICKEN",color:"#b3e071",font:"sb-bistro-chicken"},
     {Name:"DESERT",color:"#9E9E9E",font:"sb-bistro-dessert"},
     {Name:"DRINKS",color:"rgba(255, 87, 34, 0.89)",font:"sb-bistro-drinks"},
     {Name:"ICE CREAMS",color:"rgba(255, 193, 7, 0.7)",font:"sb-bistro-icecream"}]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ColorListPage');
  }

}
