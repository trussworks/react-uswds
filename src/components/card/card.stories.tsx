import React from 'react'

import { CardGroup } from './CardGroup/CardGroup'
import { Card } from './Card/Card'
import { CardHeader } from './CardHeader/CardHeader'
import { CardFooter } from './CardFooter/CardFooter'
import { Button } from '../Button/Button'

export default {
  title: 'Card',
  parameters: {
    info: `
USWDS 2.0 Card components

Source: https://designsystem.digital.gov/components/card/
`,
  },
}

const card = (
  <Card
    className="tablet:grid-col-4"
    layout="standardDefault"
    header={
      <CardHeader>
        <h2 className="usa-card__heading">Card</h2>
      </CardHeader>
    }
    footer={
      <CardFooter>
        <Button type="button" className="usa-button">
          Example Button
        </Button>
      </CardFooter>
    }>
    <div className="usa-card__body">
      <p> This is a standard card with a button in the footer. </p>
    </div>
  </Card>
)

const cardWithMedia = (
  <Card
    className="tablet:grid-col-4"
    layout="standardDefault"
    header={
      <CardHeader>
        <h2 className="usa-card__heading">Card With Media</h2>
      </CardHeader>
    }
    footer={
      <CardFooter>
        <Button type="button" className="usa-button">
          Example Button
        </Button>
      </CardFooter>
    }
    media={
      <div className="usa-card__media">
        <div className="usa-card__img">
          {/* Are we allowed to use this image? */}
          <img
            src="https://images.unsplash.com/photo-1579800070193-abe62433f737?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=610&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            alt="A placeholder"
          />
        </div>
      </div>
    }>
    <div className="usa-card__body">
      <p> This is a standard card with media and a button in the footer. </p>
    </div>
  </Card>
)

const mediaWithSetAspectRatio = (
  <Card
    className="tablet:grid-col-4"
    layout="standardDefault"
    header={
      <CardHeader>
        <h2 className="usa-card__heading">Media with Set Aspect Ratio</h2>
      </CardHeader>
    }
    footer={
      <CardFooter>
        <Button type="button" className="usa-button">
          Example Button
        </Button>
      </CardFooter>
    }
    media={
      <div className="usa-card__media usa-card__media--set-aspect.add-aspect-1x1">
        <div className="usa-card__img">
          {/* Are we allowed to use this image? */}
          <img
            src="https://images.unsplash.com/photo-1579800070193-abe62433f737?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=610&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            alt="A placeholder"
          />
        </div>
      </div>
    }>
    <div className="usa-card__body">
      <p>
        {' '}
        This is a standard card with media at a set aspect ratio of 1X1 and a
        button in the footer.{' '}
      </p>
    </div>
  </Card>
)

const mediaAndHeaderFirst = (
  <Card
    className="tablet:grid-col-4"
    layout="headerFirst"
    header={
      <CardHeader>
        <h2 className="usa-card__heading">Media and Header First</h2>
      </CardHeader>
    }
    footer={
      <CardFooter>
        <Button type="button" className="usa-button">
          Example Button
        </Button>
      </CardFooter>
    }
    media={
      <div className="usa-card__media">
        <div className="usa-card__img">
          {/* Are we allowed to use this image? */}
          <img
            src="https://images.unsplash.com/photo-1579800070193-abe62433f737?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=610&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            alt="A placeholder"
          />
        </div>
      </div>
    }>
    <div className="usa-card__body">
      <p>
        {' '}
        This is a standard card with the header and media first and a button in
        the footer.{' '}
      </p>
    </div>
  </Card>
)

const insetMedia = (
  <Card
    className="tablet:grid-col-4"
    layout="headerFirst"
    header={
      <CardHeader>
        <h2 className="usa-card__heading">Inset Media</h2>
      </CardHeader>
    }
    footer={
      <CardFooter>
        <Button type="button" className="usa-button">
          Example Button
        </Button>
      </CardFooter>
    }
    media={
      <div className="usa-card__media usa-card__media--inset">
        <div className="usa-card__img">
          {/* Are we allowed to use this image? */}
          <img
            src="https://images.unsplash.com/photo-1579800070193-abe62433f737?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=610&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            alt="A placeholder"
          />
        </div>
      </div>
    }>
    <div className="usa-card__body">
      <p>
        {' '}
        This is a standard card with the header and media first, inset media,
        and a button in the footer.{' '}
      </p>
    </div>
  </Card>
)

const exdentMedia = (
  <Card
    className="tablet:grid-col-4"
    layout="headerFirst"
    header={
      <CardHeader>
        <h2 className="usa-card__heading">Exdent Media</h2>
      </CardHeader>
    }
    footer={
      <CardFooter>
        <Button type="button" className="usa-button">
          Example Button
        </Button>
      </CardFooter>
    }
    media={
      <div className="usa-card__media usa-card__media--exdent">
        <div className="usa-card__img">
          {/* Are we allowed to use this image? */}
          <img
            src="https://images.unsplash.com/photo-1579800070193-abe62433f737?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=610&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            alt="A placeholder"
          />
        </div>
      </div>
    }>
    <div className="usa-card__body">
      <p>
        This is a standard card with the header and media first, exdent media,
        and a button in the footer.
      </p>
    </div>
  </Card>
)

const exdentCard = (
  <Card
    className="tablet:grid-col-4"
    layout="headerFirst"
    header={
      <CardHeader className="usa-card__header--exdent">
        <h2 className="usa-card__heading">Exdent Card</h2>
      </CardHeader>
    }
    footer={
      <CardFooter className="usa-card__footer--exdent">
        <Button type="button" className="usa-button">
          Example Button
        </Button>
      </CardFooter>
    }
    media={
      <div className="usa-card__media usa-card__media--exdent">
        <div className="usa-card__img">
          {/* Are we allowed to use this image? */}
          <img
            src="https://images.unsplash.com/photo-1579800070193-abe62433f737?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=610&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            alt="A placeholder"
          />
        </div>
      </div>
    }>
    <div className="usa-card__body usa-card__body--exdent">
      <p>
        This is a standard card with the header and media first, media, and a
        button in the footer. All of which are exdent style.
      </p>
    </div>
  </Card>
)

const flagDefault = (
  <Card
    className="tablet:grid-col-4"
    layout="standardDefault"
    header={
      <CardHeader>
        <h2 className="usa-card__heading">Flag standardDefault</h2>
      </CardHeader>
    }
    footer={
      <CardFooter>
        <Button type="button" className="usa-button">
          Example Button
        </Button>
      </CardFooter>
    }
    media={
      <div className="usa-card__media usa-card__media--exdent">
        <div className="usa-card__img">
          {/* Are we allowed to use this image? */}
          <img
            src="https://images.unsplash.com/photo-1579800070193-abe62433f737?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=610&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            alt="A placeholder"
          />
        </div>
      </div>
    }>
    <div className="usa-card__body">
      <p> This is a flag card with a button in the footer. </p>
    </div>
  </Card>
)

const flagMediaOnRight = (
  <Card
    className="tablet:grid-col-4"
    layout="flagMediaRight"
    header={
      <CardHeader>
        <h2 className="usa-card__heading">Flag Media on Right</h2>
      </CardHeader>
    }
    footer={
      <CardFooter>
        <Button type="button" className="usa-button">
          Example Button
        </Button>
      </CardFooter>
    }
    media={
      <div className="usa-card__media usa-card__media--exdent">
        <div className="usa-card__img">
          {/* Are we allowed to use this image? */}
          <img
            src="https://images.unsplash.com/photo-1579800070193-abe62433f737?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=610&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            alt="A placeholder"
          />
        </div>
      </div>
    }>
    <div className="usa-card__body">
      <p>
        This is a flag card with media on the right and a button in the footer.
      </p>
    </div>
  </Card>
)

export const cardExamples = (): React.ReactElement => (
  <>
    <CardGroup>
      {[
        card,
        cardWithMedia,
        mediaWithSetAspectRatio,
        mediaAndHeaderFirst,
        insetMedia,
        exdentMedia,
        exdentCard,
      ]}
    </CardGroup>
    <CardGroup>{[flagDefault, flagMediaOnRight]}</CardGroup>
  </>
)
