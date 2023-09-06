import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['closeButton'];

  connect() {
    this.element.showModal();
  }

  close() {
    this.element.style.display = 'none';
    this.element.close();
  }
}
