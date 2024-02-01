# FeatureBase-docs deployment process

Deploying help updates involves:

* Updating docs
* Staging docs
* Deploying docs to production

## Deployment dependencies

* `main` branch -- the equivalent of "staging"
* `gh-pages` branch -- the equivalent of "production"
* Initial PR with updates should **always** include @gregthrone and/or @ljsinclair as reviewers (as of 2023-02-17 -- a new process is being designed to streamline this)
* Github Action settings found in `/.github/workflows` which handle the deployment of `main` to `gh-pages`

## The participants

* FeatureBase employees who update the docs
* Featurebase-docs admins (as of 2023-02-21 these are @gregthrone and @ljsinclair)
* FeatureBase Subject Matter Experts (SME)

## Workflow 1 - Update docs and create PR

The user (an engineer, programmer, writer) performs the following tasks:

* Clone the repository and create a new branch from `main`
* Makes changes in the branch
* Builds locally to test -- [Local build instructions](/help-on-help/local-build/README.md)
* Visual check of content to verify everything works as expected
* [Runs broken link check](/help-on-help/publishing-workflow/broken-link-check)

## Workflow 2 - Create the PR and get it reviewed

**IMPORTANT** FeatureBase-docs PRs **must** be reviewed by FeatureBase-docs administrators (as of 2023-02-21 these are @gregthrone and @ljsinclair)

* Create Pull Request to compare **main** with **branch**.
* Invites SMEs and FeatureBase Administrators to review
* Engages in discussion with SME and FeatureBase Docs administrators to fix any issues

## Workflow 3 - Approve and merge with `main` branch

featurebase-docs administrator:
* approves and merges the PR with `main`
* deletes the previous branch to keep things tidy

## Workflow 4 - test staging and create PR

These steps will be performed by featurebase-docs administrator.

* Checkout **main** and pull changes
* Test the branch builds
* Visual check on changed content to make sure nothing broken
* Run broken link check on local build and fix broken **internal** links
* If errors > create new branch to fix errors and Jira assigned to appropriate person
* If no errors > create pull request to compare **main** with **gh-pages**

## Workflow 5 - approval and push to production

These steps can only be performed by FeatureBase-docs administrator that can push to the `gh-pages` branch:

* checkout `gh-pages` pages locally and merge changes from `main` using the commands below:

```
git clone https://github.com/molecula/documentation
cd documentation

git checkout gh-pages
git pull
git merge --ff-only origin/main
git push
```

* This is performed as such to avoid differing commits between `gh-pages` and `main`. Keeping them with the same commits allows for proper comparison by git
* if `gh-pages` somehow gets ahead or moves away from `main` a hard reset on `gh-pages` will be necessary by an administrator

## Workflow 6 - Github action automation

Successful completion of the action deploys the changes to the production site at **docs.featurebase.com**

* [View GitHub action that builds then deploys to GH-pages and production](https://github.com/FeatureBaseDB/featurebase-docs/actions)

## Need support?

## Need support?

* [Raise a GitHub issue to get support or raise issues](https://github.com/FeatureBaseDB/featurebase-docs/issues)
