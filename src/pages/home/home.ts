import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  old_id:any;
  list = [{id:1,title:"COFFEE",
  types: [{name:"EXPRESSO",cost:"3$"},{name:"CAPPUCCINO",cost:"4$"},{name:"LATO",cost:"5$"}],color:"#51add2",font:"sb-bistro-coffee",description:"Coffee is a brewed drink prepared from roasted coffee beans."},
{id:2,title:"FOOD",
types: [{name:"American fried rice",cost:"3$"},{name:"Aloo chaat",cost:"2$"},{name:"Aloo tikki",cost:"2$"},{name:"Chinese bhel",cost:"2$"},{name:"Yakisoba",cost:"2.5$"}],color:"#3dc3c1",font:"sb-bistro-hotdog",description:"any nutritious substance that people or animals eat or drink or that plants absorb in order to maintain life and growth"},
{id:3,title:"SWEET",
types: [{name:"Gajar ka halwa",cost:"1$"},{name:"Gulab jamun",cost:"2$"},{name:"Jalebi",cost:"2.5$"},{name:"Kaheer",cost:"3$"},{name:"Kalakand",cost:"4$"},{name:"Malai laddu",cost:"5$"}],color:"#4d81bd",font:"sb-bistro-icecream-2",description:"a sweet dish forming a course of a meal; a pudding or dessert."},
{id:4,title:"DESSERT",
types: [{name:"Cheesecake",cost:"3$"},{name:"Apple Pie",cost:"4$"},{name:"Chocolate Brownie",cost:"4$"},{name:"Rice Pudding",cost:"3$"},{name:"Custard",cost:"2$"},{name:"Bread Pudding",cost:"3$"}],color:"#605398",font:"sb-bistro-dessert",description:"the sweet course eaten at the end of a meal."},
{id:5,title:"DRINK",
types: [{name:"Coca Cola",cost:"1$"},{name:"Mountain Dew",cost:"0.50$"},{name:"Diet Pepsi",cost:"0.50$"},{name:"Sprite",cost:"0.75$"},{name:"Fanta",cost:"0.75$"}],color:"#5e416f",font:"sb-bistro-drinks",description:"A soft drink (see terminology for other names) is a drink that typically contains carbonated water, a sweetener, and a natural or artificial flavoring"}
]
shownGroup = null;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
     console.log('ionViewDidLoad HomePage');
  }

  toggleGroup(group,title) {
    if(this.old_id && (this.old_id.id == title.id)){
      console.log("already active")
    }else{
        document.getElementById(title.font).classList.add("animateEffect")
        if(this.old_id == undefined){
          console.log("skipping removing style")
		  
        }
        if(this.old_id != undefined){
          document.getElementById(this.old_id.id).style.borderLeft = "none";
          document.getElementById(this.old_id.id).style.borderRight = "none"
          document.getElementById(this.old_id.font).classList.remove("animateEffect")
          document.getElementById(this.old_id.title).classList.remove("animatetitleEffect")
          document.getElementById("recipelist").classList.remove("animateroweffect") 
        }
          document.getElementById(title.title).classList.add("animatetitleEffect")
          var myid = title.id;
          document.getElementById(myid).style.borderLeft = "2px solid #ffffff";
          document.getElementById(myid).style.borderRight = "2px solid #ffffff"
        if (this.isGroupShown(group)) {
          this.shownGroup = null;
        } else {
          this.shownGroup = group;
          setTimeout(function(){
          document.getElementById("recipelist").classList.add("animateroweffect")         
          },100)
        }
        

        this.old_id = title;
			}

		};
		
		isGroupShown(group) {
			return this.shownGroup === group;
		};

}
