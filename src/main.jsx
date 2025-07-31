import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ContextProvider } from './Context.jsx'
import SearchBar from './SearchBar.jsx'
import Card from './Card.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <div className="flex flex-row p-8">
        <div className="w-full max-w-md p-4">
          <SearchBar />
        </div>
        <div className="w-full max-w-md p-4">
          <Card />
        </div>
      </div>

    </ContextProvider>
  </StrictMode>,
)
