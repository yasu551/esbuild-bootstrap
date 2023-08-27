import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="user-popover"
export default class extends Controller {
  static targets = ['content'];

  connect() {
    this.contentTarget.popover = 'manual';
  }
  show() {
    this.contentTarget.showPopover();
  }

  hide() {
    this.contentTarget.hidePopover();
  }
}
