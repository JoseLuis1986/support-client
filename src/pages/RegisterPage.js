import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { AuthContext } from '../auth/AuthContext'
import { useFormRegister } from '../hooks/useFormRegister'


const depto = ['administracion', 'superbancas', 'bigstar', 'gerencia', 'presidencia'];

export const RegisterPage = () => {

    const { register } = useContext(AuthContext);


    const initialState = {
        name: '',
        email: '',
        department: '',
        password: '',
    }

    const [form, handleInputChange] = useFormRegister(initialState);


    const onSubmit = async (ev) => {
        ev.preventDefault();

        const { name, email, password, department } = form;

        const msg = await register(name, email, password, department);

        if (msg !== true) {
            Swal.fire('Error', msg, 'error');
        }

    }

    const todoOk = () => {
        return (form.name.length > 0 &&
            form.email.length > 0 &&
            form.password.length > 0
        ) ? true : false;
    }

    return (
        <form
            className="login100-form validate-form flex-sb flex-w"
            onSubmit={onSubmit}
        >
            <span className="login100-form-title mb-3">
                Chat - Registro
            </span>

            <div className="wrap-input100 validate-input mb-3">
                <input
                    className="input100"
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    value={form.name}
                    onChange={handleInputChange}
                />
                <span className="focus-input100"></span>
            </div>


            <div className="wrap-input100 validate-input mb-3">
                <input
                    className="input100"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleInputChange}

                />
                <span className="focus-input100"></span>
            </div>
            <div className="wrap-input100 validate-input mb-3">

                <select 
                    className="form-select form-select-lg" 
                    aria-label=".form-select-lg example"
                    name='department'
                    value={form.department}
                    onChange={handleInputChange}
                    required
                    >
                    <option value="" disabled> Seleccione departamento </option>
                    {
                        depto.map((dpto) =>
                            <option key={dpto} value={dpto}>
                                {dpto}
                            </option>)

                    }
                </select>

                <span className="focus-input100"></span>
            </div>


            <div className="wrap-input100 validate-input mb-3">
                <input
                    className="input100"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleInputChange}
                />
                <span className="focus-input100"></span>
            </div>

            <div className="row mb-3">
                <div className="col text-right">
                    <Link to="/auth/login" className="txt1">
                        Ya tienes cuenta?
                    </Link>
                </div>
            </div>

            <div className="container-login100-form-btn m-t-17">
                <button
                    type="submit"
                    className="login100-form-btn"
                    disabled={!todoOk()}
                >
                    Crear cuenta
                </button>
            </div>

        </form>
    )
}
