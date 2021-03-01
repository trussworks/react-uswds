#!/bin/sh

set -eu

token=${GITHUB_DEPLOYMENTS_TOKEN:?"Missing GITHUB_TOKEN environment variable"}

if ! deployment=$(curl -s \
                       -X POST \
                       -H "Authorization: bearer ${token}" \
                       -d "{ \"ref\": \"${CIRCLE_SHA1}\", \"environment\": \"storybook\", \"description\": \"Storybook\", \"transient_environment\": true, \"auto_merge\": false, \"required_contexts\": []}" \
                       -H "Content-Type: application/json" \
                       "https://api.github.com/repos/${CIRCLE_PROJECT_USERNAME}/${CIRCLE_PROJECT_REPONAME}/deployments"); then
    echo "POSTing deployment status failed, exiting (not failing build)" 1>&2
    exit 1
fi

if ! deployment_id=$(echo "${deployment}" | python -c 'import sys, json; print json.load(sys.stdin)["id"]'); then
    echo "Could not extract deployment ID from API response" 1>&2
    exit 3
fi

echo "${deployment_id}" > deployment
