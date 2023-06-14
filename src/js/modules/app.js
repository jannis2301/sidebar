import { Menu } from './menu.js'
import { Year } from './year.js'

export class App {
  constructor() {
    this.overlay = document.querySelector('.overlay')
    this.sidebar = document.querySelector('.sidebar')
    this.openMenuBtn = document.querySelector('.openMenuBtn')
    this.closeMenuBtn = document.querySelector('.closeMenuBtn')
    this.year = document.querySelector('.year')
    this.menu = new Menu(this)
    this.yearComponent = new Year(this)
  }

  init = () => {
    this.openMenuBtn.addEventListener('click', this.menu.openMenu)
    this.closeMenuBtn.addEventListener('click', this.menu.closeMenu)
    this.yearComponent.calculateCurrentYear()
  }
}
