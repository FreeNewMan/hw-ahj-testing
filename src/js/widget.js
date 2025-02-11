import { isValidCardNumber } from "./validators";
import {getTypeCardByNumber} from "./validators";
import {luhnCheck} from "./validators";
 
export class CardFormWidget {
    constructor(parentEl) {
        this.parentEl = parentEl;

        this.onSubmit = this.onSubmit.bind(this);
        this.onInput = this.onInput.bind(this);
        this.onFocus = this.onFocus.bind(this);
    }

    static get markup() {
        return `
        <form class="cardnumb-form-widget">
          <div class="control">
            <ul class="cards">
                <li><span class="card mir" title="Mir">Visa</span></li>
                <li><span class="card visa" title="Visa">Visa</span></li>
                <li><span class="card master" title="Mastercard">Mastercard</span></li>
                <li><span class="card amex" title="American Express">American Express</span></li>
                <li><span class="card discover" title="Discover">Discover</span></li>
                <li><span class="card jcb" title="JCB">JCB</span></li>
                <li><span class="card diners_club" title="Diners Club">Diners Club</span></li>
            </ul>
            <input type="text" id="cardnumb-input" class="input" autocomplete="off">
            <button class="submit">Click to validate </button>
            
          </div>
        </form>
        `;
    }

    static get submitSelector() {
        return '.submit';
    }

    static get inputSelector() {
        return '.input';
    }

    static get selector() {
        return '.cardnumb-form-widget';
    }

    static get allCardsSelector() {
      return '.card';
  }

  static get mirCardSelector() {
    return '.card.mir';
}

static get masterCardSelector() {
  return '.card.master';
}


static get visaCardSelector() {
  return '.card.visa';
}


    bindToDOM() {
        this.parentEl.innerHTML = CardFormWidget.markup;

        this.element = this.parentEl.querySelector(CardFormWidget.selector);
        this.submit = this.element.querySelector(CardFormWidget.submitSelector);
        this.input = this.element.querySelector(CardFormWidget.inputSelector);
        this.allCards = this.element.querySelectorAll(CardFormWidget.allCardsSelector);

        this.mirCard = this.element.querySelector(CardFormWidget.mirCardSelector);
        this.masterCard = this.element.querySelector(CardFormWidget.masterCardSelector);
        this.visaCard = this.element.querySelector(CardFormWidget.visaCardSelector);


        this.element.addEventListener('submit', this.onSubmit);
        this.input.addEventListener('input', this.onInput);
        this.input.addEventListener('input', this.onFocus);
    }

    onSubmit(e) {
        e.preventDefault();

        const value = this.input.value;

        if(luhnCheck(value)) {
            this.input.classList.add('valid');
            this.input.classList.remove('invalid');
        } else {
            this.input.classList.add('invalid');
            this.input.classList.remove('valid');
        }
        
    }

    onInput() {
      const cardType = getTypeCardByNumber(this.input.value);
      this.allCards.forEach(element => {
        element.classList.remove('active');
      });
      if (cardType) {
        this.element.querySelector(`${CardFormWidget.allCardsSelector}.${cardType}`).classList.add('active');
      } 
      
    }

    onFocus() {
      this.input.classList.remove('valid');
      this.input.classList.remove('invalid');
    }
}
