import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "head", "content" ]

  toggle() {
    const content = this.contentTarget
    if(content.getAttribute('aria-hidden') === 'true') {
      content.setAttribute('aria-hidden', 'false')
    }else{
      content.setAttribute('aria-hidden', 'true')
    }
  }
}