import React, { type JSX, useState } from 'react'
import { Icon } from '../Icon/Icons'
import {
  Banner,
  BannerButton,
  BannerContent,
  BannerFlag,
  BannerGuidance,
  BannerHeader,
  BannerIcon,
  MediaBlockBody,
} from '../../index'

import flagImg from '@uswds/uswds/img/us_flag_small.png'
import dotGovIcon from '@uswds/uswds/img/icon-dot-gov.svg'
import httpsIcon from '@uswds/uswds/img/icon-https.svg'

export const CustomBanner = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Banner aria-label="Official website of the state department of something specific">
      <BannerHeader
        isOpen={isOpen}
        flagImg={<BannerFlag src={flagImg} aria-hidden alt="" />}
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
                <br />A{' '}
                <strong>
                  lock (<Icon.Lock aria-label="Locked padlock icon" />)
                </strong>{' '}
                or <strong>https://</strong> means you&apos;ve safely connected
                to the .gov website. Share sensitive information only on
                official, secure websites.
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
### USWDS 3.0 Banner component

Source: https://designsystem.digital.gov/components/banner/
`,
      },
    },
  },
}
