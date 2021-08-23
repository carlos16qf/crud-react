const QuoteItem = ({text, clase, id, handleDelete, handleEdit}) =>{
    return(
        <div>
            {text} - {clase} - {' '}
            <button
            onClick={() =>{
                handleDelete(id)
            }}
            >
                X
            </button>

            <button
            onClick={() =>{
                handleEdit({
                    id,
                    quote: text,
                    class: clase
                })
            }}
            >
                EDIT
            </button>
        </div>
    )
}

export default QuoteItem