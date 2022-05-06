import React from "react";
import styled from "styled-components";

export const Image = styled(
  (props: React.InputHTMLAttributes<HTMLDivElement> & { caption: string }) => (
    <>
      <img src={props.src} />
      <span>{props.caption}</span>
    </>
  )
)`
    .image {

    }

    .caption
`;
