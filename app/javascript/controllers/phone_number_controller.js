import { Controller } from '@hotwired/stimulus'
import { PhoneNumberUtil, PhoneNumberFormat } from 'google-libphonenumber'

// Connects to data-controller="phone-number"
export default class extends Controller {
  format() {
    if(this.element.value.length > 1) {
      const phoneNumberUtil = PhoneNumberUtil.getInstance();
      const region = 'JP';
      const number = phoneNumberUtil.parseAndKeepRawInput(this.element.value, region);
      this.element.value = phoneNumberUtil.format(number, PhoneNumberFormat.NATIONAL);
    }
  }
}
