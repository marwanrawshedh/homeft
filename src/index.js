import React from 'react';
import ReactDOM from 'react-dom';
import Auth from './components/signUp/Auth'

import App from './app.js';

class Main extends React.Component {
  render() {
    return (
      <Auth>
        <App />;
      </Auth>
    )
  }
}
const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
