import react from 'react'

function List({contacts}) {

    return (
        <div>
            <ul>
           {
               contacts.map((contact,i)=>(
                   <li key={contact}>{contact.fullname}</li>
               ))
           }
            </ul>
           
        </div>
    )
}

export default List
