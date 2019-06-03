class Event{

    constructor(){
        this.date = "";
        this.dateSuppr = new Date(Date.now()+3600*2);
        this.description = "";
        this.group = new Group();
        this.tags = [];
        this.name = "";
        this.location = "";
        this.options = [];
        //this.id = "";
    }

    //list(){}

    //add(){}

    //remove(){}

    //display(){}

    toString(){
        return `${this.name} | ${this.date} | ${this.location}
            ${this.tags.toString()}
            ${this.options}`;
    }

    //search(){}

    setDate(date){
      this.date = date;
    }

    getDate(){
        return this.date;
    }

    removeDate(){
      this.date = "";
    }

    setDescription(description){
      this.description = description;
    }

    getDescription(){
        return this.description;
    }

    removeDescription(){
      this.description = "";
    }

    addTag(tag){
      this.tags.append(tag);
    }

    getTags(){
        return this.tags;
    }

    removeTag(tag){
      this.tags.splice(this.tags.indexOf(tag),1);
    }

    setLocation(location){
      this.location = location;
    }

    removeLocation(){
      this.location = "";
    }

    addOption(option){
        this.options.append(option);
    }

    getOptions(){
        return this.options;
    }

    removeOption(option){
        this.options.splice(this.options.indexOf(option));
    }

    save(){
      // Check if there are arguments passed
      if (Object.keys(arguments).length > 0){
        // Check if some arguments aren't parameters of class Event
        good = [];
        for (i in arguments){
          if (Object.keys(this).indexOf(arguments[i]) < 0)
            console.error(arguments[i].toString() + " is not a parameter of Event");
          else good.push(arguments[i]);
        }
        // TODO: Faire la requête SQL
      } else {
        // TODO: Faire la requête qui update tous les paramètres
      }
    }
}
