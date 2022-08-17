# Github Container Registry

## About this article

GitHub with GitHubActions and GHAS offer an incredible experience for developers around the planet. Just with a few considerations and good ideas we can build a wonderful experience for our development teams, and they just literally "work only on their code"

## Using Github NPM Registry - Local Environment

### Authenticating to the Container registry

https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-to-github-packages

### Pushing container images

https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-to-github-packages

To discover every way to working with [NPM Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry) please generete and **ISSUE**.

<br>

## Using Github Container Registry - Github Action
<br>

```
name: Create and publish NPM Package
on:
  release:
    types: [published]

jobs:
  Publish-NPM-Package:
    runs-on: ubuntu-latest
    permissions:
      packages: write
      contents: read
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
          cache-dependency-path: package-lock.json
          registry-url: https://npm.pkg.github.com
      - run: npm install
      - run: npm ci
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{secrets.PAT_GITHUB_TOKEN}}
```
```
name: NPM Audit
on:
  pull_request: 
    branches: [develop, staging, master]
    types: [opened, synchronize]

jobs:
  npm-audit:
    name: npm audit
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: install dependencies
        run: npm ci
      - uses: oke-py/npm-audit-action@v2
        with:
          audit_level: moderate
          github_token: ${{ secrets.PAT_GITHUB_TOKEN }}
          issue_assignees: oke-py
          issue_labels: vulnerability,test
          dedupe_issues: true
```

To enable more capabilities and demostrate the strongest of Github and Github Actions we complement this example with [Github Reusable Workflows](https://docs.github.com/en/actions/using-workflows/reusing-workflows) using Open Source Tools and Enterprise Tools on Actions.

Reusing workflows avoids duplication. This makes workflows easier to maintain and allows you to create new workflows more quickly by building on the work of others, just as you do with actions. Workflow reuse also promotes best practice by helping you to use workflows that are well designed, have already been tested, and have been proved to be effective. Your organization can build up a library of reusable workflows that can be centrally maintained.

**Note:** To enable your actions, in some cases you must configurate [encrypted secrets](https://docs.github.com/en/enterprise-cloud@latest/actions/security-guides/encrypted-secrets)

<br>

```
name: Github Reusable Workflow
on:
  pull_request: 
    branches: [develop, staging, master]
    types: [opened, synchronize]
  release:
    types: [published]

jobs:
  NPM-Audit:
    if: github.event_name != 'opened'
    uses: ./.github/workflows/npm-audit.yml
    secrets:
      PAT_GITHUB_TOKEN: ${{ secrets.PAT_GITHUB_TOKEN }}
  
  NPM-Publish:
    if: ${{ (github.event.release.action == 'released') && always() }}
    uses: ./.github/workflows/registry.yml
    needs: [NPM-Audit]
    secrets:
      PAT_GITHUB_TOKEN: ${{ secrets.PAT_GITHUB_TOKEN }}
```
<br>

## Licence

The scripts and documentation in this project are released under the [MIT License](./LICENSE)
## Contributions

Contributions are welcome! See [Contributor's Guide](./docs/contributors.md)

## Code of Conduct

👋 Be nice. See our [code of conduct](./docs/code_of_conduct.md)

## References

+ **NPM Publish:** https://github.com/actions/setup-node
+ **NPM Audit Signatures:** https://github.blog/changelog/2022-07-26-a-new-npm-audit-signatures-command-to-verify-npm-package-integrity/
+ **NPM Audit:** https://github.com/marketplace/actions/npm-audit-action
