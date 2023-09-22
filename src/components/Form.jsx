import React, { useEffect, useState } from 'react'
import "./Form.css"
import { db } from '../firebase'
import { getDocs, collection, addDoc } from 'firebase/firestore'
import Button from 'react-bootstrap/Button';

export const Form = () => {
    const contactosCollectionRef = collection(db, 'contactos')
    const [contactos, setContactos] = useState([])
    const [nombre, setNombre] = useState("")
    const [telefono, setTelefono] = useState("")
    const [mensaje, setMensaje] = useState("")

    const getContactos = async () => {
        const data = await getDocs(contactosCollectionRef)
        setContactos(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    }

    const sendInfo = async () => {
        await addDoc(contactosCollectionRef, { nombre, telefono, mensaje })
    }
    useEffect(() => {
        getContactos()
    }, [])
    return (
        <>
        <div className='container-input'>
        <h2>Envíanos tus dudas y/o reservas por el siguiente formulario</h2>
        <p>Tus datos se almacenaran en nuestra base de datos y quedarás registrado en nuestro sistema</p>
            <h6>Ingrese su nombre</h6>
            <input className='input-name'
                type='string'
                placeholder='Nombre'
                value={nombre}
                onChange={(event) => setNombre(event.target.value)}
            />
            <h6>Ingrese su teléfono</h6>
            <input className='input-phone'
                type='string'
                placeholder='Telefono'
                value={telefono}
                onChange={(event) => setTelefono(event.target.value)}
            />
            <h6>¿Qué nos quiere decir?</h6>
            <input className='input-msg'
                type='string'
                placeholder='Mensaje'
                value={mensaje}
                onChange={(event) => setMensaje(event.target.value)}
            />
                
            <Button onClick={sendInfo} variant='succes'>Enviar</Button>
            </div>
        </>
    )
}
