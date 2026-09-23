# Downloads

This folder holds the actual files the "Download" buttons hand to visitors —
right now, the three language editions of the *Knowing Your Money* textbook.

**You don't write any code here.** The buttons on `/resources/women` already
point at the three paths below. The moment you place files with these exact
names in this folder, the buttons start working:

```
knowing-your-money-bn.pdf     ← Bengali edition
knowing-your-money-hi.pdf     ← Hindi edition
knowing-your-money-en.pdf     ← English edition
```

So "create the PDFs" just means: export your finished textbook to PDF (from
InDesign, Word, Google Docs, Canva — wherever it's laid out), one file per
language, named exactly as above, dropped in here.

## After you add them

In `components/resources/sections.tsx`, the `TEXTBOOK_EDITIONS` list shows a
file size on each card (e.g. `"8.2 MB"`). Update those to match your real files
so the labels are honest. The filenames there must stay in sync with the files
in this folder.

To add a *new* downloadable file later (a facilitator's guide, a worksheet
pack), drop it here and add an `<a href="/downloads/your-file.pdf" download>` —
or copy one of the existing `download-card` blocks in that same file.
