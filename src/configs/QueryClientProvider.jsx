import React from 'react';
import { Provider } from 'urql';
import PropTypes from 'prop-types';

class QueryClientProvider extends React.Component {
  render() {
    const { value, children } = this.props;

    return <Provider value={value}>{children}</Provider>;
  }
}

QueryClientProvider.propTypes = {
  children: PropTypes.element,
  value: PropTypes.object.isRequired,
};

export default QueryClientProvider;
