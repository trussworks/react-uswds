# FAQs

- How come my components are not loading with the proper styles?

  - Make sure you are importing the needed CSS before trying to use any of the React components. See styles and assets [documentation](./styles_and_assets.md) for more detail. If something is unclear or seems broken, please file an issue.

- How do I use a component from this library?

  - Most components are standalone and can be dropped into your codebase anywhere. Assuming that you have imported the library and styles properly, please reference the project [Storybook](https://trussworks.github.io/react-uswds/) to learn how to use the component in your code. Click any of the component stories and you can "Show Code" to see the usage of the component in context. Storybook also has a tab on each story called "Docs" which will allow you to see full documentation of the types of props you can use. In addition, we have an example app (see `/example` directory) which shows how to use `react-uswds` components with other widely used Javascript/React dependencies.

- If something is not behaving as it should, or if I believe I've spotted a problem, where should I open an issue?

  - If a `react-uswds` component is displaying or behaving unexpectedly there may be an issue with the `react-uswds`, however the issue may exist within the [USWDS](https://designsystem.digital.gov/) itself. For the fastest, most effective resolution of the issue we recommend verifying if the issue is present in the base [USWDS component(s)](https://designsystem.digital.gov/components/) first.
    - If so, please [file the issue directly within the USDWS Github repository](https://github.com/uswds/uswds/issues/new).
    - If not, please [file an issue with us](https://github.com/trussworks/react-uswds/issues/new/choose).

- What's next? What is the roadmap for this project?

  - This library is active development. We use this library on our own projects at [Truss](https://truss.works/) and with clients. Follow library development and maintenance work in the [react-uswds Github project](https://github.com/trussworks/react-uswds/projects). In addition, reference the [milestones](https://github.com/trussworks/react-uswds/milestones) to track parity with various USWDS versions. There is no singular roadmap; our progress is shaped by those who contribute to the library, and by changes in the uswds specification. If you have work you'd like to see done earlier/sooner, please submit a PR. We welcome your contribution!
