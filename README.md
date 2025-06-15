# Tasker Workflow - PRD-to-Implementation Process

A systematic 4-step workflow for taking product ideas from concept to structured implementation.

> **⚠️ Important:** This system is designed for developers with experience. When each step is completed, it is your responsibility to read the output draft and verify it is correct. 
> 
> Mistakes made early in the process will cause significant issues down the road.

## Overview & Process

This workflow consists of 4 sequential steps, each building on the previous:

1. **📝 Create PRD** - Write down what you want to build and why. 

   *Example: `@.tasker/rules/01-create-prd.mdc user authentication system`*

2. **🔍 Analyze Codebase** - Figure out what exists and what needs to be built.

   *Example: `@.tasker/rules/02-analyze-codebase.mdc @docs/features/user-auth`*

3. **📋 Generate Tasks** - Break the work into small, manageable pieces.

   *Example: `@.tasker/rules/03-generate-tasks-from-prd.mdc @docs/features/user-auth`*

4. **✅ Execute Tasks** - Build one piece at a time, testing as you go.

   *Example: `@.tasker/rules/04-implement-next-task.mdc @docs/features/user-auth`*

Each step creates a draft that you review and approve before moving to the next.

## Key Benefits

- **Thorough Planning** - Prevents scope creep and missed requirements
- **Realistic Estimation** - Codebase analysis provides accurate effort
- **Quality Assurance** - Clear success criteria and test validation
- **Structured Execution** - One task at a time with progress tracking
- **Feature-Centric** - All related documents grouped together
- **Configurable** - Single config controls paths and templates

## Getting Started

**Easy setup:**
```bash
npx ai-tasker
```

**Manual setup:**
1. Copy `.tasker/` folder to your project root
2. Customize `.tasker/config/workflow-config.json` for your project
3. Update templates in `.tasker/templates/` if needed

**Start your first feature:**
```bash
@.tasker/rules/01-create-prd.mdc [your feature idea]
```

## Configuration

All workflow settings are in `.tasker/config/workflow-config.json`:
- **Paths**: Where files are created
- **Templates**: Consistent document formatting
- **Settings**: Task limits and defaults

## File Structure

```
project/
├── .tasker/
│   ├── config/workflow-config.json     # System configuration
│   ├── rules/                          # 4 workflow step rules
│   └── templates/                      # Document templates
├── docs/
│   ├── project-spec.md                 # Project overview
│   ├── architecture.md                 # System architecture  
│   ├── decisions.md                    # Technical decisions
│   └── features/[feature-name]/        # Feature documentation
│       ├── PRD.md                      # Requirements
│       ├── roadmap.md                  # Technical analysis
│       ├── tasks.md                    # Implementation tasks
│       └── tests/                      # Test plans
```

## Best Practices

1. **Complete steps in order** - Each builds on the previous
2. **Review all drafts** - Never proceed without reviewing and approving each step's output
3. **Keep tasks small** - Sub-tasks should be <1 day
4. **Reference outputs** - Always check PRD and roadmap when generating tasks
5. **Update progress** - Maintain task completion status
6. **Create test plans** - Validate with manual testing
7. **Use feature folders** - Keep related work together

## Example Features

- **user-auth**: Login, signup, password reset
- **payment-system**: Stripe integration, billing
- **admin-dashboard**: User management, analytics
- **api-integration**: REST endpoints, webhooks

**Start your next feature:** `@.tasker/rules/01-create-prd.mdc [feature idea]` 