# PR Review Process for react-uswds

## Introduction

When a developer completes a story, they create a PR (pull request) in Github. This notifies the team that their work is ready for review. This review involves making sure the work meets the acceptance criteria defined in the Issue it corresponds to, passes automated tests, and matches the expected visual design. PRs can require review from engineers, product managers and designers. This is a key step in the process to ensure we are only accepting clean, bug-free code that creates the value we intended and doesn’t introduce new problems.

If the work meets all the criteria, reviewers will approve the PR and it will be merged into main and pushed to staging.

Sometimes, a team member may notice something in the code that needs to be addressed, some unexpected behavior caught in testing the app, or something about the UI doesn’t look right.

In that case, the reviewer who found the issue will leave a comment on the PR in Github or reach out directly to the engineer to talk through the issue. The engineer will make any necessary changes and request review again when ready.

## Getting Set Up to Review PRs

get added to the design group on github. This will tag designers for someone to review a PR if it has not been looked at by a designer.

### Github/Repo Access

As part of onboarding, you join the contributors of the project. When you are added, you will suddenly start to get 1 million emails (approximately) every day from Github. We recommend turning off email notifications and using the Slackbot to get a daily digest of PRs that need a design review.

**Turn off Github email notifications**

Navigate to your notification settings using this link: https://github.com/settings/notifications. Uncheck “email” under Participating, Watching, and Github Actions. You can also uncheck the email alerts under Dependabot alerts.

**Set up the Github Slackbot**

Use this link: https://github.com/settings/reminders/. Select the day/time that you want to receive a message in Slack with a list of PRs needing review (many of us like to receive this first thing in the morning to know what’s on our plate for the day). Check the boxes for “Review requests assigned to you” and “Review requests assigned to your team.”

The messages will come through under “Apps” in the sidebar of Slack.

**Joining the Design group on Github**

If you are a designer joining the project to conduct reviews, you'll want to ask the maintainer to be added to the design codeowners group. This will make it easier for engineers to more easily request a review from the designers without having to check off all of our names individually or rememerbing who is currecntly in the group and willing to review PRs. This group is also automatically requested for review, and required, if any visual/design changes are detected.

### Happo

Happo is a visual regression testing platform we have integrated into the project to help keep track of the impact a code change might have on our design system in production. It will automatically run a test to detect any visual changes a PR might make to the components and design system elements we track in Storybook. Happo takes screenshots of all of our components in Storybook and compares differences against its collection of screenshots of what the main branch looks like with each PR. It is integrated with Github, so when an engineer creates a PR, it generates a Happo report. During onboarding, ask to pair with someone doing a PR review to get an introduction to Happo and how to use it.

![happo diffs view in browser](https://lh4.googleusercontent.com/i_imRggob1k2hwPiJKczfZR9sHbbRYXGEUhA5ufqUtPOd2rVUjv0xDfDmVoWgSgtrLqeogg4qX0Q3GofFX0uS89EVzAAGrRb-9YMINiuOkyuOPcSVcIz0NqgYYYjNcfT2jK9K2ZZaGC3wAb7McvguKFy7aAdmVFs1hUxkpKxdhdhtC2T2Cvf8fm7_g)

![happo changes in a PR in Github](https://lh4.googleusercontent.com/qXmkExulMtCIbUH-mw6QWQGu0MWhOS7638JymvAKmmpMfxEjh4KUsrWcjbRPEiiRdNB5Gv77kX7BNMsC6bdi1RIxYjHnKyxL-Hd8RK9MSFl5LcwOeL53lcSCegBMjzZEOf2ZFfrivjhwbRu-oIitEUIRISdCME1vnZcNqFSGzVF3N1QsUjI5hPAdww)

**Good to know about Happo**

Sometimes Happo flags components that are not related to the work done on the PR. these are called “[spurious diffs](https://docs.happo.io/docs/spurious-diffs)”. It may be caused by the way a screenshot was taken, showing a very slight difference in spacing, for example. Typically these can be ignored, but if you are unsure, ask the engineer who created the PR what might be causing these diffs. Generally, if you look at the before and after image and can’t find any differences, it’s okay to accept it. Happo is helpful, but it does deliver false positives sometimes.

![meme of Pam Beesley shwoing Creed two identical photos on an episode of The Office (US) and asking him to spot the differences](https://lh3.googleusercontent.com/0CJGCVuHI2fqOhURfnV6xztELYpJUvb6iRgKYJ5uLd4HVDyWzNa9fClk74jegJ5PvTLZlrJ54OPu4OGFd7tm05OGp4DMnZdg2r-w8BWItCydmWdGZHPd8LpnzIAG0JUh9YQWCkygIIQk2ru69wLiN5pvUkXR2h-Oqr9NP5k1xiuj9ooBpaYjAmkDBA)

![Pam informing the viewer that the photos are the same picture, so there are no differences](https://lh3.googleusercontent.com/XAvh9ARUnK-WXittJtrgDkIqns_ykebb4woQgjUJgHNmqqPA1oOOG9FXosbLSyOR-2vuCTH4DyZ1gXG2Bt9_oCQ_h4MgGY0TIk8YtveG_qdUbnaxA-2mNUJoTDlQhpZxfXJGueKbayXHo9q4KsEsmX5Maq7nYZtYQKzDRZ4ryKMK898RZeg6xqfvNQ)

### Storybook

Our storybook: [https://trussworks.github.io/react-uswds/](https://trussworks.github.io/react-uswds/)

Storybook is our primary resource for everyone on the project outside of the design team for the USSF Design System’s reusable UI components.

To run storybook locally, run the command  yarn storybook  from your command line. This will host the project storybook at localhost:9009. It can be helpful to save this to your bookmarks bar.

**Reviewing a newly added component to storybook**

You can run storybook locally to measure and evaluate the component to ensure it meets your intentions, but you can also get a preview of what’s been added in Happo. When you add to Happo, it won’t show up as a failure that needs approval, but you can still navigate in to preview the added images.

![the location of the Added Images in Happo in the menu on the page](https://lh6.googleusercontent.com/nBN5pDS5ZVEaCt6ulj6ekgnEA_6-n8u4tPLatBkO0cyps27cSPE5c4Su0i-mSj3Byx1lK3dnn3jzJIXp7f62jLVzCdj2sQ0SH535HezOvQKl2p6KCd7WK15Oe-UGf22x_WRWsjHzOQR3Pp3-lvZ-1KfuKPyj5GQgGTNqHOWKG4RV-lxRUvhMpWkS5g)

![What added components look like on the Added page](https://lh4.googleusercontent.com/1xepAdkBt17UZ-QG3NdVnXbtHbW64OGDire70DCeUe18XXiBHXII3Bg35nis5_BJx2WEVLiRjJQCakJ1tw8NcqQ8Qfj23XawAoN0gmlw_VgdYjNnDIxDnzpnsfwEQbDS2T1fSWKEkRVnAn9htaXmuPzf0s6nZnAikbkwuizp0lYN3GIc0CRAKnyYIg)

**Recommended Browser Plugins for easier reviewing**

Your browser’s developer tools are great for reviewing this kind of work, but if you aren’t very experienced with these kinds of tools, there are a few browser extensions that can make testing certain attributes on a component easier.

![Whatfont](https://lh5.googleusercontent.com/TfMBWiP1wFAYPdJ6_-Vk09OqQXBcBe_Z7liV968MMxXBXIShgquUdf6mqBfTUb8G8qxJt0C7_Yi6SThfUq5UysNu9i3n7lLOSyacjEEEwiLK4w6T6UBWG7Ezrt0WAcWUrz7BpL6reG13emGu1quH76jxEXRdyVWP0I6HatGv7ODLezx4MyOiVnwadw)

- **WhatFont** - when running, this tool will allow you to click on text in your browser and obtain the color, font weight, font style, calculated font size for that text. It doesn’t work in the storybook main view, but if you open the canvas in a new tab, it works very well there. Available from [Chrome](https://chrome.google.com/webstore/detail/whatfont/jabopobgcpjmedljpbcaablpmlmfcogm?hl=en) and [Firefox](https://addons.mozilla.org/en-US/firefox/addon/zjm-whatfont/)

![Measure-it](https://lh4.googleusercontent.com/qajZqDU9zMceS3gJstr0wAXtxC9O02A0d9JKROYBsMjANp2oEOpdl8PwJ5IWVYD0qoh5gIX2_eAH9m9F1TDSIXFyDr409TBHibJFeFqFfw6rN4b6OPa_n2G8V5QzfgemQTQqKYleFBbRohJ5avlnfOowLs_xu6pSS1Tzo18fSXXx622zWmqLyy6TyQ)

- **Measure-it** It’s an on-screen pixel ruler. It lets you draw boxes over the browser view to measure things. Handy if you have any specific values for padding, margin, etc. that you want to make sure are right. [Chrome](https://chrome.google.com/webstore/detail/measure-it/jocbgkoackihphodedlefohapackjmna?hl=en) & [Firefox](https://addons.mozilla.org/en-US/firefox/addon/measure-it/)

![](https://lh4.googleusercontent.com/ap2Nd_CxBJHF0b9kgeK1C-nK1B6j-PX853XIcGPP8me3Cflkx9DGIjTN0f_4DvUc5IJHzpRiqr08i3RCBr4AOYi0ItlBFrfWG2MlrvBWnDVcqa3nyV40mr-n5FadbJPyiNjXJ68n-Y1jHUvamS8GtZT9VEVSyRlh-7FiejRTyFddc7It3XxYLneUtQ)

- **ColorZilla** lets you sample colors out of the page like you can in any design tool. [Chrome](https://www.colorzilla.com/chrome/) & [Firefox](https://www.colorzilla.com/firefox/)

## When a PR Needs Review

For your first few PR reviews, you may want to ask another designer to pair with you to walk through the steps.

### Who should do the review?

Any designer in the group well versed in USWDS and the design patterns it uses can be helpful in reviewing react-uswds PRs. One designer review on frontend PRs is what we require, but if you see someone has not caught something, or they're unavailable, feel free to step in and request changes.

### Expected turnaround

✨**As soon as possible**✨. Engineers may be blocked waiting for review, or time may be needed for making changes after review. If you think it might take a while, it’s helpful to communicate or leave a comment saying when you expect to look at it. If you can't take it and don't see anyone talking about it, it might be helpful to start a conversation in the slack channel to get a conversation going on how to not block work merging.

### Reviewing the PR in Github

Read the PR description to understand the changes made and the expected impact to the UI. You may choose to pair with the engineer to discuss and understand what you are looking for.

Review the acceptance criteria in the Shortcut ticket, any Figma links provided in the story, or find the relevant screens in Figma to compare to.

### Reviewing the Happo Report

Review the Happo report to ensure any changes matched expectations, and no unexpected changes occurred. If you aren’t sure about what you’re seeing in Happo, check with the engineer requesting the review.

Make sure to hit Accept in the dropdown in the left sidebar. Ideally, it’s a designer that is the person clicking to approve these changes in Happo. When you do this, don’t forget to go back and approve the PR itself as well.

### Go through the design review checklist

It’s in the description of the PR and looks like this. Use your best judgement in terms of what steps are necessary.

https://lh4.googleusercontent.com/DT68ooHqMQ4GecIX2huNPjHZlxR5Pir1tkEJFGusPYTvZRG0sonemeF_TkipbH9rFxH41HrqksgaF3-1tLaXVGqloNl-b1TaEiLiy90kN9UjCTJewq9ZKNQudpFOE2VGxRRgitIV3FahpKoGjg-VxK_nXW1IhE97GEYoalEv4PDweTXl6KfP2t2P

### If everything looks good:

1. Check that the Happo test is passing, and approve the Happo report
2. Approve the PR in Github

### If changes are needed:

1. Leave a comment directly on the PR in Github explaining what is needed, and/or
   1. If you want your feedback to block the branch from getting merged without you re-reviewing, make sure to select the Request Changes box when you leave the review. The engineer will have to re-request your review, and you’ll have to go back and approve their changes in order for the branch to be allowed to merge.
   2. If you aren’t sure if your feedback is in scope for the branch, or there is some other reason you want to say something without blocking the branch from moving forward, use the Comment option.
2. Reach out directly to the engineer to talk through what you are seeing.
3. Repeat the review process as changes are made until everything looks good.
