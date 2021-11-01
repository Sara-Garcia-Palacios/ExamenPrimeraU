import React, {Fragment} from 'react';
import { useForm } from 'react-hook-form';


const EditUserForm = (props) => {

    const { register, handleSubmit, setValue, formState: { errors } } = useForm({defaultValues : props.currentUser});
    
    setValue('Producto', props.currentUser.Producto);
    setValue('Precio', props.currentUser.Precio);
    setValue('Description', props.currentUser.Description);

    const onSubmit = data => {
        console.log(data);
        props.upDateUser(props.currentUser.id, data)

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
                
                <button>Edit User</button>
            </form>
        </Fragment> 
     );
}
 
export default EditUserForm;
