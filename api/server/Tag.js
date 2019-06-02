class Tag{
  constructor(event){
    this.idEvent = event.id;
    this.tag = "";
  }

  toString(){
    return `Tag: ${this.tag}`;
  }
}
