import React from 'react';
import UserCreate from './UserCreate';
import { LanguageStore } from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';
import LanguageSelector from './LanguageSelector';

class App extends React.Component {

  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />
          <div>
            Select a language:
            <i className="flag us" onClick={()  => this.onLanguageChange('english')}></i>
            <i className="flag nl" onClick={()  => this.onLanguageChange('dutch')}></i>
          </div>
          <ColorContext.Provider value="red">
            <UserCreate />
          </ColorContext.Provider>

        </LanguageStore>
      </div>
    )
  }
}

export default App;