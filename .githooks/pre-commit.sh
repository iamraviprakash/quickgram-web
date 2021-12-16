#!/bin/sh

# Run npm script for eslint-staged
echo "running pre-commit hook > npm run -s precommit (node `node -v`):"
npm run -s precommit || {
  echo
  echo "pre-commit hook failed (add --no-verify to bypass)"
  exit 1
}
echo