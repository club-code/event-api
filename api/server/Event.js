class Event{

    constructor(){
        this.date = "";
        this.dateSuppr = new Date(Date.now()+3600*2);
        this.description = "";
        this.group = new Group();
        this.tags = [];
        this.nom = "";
        this.lieu = "";
        this.options = [];
        this.id = "";
    }

    list(){}

    add(){}

    remove(){}

    display(){}

    search(){}

    date_set(date){
      this.date = date;
    }

    date_remove(){
      this.date = "";
    }

    description_set(description){
      this.description = description;
    }

    description_remove(){
      this.description = "";
    }

    tag_set(tag){
      this.tags.append(tag);
    }

    tag_remove(){
      this.tags.pop(tag);
    }

    lieu_set(lieu){
      this.lieu = lieu;
    }

    lieu_remove(){
      this.lieu = "";
    }

}
