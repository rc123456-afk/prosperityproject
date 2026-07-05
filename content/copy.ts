/* ============================================================================
   SITE COPY — edit the words here and they change on the website.

   HOW TO EDIT
   • Change only the text inside the "quotes". Leave the labels (the words
     before the colon) and the quotes/commas alone.
   • Light formatting you can use inside any text:
        *italic*              ->  italic (used for book titles like *Knowing Your Money*)
        **bold**              ->  bold
        [click here](/about)  ->  a link to another page
   • Some values are lists — one item per line, each in its own "quotes",
     separated by commas. Add or remove lines to add or remove paragraphs.
   • Things in square brackets like [ N ] or [ YEAR ] are placeholders —
     leave them; just drop the real figure/word in when you have it.
   • Grouped by page, top to bottom, the way you'd click through the site.

   If anything here ever looks confusing or breaks the site, don't worry — it's
   safe to ask Claude to fix the formatting.
   ============================================================================ */

export const copy = {
  /* ------------------------------------------------------- SITE-WIDE (chrome) */
  site: {
    wordmark: "The Prosperity Project",
    footerDevaLine: "समृद्धि की पाठशाला",
    footerRomanLine: "A school of prosperity",
    tagline: "Luck alone is not enough — knowledge is everything.",
  },

  /* ----------------------------------------------------------------- HOMEPAGE */
  home: {
    hero: {
      // Photo-forward hero: keep text minimal. Leave kicker "" to hide the eyebrow;
      // set standfirst "" to hide the subhead entirely. The big Bandhan line now
      // lives on the inner pages + footer, not here.
      kicker: "",
      headline: "For the people who build the world.",
      standfirst: "Practical financial literacy — ten modules, three languages.",
      ctaLabel: "Read the curriculum",
    },
    whatThisIs: {
      sectionLabel: "What this is",
      body:
        "The Prosperity Project teaches practical money skills — bank accounts, budgeting, debt, savings, scam protection, digital payments, emergency planning — to people the financial system has historically ignored. The flagship curriculum, *Knowing Your Money*, is ten modules grounded in real interviews, taught to women in **West Bengal** — delivered with **Bandhan-Konnagar** and supported by **Bandhan Bank Ltd**.",
    },
    whereWeWork: {
      sectionLabel: "Where we work",
      heading: "Ten modules, taught in the rooms the community already trusts.",
      region: "West Bengal · India",
      cardTitle: "Women in West Bengal",
      cardCopy:
        "Workshops in **Bengali and Hindi**, run in the halls a community already trusts — so far in **Baruipur**, near Kolkata. A cohort of fifty or more women works through the ten modules together, and the learning carries on in follow-up sessions, several of them over video call. Some students have since come back to facilitate.",
      curriculumLinkLabel: "Read the curriculum",
      storiesLinkLabel: "Stories from the cohort",
    },
    numbers: {
      sectionLabel: "The work, in numbers",
      // The sentence below keeps its number placeholders ([ N ], [ YEAR ]) in
      // code so they stay styled; drop the real figures in there when ready.
    },
    workshopsPreview: {
      sectionLabel: "How a workshop runs",
      heading:
        "Ten modules, fifty women, one room the community already trusts — and follow-up that continues after.",
      body:
        "We work with partners who already have a hall, a livelihood programme, or a self-help group running. A cohort of [ fifty or more ] women works through the ten modules of *Knowing Your Money* together; what follows is shaped around them — follow-up sessions, several over video call, that return to whatever a student still needs, with her progress tracked along the way. Facilitators are drawn from the same community, many of them former students. Sessions run in Bengali and Hindi.",
      crpLabel: "A method",
      crpTitle: "The CRP Model",
      crpBody:
        "Students complete the curriculum themselves, then return as facilitators — so the work travels in a familiar voice and stays after the founder leaves the room.",
      linkLabel: "See a workshop in session",
    },
    storiesPreview: {
      sectionLabel: "Stories from the cohort",
      quote:
        "[ A line from a graduate — in her own words ]",
      original:
        "[ The same line, in Bengali ]",
      citeName: "[ Name ]",
      citeMeta: "Module 02 graduate",
      citeLang: "spoken in Bengali",
      linkLabel: "Read more stories",
    },
    galleryPreview: {
      sectionLabel: "Gallery",
      heading: "The classrooms, the materials, the people in the room.",
      linkLabel: "See the full gallery",
    },
  },

  /* -------------------------------------------------------------- CURRICULUM */
  curriculum: {
    hero: {
      kicker: "Curriculum",
      headline: "Knowing Your Money",
      standfirst:
        "For the women's cohorts in West Bengal — delivered in Bengali and Hindi, with Bandhan-Konnagar and the support of Bandhan Bank Ltd.",
    },
    origin: {
      sectionLabel: "Where it came from",
      body:
        "*Knowing Your Money* began with one person. **Shampa** looked after the founder from the time he was born; over the years it became clear how little room the system had left her — no account fully her own, nowhere truly safe for what she managed to save. So he sat with her, over weeks of interviews, and asked the questions he had never thought to ask: where the money went, who decided, what she wished she had been taught. What those conversations revealed was not a gap in what she knew, but a gap in what she could reach. Every one of the ten modules carries a real question, worked out alongside a real person. The curriculum was not adapted from a Western framework — it was built, sentence by sentence, from those interviews.",
      linkLabel: "Read the full origin story",
      interviewSlot: "Interview analysis document — coming soon",
    },
    premise: {
      sectionLabel: "How it is taught",
      body:
        "Every module opens with a story — a recurring cast of characters drawn from the original interviews, whose households we follow across the curriculum. A facilitator from the same community leads the room; translation between Bengali and Hindi runs through every session, so no student is asked to stretch for language. Each student leaves with the *Knowing Your Money* textbook in her own script. A short video explainer accompanies each module, recorded for households where a daughter or son can sit with their mother and watch together at home. The work travels in the voice it was learned in.",
      points: [
        "Real interviews shape every module.",
        "Recurring story characters carry the lessons across the curriculum.",
        "Live translation runs through every workshop.",
        "Every student keeps the textbook.",
        "One short video explainer per module, for home.",
      ],
    },
    textbook: {
      sectionLabel: "The textbook",
      sectionHint:
        "Three editions — Bengali, Hindi, English. Each routes to the resources page.",
      heading: "*Knowing Your Money,* in the language of the room.",
      intro:
        "Every student receives the textbook in her own script — 24 pages, typeset for reading aloud, with module-by-module worksheets at the back. The English edition is free to download now; the Bengali and Hindi editions are in translation.",
      linkLabel: "All resources",
      note: "Print copies are distributed in workshops — not available by post.",
    },
  },

  /* --------------------------------------------------------------- WORKSHOPS */
  workshops: {
    hero: {
      kicker: "Workshops",
      headline: "How a workshop runs.",
      standfirst:
        "All ten modules in a room the community already trusts, then follow-up for as long as it takes — so far in Baruipur, near Kolkata, in Bengali with Hindi alongside it.",
    },
    format: {
      sectionLabel: "The format",
      sectionHint: "Ten modules. Fifty-plus women. Follow-up that continues after.",
      body: [
        "A workshop gathers **fifty or more women** in a space the community already trusts — a Self-Help Group hall, a livelihood room, a partner's premises. Together the cohort works through the **ten modules** of *Knowing Your Money*. The first sessions introduce the whole curriculum; what comes after is shaped around the room.",
        "**Bengali** is the working language, with **Hindi** alongside it; most facilitators move between the two in a sentence. Each student gets the *Knowing Your Money* textbook in her own script and a notebook to track her own household.",
        "The work doesn't end when the modules do. Follow-up sessions — several of them over video call — return to whatever a cohort still needs, from opening an account in her own name to setting up UPI, with each woman's progress tracked along the way. Some students go on to facilitate the next cohort themselves.",
      ],
    },
    pillars: {
      sectionLabel: "The three pillars",
      sectionHint: "Control · Protect · Grow. Every module belongs to one.",
      intro:
        "The ten modules are organised under three pillars. Control, then protect, then grow — in that order, because you cannot protect or grow what you do not yet command.",
      control:
        "Modules that put a student in command of her own money — her name on the account, her notebook on the table, her wages negotiated up to what they are worth.",
      protect:
        "Modules that defend against loss — scams that target the careful saver, debt taken without understanding, and the emergency that arrives unannounced.",
      grow:
        "Modules that build wealth over time — the compounding habit, the safe place to keep what is saved, the first real investment, and the digital rails that carry it all.",
    },
    crp: {
      sectionLabel: "The CRP Model",
      sectionHint: "How the work travels — and stays.",
      heading: "The CRP Model.",
      sub: "Community Resource Person — student first, facilitator second.",
      body: [
        "The **CRP Model** — Community Resource Person — is the spine of how this work travels. A student completes the ten modules, then — if she wants to teach the next cohort — trains to facilitate it herself: deeper work on every module, and practice in front of a room in Bengali and Hindi before she leads one of her own.",
        "She then returns to her own community, sometimes her own neighbourhood, and runs the workshop in a room that already knows her. A curriculum carried by an outside expert is one people listen to politely; carried by a neighbour, it's one they argue with, push back on, take home.",
        "Several of the women who first sat in a cohort have gone on to teach others. The work stays in the community after the founder leaves the room.",
      ],
      statLabel:
        "of the women now facilitating workshops first completed the curriculum as students themselves.",
    },
    inTheRoom: {
      sectionLabel: "In the room",
      sectionHint: "The founder facilitating. Photos and clips.",
      heading: "In the room.",
      body:
        "What stays with me is how good it felt to be useful. We taught through activities, not lectures — counting out a month's spending in paper notes, arguing over which jar a rupee belonged in. Some women were shy at first; a few barely spoke for the first hour. By the end they were the ones correcting their neighbours, and the room ran itself. The modules give the work its bones; the women in the room give it its voice. The lesson, I learned, was never really the slides — it was the moment a woman realised she already knew more than she thought.",
      attribution: "— Rehaan Chowdhary, founder",
    },
    whatChanged: {
      sectionLabel: "What changed between cohorts",
      sectionHint: "What each workshop taught the curriculum.",
      heading: "The curriculum is fixed in its spine and porous at its surface.",
      body: [
        "Two workshops have run so far, both in **Baruipur**. Between them the curriculum changed in small ways — what landed, what needed more time, which examples a room recognised and which fell flat.",
        "The pattern that holds: the budgeting work bites harder when it's run against a woman's lowest-earning month, not her average. So that is how it is now taught.",
        "What's still being worked out is mostly sequence and length — the order of the digital-money and scam-shield modules, how much time the emergency-fund worksheet really needs. **The curriculum is fixed in its spine and porous at its surface.** We re-edit between workshops, not during them.",
      ],
    },
    bandhan: {
      sectionLabel: "Partnership",
      sectionHint: "The institutional spine that makes the workshops possible.",
      heading: "In partnership with Bandhan.",
      body: [
        "None of this happens without **Bandhan-Konnagar**. The NGO brings the halls, the relationships on the ground, and the trust that lets a workshop open its doors with a cohort already in the room. **Bandhan Bank Ltd** supports the work behind it.",
        "The Prosperity Project brings the curriculum, the facilitator training, the textbook, and the design that holds it all together. The partnership is in its **second year**, with the current cohort still in follow-up; where it extends next is being worked out now.",
      ],
      linkLabel: "Read more about the partnership",
    },
  },

  /* --------------------------------------------------------------- RESOURCES */
  resources: {
    hero: {
      kicker: "Resources",
      headline: "Materials, free to use.",
      standfirst:
        "The textbook in three scripts. A short video for every module. Free for any household, classroom, or partner organisation that can use them.",
    },
    textbook: {
      sectionLabel: "The textbook",
      sectionHint: "24 pages. English available now; Bengali and Hindi in translation.",
      body: [
        "*Knowing Your Money* is a 24-page textbook covering all ten modules — the book the cohorts use, typeset for reading aloud, with worksheets and a glossary of Indian banking terms in every edition. The English edition is free to download below; the Bengali and Hindi editions are in translation.",
        "Households can use it as a guide; partner organisations can teach from it directly. We ask only that it be passed on intact — cover and credits attached — and that anyone running a formal cohort lets us know.",
      ],
      note:
        "Print copies are distributed in workshops — not available by post. Partner organisations using the book in formal cohorts: please write to us.",
    },
    videos: {
      sectionLabel: "Video curriculum",
      sectionHint:
        "One short video per module, in Hindi · Bengali · English. Click a script to play.",
      intro:
        "Every module of *Knowing Your Money* has a short companion video — between four and seven minutes — recorded for households where a daughter, son, or husband can sit beside the student and watch together at home. Three language editions per module.",
    },
    license: {
      sectionLabel: "License",
      line1:
        "Free for educational use — household, classroom, or community. Pass it on intact.",
      line2:
        "Organisations adopting the curriculum into a formal programme — schools, NGOs, government departments, livelihood missions — should write to **[ adopt@ — email coming soon ]**. We will send you the facilitator's edition, a brief licence, and an invitation to a one-day onboarding.",
    },
  },

  /* ----------------------------------------------------------------- STORIES */
  stories: {
    hero: {
      kicker: "Stories",
      headline: "The women who carry it.",
      standfirst:
        "Students who finished the curriculum, and the Community Resource Persons who came back to teach it. In their own words.",
    },
    consentNote:
      "Names are used with permission. Some subjects requested anonymity and are pictured by their hands or workspace.",
    crp: {
      sectionLabel: "Community Resource Persons",
      sectionHint: "Students first, facilitators second.",
      intro:
        "Most women teaching today sat in a cohort themselves, not long before. One of them:",
    },
    beneficiary: {
      sectionLabel: "Students",
      sectionHint: "Women who finished all ten modules.",
      intro:
        "Most students simply take the curriculum home and put it to work. Two on what changed:",
    },
    // Each person: the English quote and the short story under it. These are
    // blanked to placeholders until real, consented names/quotes are added.
    // (Displayed names and original-language quotes live in the Stories
    // component — ask Claude to fill those in alongside these.)
    people: {
      crp1: {
        quoteEn:
          "[ Quote — in her own words ]",
        body:
          "[ Her story — who she is, what the curriculum changed for her, and why she came back to teach it. ]",
      },
      student1: {
        quoteEn:
          "[ Quote — in her own words ]",
        body:
          "[ Her story — what changed for her household after the ten modules. ]",
      },
      anonymous: {
        quoteEn: "[ Quote — in her own words ]",
        body:
          "[ Her story — told on her terms, name and face withheld by request. ]",
      },
    },
    pullQuote: {
      mark: "From a workshop in Baruipur",
      text:
        "[ A line from the room — in her own words ]",
      cite: "[ Name ]",
      citeMeta: "Community Resource Person · Baruipur",
    },
    videos: {
      sectionLabel: "Video testimonials",
      intro:
        "Two short testimonials, filmed at workshops. Subtitled in English.",
    },
  },

  /* ----------------------------------------------------------------- GALLERY */
  gallery: {
    kicker: "Gallery",
    heading: "From the rooms where the work happens.",
    sub:
      "Workshops, hands, materials, the people in the room — in Baruipur, near Kolkata. Loosely in order. Photographers credited where known.",
  },

  /* ------------------------------------------------------------------ IMPACT */
  impact: {
    hero: {
      kicker: "Impact",
      headline: "What's been built.",
      standfirst:
        "We count what we can, honestly, and we say where the counting stops. The numbers below are placeholders until the first annual report is published.",
    },
    lead: {
      sectionLabel: "In short",
      sectionHint: "Editorial copy. Numbers slotted in on publication.",
      // The lead sentence keeps its number placeholders in code (drop the figures there).
    },
    subs: {
      sectionLabel: "The measure",
      sectionHint: "Reach · Outcomes · Methodology.",
      methodologyBody: [
        "Placeholder, and deliberately honest. This section sets out how outcomes are measured: what is counted at registration, at graduation, in follow-up, and by whom.",
        "It's candid about the limits. We work with small cohorts in places hard to return to; follow-up is partial; self-reported saving isn't audited saving. We'd rather publish a smaller number we trust. **The numbers are a floor, not a verdict.**",
      ],
    },
    pullQuote: {
      mark: "On what the numbers leave out",
      text:
        "A figure can tell you a woman opened an account. It can't tell you she opened it in her own name, and what that cost her to do.",
    },
    reports: {
      sectionLabel: "Annual reports",
      sectionHint: "Published yearly. Newest first.",
    },
    closing: {
      sectionLabel: "And the rest",
      text:
        "Most of what matters here doesn't fit in a number. For the part that doesn't, read the [Stories](/stories) — that is where the work actually shows up.",
    },
  },

  /* ----------------------------------------------------------------- CONTACT */
  contact: {
    hero: {
      kicker: "Contact",
      headline: "Reach out.",
      standfirst:
        "One inbox per reason. We read everything and reply to most things — partnership, press, and anyone who wants to run the curriculum.",
    },
    general: {
      sectionLabel: "General",
      sectionHint: "For everything else.",
      body:
        "Questions about the curriculum, the workshops, or the project — write to us. No form; a real person reads this inbox.",
      email: "hello@[ domain ]",
    },
    getInvolved: {
      sectionLabel: "Get involved",
      sectionHint: "Two ways the work travels further.",
      runLabel: "Run a workshop",
      runBody:
        "Organisations, CSR teams, college societies, and Resident Welfare Associations can teach Knowing Your Money directly. We'll send the facilitator's edition, a short licence, and a one-day onboarding — so a workshop in your community is run the way it's meant to be.",
      runEmail: "adopt@[ domain ]",
      partnerLabel: "Partner with us",
      partnerBody:
        "NGOs, foundations, and institutions wanting to partner formally — the way Bandhan delivers the work across West Bengal — should write here. The model is simple: you bring the halls, the trust, and the relationships; we bring the curriculum and the training.",
      partnerEmail: "partner@[ domain ]",
    },
    press: {
      sectionLabel: "Press",
      sectionHint: "Journalists welcome.",
      body:
        "We welcome press enquiries and are glad to arrange interviews, photographs with consent, and workshop visits. For a media kit or to speak with the founder, write to us.",
      email: "press@[ domain ]",
    },
    elsewhere: {
      sectionLabel: "Elsewhere",
      instagramLabel: "Instagram",
      linkedinLabel: "LinkedIn",
    },
  },

  /* -------------------------------------------------------------------- ABOUT */
  about: {
    hero: {
      kicker: "About",
      heading: "Why this exists.",
      bylineName: "Rehaan Chowdhary",
      bylineRole: "Founder",
    },

    founder: {
      sectionLabel: "The founder",
      sectionHint: "First-person. To be written by Rehaan.",
      // PLACEHOLDER — this page is yours to write. The bracketed lines below are
      // a suggested skeleton (one paragraph per line), not final copy. Replace
      // each one with your own words, or ask Claude to help draft from notes.
      story: [
        "[ PLACEHOLDER — Rehaan to write the founder's story. The lines below are a suggested skeleton, not final copy. ]",
        "[ Open with Shampa — who looked after you from the time you were born — and how you came to understand, over years, how little room the financial system had left her: no account fully her own, nowhere safe for what she saved. ]",
        "[ The turn: deciding to really understand it, and interviewing her over weeks — the questions you'd never thought to ask, and what the answers revealed (a complete system missing only access, not knowledge). ]",
        "[ How that became a curriculum, and the first two workshops in Baruipur — what facilitating taught you, and what surprised you in the room. ]",
        "[ Why Bandhan matters, why the CRP model matters (the work staying in the community), and where you want this to go next. Keep it first-person and personal. ]",
      ],
    },

    mission: {
      sectionLabel: "Vision & mission",
      text:
        "[ Suggested — refine in your own words: The Prosperity Project exists so that people navigating finance without formal access have the tools, and the confidence, to navigate it on their own terms. ]",
    },

    organizations: {
      sectionLabel: "Organizations",
      sectionHint: "The institutions the work is built with.",
      partnerName: "Bandhan-Konnagar",
      partnerRole: "Delivery partner · West Bengal",
      partnerBody:
        "Bandhan-Konnagar brings the halls, the relationships on the ground, and the trust that lets a workshop open with a cohort already in the room; **Bandhan Bank Ltd** supports the work. We bring the curriculum, the training, and the textbook. The partnership is in its second year, with the current cohort still in follow-up.",
      partnerLinkLabel: "More on the partnership",
    },
  },
};
