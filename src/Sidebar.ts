export class Sidebar {
  private overlay: HTMLElement;
  private document: HTMLHtmlElement;
  private sidebar: HTMLElement;
  private openMenuBtn: HTMLButtonElement;
  private closeMenuBtn: HTMLButtonElement;

  constructor(overlay: HTMLElement) {
    this.overlay = overlay;
    this.document = document.documentElement as HTMLHtmlElement;
    this.sidebar = this.overlay.querySelector('.sidebar') as HTMLElement;
    this.closeMenuBtn = this.overlay.querySelector(
      '.closeMenuBtn'
    ) as HTMLButtonElement;
    this.openMenuBtn = document.querySelector(
      '.openMenuBtn'
    ) as HTMLButtonElement;

    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.handleMenuViaDocument = this.handleMenuViaDocument.bind(this);

    this.init();
  }

  private handleMenuViaDocument(e: MouseEvent | KeyboardEvent) {
    const target = e.target as HTMLElement;
    if (e.type === 'click') {
      e.stopPropagation();
      if (!this.sidebar.classList.contains('openMenu')) {
        return;
      } else if (target.nodeName === 'ASIDE') {
        this.closeMenu(e);
      }
    } else if ((e as KeyboardEvent).key === 'Escape') {
      this.closeMenu(e);
    } else if ((e as KeyboardEvent).key === 'Enter') {
      this.openMenu(e);
    }
  }

  private getDurationTime() {
    return (
      parseFloat(
        getComputedStyle(this.document)
          .getPropertyValue('--animation-duration')
          .slice(0, -1)
      ) * 1000
    );
  }

  private openMenu(e: MouseEvent | KeyboardEvent) {
    if (e) e.stopPropagation();
    this.overlay.classList.add('showOverlay');
    setTimeout(() => {
      this.sidebar.classList.add('openMenu');
    }, 50);
    this.document.classList.add('noScroll');
  }

  private closeMenu(e: MouseEvent | KeyboardEvent) {
    if (e) e.stopPropagation();
    this.document.classList.remove('noScroll');
    const durationTime = this.getDurationTime();
    this.sidebar.classList.remove('openMenu');
    setTimeout(() => {
      this.overlay.classList.remove('showOverlay');
    }, durationTime);
  }

  init = () => {
    this.openMenuBtn.addEventListener('click', this.openMenu);
    this.closeMenuBtn.addEventListener('click', this.closeMenu);
    this.document.addEventListener('click', this.handleMenuViaDocument);
    this.document.addEventListener('keydown', this.handleMenuViaDocument);
  };
}
