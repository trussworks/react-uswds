import React, { ReactElement, useState } from 'react'
import Banner from '../Banner/Banner'
import BannerHeader from '../BannerHeader/BannerHeader'
import BannerFlag from '../BannerFlag/BannerFlag'
import BannerButton from '../BannerButton/BannerButton'
import BannerContent from '../BannerContent/BannerContent'
import BannerGuidance from '../BannerGuidance/BannerGuidance'
import BannerIcon from '../BannerIcon/BannerIcon'
import MediaBlockBody from '../../mediablock/MediaBlockBody/MediaBlockBody'
import { USWDS_IMAGES } from '../../../utils/uswdsImages'
import { Language, TLD, getCopy } from './utils'

export type GovBannerProps = {
  tld?: TLD
  language?: Language
} & JSX.IntrinsicElements['section']

const GovBanner = ({
  tld = '.gov',
  language = 'english',
  className,
  ...sectionProps
}: GovBannerProps): ReactElement => {
  const [isOpen, setIsOpen] = useState(false)

  const {
    header,
    ariaLabel,
    headerAction,
    httpsSectionHeader,
    httpsSectionContent,
    tldSectionHeader,
    tldSectionContent,
  } = getCopy(language, tld)

  return (
    <Banner
      className={className}
      data-testid="govBanner"
      aria-label={ariaLabel}
      {...sectionProps}>
      <BannerHeader
        isOpen={isOpen}
        flagImg={
          <BannerFlag
            src={USWDS_IMAGES.otherImages.UsFlagSmall}
            aria-hidden
            alt=""
          />
        }
        headerText={header}
        headerActionText={headerAction}>
        <BannerButton
          isOpen={isOpen}
          aria-controls="gov-banner"
          onClick={(): void => {
            setIsOpen((previousIsOpen) => !previousIsOpen)
          }}>
          {headerAction}
        </BannerButton>
      </BannerHeader>
      <BannerContent id="gov-banner" isOpen={isOpen}>
        <div className="grid-row grid-gap-lg">
          <BannerGuidance className="tablet:grid-col-6">
            <BannerIcon src={USWDS_IMAGES.otherImages.IconDotGov} alt="" />
            <MediaBlockBody>
              <p>
                <strong>{tldSectionHeader}</strong>
                <br />
                {tldSectionContent}
              </p>
            </MediaBlockBody>
          </BannerGuidance>
          <BannerGuidance className="tablet:grid-col-6">
            <BannerIcon src={USWDS_IMAGES.otherImages.IconHttps} alt="" />
            <MediaBlockBody>
              <p>
                <strong>{httpsSectionHeader}</strong>
                <br />
                {httpsSectionContent}
              </p>
            </MediaBlockBody>
          </BannerGuidance>
        </div>
      </BannerContent>
    </Banner>
  )
}

export default GovBanner
