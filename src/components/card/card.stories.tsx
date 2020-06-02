import React from 'react'

import { CardGroup } from './CardGroup/CardGroup'
import { Card } from './Card/Card'
import { CardHeader } from './CardHeader/CardHeader'
import { CardFooter } from './CardFooter/CardFooter'
import { CardBody } from './CardBody/CardBody'
import { CardMedia } from './CardMedia/CardMedia'
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
  <Card gridLayout={{ tablet: { col: 6 } }} layout="standardDefault">
    <CardHeader>
      <h2 className="usa-card__heading">Card</h2>
    </CardHeader>
    <CardBody>
      <p> This is a standard card with a button in the footer. </p>
    </CardBody>
    <CardFooter>
      <Button type="button" className="usa-button">
        Example Button
      </Button>
    </CardFooter>
  </Card>
)

const cardWithMedia = (
  <Card gridLayout={{ tablet: { col: 6 } }} layout="standardDefault">
    <CardHeader>
      <h2 className="usa-card__heading">Card With Media</h2>
    </CardHeader>
    <CardMedia>
      <img
        src="https://images.unsplash.com/photo-1484100356142-db6ab6244067?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=962&q=80"
        alt="A placeholder"
      />
    </CardMedia>
    <CardBody>
      <p> This is a standard card with media and a button in the footer. </p>
    </CardBody>
    <CardFooter>
      <Button type="button" className="usa-button">
        Example Button
      </Button>
    </CardFooter>
  </Card>
)

const mediaWithSetAspectRatio = (
  <Card gridLayout={{ tablet: { col: 4 } }} layout="standardDefault">
    <CardHeader>
      <h2 className="usa-card__heading">Media with Set Aspect Ratio</h2>
    </CardHeader>
    <CardMedia imageClass="add-aspect-3x1">
      <img
        src="https://images.unsplash.com/photo-1484100356142-db6ab6244067?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=962&q=80"
        alt="A placeholder"
      />
    </CardMedia>
    <CardBody>
      <p>
        {' '}
        This is a standard card with media at a set aspect ratio of 3X1 and a
        button in the footer.{' '}
      </p>
    </CardBody>
    <CardFooter>
      <Button type="button" className="usa-button">
        Example Button
      </Button>
    </CardFooter>
  </Card>
)

const mediaAndHeaderFirst = (
  <Card gridLayout={{ tablet: { col: 4 } }} layout="headerFirst">
    <CardHeader>
      <h2 className="usa-card__heading">Media and Header First</h2>
    </CardHeader>
    <CardMedia>
      <img
        src="https://images.unsplash.com/photo-1484100356142-db6ab6244067?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=962&q=80"
        alt="A placeholder"
      />
    </CardMedia>
    <CardBody>
      <p>
        {' '}
        This is a standard card with the header and media first and a button in
        the footer.{' '}
      </p>
    </CardBody>
    <CardFooter>
      <Button type="button" className="usa-button">
        Example Button
      </Button>
    </CardFooter>
  </Card>
)

const insetMedia = (
  <Card gridLayout={{ tablet: { col: 4 } }} layout="headerFirst">
    <CardHeader>
      <h2 className="usa-card__heading">Inset Media</h2>
    </CardHeader>
    <CardBody>
      <img
        src="https://images.unsplash.com/photo-1484100356142-db6ab6244067?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=962&q=80"
        alt="A placeholder"
      />
    </CardBody>
    <CardBody>
      <p>
        {' '}
        This is a standard card with the header and media first, inset media,
        and a button in the footer.{' '}
      </p>
    </CardBody>
    <CardFooter>
      <Button type="button" className="usa-button">
        Example Button
      </Button>
    </CardFooter>
  </Card>
)

// TODO UPdate with ed
const exdentMedia = (
  <Card gridLayout={{ tablet: { col: 4 } }} layout="headerFirst">
    <CardHeader>
      <h2 className="usa-card__heading">Exdent Media</h2>
    </CardHeader>
    <CardMedia exdent={true}>
      <img
        src="https://images.unsplash.com/photo-1484100356142-db6ab6244067?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=962&q=80"
        alt="A placeholder"
      />
    </CardMedia>
    <CardBody>
      <p>
        This is a standard card with the header and media first, exdent media,
        and a button in the footer.
      </p>
    </CardBody>
    <CardFooter>
      <Button type="button" className="usa-button">
        Example Button
      </Button>
    </CardFooter>
  </Card>
)

const exdentCard = (
  <Card gridLayout={{ tablet: { col: 4 } }} layout="headerFirst">
    <CardHeader exdent={true}>
      <h2 className="usa-card__heading">Exdent Card</h2>
    </CardHeader>
    <CardMedia exdent={true}>
      <img
        src="https://images.unsplash.com/photo-1484100356142-db6ab6244067?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=962&q=80"
        alt="A placeholder"
      />
    </CardMedia>
    <CardBody exdent={true}>
      <p>
        This is a standard card with the header and media first, media, and a
        button in the footer. All of which are exdent style.
      </p>
    </CardBody>
    <CardFooter exdent={true}>
      <Button type="button" className="usa-button">
        Example Button
      </Button>
    </CardFooter>
  </Card>
)

const flagDefault = (
  <Card gridLayout={{ tablet: { col: 6 } }} layout="flagDefault">
    <CardHeader>
      <h2 className="usa-card__heading">Flag standardDefault</h2>
    </CardHeader>
    <CardMedia>
      <img
        src="https://images.unsplash.com/photo-1484100356142-db6ab6244067?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=962&q=80"
        alt="A placeholder"
      />
    </CardMedia>
    <CardBody>
      <p> This is a flag card with a button in the footer. </p>
    </CardBody>
    <CardFooter>
      <Button type="button" className="usa-button">
        Example Button
      </Button>
    </CardFooter>
  </Card>
)

const flagMediaOnRight = (
  <Card gridLayout={{ tablet: { col: 6 } }} layout="flagMediaRight">
    <CardHeader>
      <h2 className="usa-card__heading">Flag Media on Right</h2>
    </CardHeader>
    <CardMedia>
      <img
        src="https://images.unsplash.com/photo-1484100356142-db6ab6244067?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=962&q=80"
        alt="A placeholder"
      />
    </CardMedia>
    <CardBody>
      <p>
        This is a flag card with media on the right and a button in the footer.
      </p>
    </CardBody>
    <CardFooter>
      <Button type="button" className="usa-button">
        Example Button
      </Button>
    </CardFooter>
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
