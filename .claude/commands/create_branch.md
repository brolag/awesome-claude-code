# Conventional Branches Commands for Claude Code

Create professional git branches following Conventional Branch v1.0.0 specification with intelligent branch management.

## Command 1: `branch-create` - Create New Conventional Branch

```bash
# COMMIT DETAILS:
$ARGUMENTS

## Process

1. **Analyze Current Repository State**
   - Check current branch with `git branch --show-current`
   - Verify git repository exists
   - Check for uncommitted changes (warn if present)
   - Identify default branch (main/master)
   - Show current branch and status

2. **Intelligent Type Detection & Suggestions**
   Based on common development patterns:
   - Issue numbers → suggest `feat` or `fix`
   - Keywords in arguments → suggest appropriate type
   - Current branch context → suggest logical branch type

3. **Display Branch Type Options**
   ```
   Available branch types:
   ✨ feat     - New feature development
   🐛 fix      - Bug fix or hotfix
   📝 docs     - Documentation updates
   🎨 style    - Code style/formatting changes
   ♻️  refactor - Code refactoring
   ⚡ perf     - Performance improvements
   ✅ test     - Test additions/updates
   🔧 build    - Build system changes
   🚀 ci       - CI/CD changes
   🧹 chore    - Maintenance tasks
   🔥 hotfix   - Critical production fixes
   🚀 release  - Release preparation
   ```

4. **Interactive Branch Creation**
   - Prompt for branch type (with intelligent default)
   - Request short description (kebab-case enforced)
   - Optional: Issue/ticket number integration
   - Validate branch name format
   - Show final branch name preview

5. **Branch Name Validation**
   - Ensure format: `<type>/<description>` or `<type>/<issue>-<description>`
   - Convert to kebab-case automatically
   - Check for naming conflicts
   - Validate against git branch naming rules
   - Ensure uniqueness

6. **Execute Branch Creation**
   - Create and checkout new branch: `git checkout -b <branch-name>`
   - Display success confirmation with branch info
   - Show suggested next steps

## Example Branch Names
```
feat/user-authentication
fix/login-validation-error
docs/api-documentation-update
refactor/payment-service
hotfix/security-vulnerability
feat/123-shopping-cart
fix/456-checkout-bug
```
```

## Command 2: `branch-switch` - Smart Branch Switching

```bash
# COMMIT DETAILS:
$ARGUMENTS

## Process

1. **List Available Branches**
   - Show local branches with `git branch`
   - Show remote branches with `git branch -r`
   - Group by conventional types for better organization
   - Highlight current branch

2. **Smart Branch Selection**
   - Filter branches by type if specified in arguments
   - Search branches by partial name matching
   - Show branch last commit info and age
   - Display branch tracking status (ahead/behind)

3. **Interactive Selection**
   - Numbered list of matching branches
   - Show branch metadata (last commit, author, date)
   - Option to create new branch if none match
   - Fuzzy search capability

4. **Safe Switching**
   - Check for uncommitted changes
   - Offer to stash changes if needed
   - Execute checkout: `git checkout <selected-branch>`
   - Show post-switch status
```

## Command 3: `branch-list` - Enhanced Branch Listing

```bash
# COMMIT DETAILS:
$ARGUMENTS

## Process

1. **Comprehensive Branch Analysis**
   - List all branches (local and remote)
   - Group by conventional types
   - Show branch relationships and tracking
   - Calculate branch metrics (commits ahead/behind, age)

2. **Enhanced Display Format**
   ```
   📋 CONVENTIONAL BRANCHES
   
   ✨ FEATURES:
   * feat/user-authentication (current)
     └── 3 commits ahead of main | Last: 2 days ago | Author: John Doe
   * feat/shopping-cart
     └── 1 commit ahead, 2 behind main | Last: 1 week ago | Author: Jane Smith
   
   🐛 FIXES:
   * fix/login-bug
     └── 2 commits ahead of main | Last: 3 hours ago | Author: Mike Wilson
   
   🧹 MAINTENANCE:
   * chore/dependency-updates
     └── 5 commits ahead of main | Last: 1 day ago | Author: Auto Bot
   ```

3. **Branch Health Information**
   - Identify stale branches (configurable threshold)
   - Show merge status and conflicts
   - Highlight branches ready for merge
   - Flag branches that need updates from main
```

## Command 4: `branch-cleanup` - Intelligent Branch Cleanup

```bash
# COMMIT DETAILS:
$ARGUMENTS

## Process

1. **Branch Analysis**
   - Identify merged branches
   - Find stale branches (no activity > 30 days)
   - Check remote tracking status
   - Analyze branch relationships

2. **Safe Cleanup Options**
   ```
   🧹 BRANCH CLEANUP CANDIDATES:
   
   ✅ MERGED (safe to delete):
   * feat/completed-feature (merged 2 weeks ago)
   * fix/resolved-bug (merged 1 month ago)
   
   ⚠️  STALE (review recommended):
   * feat/abandoned-feature (no activity 45 days)
   * docs/old-update (no activity 60 days)
   
   🔄 TRACKING ISSUES:
   * feat/orphaned-branch (remote deleted)
   ```

3. **Interactive Cleanup**
   - Confirm each deletion
   - Batch operations with preview
   - Backup option (create tags before deletion)
   - Safe mode (dry-run first)

4. **Cleanup Execution**
   - Delete selected local branches
   - Clean up remote tracking branches
   - Update remote refs: `git remote prune origin`
   - Summary report of cleanup actions
```

## Command 5: `branch-info` - Detailed Branch Information

```bash
# COMMIT DETAILS:
$ARGUMENTS

## Process

1. **Current Branch Analysis**
   - Show detailed branch information
   - Commit history and statistics
   - Tracking relationship with remote
   - Merge base with main/master

2. **Conventional Branch Validation**
   - Check if branch follows conventional naming
   - Suggest improvements if non-conventional
   - Validate branch purpose alignment

3. **Branch Metrics**
   ```
   📊 BRANCH: feat/user-authentication
   
   📋 Details:
   * Type: feature
   * Created: 3 days ago
   * Last commit: 2 hours ago
   * Author: John Doe <john@example.com>
   
   📈 Statistics:
   * Total commits: 12
   * Files changed: 23
   * Lines added: +456
   * Lines removed: -123
   
   🔄 Tracking:
   * Remote: origin/feat/user-authentication
   * Status: 2 commits ahead of remote
   * Base: main (5 commits behind)
   
   ✅ Conventional Status: Valid
   ```
```

## Installation Instructions

1. Save each command as a separate file in your Claude Code commands directory
2. Make them executable: `chmod +x branch-*`
3. Usage examples:
   ```bash
   claude branch-create "user authentication system"
   claude branch-switch feat
   claude branch-list --stale
   claude branch-cleanup --dry-run
   claude branch-info
   ```

## Configuration Options

Add to your `.claud-config.json`:
```json
{
  "conventional-branches": {
    "defaultBranch": "main",
    "staleThreshold": 30,
    "autoStash": true,
    "validateConventional": true,
    "groupByType": true,
    "showRemotes": true
  }
}
```

## Integration with Conventional Commits

These branch commands work seamlessly with your existing conventional commits command:
1. Create conventional branch → Work on feature → Create conventional commits → Merge with conventional format

## Advanced Features

- **Auto-completion**: Tab completion for branch types and names
- **Template support**: Custom branch naming templates
- **Integration hooks**: Pre/post branch creation hooks
- **Conflict detection**: Intelligent merge conflict prediction
- **Team workflows**: Support for team branching strategies (git-flow, GitHub flow)

## Validation Rules

- Branch names MUST follow pattern: `<type>/<description>`
- Optional issue number: `<type>/<issue>-<description>`
- Description MUST be kebab-case
- Type MUST be from approved list
- No special characters except hyphens and slashes
- Maximum length: 50 characters
- Case-insensitive type matching