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
    }

}
