import { RandomUserModel, UserListItem } from "./types";
import { toUserList } from "./utils";

describe("toUserList", () => {
  const users: RandomUserModel[] = [
    {
      name: {
        title: "Mrs",
        first: "Brandy",
        last: "Diaz",
      },
      location: {
        street: {
          number: 5724,
          name: "Nowlin Rd",
        },
        city: "Maitland",
        state: "Tasmania",
        country: "Australia",
        postcode: 8045,
        coordinates: {
          latitude: "-87.9765",
          longitude: "141.2248",
        },
        timezone: {
          offset: "+11:00",
          description: "Magadan, Solomon Islands, New Caledonia",
        },
      },
      email: "brandy.diaz@example.com",
      cell: "0443-466-871",
      picture: {
        large: "https://randomuser.me/api/portraits/women/1.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/1.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/1.jpg",
      },
    },
    {
      name: {
        title: "Mr",
        first: "Mathias",
        last: "Johansen",
      },
      location: {
        street: {
          number: 6038,
          name: "Skelagervej",
        },
        city: "Stoevring",
        state: "Danmark",
        country: "Denmark",
        postcode: 43646,
        coordinates: {
          latitude: "14.8078",
          longitude: "108.8698",
        },
        timezone: {
          offset: "+11:00",
          description: "Magadan, Solomon Islands, New Caledonia",
        },
      },
      email: "mathias.johansen@example.com",
      cell: "95899754",
      picture: {
        large: "https://randomuser.me/api/portraits/women/82.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/82.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/82.jpg",
      },
    },
  ];

  it("should transform the model data into props for UserItem", () => {
    const expected: UserListItem[] = [
      {
        name: "Brandy Diaz",
        city: "Maitland",
        phone: "0443-466-871",
        email: "brandy.diaz@example.com",
        picture: "https://randomuser.me/api/portraits/women/1.jpg",
      },
      {
        name: "Mathias Johansen",
        city: "Stoevring",
        phone: "95899754",
        email: "mathias.johansen@example.com",
        picture: "https://randomuser.me/api/portraits/women/82.jpg",
      },
    ];

    const result = toUserList(users);

    expect(result).toEqual(expected);
  });
});
