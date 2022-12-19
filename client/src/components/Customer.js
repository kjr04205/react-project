import React from 'react';
import { TableRow, TableCell } from '@material-ui/core';

class Customer extends React.Component {
    render() {
        return (
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell><img src={this.props.image} alt="profile"/></TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.birthday}</TableCell>
                <TableCell>{this.props.job}</TableCell>
                <TableCell>{this.props.gender}</TableCell>
            </TableRow>
            // <div>
            //     <CustomerProfile id={this.props.id} image={this.props.image} name={this.props.name}/>
            //     <CustomerInfo birthday={this.props.birthday} job={this.props.job} gender={this.props.gender}/>
            // </div>
        )
    }
}

class CustomerProfile extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.image} alt="profile" />
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }
}

class CustomerInfo extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>
        )
    }
}

export default Customer;