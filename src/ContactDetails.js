import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getContactById} from './actions/contacts-actions'


class ContactDetails extends Component {

    componentDidMount() {
        let { id } = this.props.match.params;
        this.props.getContactById(id);
    }

    render() {
        // let{id} = this.props.match.params;
        let {contact} = this.props;
        if(!contact) contact = {};
        return (
            <div>
                <h3>Details of the selected contact </h3>
                <div className="row">
                    <div className="col-md-4">
                        <img src={contact.picture} alt={contact.name} style={{height:'200px'}} className="img img-thumbnail"/>
                        
                    </div>
                    <div className="col-md-7">
                        <table className="table table-bordered">
                            <tr>
                                <td>Name</td>
                                <td>{contact.name}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{contact.email}</td>
                            </tr>
                            <tr>
                                <td>Phone</td>
                                <td>{contact.phone}</td>
                            </tr>
                        </table>
                    </div>
                </div> 
            </div>   
        );
    }
}

const stateAsProps = (reducers) => (
    {

        contact: reducers.contactsReducer.contact
    }
);

const actionsAsProps = {
    getContactById
}


export default connect(stateAsProps, actionsAsProps)(ContactDetails);
