import React from 'react';
import { Row, Col, Card, CardBody, Button, Collapse } from 'reactstrap';

import { connect } from 'react-redux';
import * as actions from '../actions';

class Forks extends React.Component {
  constructor(props) {
    super(props);
    this.onEntering = this.onEntering.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false, status: 'Closed', loaded: false };
  }

  onEntering() {
    if(!this.state.loaded) {
      this.props.getForks(this.props.cat.split("/")[4]);
      this.setState({ loaded: true });
    }
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
  
  render() {
    var option = -1;
    if(this.props.data) {
      option = this.props.data.length;
    }
      return (
        <div className="text-right">
          <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>get forks</Button>
          <Collapse
            isOpen={this.state.collapse}
            onEntering={this.onEntering}
          >
            {(() => {
                switch (option)
                {
                    case 0:
                      return(
                        <div className="text-left">
                          <p> No Forks to display </p>
                        </div>
                      )
                    case -1:
                    return(
                      <div className="text-left">
                          <p> Loading!!! </p>
                      </div>
                    )
                    default:
                    return(
                    <Row>
                        {this.props.data.map((result, index) => (
                            <Col md="4" lg="4" sm="6" xs="12" key={result.id}>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col>
                                                <img src={result.owner.avatar_url} className="img-thumbnail" alt={result.owner.login} />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="fork-details text-left">
                                                <p className="price text-left text-truncate">
                                                    login Id: 
                                                </p>
                                                {result.owner.login}
                                                <p className="price text-left text-truncate">
                                                    last Updated: 
                                                </p>
                                                {result.updated_at}
                                           </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                          ))}
                    </Row>)
                }
            })()}
          </Collapse>
        </div>
      );
  }
}
function mapStateToProps({gists,forks, app}) {
  return {gists,forks, app};
}

export default connect(mapStateToProps, actions) (Forks);