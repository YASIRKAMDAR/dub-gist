import React from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions';

class Loading extends React.Component {
    render() {
        return (
            <div className={this.props.app.loading ? "loadingBlock show" : "loadingBlock"}>
                <div className="message">Getting your gists
                </div>
            </div>
        );
    }
};

function mapStateToProps({app}) {
    return {app};
}

export default connect(mapStateToProps, actions) (Loading);