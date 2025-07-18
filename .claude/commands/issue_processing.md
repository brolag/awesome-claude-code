Process GitHub issues autonomously following the Plan → Create → Test → Deploy workflow for high-quality software delivery.

# ISSUE PROCESSING:
Issue Number: $ARGUMENTS

## Process

### 1. PLAN Phase - Issue Analysis & Planning

**🔍 Fetch and Analyze Issue**
- Run `gh issue view {issue_number} --json title,body,labels,assignees,milestone,url` to get complete issue details
- Parse issue description, acceptance criteria, and technical requirements
- Identify issue type from labels (bug, feature, enhancement, documentation)
- Check if issue is assigned and not already in progress

**🔎 Research Related Work**
- Search existing scratchpads for related work:
  ```bash
  find scratchpads/ -name "*.md" -exec grep -l "{keywords_from_issue}" {} \;
  ```
- Review previous PRs for context:
  ```bash
  gh pr list --state=all --search="{issue_keywords}" --json number,title,url
  ```
- Examine related issues:
  ```bash
  gh issue list --search="is:issue {keywords}" --json number,title,state
  ```

**🧠 Thinking and Analysis**
- Use `<thinking>` tags to analyze the issue complexity
- Break down the issue into small, atomic, manageable tasks
- Identify potential edge cases and dependencies
- Consider impact on existing functionality
- Evaluate testing requirements

**📝 Create Planning Document**
- Create `scratchpads/issue-{issue_number}-plan.md` with:
  - Issue summary and requirements
  - Technical approach and architecture decisions
  - Task breakdown with time estimates
  - Testing strategy
  - Risk assessment and mitigation
  - Links to related issues/PRs
  - Implementation timeline

### 2. CREATE Phase - Implementation

**🏗️ Environment Setup**
- Create feature branch: `git checkout -b issue-{issue_number}-{short-description}`
- Ensure clean working directory: `git status`
- Update local main branch: `git pull origin main`

**📋 Follow Existing Patterns**
- Review similar existing implementations in the codebase
- Examine neighboring files and modules for patterns:
  ```bash
  find . -name "*.py" -path "./agents/*" -exec grep -l "similar_pattern" {} \;
  ```
- Check package dependencies and imports:
  ```bash
  grep -r "import" agents/ | grep -E "(fastapi|flask|django|requests)" | head -10
  ```
- Review existing test patterns:
  ```bash
  find tests/ -name "*.py" -exec head -20 {} \;
  ```

**⚙️ Implementation Guidelines**
- Write clean, modular code following MVC patterns where applicable
- Use meaningful variable names and type hints (required by CLAUDE.md)
- Add docstrings for all functions and classes (required by CLAUDE.md)
- Follow Google ADK best practices for agent development
- Implement comprehensive error handling and logging
- Apply PEP 8 style guidelines with Black formatting
- Focus on one specific atomic task at a time
- Ensure code follows established architecture patterns

**🔧 Code Quality Standards**
- Use type hints for all function parameters and return values
- Implement proper error handling with specific exception types
- Add logging statements for debugging and monitoring
- Follow the ADK integration points:
  - Use `LlmAgent` for natural language processing tasks
  - Implement custom tools for external API integrations
  - Leverage ADK's multi-agent hierarchy for modular design
  - Apply ADK safety patterns for content filtering

### 3. TEST Phase - Quality Assurance

**🧪 Run Existing Test Suite**
- Execute full test suite: `pytest tests/ -v`
- Check for any regressions or failing tests
- Verify test coverage for modified areas:
  ```bash
  pytest --cov=agents tests/ --cov-report=term-missing
  ```

**🎭 UI Testing (if applicable)**
- Use Puppeteer MCP server for frontend changes
- Test user workflows and interactions
- Verify responsive design and accessibility
- Check cross-browser compatibility

**✍️ Write New Tests**
- Create unit tests for all new functions and classes
- Write integration tests for agent workflows  
- Add performance tests for data processing pipelines
- Create end-to-end tests for complete user scenarios
- Test edge cases and error conditions:
  - Invalid inputs and boundary conditions
  - Network failures and timeouts
  - Authentication and authorization scenarios
  - Resource limitations and rate limiting

**📊 Performance Testing**
- Test async processing for concurrent operations
- Verify caching strategies work correctly
- Check API rate limiting compliance
- Monitor memory usage during batch processing
- Validate database query optimization

**✅ Quality Gates**
- All tests must pass before proceeding
- Code coverage should not decrease
- Performance benchmarks must be met
- No linting or style violations
- Security scans should pass

### 4. DEPLOY Phase - Delivery

**📝 Commit Changes**
- Stage all changes: `git add .`
- Create descriptive commit message following Conventional Commits:
  ```bash
  git commit -m "feat(issue-{issue_number}): {descriptive_summary}
  
  - Detailed change description
  - Impact on existing functionality
  - Testing completed
  
  Fixes #{issue_number}"
  ```

**🚀 Push and Create PR**
- Push branch to GitHub: `git push origin issue-{issue_number}-{short-description}`
- Create pull request with comprehensive description:
  ```bash
  gh pr create --title "{type}: {clear_title}" --body "$(cat <<EOF
  ## 🎯 Summary
  Resolves #{issue_number}
  
  ### 📋 Changes Made
  - Bullet point list of key changes
  - Include any breaking changes
  - Note performance improvements
  
  ### 🧪 Testing
  - [ ] Unit tests pass
  - [ ] Integration tests pass
  - [ ] Performance tests pass
  - [ ] Manual testing completed
  - [ ] Edge cases verified
  
  ### 📝 Documentation
  - [ ] Code comments added
  - [ ] API documentation updated
  - [ ] README updated if needed
  
  ### 🔍 Review Checklist
  - [ ] Code follows style guidelines
  - [ ] No security vulnerabilities
  - [ ] Performance impact assessed
  - [ ] Backward compatibility maintained
  
  ### 🔗 Related Links
  - Original issue: #{issue_number}
  - Planning document: scratchpads/issue-{issue_number}-plan.md
  EOF
  )"
  ```
**🔗 Link PR to Issue**
- Ensure PR description includes "Fixes #{issue_number}" or "Closes #{issue_number}"
- Add appropriate labels to PR matching issue labels
- Request review from relevant team members
- Update issue with PR link and status
**📊 Update Documentation**
- Update scratchpad with final implementation notes
- Record any lessons learned or technical debt
- Update project documentation if needed
- Add monitoring and troubleshooting notes
## Error Handling & Recovery
**🚨 Common Failure Scenarios**
- **GitHub CLI Authentication**: Run `gh auth status` and `gh auth login` if needed
- **Missing Issue**: Verify issue number exists with `gh issue view {issue_number}`
- **Permission Denied**: Check repository access and branch protection rules
- **Test Failures**: Analyze failures, fix issues, and re-run tests
- **Merge Conflicts**: Rebase with main branch and resolve conflicts
**🔄 Recovery Actions**
- Create fallback plans for each phase
- Implement proper logging for debugging
- Provide clear error messages with suggested fixes
- Auto-retry transient failures (network issues, rate limits)
- Gracefully handle partial completions
## Command Arguments
**Required:**
- `{issue_number}`: GitHub issue number to process
**Optional Flags (implement if needed):**
- `--draft`: Create draft PR instead of ready-for-review
- `--no-tests`: Skip test execution (not recommended)
- `--force`: Override certain safety checks
- `--assignee {user}`: Assign PR to specific user
- `--reviewer {user}`: Request review from specific user
## Success Criteria
**Completion Requirements:**
- ✅ Issue fully analyzed and planned
- ✅ Code implementation follows all guidelines
- ✅ All tests pass including new tests
- ✅ PR created and properly linked
- ✅ Documentation updated
- ✅ No security vulnerabilities introduced
- ✅ Performance requirements met
- ✅ Code review ready
## Integration Points
**GitHub CLI Commands Used:**
- `gh issue view` - Fetch issue details
- `gh issue list` - Search related issues  
- `gh pr list` - Review related PRs
- `gh pr create` - Create pull request
- `gh auth status` - Check authentication
**File System Operations:**
- `scratchpads/` - Planning and documentation
- `tests/` - Test files and coverage
- `agents/` - Main application code
- `logs/` - Application and test logs
**Testing Integration:**
- `pytest` - Python test framework
- Coverage reporting with `--cov` flags
- Performance testing for data pipelines
- UI testing with Puppeteer MCP server
This command enables Claude Code to autonomously process GitHub issues while maintaining high code quality, comprehensive testing, and proper documentation throughout the software development lifecycle.