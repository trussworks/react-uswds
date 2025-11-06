# Open Issues Priority Plan
**Last Updated:** November 6, 2025  
**Total Open Issues:** 80

This document organizes all open issues by priority and provides a work plan for each issue. Issues are categorized based on impact to accessibility, security, functionality, and user experience.

---

## 🔴 Critical Priority (Accessibility & Core Functionality Bugs)

### 1. [#3271](https://github.com/trussworks/react-uswds/issues/3271) - Step indicator defines `aria-label` without `role`
**Type:** Bug (Accessibility)  
**Labels:** type: bug  
**Created:** 2025-09-26

**Impact:** Fails automated accessibility tests (aria-prohibited-attr). WCAG compliance issue.

**Work Plan:**
- Remove `aria-label` from the div OR add appropriate `role` attribute
- Review USWDS component implementation for guidance
- Add accessibility tests to prevent regression
- Estimated effort: 2-4 hours

---

### 2. [#3290](https://github.com/trussworks/react-uswds/issues/3290) - Date input hint id not associated with inputs
**Type:** Bug (Accessibility)  
**Labels:** type: bug  
**Created:** 2025-10-24

**Impact:** Hint not programmatically associated with inputs, not accessible to screen readers.

**Work Plan:**
- Associate hint ID with input elements using `aria-describedby`
- Follow USWDS pattern (note: USWDS has known usability issues #5902)
- Consider improved implementation vs exact USWDS match
- Add screen reader testing
- Estimated effort: 4-6 hours

---

### 3. [#3133](https://github.com/trussworks/react-uswds/issues/3133) - Tooltip doesn't stay open when hovering (WCAG 1.4.13)
**Type:** Bug (Accessibility)  
**Labels:** type: bug  
**Created:** 2025-04-04

**Impact:** Violates WCAG 1.4.13 - Content on Hover or Focus

**Work Plan:**
- Add hover state handling for tooltip content area
- Ensure tooltip remains visible when hovering over tooltip body
- Test with keyboard navigation
- Add automated accessibility tests
- Estimated effort: 4-6 hours

---

### 4. [#3093](https://github.com/trussworks/react-uswds/issues/3093) - Pagination missing "last page" aria-label
**Type:** Bug (Accessibility)  
**Labels:** type: bug  
**Created:** 2025-02-04

**Impact:** Screen reader users cannot identify the last page in pagination.

**Work Plan:**
- Add `aria-label="last page, page [#]"` to last page link in bounded sets
- Detect bounded vs unbounded pagination
- Follow USWDS accessibility guidance
- Add screen reader tests
- Estimated effort: 3-4 hours

---

### 5. [#2880](https://github.com/trussworks/react-uswds/issues/2880) - Character counts announced excessively by screen readers
**Type:** Bug (Accessibility)  
**Labels:** type: bug, a11y  
**Created:** 2024-04-12

**Impact:** Poor screen reader experience, excessive announcements.

**Work Plan:**
- Review live region implementation in React context
- Adjust announcement timing/frequency
- Only announce on user interaction with text area
- Test with multiple screen readers
- Estimated effort: 4-6 hours

---

### 6. [#2736](https://github.com/trussworks/react-uswds/issues/2736) - Small search button has no accessible name
**Type:** Bug (Accessibility)  
**Labels:** type: bug  
**Created:** 2024-02-01

**Impact:** Search button not accessible to assistive technology users.

**Work Plan:**
- Add alt text or aria-label to SVG/button
- Follow USWDS pattern (uses alt text on img tag)
- Test with screen readers
- Estimated effort: 2-3 hours

---

### 7. [#2974](https://github.com/trussworks/react-uswds/issues/2974) - Header navigation mobile menu missing focus outline on Close icon
**Type:** Bug (Accessibility)  
**Labels:** type: bug  
**Created:** 2024-07-13

**Impact:** Keyboard navigation accessibility issue.

**Work Plan:**
- Set focus to Close button when Menu opens
- Return focus to Menu button when Close is activated
- Match USWDS behavior
- Add keyboard navigation tests
- Estimated effort: 3-4 hours

---

### 8. [#2916](https://github.com/trussworks/react-uswds/issues/2916) - Pagination a11y issue on role attribute
**Type:** Bug (Accessibility)  
**Labels:** type: bug  
**Created:** 2024-05-07

**Impact:** Lighthouse accessibility issue flagged.

**Work Plan:**
- Replace `role` attribute with `aria-label="ellipsis indicating non-visible pages"`
- Update to match USWDS 3.6.0 fix
- Run Lighthouse tests
- Estimated effort: 1-2 hours

---

### 9. [#3276](https://github.com/trussworks/react-uswds/issues/3276) - Tooltip title not being passed to button
**Type:** Bug (Accessibility)  
**Labels:** type: bug  
**Created:** 2025-09-30

**Impact:** Title always empty string, not accessible to screen readers.

**Work Plan:**
- Pass `title` prop to button element instead of hardcoding empty string
- Verify screen reader announcement
- Update tests
- Estimated effort: 2-3 hours

---

### 10. [#3092](https://github.com/trussworks/react-uswds/issues/3092) - Modal close button cannot be overridden
**Type:** Bug (Accessibility/i18n)  
**Labels:** type: bug  
**Created:** 2025-01-07

**Impact:** Prevents internationalization, English-only screen reader announcement.

**Work Plan:**
- Add prop to override close button text/label
- Support i18n use cases
- Update documentation
- Estimated effort: 2-3 hours

---

## 🟠 High Priority (Core Functionality Bugs)

### 11. [#3291](https://github.com/trussworks/react-uswds/issues/3291) - Date input memorable date has incorrect month format
**Type:** Bug  
**Labels:** type: bug  
**Created:** 2025-10-24

**Impact:** Discrepancy from USWDS, usability issue with month selection.

**Work Plan:**
- Change month options from "01 - January" to "January"
- Match USWDS implementation
- Fix keyboard navigation (typing "A" should select April)
- Update tests and stories
- Estimated effort: 3-4 hours

---

### 12. [#3230](https://github.com/trussworks/react-uswds/issues/3230) - FileInput throws errors in reactStrictMode
**Type:** Bug  
**Labels:** type: bug  
**Created:** 2025-08-06

**Impact:** Breaks in React Strict Mode, indicates race condition.

**Work Plan:**
- Fix FileReader race condition in FilePreview component
- Handle cleanup in useEffect properly
- Test in Strict Mode
- Add tests for concurrent rendering
- Estimated effort: 4-6 hours

---

### 13. [#3170](https://github.com/trussworks/react-uswds/issues/3170) - Language selector doesn't blur on selection or outside click
**Type:** Bug  
**Labels:** type: bug  
**Created:** 2025-05-22

**Impact:** Poor UX, menu stays open inappropriately.

**Work Plan:**
- Add click outside detection
- Close menu on language selection
- Handle resize/zoom events
- Test across browsers
- Estimated effort: 4-6 hours

---

### 14. [#3089](https://github.com/trussworks/react-uswds/issues/3089) - FileInput with Ref doesn't allow re-adding file after clear
**Type:** Bug  
**Labels:** type: bug  
**Created:** 2025-01-03

**Impact:** Cannot re-upload same file after clearing.

**Work Plan:**
- Clear input value in clearFiles method
- Test ref-based file handling
- Ensure onChange fires correctly
- Estimated effort: 2-3 hours

---

### 15. [#3120](https://github.com/trussworks/react-uswds/issues/3120) - Modal component overlay test is flaky
**Type:** Bug  
**Labels:** type: bug  
**Created:** 2025-03-24

**Impact:** Unreliable tests, potential timing issue.

**Work Plan:**
- Investigate race condition in modal open state
- Add proper wait conditions
- Stabilize test
- Estimated effort: 2-4 hours

---

### 16. [#3010](https://github.com/trussworks/react-uswds/issues/3010) - TextInputMask silently swallows non-alphanumeric values
**Type:** Bug  
**Labels:** type: bug  
**Created:** 2024-08-22

**Impact:** Data loss, unexpected behavior.

**Work Plan:**
- Investigate masking logic
- Add validation/error handling for invalid characters
- Document expected behavior
- Add tests for edge cases
- Estimated effort: 4-6 hours

---

### 17. [#2999](https://github.com/trussworks/react-uswds/issues/2999) - TimePicker/DatePicker onChange triggered on initial render
**Type:** Bug  
**Labels:** type: bug  
**Created:** 2024-08-06

**Impact:** Unexpected callback execution, potential data issues.

**Work Plan:**
- Add flag to track initial mount
- Only fire onChange on user interaction
- Test with controlled/uncontrolled components
- Estimated effort: 3-4 hours

---

### 18. [#2918](https://github.com/trussworks/react-uswds/issues/2918) - DatePicker uses deprecated defaultProps
**Type:** Bug  
**Labels:** type: bug  
**Created:** 2024-05-10

**Impact:** Console warnings, future React incompatibility.

**Work Plan:**
- Replace defaultProps with default parameters
- Update DatePicker and Tooltip components
- Test all prop scenarios
- Estimated effort: 2-3 hours

---

### 19. [#2806](https://github.com/trussworks/react-uswds/issues/2806) - TimePicker name attribute on wrong element
**Type:** Bug  
**Labels:** type: bug  
**Created:** 2024-03-06

**Impact:** FormData access broken, form handling issues.

**Work Plan:**
- Move name attribute from select to input
- Test with FormData and form submissions
- Verify uncontrolled form behavior
- Estimated effort: 2-3 hours

---

### 20. [#2671](https://github.com/trussworks/react-uswds/issues/2671) - InputMask cursor position jumps
**Type:** Bug  
**Labels:** type: bug, uswds bug  
**Created:** 2023-11-29

**Impact:** Poor UX when editing masked input.

**Work Plan:**
- Check if fixed in newer USWDS versions
- Open issue with USWDS if not addressed
- Implement workaround if needed
- Preserve cursor position on input
- Estimated effort: 6-8 hours (complex)

---

### 21. [#2605](https://github.com/trussworks/react-uswds/issues/2605) - Safari <14 broken by package
**Type:** Bug  
**Labels:** type: bug  
**Created:** 2023-09-29

**Impact:** Older Safari versions completely broken.

**Work Plan:**
- Review browserslist configuration
- Update transpilation settings
- Test on older Safari versions
- Document browser support requirements
- Estimated effort: 4-6 hours

---

### 22. [#2586](https://github.com/trussworks/react-uswds/issues/2586) - Browser resize not detected after menu open
**Type:** Bug  
**Labels:** type: bug  
**Created:** 2023-09-12

**Impact:** UI state persists incorrectly after resize.

**Work Plan:**
- Add resize event listener
- Close mobile menu on resize to desktop
- Handle zoom changes
- Test across browsers
- Estimated effort: 3-4 hours

---

### 23. [#2348](https://github.com/trussworks/react-uswds/issues/2348) - DatePicker value not updated by external changes
**Type:** Bug  
**Labels:** type: bug  
**Created:** 2023-04-17

**Impact:** Cannot control DatePicker from parent component.

**Work Plan:**
- Add useEffect to sync external value changes
- Support controlled component pattern
- Test with various state management approaches
- Estimated effort: 4-6 hours

---

### 24. [#2187](https://github.com/trussworks/react-uswds/issues/2187) - Inline SVGs break Content Security Policy
**Type:** Bug  
**Labels:** type: bug  
**Created:** 2022-08-10

**Impact:** Cannot use strict CSP with the library.

**Work Plan:**
- Investigate alternative to inline SVGs
- Consider external SVG files or sprites
- Test with strict CSP policies
- Document CSP requirements
- Estimated effort: 8-12 hours (complex)

---

### 25. [#1913](https://github.com/trussworks/react-uswds/issues/1913) - Tree shaking doesn't remove unused icons
**Type:** Bug  
**Labels:** type: bug  
**Created:** 2022-02-25

**Impact:** Extremely large bundle sizes (500KB+).

**Work Plan:**
- Refactor icon exports for better tree shaking
- Consider dynamic imports
- Update build configuration
- Test bundle sizes with various bundlers
- Estimated effort: 12-16 hours (complex)

---

### 26. [#1892](https://github.com/trussworks/react-uswds/issues/1892) - Modal breaks server-side rendering
**Type:** Bug  
**Labels:** type: bug, SSR  
**Created:** 2022-01-31

**Impact:** Cannot use Modal in SSR frameworks like Next.js, Remix.

**Work Plan:**
- Add typeof window checks
- Handle document access safely
- Test with SSR frameworks
- Update documentation
- Estimated effort: 4-6 hours

---

### 27. [#1488](https://github.com/trussworks/react-uswds/issues/1488) - FooterNav fails server render
**Type:** Bug  
**Labels:** type: bug, SSR  
**Created:** 2021-08-18

**Impact:** SSR compatibility issue with Gatsby and similar frameworks.

**Work Plan:**
- Fix window access in FooterExtendedNavList
- Use typeof window !== "undefined" check
- Test with SSR frameworks
- Estimated effort: 2-3 hours

---

### 28. [#2980](https://github.com/trussworks/react-uswds/issues/2980) - Label component missing spacing between text and hint
**Type:** Bug  
**Labels:** type: bug  
**Created:** 2024-07-16

**Impact:** Visual formatting issue.

**Work Plan:**
- Add spacing between label text and hint
- Match USWDS styling
- Update Storybook examples
- Estimated effort: 1-2 hours

---

### 29. [#2993](https://github.com/trussworks/react-uswds/issues/2993) - Breadcrumb styling positions items off-screen
**Type:** Bug  
**Labels:** None  
**Created:** 2024-08-03

**Impact:** Breadcrumbs not visible (positioned at left: -999rem).

**Work Plan:**
- Review USWDS styles and classes
- Fix positioning issue
- Verify accessibility (may be skip link pattern)
- Test responsive behavior
- Estimated effort: 2-3 hours

---

### 30. [#3019](https://github.com/trussworks/react-uswds/issues/3019) - Accordion className not applied to button
**Type:** Bug  
**Labels:** type: bug  
**Created:** 2024-08-28

**Impact:** Cannot style accordion button.

**Work Plan:**
- Apply className to both header and button
- Maintain USWDS class structure
- Test custom styling
- Estimated effort: 2-3 hours

---

### 31. [#2841](https://github.com/trussworks/react-uswds/issues/2841) - Search component missing "X" clear button
**Type:** Bug  
**Labels:** type: bug  
**Created:** 2024-03-20

**Impact:** Inconsistent with USWDS, missing expected UX feature.

**Work Plan:**
- Add clear button to Search component
- Match USWDS implementation
- Handle clear event
- Estimated effort: 3-4 hours

---

### 32. [#2433](https://github.com/trussworks/react-uswds/issues/2433) - FilePreview breaks FileReader in onChange
**Type:** Bug  
**Labels:** type: bug  
**Created:** 2023-06-05

**Impact:** Cannot use FileReader in onChange events.

**Work Plan:**
- Add prop to disable FilePreview's FileReader usage
- Handle concurrent FileReader instances
- Document usage pattern
- Estimated effort: 4-6 hours

---

## 🟡 Medium Priority (Features & Enhancements)

### 33. [#3244](https://github.com/trussworks/react-uswds/issues/3244) - Make Alert headingLevel prop optional
**Type:** Feature  
**Labels:** type: feature, good first issue  
**Created:** 2025-08-25

**Impact:** Better API, reduces boilerplate.

**Work Plan:**
- Make headingLevel optional
- Use TypeScript union type to enforce heading+headingLevel together
- Maintain backwards compatibility
- Update documentation
- Estimated effort: 3-4 hours

---

### 34. [#3237](https://github.com/trussworks/react-uswds/issues/3237) - Strongly type autocomplete attribute
**Type:** Feature  
**Labels:** type: feature  
**Created:** 2025-08-14

**Impact:** Better type safety, prevents typos, supports WCAG AA compliance.

**Work Plan:**
- Create autocomplete string literal type
- Apply to TextInput, TextInputMask, Select, Textarea
- Document autocomplete values
- Estimated effort: 4-6 hours

---

### 35. [#3246](https://github.com/trussworks/react-uswds/issues/3246) - Make Tooltip id prop optional
**Type:** Enhancement  
**Labels:** None  
**Created:** 2025-08-27

**Impact:** Reduces boilerplate, better DX.

**Work Plan:**
- Generate unique ID if not provided
- Use useId hook or similar
- Maintain backwards compatibility
- Estimated effort: 2-3 hours

---

### 36. [#3201](https://github.com/trussworks/react-uswds/issues/3201) - ComboBox should support JSX in dropdown options
**Type:** Feature  
**Labels:** type: feature  
**Created:** 2025-06-23

**Impact:** Enables richer option rendering.

**Work Plan:**
- Add optional render function to ComboBoxOption
- Support JSX elements in labels
- Update examples
- Test with complex content
- Estimated effort: 4-6 hours

---

### 37. [#3115](https://github.com/trussworks/react-uswds/issues/3115) - FileInput optional preview header text
**Type:** Feature  
**Labels:** type: feature  
**Created:** 2025-03-24

**Impact:** Better i18n support, customization.

**Work Plan:**
- Add previewHeadingText prop
- Override "Change file"/"Selected file" text
- Update Storybook examples
- Estimated effort: 2-3 hours

---

### 38. [#3000](https://github.com/trussworks/react-uswds/issues/3000) - Add value prop to DatePicker/TimePicker
**Type:** Feature  
**Labels:** type: feature  
**Created:** 2024-08-06

**Impact:** Better controlled component support.

**Work Plan:**
- Add value prop for controlled usage
- Support both controlled and uncontrolled patterns
- Update documentation with examples
- Estimated effort: 4-6 hours

---

### 39. [#2972](https://github.com/trussworks/react-uswds/issues/2972) - Export Calendar as standalone component
**Type:** Feature  
**Labels:** type: feature  
**Created:** 2024-07-12

**Impact:** More flexible DatePicker usage.

**Work Plan:**
- Export Calendar component separately
- Add props for standalone usage
- Document Calendar API
- Estimated effort: 3-4 hours

---

### 40. [#2973](https://github.com/trussworks/react-uswds/issues/2973) - Add default mode prop to Calendar
**Type:** Feature  
**Labels:** type: feature  
**Created:** 2024-07-12

**Impact:** Control initial Calendar view.

**Work Plan:**
- Add defaultMode prop (DAY_PICKER, MONTH_PICKER, YEAR_PICKER)
- Support initial mode configuration
- Update documentation
- Estimated effort: 2-3 hours

---

### 41. [#2948](https://github.com/trussworks/react-uswds/issues/2948) - Add page number value to Pagination buttons
**Type:** Feature  
**Labels:** type: feature  
**Created:** 2024-06-14

**Impact:** Better data access, avoid relying on DOM strings.

**Work Plan:**
- Add value or data-page attribute to buttons
- Update event handlers
- Document usage
- Estimated effort: 2-3 hours

---

### 42. [#2947](https://github.com/trussworks/react-uswds/issues/2947) - TimePicker 24-hour format support
**Type:** Feature  
**Labels:** type: feature  
**Created:** 2024-06-12

**Impact:** International/scientific use cases.

**Work Plan:**
- Add format prop (12/24)
- Update time parsing/formatting logic
- Add examples for both formats
- Estimated effort: 6-8 hours

---

### 43. [#2672](https://github.com/trussworks/react-uswds/issues/2672) - Customizable required Label marker tooltip
**Type:** Feature  
**Labels:** type: feature  
**Created:** 2023-11-29

**Impact:** i18n support for required marker.

**Work Plan:**
- Add requiredMarkerProps
- Support custom title attribute
- Maintain backwards compatibility
- Estimated effort: 3-4 hours

---

### 44. [#2660](https://github.com/trussworks/react-uswds/issues/2660) - Import individual components without tree shaking
**Type:** Feature  
**Labels:** type: feature  
**Created:** 2023-11-13

**Impact:** Better bundle size control, especially for Next.js.

**Work Plan:**
- Expose individual component exports
- Support direct file imports
- Update build configuration
- Document import patterns
- Estimated effort: 8-12 hours

---

### 45. [#2599](https://github.com/trussworks/react-uswds/issues/2599) - Expose refs to every component
**Type:** Feature  
**Labels:** type: feature  
**Created:** 2023-09-29

**Impact:** More flexible component usage.

**Work Plan:**
- Audit all components for ref support
- Add forwardRef where missing
- Document ref usage
- Add examples
- Estimated effort: 16-24 hours (large task)

---

### 46. [#2592](https://github.com/trussworks/react-uswds/issues/2592) - Dropdown closes when clicking elsewhere
**Type:** Feature  
**Labels:** type: feature  
**Created:** 2023-09-21

**Impact:** Better UX, expected behavior.

**Work Plan:**
- Add click-outside detection
- Close dropdown on outside click
- Handle edge cases
- Estimated effort: 3-4 hours

---

### 47. [#2585](https://github.com/trussworks/react-uswds/issues/2585) - Additional icons support
**Type:** Feature  
**Labels:** type: feature  
**Created:** 2023-09-11

**Impact:** Access to full Material icon set.

**Work Plan:**
- Document uswds-compile usage
- Provide custom icon integration guide
- Consider build-time configuration
- Estimated effort: 4-6 hours (documentation)

---

### 48. [#2537](https://github.com/trussworks/react-uswds/issues/2537) - Modifiable external_date_format
**Type:** Feature  
**Labels:** type: feature  
**Created:** 2023-07-31

**Impact:** Support for ISO date format, international usage.

**Work Plan:**
- Add dateFormat prop to DatePicker/DateRangePicker
- Support multiple format strings
- Update parsing/formatting logic
- Estimated effort: 6-8 hours

---

### 49. [#2510](https://github.com/trussworks/react-uswds/issues/2510) - Improve Validation screen reader experience
**Type:** Bug  
**Labels:** type: bug, Hacktoberfest, uswds update  
**Created:** 2023-07-21

**Impact:** Validation status not announced to screen readers.

**Work Plan:**
- Add aria-labels to checklist items (added in USWDS 3.2.0)
- Update to match USWDS implementation
- Test with screen readers
- Estimated effort: 3-4 hours

---

### 50. [#2739](https://github.com/trussworks/react-uswds/issues/2739) - GA tracking mechanism for interactive components
**Type:** Feature  
**Labels:** type: feature  
**Created:** 2024-02-02

**Impact:** Analytics integration capability.

**Work Plan:**
- Design event callback pattern
- Add to Accordion and other interactive components
- Document analytics integration
- Estimated effort: 8-12 hours

---

### 51. [#1772](https://github.com/trussworks/react-uswds/issues/1772) - Implement size and color class props
**Type:** Feature  
**Labels:** type: feature  
**Created:** 2021-11-15

**Impact:** Convenient API for USWDS utility classes.

**Work Plan:**
- Add size prop (2xs, xs, sm, md, lg, xl, 2xl)
- Add color prop with USWDS colors
- Create shared utility for class generation
- Apply to applicable components
- Estimated effort: 12-16 hours

---

### 52. [#1618](https://github.com/trussworks/react-uswds/issues/1618) - Sortable Table component
**Type:** Feature  
**Labels:** type: feature, status: needs requirements  
**Created:** 2021-09-29

**Impact:** Enhanced table functionality.

**Work Plan:**
- Define requirements and API
- Implement sortable header clicks
- Add sort state management
- Support custom sort functions
- Add examples
- Estimated effort: 16-24 hours (large feature)

---

## 🔵 Low Priority (Infrastructure & Documentation)

### 53. [#3249](https://github.com/trussworks/react-uswds/issues/3249) - Explore merge queues
**Type:** Feature  
**Labels:** type: feature, type: development  
**Created:** 2025-09-04

**Impact:** Better CI/CD workflow.

**Work Plan:**
- Research GitHub merge queues
- Evaluate benefits for dependabot PRs
- Test with small group of PRs
- Document configuration
- Estimated effort: 4-6 hours

---

### 54. [#3188](https://github.com/trussworks/react-uswds/issues/3188) - Skip CI for documentation-only changes
**Type:** Feature  
**Labels:** type: feature, good first infra issue  
**Created:** 2025-06-03

**Impact:** Faster PR feedback for docs.

**Work Plan:**
- Add path filters to GitHub Actions
- Skip node tests for docs-only changes
- Still run on code changes
- Estimated effort: 2-3 hours

---

### 55. [#3156](https://github.com/trussworks/react-uswds/issues/3156) - Move from yarn to npm
**Type:** Development  
**Labels:** None  
**Created:** 2025-05-15

**Impact:** Better compatibility, standard tooling.

**Work Plan:**
- Create ADR for package manager choice
- Update all scripts to use npm
- Update CI/CD pipelines
- Update documentation
- Test all workflows
- Estimated effort: 8-12 hours

---

### 56. [#3151](https://github.com/trussworks/react-uswds/issues/3151) - Update Pull Request template
**Type:** Documentation  
**Labels:** type: documentation, good first issue  
**Created:** 2025-05-15

**Impact:** Better PR quality and process.

**Work Plan:**
- Add Conventional Commits link
- Add breaking change guidance
- Add all-contributors bot reminder
- Estimated effort: 1-2 hours

---

### 57. [#3142](https://github.com/trussworks/react-uswds/issues/3142) - Add aligg to contributors
**Type:** Chore  
**Labels:** None  
**Created:** 2025-04-21

**Impact:** Recognition.

**Work Plan:**
- Use all-contributors bot
- Add contributor
- Estimated effort: 15 minutes

---

### 58. [#3138](https://github.com/trussworks/react-uswds/issues/3138) - Release 9.2.0 on npm
**Type:** Bug  
**Labels:** type: bug  
**Created:** 2025-04-10

**Impact:** Version availability issue.

**Work Plan:**
- Investigate release process failure
- Manually trigger npm publish if needed
- Document issue for future prevention
- Estimated effort: 2-3 hours

---

### 59. [#3126](https://github.com/trussworks/react-uswds/issues/3126) - Include tests for exported component props
**Type:** Bug  
**Labels:** type: bug  
**Created:** 2025-03-28

**Impact:** Better test coverage for exported types.

**Work Plan:**
- Add type export tests to component test files
- Create pattern for type testing
- Document approach
- Estimated effort: 6-8 hours

---

### 60. [#3016](https://github.com/trussworks/react-uswds/issues/3016) - Deprecate TextInput inputRef property
**Type:** Refactor/Breaking  
**Labels:** good first issue, type: breaking  
**Created:** 2024-08-26

**Impact:** API cleanup, migration effort.

**Work Plan:**
- Add deprecation warning in current version
- Release with warning
- Remove in next major version
- Update migration guide
- Estimated effort: 4-6 hours

---

### 61. [#2869](https://github.com/trussworks/react-uswds/issues/2869) - Automated accessibility testing in pipeline
**Type:** Feature  
**Labels:** type: feature, a11y, good first infra issue  
**Created:** 2024-04-05

**Impact:** Catch accessibility issues earlier.

**Work Plan:**
- Evaluate tools (axe-core, Pa11y, jest-axe)
- Integrate into CI pipeline
- Configure to block on errors
- Document usage
- Estimated effort: 12-16 hours

---

### 62. [#2866](https://github.com/trussworks/react-uswds/issues/2866) - Storybook Label with required marker styling
**Type:** Documentation  
**Labels:** type: documentation  
**Created:** 2024-04-02

**Impact:** Visual inconsistency in Storybook.

**Work Plan:**
- Wrap form components in form with usa-form class
- Match USWDS context
- Update Storybook stories
- Estimated effort: 2-3 hours

---

### 63. [#2706](https://github.com/trussworks/react-uswds/issues/2706) - Storybook controls vs stories pattern
**Type:** Documentation  
**Labels:** type: documentation  
**Created:** 2024-01-17

**Impact:** Consistent Storybook experience.

**Work Plan:**
- Define pattern for controls vs separate stories
- Document guidelines
- Refactor existing stories to match pattern
- Estimated effort: 16-24 hours (large task)

---

### 64. [#2686](https://github.com/trussworks/react-uswds/issues/2686) - Rename RangeInput to RangeSlider
**Type:** Breaking Feature  
**Labels:** type: feature, good first issue, type: breaking  
**Created:** 2023-12-28

**Impact:** Name consistency with USWDS.

**Work Plan:**
- Stage 1: Deprecate RangeInput, add RangeSlider alias
- Release non-breaking version
- Stage 2: Remove RangeInput
- Release major version
- Estimated effort: 4-6 hours

---

### 65. [#2632](https://github.com/trussworks/react-uswds/issues/2632) - Rename DateInput to MemorableDate & add DateSelect
**Type:** Feature  
**Labels:** type: feature, Hacktoberfest  
**Created:** 2023-10-17

**Impact:** Naming consistency with USWDS.

**Work Plan:**
- Create MemorableDate component
- Create DateSelect component
- Deprecate DateInputGroup
- Add migration guide
- Estimated effort: 12-16 hours

---

### 66. [#2616](https://github.com/trussworks/react-uswds/issues/2616) - Document using Codespaces for PR reviews
**Type:** Documentation  
**Labels:** type: documentation  
**Created:** 2023-10-04

**Impact:** Easier PR review process.

**Work Plan:**
- Write Codespaces setup guide
- Document how to run app in Codespace
- Add to CONTRIBUTING.md
- Estimated effort: 2-3 hours

---

### 67. [#2602](https://github.com/trussworks/react-uswds/issues/2602) - Add merge queue to project
**Type:** CI/CD  
**Labels:** type: development  
**Created:** 2023-09-29

**Impact:** Reduce PR backlog friction.

**Work Plan:**
- Enable GitHub merge queue
- Configure settings
- Test with dependabot PRs
- Document usage
- Estimated effort: 3-4 hours

---

### 68. [#2529](https://github.com/trussworks/react-uswds/issues/2529) - Document theming your application
**Type:** Documentation  
**Labels:** type: documentation  
**Created:** 2023-07-26

**Impact:** Help users customize themes.

**Work Plan:**
- Document USWDS theme customization
- Show light/dark theme example
- Document SASS variable usage
- Add examples
- Estimated effort: 6-8 hours

---

### 69. [#2448](https://github.com/trussworks/react-uswds/issues/2448) - Document controlled vs uncontrolled components
**Type:** Documentation  
**Labels:** type: documentation, good first issue  
**Created:** 2023-06-16

**Impact:** Better developer understanding.

**Work Plan:**
- Explain controlled/uncontrolled pattern
- Document forwardRef usage
- Document useImperativeHandle
- Add examples
- Estimated effort: 4-6 hours

---

### 70. [#2414](https://github.com/trussworks/react-uswds/issues/2414) - Use Renovate instead of Dependabot
**Type:** Build/Infrastructure  
**Labels:** type: feature, good first issue, type: dependencies, Hacktoberfest, good first infra issue  
**Created:** 2023-05-23

**Impact:** Better dependency management.

**Work Plan:**
- Write ADR for Renovate adoption
- Configure Renovate
- Test with bundled updates
- Migrate from Dependabot
- Estimated effort: 6-8 hours

---

### 71. [#2376](https://github.com/trussworks/react-uswds/issues/2376) - Conditional CI for source code changes
**Type:** Feature  
**Labels:** type: feature, good first issue, Hacktoberfest, good first infra issue  
**Created:** 2023-05-02

**Impact:** Faster CI for non-code changes.

**Work Plan:**
- Add path filters to Happo workflow
- Skip for docs/README only changes
- Keep for dependency updates
- Estimated effort: 2-3 hours

---

### 72. [#2265](https://github.com/trussworks/react-uswds/issues/2265) - ADR for using GitHub Actions
**Type:** Documentation  
**Labels:** type: documentation  
**Created:** 2023-02-24

**Impact:** Document CI/CD decisions.

**Work Plan:**
- Write ADR explaining GitHub Actions choice
- Document alternatives considered
- Estimated effort: 2-3 hours

---

### 73. [#2224](https://github.com/trussworks/react-uswds/issues/2224) - Evaluate package managers
**Type:** Development  
**Labels:** type: development, topic: build tooling  
**Created:** 2022-11-30

**Impact:** Better tooling choice.

**Work Plan:**
- Research npm, yarn, pnpm
- Write ADR with recommendation
- Test compatibility with consumers
- Estimated effort: 8-12 hours

---

### 74. [#2054](https://github.com/trussworks/react-uswds/issues/2054) - Automate git diff comment on release PRs
**Type:** Development  
**Labels:** type: development  
**Created:** 2022-04-25

**Impact:** Better release PR reviews.

**Work Plan:**
- Create GitHub Action bot
- Auto-comment with git diff link
- Test with release-please
- Estimated effort: 4-6 hours

---

### 75. [#1894](https://github.com/trussworks/react-uswds/issues/1894) - Document and test SSR support
**Type:** Documentation  
**Labels:** type: documentation, SSR  
**Created:** 2022-01-31

**Impact:** Clearer SSR expectations.

**Work Plan:**
- Define SSR support level
- Add SSR tests
- Document SSR usage
- Test with Next.js, Remix, Gatsby
- Estimated effort: 8-12 hours

---

### 76. [#2776](https://github.com/trussworks/react-uswds/issues/2776) - Make id and name optional
**Type:** Documentation  
**Labels:** type: documentation  
**Created:** 2024-02-22

**Impact:** Less boilerplate for developers.

**Work Plan:**
- Evaluate impact of making id/name optional
- Update component guidelines if appropriate
- Update components to generate IDs if needed
- Estimated effort: 12-16 hours (many components)

---

### 77. [#1742](https://github.com/trussworks/react-uswds/issues/1742) - Document localization/i18n
**Type:** Documentation  
**Labels:** type: documentation, i18n  
**Created:** 2021-11-08

**Impact:** Better Spanish/multilingual support.

**Work Plan:**
- Research i18n solutions for React
- Document recommended approach
- Add examples
- Consider react-intl or similar
- Estimated effort: 8-12 hours

---

### 78. [#715](https://github.com/trussworks/react-uswds/issues/715) - Remove Kodiak, use GitHub automerge
**Type:** Development  
**Labels:** type: development, requires Truss  
**Created:** 2020-12-16

**Impact:** Simpler CI/CD.

**Work Plan:**
- Enable GitHub auto-merge feature
- Remove Kodiak configuration
- Test with dependabot PRs
- Update documentation
- Estimated effort: 2-3 hours

---

### 79. [#192](https://github.com/trussworks/react-uswds/issues/192) - Investigate pkg.module and tree shaking
**Type:** Development  
**Labels:** type: development, topic: build tooling  
**Created:** 2020-05-21

**Impact:** Better ESM support, tree shaking.

**Work Plan:**
- Research bundler options (rollup, esbuild)
- Generate pkg.module builds
- Test with various consumers
- Write ADR with recommendation
- Estimated effort: 16-24 hours (complex)

---

### 80. [#74](https://github.com/trussworks/react-uswds/issues/74) - Add component scaffolding shortcut
**Type:** Development  
**Labels:** help wanted, type: development  
**Created:** 2020-04-15

**Impact:** Faster component creation.

**Work Plan:**
- Create yarn/npm script for scaffolding
- Generate component files
- Add to index exports
- Include boilerplate code
- Estimated effort: 6-8 hours

---

## Priority Summary

### Critical Priority (10 issues)
Focus on accessibility bugs that affect WCAG compliance and usability for assistive technology users.

### High Priority (22 issues)
Core functionality bugs that impact user experience, data handling, or framework compatibility.

### Medium Priority (20 issues)
Feature requests and enhancements that improve usability, flexibility, and developer experience.

### Low Priority (28 issues)
Infrastructure improvements, documentation, and developer tooling enhancements.

## Recommended Approach

1. **Immediate Focus**: Address Critical Priority accessibility issues (#3271, #3290, #3133, #3093, #2880)
2. **Short-term**: Fix High Priority bugs affecting core functionality (#3291, #3230, #3170)
3. **Medium-term**: Implement most-requested features (#3244, #3237, #3201)
4. **Long-term**: Infrastructure improvements (#3156, #2869, #1913)

## Notes

- Several issues are interconnected (e.g., SSR-related bugs)
- Some features require breaking changes and should be bundled together
- Documentation improvements can be done in parallel with bug fixes
- Community contributions welcome on issues tagged "good first issue"
