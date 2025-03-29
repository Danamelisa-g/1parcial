class Card extends HTMLElement {
    constructor () {
        super()
        this.shadowRoot
        this.container = document.createElement("container")

    }

    connectedCallback() {
        console.log("Card");
    }

   



}