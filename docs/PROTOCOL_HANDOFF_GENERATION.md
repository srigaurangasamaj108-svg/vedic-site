Here is the standardized protocol file. Save this as
PROTOCOL_HANDOFF_GENERATION.md. It will instruct future AI instances on
exactly how to read your conversation history and generate an updated
\"Master Context\" file.\
\
**File Content: PROTOCOL_HANDOFF_GENERATION.md**\
Markdown\
\
\
\
\
\# PROTOCOL: GENERATING THE \"VKAD CONTEXT HANDOFF\"\
**\*\*Purpose:\*\*** To automate the creation of the Project State file
for cross-session continuity.\
**\*\*Trigger:\*\*** When the user requests: *\*\"Generate Handoff\"\**,
*\*\"Update Context File\"\**, or *\*\"Finalize Context\"\**.\
\
\## 1. SCANNING PHASE (The Analysis)\
The AI must review the entire active conversation and extract the
following:\
\* **\*\*New Decisions:\*\*** Any changes to architecture, styling,
logic, or doctrine (e.g., \"AI Badge Policy\").\
\* **\*\*New Code/Schemas:\*\*** Any final data structures (Frontmatter)
or component logic agreed upon.\
\* **\*\*Feature Status:\*\*** Identify which features moved from
\"Concept\" to \"Approved\" or \"Implemented\".\
\* **\*\*Current Mood:\*\*** The user\'s preferred working style (e.g.,
\"Architect-First\").\
\
\## 2. COMPILATION PHASE (The Update)\
The AI must update the \`VKAD_CONTEXT_HANDOFF.md\` content following
this structure:\
\
\### A. Header Updates\
\* **\*\*Timestamp:\*\*** Update to the current Date/Time.\
\* **\*\*Phase:\*\*** Update if the project has moved (e.g., from
Architecture -\> Implementation).\
\
\### B. Content Updates\
\* **\*\*Section 0 (User Protocol):\*\*** *\*CRITICAL.\** Ensure the
\"Architect-First\" protocol is at the top.\
\* **\*\*Section 1 & 2 (Doctrine/Architecture):\*\*** Add any new
directory paths or tech stack decisions.\
\* **\*\*Section 3 (Data Schema):\*\*** Update the YAML frontmatter
example if new fields (like \`synonyms\` or \`source_status\`) were
added.\
\* **\*\*Section 5 (Feature Specs):\*\*** Update the specifications for
components (e.g., \"Granular Visibility Controller\" logic).\
\* **\*\*Section 7 (Execution Queue):\*\*** Refresh the immediate \"Next
Steps\" based on the latest conversation.\
\
\## 3. FORMATTING RULES\
\* **\*\*No Summaries:\*\*** Do not vaguely summarize. Be specific
(e.g., include the exact Hex codes \`#F9F7F2\` or exact folder paths).\
\* **\*\*Copy-Paste Ready:\*\*** The output must be a single, clean Code
Block ready for the user to save.\
\* **\*\*Consistency:\*\*** Use the exact same headings as the previous
version to maintain structure.\
\
\## 4. STANDARD OUTPUT PROMPT\
*\*When presenting the result, use this standard response:\**\
\
\> \"I have updated the VKAD CONTEXT HANDOFF file. It now includes
\[List 1-2 major changes\]. You can copy the block below to start your
next session.\"
