import React from "react";


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(error, info) {
    this.setState({hasError: true})
  }

  render() {
    if (this.state.hasError) {
      return <h3>This is an error. FU knows</h3>
    }
    return this.props.children
  }
}

export default ErrorBoundary