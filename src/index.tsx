import * as React from "react";
import { render } from "react-dom";
import { createStore, combineReducers, Action } from "redux";
import { Provider, connect } from "react-redux";
import { Typography, Statistic, Button } from "antd";

// ActionType Enum
enum CounterActionType {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT"
}

interface ICounterAction extends Action<CounterActionType> {}

// Reducer
function counter(state: number = 0, action: ICounterAction): number {
  switch (action.type) {
    case CounterActionType.INCREMENT:
      return state + 1;
    case CounterActionType.DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

let rootReducer = combineReducers({ counter });

// Create the store
let store = createStore(rootReducer);

// Action Creators
function increment(): ICounterAction {
  return { type: CounterActionType.INCREMENT };
}

function decrement(): ICounterAction {
  return { type: CounterActionType.DECREMENT };
}

type CounterState = number;

interface IState {
  counter: CounterState;
}

const mapDispatchToProps = { increment, decrement };

const mapStateToProps = (state: IState) => {
  return {
    counter: state.counter
  };
};

interface ICounterProps {
  counter: CounterState;
  increment: () => void;
  decrement: () => void;
}

// Presentational component
class CounterView extends React.Component<ICounterProps> {
  constructor(props: Readonly<ICounterProps>) {
    super(props);
  }

  render() {
    return (
      <Statistic
        value={this.props.counter}
        title="Counter"
        prefix={
          <Button
            type="primary"
            shape="circle"
            icon="up"
            onClick={() => this.props.increment()}
          />
        }
        suffix={
          <Button
            type="primary"
            shape="circle"
            icon="down"
            onClick={() => this.props.decrement()}
          />
        }
      />
    );
  }
}

// Container component
const Counter = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterView);

const App = () => (
  <div>
    <Typography.Title level={1}>Redux</Typography.Title>
    <Counter />
  </div>
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app-root")
);

store.subscribe(() => console.log(store.getState()));
