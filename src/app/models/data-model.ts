// all data models

export class Address {
  street: string = '';
  city: string = '';
  state: string = '';
  zipCode: string = '';
  parcelNumber: string = '';
  zoning: string = '';
}

export class Project {
  name: string = '';
  address: Address = new Address();
  type: string = '';
  comments: string = '';
}
