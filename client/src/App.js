import { useState } from 'react'
import axios from 'axios'

function App() {
  const URL = 'http://localhost:5000/'
  const [file, setFile] = useState('')

  const handleOnchange = (e) => {
    setFile(e.target.files[0])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // axios.post(URL + 'create', { test: 'test' }).then((response) => {
    //   console.log(response.data)
    // })
    let formdata = new FormData()
    formdata.append('my_file', file)
    axios
      .post(URL + 'uploads', formdata, {
        'Content-Type': 'multipart/form-data',
      })
      .then((res) => console.log(res.data))
  }

  return (
    <div className="App">
      <input type="file" name="" id="" onChange={handleOnchange} />
      <button onClick={handleSubmit}>Upload</button>
    </div>
  )
}

export default App
