import React from 'react';

import FabricComponent from './component/fabric-component';
import MainMenuComponent from './component/main-menu-component';
import './App.scss';

class App extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    return (<div >
      <MainMenuComponent/>
      <FabricComponent/>
    </div>);
  }
}

export default App;
