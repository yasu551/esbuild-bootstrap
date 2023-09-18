import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['closeButton'];

  connect() {
    this.element.showModal();
    document.body.style.overflow = 'hidden';
  }

  close(event) {
    if (event.target === this.element || event.target === this.closeButtonTarget) {
      this.element.close();
      document.body.style.overflow = 'auto';
    }
  }
}
