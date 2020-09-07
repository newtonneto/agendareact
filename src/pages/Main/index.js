import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import { Form } from './styles';

function Main(props) {

    const handleSubmit = e => {
        //Impede que a página recarregue a cada envio do form
        e.preventDefault();

        const data = new FormData(e.target)

        const contact = {
            'name': data.get('name'),
            'number': data.get('number'),
            'email': data.get('email'),
        };

        let session = JSON.parse(sessionStorage.getItem('contactList'));

        //Verifica se a sessão está vazia, se estiver inicia a lista
        if (!session) {
            session = []
        }

        session.push(contact);
        sessionStorage.setItem('contactList', JSON.stringify(session));

        props.history.push('/contacts');
    };

    return (
        <>
            <h1>New Contact:</h1>

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" name="name" />
                <br/>
                <input type="text" placeholder="Number" name="number" />
                <br/>
                <input type="text" placeholder="Email" name="email" />
                <br/>
                <button type="submit" value="Save" className="btn btn-success" >Save</button>
            </form>
        </>
    );
}

export default Main;