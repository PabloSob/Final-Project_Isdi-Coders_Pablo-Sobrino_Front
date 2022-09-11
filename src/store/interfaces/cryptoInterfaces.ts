export interface ICrypto {
  title: string;
  logo: string;
  description: string;
  team: number;
  value: number;
  ICO: Date;
  id: string;
}

export interface NewCrypto {
  title: string;
  logo: string;
  description: string;
  team: number;
  value: number;
  ICO: Date;
}

export type Crypto = ICrypto[];
