import { Menu } from './menu.js'
import { Year } from './year.js'

export class App {
  constructor() {
    this.document = document.documentElement
    this.overlay = document.querySelector('.overlay')
    this.sidebar = document.querySelector('.sidebar')
    this.openMenuBtn = document.querySelector('.openMenuBtn')
    this.closeMenuBtn = document.querySelector('.closeMenuBtn')
    this.year = document.querySelector('.year')
    this.menu = new Menu(this)
    this.yearComponent = new Year(this)
  }

  handleMenuViaDocument = (e) => {
    if (e.type === 'click') {
      e.stopPropagation()
      if (!this.sidebar.classList.contains('openMenu')) {
        return
      } else if (e.target.nodeName === 'ASIDE') {
        this.menu.closeMenu()
      }
    } else if (e.key === 'Escape') {
      this.menu.closeMenu()
    } else if (e.key === 'Enter') {
      this.menu.openMenu()
    }
  }

  init = () => {
    this.openMenuBtn.addEventListener('click', this.menu.openMenu)
    this.closeMenuBtn.addEventListener('click', this.menu.closeMenu)
    this.document.addEventListener('click', this.handleMenuViaDocument)
    this.document.addEventListener('keydown', this.handleMenuViaDocument)
    this.yearComponent.calculateCurrentYear()
  }
}
