import React, {Fragment} from 'react';
import { useForm } from 'react-hook-form';


const AddUserForm = (props) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = data => {
        console.log(data);
        props.addUser(data);
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Producto:</label>
                <input type="text" name="Producto"
                {...register("Producto", { required: true, maxLength: 100})}/>
                {errors.nombre?.type === 'required' && "Este es un Campo Requerido"}
                {errors.nombre?.type === 'maxLength' && "El Maximo de Caracteres es de 100"}

                <label>Precio:</label>
                <input type="text" name="Precio"
                {...register("Precio", { required: true, maxLength: 100})}/>
                {errors.nombre?.type === 'required' && "Este es un Campo Requerido"}
                {errors.nombre?.type === 'maxLength' && "El Maximo de Caracteres es de 100"}

                <label>Description:</label>
                <input type="text" name="Description"
                {...register("Description", { required: true, maxLength: 100})}/>
                {errors.nombre?.type === 'required' && "Este es un Campo Requerido"}
                {errors.nombre?.type === 'maxLength' && "El Maximo de Caracteres es de 100"}
                
                <button>Add new Product</button>
            </form>
        </Fragment> 
     );
}
 
export default AddUserForm;