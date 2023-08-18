import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom'
import Contact from './Contact'

export default function Forms() {

    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);
    const [data, setData] = useState([]);
    const [componentCount, setComponentCount] = useState(0);

    const handleSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        setValidated(true);
        saveProject();
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const components = Array.from({ length: componentCount }, (index) => (
        <Contact key={index} deleteHandle={deleteContact} />
    ));

    const addContact = () => {
        setComponentCount(prevCount => prevCount + 1);
    }

    function deleteContact(index) {
        // const ComponentNumber = [...componentCount];
        // ComponentNumber.splice(index, 1);
        // setComponentCount(ComponentNumber);
    }

    function navigateMain() {
        navigate("/")
    }

    const saveProject = (e) => {

        e.preventDefault();
        const formData = new FormData(form);
        formData.set('message', data.message)
        const urlEncodedData = new URLSearchParams(formData).toString();
        
        fetch('./mail/send.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: urlEncodedData
        })
            .then(res => res.json())
            .then(res => {
                setResponse(res)
            })
        setTimeout(navigateMain, 4000);
        setValidated(true);
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Label><h3>Projekt neve</h3></Form.Label>
                            <Form.Control
                                onChange={handleChange}
                                required
                                name="name"
                                type="text"
                                placeholder="Projekt"
                                value={data.name}
                            />
                            <Form.Control.Feedback>Rendben!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label><h3>Projekt leírása</h3></Form.Label>
                            <Form.Control
                                onChange={handleChange}
                                required
                                as="textarea"
                                name="description"
                                type="text"
                                placeholder="Leírás"
                                value={data.description}
                            />
                            <Form.Control.Feedback>Rendben!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                            <Form.Label><h3>Státusz</h3></Form.Label>
                            {['radio'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                    <Form.Check
                                        required
                                        inline
                                        label="fejlesztésre vár"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-1`}
                                        value="fejlesztesre_var"
                                    />
                                    <Form.Check
                                        inline
                                        required
                                        label="folyamatban"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-2`}
                                        value="folyamatban"
                                    />
                                    <Form.Check
                                        inline
                                        required
                                        label="kész"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-3`}
                                        value="kesz"
                                    />
                                </div>
                            ))}
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom03">
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3">
                        <Button
                            onClick={addContact}
                            variant="secondary"
                        >Kapcsolattartó hozzáadása
                        </Button>
                    </Form.Group>
                    <Button type="submit">Mentés</Button>
                </Form>
                <div className="container justify-content-start">
                    <div className="row">
                        {components}
                    </div>
                </div>
            </div>
        </div>
    );
}