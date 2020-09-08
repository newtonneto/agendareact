import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Rango from '../../functions/rango';
import PhoneMask from '../../functions/phone-mask.js';
import '../../static/main.css';

function NewContact(props) {
    useEffect(() => {
        Rango();
        PhoneMask();
    });

    const handleSubmit = e => {
        //Impede que a página recarregue a cada envio do form
        e.preventDefault();

        const data = new FormData(e.target)

        //Recebe o array de telefones
        let numbers = [];
        let index = 1;

        while (data.get(`number${index}`)) {
            numbers.push(data.get(`number${index}`));

            index++;
        }

        //Gera um objeto com todas as informações de contato
        const contact = {
            'name': data.get('name'),
            'numbers': numbers,
            'email': data.get('email'),
        };

        //Recebe a lista de contatos salvos na sessão
        let session = JSON.parse(sessionStorage.getItem('contactList'));

        //Verifica se a sessão está vazia, se estiver inicia a lista
        if (!session) {
            session = []
        }

        //Adiciona o novo contato na lista de contatos
        session.push(contact);
        //Salva a lista de contatos na sessão, em formato JSON
        sessionStorage.setItem('contactList', JSON.stringify(session));

        //Redireciona para a página com a lista de contatos
        props.history.push('/');
    };

    const history = useHistory();

    const redirectToContacts = () => {
        let path = '/';
        history.push(path);
    }

    return (
        <>
            <div className="d-flex justify-content-center">
                <div className="container">
                    <br/>
                    <div className="d-flex justify-content-start">
                    <button className="btn btn-primary" onClick={redirectToContacts} >Home</button>
                    </div>
                    <br/>
                    <h2>New Contact</h2>
                    <br/>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text" placeholder="Name" className="form-control" name="name" id="name" required />
                            <br/>

                            <input type="text" placeholder="Email" className="form-control" name="email" id="email" required />
                            <br/>

                            <div className="input_fields_wrap">
                                <div>
                                    <input type="text" placeholder="Phone 1" className="form-control cellphone" name="number1" id="number1" required />
                                    <br/>
                                </div>
                            </div>
                            
                            {/* O botão a seguir deve chamar a função PhoneMask para aplicar a mascara ao novo input gerado */}
                            <button type="button" className="add_field_button btn btn-primary btn-user btn_pad" onClick={PhoneMask}>Add Phone Number</button>
                            <input type="submit" value="Save" className="btn btn-success" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default NewContact;
