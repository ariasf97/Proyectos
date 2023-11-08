import { RouterProvider } from 'react-router-dom'
import { RoutesPath } from './routes/AppRouter'


//aqui deberia estar el router
function App() {
  return (
    <RouterProvider router={RoutesPath} />
  )
}

export default App
