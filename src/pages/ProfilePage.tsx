import { useEffect } from "react";
import { BehaviorSubject, filter } from "rxjs";
import styled from "styled-components";
import { imageData } from "../data";
import { ELanguage, setState } from "../utils/bridge";
import {
  currentLanguage,
  MOBILE_WIDTH,
  TABLET_WIDTH,
  translations,
  WIDTH,
} from "../utils/utils";

const getImageData = (url: string): Promise<string> =>
  new Promise((res) => {
    const image = new Image();
    image.src = url;
    image.onload = () => {
      res(image.src);
    };
  });

const getProfilePictureElement = () => {
  const el: Element | null = document.querySelector(".profile-picture");
  const classList = el?.getAttribute("class")?.split(" ") || [];
  return {
    el,
    classList,
  };
};

const ImageSubject = new BehaviorSubject("");

enum ProfileImageFileName {
  md = "kirill-md.jpg",
  lg = "kirill-lg.jpg",
  xl = "kirill-lg.png",
}

ImageSubject.pipe(filter((v) => !!v)).subscribe((imageSrc) => {
  setState({
    imageSrc,
  });
});

export const ProfilePage = styled(
  (
    props: React.InputHTMLAttributes<HTMLDivElement> & {
      content: typeof translations[string]["profilePage"];
      imageSrc?: string;
    }
  ) => {
    useEffect(() => {
      ImageSubject.next("");
      getImageData("/kirill-md.jpg").then((src) => {
        ImageSubject.next(src);
      });
      getImageData("/kirill-lg.jpg").then((src) => {
        ImageSubject.next(src);
      });
      getImageData("/kirill-lg.png").then((src) => {
        ImageSubject.next(src);
      });
    }, []);
    return (
      <section className={props.className}>
        <div className="cover-image"></div>
        <div className="profile-container">
          <div className="profile">
            <div className="picture-overlay">
              <div
                aria-label="profile picture"
                className="profile-picture"
                style={{
                  backgroundImage: `url(${props.imageSrc || imageData})`,
                  ...(props.imageSrc && { filter: "none" }),
                }}
              ></div>
            </div>
            <div className="spacer"></div>
            <div
              aria-label="profile description"
              className="profile-description"
            >
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
    );
  }
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
    background-image: url(/background.svg);
    background-size: cover;
    background-position: center center;
    background-color: #67417e;

    @media print {
      display: none;
      height: 0;
    }
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
      @media print {
        margin: 0;
      }

      .picture-overlay {
        display: flex;
        min-width: 256px;
        width: 256px;
        height: 256px;
        border-radius: 100%;
        border: 8px solid white;
        margin-top: -96px;
        overflow: hidden;

        @media print {
          display: none;
        }

        @media (max-width: ${TABLET_WIDTH}px) {
          margin: auto;
          margin-top: -96px;
        }

        & .profile-picture {
          transition: all 0.1s;
          display: flex;
          width: 100%;
          height: 100%;
          filter: blur(5px);
          background-color: grey;
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center center;
        }
      }

      .profile-description {
        display: flex;
        flex-direction: column;

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

      .tag-container {
        display: flex;
        margin: 8px 0;
        flex-wrap: wrap;
        gap: 8px;

        @media print {
          margin: 0;
        }

        .tag {
          display: flex;
          padding: 4px 16px;
          color: white;
          background: #aaa;
          border-radius: 100px;

          @media print {
            margin: 0;
            padding: 0;
            color: #333;
            &:not(:last-child) {
              margin: 0;
              &::after {
                content: ", ";
              }
            }
          }
        }
      }
    }
  }
`;
