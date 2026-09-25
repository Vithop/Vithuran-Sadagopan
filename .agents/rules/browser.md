# Browser Automation Preferences

- **Default Automation Engine**: Always prioritize the built-in Antigravity browser automation (`browser_subagent`) for visual inspection, UI verification, layout checking, and capturing screenshots.
- **Playwright MCP Exception**: Only invoke Playwright MCP tools (`playwright` server) when the task explicitly requires repeated, continuous programmatic browser scripting or consistent long-running automation that requires external script loop control.
