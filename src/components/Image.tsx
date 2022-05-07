import React from "react";
import styled from "styled-components";

export const Image = styled(
  ({
    caption,
    className,
    src,
    isFullWidth,
    ...rest
  }: React.ImgHTMLAttributes<unknown> & {
    caption: string;
    isFullWidth?: boolean;
  }) => (
    <div className={`${className} ${isFullWidth ? "full-width" : ""}`}>
      <img className={`image`} src={src} {...rest} />
      <span className="caption">{caption}</span>
    </div>
  )
)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  max-width: 100%;
  padding: 8px;

  &.full-width {
    width: 100%;
  }

  .image {
    display: flex;
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    box-shadow: #ccc 0 0 4px, #ddd 0 2px 2px;
    margin-bottom: 8px;

    &.full-width {
      width: ;
    }
  }

  .caption {
    font-size: 16px;
    font-style: italic;
    color: grey;
  }
`;
