import { Controller } from "stimulus"

export default class extends Controller {
  connect() {
    console.log("Scroll, Stimulus!", this.element)
  }

  smooth() {
    event.preventDefault();
    const targetId = event.target.hash
    if(targetId) {
      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });  
    }
  }
}