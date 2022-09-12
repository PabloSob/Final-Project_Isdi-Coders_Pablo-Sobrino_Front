export interface ICrypto {
  title: string;
  logo: string;
  description: string;
  team: number;
  value: number;
  ICO: Date;
  id: string;
  imageBackUp?: string;
}

export interface NewCrypto {
  title: string;
  logo: string;
  description: string;
  team: number;
  value: number;
  ICO: Date;
  imageBackUp?: string;
}

export type Crypto = ICrypto[];
