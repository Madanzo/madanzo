# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a GitHub Profile Repository (madanzo/madanzo) that serves as both a professional profile showcase and business automation command center. The repository showcases expertise as a Full-Stack Developer, Digital Marketing Pioneer, and Creative Technologist while housing comprehensive business project documentation and MCP automation systems.

## Architecture & Key Components

### Profile Display System
- `README.md` - Auto-displays on GitHub profile, showcases current projects and skills
- Uses dynamic badges, GitHub stats, and contribution graphs
- Features tech stack, current ventures (Kravings Club, Merkad Agency), and contact info

### Business Project Structure
- `projects/kravings/` - Cannabis business platform (replacing Blaze + GoHighLevel + WordPress)
- `projects/nenes-del-perreo/` - React music showcase application
- Each project has comprehensive documentation including architecture and MVP features

### MCP Automation System
- `config/` directory contains Claude Desktop MCP server configurations
- 7 configured MCP servers: GitHub, PostgreSQL, SQLite, Brave Search, Web Search, Memory, Fetch
- Enables automation of GitHub updates, database management, and SEO research

## Common Development Commands

### React Projects (Nenes del Perreo)
```bash
cd projects/nenes-del-perreo
npm start                    # Start development server
npm run build               # Build for production
npm test                    # Run tests
npm run deploy              # Deploy to GitHub Pages
```

### System Setup
```bash
chmod +x setup-dependencies.sh
./setup-dependencies.sh     # Install all dependencies and setup databases
./update-api-keys.sh        # Update MCP API keys (after manual key input)
```

### Database Operations
```bash
# PostgreSQL (for Kravings Club)
psql -d kravings_dev -c 'SELECT version();'  # Test connection
sudo service postgresql start                # Start PostgreSQL service

# SQLite (for local analytics)
sqlite3 data/analytics.db                    # Access local analytics database
```

## Business Context & Project Goals

### Kravings Club - All-in-One Cannabis Platform
**Problem**: Currently using multiple expensive platforms (Blaze, GoHighLevel, WordPress) costing ~$2000+/month
**Solution**: Custom-built platform with Next.js, TypeScript, PostgreSQL
**Key Features**: E-commerce, CRM, compliance, analytics, customer management
**Architecture**: See `projects/kravings/PROJECT_ARCHITECTURE.md` for detailed technical specs

### Merkad Agency - Digital Marketing Automation
**Services**: SEO with Atlas SEO AI, CRM management, WordPress hosting
**Automation Goal**: Reduce manual work by 80% through MCP integrations
**Tools**: GoHighLevel, Atlas SEO AI, competitive analysis automation

## Development Workflow

### Profile Updates
1. Edit `README.md` for immediate profile changes
2. Use dynamic GitHub stats APIs for live data
3. Update tech stack badges when learning new technologies
4. Maintain professional presentation while showcasing technical depth

### MCP Server Management
1. Configure API keys in `config/claude_desktop_config.json` and `config/claude_desktop_config_mac.json`
2. Restart Claude Desktop after configuration changes
3. Test connections with simple queries before complex operations
4. Monitor API usage limits for external services

### Database Development
- **Kravings Dev**: `kravings_dev` PostgreSQL database for local development
- **Merkad Dev**: `merkad_dev` PostgreSQL database for agency tools
- **Analytics**: SQLite database in `data/` directory for local analytics

## Key Technical Decisions

### React Project Structure (Nenes del Perreo)
- Uses React 18 with React Router v6
- Configured for GitHub Pages deployment
- Mobile-first responsive design
- Component-based architecture in `src/pages/`

### Database Schema (Kravings Club)
- PostgreSQL with UUID primary keys
- Cannabis-compliant user verification system
- Order tracking with delivery status
- Loyalty points and customer segmentation
- Marketing campaign automation

### MCP Integration Strategy
- GitHub MCP for profile automation
- PostgreSQL MCP for database operations
- Brave Search MCP for SEO research
- Memory MCP for persistent context across sessions

## Directory Structure

```
/workspaces/madanzo/
├── README.md                    # GitHub profile display (public-facing)
├── CLAUDE.md                   # This file - guidance for Claude Code
├── PROJECT_OVERVIEW.md         # Comprehensive business system explanation
├── setup-dependencies.sh       # System setup automation script
├── update-api-keys.sh          # MCP API key configuration script
├── data/                       # Local databases and analytics
├── config/                     # MCP server configurations
│   ├── claude_desktop_config.json     # Linux/Windows MCP setup
│   ├── claude_desktop_config_mac.json # macOS MCP setup
│   └── MCP_SETUP_GUIDE.md             # MCP configuration instructions
└── projects/                   # Business project documentation
    ├── kravings/               # Cannabis platform project
    │   ├── README.md           # Project overview
    │   ├── MVP_FEATURES.md     # Feature specifications
    │   └── PROJECT_ARCHITECTURE.md # Technical architecture
    └── nenes-del-perreo/       # React music showcase
        ├── package.json        # React project config
        ├── public/             # Static assets
        └── src/                # React source code
            ├── App.js          # Main component
            ├── index.js        # Entry point
            └── pages/          # Page components
```

## Testing & Quality Assurance

### React Application Testing
```bash
cd projects/nenes-del-perreo
npm test                        # Run Jest test suite
npm test -- --coverage         # Run tests with coverage report
```

### Database Testing
```bash
# Test PostgreSQL connection
psql -d kravings_dev -c '\l'    # List databases
psql -d merkad_dev -c '\dt'     # List tables

# Test SQLite
sqlite3 data/analytics.db ".tables"  # List tables
```

### MCP Server Testing
1. GitHub MCP: Try basic repository queries
2. Database MCPs: Test simple SELECT queries
3. Search MCPs: Verify API key functionality
4. Memory MCP: Test context persistence

## Important Development Notes

### Security & Compliance
- Cannabis industry requires strict compliance tracking
- All user data must be encrypted and audit-logged
- Age verification is mandatory for all users
- Purchase limits must be enforced by law

### Performance Considerations
- GitHub profile stats are cached (~15 minutes)
- Database queries should use proper indexing
- Images should be optimized for web delivery
- API calls should be rate-limited

### Business Constraints
- **Kravings Club**: Must integrate with Weedmaps, comply with state regulations
- **Merkad Agency**: Client data confidentiality is paramount
- **Profile**: Maintain professional image while showcasing technical depth

## Common Profile Maintenance Tasks

### Dynamic GitHub Stats (Auto-updating)
```markdown
![GitHub Stats](https://github-readme-stats.vercel.app/api?username=madanzo&show_icons=true&theme=radical)
![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=madanzo&layout=compact&theme=radical)
![GitHub Activity Graph](https://github-readme-activity-graph.vercel.app/graph?username=madanzo&theme=radical)
```

### Tech Stack Badges
```markdown
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
```

## Troubleshooting

### Common Issues
1. **MCP Connection Fails**: Check API keys, restart Claude Desktop
2. **Database Connection Error**: Ensure PostgreSQL service is running
3. **GitHub Stats Not Updating**: APIs are cached, wait 15 minutes
4. **React Build Fails**: Check Node.js version compatibility

### System Requirements
- Node.js v18+ for React development
- PostgreSQL 13+ for database operations
- Python 3.8+ for analytics scripts
- Git for version control