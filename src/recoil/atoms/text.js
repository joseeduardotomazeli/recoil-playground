import { atom } from 'recoil';

const text = atom({
  key: 'text',
  default: 'Recoil Playground',
});

export default text;
