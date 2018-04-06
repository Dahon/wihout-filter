export class User {
  constructor(
    public email: string,
    public password: string,
    public name?: string,
    public secondpas?: string,
    public id?: number
  ) {}
}
