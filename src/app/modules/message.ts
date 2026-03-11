export interface Message {
  id?: number; // El id es opcional al crear porque lo asigna el backend
  name: string;
  content: string;
  imageUrl: string;
}