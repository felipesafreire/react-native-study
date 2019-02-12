import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'

class ValidarProps extends Component {

  state = {
    ano: this.props.ano
  }

  static defaultProps = {
    label: 'Ano: '
  }

  static PropTypes = {
    ano: PropTypes.number.isRequired
  }

  render() {
    return (
      <Text style={{ fontSize: 35 }}>
        {this.props.label || 'Teste Label'}
        {this.state.ano + 2000}
      </Text>
    )
  }

}

// const ValidarProps = props => {
//   return (
//     <Text style={{ fontSize: 35 }}>
//       {props.label || 'Opa'}
//       {props.ano + 2000}
//     </Text>
//   )
// }

// ValidarProps.defaultProps = {
//   label: 'Ano: '
// }

// ValidarProps.PropTypes = {
//   ano: PropTypes.number.isRequired
// }

export default ValidarProps