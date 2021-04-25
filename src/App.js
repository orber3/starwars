import {BrowserRouter as Router, Route} from 'react-router-dom'
import React from 'react'
import Header from './components/Header'
import Movies from './screens/movies'
import MovieInfo from './screens/MovieInfo'
import People from './screens/People'
import planets from './screens/planets'


function App() {
  return (
    
    <div className="App">
       <Router> 
      <header className="App-header">
      <Header /> 
      </header>
     <Route path= '/movies'  component = {Movies}  />
     <Route path= '/movie/:id'  component = {MovieInfo}  />
     <Route path= '/people/' exact component = {People}  />
     <Route path= '/planets/:id' exact component = {planets}  />


     </Router>
    </div>
  );
}

export default App;
