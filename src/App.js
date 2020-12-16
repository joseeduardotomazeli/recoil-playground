import React from 'react';
import { RecoilRoot } from 'recoil';

import Title from './components/Title';
import Input from './components/Input';
import InputLength from './components/InputLength';

function App() {
  return (
    <RecoilRoot>
      <Title />
      <Input />
      <InputLength />
    </RecoilRoot>
  );
}

export default App;
