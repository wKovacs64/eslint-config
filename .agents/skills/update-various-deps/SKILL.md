---
name: update-various-deps
description: Updates this repository's safely eligible non-major dependencies and opens the standard "Update various dependencies" PR. Use when asked to update various or multiple dependencies without majors.
---

# Update various dependencies

1. Require a clean worktree, then work in a fresh `chore/update-various-dependencies` branch off `origin/main`. Stop rather than disturb unrelated work. Completion: the branch starts at current `origin/main`.

2. Run `pnpm outdated --format json` and inspect open dependency PRs with `gh pr list`. Select every direct dependency update that:
   - stays within its current major version;
   - is not already covered by an open PR;
   - satisfies `pnpm-workspace.yaml` release-age policy;
   - supports the repository's Node, TypeScript, ESLint, and peer versions.

   Check package metadata and release notes when compatibility is unclear. A `0.x` minor is eligible because its semver major remains `0`. Completion: every available direct update is selected, excluded as a major, already covered, or skipped with a concrete compatibility reason.

3. Record current peer warnings with `pnpm peers check`. Update all selected packages together:

   ```bash
   pnpm update <package>@<version> ...
   ```

   Use explicit target versions; retain the manifest's existing range style. Let pnpm update `pnpm-lock.yaml`. Completion: `package.json` and the lockfile resolve every selected version, and no direct dependency crosses a major boundary.

4. Add one `.changeset/<unique-name>.md` file in exactly this shape:

   ````markdown
   ---
   "@wkovacs64/eslint-config": patch
   ---

   Update various dependencies.

   ```
   package-one  ^old  →  ^new
   package-two  ^old  →  ^new
   ```
   ````

   Align the columns and list only direct `package.json` range changes, alphabetically.

5. Run, in order:

   ```bash
   pnpm format
   pnpm lint
   pnpm typecheck
   pnpm format:check
   pnpm peers check
   git diff --check
   ```

   Existing peer warnings are acceptable; new ones are not. Inspect the complete diff. Only the changeset, `package.json`, and `pnpm-lock.yaml` may change.

6. Re-run `pnpm outdated --format json`. Every remaining direct update must be a major, already covered by an open PR, or have the compatibility reason established in step 2.

7. Commit all three intended paths with subject `chore(deps): update various dependencies`, push the branch, and open a PR to `main` with the same title and an empty body.

8. Verify the created PR is open and contains only the three intended paths. Report its URL, updated packages, excluded or skipped updates, local checks, and current CI state.
