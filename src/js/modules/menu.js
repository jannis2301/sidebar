export class Menu {
  constructor(app) {
    this.app = app
  }

  openMenu = () => {
    this.app.overlay.classList.add('showOverlay')
    setTimeout(() => {
      this.app.sidebar.classList.add('openMenu')
    }, 50)
  }

  closeMenu = () => {
    this.app.sidebar.classList.remove('openMenu')
    setTimeout(() => {
      this.app.overlay.classList.remove('showOverlay')
    }, 300)
  }
}
