import * as React from 'react';
import { ContextConsumer } from './provider';

const noop = () => ({});

/**
 * function in charge of combining the factories, props and context to a React.Component
 *
 * @param {factory} mapStateToProps
 * @param {factory} mapDispatchToProps
 * @return {function(React.Component): function(object): *}
 */
const connect = (mapStateToProps = noop, mapDispatchToProps = noop) => {
  /**
   * @param {React.node} Component
   */

  return (Component) => {
    /**
     * that returns a function, the 'props' parameter gives use
     * any props that this component may have. If console.log this
     * parameter and you'll see an empty object.
     *
     * We will place all combined props here
     */
    return (props) => {
      return (
        <ContextConsumer.Consumer>
          {(value) => {
            const stateToProps = mapStateToProps(value.state);

            const dispatchToProps = mapDispatchToProps(value.dispatch);

            const componentProps = {
              ...stateToProps,
              ...props,
              // not all components need to dispatch actions so its optional
              ...dispatchToProps,
            };

            return <Component {...componentProps} />;
          }}
        </ContextConsumer.Consumer>
      );
    };
  };
};

export default connect;
