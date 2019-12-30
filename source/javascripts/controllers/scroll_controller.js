import { Controller } from "stimulus"
import smoothscroll from "smoothscroll-polyfill"

export default class extends Controller {
  connect() {
    console.log("Scroll, Stimulus!", this.element)
  }

  smooth() {
    event.preventDefault();
    const targetId = event.target.hash

    smoothscroll.polyfill()
    if(targetId) {
      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }
}