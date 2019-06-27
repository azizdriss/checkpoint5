import React, { Component } from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Button from './button';
import Photo from './photo';
import Logo from './logo.png';
import Title from './title';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div className="App">
            <Photo src={Logo}/><br></br>
            <Title label="Aziz Driss"style={{color:'red'}}/>
            <Title label=" GMCinstructor "style={{color:'black'}}/>
              <Button onSimpleClick={()=>{
                window.location ='https://www.facebook.com/'
              }} >Facebook</Button>
              <Button onSimpleClick={()=>{
                window.location ='https://www.linkedin.com/'
              }}>linkedIn</Button>

              <Switch>
              </Switch>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
