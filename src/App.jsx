import { Provider } from "react-redux"
import Card from "./comoponant/Card.jsx"
import store from "./redux/store.js"
function App() {

  return (
    <>
    <Provider store={store}>
    <Card/>
    </Provider>
    </>
  )
}

export default App
