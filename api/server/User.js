class User{
  constructor(){
    this.idDiscord = "";
    this.idMessenger = "";
  }

  toString(){
    return `Discord: ${this.idDiscord}, Messenger: ${this.idMessenger}`;
  }
}
