import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/root-reducer';
import { Provider } from 'react-redux';
import { composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import ContactDetails from './ContactDetails';

const Home = (props) => (
    <div>
        <h3>Welcome to Addressbook Application</h3>
        <hr/>
        <p>Powered by React</p>
    </div>
)

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

class App extends Component {

    render() {
        return (
            <Provider store={store}>
            <Router>
                <div className="container">
                    <h1 className="alert alert-info">React-Redux Demo App</h1>
                    <div className="row">
                        <div className="col-md-4">
                           <ul className="list-group">
                               <li className="list-group-item">
                               <Link to="/">
                                   Home
                                </Link>
                               </li>
                               <li className="list-group-item">
                                   <Link to="/add-new-contact">Add a new contact
                                   </Link>
                                    
                               </li>
                               <li className="list-group-item">
                               <Link to="/view-all-contact"> View all contact
                               </Link>
                               </li>
                            </ul>     
                        </div>
                        <div className="col-md-8">
                            <Route path="/" exact={true} component={Home} />
                            <Route path="/add-new-contact" exact component={ContactForm} />
                            <Route path="/view-all-contact" exact component={ContactList} />
                            <Route path="/contact-details/:id" exact component={ContactDetails} />
                        </div>
                    </div>
                </div>
            </Router>
            </Provider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));