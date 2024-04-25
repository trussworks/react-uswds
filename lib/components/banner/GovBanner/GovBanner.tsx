import React, { ReactElement, useState } from 'react'
import Banner, { BannerProps } from '../Banner/Banner.js'
import BannerHeader from '../BannerHeader/BannerHeader.js'
import BannerFlag from '../BannerFlag/BannerFlag.js'
import BannerButton from '../BannerButton/BannerButton.js'
import BannerContent from '../BannerContent/BannerContent.js'
import BannerGuidance from '../BannerGuidance/BannerGuidance.js'
import BannerIcon from '../BannerIcon/BannerIcon.js'
import MediaBlockBody from '../../mediablock/MediaBlockBody/MediaBlockBody.js'
import { Language, TLD, getCopy } from './utils.js'
import Grid from '../../grid/Grid/Grid.js'

// assets
import flagImg from '@uswds/uswds/img/us_flag_small.png'
import dotGovIcon from '@uswds/uswds/img/icon-dot-gov.svg'
import httpsIcon from '@uswds/uswds/img/icon-https.svg'

export type GovBannerProps = {
  tld?: TLD
  language?: Language
} & BannerProps

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
        flagImg={<BannerFlag src={flagImg} aria-hidden alt="" />}
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
        <Grid row gap="lg">
          <BannerGuidance className="tablet:grid-col-6">
            <BannerIcon src={dotGovIcon} alt="" />
            <MediaBlockBody>
              <p>
                <strong>{tldSectionHeader}</strong>
                <br />
                {tldSectionContent}
              </p>
            </MediaBlockBody>
          </BannerGuidance>
          <BannerGuidance className="tablet:grid-col-6">
            <BannerIcon src={httpsIcon} alt="" />
            <MediaBlockBody>
              <p>
                <strong>{httpsSectionHeader}</strong>
                <br />
                {httpsSectionContent}
              </p>
            </MediaBlockBody>
          </BannerGuidance>
        </Grid>
      </BannerContent>
    </Banner>
  )
}

export default GovBanner
