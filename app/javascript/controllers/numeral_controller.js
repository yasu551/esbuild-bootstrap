import { Controller } from '@hotwired/stimulus'
import numeral from 'numeral'

// Connects to data-controller="numeral"
export default class extends Controller {
  static targets = ['input'];

  connect() {
    this.numberFormat = new Intl.NumberFormat();
  }

  inputTargetConnected(element) {
    element.value = this.numberFormat.format(element.value);
  }

  format(event) {
    event.target.value = this.numberFormat.format(event.target.value);
  }

  submit() {
    this.inputTargets.forEach(input => input.value = this._unformat(input.value));
  }

  _unformat(formattedNumber) {
    return formattedNumber.replace(/,/g, '');
  }
}
