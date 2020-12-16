import React from 'react';
import { useRecoilState } from 'recoil';

import textAtom from '../recoil/atoms/text';

function Input() {
  const [text, setText] = useRecoilState(textAtom);

  function onChange(event) {
    setText(event.target.value);
  }

  return <input id="input" type="text" value={text} onChange={onChange} />;
}

export default Input;
