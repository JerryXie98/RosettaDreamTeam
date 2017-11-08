export interface IRosettaFunctions {
  name: string;
  constructors: IConstructors[];
}

export interface IConstructors {
  parameters: IParameters[];
}

export interface IParameters {
  name: string;
  type: string;
}
