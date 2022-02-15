export class Researcher {
  public name: string;
  public title?: string;
  public description: string;
  public link: string;
  public contact: Contact[];
}
export class Contact {
  public address: string;
  public email: string;
  public department: string;
}
