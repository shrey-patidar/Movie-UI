import React from 'react'
import { Button, Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap'

const ReviewForm = ({handleSubmit,revText,labelText,defaultValue}) => {
  return (
    <Form>
        <FormGroup className='mb-3' controlId='exampleForm.controlTextarea1'>
            <FormLabel>{labelText}</FormLabel>
            <FormControl ref={revText} as="textarea" rows={3} defaultValue={defaultValue} />
        </FormGroup>
        <Button variant='outline-info' onClick={handleSubmit}>Submit</Button>
    </Form>
  )
}

export default ReviewForm