import {atom} from 'recoil';
import {RecoilKeys} from './Constants';

export const userDetails = atom({
  key: RecoilKeys.UserDetails,
  default: {},
});
