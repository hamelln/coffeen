import styled from 'styled-components';

const MobileView = styled.div`
  display: none;
  @media screen and (max-width: 740px) {
    display: block;
  }
`;

const DownloadBox = styled.div`
  display: flex;
  margin-top: 30px;

  @media screen and (max-width: 740px) {
    flex-direction: column;
    margin-top: 10px;
  }
`;

const DownloadLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 190px;
  padding: 18px 15px;
  border: 1px solid rgb(239, 239, 239);
  border-radius: 4px;
  background: rgb(255, 255, 255);

  :not(:first-child) {
    margin-left: 10px;
  }

  @media screen and (max-width: 740px) {
    border-radius: 0px;

    :not(:first-child) {
      margin-left: 0px;
      margin-top: 8px;
    }
  }
`;

const DownloadText = styled.span`
  flex-shrink: 0;
  color: rgb(51, 51, 51);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

const DownloadIcon = styled.span`
  width: 24px;
  height: 24px;
  margin-left: 24px;
  background: url('/images/icons/download.svg') center center / contain
    no-repeat;
`;
export { MobileView, DownloadBox, DownloadIcon, DownloadLink, DownloadText };
