import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NewBrand from './components/brand/NewBrand';
import NewCar from './components/car/NewCar';
import Demo from './components/Demo';
import Header from './components/Header';
import NewOwner from './components/owner/NewOwner';
import TableData from './components/tabledata/TableData';

function App() {
    return (
        <Router>

            <Header />
            <div className="container mt-5">
                <Switch>
                    <Route exact path="/" component={TableData} />
                    <Route exact path="/car/create" component={NewCar} />
                    <Route exact path="/owner/create" component={NewOwner} />
                    <Route exact path="/brand/create" component={NewBrand} />
                    <Route exact path="/demo" component={Demo} />
                </Switch>
            </div>
            
        </Router>
    );
}

export default App;
