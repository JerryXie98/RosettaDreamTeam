import { IRosettaConfig } from '../Models/irosetta-config';
import { ICustomConfig } from '../Models/custom-config';

export interface AppState {
  customConfig: ICustomConfig;
  config: IRosettaConfig;
}
