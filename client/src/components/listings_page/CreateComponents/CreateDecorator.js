import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../../styles/CreateListings.css";

export default function CreateDecorator(props) {

  const user_id = props.user.id

  const [inputs, setInputs] = useState({});

  console.log('Input test', inputs);

  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  };

  function handleComplete(event) {
    event.preventDefault();
    inputs.user_id = user_id
      axios.post("/api/decorators/", inputs)
        .then((response) => {
          navigate('/listings');
        })

        .catch((res) =>
          console.log('Error logging in!', res.data)
        );
    }
  


  return (
    <div class="listing-data">
      <form
        class="form"
        autoComplete="off"
        onSubmit={handleComplete}
      >
        <span>
          <div class="listing-group">
            <label>Name:</label>
            <input
              name="name"
              type="text"
              placeholder="Name"
              value={inputs.name || ""}
              onChange={handleChange}
            />
          </div>
          <div class="listing-group">
            <label>City:</label>
            <input
              name="city"
              type="text"
              placeholder="City"
              value={inputs.city || ""}
              onChange={handleChange}
            />
          </div>
        </span>
        <span>
          <div class="listing-group">
            <label>Specialty:</label>
            <input
              name="specialty"
              type="text"
              placeholder="i.e. Light Theatrics, Outdoor Events"
              value={inputs.specialty || ""}
              onChange={handleChange}
            />
          </div>
          <div class="listing-group">
            <label>Theme:</label>
            <input
              name="theme"
              type="text"
              placeholder="Theme or Style"
              value={inputs.theme || ""}
              onChange={handleChange}
            />
          </div>
        </span>
        <div class="long-listing-group">
          <label>Website URL</label>
          <input
            name="website_url"
            type="text"
            placeholder="http://"
            value={inputs.website_url || ""}
            onChange={handleChange}
          />
        </div>
        <div class="long-listing-group">
          <label>Image URL:</label>
          <input
            name="image_url"
            type="text"
            placeholder="http://"
            value={inputs.image_url || ""}
            onChange={handleChange}
          />
        </div>
        <div class="long-listing-group">
          <label>Description:</label> 
          <input
            name="description"
            type="text"
            placeholder="About Your Services"
            value={inputs.description || ""}
            onChange={handleChange}
          />
        </div>
        <div class="listing-submit">
          <input 
            type="submit" 
            value="Create"
          ></input>
        </div>
      </form>
    </div>
  );
}

