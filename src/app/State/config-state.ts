import { IPeople } from '../Models/ipeople';
import { IRosettaConfig } from '../Models/irosetta-config';

export interface AppState {
  people: IPeople;
  config: IRosettaConfig;
}
