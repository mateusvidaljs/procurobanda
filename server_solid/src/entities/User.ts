import { uuid } from "uuidv4";

export class User {
  public readonly id: string;
  public name: string;
  public mail: string;
  public password: string;
  public created_at: string;
  public modified_at: string;

  constructor(props: Omit<User, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}