# Adding New Components
  
## Checklist

Every new `react-uswds` component needs the following:

- [ ] **A Github issue with the requirements clearly listed.** Requirements include a rough sketch of the expected props and state the component will handle.
- [ ] **A component file (`.tsx`) inside a matching folder** - e.g. `component/GovBanner/GovBanner.tsx`.
- [ ] **An export from the package entry point** - e.g. `index.ts` must have the line `export { GovBanner } from './components/GovBanner/GovBanner'`
- [ ] **Unit tests** (`test.tsx` file) for logic relating to props and events handlers.
- [ ] **Storybook stories** (`stories.tsx` file) illustrating the use of the component. The goal is parity with the USWDS design system examples. Use the [component story format](https://storybook.js.org/docs/formats/component-story-format/).

## Navigating documentation

We extrapolate the requirements for `react-uswds` components by referencing several sources. Relevant documentation includes:

- HTML markup and written descriptions of components in the [design system docs](https://designsystem.digital.gov/components/footer/)
- Live code demos in the [uswds storybook](https://components.designsystem.digital.gov/)
- Implementation details from the [uswds github repo](https://github.com/uswds/uswds/tree/50f6ffd6b0b6afa1b499daa36b6f8ee0312b1123/src/js/components)
- HTML attribute documentation in [MDN reference docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

Pay special attention to:

- _Mobile._ There are often mobile and desktop styles - see `<Header />` and `<FooterExtendedNavList />` for two different approaches to implementing mobile styles.
- _User Interaction._ Consider interactions such `click`, `focus`, `hover`. Some of this will be naturally handled by applying the proper uswds CSS classes, other behaviors will need custom implementation. See `<Accordion />` for examples of both cases,
- _Accessibility._ Double check behavior of keyboard-only interactions. Some user interaction requires multiple event handlers (e.g. for non interactive elements that use `onClick`, a keyboard listener (such as `onKeyDown` or `onKeyPress` is also needed)). We have added the `jsx-a11y` plugin to help with accessibility requirements.

## Guiding Patterns For Writing Flexible Components in react-uswds

### Props

- Require props that are fundamental to the element (such as `id` and `name` for a form input), even if they aren't necessarily "required" HTML attributes. - Make all other props optional.
- Avoid [conflicting boolean props](https://spicefactory.co/blog/2019/03/26/how-to-avoid-the-boolean-trap-when-designing-react-components/). When props are mutually exclusive you likely need to use an enum prop instead. See `<Button />`.
- Extend the standard HTML attributes as props for the primary element in the component. For example, see how a form has its own props and also extends the `HTMLFormElement`
  
```javascript
  interface FormProps {
    children: React.ReactNode,
    big: boolean
  }
  
  export const Form = (
    props: FormProps & JSX.IntrinsicElements['form']
  ): React.ReactElement =>
  ```

There is a significant difference between thinking about the component props in `react-uswds` versus in application code, where all the likely prop values are known and where the domain is well understood. We don't know all the potential ways our components will be used. We want to allow a consumer to use a variety of HTML attributes, including `aria-` values, additional CSS classes, , and custom event handlers. This is why the library uses [spread attributes](https://reactjs.org/docs/jsx-in-depth.html#spread-attributes) for the basic HTML element props in each component. This allows us to be more expansive with the allowable props while still maintaining type safety with Typescript.
 
### State

- Group state declarations and hooks at the top of the component function. Make it easy to see how state is being used in the component.
- When using [`useState`](https://reactjs.org/docs/hooks-state.html), prefer [functional updates](https://reactjs.org/docs/hooks-reference.html#functional-updates). Object spread syntax is useful here.
- Leave business logic/implementation details out of the component state.  Use props for this purpose instead. Anytime you find yourself using component `state` heavily, ask yourself if its something that should actually be tracked by the consumer (and passed in as props instead).

### Children

- Whenever main content is not required and is not highly structured or ordered, passing [`children`](https://reactjs.org/docs/jsx-in-depth.html#children-in-jsx) may be the way to go.

### Using "Subcomponents"

- The `react-uswds` components will not always map one-to-one to uswds design system components. By creating subcomponents, we break down larger component into smaller concerns and benefit from [React's ability to compose components together](https://reactjs.org/docs/composition-vs-inheritance.html).
- We have a pattern of grouping subcomponents together in a folder. We don't write stories for most subcomponents, unless they seem like a piece of UI that could be reused alone. Examples of subcomponents - `Header`, `Footer`, `Card`
- Indicators that a subcomponent may be needed:
  - It's getting hard to pass conditional props (such as styles) to different levels of the HTML tree from the top level.
  - A smaller piece of UI is being used that is generalizable enough to be used and exported on its own.
  - The uswds component is complex - an [organism](https://atomicdesign.bradfrost.com/chapter-2/#organisms) in the language of atomic design.

### Common Components in `react-uswds`

- Components that apply uswds styles to a standard HTMLElement - `Button`, `Table`
- Components that encapsulate user interaction flows - `Accordion`
- Components for a common gov tech use case - `Search`, `SocialLinks`
- Components that render children - `Card`, `Header`, `Footer`
- Components related to forms, especially form inputs - `DateInput`, `TextInput` `Checkbox`, `Label`
