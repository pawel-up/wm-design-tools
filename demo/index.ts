import '../src/define/dt-toolbar.js';
import DtToolbarElement from '../src/dt-toolbar/dt-toolbar.js';

class DemoPage {
  ui?: DtToolbarElement;

  init(): void {
    this.ui = document.createElement('dt-toolbar');
    document.body.appendChild(this.ui);
  }
}

let instance: DemoPage | undefined;

document.onreadystatechange = (): void => {
  if (!instance && (document.readyState === 'complete' || document.readyState === 'interactive')) {
    instance = new DemoPage();
    instance.init();
  }
};
