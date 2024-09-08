import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export const AddUser = ({ onAddUser }) => {

    const structure = yup.object().shape({
        name: yup.string().required('First name is required'),
        surname: yup.string().required('Last name is required'),
        email: yup.string().email('Invalid email').required('Email is required'),
        age: yup
            .number()
            .required('Age is required')
            .positive('Age must be positive')
            .integer('Age must be an integer')
            .typeError('Age must be number'),
        password: yup
            .string()
            .min(8, 'Password must be at least 8 characters long')
            .required('Password is required'),
    });

    const { register, handleSubmit, formState: { errors }, reset } = useForm({resolver: yupResolver(structure)})
    const handleAdd = data => {
        onAddUser(data)
        console.log(data)
        reset()
    }
    return <>
        <h3>Add user</h3>
        <form onSubmit={handleSubmit(handleAdd)}>
            <div>
                {errors.name && <p style={{ color: 'red' }}> {errors.name.message}</p>}
                <input
                    {...register('name')}
                    placeholder="First name"
                />
            </div>
            <div>
                {errors.surname && <p style={{ color: 'red' }}> {errors.surname.message}</p>}
                <input
                    {...register('surname')}
                    placeholder="Last name"
                />
            </div>
            <div>
                {errors.email && <p style={{ color: 'red' }}> {errors.email.message}</p>}
                <input
                    {...register('email')}
                    placeholder="Email"
                />
            </div>
            <div>
                {errors.age && <p style={{ color: 'red' }}> {errors.age.message}</p>}
                <input type="number"
                    {...register('age')}
                    placeholder="Age"
                />
            </div>
            <div>
                {errors.password && <p style={{ color: 'red' }}> {errors.password.message}</p>}
                <input
                    {...register('password')}
                    placeholder="Password"
                />
            </div>
            <button>Save</button>
        </form>
    </>
}