import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function Contacts() {
    const contactListJson = sessionStorage.getItem('contactList');

    const contactList = JSON.parse(contactListJson);

    return (
        <>
            <ul>
                {contactList.map(contact => (
                    <li key={contact.name}>
                        {contact.name}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Contacts;