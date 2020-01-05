import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "item" ]

  // connect() {
  //   console.log("Hello, Stimulus!", this.element)
  // }

  toggle() {
    const targetElement = event.currentTarget
    const beforeElement = this.itemTargets.find( item => item.getAttribute("aria-selected") === "true" )
    const targetElementUnderline = targetElement.getElementsByClassName("tablist__tab-underline")[0]
    // const beforeElementUnderline = beforeElement.getElementsByClassName("tablist__tab-underline")[0]
    const beforeRect = beforeElement.getBoundingClientRect()
    const currentRect = targetElement.getBoundingClientRect()
    const x = beforeRect["x"] - currentRect["x"]

    // console.log(currentRect)
    // console.log(beforeRect)

    this.itemTargets.forEach( item => {
      item.getElementsByClassName("tablist__tab-underline")[0].setAttribute("style", "")
    } )

    targetElementUnderline.setAttribute("style", `transform: translate(${x*-1}px, 0px);position: absolute; width: 100%; left: ${x}px;`)
    targetElement.setAttribute("aria-selected", "true")
    beforeElement.setAttribute("aria-selected", "false")
    // targetElementUnderline.setAttribute("style", ``)
  }

  // toggle() {
  //   const targetElement = event.currentTarget
  //   const beforeElement = this.itemTargets.find( item => item.getAttribute("aria-selected") === "true" )
  //   const beforeElementUnderline = beforeElement.getElementsByClassName("tablist__tab-underline")[0]
  //   const beforeRect = beforeElement.getBoundingClientRect()
  //   const currentRect = targetElement.getBoundingClientRect()
  //   const x = currentRect["x"] - beforeRect["x"]

  //   this.itemTargets.forEach( item => {
  //     item.setAttribute("aria-selected", "false")
  //     item.getElementsByClassName("tablist__tab-underline")[0].setAttribute("style", "")
  //   } )

  //   if(beforeElementUnderline !== undefined) {
  //     beforeElementUnderline.setAttribute("style", `transform: translate(${x}px, 0px)`)
  //     beforeElementUnderline.addEventListener("transitionend", () => {
  //       // beforeElementUnderline.setAttribute("style", "")
  //       targetElement.setAttribute("aria-selected", "true")
  //       console.log(this)
  //     })
  //   }else{
  //     // targetElement.setAttribute("aria-selected", "true")
  //   }
  //   // targetElement.setAttribute("aria-selected", "true")
  // }

  __set(element, value){
    console.log(element)
    element.setAttribute("aria-selected", value)
  }
}