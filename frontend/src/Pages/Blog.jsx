import { useContext } from "react"
import UserContext from "../Context/AuthContext"


function Blog() {
  const {user,DeleteUser} = useContext(UserContext)
   const UserDelete = () =>{
    DeleteUser(user)
    .then(res => alert('succces'))
    .catch(err => console.log(err))
   }
  return (
    <div>
      <p>
        {user?.email}

        <button onClick={UserDelete} className="btn btn-error text-white m-2">
          deleteUser 
        </button>
      </p>

      </div>
  )
}

export default Blog