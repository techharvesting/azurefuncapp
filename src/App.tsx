import { useState } from 'react'
import axios from 'axios'


function App() {
  const [value, setValue] = useState("")

  async function onSubmit(e: any) {
    e.preventDefault()
    const {data} = await axios.get(
      'https://techharvestingfunctionapp.azurewebsites.net/api/mynamefunction?code=Ar0JEgKh0CPj_msRFISL-YqfUpMKwpexLnMkdz8Qn0pqAzFu1JWR-w==', {
        params: {
          name: value
        }
      }
    );
    console.log(data)
    alert(data)
  }
  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text"  value={value} onChange={(e) => setValue(e.target.value)} placeholder='Name'/>
        <button>Submit</button>


      </form>
    </>
  )
}

export default App
