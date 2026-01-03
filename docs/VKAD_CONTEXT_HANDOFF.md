Here is the comprehensive, \"Gold Master\" version of your context
handoff file. Save this locally.\
In any future conversation, your first prompt should simply be:\
*\"I am uploading the VKAD Master Context. Please read it, confirm you
understand my \'Architect-First\' protocol, and await my next
instruction.\"*\
\
**File Content: VKAD_CONTEXT_HANDOFF.md**\
Markdown\
\
\
\
\# VKAD PROJECT: MASTER CONTEXT HANDOFF\
**\*\*Project:\*\*** Vedic Knowledge Architecture & Documentation (VKAD)
Platform\
**\*\*Status:\*\*** Canonical Architecture Locked / Implementation Phase
1\
**\*\*Timestamp:\*\*** January 03, 2026\
**\*\*Current Phase:\*\*** Core Reading Experience & Advanced UI
Components\
\
\-\--\
\
\## 0. USER PROTOCOL: THE \"ARCHITECT-FIRST\" WORKFLOW (MANDATORY)\
**\*\*The User acts as Chief Architect. The AI acts as
Consultant.\*\***\
1. **\*\*Phase 1 (The Overview):\*\*** Upon receiving a request, the AI
must first provide **\*\*Technical Guidelines\*\*** and **\*\*Logical
Overviews\*\*** (Flowcharts, Logic Maps, Trade-offs).\
2. **\*\*STOP:\*\*** The AI must **\*\*wait\*\*** for user
confirmation/improvisation.\
3. **\*\*Phase 2 (The Execution):\*\*** Only *\*after\** explicit
approval, the AI provides the Step-by-Step Implementation Plan and
Code.\
*\*Mood:\** Deliberate, iterative, \"Silence over Engagement.\" Do not
rush to syntax.\
\
\-\--\
\
\## 1. CORE PHILOSOPHY & DOCTRINE\
\* **\*\*The Metaphor:\*\*** \"A Digital Cathedral.\" Not a blog, not a
feed. A custodial system for sacred text.\
\* **\*\*VKAD-03 (UI Doctrine):\*\*** \"The interface must disappear.\"
The Reading Page is the primary object. No popups, no infinite scroll,
no high-saturation colors.\
\* **\*\*VKAD-01 (Canon Doctrine):\*\*** One Verse = One File. The file
system is the database. Technology is subordinate to Śāstra.\
\* **\*\*VKAD-02 (Authorship):\*\*** Authors are stewards, not owners.
AI translations are permitted *\*only\** as \"Provisional Witnesses\"
with visible \"Draft\" badges.\
\
\-\--\
\
\## 2. SYSTEM ARCHITECTURE\
\
\### A. Tech Stack\
\* **\*\*Framework:\*\*** Astro (Static Site Generation,
Content-Focused).\
\* **\*\*Styling:\*\*** Tailwind CSS (configured for \"Parchment\"
palette).\
\* **\*\*Data Source:\*\*** Markdown/MDX files with rigid Frontmatter
schemas.\
\
\### B. Directory Structure\
\`\`\`text\
src/\
„¥── content/\
│ „¥── gita/ \# Primary Scripture (e.g., /chapter-2/verse-1.md)\
│ „¥── sruti/ \# Vedas, Upanisads\
│ „¥── smrti/ \# Dharma & Artha Shastras\
│ „¥── journal/ \# Practical Application (The \"Annex\")\
│ └── departments/ \# Curated Syllabi (VKAD-09)\
„¥── components/\
│ „¥── verse/\
│ │ „¥── SmartVerseCard.astro \# Main Reading Component\
│ │ „¥── ViewControls.jsx \# Granular Visibility Toggles\
│ │ └── CommentaryStack.astro \# Scholar\'s Fold (Traditional Tīkās)\
│ └── layouts/\
│ „¥── ReadingLayout.astro \# Single Column, Parchment\
│ └── SplitViewLayout.astro \# Bridge Page (Verse Left / Article Right)\
\
**3. DATA SCHEMA: THE \"UNIVERSAL VERSE\"**\
All canonical verse files must strictly adhere to this YAML Frontmatter
schema.\
**File Template:** src/content/{book}/chapter-{n}/verse-{m}.md\
YAML\
\
\
\
\-\--\
\# 1. CANONICAL IDENTITY (Immutable)\
book: \"Bhagavad Gītā\"\
chapter: 2\
verse: 1\
title: \"Arjuna\'s Despondency\"\
\
\# 2. VISUAL DATA (\"Gita As It Is\" Style)\
\# Stores word-for-word synonyms structurally for Red/Black rendering\
synonyms:\
- { word: \"sañjayaḥ uvāca\", meaning: \"Sañjaya said\" }\
- { word: \"tam\", meaning: \"unto Arjuna\" }\
- { word: \"tathā\", meaning: \"thus\" }\
\
\# 3. DEEP STUDY LAYER (Traditional Commentaries)\
commentaries:\
- author: \"Śrīdhara Svāmī\"\
sanskrit: \"dvitīye śoka-saṁtaptam\...\"\
iast: \"dvitīye śoka-saṁtaptam\...\" \# Optional: Auto-generated\
translation: \"In the second chapter\...\" \# English Translation\
source_status: \"ai-draft\" \# Options: \"canonical\", \"verified\",
\"ai-draft\"\
\# Note: If \'source_status\' is \'ai-draft\', UI renders a warning
badge.\
\
- author: \"Viśvanātha Cakravartī\"\
sanskrit: \"ātmānātma-vivekena\...\"\
translation: \"\" \# Empty string triggers \"Sanskrit Only\" logic\
source_status: \"pending\"\
\
\# 4. PRACTICAL APPLICATION (The Bridge)\
\# Links to a \"Journal\" entry for modern application (Split View)\
related_journal_slug: \"managing-grief-corporate-leadership\"\
\-\--\
\
**4. DESIGN SYSTEM (VISUAL SILENCE)**\
Palette Variables

  ------------------------ -------------- ----------------------------------------
  Element                  **Hex Code**   **Usage**
  **Primary Background**   #F9F7F2        Light Parchment (Reading Surface)
  **Accent Background**    #F3EACB        Deep Parchment (Cards/Headers)
  **Ink (Text)**           #2A2621        Soft Black (Never pure black)
  **Canonical Red**        #8B1E1E        Oxide Red (Headings, Synonym Sanskrit)
  **Borders**              #E5DCC5        Subtle separation lines
  ------------------------ -------------- ----------------------------------------

Typography

- Body (Scripture): High-quality Serif (e.g., *Merriweather*, *EB
  Garamond*).

- **UI/Metadata:** Restrained Sans-Serif (e.g., *Inter*, *Proxima
  Nova*).\
  \
  **5. FEATURE SPECIFICATIONS**\
  A. The \"Smart\" Verse Card

<!-- -->

- Layout: Single Column, Centered.

- **Order:** Sanskrit (Large/Center) → IAST (Italic) → Synonyms
  (Red/Black) → Translation (Bold/Justified) → Purport.

- **Behavior:** Synonyms are rendered as a flow, not a list.\
  **B. Granular Visibility Controller (Advanced View)**

<!-- -->

- Function: A \"Pill\" toolbar hidden behind an \"Advanced View\"
  toggle.

- **Capabilities:** Users can toggle individual sections (e.g., Hide
  Purport, Hide Sanskrit, Hide Synonyms).

- **Memory:** User preferences are stored in localStorage (\"User
  Memory\"). The site \"remembers\" how the user likes to read.\
  **C. The Scholar\'s Fold (Traditional Tīkās)**

<!-- -->

- Location: Bottom of the Verse Page (Distinct Section).

- **UI:** Stacked Accordion or Clean Cards.

- **Script Switcher:** Global toggle for this section: \[Sanskrit\] \|
  \[Roman\] \| \[English\].

- **AI Policy:** If source_status: \"ai-draft\", display a subtle \"⚠️
  Unverified Draft\" badge.\
  **D. The Bridge Page (Practical Application)**

<!-- -->

- Concept: \"The Annex\" strategy. Connects immutable scripture to
  modern life.

- **Layout:** **Split View** (Desktop).

  - **Left Panel (30%):** Fixed Verse (The Anchor).

  - **Right Panel (70%):** Scrolling Article (The Guide).

<!-- -->

- **Content:** High-quality diagrams (Concept Maps) allowed. No stock
  photos. Accessed via \"Life Paths\" or \"Themes.\"\
  \
  **6. DOCTRINAL CHEAT SHEET**

<!-- -->

- VKAD-01: File structure is canon. Never merge verses.

- **VKAD-04:** PDFs are \"Witnesses\" only. They live in public/pdfs/
  and are never the default view.

- **VKAD-09:** Departments are syllabi (Study Paths), not folders.

- **General:** Silence \> Engagement. Clarity \> Novelty.\
  **7. IMMEDIATE EXECUTION QUEUE**

1.  Foundation: Initialize Astro project with MASTER_FRONTMATTER_SCHEMA.

2.  **UI Core:** Build VerseViewControls (The Visibility Toggles).

3.  **Layout:** Build SplitViewLayout (The Bridge Page).
