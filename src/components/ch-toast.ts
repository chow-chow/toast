import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { toastStyles } from "@/styles/toast-styles";
import { ToastProps, Variants } from "@/types/toast.types";
import { errorIcon, infoIcon, successIcon, warningIcon } from "@/icons";

@customElement("ch-toast")
export class Toast extends LitElement {
  @property({ type: Object }) msg: ToastProps = {
    text: "",
    description: "",
    toastType: "default",
    hidden: false,
    opening: true,
  };

  static styles = toastStyles;

  private iconMap: Record<Variants, unknown> = {
    error: errorIcon,
    success: successIcon,
    info: infoIcon,
    warning: warningIcon,
    default: null,
  };

  render() {
    const { toastType, text, description, hidden, opening } = this.msg;

    return html`
      <div class="toast ${hidden ? "hidden" : ""} ${opening ? "opening" : ""}">
        <div class="type">
          ${this.iconMap[toastType]
            ? html`<span>${this.iconMap[toastType]}</span>`
            : ""}
          <div>
            <strong>${text}</strong>
            ${description ? html`<p>${description}</p>` : ""}
          </div>
        </div>
      </div>
    `;
  }

  firstUpdated() {
    setTimeout(() => {
      this.msg.opening = false;
      this.requestUpdate();
    }, 20);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ch-toast": Toast;
  }
}
