import { Category } from './category.model';
export interface Products {
  id: string;
  name: string;
  price: string;
  image: string;
  quantity: string;
  description: string;
  categoryId: Category['id'];
}
