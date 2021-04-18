import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../../static/main.css';
import BarChart from '../../components/barChart';

function Main() {
    const [contactList, setContactList] = useState([]);
    const [chartData, setChartData] = useState([]);
    const [loading, setLoading] = useState(false);

    //Recebe a lista de contatos salvos na sessão, em formato JSON
    useEffect(() => {
        setLoading(true);
        const contacts = sessionStorage.getItem('contactList');
        console.log('1 1');

        //Deserializa a lista
        setContactList(JSON.parse(contacts));
    }, []);

    useEffect(() => {
        if (contactList !== null) {
            if (contactList.length > 0) {
                console.log('2 2');

                let gmail = 0;
                let hotmail = 0;
                let outlook = 0;
                let live = 0;
                let yahoo = 0;
                let bol = 0;
                let others = 0
    
                contactList.map(contact => {
                    let email = contact.email.split('@'); 
                    let domain = email[1].split('.');
        
                    if (domain[0] === 'gmail') {
                        gmail = gmail + 1;
                    }
                    else if (domain[0] === 'hotmail') {
                        hotmail = hotmail + 1
                    }
                    else if (domain[0] === 'outlook') {
                        outlook = outlook + 1
                    }
                    else if (domain[0] === 'live') {
                        live = live + 1
                    }
                    else if (domain[0] === 'yahoo') {
                        yahoo = yahoo + 1
                    }
                    else if (domain[0] === 'bol') {
                        bol = bol + 1
                    } else {
                        others = others + 1
                    }
                });

                setChartData([gmail, hotmail, outlook, live, yahoo, bol, others]);
            };
        };

        setLoading(false);
    }, [contactList]);

    const history = useHistory();

    const redirectToNewContact = () => {
        let path = '/newcontact';
        history.push(path);
    };

    const redirectToEditContact = (id) => {
        let path = `/editcontact/${id}`;
        history.push(path);
    };

    const redirectToRemoveContact = (id) => {
        contactList.splice(id, 1);
        sessionStorage.setItem('contactList', JSON.stringify(contactList));
        history.push('/')
    };

    return (
        <>
            {loading
                ? (
                    <>
                    </>
                )
                : (
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
                        <div
                            class="d-flex justify-content-center"
                            style={{
                                borderWidth: 1,
                                borderColor: 'red',
                                width: '100%',
                                height: 400,
                            }}
                        >
                            <BarChart
                                data={chartData}
                            />
                        </div>
                        
                    </>
                )
            }
        </>
    );
}

export default Main;
