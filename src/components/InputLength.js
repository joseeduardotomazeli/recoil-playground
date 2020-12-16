import React from 'react';
import { useRecoilValue } from 'recoil';

import textLengthSelector from '../recoil/selectors/textLength';

function InputLength() {
  const textLength = useRecoilValue(textLengthSelector);
  return <p>The input has {textLength} characters.</p>;
}

export default InputLength;
