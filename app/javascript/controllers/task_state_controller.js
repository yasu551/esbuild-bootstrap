import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="task-state"
export default class extends Controller {
  update_state() {
    this.element.requestSubmit();
  }
}
