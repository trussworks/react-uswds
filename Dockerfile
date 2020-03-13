FROM circleci/node:10.16.3

USER circleci

# creating the directory so it's owned by the right user
RUN mkdir /home/circleci/react-uswds

# setting workdir so yarn can build in the right directory
WORKDIR /home/circleci/react-uswds

# copy all source in as we need everything to build the assets
COPY --chown=circleci:circleci . /home/circleci/react-uswds/

RUN yarn install
