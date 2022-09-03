export interface ProtoUser {
  userName: string;
  password: string;
}

export interface UserToken {
  token: string;
}

export interface User {
  id: string;
  userName: string;
  token: string;
}
