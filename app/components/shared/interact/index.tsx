import {
  EmailIcon,
  EmailShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

interface Props {
  heading: string;
  shareTitle: string;
  shareSubtitle?: string;
  shareUrl: string;
  fillColor: string;
}

const Interact = ({
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
    <div className="Interact">
      <h4>{heading}</h4>
      <div className="Interact__actions">
        <div className="Interact__buttons">
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
          <WhatsappShareButton title={shareTitle} url={shareUrl}>
            <WhatsappIcon {...shareIconProps} />
          </WhatsappShareButton>
        </div>
      </div>
    </div>
  );
};

export default Interact;
