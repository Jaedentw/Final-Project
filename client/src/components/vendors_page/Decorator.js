import {useState} from "react";
import "../../styles/VendorPageItems.css"
import DropDown from "./DropDown";
import DropDownMenu from "./DropDownMenu";
import axios from "axios";

export default function Decorator(props) {

  const [dropdown, setDropdown] = useState(false);

  function onItemClick() {
    setDropdown(false);
  }

  const decorator = props.decorator

  function onDelete() {
    axios.delete(`/api/decorators/${decorator.id}`, decorator.id)
    .then((response) => {
      console.log("GOOD", response) 
      props.getListingsData();
    })
    .catch((response) => {console.log("BAD", response)})
  }

  return(
    <section class="business-container">
      <div class="upper-business">
        <img
          src={decorator.image_url}
          alt="Business"
          class="business-image" 
        />
        <div class="text scroller">
          <div class="upper-text">
            <h1>{decorator.name}</h1>
            <p><strong>Specialty: </strong> {decorator.specialty} - 
            <strong> Theme: </strong>{decorator.theme} - <a href={decorator.website_url}>Website</a></p>
          </div>
          <p>{decorator.description}</p>
        </div>
      </div>

      <div class="lower-business">
        <p> <strong class="location">Located in:</strong>{decorator.city}</p>
        <div class="upper-business">
        {props.state.tab === "Listings"? <div><i class="fa-sharp fa-solid fa-pen-to-square fa-lg"></i><i onClick={() => {onDelete()}} class="fa-sharp fa-solid fa-trash-can fa-lg trash"></i></div> : ( props.state.user.id &&         
          <DropDown
            isOpen={dropdown}
            onChange={setDropdown}
          >
            <DropDownMenu
              listing={decorator}
              state={props.state}
              onItemClick={onItemClick}
            />
          </DropDown>
          )}
        </div>
      </div>
    </section>
  )
}