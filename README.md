# Tasker Workflow - PRD-to-Implementation Process

A systematic 4-step workflow for taking product ideas from concept to structured implementation.

> **⚠️ Important:** This system is designed for developers with experience. When each step is completed, it is your responsibility to read the output and verify it is correct. Any mistakes made early in the process will cause significant issues down the road.

## Overview

1. **📝 Create PRD** - Product Requirements Document
2. **🔍 Analyze Codebase** - Technical feasibility and roadmap  
3. **📋 Generate Tasks** - Actionable implementation plan
4. **✅ Execute Tasks** - Track progress and maintain quality

## Configuration

All workflow settings are in `.tasker/config/workflow-config.json`:
- **Paths**: Where files are created
- **Templates**: Consistent document formatting
- **Settings**: Task limits and defaults

## The 4-Step Process

### 1. Create PRD → `docs/features/[feature-name]/PRD.md`
**Rule:** `@.tasker/rules/01-create-prd.mdc`

Guides requirements gathering through clarifying questions. Creates comprehensive PRD with user stories, functional requirements, and success metrics.

**Usage:** `@.tasker/rules/01-create-prd.mdc [feature description]`

### 2. Analyze Codebase → `docs/features/[feature-name]/roadmap.md`
**Rule:** `@.tasker/rules/02-analyze-codebase.mdc`

Maps PRD requirements to existing code. Identifies what to modify vs. build new. Provides realistic effort estimates.

**Usage:** `@.tasker/rules/02-analyze-codebase.mdc @docs/features/[feature-name]/PRD.md`

### 3. Generate Tasks → `docs/features/[feature-name]/tasks.md`
**Rule:** `@.tasker/rules/03-generate-tasks-from-prd.mdc`  

Creates parent tasks (3-5 deployable features) broken into sub-tasks (<1 day each). References PRD and roadmap.

**Usage:** `@.tasker/rules/03-generate-tasks-from-prd.mdc @docs/features/[feature-name]/PRD.md`

### 4. Execute Tasks → Test plans in `docs/features/[feature-name]/tests/`
**Rule:** `@.tasker/rules/04-implement-next-task.mdc`

Enforces one sub-task at a time. Tracks completion. Creates test plans when parent tasks complete.

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

## Key Benefits

- **Thorough Planning** - Prevents scope creep and missed requirements
- **Realistic Estimation** - Codebase analysis provides accurate effort
- **Quality Assurance** - Clear success criteria and test validation
- **Structured Execution** - One task at a time with progress tracking
- **Feature-Centric** - All related documents grouped together
- **Configurable** - Single config controls paths and templates

## Best Practices

1. **Complete steps in order** - Each builds on the previous
2. **Keep tasks small** - Sub-tasks should be <1 day
3. **Reference outputs** - Always check PRD and roadmap when generating tasks
4. **Update progress** - Maintain task completion status
5. **Create test plans** - Validate with manual testing
6. **Use feature folders** - Keep related work together

## Getting Started

### Option 1: NPX Command (Recommended)
```bash
npx ai-tasker
```
This will automatically initialize the `.tasker/` folder in your current project.

### Option 2: Manual Setup
1. Copy `.tasker/` folder to your project root
2. Customize `.tasker/config/workflow-config.json` for your project
3. Update templates in `.tasker/templates/` if needed

### Next Steps
4. Start: `@.tasker/rules/01-create-prd.mdc [your feature idea]`

## Example Features

- **user-auth**: Login, signup, password reset
- **payment-system**: Stripe integration, billing
- **admin-dashboard**: User management, analytics
- **api-integration**: REST endpoints, webhooks

**Start your next feature:** `@.tasker/rules/01-create-prd.mdc [feature idea]` 