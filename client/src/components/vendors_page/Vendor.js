import {useState} from "react";
import "../../styles/VendorPageItems.css"
import DropDown from "./DropDown";
import DropDownMenu from "./DropDownMenu";


export default function Vendor(props) {

  const [dropdown, setDropdown] = useState(false);

  function onItemClick() {
    setDropdown(false);
  }

  const vendor = props.vendor

  return(
    <section class="business-container">
      <div class="upper-business">
        <img
          src={vendor.image_url}
          alt="Business"
          class="business-image" 
        />
        <div class="text scroller">
          <div class="upper-text">
            <h1>{vendor.name}</h1>
            <p>
              <strong>Specialty: </strong> {vendor.specialty} - 
              <strong> Rate per hour: </strong>{vendor.rate_per_hour} - <a href={vendor.website_url}>Website</a></p>
          </div>
          <p>{vendor.description}</p>
          <div>
            <p>{vendor.rates_info}</p>
          </div>
        </div>
      </div>

      <div class="lower-business">
        <p> <strong class="location">Located in:</strong>{vendor.city}</p>
        <div class="upper-business">
        {props.state.tab === "Listings"? <i class="fa-sharp fa-solid fa-pen-to-square fa-lg"></i> : ( props.state.user.id &&         
          <DropDown
            isOpen={dropdown}
            onChange={setDropdown}
          >
            <DropDownMenu
              listing={vendor}
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