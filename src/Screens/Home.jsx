import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  return (
    <div className="dashboard">
      <div className="dashboard-box">
        <h1 className="title">Home Dashboard</h1>
        <p className="subtitle">Select an option to continue</p>

        <div className="card-container">
          <div className="card" onClick={() => navigate('/kitchen')}>
            <div className="icon">🍳</div>
            <h2>Kitchen</h2>
            <p>View kitchen details and options</p>
          </div>

          <div className="card" onClick={() => navigate('/bathroom')}>
            <div className="icon">🛁</div>
            <h2>Bathroom</h2>
            <p>View bathroom details and options</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home