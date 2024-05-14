// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import VaccinationByAge from '../VaccinationByAge'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationCoverage from '../VaccinationCoverage'

import './index.css'

const vaccinationConstants = {
  initial: 'INTIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class CowinDashboard extends Component {
  state = {
    ageList: [],
    coverageList: [],
    genderList: [],
    apiStatus: vaccinationConstants.initial,
  }

  componentDidMount() {
    this.getCovidData()
  }

  getCovidData = async () => {
    this.setState({apiStatus: vaccinationConstants.inProgress})
    const vaccinationDataApiUrl = 'https://apis.ccbp.in/covid-vaccination-data'

    const response = await fetch(vaccinationDataApiUrl)
    const data = await response.json()

    if (response.ok === true) {
      const sevenDaysData = data.last_7_days_vaccination.map(eachDay => ({
        vaccineDate: eachDay.vaccine_date,
        doseOne: eachDay.dose_1,
        doseTwo: eachDay.dose_2,
      }))

      const ageDetails = data.vaccination_by_age.map(eachAge => ({
        age: eachAge.age,
        count: eachAge.count,
      }))

      const genderDetails = data.vaccination_by_gender.map(eachGender => ({
        count: eachGender.count,
        gender: eachGender.gender,
      }))

      this.setState({
        ageList: ageDetails,
        genderList: genderDetails,
        coverageList: sevenDaysData,
        apiStatus: vaccinationConstants.success,
      })
    } else {
      this.setState({apiStatus: vaccinationConstants.failure})
    }
  }

  renderLoading = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderFailure = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
      />
      <h1>Something went wrong</h1>
    </div>
  )

  renderSuccess = () => {
    const {ageList, genderList, coverageList} = this.state
    return (
      <div className="main-container">
        <div>
          <VaccinationCoverage coverageList={coverageList} />
          <VaccinationByGender genderList={genderList} />
          <VaccinationByAge ageList={ageList} />
        </div>
      </div>
    )
  }

  renderStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case vaccinationConstants.failure:
        return this.renderFailure()
      case vaccinationConstants.success:
        return this.renderSuccess()
      case vaccinationConstants.inProgress:
        return this.renderLoading()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="app-container">
        <div className="cowin-dashboard-container">
          <div className="logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
              alt="website logo"
              className="website-image"
            />
            <h1 className="logo-heading">Co-WIN</h1>
          </div>
          <h1 className="main-heading">CoWIN Vaccination in India</h1>
          {this.renderStatus()}
        </div>
      </div>
    )
  }
}

export default CowinDashboard
