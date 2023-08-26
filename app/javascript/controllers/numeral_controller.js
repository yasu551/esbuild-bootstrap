import { Controller } from '@hotwired/stimulus'
import numeral from 'numeral'

// Connects to data-controller="numeral"
export default class extends Controller {
  static targets = ['input'];

  inputTargetConnected(element) {
    element.value = numeral(element.value).format();
  }

  format(event) {
    event.target.value = numeral(event.target.value).format();
  }

  submit(event) {
    this.inputTargets.forEach(input => input.value = numeral(input.value).value());
  }
}
