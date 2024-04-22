import logo from "./logo.svg"
import "./App.css"
import ButtonComponent from "./components/ButtonComponent"
import ImageComponent from "./components/ImageComponent"
import CardComponent from "./components/CardComponent"
import "./components/Flex.css"

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </a>
        <ButtonComponent buttonText='Nome' />
        <ButtonComponent buttonText='Cognome' />
        <ButtonComponent buttonText='Età' />

        <ImageComponent
          src='https://images.pexels.com/photos/15045040/pexels-photo-15045040/free-photo-of-mare-moda-uomo-abito.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='Man in the beach'
        />

        <h3>Cards:</h3>
        <div className='flex'>
          <CardComponent
            src='https://images.pexels.com/photos/20780434/pexels-photo-20780434/free-photo-of-legno-edificio-costruzione-casa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='House'
            title='House'
            description='House with a tree'
            link='https://www.pexels.com/it-it/foto/legno-edificio-costruzione-casa-20780434/'
          />

          <CardComponent
            src='https://images.pexels.com/photos/20762302/pexels-photo-20762302/free-photo-of-mare-donna-modello-bagnasciuga.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='Woman'
            title='Woman'
            description='Woman near boats'
            link='https://www.pexels.com/it-it/foto/mare-donna-modello-bagnasciuga-20762302/'
          />

          <CardComponent
            src='https://images.pexels.com/photos/21371175/pexels-photo-21371175/free-photo-of-donna-edificio-modello-in-piedi.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='Temple'
            title='Temple'
            description='Beautiful woman near a temple'
            link='https://www.pexels.com/it-it/foto/donna-edificio-modello-in-piedi-21371175/'
          />
        </div>
      </header>
    </div>
  )
}

export default App
