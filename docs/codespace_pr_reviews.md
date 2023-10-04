# Using Codesapces to review PRs without pulling a repo to your machine

1. go to the PR
2. click the `Code` button in the top right corner
3. click the `Codespaces` tab
4. `Create new codespace`

   ![Create a new codespace screenshot](https://github.com/trussworks/react-uswds/assets/59394696/9ebfff8a-353c-4064-bf70-8712bbfbbeda)

5. **Wait** for the codespace to finish setting up, you should see stuff happening in the `Terminal`. If you mess with it before it is done it might not work. If you mess this up, yo might see an error about your node version.
6. if the yarn install in that process was not successful, run `yarn install`. Wait until it is done before you do anything. takes ~5ish minutes
7. if it is successful run `yarn storybook`
8. You will get a message saying your application is running on port 9009. click the `Open in Browser` button

   ![application running message](https://github.com/trussworks/react-uswds/assets/59394696/9d6ac91d-5ea2-4bbc-a64d-685076444354)

9. It should open a new tab that will have a blank window until the storybook is up and running. Might take a couple of minutes.
10. It should show you the react uswds Storybook with the changes in the PR!

    ![storybook running in codespaces dev environment](https://github.com/trussworks/react-uswds/assets/59394696/cdfc67de-711f-43c2-928a-284158744f1f)

11. proceed as if you were running the PR on your own machine. hooray!
12. When your review is complete, you should delete the codespace. There are costs associated with storing codespaces. **You should therefore delete any codespaces you no longer need**.

![how to delete the codespace screencap](https://github.com/trussworks/react-uswds/assets/59394696/45c1ea01-28f3-4b77-a6da-b6af81546bbc)

## Things to watch out for

If you disrupt the installation process when you start the Codespace, it can mess up the node installation. If this happens, your best bet is to go back to the PR, open the codespaces menu, delete the codespace, and make a new one. This will not mess up the PR.
