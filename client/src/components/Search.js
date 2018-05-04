import React from 'react';
import { Row, Col, Card, CardBody, Button, FormGroup, Form, Label, Input  } from 'reactstrap';

import logo from '../images/github-gist-logo.png' 
import loading from '../images/ajax-loader.gif' 

import { connect } from 'react-redux';
import * as actions from '../actions';

class Search extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            gistuser: '',
            formErrors: {gistsError: ''},
            gistsValid: false,
            formValid: false
        }
    }
    HandleInput (e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
      }
    getAllGists(e) {
        e.preventDefault();
        this.props.loading(true);
        this.props.getGists(this.state.gistuser);
    }
    render() {
        return (
            <Row className='search-block'>
                <Col md="10" lg="8" className="mr-auto mx-auto">
                    <Card className="text-center">
                        <CardBody>
                            <img src={logo} alt="logo" className="img-fluid search-logo"/>
                            <Form onSubmit={(event) => this.getAllGists(event)}>
                                <Row> 
                                    <Col md="10" lg="10" sm="10" className="mr-auto mx-auto">   
                                        <FormGroup className="label-animation ">
                                            <Input type="text" name="gistuser" id="Gistuser" 
                                            onChange={(event) => this.HandleInput(event)} className="form-control" placeholder="Search a username" value={this.state.gistuser}  />
                                            <Label for="Gistuser" className="font-italic helper-label">Search a username</Label>
                                        </FormGroup>
                                    </Col>
                                    <Col md="2" lg="2" sm="2" className="mr-auto mx-auto gist-button">
                                            <Button onClick={(event) => this.getAllGists(event)} disabled={!this.state.gistuser}>Get gists</Button>
                                            <img src={loading} className="mr-auto mx-auto" alt="loading"/>
                                    </Col>
                                </Row>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        );
    }
};


function mapStateToProps({gists, app}) {
    return {gists, app};
}

export default connect(mapStateToProps, actions) (Search);