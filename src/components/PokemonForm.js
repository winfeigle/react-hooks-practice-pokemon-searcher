import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onFormSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: "",
  })

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData({...formData, [name]:value})
  }

  const handleSubmit = () => {
    fetch('http://localhost:3001/pokemon', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: formData.name,
        hp: formData.hp,
        sprites: {
          front: formData.frontUrl,
          back: formData.backUrl
        }
      })
    })
      .then(res => res.json())
      .then(newPoke => {
        onFormSubmit(newPoke)
        setFormData({
        name: "",
        hp: "",
        frontUrl: "",
        backUrl: "",
      })
      })  
  }

  

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={() => {
          handleSubmit();
        }}
      >
        <Form.Group widths="equal">
          <Form.Input 
            onChange={handleChange}
            fluid label="Name" 
            placeholder="Name" 
            name="name" 
            value={formData.name}
            />
          <Form.Input 
            onChange={handleChange}
            fluid label="hp" 
            placeholder="hp" 
            name="hp" 
            value={formData.hp}
            />
          <Form.Input
            onChange={handleChange}
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={formData.frontUrl}
          />
          <Form.Input
            onChange={handleChange}
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={formData.backUrl}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
