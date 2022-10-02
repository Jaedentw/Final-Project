import React from "react";
import WeddingListItem from "./WeddingListItem";
import "../../styles/WeddingsPage.css"
import Wedding from "./Wedding";
import { getUserWeddings } from "../../helpers/WeddingsPageHelpers";

export default function WeddingList(props) {

  const state = props.state
  
  let userWeddings = getUserWeddings(props.state, props.state.user.id);

  let mappedWeddings = userWeddings.map((w) => {
    return (
      <WeddingListItem
        key={w.id}
        date={w.date}
        name={w.name}
        image_url={w.image_url}
        wedding={w}
        setWedding={props.setWedding}
      />
    )
  })

  function renderWeddings(state) {
    if(!state.wedding) {
      return mappedWeddings;
    } else {
      return <Wedding
        state={state}
        wedding={state.wedding}
        setFilter={props.setFilter}
        setWedding={props.setWedding}
      />
    }
  }

  return (
    <div class="wedding_list_container">
      <div class="upper_wedding_list">
        <i class={state.wedding ? "fa-sharp fa-solid fa-arrow-left fa-lg" : ""} onClick={() => props.setWedding(null)} ></i>
        <h1 class="wedding_header">{state.wedding ? state.wedding.name : "Your Weddings"}</h1>
        <i></i>
      </div>
      <div class="wedding_list_items">
        {renderWeddings(props.state)}
      </div>
    </div>
  )
}