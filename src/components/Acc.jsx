import React from 'react'
import { Accordion } from 'react-bootstrap'


const Acc = () => {
  return (
    <div>
<Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Accordion Item #1</Accordion.Header>
    <Accordion.Body>
     Islem
    </Accordion.Body>
    </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Accordion Item #2</Accordion.Header>
    <Accordion.Body>
  Imen
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Accordion Item #2</Accordion.Header>
    <Accordion.Body>
  Ahmed
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
    </div>
  )
}

export default Acc
