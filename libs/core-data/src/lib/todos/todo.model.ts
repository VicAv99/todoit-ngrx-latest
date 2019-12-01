/**
 * Interface for the 'Todos' data
 */
export interface Todo {
  id: string; // Primary ID
  description: string;
  finished: boolean;
  deleted: boolean;
}
