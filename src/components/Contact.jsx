import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

export default function Contact( handleDelete={handleDelete} ) {

    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput((prevInput) => ({
            ...prevInput,
            [name]: value,
        }));
    }

    return (
        <div className="col">
            <Card className="mb-5 mt-2" style={{ width: '18rem' }}>
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Kapcsolattartó neve</Form.Label>
                            <Form.Control
                                name="contact_name"
                                type="name"
                                placeholder="Név"
                                onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Kapcsolattartó e-mail címe</Form.Label>
                            <Form.Control
                                name="contact_email"
                                type="email"
                                placeholder="E-mail"
                                onChange={handleChange} />
                        </Form.Group>
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <Button variant="success" onClick={handleSubmit}>
                                        Hozzáadás
                                    </Button>
                                </div>
                                <div className="col">
                                    <Button variant="warning" onClick={handleDelete}>
                                        Törlés
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}
