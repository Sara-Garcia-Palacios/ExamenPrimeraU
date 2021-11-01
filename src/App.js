
import React, {useState} from 'react';
import UserTable from "./Componentes/UserTable";
import { v4 as uuidv4 } from 'uuid';
import AddUserForm from './Componentes/AddUserForm';
import EditUserForm from './Componentes/EditUserForm';

function App() {

  const userData = [
    {id: uuidv4(), Producto: 'Detergente',Precio: '$22',Description:'Jabon blnca nieves para trastes y ropa'},
    {id: uuidv4(), Producto: 'Chavalin de 140g', Precio: '$10',Description:'son unas ricas galletas que te dan todo el sabor tradicional de una galleta de malvavisco con coco' },
    {id: uuidv4(), Producto: ' Limpia alfromba', Precio: 'el litro a $75',Description:'Es un Shampoo diseñado especialmente para eliminar tdo tipo de suciedad en alfombras y revive el color '},
    
  ]

  const [users, setUsers] = useState(userData);

  //Agregar usuario
  const AddUser = (user) =>{
    user.id = uuidv4()
    setUsers([
      ...users,
      user
    ])
  }

  //Eliminar usuarios
  const deleteUser = (id) => {
    console.log(id)
    setUsers(users.filter(user => user.id != id))
  }

  //Bandera para Actualizar usuarios cambia entre add y edit
  const [bandera, setBandera] = useState(false);
  
  //Objeto datos para editar
  const [currentUser, setCurrentUser] = useState({
    id: null, Producto: '', Precio:null,Descripcion: ''
  });

  //Editar usuarios obtener datos para mostrar en formulario
  const editRow = (user) =>{
    setBandera(true);
    setCurrentUser({
      
      id: user.id, Producto: user.Producto, Precio: user.Precio,Descripcion:user.Descripcion
    })
  }

  //Funcion para Editar
  const updateUser = (id, updateUser) => {
    setBandera(false);
    setUsers(users.map(user => (user.id === id ? updateUser : user)))
  }


  return (
    <div className="container">
      <h1>Evaluacion</h1>
      <div className="flex-row">
        <div className="flex-large">
          {
            bandera ? (
              <div>
                <h2>EDIT Productos</h2>
                <EditUserForm currentUser={currentUser} upDateUser={updateUser}/>
              </div>
            ) : (
              <div>
                <h2>PRODUCTOS EN GENERAL</h2>
                <AddUserForm addUser={AddUser}/>
              </div>
            )
          }
        </div>
        <div className="flex-large">
          <h2>NUEVOS PRODUCTOS</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow}/>
        </div>
      </div>
    </div>
  );
}

export default App;
