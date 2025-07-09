# Orson Vision - Project Rules

## Documentation Organization Rule

### 📋 Rule: Documentation Storage

**All documentation (guidelines, reports, implementation plans, etc.) must be stored inside the `docs/` folder in the appropriate section.**

### 📁 Required Structure

```
docs/
├── technical/           # Development guidelines, technical specifications, API docs
├── project/            # Project plans, roadmaps, implementation summaries
├── ux-ui/             # Design guidelines, UI/UX specifications
├── copywriting/        # Content guidelines, brand voice, copy standards
├── brand/             # Brand identity, visual guidelines, assets
├── assets/            # Asset management, media guidelines
└── README.md          # Documentation organization guide
```

### ✅ Compliance Requirements

#### File Placement

- **Technical Documentation**: Must be in `docs/technical/`
- **Project Documentation**: Must be in `docs/project/`
- **UX/UI Documentation**: Must be in `docs/ux-ui/`
- **Copywriting Documentation**: Must be in `docs/copywriting/`
- **Brand Documentation**: Must be in `docs/brand/`
- **Asset Documentation**: Must be in `docs/assets/`

#### File Naming

- Use kebab-case for all documentation files
- Include descriptive names that indicate content
- Follow consistent naming patterns within categories

#### Content Standards

- Include clear titles and descriptions
- Use consistent heading hierarchy
- Include last updated date and version information
- Follow markdown formatting standards

### 🚫 Prohibited Actions

- **No documentation in root directory**: All docs must be in `docs/` folder
- **No loose files**: All documentation must be properly categorized
- **No inconsistent naming**: Follow established naming conventions
- **No outdated documentation**: Keep documentation current and accurate

### 🔄 Enforcement

#### Pre-commit Checks

- Automated checks for documentation placement
- Validation of file naming conventions
- Verification of documentation structure

#### Code Review Process

- Documentation placement review required
- Naming convention compliance check
- Content quality and accuracy review

#### Regular Audits

- Monthly documentation structure audits
- Quarterly compliance reviews
- Annual documentation cleanup

### 📝 Implementation

#### For New Documentation

1. **Identify Category**: Choose appropriate folder in `docs/`
2. **Create File**: Use kebab-case naming convention
3. **Follow Template**: Use consistent documentation structure
4. **Add to Index**: Update relevant documentation indexes
5. **Review**: Have documentation reviewed by team

#### For Existing Documentation

1. **Move Files**: Relocate any documentation in root to appropriate `docs/` folder
2. **Update References**: Update any links or references to moved files
3. **Verify Structure**: Ensure proper categorization
4. **Communicate**: Notify team of documentation reorganization

### 🎯 Benefits

#### Organization

- Clear categorization of documentation
- Easy navigation and discovery
- Consistent structure across project
- Scalable documentation system

#### Maintenance

- Simplified documentation management
- Clear ownership and responsibilities
- Regular review and update processes
- Version control and tracking

#### Collaboration

- Shared understanding of documentation structure
- Consistent standards across team
- Easy onboarding for new team members
- Clear communication channels

### 📚 Related Documentation

- **docs/README.md**: Complete documentation organization guide
- **docs/technical/development-environment-guidelines.md**: Development setup and guidelines
- **docs/project/optimization-summary.md**: Project optimization reports

### 🔧 Tools and Automation

#### Documentation Tools

- **Markdown Linting**: Ensure consistent formatting
- **Link Checking**: Verify internal documentation links
- **Structure Validation**: Validate documentation organization
- **Automated Indexing**: Generate documentation indexes

#### Git Hooks

- **Pre-commit**: Check documentation placement
- **Pre-push**: Validate documentation structure
- **Post-merge**: Update documentation indexes

### 📈 Success Metrics

#### Compliance

- 100% documentation in `docs/` folder
- 0 documentation files in root directory
- Consistent naming conventions across all files
- Proper categorization of all documentation

#### Quality

- Regular documentation reviews completed
- Up-to-date documentation across all categories
- Clear and accessible documentation structure
- Team adoption of documentation standards

#### Efficiency

- Reduced time to find documentation
- Improved documentation maintenance
- Streamlined onboarding process
- Enhanced collaboration effectiveness

---

_Rule Established: December 2024_
_Version: 1.0_
_Status: Active_
_Enforcement: Required_
