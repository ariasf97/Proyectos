import { useEffect, useState } from 'react'


function App() {
  const [enabled, setEnable] = useState(false)

  useEffect(() => {
    console.log('Efecto', { enabled })
  }, [enabled])
  return (
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 20
      }} />
      <h3>Mouse</h3>
      <button onClick={() => setEnable(!enabled)}>{enabled ? 'Desactivar' : 'Activar'} seguir puntero</button>
    </main>
  )
}

export default App
