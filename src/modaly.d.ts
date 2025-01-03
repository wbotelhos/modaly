export interface ModalyOptions {
  attribute: string;
  block: boolean;
  closeButton: boolean;
  closeOverlay: boolean;
  closeSelector: string;
  esc: boolean;
  overlay: boolean;
  overlayOpacity: number;
  overlaySelector: number;
  prevent: boolean;
  speed: number;
}

export declare class Modaly {
  constructor(element: HTMLElement, options?: Partial<ModalyOptions>);

  block(boo: boolean): void;

  close(): void;

  defaults(): Partial<ModalyOptions>;

  init(): Modaly;

  open(): void;

  _bind(): void;

  _closeButton(): void;

  _hide(element: HTMLElement): void;

  _isTrue(element: string | boolean): boolean;

  _modal(): void;

  _show(el: HTMLElement, opacity: number): void;
}
