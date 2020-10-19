Test Repo for reproducing Jest error using ts-jest and multiple jest (sub-)projects.

# How to reproduce

1. `yarn install`
2. `yarn test`
-> Tests fail with error `SyntaxError: <PATH_TO_REPO>/shared/CustomError.ts: Unexpected token (2:11)`
