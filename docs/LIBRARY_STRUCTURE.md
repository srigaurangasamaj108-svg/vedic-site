# VKAD Master Library Architecture Reference
**Status:** Final Canonical Structure
**Last Updated:** January 2026

## 1. Primary Doctrine
- **Canon First**: Technology is subordinate to Śāstra.
- **Atomic Units**: One verse = one file in `src/content/`.
- **Reference Vault**: All PDFs stay in `public/pdfs/`.

## 2. Complete Content Hierarchy (`src/content/`)
This is the structured reading path.

### I. Śruti (Vedas)
- `sruti/samhita/`
- `sruti/brahmana/`
- `sruti/aranyaka/`
- `sruti/upanisad/`

### II. Smṛti (Traditional Texts)
- `smrti/dharma-shastra/manu-samhita/`
- `smrti/dharma-shastra/yajnavalkya-smrti/`
- `smrti/dharma-shastra/parashara-smrti/`
- `smrti/niti-shastra/`
- `smrti/artha-shastra/`
- `smrti/kama-shastra/kama-sutra/`

### III. Itihāsa (Epics)
- `itihasa/ramayana/`
- `itihasa/mahabharata/`

### IV. Purāṇas
**Mahāpurāṇas:**
- `purana/mahapurana/bhagavata/` | `visnu/` | `padma/` | `garuda/` | `narada/` | `varaha/`
- `purana/mahapurana/brahma-vaivarta/` | `vamana/` | `bhavisya/` | `brahmanda/` | `brahma/`
- `purana/mahapurana/markandeya/` | `kurma/` | `matsya/` | `skanda/` | `siva/` | `linga/` | `agni/`
**Upapurāṇas:**
- `purana/upapurana/narasimha/` | `vasudeva/` | `brhan-naradiya/` | `samba/` | `hamsa/` | `nandi/`
- `purana/upapurana/sanatkumara/` | `parasara/` | `tarangini/` | `devi-bhagavata/` | `kalika/`
- `purana/upapurana/durga/` | `mahabhagavata/` | `siva-rahasya/` | `kapila/` | `varuna/` | `saura/` | `adi/`

### V. Āgamas & Gauḍīya Vaiṣṇava
- `agama/gaudiya/` | `saiva/` | `vaisnava/` | `jain/` | `buddhist/`
- `gaudiya-vaisnava/caitanya-caritamrta/`
- `gaudiya-vaisnava/sat-sandarbha/`
- `gaudiya-vaisnava/brhad-bhagavatamrta/`
- `gaudiya-vaisnava/upadesamrta/`
- `gaudiya-vaisnava/ujjvala-nilamani/`
- `gaudiya-vaisnava/madhurya-kadambini/`
- `gaudiya-vaisnava/history/` | `biographies/`

### VI. Upaveda, Vedāṅga & Upaṅga
- `upaveda/ayurveda/` | `dhanurveda/` | `gandharvaveda/` | `sthapatyaveda/`
- `vedanga/shiksha/` | `chandas/` | `vyakarana/` | `nirukta/` | `kalpa/` | `jyotisha/`
- `upanga/alankara/` | `natya-shastra/` | `kavya/` | `subhashita/`

### VII. Ṣaṭ-darśana (Philosophy)
- `darshana/nyaya/` | `vaisheshika/` | `samkhya/` | `yoga/` | `mimamsa/` | `vedanta/`

## 3. Complete PDF Vault Hierarchy (`public/pdfs/`)
This mirrors the content hierarchy for "Supporting Witnesses".

- `public/pdfs/sruti/` (Subfolders: samhita, brahmana, aranyaka, upanisad)
- `public/pdfs/smrti/` (Subfolders: dharma-shastra, niti-shastra, artha-shastra, kama-shastra)
- `public/pdfs/itihasa/` (Subfolders: ramayana, mahabharata)
- `public/pdfs/purana/mahapurana/` (All 18 named folders)
- `public/pdfs/purana/upapurana/`
- `public/pdfs/agama/`
- `public/pdfs/gaudiya-vaisnava/`
- `public/pdfs/upaveda/`
- `public/pdfs/vedanga/`
- `public/pdfs/darshana/`

## 4. PDF Classification Doctrine (VKAD-04)
To prevent "Scribd-like" decay, all PDFs must reside in one of two sub-directories:

### A. /canonical/
- **Content:** Scans of original manuscripts, prints, or critical editions.
- **Naming:** Must include text name and edition (e.g., `bhagavata-nanya-edition.pdf`).
- **Use:** Verification and source authentication.

### B. /thematic/
- **Content:** Academic papers, philological notes, and topic-based studies.
- **Naming:** Must follow **VKAD-05** slugs (e.g., `gita-thematic-detachment-study.pdf`).
- **Use:** Deep research only; never part of normal reading flow.

## 6. Thematic PDF Organization
[cite_start]To prevent "Scribd-style" hoarding:
- **Location:** `public/pdfs/thematic/{department-slug}/`
- [cite_start]**Rule:** Every PDF must be linked from at least one Department `.md` file[cite: 11].
- **Constraint:** If a PDF is used for training, it must be classified as 'Research & Auxiliary'.