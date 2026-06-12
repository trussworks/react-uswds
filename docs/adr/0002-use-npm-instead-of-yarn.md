# Use npm instead of yarn for package management

- Status: Proposed (TODO: Change to Accepted if/when PR approved)
- Deciders: Maintainers
- Date: 2026-06-12

## Context and Problem Statement

ReactUSWDS has used yarn since the project's initial setup in 2019.
At that time, yarn held real advantages over npm v6: faster installs, a deterministic offline cache, and workspaces.
npm has since closed those gaps, and install performance is now comparable for a project of this size.

Meanwhile, using a non-default package manager carries recurring costs for a library that is published to and overwhelmingly consumed from the npm registry.
Which package manager should this project use going forward?

## Decision Drivers

- npm is bundled with Node, which the project already requires; any other package manager is an additional dependency to install, version, and document
- Project tooling that depends on yarn-specific behavior has proven brittle:
  - The dangerfile parses `yarn npm audit` output that has no schema and changes across yarn versions
  - Yarn-specific install lifecycle hooks caused friction with common git-hook tooling (see [#3155](https://github.com/trussworks/react-uswds/issues/3155))
- Side effects of our yarn usage have historically surfaced as issues filed by npm-using consumers and contributors, which were the responsibility of this project to solve
- Yarn's documentation and behavior are fragmented across its major versions (classic v1 vs. Berry), increasing contributor onboarding overhead and confusion

## Considered Options

- Use npm
- Keep using yarn
- Move to a different package manager

## Decision Outcome

Chosen option: **"Use npm"**, because it removes a tooling dependency rather than replacing one, aligns the project with the default tooling of the registry and runtime it already requires, and moves package-manager-specific problems out of this project's scope.

### Positive Consequences

- One less dependency to manage: npm comes bundled with Node, which is required anyway. There is no separate tool to install or version.
- Lower support overhead: previously, npm users affected by side effects of our yarn usage rightly needed to raise issues with us. Now that the project uses npm, users of other package managers who experience tool-specific issues will need to find workarounds or solutions pertaining to their tool. These situations are no longer issues for this component library.
- npm enforces `peerDependencies` strictly where yarn only warned. The migration itself immediately surfaced two previously silent misconfigurations: a build plugin with an unmet vite peer range, and an `@eslint/js` major version mismatched with `eslint`.
- Contributor onboarding reduces to the ecosystem default (`npm install`): anyone with Node already has npm and some familiarity with it, even if it is not their preferred tool, reducing barriers to contributing.

### Negative Consequences

- One-time migration cost: regenerated lockfile, rewritten CI workflows/scripts/docs, and contributors must reinstall dependencies and re-register git hooks.
- Some yarn conveniences require explicit replacements (e.g. `yarn npm publish --tolerate-republish` became a version-existence check in the publish workflow).
- Strict peer dependency enforcement can require `overrides` entries while upstream packages lag behind (e.g. plugins that have not yet declared support for a new vite major).

## Pros and Cons of the Options

### Use npm

- Good, because it is bundled with the required Node version — zero additional installation or version management
- Good, because it is the reference implementation for registry and `package.json` behavior, with documentation and release cadence tied to Node itself
- Good, because its strict-by-default behavior (e.g. peer dependencies) catches dependency misconfigurations early
- Bad, because npm was historically slower than alternatives; the gap has narrowed but npm is not the fastest option available
- Bad, because it lacks some advanced yarn features (plugins, patch protocol, publish conveniences) — none of which this project currently needs

### Keep using yarn

- Good, because there is no migration cost; yarn has worked in this repo for over six years
- Bad, because it is an extra tool to install and pin, on top of the Node/npm toolchain contributors already have
- Bad, because behavior and docs are fragmented across yarn v1 and Berry, and scripting against yarn's unversioned output formats has broken before
- Bad, because side effects on npm-using consumers and contributors remain this project's burden
- Bad, because it silently tolerates unmet peer dependencies, hiding real misconfigurations

### Move to a different package manager

- Good, because some alternatives offer performance or disk-efficiency gains over both npm and yarn
- Bad, because it remains an additional dependency with the same standardization downsides as yarn
- Bad, because it carries an equal or larger migration cost with a smaller community and less contributor familiarity
- Bad, because it does not address the core driver: alignment with the default tooling of the ecosystem this library publishes to

## Links

- GitHub Issue: [Use npm instead of yarn #3156](https://github.com/trussworks/react-uswds/issues/3156)
- Implementing Pull Request: [Migrate from yarn to npm #3500](https://github.com/trussworks/react-uswds/pull/3500)

<!-- markdownlint-disable-file MD013 -->
