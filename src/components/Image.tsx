import React from "react";
import styled from "styled-components";

export const Image = styled(
  ({
    caption,
    className,
    src,
    ...rest
  }: React.ImgHTMLAttributes<unknown> & { caption: string }) => (
    <div className={className}>
      <img src={src} {...rest} />
      <span className="caption">{caption}</span>
    </div>
  )
)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  .image {
  }

  .caption {
    font-size: 16px;
    font-style: italic;
    color: grey;
  }
`;
