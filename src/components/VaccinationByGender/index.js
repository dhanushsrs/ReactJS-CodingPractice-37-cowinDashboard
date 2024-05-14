// Write your code here

import {Pie, PieChart, Cell, Legend, ResponsiveContainer} from 'recharts'
import './index.css'

const VaccinationByGender = props => {
  const {genderList} = props

  return (
    <div className="gender-container">
      <h1 className="gender-heading">Vaccination by gender</h1>
      <ResponsiveContainer height={300} width={1000}>
        <PieChart>
          <Pie
            cx="50%"
            cy="60%"
            startAngle={0}
            endAngle={180}
            innerRadius="30%"
            outerRadius="60%"
            data={genderList}
            dataKey="count"
          >
            <Cell name="Others" fill="#2cc6c6" />
            <Cell name="Female" fill="#5a8dee" />
            <Cell name="Male" fill="#f54394" />
          </Pie>
          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
            // className="margin"
            wrapperStyle={{fontSize: 12, fontFamily: 'Roboto'}}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByGender
