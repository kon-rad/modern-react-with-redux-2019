import React from 'react';
import { LanguageContext } from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';

class Button extends React.Component {
  render() {
    // when getting information from multiple different context objects you must use Consumer

    return (
      <ColorContext.Consumer>
        {(color) =>
            <button className={`ui button ${color}`}>
                {(value) => value === 'english' ? 'Submit' : 'Voorleggen'}
            </button>
        }
      </ColorContext.Consumer>
    )
  }
}

export default Button;