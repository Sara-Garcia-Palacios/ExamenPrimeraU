import React, {Fragment} from 'react';



const UserTable = (props) => {
    console.log(props.users);

    return ( 
        <Fragment>
            <table>
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Description</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.users.length > 0 ?
                    props.users.map(user =>(
                        <tr key={user.id}>
                            <td>{user.Producto}</td>
                            <td>{user.Precio}</td>
                            <td>{user.Description}</td>
                            <td>
                                <button className="button muted-button "
                                onClick={() => {props.editRow(user)}}>Edit</button> 
                                <button className=" btn btn- primary"
                                onClick={() => {props.deleteUser(user.id)}}>Delete</button>
                            </td>
                        </tr>
                        )
                    ) : (
                        <tr>
                            <td colSpan={3}>No Registros</td>
                        </tr>
                    )
                }
            </tbody>
        </table>

        </Fragment>
             );
}
 
export default UserTable;