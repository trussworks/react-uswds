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

or

Create a `.yarnrc` file with

```
"@trussworks:registry" "https://npm.pkg.github.com"
```

2. In your `package.json`, use `"@trussworks/react-uswds": "next"`

See [GitHub Packages with npm
docs](https://docs.github.com/en/packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages)
for more detailed information.
