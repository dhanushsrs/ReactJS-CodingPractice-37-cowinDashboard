// Write your code here
import {Bar, BarChart, Legend, XAxis, YAxis} from 'recharts'

import './index.css'

const VaccinationCoverage = props => {
  const {coverageList} = props

  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()} K`
    }
    return number.toString()
  }

  return (
    <div className="coverage-container">
      <h1 className="coverage-heading">Vaccination Coverage</h1>

      <BarChart
        data={coverageList}
        height={400}
        width={900}
        margin={{
          top: 5,
        }}
      >
        <XAxis
          dataKey="vaccineDate"
          tick={{
            stroke: '#94a3b8',
            strokeWidth: 0.5,
            fontSize: 15,
            fontFamily: 'Roboto',
          }}
        />
        <YAxis
          tickFormatter={DataFormatter}
          tick={{
            stroke: '#94a3b8',
            strokeWidth: 0.5,
            fontSize: 15,
            fontFamily: 'Roboto',
          }}
        />
        <Legend
          wrapperStyle={{
            padding: 30,
            textAlign: 'center',
            fontSize: 12,
            fontFamily: 'Roboto',
          }}
        />
        <Bar
          dataKey="doseOne"
          name="Dose 1"
          fill="#5a8dee"
          barSize="20%"
          radius={[10, 10, 0, 0]}
        />
        <Bar
          dataKey="doseTwo"
          name="Dose 2"
          fill="#f54394"
          barSize="20%"
          radius={[5, 5, 0, 0]}
        />
      </BarChart>
    </div>
  )
}

export default VaccinationCoverage
