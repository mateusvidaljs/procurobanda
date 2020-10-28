import { uuid } from "uuidv4";

export class MusicGenre {
  public readonly id: string;
  public description: string;
  public path: string;

  constructor(props: Omit<MusicGenre, 'id'>, id?: string) {
    
  }
}