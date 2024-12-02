import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { toasterStyles } from "@/styles/toaster-styles";
import { ToastProps, Position } from "@/types/toast.types";
import "@/components/ch-toast";

@customElement("ch-toaster")
export class Toaster extends LitElement {
  @property({ type: Array }) messages: ToastProps[] = [];
  @property({ type: Number }) duration: number = 3000;
  @property({ type: String }) position: Position = "bottom-left";

  private cleanTimeout?: number;

  static styles = toasterStyles;

  render() {
    return html`
      ${this.messages.map(
        (msg) =>
          html`<ch-toast .msg="${msg}" duration="${this.duration}"></ch-toast>`
      )}
    `;
  }

  open(
    text: string,
    toastType: ToastProps["toastType"] = "default",
    description?: string
  ) {
    this.messages = [
      ...this.messages,
      { text, description, toastType, hidden: false, opening: true },
    ];
    this._programMessageHide();
    this._programMessageClean();
  }

  private _programMessageHide() {
    setTimeout(() => {
      let foundItemToHide = false;
      this.messages = this.messages.map((msg) => {
        if (!foundItemToHide && !msg.hidden) {
          foundItemToHide = true;
          return { ...msg, hidden: true };
        }
        return msg;
      });
    }, this.duration);
  }

  private _programMessageClean() {
    if (this.cleanTimeout) clearTimeout(this.cleanTimeout);
    this.cleanTimeout = window.setTimeout(() => {
      this.messages = this.messages.filter((msg) => !msg.hidden);
    }, this.duration + 1000);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ch-toaster": Toaster;
  }
}
