import { useState } from 'react'
import MyButton from './components/myButton/MyButton'
import MyInput from './components/myInput/MyInput'
import './App.css'

function App() {
  const [name,  setName] = useState('')
  const [desc , setDesc] = useState('')
  const [checked, setChecked] = useState(true)


  const addNewPost=(e)=>{
    e.preventDefault(e)
    console.log(name)
  }
  const handleOnChange = () => {
    setChecked(!checked);
  };

  // const disabled = ()=>{
  //   if(setChecked = checked){
  //     {MyInput}
  //   }
  // }

  return (
    <div className="App">

      <form action="">
        <h2>New product</h2>
        <MyInput 
        disabled = {!checked}
        value={name}
        onChange={e => setName(e.target.value)} 
        type = "text"
        placeholder='Название продукта' />
        <MyInput 
        disabled = {!checked}
        value={desc}
        onChange={e => setDesc(e.target.value)} 
        type = "text"
        placeholder='Описание продукта'/>

<div className="checkboxes">
          Вы уверены что вы уверены?:
          <input
            type="checkbox"
            checked={!checked}
            onChange = {handleOnChange}
            />
            Да
            </div>

        <MyButton 
          onClick ={addNewPost}
          disabled = {checked}
          >
          Send Form
        </MyButton>
      </form>
    </div>
  )
}

export default App
