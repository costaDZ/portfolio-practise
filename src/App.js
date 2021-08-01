import React from 'react'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { Sidebar } from './components';
import { HomePage, About, Resumer, Portfolios, BlogsPage, Contact } from './pages';

import { Route, Switch as Switching } from "react-router";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <MainContentStyled>
        <div className="lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div>

        <Switching>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/resumer" exact>
            <Resumer />
          </Route>
          <Route path="/portfolios" exact>
            <Portfolios />
          </Route>
          <Route path="/blogs" exact>
            <BlogsPage />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
        </Switching>
      </MainContentStyled>

      {/* 
      <Router>
        <Switch>
          <Route exact path="/" >
            <HomePage />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/resumer">
            <Resumer />
          </Route>
          <Route path="/portfolios">
            <Portfolios />
          </Route>
          <Route path="/blogs">
            <Blog />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router> */}


    </div>

  );
}

export default App;


const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  /* @media screen and (max-width:1200px){
    margin-left: 0;
  } */
  .lines{
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    opacity: .4;
    z-index: -1;
    .line-1, .line-2, .line-3, .line-4{
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }
`