class myfirsttypescript{
  constructor(public message:string){


  }
sayit(){

  return "<h1>"+this.message+"<h1>";
}

};

var hw = new myfirsttypescript("I Love TypeScript!");
document.body.innerHTML=hw.sayit();
