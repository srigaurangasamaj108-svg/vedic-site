VKAD-01: CANON & STRUCTURE
Vedic Knowledge Architecture & Documentation

0. PURPOSE OF THIS DOCUMENT
This document defines the canonical rules governing:
* What constitutes scripture in the platform
* How scripture is structured, stored, and referenced
* What is immutable vs what is editorial
* How future expansion must occur without distortion
If any design, feature, or contribution conflicts with this document,the design or feature must be removed.
Śāstra is primary.Technology is subordinate.

1. FUNDAMENTAL AXIOM
One verse (śloka / sūtra / mantra) is the smallest indivisible canonical unit.
Everything in the system is organized around this axiom.
There is:
* no page without a verse
* no theme without verses
* no life-path without verses
All higher structures are views, not sources.

2. CANONICAL TEXT HIERARCHY (AXIS 1)
The platform recognizes the traditional hierarchy of Vedic literature.
This hierarchy governs storage, navigation, and authority, not popularity.
2.1 Primary Canonical Categories
The following categories are structural, not thematic:
1. Śruti (Vedas)
2. Smṛti
3. Itihāsa
4. Purāṇa
5. Āgama & Tantra
6. Vedāṅga
7. Upaveda
These categories must never be mixed at the storage level.

2.2 Text-Level Canon
Each scripture is treated as a complete, bounded work.
Examples:
* Bhagavad Gītā
* Śrīmad Bhāgavatam
* Manu-smṛti
* Upaniṣads
Each text:
* has its own folder
* has its own internal chapter structure
* is not merged with other texts

3. STORAGE DOCTRINE (NON-NEGOTIABLE)
3.1 File-System as Canon
Canonical scripture is stored as plain text Markdown files.
This ensures:
* longevity
* portability
* independence from software platforms
* resistance to technological obsolescence
3.2 Canonical Folder Pattern
src/content/
  {text-name}/
    chapter-{n}/
      verse-{m}.md
Example:
src/content/gita/chapter-2/verse-47.md
This structure must be followed exactly for all texts.

3.3 One Verse = One File
Each verse file represents:
* exactly one śloka / mantra / sūtra
* no partial verses
* no combined verses
* no summaries masquerading as verses
This rule preserves:
* precision
* citation integrity
* scholarly trust

4. CANONICAL METADATA (FRONTMATTER)
Each verse file must contain a frontmatter block with canonical metadata.
4.1 Required Metadata Fields
book:
chapter:
verse:
title:
These fields define identity, not interpretation.
They must match the traditional numbering and naming.

4.2 Optional but Recommended Metadata
commentary_author:
themes:
life_paths:
These fields are editorial overlays, not canonical scripture.
They may evolve, expand, or be revised.

4.3 What Must NEVER Appear in Frontmatter
* Interpretive conclusions
* Personal opinions
* UI instructions
* Modern analogies
* Emotional language
Frontmatter is structural, not expressive.

5. CONTENT LAYER SEPARATION
Each verse file must maintain clear internal separation.
5.1 Canonical Content Sections
The following sections are recognized:
1. Sanskrit
2. Transliteration (IAST)
3. Translation
4. Traditional Commentary
Each section serves a distinct purpose and must not bleed into another.

5.2 Commentary Discipline
Commentary must be:
* explicitly attributed
* rooted in traditional bhāṣya
* clearly separated from translation
Modern explanation may exist, but must never replace traditional commentary.

6. IMMUTABILITY RULES
6.1 Immutable Elements
The following must never be altered once published:
* Sanskrit text
* Chapter and verse numbering
* Canonical structure
* Original source attribution
Corrections may occur only to fix transcription errors, and must be logged.

6.2 Mutable Elements
The following may evolve:
* Translation phrasing (with care)
* Commentary expansion
* Theme tagging
* Life-path classification
Mutable elements must always remain subordinate to scripture.

7. CANON VS VIEW (CRITICAL DISTINCTION)
Canon
* Exists independently of UI
* Stored in src/content
* Stable and permanent
Views
* Reading mode
* Theme mode
* Life-path mode
* Research mode
Views must never modify canon.They only present it differently.

8. EXPANSION RULES
When adding new texts:
1. Confirm canonical legitimacy
2. Create a new top-level folder
3. Follow the same chapter/verse pattern
4. Never merge texts for convenience
5. Never shortcut structure for speed
Expansion must preserve clarity over quantity.

9. WHAT THIS DOCUMENT PREVENTS
This document explicitly prevents:
* Content feeds
* Algorithmic prioritization
* Popularity-based ordering
* Mixing scripture with opinion
* UI-driven distortion of śāstra
If such features appear, they violate VKAD-01.

10. CLOSING PRINCIPLE
This platform is not a website.It is a custodial system for sacred knowledge.
Every future decision must ask:
Does this preserve the dignity, clarity, and authority of the canon?
If the answer is not a clear “yes”, the decision is rejected.

End of VKAD-01: Canon & Structure