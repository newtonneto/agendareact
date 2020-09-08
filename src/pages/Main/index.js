import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './rango-jquery.js';

function Main(props) {
    const handleSubmit = e => {
        //Impede que a página recarregue a cada envio do form
        e.preventDefault();

        const data = new FormData(e.target)

        //Recebe o array de telefones
        let numbers = [];
        let indice = 1;

        while (data.get(`number${indice}`)) {
            numbers.push(data.get(`number${indice}`));

            indice++;
        }

        const contact = {
            'name': data.get('name'),
            'number': numbers,
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
                <input type="text" placeholder="Name" name="name" id="name" />
                <br/>
                
                <div className="input_fields_wrap">
                    <div>
                        <input type="text" placeholder="Number" name="number1" id="number1" />
                        <br/>
                    </div>
                </div>

                <button type="button" className="add_field_button btn btn-primary btn-user">More</button>
                <br/>
                

                <input type="text" placeholder="Email" name="email" id="email" />
                <br/>
                <button type="submit" value="Save" className="btn btn-success" >Save</button>
            </form>
        </>
    );
}

export default Main;