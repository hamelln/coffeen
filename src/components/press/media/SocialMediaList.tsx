import styled from "styled-components";
import { ISocialMedia } from "types/data";
import SocialMediaItem from "./SocialMediaItem";

interface IProps {
  socialMedia: ISocialMedia[];
}

const SocialMediaList = ({ socialMedia }: IProps) => {
  return (
    <SocialMediaListLayout>
      {socialMedia.map(({ _id, img, link, text }: ISocialMedia) => {
        return (
          <SocialMediaItem
            key={_id}
            _id={_id}
            link={link}
            img={img}
            text={text}
          />
        );
      })}
    </SocialMediaListLayout>
  );
};

export default SocialMediaList;

const SocialMediaListLayout = styled.ul`
  justify-content: space-between;
  display: flex;
`;
