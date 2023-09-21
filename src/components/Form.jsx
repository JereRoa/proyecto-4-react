import React, { useEffect, useState } from 'react'
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
        <h2>Envíanos tus dudas y/o reservas por el siguiente formulario</h2>
        <p>Tus datos se almacenaran en nuestra base de datos y quedarás registrado en nuestro sistema</p>
            <input
                type='string'
                placeholder='Nombre'
                value={nombre}
                onChange={(event) => setNombre(event.target.value)}
            />

            <input
                type='string'
                placeholder='Telefono'
                value={telefono}
                onChange={(event) => setTelefono(event.target.value)}
            />

            <input
                type='string'
                placeholder='Mensaje'
                value={mensaje}
                onChange={(event) => setMensaje(event.target.value)}
            />

            <Button onClick={sendInfo} variant='succes'>Enviar</Button>

        </>
    )
}
