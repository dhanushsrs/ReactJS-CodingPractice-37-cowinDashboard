// Write your code here

import {Pie, PieChart, Cell, Legend, ResponsiveContainer} from 'recharts'
import './index.css'

const VaccinationByAge = props => {
  const {ageList} = props

  return (
    <div className="age-container">
      <h1 className="age-heading">Vaccination by age</h1>
      <ResponsiveContainer height={300} width={1000}>
        <PieChart>
          <Pie
            cx="50%"
            cy="30%"
            startAngle={0}
            endAngle={360}
            innerRadius="0%"
            outerRadius="60%"
            data={ageList}
            dataKey="count"
          >
            <Cell name="18-44" fill="#2d87bb" />
            <Cell name="44-60" fill="#a3df9f" />
            <Cell name="Above 60" fill="#64c2a6" />
          </Pie>
          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
            wrapperStyle={{fontSize: 12, fontFamily: 'Roboto'}}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByAge
