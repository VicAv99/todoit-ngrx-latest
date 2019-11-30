/**
 * Interface for the 'Todos' data
 */
export interface Todo {
  id: string | number; // Primary ID
  description: string;
  finished: boolean;
  deleted: boolean;
}
