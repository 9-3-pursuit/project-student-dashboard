

const Comments = ({id,info,setInfo,student}) => {

   
    
    function handleSubmit(event) {
        event.preventDefault()
        
        const newInfo = info.map((stud)=> {
            if (stud.id === id) {
                stud.notes = [...stud.notes,{commenter: event.target.commenterName.value, comment:event.target.coment.value}]
                
            }
            return stud
        })

        setInfo(newInfo)
        event.target.commenterName.value = ""
        event.target.coment.value = ""
        
        
      }

    return (
        <div>
            <h2>1-on-1 Notes</h2>
            
            <form onSubmit={handleSubmit}>
                <label htmlFor="commenterName" className="dblock">Commenter Name</label>
                <input type="text" id="commenterName" name="commenterName" className="dblock" required></input>
                <label htmlFor="coment" className="dblock">Comment</label>
                <input type="text" id="coment" name="coment" className="dblock" required></input>
               <button type="submit" >Add Note</button>
               
            </form>
             <ul>
                { student.notes.map((x,i) => <li key={i}> {x.commenter} Says, {x.comment}</li>) }
               
             </ul>

        </div>
    )
}


export default Comments