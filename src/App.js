import CreateQuote from './components/CreateQuote'
import {read} from  './services/read'
import QuoteItem from './components/QuoteItem'
import './App.css'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { create } from './services/create'
import { deleteQuote } from './services/delete'
import { getOptions } from './services/getOptions'
import {update} from './services/update'


function App () {
  const [quotes, setQuotes] = useState([])
  const [options, setOptions] = useState([])
  const [isEditing, setIsEditing] = useState(null)
  const {register, handleSubmit, reset, setValue} = useForm()
  
  const onSubmit = values =>{
    if (isEditing){
      const valueToUpdate = {
        ...values,
        id: isEditing
      }

      const miFuncToUpdate = async() =>{
        const res = await update(valueToUpdate)
        setQuotes(prevState => prevState.map((value) => {
          if (value._id === valueToUpdate.id){
            return res
          }

          return value
        }))
        reset()
        setIsEditing(null)
      }
      
      miFuncToUpdate()

      return
    }
    
    const miFunc = async ()=>{
      const res = await create(values)

      setQuotes((prevState)=>[res.data, ...prevState])
      reset()
    }

    miFunc()
  }

  const onDeleteQuote = id =>{
    console.log(id)

    const miFunc = async ()=>{
      const res = await deleteQuote(id)
      console.log(res)
      setQuotes(prevState => prevState.filter(value => value._id !== id))
    }
    miFunc()
  }

  const onEditQuote = quote =>{
    setIsEditing(quote.id)
    setValue('class', quote.class)
    setValue('quote', quote.quote)
    console.log(quote)
  }

  useEffect(()=>{
    const miFunc = async ( ) =>{
      const data = await read()
      setQuotes(data.quotes)
    }
    miFunc()
  },[])
  
  useEffect(()=>{
    const miFunc = async()=>{
      const data = await getOptions()
      setOptions(data.classOptions)
      
    }
    miFunc()
  },[])

  const list = quotes.map(value =>(
    <QuoteItem 
      key={value._id} 
      text={value.quote} 
      clase={value.class}
      id={value._id}
      handleDelete={onDeleteQuote}
      handleEdit={onEditQuote}
    />
  ))

  return (
    <div className='App'>
      <header className='App-header'>
        <h6>
          Citas en el servidor:
        </h6>
        <CreateQuote
         handleSubmit={handleSubmit} 
         register={register}
         handleCreateQuote={onSubmit}
         options={options}
         isEditing={isEditing}
         />
        {list}
      </header>
    </div>
  )
}

export default App