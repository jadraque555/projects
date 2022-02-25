import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            parentName: "Melissa"
        }

        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName) {
      console.log(childName)
        alert("Hello " + this.state.parentName + "from " + childName)
    }

  render() {
    return (
      <div>
          <ChildComponent greetHandler={this.greetParent} />
      </div>
    )
  }
}

export default ParentComponent