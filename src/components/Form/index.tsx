import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'


const schema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().min(6)
})

type Inputs = {
    email: string
    password: string
}

export default function FormSignUp() {
    // const {register,handleSubmit,formState: { errors }} = useForm<Inputs>()
const {register, handleSubmit,formState: { errors }} = useForm<Inputs>({
    resolver: yupResolver(schema)
})
    const onSubmit = (data) => console.log(data)

    return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('email')} />
        {errors.email?.message}
        <input {...register('password')} />
        {errors.password?.message}
        <input type='submit' />
    </form>
    )
}