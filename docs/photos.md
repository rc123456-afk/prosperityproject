# Photos

Drop real photographs here, then reference them from a `<Photo>` with a leading
slash — the path is relative to this `public/` folder:

```tsx
<Photo aspect="cinema" src="/photos/cohort-2023.jpg" alt="The first cohort, Howrah, 2023" />
```

## How to swap a placeholder for a real photo

Find the `<Photo …/>` you want to fill (every image on the site is one). Replace
the placeholder props with a real one:

```tsx
// before — tinted gradient placeholder
<Photo aspect="cinema" tone="warm" tag="the first 2023 cohort · Howrah" />

// after — real photograph
<Photo aspect="cinema" src="/photos/cohort-2023.jpg" alt="The first cohort, Howrah, 2023" />
```

You can keep `tone` if you like — it shows as a tinted blur-in while the photo
loads. `tag`/`stamp` are ignored once `src` is set, so you can drop them.

## Props that matter for real photos

- `src`   — required. Path under /public, e.g. `/photos/name.jpg`.
- `alt`   — required for accessibility. One short descriptive sentence.
- `aspect`— crop shape: `portrait` `landscape` `square` `cinema` `hero` `tall`.
            The photo is cropped to fill this; it never stretches.
- `objectPosition` — optional. Nudge the crop, e.g. `"center top"` to keep a
            face from being cut off.
- `priority` — set `true` only on a single above-the-fold hero image per page.

## Practical notes

- **Format:** JPG for photos, PNG only for graphics with text/flat colour.
- **Size:** export at ~2000px on the long edge. Next.js generates the smaller
  responsive versions automatically — don't pre-shrink.
- **Filenames:** lowercase, hyphens, no spaces (`module-04-walk.jpg`).
- Subfolders are fine: `/photos/stories/anjali.jpg`, etc.
