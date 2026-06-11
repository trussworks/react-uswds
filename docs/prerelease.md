# Pre-release

Pre-release packages are published to GitHub Packages every time code is pushed to the `main` branch. To use, you
will need a [GitHub access
token](https://docs.github.com/en/packages/publishing-and-managing-packages/about-github-packages#about-tokens)
with the `read:packages` scope.

1. Create an `.npmrc` with

```
//npm.pkg.github.com/:_authToken=YOUR_TOKEN_GOES_HERE
@trussworks:registry=https://npm.pkg.github.com
```

(If your project uses a different package manager, configure the `@trussworks` scope registry following your tool's documentation.)

2. In your `package.json`, use `"@trussworks/react-uswds": "next"`

See [GitHub Packages with npm
docs](https://docs.github.com/en/packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages)
for more detailed information.
