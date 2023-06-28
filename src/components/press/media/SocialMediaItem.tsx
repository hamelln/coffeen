import styled from "styled-components";
import { ISocialMedia } from "types/data";

const SocialMediaItem = ({ link, img, text }: ISocialMedia) => {
  return (
    <SocialItemLayout>
      <SocialLink href={link} target="_blank" rel="noreferrer noopener">
        <SocialImg src={img} />
        <SocialText>{text}</SocialText>
      </SocialLink>
    </SocialItemLayout>
  );
};

export default SocialMediaItem;

const SocialItemLayout = styled.li`
  margin-left: 44px;

  :first-child {
    margin-left: 0px;
  }

  @media screen and (max-width: 740px) {
    margin-left: 21.35px;
  }
`;

const SocialLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SocialImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

const SocialText = styled.p`
  margin-top: 10px;
  color: rgb(51, 51, 51);
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;

  @media screen and (max-width: 740px) {
    display: none;
  }
`;
