import React from 'react';
import { useRecoilValue } from 'recoil';

import textValueSelector from '../recoil/selectors/textValue';

function Title() {
  const textValue = useRecoilValue(textValueSelector);
  return <h1>{textValue}</h1>;
}

export default Title;
