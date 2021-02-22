import React from 'react'

export default {
  title: 'Components/Typography/Type Styles',
}

export const TypeStyles = (): React.ReactElement => (
  <div className="grid-container">
    <h1>Typography</h1>
    <h2>Headers</h2>
    <hr />
    <h1>Header 1</h1>
    <h2>Header 2</h2>
    <h3>Header 3</h3>
    <h4>Header 4</h4>
    <h2>Body</h2>
    <hr />
    <p>
      Ut voluptatum quia quidem. Et et numquam architecto. Consequuntur enim ex
      labore cumque rerum voluptatem dolor. Vero asperiores consequatur
      doloribus perspiciatis quia laudantium qui. Incidunt ducimus iste eius
      voluptas qui. Commodi dolor nesciunt inventore consequatur quia et.
    </p>
    <h2>Font weight</h2>
    <hr />
    <p className="text-normal">text normal</p>
    <p className="text-semibold">text semibold</p>
    <p className="text-bold">text bold</p>
    <h2>Font style</h2>
    <hr />
    <p className="text-italic">text italic</p>
    <p className="text-uppercase">text uppercase</p>
    <p className="text-underline">text underline</p>
    <p className="text-strike">text strike</p>
    <h2>Text alignment</h2>
    <hr />
    <h3>Aligned left</h3>
    <p className="text-left">
      In compliance with the request of a friend of mine, who wrote me from the
      East, I called on good-natured, garrulous old Simon Wheeler, and inquired
      after my friend’s friend, Leonidas W. Smiley, as requested to do, and I
      hereunto append the result.
    </p>
    <h3>Aligned center</h3>
    <p className="text-center">
      In compliance with the request of a friend of mine, who wrote me from the
      East, I called on good-natured, garrulous old Simon Wheeler, and inquired
      after my friend’s friend, Leonidas W. Smiley, as requested to do, and I
      hereunto append the result.
    </p>
    <h3>Aligned right</h3>
    <p className="text-right">
      In compliance with the request of a friend of mine, who wrote me from the
      East, I called on good-natured, garrulous old Simon Wheeler, and inquired
      after my friend’s friend, Leonidas W. Smiley, as requested to do, and I
      hereunto append the result.
    </p>
    <h2>Line height</h2>
    <hr />
    <h3>Line height 1</h3>
    <p className="line-height-sans-1">
      In compliance with the request of a friend of mine, who wrote me from the
      East, I called on good-natured, garrulous old Simon Wheeler, and inquired
      after my friend’s friend, Leonidas W. Smiley, as requested to do, and I
      hereunto append the result.
    </p>
    <h3>Line height 2</h3>
    <p className="line-height-sans-2">
      In compliance with the request of a friend of mine, who wrote me from the
      East, I called on good-natured, garrulous old Simon Wheeler, and inquired
      after my friend’s friend, Leonidas W. Smiley, as requested to do, and I
      hereunto append the result.
    </p>
    <h3>Line height 3</h3>
    <p className="line-height-sans-3">
      In compliance with the request of a friend of mine, who wrote me from the
      East, I called on good-natured, garrulous old Simon Wheeler, and inquired
      after my friend’s friend, Leonidas W. Smiley, as requested to do, and I
      hereunto append the result.
    </p>
    <h3>Line height 4</h3>
    <p className="line-height-sans-4">
      In compliance with the request of a friend of mine, who wrote me from the
      East, I called on good-natured, garrulous old Simon Wheeler, and inquired
      after my friend’s friend, Leonidas W. Smiley, as requested to do, and I
      hereunto append the result.
    </p>
    <h3>Line height 5</h3>
    <p className="line-height-sans-5">
      In compliance with the request of a friend of mine, who wrote me from the
      East, I called on good-natured, garrulous old Simon Wheeler, and inquired
      after my friend’s friend, Leonidas W. Smiley, as requested to do, and I
      hereunto append the result.
    </p>
    <h3>Line height 6</h3>
    <p className="line-height-sans-6">
      In compliance with the request of a friend of mine, who wrote me from the
      East, I called on good-natured, garrulous old Simon Wheeler, and inquired
      after my friend’s friend, Leonidas W. Smiley, as requested to do, and I
      hereunto append the result.
    </p>
    <h2>Text color</h2>
    <hr />
    <h3>Base</h3>
    <p className="text-base-lightest bg-ink">text base lightest</p>
    <p className="text-base-lighter bg-ink">text base lighter</p>
    <p className="text-base-light bg-ink">text base light</p>
    <p className="text-base">text base</p>
    <p className="text-base-dark">text base dark</p>
    <p className="text-base-darker">text base darker</p>
    <p className="text-base-darkest">text base darkest</p>
    <p className="text-base-ink">text base ink</p>
    <h3>Primary</h3>
    <p className="text-primary-lighter bg-ink">text primary lighter</p>
    <p className="text-primary-light bg-ink">text primary light</p>
    <p className="text-primary">text primary</p>
    <p className="text-primary-vivid">text primary vivid</p>
    <p className="text-primary-dark">text primary dark</p>
    <p className="text-primary-darker">text primary darker</p>
    <h3>Secondary</h3>
    <p className="text-secondary-lighter bg-ink">text secondary lighter</p>
    <p className="text-secondary-light bg-ink">text secondary light</p>
    <p className="text-secondary">text secondary</p>
    <p className="text-secondary-vivid">text secondary vivid</p>
    <p className="text-secondary-dark">text secondary dark</p>
    <p className="text-secondary-darker">text secondary darker</p>
    <h3>Accent cool</h3>
    <p className="text-accent-cool-lighter bg-ink">text accent cool lighter</p>
    <p className="text-accent-cool-light bg-ink">text accent cool light</p>
    <p className="text-accent-cool bg-ink">text accent cool</p>
    <p className="text-accent-cool-dark bg-ink">text accent cool dark</p>
    <p className="text-accent-cool-darker">text accent cool darker</p>
    <p className="text-accent-warm-lighter bg-ink">text accent warm ligher</p>
    <h3>Accent warm</h3>
    <p className="text-accent-warm-light bg-ink">text accent warm light</p>
    <p className="text-accent-warm bg-ink">text accent warm</p>
    <p className="text-accent-warm-dark">text accent warm dark</p>
    <p className="text-accent-warm-darker">text accent warm darker</p>
    <h3>State</h3>
    <p className="text-info-lighter bg-ink">text info lighter</p>
    <p className="text-info-light bg-ink">text info light</p>
    <p className="text-info">text info</p>
    <p className="text-info-dark">text info dark</p>
    <p className="text-info-darker">text info darker</p>
    <p className="text-error-lighter bg-ink">text error lighter</p>
    <p className="text-error-light bg-ink">text error light</p>
    <p className="text-error">text error</p>
    <p className="text-error-dark">text error dark</p>
    <p className="text-error-darker">text error darker</p>
    <p className="text-warning-lighter bg-ink">text warning lighter</p>
    <p className="text-warning-light bg-ink">text warning light</p>
    <p className="text-warning">text warning</p>
    <p className="text-warning-dark">text warning dark</p>
    <p className="text-warning-darker">text warning darker</p>
    <p className="text-success-lighter bg-ink">text success lighter</p>
    <p className="text-success-light bg-ink">text success light</p>
    <p className="text-success">text success</p>
    <p className="text-success-dark">text success dark</p>
    <p className="text-success-darker">text success darker</p>
    <p className="text-disabled-light bg-ink">text disabled light</p>
    <p className="text-disabled">text disabled</p>
    <p className="text-disabled">text disabled</p>
  </div>
)
