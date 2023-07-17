import FirstButton from '../components/FirstButton'
import SecondButton from '../components/SecondButton'

const MainPage = () => {
  return (
    <div>
        <div style={{
            fontWeight: '600',
            fontSize: '2rem',
            textAlign:'center',
            color: '#8EB1C7'
        }}>
            Sample Project For Testing Sentry 
        </div>
        <div style={{
        display: 'flex',
        padding: '1rem',
        gap:'1.5rem',
        justifyContent:'center'
    }}>
        <FirstButton />
        <SecondButton />
        </div>
    </div>
  )
}

export default MainPage