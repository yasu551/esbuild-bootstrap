import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['wrapper', 'modal', 'closeButton'];

  connect() {
    this.wrapperTarget.style.display = 'flex';
    this.modalTarget.showModal();
  }

  close() {
    this.wrapperTarget.style.display = 'none';
    this.modalTarget.close();
  }
}
