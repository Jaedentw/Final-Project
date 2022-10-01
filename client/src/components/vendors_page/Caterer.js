import React from "react";
import "../../styles/VendorPageItems.css"

export default function Caterer(props) {

  const caterer = props.caterer

  return(
    <section class="business-container">
      <div class="upper-business">
        <img
          src={caterer.image_url}
          alt="Business"
          class="business-image" 
        />
        <div class="text scroller">
          <div class="upper-text">
            <h1>{caterer.name}</h1>
            <p>Catering - Specialty: {caterer.cuisine} - <a href={caterer.menu_url}>Menu</a></p>
          </div>
          <p>{caterer.description}</p>
          <div>
            <p><strong>Capacity: </strong>{caterer.capacity}</p>
            <p>{caterer.food_alternatives}</p>
          </div>
        </div>
      </div>

      <div class="lower-business">
        <p> <strong class="location">Located in:</strong><div>{caterer.city}</div></p>
        <div class="upper-business">
          <i class="fa-solid fa-plus fa-lg fa-sharp"></i>
          <i class="fa-solid fa-heart fa-lg"></i>
        </div>
      </div>
    </section>
  )
}