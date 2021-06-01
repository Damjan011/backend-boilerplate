export interface BaseUser {
  firstName: string;
  lastName: number;
  birth: string;
  profileImage: string;
}

export interface User extends BaseUser {
  id: number
}
