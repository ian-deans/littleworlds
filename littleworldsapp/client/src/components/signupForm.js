import React from 'react'
import {Row, Input} from 'react-materialize'

export default class SignupForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      retypePassword: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    console.log('Submitting')
    event.preventDefault() // Prevents the form
                            // from redirecting the user

    // The target url for our route.
    const url = 'http://localhost:3001/user/createuser'

    // The options for the request we will make
    const options = {

      // Allow the sending of data.
      method: 'POST',

      // Tell our server there be JSON in here
      headers: new Headers({
        'Content-Type': 'application/json'
      }),

      // Turn our data held in state into a string
      body: JSON.stringify(this.state)
    }

    // Create a request object using our variables
    const request = new Request(url, options)

    fetch(request)
      // console log returned data if call succeeds
      .then(result => console.log)

      // console log our error if call failed
      .catch(error => console.log)
  }

  // Function for changing the values in state when a user
  // types.
  handleOnChange(event, fieldName) {
    // It is good practice to never mutate state, so we
    // make a copy of our state object using Object.assign()
    let newState = Object.assign({}, this.state)

    /*  Using the fieldName argument we can access the
        respective piece of data and update it.
    */
    newState[fieldName] = event.target.value

    // Replace the old state with the new, modified version
    this.setState(newState)
  }

  render() {

    return (
      <form>
        <Row>
          <Input
            s={6}
            label="First Name"
            onChange={event => this.handleOnChange(event, "firstName")}
            value={this.state['firstName']}
          />
          <Input
            s={6}
            label="First Name"
            onChange={event => this.handleOnChange(event, "lastName")}
            value={this.state['lastName']}
          />
          <Input
            s={12}
            label="Email"
            onChange={event => this.handleOnChange(event, "email")}
            value={this.state['email']}
          />
          <Input
            s={12}
            label="Password"
            onChange={event => this.handleOnChange(event, "password")}
            value={this.state['password']}
          />
          <Input
            s={12}
            label="Retype Password "
            onChange={event => this.handleOnChange(event, "retypePassword")}
            value={this.state['retypePassword']}
          />

          <button onClick={this.handleSubmit}>Start Exploring!</button>
        </Row>

      </form>
    )
  }


}