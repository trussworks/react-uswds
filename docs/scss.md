# USWDS CSS & SCSS

If you only want the compiled USWDS CSS, and you aren't going to use any of the USWDS SCSS, you can just include the following:

```
@import 'uswds';
```

If you want to use USWDS SCSS (mixins, functions, variables, etc.), you will need to define some required SCSS variables (even if you aren't going to use them):

```
// your-project/settings.scss

$theme-image-path: '~uswds/src/img';
$theme-font-path: '~uswds/src/fonts';
$theme-hero-image: '~uswds/src/img/hero.png';
```

Then, import the following into your SCSS:

```
// your-project/index.scss

@import '~uswds/src/stylesheets/theme/_uswds-theme-general.scss';
@import '~uswds/src/stylesheets/theme/_uswds-theme-typography.scss';
@import '~uswds/src/stylesheets/theme/_uswds-theme-spacing.scss';
@import '~uswds/src/stylesheets/theme/_uswds-theme-color.scss';
@import '~uswds/src/stylesheets/theme/_uswds-theme-utilities.scss';

// Custom theme settings/USWDS overrides go here <-- the settings you defined above
@import 'your-project/settings.scss';

@import '~uswds/src/stylesheets/packages/_required.scss';

@import 'uswds'; // <-- this goes at the end, contains USWDS CSS
```

After you've completed the above, you should be able to use USWDS SCSS in your own SCSS files:

```
// your-project/myProject.scss

.myProjectElement {
  @include u-bg('info-lighter');
}
```

### Configuring USWDS SCSS variables

You can also customize any of the variables used in USWDS SCSS in the `your-project/settings.scss` file. However, the order in which they are defined is very important and needs to match the same order as in `uswds/src/stylesheets/theme/styles.scss`. For example, the below file defines both the required variables mentioned above, as well as overwrites some other settings:

```
// your-project/settings.scss

/* GENERAL */
$theme-image-path: '~uswds/src/img';

/* TYPOGRAPHY */
$theme-respect-user-font-size: false;
$theme-root-font-size: 14px;
$theme-font-path: '~uswds/src/fonts';
$theme-font-type-sans: 'public-sans';
$theme-style-body-element: true;

/* SPACING */
$theme-grid-container-max-width: 'desktop-lg';

/* COMPONENTS */
$theme-hero-image: '~uswds/src/img/hero.png';
```
