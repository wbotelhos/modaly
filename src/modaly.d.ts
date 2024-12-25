export interface ModalyOptions {
  attribute: string;
  block: boolean;
  closeButton: boolean;
  closeOverlay: boolean;
  closeTarget: string;
  esc: boolean;
  overlay: number;
  prevent: boolean;
  speed: number;
  top: number;
  visible: boolean;
}

export declare class Modaly {
  constructor(element: HTMLElement, options?: Partial<ModalyOptions>);

  block(boo: boolean): void;

  close(): void;

  default(): Partial<ModalyOptions>;

  init(): Modaly;

  open(): void;

  _bind(): void;

  _closeButton(): void;

  _hide(element: HTMLElement): void;

  _modal(): void;

  _overlay(): void;

  _show(el: HTMLElement, opacity: number): void;
}
