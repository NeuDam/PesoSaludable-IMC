import './App.css'
import { useState } from 'react'

function App() {

  const [weight, setWeight] = useState(false)
  const [height, setHeight] = useState(false)
  const [score, setScore] = useState()

  const messagges = {
    bajoPeso: 'Usted se encuentra en bajo peso, por lo tanto le hace falta aumentar su masa corporal',
    pesoNormal: 'El indice de su masa corporal se encuentra en los rasgos normales. (Peso Saludable)',
    sobrePeso: 'Usted se encuentra en sobrepeso, no tan grave, pero deberìa reducir su IMC',
    obesidad: 'Usted se encuentra en OBESIDAD, recurra a un Medico para que l@ oriente para reducir su IMC'
  }


  const handlerSubmit = () => {
    const resultado = weight / height**2

    setHeight('')
    setWeight('')

    if (resultado < 18.5){
      setScore(messagges.bajoPeso)
    }
    else if (resultado >= 18.5 && resultado <= 24.9){
      setScore(messagges.pesoNormal)
    }
    else if (resultado >= 25 && resultado <= 29.9){
      setScore(messagges.sobrePeso)
    }
    else{
      setScore(messagges.obesidad)
    }

    const popup = document.querySelector('.result_popup')

    popup.classList.add('animation_pop')

  }

  return (

    <>
      <header className="header">
        <h1 className="title">Peso - IMC</h1>
      </header>

      <main>
        <div className="result_popup">
          <section>
            <i className='bx bxs-x-circle' onClick={() => {
              const popup = document.querySelector('.result_popup')

              popup.classList.remove('animation_pop')
            }}></i>
            <p className="text_result">{score}</p>
          </section>
        </div>
        <form className='form' onSubmit={(e) => {
          e.preventDefault()
          handlerSubmit()
        }}>
          <h2 className="sub_title">FORMULARIO</h2>
          <label className="label_form">SU PESO (KG)</label>
          <input type="number" step={'any'} className="input_form" placeholder='Ej: 56' onChange={(e) => {
            setWeight(e.target.value)
          }} required value={weight}/>
          <label className="label_form">SU ESTATURA (M)</label>
          <input type="number" step={'any'} className="input_form" placeholder='Ej: 1.70' onChange={(e) => {
            setHeight(e.target.value)
          }} min={1} required value={height}/>
          <button type='submit' className="submit_button">CONSULTAR</button>
        </form>
      </main>
    
      <footer className="footer">
        <p>Tomado de <a href="https://www.minsalud.gov.co/salud/Paginas/Evalue-su-peso.aspx" target='_blank' rel='noreferrer'>MinSalud Colombia</a></p>
      </footer>
    </>
  )
}

export default App
