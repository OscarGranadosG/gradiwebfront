import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NewBrand from './components/brand/NewBrand';
import NewCar from './components/car/NewCar';
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
                </Switch>
            </div>
            
        </Router>
    );
}

export default App;
