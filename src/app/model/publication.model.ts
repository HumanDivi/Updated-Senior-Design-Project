// export class Researcher {
//   public name: string;
//   public description: string;
//   public link: string;
//   public contact: Contact[];
//   public articles: Publication[];
// }
// export class Contact {
//   public address: string;
//   public email: string;
//   public department: string;
// }

/*Should we improve this model to have a researcher name which can be checked to the researcher model to see which publication belongs where or*/
/*Have the researcher class here and then pass publications in it ?*/
export class Publication {
  public name: string;
  public description: string;
  public researcherName: string; // needs some discussion
  public resPath: string;

  constructor(name: string, desc: string, resPath: string) {
    this.name = name;
    this.description = desc;
    this.resPath = resPath;
  }
}
export class Articles {
  name: string;
}
