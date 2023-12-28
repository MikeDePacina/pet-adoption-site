import SearchParams from './components/SearchParams.jsx'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Details from './Details.jsx'
import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css'

//for caching which stores in memory
const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime: Infinity,
      cacheTime: Infinity
    }
  }
})
function App() {
 

  return (
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
    <header>
    <Link to="/">Adopt me</Link>
    </header>
    <Routes>
      <Route path="/details/:id" element={<Details/>}></Route>
      <Route path="/" element={<SearchParams/>}></Route>
    </Routes>
    </QueryClientProvider>
   
     </BrowserRouter>
  )
}

export default App
