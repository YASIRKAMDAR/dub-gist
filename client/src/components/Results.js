import React from 'react';
import { Row, Col, Card,  CardBody  } from 'reactstrap';
import Forks from './Forks';

import { connect } from 'react-redux';
import * as actions from '../actions';

class Results extends React.Component {
    componentWillMount() {
        this.props.loading(false);
    }
    render() {
        var list = null;
        if(this.props.gists !== null && this.props.gists.status === "success") {
            list = JSON.parse(this.props.gists.resp);
        }
        else {
            list = null;
        }
        var option = -1;
        if(list) {
            option = list.length;
        }
        switch (option)
        {
            case -1:
                if(this.props.gists !== null) {
                    return (
                        <Row id="resultsBlock">
                            <Col md="10" lg="8" className="mr-auto mx-auto" sm="12" xs="12">
                            <div className="alert alert-danger">
                                {this.props.gists.resp}.
                            </div>
                            </Col>
                        </Row>
                    )
                }
                else {
                    return (<p></p>);
                }
            case 0:
                return (
                    <Row id="resultsBlock">
                        <Col md="10" lg="8" className="mr-auto mx-auto" sm="12" xs="12">
                            <div className="alert alert-info">No results to display</div>
                        </Col>
                    </Row>)
            default:
                return (
                    <Row id="resultsBlock">
                        {list.map((result, index) => (
                            <Col md="10" lg="8" className="mr-auto mx-auto" sm="12" xs="12" key={result.id}>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col sm="2">
                                                <img src={result.owner.avatar_url} className="img-thumbnail" alt={result.owner.login} />
                                            </Col>
                                            <Col sm="10">
                                                {Object.keys(result.files).map((filekey, index) => (
                                                    <div key={filekey}>
                                                        <p className="price text-left text-truncate">
                                                            Filename: {result.files[filekey].filename}
                                                        </p>
                                                        <p className="price text-left">
                                                            Size: {result.files[filekey].size}
                                                        </p>
                                                        <p className="price text-left">
                                                            Language: {result.files[filekey].language}
                                                        </p>
                                                        <span className="badge badge-pill badge-primary">{result.files[filekey].type}</span>
                                                    </div>
                                                    
                                                ))}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Forks key={result.id} cat={result.forks_url} data={this.props.forks[result.forks_url.split("/")[4]]} />
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                         ))}
                    </Row>
                );
        }
    }
};


function mapStateToProps({gists,forks, app}) {
    return {gists,forks, app};
}

export default connect(mapStateToProps, actions) (Results);
