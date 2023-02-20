import { User } from './user.model';

export interface Book {
  id: string;
  name: string;
  creator: User;
}
