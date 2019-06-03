class User{
  constructor(){
    this.idDiscord = "";
    this.idMessenger = "";
  }

  toString(){
    return `Discord: ${this.idDiscord}, Messenger: ${this.idMessenger}`;
  }

  save(){
    // Check if there are arguments passed
    if (Object.keys(arguments).length > 0){
      // Check if some arguments aren't parameters of class User
      good = [];
      for (i in arguments){
        if (Object.keys(this).indexOf(arguments[i]) < 0)
          console.error(arguments[i].toString() + " is not a parameter of User");
        else good.push(arguments[i]);
      }
      // TODO: Faire la requête SQL
    } else {
      // TODO: Faire la requête qui update tous les paramètres
    }
  }
}
