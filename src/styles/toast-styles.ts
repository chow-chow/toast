import { css } from "lit";
import { sharedStyles } from "@/styles/shared-styles";

export const toastStyles = [
  sharedStyles,
  css`
    .toast {
      color: #fff;
      padding: 12px;
      margin-top: 10px;
      position: relative;
      top: 0;
      opacity: 1;
      overflow: hidden;
      transition: all 0.4s ease;
      z-index: 50;
      font-size: 15px;
      font-weight: normal;
      border-radius: 5px;
      width: 356px;
      display: flex;
      flex-direction: column;
      text-align: left;
      background-color: #121212;
    }

    .toast img {
      width: 24px;
      height: 24px;
      margin-right: 10px;
      align-self: flex-start;
    }

    .toast p {
      margin: unset;
      font-size: 13px;
    }

    .toast.hidden {
      top: 20px;
      opacity: 0;
      height: 0;
      padding: 0;
    }

    toast.type {
      display: flex;
      align-items: center;
      row-gap: 8px;
    }

    toast.opening {
      top: 20px;
    }
  `,
];
