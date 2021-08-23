const CreateQuote = ({
    handleSubmit, 
    register, 
    handleCreateQuote,
    options,
    isEditing
}) =>{
    const list = options.map(value=>(
        <option key={value} value={value}>
            {value}
        </option>
    ))
    

    return(
        <form onSubmit={handleSubmit(handleCreateQuote)}>
            <div>
                <label>
                    Cita
                    <input type='text'{...register('quote', {required: true})}/>
                </label>
            </div>

            <div>
                <label>
                    clase
                    <select {...register('class', {required: true})}>
                        <option>Selecciona una opcion</option>
                        {list}
                    </select>
                </label>
            </div>


            <button>{ isEditing ? 'Edit quote' : 'Create Quote' }</button>
        </form>
    )
}

export default CreateQuote