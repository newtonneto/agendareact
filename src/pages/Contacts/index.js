import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function Contacts() {
    const contactListJson = sessionStorage.getItem('contactList');

    const contactList = JSON.parse(contactListJson);

    return (
        <>
            <ul>
                {/* Condicional para verificar se existe contatos cadastrados */}
                {contactList 
                    ? contactList.map(contact => (
                        <li key={contact.name}>
                            {contact.name}
                        </li>
                        ))
                    : <h1>teste</h1>
                }
            </ul>
        </>
    );
}

export default Contacts;