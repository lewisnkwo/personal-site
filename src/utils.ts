import { RandomUserModel, UserListItem } from "./types";

export const userListTabIndex = 8;

export const toUserList = (users: RandomUserModel[]): UserListItem[] =>
  users.map((user) => ({
    name: `${user.name.first} ${user.name.last}`,
    city: user.location.city,
    phone: user.cell,
    email: user.email,
    picture: user.picture.large,
  }));
