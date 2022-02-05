import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import './Shipping.css';

const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user, email } = useAuth();
    const onSubmit = data => console.log(data);
    return (
        <form className='shipping-form' onSubmit={handleSubmit(onSubmit)}>

            <input defaultValue={user.displayName} {...register("name")} />

            <input defaultValue={user.email} {...register("email", { required: true })} />

            {errors.email && <span className='error'>This field is required</span>}

            <input placeholder='Address' defaultValue="" {...register("address")} />
            <input placeholder='city' defaultValue="" {...register("city")} />
            <input placeholder='Phone Number' defaultValue="" {...register("phone")} />

            <input type="submit" />
        </form>
    );
};

export default Shipping;