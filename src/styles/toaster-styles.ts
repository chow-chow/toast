import { css } from "lit";
import { sharedStyles } from "@/styles/shared-styles";

export const toasterStyles = [
  sharedStyles,
  css`
    :host {
      display: flex;
      flex-direction: column;
      position: fixed;
      z-index: 50;
    }

    :host([position="top-left"]) {
      top: 20px;
      left: 15px;
    }

    :host([position="top-right"]) {
      top: 20px;
      right: 15px;
    }

    :host([position="bottom-left"]) {
      bottom: 20px;
      left: 15px;
    }

    :host([position="bottom-right"]) {
      bottom: 20px;
      right: 15px;
    }
  `,
];
