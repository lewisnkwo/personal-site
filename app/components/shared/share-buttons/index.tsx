import {
  EmailIcon,
  EmailShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";

interface Props {
  heading: string;
  shareTitle: string;
  shareSubtitle?: string;
  shareUrl: string;
  fillColor: string;
}

const ShareButtons = ({
  heading,
  shareTitle,
  shareSubtitle,
  shareUrl,
  fillColor,
}: Props) => {
  const shareIconProps = {
    size: 40,
    round: false,
    borderRadius: 8,
    bgStyle: { fill: fillColor },
  };

  return (
    <div className="ShareButtons">
      <h4>{heading}</h4>
      <div className="ShareButtons__actions">
        <TwitterShareButton title={shareTitle} url={shareUrl}>
          <TwitterIcon {...shareIconProps} />
        </TwitterShareButton>
        <LinkedinShareButton
          title={shareTitle}
          url={shareUrl}
          summary={shareSubtitle}
          source="lewisnkwo.com"
        >
          <LinkedinIcon {...shareIconProps} />
        </LinkedinShareButton>
        <EmailShareButton
          title={shareTitle}
          url={shareUrl}
          subject={shareTitle}
          body="Have a look at this post from Lewis Nkwo"
        >
          <EmailIcon {...shareIconProps} />
        </EmailShareButton>
      </div>
    </div>
  );
};

export default ShareButtons;
