import React from "react";
import styled from "styled-components";
import { Ids } from "../utils/bridge";
import { EventWrapper } from "../utils/EventWrapper";
import { WIDTH } from "../utils/utils";

export interface ICard {
  id?: string;
  title: string;
  subtitle?: string;
  imageUrl?: string;
  description?: string;
  url?: string;
  shouldStay?: boolean;
}

export const CardContainer = styled(
  (props: React.InputHTMLAttributes<HTMLDivElement> & { cards: ICard[] }) => (
    <>
      <div className={`${props.className} card-container`}>
        {props.cards.map((card) => {
          const Wrapper = card.shouldStay ? EventWrapper : React.Fragment;
          const props = (
            card.shouldStay ? { id: `${Ids.RouteChange}`, value: card.url } : {}
          ) as React.ComponentProps<typeof EventWrapper>;
          return (
            <Wrapper {...props}>
              <a
                className="card"
                href={card.url}
                target={card.shouldStay ? "_self" : "_blank"}
                rel="noreferrer"
              >
                <div
                  className="card-image"
                  style={{
                    backgroundImage: `url(${card.imageUrl})`,
                  }}
                ></div>
                <h1>{card.title}</h1>
                <h2>{card.subtitle}</h2>
                <p>{card.description}</p>
              </a>
            </Wrapper>
          );
        })}
      </div>
    </>
  )
)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
  padding: 8px;

  @media (max-width: ${WIDTH}px) {
    grid-template-columns: repeat(1, 1fr);
  }

  .card {
    display: flex;
    flex-direction: column;
    box-shadow: #ccc 0 0 4px, #ddd 0 2px 2px;
    border-radius: 2px;
    padding: 16px;
    height: 256px;
    text-decoration: none;
    :hover {
      transform: scale(1.02);
      transition: all 0.1s;
    }
    .card-image {
      display: flex;
      width: 100%;
      flex-grow: 1;
      box-sizing: border-box;
      margin-bottom: 8px;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      border: 1px solid #ddd;
      color: transparent;
    }
    h1 {
      font-size: 24px;
      line-height: 32px;
    }
    h2 {
      font-size: 18px;
      line-height: 24px;
    }
  }
`;
