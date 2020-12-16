import React from 'react';
import { RecoilRoot } from 'recoil';

import Title from './components/Title';
import Input from './components/Input';
import InputLength from './components/InputLength';

import './styles.css';

function App() {
  return (
    <RecoilRoot>
      <div className="container">
        <Title />
        <Input />
        <InputLength />
      </div>
    </RecoilRoot>
  );
}

export default App;
