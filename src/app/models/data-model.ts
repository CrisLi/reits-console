// all data models

export class Address {
  street: '';
  city: '';
  state: '';
  zipCode: '';
  parcelNumber: '';
  zoning: '';
}

export class Project {
  name: '';
  address: Address = new Address();
  type: '';
  comments: '';
}

export class Tenant {
  name: string;
  description: string;
}
