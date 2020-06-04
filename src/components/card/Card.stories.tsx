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
  <Card gridLayout={{ tablet: { col: 6 } }}>
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
  <Card gridLayout={{ tablet: { col: 6 } }}>
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
  <Card gridLayout={{ tablet: { col: 6 } }}>
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
        This is a standard card with media at a set aspect ratio of 3X1 and a
        button in the footer.
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
  <Card gridLayout={{ tablet: { col: 6 } }} headerFirst>
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
        This is a standard card with the header and media first and a button in
        the footer.
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
  <Card gridLayout={{ tablet: { col: 6 } }} headerFirst>
    <CardHeader>
      <h2 className="usa-card__heading">Inset Media</h2>
    </CardHeader>
    <CardMedia inset>
      <img
        src="https://images.unsplash.com/photo-1484100356142-db6ab6244067?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=962&q=80"
        alt="A placeholder"
      />
    </CardMedia>
    <CardBody>
      <p>
        This is a standard card with the header and media first, inset media,
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

const exdentMedia = (
  <Card gridLayout={{ tablet: { col: 6 } }} headerFirst>
    <CardHeader>
      <h2 className="usa-card__heading">Exdent Media</h2>
    </CardHeader>
    <CardMedia exdent>
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
  <Card gridLayout={{ tablet: { col: 6 } }} headerFirst>
    <CardHeader exdent>
      <h2 className="usa-card__heading">Exdent Card</h2>
    </CardHeader>
    <CardMedia exdent>
      <img
        src="https://images.unsplash.com/photo-1484100356142-db6ab6244067?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=962&q=80"
        alt="A placeholder"
      />
    </CardMedia>
    <CardBody exdent>
      <p>
        This is a standard card with the header and media first, media, and a
        button in the footer. All of which are exdent style.
      </p>
    </CardBody>
    <CardFooter exdent>
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
  <Card gridLayout={{ tablet: { col: 6 } }} layout="flagMediaRight" headerFirst>
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

export const cardTest = (): React.ReactElement => (
  <CardGroup>
    <Card
      headerFirst
      gridLayout={{ tablet: { col: 6 } }}
      containerProps={{ className: 'border-ink' }}>
      <CardHeader className="bg-base-lightest">
        <h3 className="usa-card__heading">He had a little small bull pup</h3>
        <p className="font-sans-6 text-primary">
          To look at him you’d think he wan’s worth a cent.
        </p>
      </CardHeader>
      <CardMedia imageClass="add-aspect-16x9">
        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
        <img
          src="https://source.unsplash.com/featured/800x800/daily?cities"
          alt="An image's description"
          className="pin-all"
        />
      </CardMedia>
      <CardBody className="padding-top-3">
        <p>
          His underjaw’d begin to stick out like the fo’castle of a steamboat,
          and his teeth would uncover, and shine savage like the furnaces.
        </p>
        <p>
          And a dog might tackle him, and bully-rag him, and bite him, and throw
          him over his shoulder two or three times, and Andrew Jackson which was
          the name of the pup, Andrew Jackson would never let on but what he was
          satisfied.
        </p>
      </CardBody>
      <CardFooter>
        <Button type="button" secondary>
          Stick out
        </Button>
      </CardFooter>
    </Card>

    <Card gridLayout={{ tablet: { col: 6 } }}>
      <CardHeader>
        <h3 className="usa-card__heading">
          There was a feller here once by the name of Jim Smiley
        </h3>
      </CardHeader>
      <CardBody>
        <p>
          In the winter of ’49 or may be it was the spring of ’50 I don’t
          recollect exactly, somehow, though what makes me think it was one or
          the other is because I remember the big flume wasn’t finished when he
          first came to the camp:
        </p>
        <ol className="usa-list">
          <li>
            But any way, he was the curiosest man about always betting on any
            thing that turned up
          </li>
          <li>
            If he could get anybody to bet on the other side; and if he
            couldn’t, he’d change sides.
          </li>
          <li>
            Any way that suited the other man would suit him any way just so’s
            he got a bet, he was satisfied.
          </li>
          <li>
            But still he was lucky, uncommon lucky; he most always come out
            winner.
          </li>
        </ol>
      </CardBody>
      <CardFooter>
        <Button type="button">Help the less fortunate</Button>
      </CardFooter>
    </Card>

    <Card layout="flagDefault" headerFirst gridLayout={{ tablet: { col: 12 } }}>
      <CardHeader>
        <h3 className="usa-card__heading">I hereunto append the result</h3>
      </CardHeader>
      <CardMedia exdent>
        <img
          src="https://source.unsplash.com/featured/800x450/daily?patterns"
          alt=""
        />
      </CardMedia>
      <CardBody>
        <p>
          He roused up and gave me good-day. I told him a friend of mine had
          commissioned me to make some inquiries about a cherished companion of
          his boyhood named Leonidas W. Smiley.
        </p>
      </CardBody>
      <CardFooter>
        <Button type="button">Make some inquiries</Button>
      </CardFooter>
    </Card>

    <Card
      layout="flagMediaRight"
      gridLayout={{ tablet: { col: 12 } }}
      containerProps={{ className: 'border-primary-vivid' }}>
      <CardHeader>
        <h3 className="usa-card__heading">My friend’s friend</h3>
      </CardHeader>
      <CardMedia
        className="flex-align-center"
        imageClass="circle-card margin-x-auto">
        <img
          src="https://source.unsplash.com/featured/450x600/daily?human"
          alt=""
        />
      </CardMedia>
      <CardBody>
        <p>
          He roused up and gave me good-day. I told him a friend of mine had
          commissioned me to make some inquiries about a cherished companion of
          his boyhood named Leonidas W. Smiley.
        </p>
      </CardBody>
      <CardFooter>
        <Button type="button" outline>
          Give me good-day
        </Button>
      </CardFooter>
    </Card>

    <Card headerFirst gridLayout={{ tablet: { col: 6 }, desktop: { col: 4 } }}>
      <CardHeader>
        <h3 className="usa-card__heading">
          If that was the design, it certainly succeeded
        </h3>
      </CardHeader>
      <CardMedia exdent className="usa-card__media--fix-aspect add-aspect-1x1">
        <img
          src="https://source.unsplash.com/featured/450x600/daily?people"
          alt=""
        />
      </CardMedia>
      <CardBody>
        <p>
          He roused up and gave me good-day. I told him a friend of mine had
          commissioned me to make some inquiries about a cherished companion of
          his boyhood named Leonidas W. Smiley.
        </p>
      </CardBody>
      <CardFooter>
        <Button type="button">Rouse Simon</Button>
      </CardFooter>
    </Card>

    <Card
      headerFirst
      gridLayout={{ tablet: { col: 6 }, desktop: { col: 'fill' } }}
      containerProps={{ className: 'bg-base-lightest border-0' }}>
      <CardHeader>
        <h3 className="usa-card__heading">Garrulous old Simon Wheeler</h3>
        <p className="font-sans-6 text-primary margin-top-1">
          I hereunto append the result.
        </p>
      </CardHeader>
      <CardMedia className="usa-card__media--fix-aspect" aria-hidden="true">
        <img
          src="https://source.unsplash.com/featured/800x450/daily?architecture"
          alt=""
        />
      </CardMedia>
      <CardBody>
        <p>
          <em>This card has aria-hidden on the image container.</em>
        </p>
        <p>
          I found Simon Wheeler dozing comfortably by the bar-room stove of the
          old, dilapidated tavern in the ancient mining camp of Angel’s, and I
          noticed that he was fat and bald-headed, and had an expression of
          winning gentleness and simplicity upon his tranquil countenance.
        </p>
      </CardBody>
      <CardFooter>
        <Button type="button">Express gentleness</Button>
      </CardFooter>
    </Card>

    <Card
      gridLayout={{ tablet: { col: 4 } }}
      containerProps={{ className: 'border-ink' }}>
      <CardHeader>
        <h3 className="usa-card__heading">He never smiled, he never frowned</h3>
      </CardHeader>
      <CardMedia>
        <img
          src="https://source.unsplash.com/featured/800x600?geometric"
          alt=""
        />
      </CardMedia>
      <CardBody>
        <p>
          Simon Wheeler backed me into a corner and blockaded me there with his
          chair, and then sat me down and reeled off the monotonous narrative
          which follows this paragraph. He never smiled, he never frowned, he
          never changed his voice from the gentle-flowing key to which he tuned
          the initial sentence, he never betrayed the slightest suspicion of
          enthusiasm; but all through the interminable narrative there ran a
          vein of impressive earnestness and sincerity, which showed me plainly
          that, so far from his imagining that there was any thing ridiculous or
          funny about his story, he regarded it as a really important matter,
          and admired its two heroes as men of transcendent genius in finesse.
        </p>
      </CardBody>
      <CardFooter>
        <Button type="button">Read more</Button>
      </CardFooter>
    </Card>
    <Card
      gridLayout={{ tablet: { col: 4 } }}
      containerProps={{ className: 'border-ink' }}>
      <CardHeader>
        <h3 className="usa-card__heading">He never smiled, he never frowned</h3>
      </CardHeader>
      <CardMedia inset>
        <img
          src="https://source.unsplash.com/featured/800x600?geometric"
          alt=""
        />
      </CardMedia>
      <CardBody>
        <p>
          Simon Wheeler backed me into a corner and blockaded me there with his
          chair, and then sat me down and reeled off the monotonous narrative
          which follows this paragraph. He never smiled, he never frowned, he
          never changed his voice from the gentle-flowing key to which he tuned
          the initial sentence, he never betrayed the slightest suspicion of
          enthusiasm; but all through the interminable narrative there ran a
          vein of impressive earnestness and sincerity, which showed me plainly
          that, so far from his imagining that there was any thing ridiculous or
          funny about his story, he regarded it as a really important matter,
          and admired its two heroes as men of transcendent genius in finesse.
        </p>
      </CardBody>
      <CardFooter>
        <Button type="button">Read more</Button>
      </CardFooter>
    </Card>
    <Card
      headerFirst
      gridLayout={{ tablet: { col: 4 } }}
      containerProps={{ className: 'border-ink' }}>
      <CardHeader>
        <h3 className="usa-card__heading">He never smiled, he never frowned</h3>
      </CardHeader>
      <CardMedia inset>
        <img
          src="https://source.unsplash.com/featured/800x600?geometric"
          alt=""
        />
      </CardMedia>
      <CardBody>
        <p>
          Simon Wheeler backed me into a corner and blockaded me there with his
          chair, and then sat me down and reeled off the monotonous narrative
          which follows this paragraph. He never smiled, he never frowned, he
          never changed his voice from the gentle-flowing key to which he tuned
          the initial sentence, he never betrayed the slightest suspicion of
          enthusiasm; but all through the interminable narrative there ran a
          vein of impressive earnestness and sincerity, which showed me plainly
          that, so far from his imagining that there was any thing ridiculous or
          funny about his story, he regarded it as a really important matter,
          and admired its two heroes as men of transcendent genius in finesse.
        </p>
      </CardBody>
      <CardFooter>
        <Button type="button">Read more</Button>
      </CardFooter>
    </Card>
  </CardGroup>
)
