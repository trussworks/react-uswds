# FAQs

- How come my components are not loading with the proper styles?

  - Make sure you are importing the needed CSS before trying to use any of the React components. See styles and assets [documentation](./docs/styles_and_assets.md) for more detail. If something is unclear or seems broken, please file an issue.

- How do I use a component from this library?

  - Most components are standalone and can be dropped into your codebase anywhere. Assuming that you have imported the library and styles properly, please reference the project [Storybook](https://trussworks.github.io/react-uswds/) to learn how to use the component in your code. Click any of the component stories and you can "Show Code" to see the usage of the component in context. Storybook also has a tab on each story called "Docs" which will allow you to see full documentation of the types of props you can use. In addition, we have an example app (see `/example` directory) which shows how to use `react-uswds` components with other widely used Javascript/React dependencies.

- What's next? What is the roadmap for this project?
  - This library is active development. We use this library on our own projects at [Truss](https://truss.works/) and with clients. Follow library development and maintenance work in the [react-uswds Github project](https://github.com/trussworks/react-uswds/projects). In addition, reference the [milestones](https://github.com/trussworks/react-uswds/milestones) to track parity with various USWDS versions. There is no singular roadmap; our progress is shaped by those who contribute to the library, and by changes in the uswds specification. If you have work you'd like to see done earlier/sooner, please submit a PR. We welcome your contribution!
