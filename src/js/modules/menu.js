export class Menu {
  constructor(app) {
    this.app = app
  }

  getDurationTime = () => {
    return (
      parseFloat(
        getComputedStyle(this.app.document)
          .getPropertyValue('--animation-duration')
          .slice(0, -1)
      ) * 1000
    )
  }

  openMenu = (e) => {
    if (e) e.stopPropagation()
    this.app.overlay.classList.add('showOverlay')
    setTimeout(() => {
      this.app.sidebar.classList.add('openMenu')
    }, 50)
    this.app.document.classList.add('noScroll')
  }

  closeMenu = (e) => {
    if (e) e.stopPropagation()
    this.app.document.classList.remove('noScroll')
    const durationTime = this.getDurationTime()
    this.app.sidebar.classList.remove('openMenu')
    setTimeout(() => {
      this.app.overlay.classList.remove('showOverlay')
    }, durationTime)
  }
}
