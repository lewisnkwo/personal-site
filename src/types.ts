export interface SidebarItem {
  icon: string;
  title: string;
}

export type Size = "small" | "medium" | "large";

export interface RandomUserModel {
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  email: string;
  cell: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

export interface UserListItem {
  name: string;
  city: string;
  phone: string;
  email: string;
  picture: string;
}
