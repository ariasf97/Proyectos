import './App.css'
import { HeaderCA } from './components/HeaderCA'
import { HeroCA } from './components/HeroCA'
import { FooterCA } from './components/FooterCA'
import { ConversionMessage } from './components/ConversionMessage'

function App() {
  return (
    <>
      <HeaderCA />
      <HeroCA />
      <ConversionMessage/>
      <FooterCA/>
    </>
  )
}

export default App
