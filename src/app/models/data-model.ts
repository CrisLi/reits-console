// all data models

export class Address {
  street = '';
  city = '';
  state = '';
  zipCode = '';
  parcelNumber = '';
  zoning = '';
}

export class Project {
  _id: Object;
  name = '';
  address = new Address();
  type = '';
  status = '';
  comments = '';
}

export class Tenant {
  _id: Object;
  name = '';
  description = '';
}
