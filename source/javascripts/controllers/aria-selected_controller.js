import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "item" ]

  // connect() {
  //   console.log("Hello, Stimulus!", this.element)
  // }

  toggle() {
    const targetElement = event.currentTarget
    const beforeElement = this.itemTargets.find( item => item.getAttribute("aria-selected") === "true" )
    const beforeElementUnderline = beforeElement.getElementsByClassName("tablist__tab-underline")[0]
    const beforeRect = beforeElement.getBoundingClientRect()
    const currentRect = targetElement.getBoundingClientRect()
    const x = currentRect["x"] - beforeRect["x"]

    this.itemTargets.forEach( item => {
      item.setAttribute("aria-selected", "false")
    } )

    if(beforeElementUnderline !== undefined) {
      beforeElementUnderline.setAttribute("style", `transform: translate(${x}px, 0px)`)
      beforeElementUnderline.addEventListener("transitionend", () => {
        beforeElementUnderline.setAttribute("style", "")
        console.log(this)
      })
    }else{
      // targetElement.setAttribute("aria-selected", "true")
    }
    targetElement.setAttribute("aria-selected", "true")
  }

  __set(element, value){
    console.log(element)
    element.setAttribute("aria-selected", value)
  }
}