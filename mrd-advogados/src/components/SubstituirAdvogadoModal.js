import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

class SubstituirAdvogadoModal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Substituir Advogado</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="selectAdvocate">
                        <Form.Label>Seleciona o novo advogado responsável</Form.Label>
                        <Form.Control as="select" multiple>
                            <option>Advogado 1</option>
                            <option>Advogado 2</option>
                            <option>Advogado 3</option>
                            <option>Advogado 4</option>
                            <option>Advogado 5</option>
                        </Form.Control>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.onHide}>Fechar</Button>
                    <Button variant="primary" onClick={this.props.onHide}>Salvar alteração</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default SubstituirAdvogadoModal;