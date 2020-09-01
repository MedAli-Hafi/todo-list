import React, { useState } from 'react'
import Note from './Note'
import { Button, Modal } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Notes() {
  const [input, setInput] = useState("")
  const [notes, setNotes] = useState([{ id: Math.random(), message: '' }])
  const [show, setShow] = useState(false);
  const [newItem, setNewItem] = useState("")

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ input });
    const id = Math.random()
    setNotes([...notes, { id: id, message: input }])
    setInput('')
  }
  const deleteNote = (id, notes, setNotes) => {
    setNotes(notes.filter(note => note.id != id))
  }
  const handleItem = (id) => {
    console.log(id)
    console.log(newItem)
    notes.map(el => (el.id == id) ? el.message = newItem : el)
    setShow(false)

  }

  return (
    <div >

      <form className="to-do-form" onSubmit={(e) => handleSubmit(e)}>
        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder="Enter Text" />
        <button type="submit">add</button>
      </form>
      {notes.map(note => (<>
        <Note message={note.message} id={note.id} deleteNote={(id) => deleteNote(id, notes, setNotes)} handleShow={handleShow} />
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body><input type='text' placeholder="message" onChange={(e) => setNewItem(e.target.value)} /></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
          </Button>
            <Button variant="primary" onClick={() => handleItem(note.id)}>
              Edit
          </Button>
          </Modal.Footer>
        </Modal>
      </>
      ))}


    </div>

  )
}
