import React from 'react';
import logo from './logo.svg';
import Main from './views/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';
import ThemeHandler from './views/ThemeHandler';


// Application component, renders application
// returns ThemeHandler to the view
function App() {
  return (
    <div className="App">
     <ThemeHandler />
     </div>
  );
}

export default App;
