import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
// import AllTheBooks from './components/AllTheBooks'
import SingleBook from './components/SingleBook'

function App() {
  return (
    <>
      <MyNav />
      <Welcome />
      <SingleBook />
      {/* <AllTheBooks /> */}
      <MyFooter />
    </>
  )
}

export default App
