import Spinner from "react-spinner-material"
import React, { Component } from "react"

export default class SuccessLoading extends Component {
  render() {
    return (
      <div>
        <Spinner radius={30} color={"#fff"} stroke={4} visible={true} />
      </div>
    )
  }
}
