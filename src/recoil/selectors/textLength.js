import { selector } from 'recoil';

import textAtom from '../atoms/text';

const textLength = selector({
  key: 'textLength',
  get: ({ get }) => {
    const text = get(textAtom);
    return text.length;
  },
});

export default textLength;
