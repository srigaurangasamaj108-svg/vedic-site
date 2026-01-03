This document consolidates all architectural decisions, design
doctrines, and feature specifications agreed upon in our sessions. Save
this file as MASTER_IMPLEMENTATION_PLAN.md. You can upload this file in
future chats to instantly restore the project context.\
\
**MASTER IMPLEMENTATION PLAN**\
Project: Vedic Knowledge Architecture & Documentation (VKAD) Platform\
Status: Canonical Execution Blueprint\
Version: 1.0 (January 2026)\
**0. EXECUTIVE SUMMARY**\
This project is not a blog or a website; it is a **Digital Cathedral**
for sacred knowledge.

- **Core Philosophy:** \"The interface must disappear.\"

- **Architecture:** File-system based (Markdown), Verse-Atomic.

- **Visual Style:** \"Gita As It Is\" aesthetic (Parchment background,
  Serif fonts).

- **Content Strategy:** Strict separation between **Canon** (Scripture)
  and **Journal** (Practical Application).\
  \
  **1. THE DOCTRINAL FOUNDATION (Non-Negotiables)**\
  1.1 The \"Atomic Verse\" Rule

<!-- -->

- Rule: One verse = One Markdown file. No exceptions.

- **Location:** All scripture resides strictly in src/content/.

- **Hierarchy:** Book -\> Chapter -\> Verse.\
  **1.2 The \"Disappearing Interface\"**

<!-- -->

- Rule: UI controls (headers, menus) must auto-withdraw during reading.

- **Visuals:** No high-saturation colors. No popups. No infinite
  scroll.\
  **1.3 The \"Stewardship\" of Authorship**

+---------------------------+--------------+---------------------------+
| - Rule: Authors are       | **Hex Code** | **Description**           |
|   stewards, not owners.   |              |                           |
|                           |              |                           |
| - **AI Policy:** AI may   |              |                           |
|   be used for drafting    |              |                           |
|   translations but        |              |                           |
|   **must** be labeled as  |              |                           |
|   \"Provisional/Draft\"   |              |                           |
|   in the UI until         |              |                           |
|   verified by a human.\   |              |                           |
|   \                       |              |                           |
|   **2. SYSTEM             |              |                           |
|   ARCHITECTURE**\         |              |                           |
|   2.1 Directory           |              |                           |
|   Structure\              |              |                           |
|   The file system is the  |              |                           |
|   database.\              |              |                           |
|   Plaintext\              |              |                           |
|   \                       |              |                           |
|   \                       |              |                           |
|   \                       |              |                           |
|   src/\                   |              |                           |
|   „¥── content/\          |              |                           |
|   │ „¥── sruti/ \# Vedas, |              |                           |
|   Upanisads\              |              |                           |
|   │ „¥── smrti/ \#        |              |                           |
|   Dharma, Niti, Artha     |              |                           |
|   Shastras\               |              |                           |
|   │ „¥── itihasa/ \#      |              |                           |
|   Ramayana, Mahabharata\  |              |                           |
|   │ „¥── purana/ \#       |              |                           |
|   Mahapuranas\            |              |                           |
|   │ „¥── gita/ \#         |              |                           |
|   Bhagavad Gita (Special  |              |                           |
|   Case)\                  |              |                           |
|   │ └── journal/ \#       |              |                           |
|   Practical Application   |              |                           |
|   (The \"Annex\")\        |              |                           |
|   │ └── strategy/ \#      |              |                           |
|   E.g., Applied           |              |                           |
|   Artha-sastra\           |              |                           |
|   „¥── components/\       |              |                           |
|   │ „¥── verse/ \# The    |              |                           |
|   Reading Components\     |              |                           |
|   │ └── navigation/ \#    |              |                           |
|   Mega Menu, Headers\     |              |                           |
|   └── layouts/\           |              |                           |
|   „¥──                    |              |                           |
|   ReadingLayout.astro \#  |              |                           |
|   Single Column,          |              |                           |
|   Parchment\              |              |                           |
|   └──                     |              |                           |
|   SplitViewLayout.astro   |              |                           |
|   \# For Practical        |              |                           |
|   \"Bridge Pages\"\       |              |                           |
|   **2.2 Color &           |              |                           |
|   Typography Variables**\ |              |                           |
|   Hard-coded values to    |              |                           |
|   ensure                  |              |                           |
|   \"Library-Grade\"       |              |                           |
|   dignity.                |              |                           |
|                           |              |                           |
| **Element**               |              |                           |
+---------------------------+--------------+---------------------------+
| **Background**            | #F9F7F2      | Light Parchment (Primary  |
|                           |              | Reading Surface)          |
+---------------------------+--------------+---------------------------+
| **Alt Background**        | #F3EACB      | Deep Parchment            |
|                           |              | (Accents/Cards)           |
+---------------------------+--------------+---------------------------+
| **Ink (Text)**            | #2A2621      | Soft Black (Never pure    |
|                           |              | black)                    |
+---------------------------+--------------+---------------------------+
| **Sanskrit Red**          | #8B1E1E      | Traditional Oxide Red     |
|                           |              | (Headings/Synonyms)       |
+---------------------------+--------------+---------------------------+
| **Borders**               | #E5DCC5      | Subtle separation lines   |
+---------------------------+--------------+---------------------------+
| **Font (Body)**           | *Serif*      | Merriweather, EB          |
|                           |              | Garamond, or similar      |
+---------------------------+--------------+---------------------------+
| **Font (UI)**             | *Sans*       | Inter or Proxima Nova     |
|                           |              | (Metadata only)           |
+---------------------------+--------------+---------------------------+

\
**3. DATA SCHEMA (THE \"UNIVERSAL VERSE\")**\
Every canonical verse file must adhere to this YAML Frontmatter schema.\
**File:** src/content/gita/chapter-2/verse-1.md\
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
\# 2. VISUAL DATA (Gita As It Is Style)\
\# Stores word-for-word synonyms structurally for precise rendering\
synonyms:\
- { word: \"sañjayaḥ uvāca\", meaning: \"Sañjaya said\" }\
- { word: \"tam\", meaning: \"unto Arjuna\" }\
- { word: \"tathā\", meaning: \"thus\" }\
\
\# 3. DEEP STUDY LAYER (Traditional Commentaries)\
\# Supports toggling languages and AI status\
commentaries:\
- author: \"Śrīdhara Svāmī\"\
sanskrit: \"dvitīye śoka-saṁtaptam arjunaṁ\...\"\
iast: \"dvitīye śoka-saṁtaptam arjunaṁ\...\" \# Optional (Can be
auto-generated)\
translation: \"In the second chapter\...\" \# English Translation\
source_status: \"ai-draft\" \# Options: \"canonical\", \"verified\",
\"ai-draft\"\
\
- author: \"Viśvanātha Cakravartī\"\
sanskrit: \"ātmānātma-vivekena\...\"\
translation: \"\" \# Empty = Display Sanskrit only logic\
source_status: \"pending\"\
\
\# 4. PRACTICAL APPLICATION (The Bridge)\
\# Links to a \"Journal\" entry for modern application\
related_journal_slug: \"managing-grief-corporate-leadership\"\
\-\--\
\
**4. UI COMPONENT SPECIFICATIONS**\
4.1 The \"Smart\" Verse Card\
This component renders the canonical text.

- **Order:** Sanskrit (Center/Large) → Transliteration (Italic) →
  Synonyms (Word-for-Word) → Translation (Bold) → Purport.

- **Behavior:**

  - **Synonyms:** Must be rendered as Span(Sanskrit Red) \--
    Span(English Black);.

  - **Translation:** Justified text, bold weight.\
    **4.2 The \"Scholar\'s Fold\" (Commentary Section)**\
    Located at the bottom of the Verse Page.

<!-- -->

- **Global Filter Bar:** Buttons to toggle view mode: \[Sanskrit\] \|
  \[Roman\] \| \[English\].

- **AI Badge Logic:**

  - IF source_status == \'ai-draft\' THEN render \"⚠️ AI Draft\"

  - IF translation == null THEN render \"Translation Pending\"\
    **4.3 The \"Bridge Page\" (Practical Application)**\
    Used for content like *\"Kautilya's Strategy for Modern Managers.\"*

<!-- -->

- **Layout:** **Split View** (Desktop).

  - **Left Panel (30%):** The Fixed Anchor (Scripture Verse).
    Background: Parchment #F9F7F2.

  - **Right Panel (70%):** The Application (Article, Diagrams, Case
    Study). Background: White/Clean.

<!-- -->

- **Visuals:** Diagrams (Matrices, Charts) allowed. High-quality
  editorial photography allowed. No decorative \"stock\" art.\
  \
  **5. CONTENT STRATEGY**\
  5.1 The \"Annex\" Rule (Blogs/Journals)

<!-- -->

- Rule: Practical/Engaging content lives in src/content/journal/.

- **Constraint:** It must never be the \"Home\" page. It is accessed via
  **Themes** or **Life Paths**.

- **Anchor:** Every article must link back to at least one source
  verse.\
  **5.2 Departmental Curation**

<!-- -->

- Definition: Departments are *syllabi*, not folders.

- **Example:** \"Department of Nīti (Strategy)\" curates texts from
  *Artha-śāstra* and *Manu-smṛti* into a step-by-step reading path.\
  \
  **6. EXECUTION ROADMAP**\
  Phase 1: Foundation (Week 1)

1.  Initialize Project (Astro + Tailwind).

2.  Implement MASTER_FRONTMATTER_SCHEMA.

3.  Build the file-system router (src/content/\...).\
    **Phase 2: The Reading Core (Week 2)**

<!-- -->

1.  Build VerseLayout with the \"Parchment\" CSS variables.

2.  Implement the **Synonyms Renderer** (Red/Black styling).

3.  Implement the **Commentary Toggle System**.\
    **Phase 3: The Practical Layer (Week 3)**

<!-- -->

1.  Build the SplitViewLayout for Journal entries.

2.  Create the \"Department\" landing page template.

3.  Write one \"Golden Sample\" Bridge Page (e.g., Kautilya).\
    **Phase 4: Quality Assurance (The \"Silence\" Test)**

<!-- -->

1.  Verify PDF references are secondary (links only).

2.  Verify \"AI Draft\" badges appear correctly.

3.  Verify the interface \"disappears\" on scroll.\
    \
    *End of Master Implementation Plan*
