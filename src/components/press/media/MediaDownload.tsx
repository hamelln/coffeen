import * as S from "../Styles";
import { IMedia } from "types/data";

interface Props {
  media: IMedia[];
}

const MediaDownload = ({ media }: Props) => {
  return (
    <S.DownloadBox>
      {media.map(({ _id, link, title }: IMedia) => {
        return (
          <S.DownloadLink
            key={_id}
            href={link}
            target="_blank"
            rel="noreferrer noopener"
          >
            <S.DownloadText>{title}</S.DownloadText>
            <S.DownloadIcon />
          </S.DownloadLink>
        );
      })}
    </S.DownloadBox>
  );
};

export default MediaDownload;
