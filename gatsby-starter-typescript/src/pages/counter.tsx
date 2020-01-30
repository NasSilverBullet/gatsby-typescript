import React from "react";


export interface State {
  count: number
}

class Counter extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props)
    this.state = { count: 0 }
  }
  render() {
    return (
      <div>
        <h1>Counter</h1>
        <p>current count: {this.state.count}</p>
        <button onClick={() => this.setState(prevState => ({ count: prevState.count + 1, }))}>plus</button>
        <button onClick={() => this.setState(prevState => ({ count: prevState.count - 1, }))}>minus</button>
      </div>
    )
  }
}

export default Counter
