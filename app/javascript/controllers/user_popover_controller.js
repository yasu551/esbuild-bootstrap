import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="user-popover"
export default class extends Controller {
  static targets = ['content'];

  connect() {
    this.contentTarget.popover = 'manual';
  }
  show() {
    this.contentTarget.showPopover();
    const elementRect = this.element.getBoundingClientRect();
    const elementTop = elementRect['top'];
    const elementHeight = elementRect['height'];
    const left = elementRect['left'];
    const contentHeight = this.contentTarget.offsetHeight;
    const diff = elementTop - contentHeight;
    const top = diff > 0 ? (diff + window.scrollY) : (elementTop + elementHeight + window.scrollY);
    this.contentTarget.style = `top: ${top}px; left: ${left}px`;
  }

  hide() {
    this.contentTarget.hidePopover();
  }
}
