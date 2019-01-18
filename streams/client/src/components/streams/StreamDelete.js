import React from 'react';
import { connect } from 'react-redux';
import Modal from './../Modal';
import history from './../../history';

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStreams(this.props.match.params.id);
  }
  renderActions = () => {
    return (
      <React.Fragment>
        <button className="ui negative button">Delete</button>
        <button className="ui button">Cancel</button>
      </React.Fragment>
    );
  };

  render() {
    return (
      <div>
        StreamDelete
        <Modal
          title="Delete Stream"
          content="Are you sure you want to delete this stream?"
          actions={this.renderActions()}
          onDismiss={() => history.push('/')}
        />
      </div>
    )
  }
};

export default connect(null, { fetchStream })(StreamDelete);