import React, { ReactElement, useState } from 'react'
import {
  Banner,
  BannerButton,
  BannerContent,
  BannerFlag,
  BannerGuidance,
  BannerHeader,
  BannerIcon,
  BannerLockImage,
  MediaBlockBody,
} from '../../index'

import flagImg from 'uswds/src/img/us_flag_small.png'
import dotGovIcon from 'uswds/src/img/icon-dot-gov.svg'
import httpsIcon from 'uswds/src/img/icon-https.svg'

const CustomBanner = (): ReactElement => {
  const [isOpen, setIsOpen] = useState(false)

  const lock = <BannerLockImage title="Lock" description="A locked padlock" />

  return (
    <Banner>
      <BannerHeader
        isOpen={isOpen}
        flagImg={<BannerFlag src={flagImg} alt="U.S. flag" />}
        headerText="This is an official website of the state department of something specific"
        headerActionText="Here's how you know">
        <BannerButton
          isOpen={isOpen}
          aria-controls="custom-banner"
          onClick={(): void => {
            setIsOpen((previousIsOpen) => !previousIsOpen)
          }}>
          Here&apos;s how you know
        </BannerButton>
      </BannerHeader>
      <BannerContent id="custom-banner" isOpen={isOpen}>
        <div className="grid-row grid-gap-lg">
          <BannerGuidance className="tablet:grid-col-6">
            <BannerIcon src={dotGovIcon} alt="" />
            <MediaBlockBody>
              <p>
                <strong>Official websites use .gov</strong>
                <br />A <strong>.gov</strong> website belongs to an official
                government organization in the United States.
              </p>
            </MediaBlockBody>
          </BannerGuidance>
          <BannerGuidance className="tablet:grid-col-6">
            <BannerIcon src={httpsIcon} alt="" />
            <MediaBlockBody>
              <p>
                <strong>Secure .gov websites use HTTPS</strong>
                <br />A <strong>lock ( {lock} )</strong> or{' '}
                <strong>https://</strong> means you&apos;ve safely connected to
                the .gov website. Share sensitive information only on official,
                secure websites.
              </p>
            </MediaBlockBody>
          </BannerGuidance>
        </div>
      </BannerContent>
    </Banner>
  )
}

export default {
  title: 'Components/Banner',
  component: CustomBanner,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 2.0 Banner component

Source: https://designsystem.digital.gov/components/banner/
`,
      },
    },
  },
}

export const customBanner = (): React.ReactElement => <CustomBanner />
