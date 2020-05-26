import React from 'react'

import { CardGroup } from './CardGroup/CardGroup'
import { Card } from './Card/Card'
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
    standardLayout="default"
    header={
      <header className="usa-card__header">
        <h2 className="usa-card__heading">Card</h2>
      </header>
    }
    footer={
      <div className="usa-card__footer">
        <Button type="button" className="usa-button">
          Example Button
        </Button>
      </div>
    }>
    <div className="usa-card__body">
      <p> This is a standard card with a button in the footer. </p>
    </div>
  </Card>
)

const cardWithMedia = (
  <Card
    standardLayout="default"
    header={
      <header className="usa-card__header">
        <h2 className="usa-card__heading">Card With Media</h2>
      </header>
    }
    footer={
      <div className="usa-card__footer">
        <Button type="button" className="usa-button">
          Example Button
        </Button>
      </div>
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

const mediaAndHeaderFirst = (
  <Card
    standardLayout="headerFirst"
    header={
      <header className="usa-card__header">
        <h2 className="usa-card__heading">Media and Header First</h2>
      </header>
    }
    footer={
      <div className="usa-card__footer">
        <Button type="button" className="usa-button">
          Example Button
        </Button>
      </div>
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
    standardLayout="headerFirst"
    header={
      <header className="usa-card__header">
        <h2 className="usa-card__heading">Inset Media</h2>
      </header>
    }
    footer={
      <div className="usa-card__footer">
        <Button type="button" className="usa-button">
          Example Button
        </Button>
      </div>
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
    standardLayout="headerFirst"
    header={
      <header className="usa-card__header">
        <h2 className="usa-card__heading">Exdent Media</h2>
      </header>
    }
    footer={
      <div className="usa-card__footer">
        <Button type="button" className="usa-button">
          Example Button
        </Button>
      </div>
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
        and a button in the footer.{' '}
      </p>
    </div>
  </Card>
)

const flagDefault = (
  <Card
    flagLayout="default"
    header={
      <header className="usa-card__header">
        <h2 className="usa-card__heading">Flag Default</h2>
      </header>
    }
    footer={
      <div className="usa-card__footer">
        <Button type="button" className="usa-button">
          Example Button
        </Button>
      </div>
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
    flagLayout="mediaOnRight"
    header={
      <header className="usa-card__header">
        <h2 className="usa-card__heading">Flag Media on Right</h2>
      </header>
    }
    footer={
      <div className="usa-card__footer">
        <Button type="button" className="usa-button">
          Example Button
        </Button>
      </div>
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
        {' '}
        This is a flag card with media on the right and a button in the footer.{' '}
      </p>
    </div>
  </Card>
)

export const cardExamples = (): React.ReactElement => (
  <>
    <CardGroup>
      {[card, cardWithMedia, mediaAndHeaderFirst, insetMedia, exdentMedia]}
    </CardGroup>
    <CardGroup>{[flagDefault, flagMediaOnRight]}</CardGroup>
  </>
)
