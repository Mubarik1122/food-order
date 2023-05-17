export class Foods{
  id!:number;
  price!:number;
  name!:string;
  fav:boolean=false;
  star:number=0;
  tags?:string[];
  imageUrl!:string;
  cooktime!:string;
  origins!:string[];
  // static id: number;
  // static price: number;
}
