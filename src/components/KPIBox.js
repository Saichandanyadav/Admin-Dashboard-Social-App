import './KPIBox.css'

const KPIBox = ({title, value}) => (
  <div className="kpi-box">
    <h3>{title}</h3>
    <p>{value}</p>
  </div>
)

export default KPIBox
