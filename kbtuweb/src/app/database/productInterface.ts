import {CategoryInterface} from '../database/categoryInterface';

export interface ProductInterface {
    id: number;
    category_id: number;
    name: string;
    time: string;
    description: string;
    image: string;
    rating: number;
    ingredients: string;
    methods:string;
  }
  