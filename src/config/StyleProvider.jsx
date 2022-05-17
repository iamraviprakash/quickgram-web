import React from 'react';
import PropTypes from 'prop-types';
import { Provider as StyletronProvider } from 'styletron-react';
import { Client as Styletron } from 'styletron-engine-atomic';
import { LightTheme, BaseProvider } from 'baseui';

class StyleProvider extends React.Component {
  constructor(props) {
    super(props);
    this.engine = new Styletron();
  }
  render() {
    const { children } = this.props;

    return (
      <StyletronProvider value={this.engine}>
        <BaseProvider theme={LightTheme}>{children}</BaseProvider>
      </StyletronProvider>
    );
  }
}

StyleProvider.propTypes = {
  children: PropTypes.element,
  value: PropTypes.object.isRequired,
};

export default StyleProvider;
