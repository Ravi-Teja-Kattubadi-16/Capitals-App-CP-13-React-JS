import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {
    countryName: countryAndCapitalsList[0].country,
  }

  OnChangeCapital = event => {
    const countryDetails = countryAndCapitalsList.filter(
      eachCountryDetails =>
        eachCountryDetails.capitalDisplayText === event.target.value,
    )
    // console.log(countryDetails[0].country)
    this.setState({
      countryName: countryDetails[0].country,
    })
  }

  render() {
    const {countryName} = this.state

    // const lengthOfCountryDetails = countryAndCapitalsList.length

    return (
      <div className="app-container">
        <div className="capitals-container">
          <h1 className="heading"> Countries And Capitals </h1>
          <div className="inner-container">
            <select
              className="select-container"
              onChange={this.OnChangeCapital}
            >
              {countryAndCapitalsList.map(each => (
                <option key={each.id} value={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>

            <p className="description"> is capital of which country? </p>
          </div>
          <p className="country-name"> {countryName} </p>
        </div>
      </div>
    )
  }
}

export default Capitals
