# Using Codespaces to review PRs without pulling a repo to your machine

1. go to the PR
2. click the `Code` button in the top right corner
3. click the `Codespaces` tab
4. `Create a new codespace on ...`

   ![Create a new codespace screenshot](https://github.com/trussworks/react-uswds/assets/59394696/9ebfff8a-353c-4064-bf70-8712bbfbbeda)

5. **Wait** for the codespace to finish setting up, you should see stuff happening in the `Terminal`. This is the codespace installig the correct versions of packages etc will run in the environment, so it's not necessary to have those updated locally, or even have the repo on your machine locally at all. If you mess with it before it is done it might not work. If you mess this up, you might see an error about your node version.

   When it is complete, you should see a message like this in the terminal. If you don't see this, you should delete the codespace and start over.

   ![Github Codespace configuaration process](https://github.com/trussworks/react-uswds/assets/59394696/bdf6cd8d-22e2-4e6b-b778-65c83c51556a)

6. if the yarn install in that process was not successful (should look like the image above), run `yarn install`. Wait until it is done before you do anything. takes ~5ish minutes
7. if it is successful run `yarn storybook`. this might also take a couple of minutes to complete.
8. when the link the storybook will be hosted on is available, you will get a message saying your application is running on port 9009 in the bottom right corner. click the `Open in Browser` button

   ![application running message](https://github.com/trussworks/react-uswds/assets/59394696/9d6ac91d-5ea2-4bbc-a64d-685076444354)

   If you don't see that message (it doesn't always happen) check the terminal for something like this:
   ![storybook started message in the terminal](https://user-images.githubusercontent.com/13249580/272653168-b9d66c78-3659-4c18-a7b4-c6d493354135.png)

   If you see that, go to `Ports` tab in the top bar of that bottom section where your `Terminal` is. You can find a link under the column in the table labelled `Forwarded address`. Click that to open the Storybook site being hosted on Codespaces.

   ![Ports Tab table with forwarded address](https://github.com/trussworks/react-uswds/assets/59394696/a3075661-a1c2-476a-aeb9-974e6f9e036f)

9. It should open a new tab that will have a blank window until the storybook is completely done running its build. Might take a couple of minutes.
10. When the build completes, should show you the ReactUSWDS Storybook with the changes in the PR!

    ![storybook running in codespaces dev environment](https://github.com/trussworks/react-uswds/assets/59394696/cdfc67de-711f-43c2-928a-284158744f1f)

11. proceed as if you were running the PR on your own machine. hooray!
12. When your review is complete, you should delete the codespace. There are costs associated with storing codespaces. **You should therefore delete any codespaces you no longer need**.

![how to delete the codespace screencap](https://github.com/trussworks/react-uswds/assets/59394696/45c1ea01-28f3-4b77-a6da-b6af81546bbc)

## Things to watch out for

If you disrupt the installation process when you start the Codespace, it can mess up the node installation. If this happens, your best bet is to go back to the PR, open the codespaces menu, delete the codespace, and make a new one. This will not mess up the PR.
