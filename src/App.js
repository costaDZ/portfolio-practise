import React from 'react'

import styled from 'styled-components';
import { Sidebar } from './components';

function App() {
  return (
    <AppStyled className="App">
      <Sidebar />
    </AppStyled>

  );
}

export default App;


const AppStyled = styled.div`
  background-color: grey;
`