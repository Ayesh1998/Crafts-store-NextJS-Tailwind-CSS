//all the reusable types

interface Craft {
  name: string;
  material: string;
  price: string;
  description: string;
  photo?: string;
  _id?: string;
  __v?:number
}

interface CommonInputs {
  email: string;
  password: string;
  name: string;
  material: string;
  price: string;
  description: string;
  photo?: string;
  _id: string;
}

interface AuthCredentials {
  email: string;
  password: string;
}

export interface User {
  email: string;
  password: string;
  role: number;
  first_name: string;
  last_name: string;
  _id?: string;
}

interface SalesCrafts {
  userId:string;
  crafts: Craft[];
}

interface Transactions {
  _id:string;
  prodID: Craft;
  month: string;
  date: string;
  year: string;
  userId?:User
}

