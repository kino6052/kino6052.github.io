import styled from "styled-components";
import { ELanguage } from "../utils/bridge";
import {
  currentLanguage,
  MOBILE_WIDTH,
  TABLET_WIDTH,
  translations,
  WIDTH,
} from "../utils/utils";

export const ProfilePage = styled(
  (
    props: React.InputHTMLAttributes<HTMLDivElement> & {
      content: typeof translations[string]["profilePage"];
    }
  ) => (
    <section className={props.className}>
      <div className="cover-image"></div>
      <div className="profile-container">
        <div className="profile">
          <div aria-label="profile picture" className="profile-picture"></div>
          <div aria-label="profile description" className="profile-description">
            <h1>{props.content.name}</h1>
            <h2>{props.content.title}</h2>
            <h3>{props.content.subtitle}</h3>
          </div>
        </div>
        <div className="spacer"></div>
        <div aria-label="profile summary" className="profile-summary">
          <p>{props.content.description}</p>
          <div className="spacer"></div>
          <div className="tag-container">
            {props.content.tags.map((tag) => (
              <span className="tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
)`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  @media (max-width: ${WIDTH}px) {
    width: unset;
  }

  .cover-image {
    width: 100%;
    display: flex;
    height: 256px;
    background-image: url(https://wallpaperaccess.com/full/1551429.jpg);
    background-size: cover;
    background-position: center center;
  }

  .profile-container {
    display: flex;
    flex-direction: column;
    width: ${WIDTH}px;
    flex-grow: 1;
    margin: 16px;
    @media (max-width: ${WIDTH}px) {
      width: unset;
    }
    @media (max-width: ${TABLET_WIDTH}px) {
      width: unset;
    }

    .profile {
      display: flex;
      flex-direction: row;
      @media (max-width: ${WIDTH}px) {
        width: unset;
      }
      @media (max-width: ${TABLET_WIDTH}px) {
        width: unset;
        flex-direction: column;
        margin: auto;
      }
      @media (max-width: ${MOBILE_WIDTH}px) {
        flex-direction: column;
        margin: auto;
        width: unset;
      }
      .profile-picture {
        display: flex;
        min-width: 256px;
        width: 256px;
        height: 256px;
        background-color: grey;
        background-image: url(/kirill.png);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        border-radius: 100%;
        border: 8px solid white;
        margin: 8px;
        margin-top: -96px;
        @media (max-width: ${TABLET_WIDTH}px) {
          width: unset;
          margin: auto;
          margin-top: -96px;
        }
      }

      .profile-description {
        display: flex;
        flex-direction: column;
        margin: 8px 8px;

        h1 {
        }

        h2 {
        }

        h3 {
          font-size: 18px;
          color: #aaa;
          font-weight: 400;
        }
      }
    }

    .profile-summary {
      display: flex;
      flex-direction: column;
      margin: 8px;

      .tag-container {
        display: flex;
        margin: 8px 0;
        flex-wrap: wrap;

        .tag {
          &:first-child {
            margin-left: 0;
          }
          display: flex;
          padding: 4px 16px;
          color: white;
          background: #aaa;
          border-radius: 100px;
          margin: 8px;
        }
      }
    }
  }
`;
