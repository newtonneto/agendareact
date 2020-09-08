import React from 'react';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../../static/main.css';

function Main() {
    //Recebe a lista de contatos salvos na sessão, em formato JSON
    const contactListJson = sessionStorage.getItem('contactList');

    //Deserializa a lista
    let contactList = JSON.parse(contactListJson);

    const history = useHistory();

    const redirectToNewContact = () => {
        let path = '/newcontact';
        history.push(path);
    }

    const redirectToEditContact = (id) => {
        let path = `/editcontact/${id}`;
        history.push(path);
    }

    const redirectToRemoveContact = (id) => {
        contactList.splice(id, 1);
        sessionStorage.setItem('contactList', JSON.stringify(contactList));
        history.push('/')
    }

    return (
        <>
            <div className="d-flex justify-content-center">
                <div className="container">
                    <br/>
                    <div className="d-flex justify-content-start">
                        <button className="btn btn-primary" onClick={redirectToNewContact} >New Contact</button>
                    </div>
                    <br/>
                    <h2>Contact List</h2>
                    <br/>
                    {/* Condicional para verificar se existe contatos cadastrados */}
                    {contactList
                        ? contactList.map((contact, index_contact) => (
                            <div key={index_contact}>
                                <div className="row">
                                    <div className="col-sm">
                                        <label>{ index_contact + 1 } - { contact.name }</label>
                                    </div>
                                    <div className="col-sm">
                                        {contact.numbers.map((number, index_number) => (
                                            <li key={index_number}>
                                                {number}
                                            </li>
                                        ))}
                                    </div>
                                    <div className="col-sm">
                                        <label>{ contact.email }</label>
                                    </div>
                                    <div className="col-sm">
                                        {/* Utilizar a Arrow Function quanto passar parametros para a função */}
                                        <button className="btn btn-warning btn_pad" onClick={() => redirectToEditContact(index_contact)} >Edit</button>
                                        <button className="btn btn-danger" onClick={() => redirectToRemoveContact(index_contact)} >Remove</button>
                                    </div>
                                </div>
                                <hr/>
                            </div>
                        ))
                        : <p>Contact List Empty</p>
                    }
                </div>
            </div>
        </>
    );
}

export default Main;
