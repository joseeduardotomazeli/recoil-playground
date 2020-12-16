import { selector } from 'recoil';
import textAtom from '../atoms/text';

const textValue = selector({
  key: 'textValue',
  get: ({ get }) => {
    const text = get(textAtom);
    return text;
  },
});

export default textValue;
