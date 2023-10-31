import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UtmSourceProvider } from './components/UtmSourceProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <UtmSourceProvider>
    <App />
    </UtmSourceProvider>
)
