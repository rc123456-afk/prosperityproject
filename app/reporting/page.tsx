/* /reporting: the page's address from September to October 2026. It serves
   the Impact page itself rather than redirecting, and its canonical tag
   points search engines at /impact.

   It must not redirect. Until October 2026, /impact sent a permanent (308)
   redirect here, and browsers cache those indefinitely. A redirect back
   from /reporting to /impact would send anyone with that cached redirect
   round in a loop. */

export { default, metadata } from "../impact/page";
