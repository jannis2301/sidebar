export class Year {
  constructor(app) {
    this.app = app
  }

  calculateCurrentYear = () => {
    const date = new Date()
    const currentYear = date.getFullYear()
    if (this.app.year) {
      this.app.year.textContent = currentYear.toString()
    }
  }
}
