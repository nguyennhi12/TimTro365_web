import React, {useState} from "react";
import { Wrapper } from "./OffCanvas.styles";
import { Offcanvas, Button } from "react-bootstrap";
const OffCanvas = () =>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <Wrapper>
            <Button variant="primary" onClick={handleShow} className="me-2">
                
            </Button>
            <Offcanvas show={show} onHide={handleClose} >
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                Some text as placeholder. In real life you can have the elements you
                have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
        </Wrapper>
    )
}
export default OffCanvas;