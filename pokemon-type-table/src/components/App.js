import '../styles/App.css';

function App() {
  const welcome_card = (
    <div className='card'>
      <h2 className='card-item'>Bienvenue</h2>
      <p>Déso, site encore sous construction, mais promis ce sera super dès que tout sera fini. 
      En attendant, patientez sur cet écran de bienvenue (aussi dégue soit-il)</p>
    </div>
  )

  return (
    <div className="welcome">
      {welcome_card}
    </div>
  )
}

export default App
