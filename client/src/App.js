import { useMutation, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import './App.css';
import { CREATE_USER } from './mutations/user';
import { GET_ALL_USERS, GET_ONE_USER } from './query/user';

function App() {
  const { data, loading, error, refetch } = useQuery(GET_ALL_USERS);
  const { data:oneUser, loading:loadingOneUser } = useQuery(GET_ONE_USER, {
    variables:{
      id:1
    }
  });
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [newUser] = useMutation(CREATE_USER);

  console.log(oneUser);
  
  useEffect(() => {
    if (!loading) {
      setUsers(data.getAllUsers);
    };

    if(loading) {
      return <h1>...Loading...</h1>
    }

  }, [data]);

  let addUser = (e) => {
    e.preventDefault();
    newUser({
      variables:{
        input:{
          username, age
        }
      }
    }).then(({data}) => {
      console.log(data);
      setUsername("")
      setAge("")
    }).catch(e=>{
      console.log(e);
    })
  };

  let getAll = (e) => {
    e.preventDefault();
    refetch();
  };

  return (
    <>
      <div className="App">
        <form>
          <input value={username} onChange={(e) => setUsername(e.target.value)} type={"text"} />
          <input value={age} onChange={(e) => setAge(e.target.value)} type={"text"} />
          <div className='btn-container'>
            <button onClick={(e) => addUser(e)}>Create</button>
            <button onClick={(e) => getAll(e)}>Get</button>
          </div>
        </form>
      </div>
      <div className='user-container'>
        {users.map((user, userIndex) => {
          return (
            <div className='user' id={userIndex}> 
                <p>Id : {user.id}</p>
                <p>Username: {user.username}</p>
                <p>Age: {user.age}</p>
            </div>  
          )
        })}
      </div>
    </>
  );
}

export default App;
