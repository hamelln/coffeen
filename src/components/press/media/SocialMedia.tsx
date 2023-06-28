import styled from "styled-components";
import { ISocialMedia } from "types/data";
import SocialMediaList from "./SocialMediaList";

interface IProps {
  socialMedia: ISocialMedia[];
}

const SocialMedia = ({ socialMedia }: IProps) => {
  return (
    <MediaSocialLayout>
      <SocialTitle>커피 초보가 참고하기 좋은 곳</SocialTitle>
      <SocialDesciption>커피에 관한 각종 정보와 이야기</SocialDesciption>
      <SocialMediaList socialMedia={socialMedia} />
    </MediaSocialLayout>
  );
};

export default SocialMedia;

const MediaSocialLayout = styled.section`
  margin-top: 175px;
  padding-bottom: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 740px) {
    margin-top: 50px;
    padding: 0px 10px 120px;
  }
`;

const SocialTitle = styled.p`
  font-size: 40px;
  font-weight: 700;
  line-height: 1.5;
  text-align: center;
  overflow-wrap: break-word;
  color: rgb(51, 51, 51);

  @media screen and (max-width: 740px) {
    max-width: 300px;
    font-size: 34px;
    line-height: 1.3;
  }
`;

const SocialDesciption = styled.p`
  width: 100%;
  margin: 16px 0px 69px;
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
  word-break: keep-all;
  overflow-wrap: break-word;
  color: rgb(51, 51, 51);

  @media screen and (max-width: 740px) {
    margin: 14px 0px 20px;
    font-size: 12px;

    > br,
    > br::after {
      content: " ";
    }
  }
`;
