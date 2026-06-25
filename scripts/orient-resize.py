#!/usr/bin/env python3
"""Resize photos for the site, baking EXIF orientation so they never display
sideways. Reads `srcpath|destpath|maxdim` lines on stdin.

ImageOps.exif_transpose rotates the pixels per the EXIF orientation tag and
removes the tag, so the saved JPEG carries upright pixels and NO orientation
flag — which is what Next.js/sharp needs to avoid double-rotating."""
import sys
from PIL import Image, ImageOps

for line in sys.stdin:
    line = line.strip()
    if not line or line.startswith("#"):
        continue
    src, dest, maxdim = line.split("|")
    im = Image.open(src)
    im = ImageOps.exif_transpose(im)          # bake orientation, drop the tag
    im = im.convert("RGB")
    im.thumbnail((int(maxdim), int(maxdim)), Image.LANCZOS)
    im.save(dest, "JPEG", quality=85, optimize=True)  # no exif written
    print(f"  {dest} {im.size[0]}x{im.size[1]}")
