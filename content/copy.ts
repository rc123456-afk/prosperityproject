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
   • Things in square brackets like [ N ] or [ YEAR ] are number placeholders —
     leave them; just tell Rehaan/Claude the real figures to drop in.
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
  },

  /* ----------------------------------------------------------------- HOMEPAGE */
  home: {
    hero: {
      kicker: "Knowing Your Money · ten modules, three languages",
      headline: "Practical financial literacy for the people who build the world.",
      standfirst:
        "Workshops in Bengali, Hindi, and English — taught by people from the communities they serve, in partnership with Bandhan NGO.",
      ctaLabel: "Read the curriculum",
    },
    whatThisIs: {
      sectionLabel: "What this is",
      body:
        "The Prosperity Project teaches practical money skills — bank accounts, budgeting, debt, savings, scam protection, digital payments, emergency planning — to people the financial system has historically ignored. The flagship curriculum, *Knowing Your Money*, is ten modules grounded in real interviews, taught to women in **West Bengal** in partnership with Bandhan NGO.",
    },
    whereWeWork: {
      sectionLabel: "Where we work",
      heading: "Ten modules, taught in the rooms the community already trusts.",
      region: "West Bengal · India",
      cardTitle: "Women in West Bengal",
      cardCopy:
        "Twice-weekly workshops in **Bengali and Hindi**, run in self-help-group halls across [ N villages ] in the Sundarbans, Howrah, and South 24 Parganas. Students complete the curriculum and many return as facilitators for the next cohort.",
      curriculumLinkLabel: "Read the curriculum",
      storiesLinkLabel: "Stories from the cohort",
    },
    numbers: {
      sectionLabel: "The work, in numbers",
      // The sentence below keeps its number placeholders ([ N ], [ YEAR ]) in
      // code so they stay styled; give Claude the real figures to fill in.
    },
    workshopsPreview: {
      sectionLabel: "How a workshop runs",
      heading:
        "Twice a week, for ten weeks, in the room the community already trusts.",
      body:
        "We work with partners who already have a hall, a livelihood programme, or a self-help group running. Facilitators are recruited from the same district and trained over four weeks. Each cohort caps at [ 24 ] students. Sessions run in Bengali, Hindi, or English, depending on the room.",
      crpLabel: "A method",
      crpTitle: "The CRP Model",
      crpBody:
        "Students complete the curriculum themselves, then return as facilitators — so the work travels in a familiar voice and stays after the founder leaves the room.",
      linkLabel: "See a workshop in session",
    },
    storiesPreview: {
      sectionLabel: "Stories from the cohort",
      quote:
        "Before, I didn't understand where the money was going. Now there is a notebook, and every week I look at it.",
      original:
        "पहले समझ नहीं थी कि पैसा कहाँ जा रहा है। अब नोटबुक है, और हर हफ़्ते मैं देखती हूँ।",
      citeName: "Rekha Mondal",
      citeMeta: "Module 02 graduate",
      citeLang: "spoken in Hindi",
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
        "For the women's cohorts in West Bengal — delivered in Bengali and Hindi, in partnership with Bandhan NGO.",
    },
    origin: {
      sectionLabel: "Where it came from",
      body:
        "*Knowing Your Money* began at a kitchen table. The founder spent two years interviewing women across West Bengal — beginning with her family's longtime nanny — about how money moved through their lives: who held it, who decided, what they wished they had been taught. Every one of the ten modules carries a question a real woman asked, and an answer worked out alongside her. The curriculum is not adapted from a Western framework. It was built, sentence by sentence, in the rooms it is now taught in.",
      linkLabel: "Read the full origin story",
      interviewSlot: "Interview analysis document — coming soon",
    },
    premise: {
      sectionLabel: "How it is taught",
      body:
        "Every module opens with a story — a recurring cast of characters drawn from the original interviews, whose households we follow across the ten weeks. A facilitator from the same district leads the room; live translation between Bengali and Hindi runs through every session, so no student is asked to stretch for language. Each student leaves with the *Knowing Your Money* textbook in her own script. A short video explainer accompanies each module, recorded for households where a daughter or son can sit with their mother and watch together at home. The work travels in the voice it was learned in.",
      points: [
        "Real interviews shape every module.",
        "Recurring story characters carry the lessons across the ten weeks.",
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
        "Every student receives the textbook in her own script — 184 pages, typeset for reading aloud, with module-by-module worksheets at the back. All three editions are freely downloadable.",
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
        "Twice a week, for ten weeks, in the rooms the community already trusts — across the Sundarbans, Howrah, and South 24 Parganas, in Bengali with Hindi translation.",
    },
    format: {
      sectionLabel: "The format",
      sectionHint: "Two sessions a week. Ten weeks. Twenty-four students.",
      body: [
        "Workshops run **twice a week for ten weeks**, in spaces a community already trusts — a Self-Help Group hall in Howrah, a livelihood room in the Sundarbans, the back of a Bandhan branch after hours. Sessions are ninety minutes; cohorts cap at **twenty-four students** so every voice is heard.",
        "**Bengali** is the working language, with **Hindi** in live translation; most facilitators move between the two in a sentence. Each student gets the *Knowing Your Money* textbook in her own script on day one, and a notebook to track her household.",
        "By Module 04 — Banks and how they work — the cohort walks together to the nearest branch and opens accounts. For many, it's the first account in their own name. The work ends with a graduation, a meal, and an invitation: those who want to come back as facilitators are recruited for the next cohort.",
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
        "The **CRP Model** — Community Resource Person — is the spine of how this work travels. A student completes the ten modules, then — if she wants to teach the next cohort — enters a **four-week facilitator training**: deeper work on every module, practice in front of a room in Bengali and Hindi, and a week co-facilitating alongside a senior CRP.",
        "She then returns to her own block, sometimes her own village, and runs the workshop in a room that already knows her. A curriculum carried by an outside expert is one people listen to politely; carried by a neighbour, it's one they argue with, push back on, take home.",
        "By the end of 2025, most facilitators teaching active cohorts had themselves been students in 2023 or 2024. The work stays in the community after the founder leaves the room.",
      ],
      statLabel:
        "of facilitators teaching the 2025 cohorts were themselves students in 2023 or 2024.",
    },
    inTheRoom: {
      sectionLabel: "In the room",
      sectionHint: "The founder facilitating. Photos and clips.",
      heading: "In the room.",
      body:
        "The first thing facilitating teaches you is how little of it is about the slides. The slides are there in case the room needs them. What the room wants is for the facilitator to sit on the floor, take the tea, hear the story about last month's missing wages — and then, only then, open the notebook and work the numbers with the woman beside her. The modules give the work its bones; the room gives it its voice. I learned to stop arriving early — the half-hour before a workshop became the most important part of the day.",
      attribution: "— [ FOUNDER ] · first-person, after the 2024 cycle",
    },
    whatChanged: {
      sectionLabel: "What changed between cohorts",
      sectionHint: "Iteration log — what each cycle taught the curriculum.",
      heading: "The curriculum is fixed in its spine and porous at its surface.",
      body: [
        "The first **2023 cohort** taught us that Module 04 — opening a bank account — could not stay theoretical. The session now ends with a walk to the nearest branch and a queue ticket in hand.",
        "The **2024 cohort** showed that the budgeting module landed harder when worked against a woman's lowest-earning month, not her average. The worksheet was rewritten.",
        "The **2025 cohort** is the first to be taught largely by CRPs from the 2023 and 2024 cohorts. The pace and pedagogy shifted around them.",
        "What's still being adjusted: the order of the digital-money and scam-shield modules; the length of the emergency-fund worksheet. **The curriculum is fixed in its spine and porous at its surface.** We re-edit between cohorts, not during them.",
      ],
    },
    bandhan: {
      sectionLabel: "Partnership",
      sectionHint: "The institutional spine that makes the workshops possible.",
      heading: "In partnership with Bandhan NGO.",
      body: [
        "None of this happens without **Bandhan NGO**. Bandhan brings the halls, the institutional relationships in every block we operate in, and the trust that lets a workshop open its doors on the first day with a cohort already in the room.",
        "The Prosperity Project brings the curriculum, the facilitator training, the textbook, and the design system that holds it all together. The partnership is in its third year; the next phase extends to four new blocks across Howrah and Hooghly.",
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
      sectionHint: "184 pages. Three editions, freely downloadable.",
      body: [
        "*Knowing Your Money* is a 184-page textbook covering all ten modules — the book the cohorts use, typeset for reading aloud, with worksheets and a glossary of Indian banking terms in every edition. Three editions are in circulation, each freely downloadable below.",
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
        "Organisations adopting the curriculum into a formal programme — schools, NGOs, government departments, livelihood missions — should write to [adopt@prosperity.in](mailto:adopt@prosperity.in). We will send you the facilitator's edition, a brief licence, and an invitation to a one-day onboarding.",
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
        "Most women teaching today sat in a cohort themselves, a year or two earlier. Two of them:",
    },
    beneficiary: {
      sectionLabel: "Students",
      sectionHint: "Women who finished all ten modules.",
      intro:
        "Most students simply take the curriculum home and put it to work. Two on what changed:",
    },
    // Each person: the English quote, who they are, and the short story under it.
    // (The Hindi/Bengali original quotes stay in code — ask Claude to change those.)
    people: {
      anjali: {
        quoteEn:
          "Before, I only listened. Now the chalk is in my hand and the room listens to me.",
        body:
          "Anjali finished the 2023 cohort with one question: could she do this herself? She trained that spring. The cohort she leads now meets in the same hall where she once sat in the back row.",
      },
      sabita: {
        quoteEn:
          "What no one could explain to my mother, I now explain to the whole village.",
        body:
          "Sabita travels by boat to three villages across the Sundarbans, the textbook in a plastic bag against the spray. In two years she has run the curriculum nine times; six women in her current cohort have already asked about training to teach.",
      },
      rekha: {
        quoteEn:
          "Before, I didn't understand where the money was going. Now there is a notebook, and every week I look at it.",
        body:
          "Rekha runs a tailoring business from her front room. Module 02 — budgeting against her lowest-earning month, not her average — stayed with her. She opened her first account, in her own name, on the Module 04 walk.",
      },
      anonymous: {
        quoteEn: "I haven't told anyone that I am saving. This is mine.",
        body:
          "This student asked not to be named or photographed by face. She keeps a private emergency fund the household doesn't know about — the habit Module 10 is built to teach. Her story is hers to tell, on her terms.",
      },
    },
    pullQuote: {
      mark: "From a workshop in the Sundarbans",
      text:
        "I came to learn how to keep my money. I stayed to teach my neighbours how to keep theirs.",
      cite: "Sabita Halder",
      citeMeta: "CRP · South 24 Parganas",
    },
    videos: {
      sectionLabel: "Video testimonials",
      intro:
        "Two short testimonials, filmed at graduations. Subtitled in English.",
    },
  },

  /* ----------------------------------------------------------------- GALLERY */
  gallery: {
    kicker: "Gallery",
    heading: "From the rooms where the work happens.",
    sub:
      "Workshops, graduations, hands, materials, the walk to the bank — across the Sundarbans, Howrah, and South 24 Parganas. Loosely in order. Photographers credited where known.",
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
      // The lead sentence keeps its number placeholders in code (give Claude the figures).
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
      email: "hello@theprosperityproject.org",
    },
    getInvolved: {
      sectionLabel: "Get involved",
      sectionHint: "Two ways the work travels further.",
      runLabel: "Run a workshop",
      runBody:
        "Organisations, CSR teams, college societies, and Resident Welfare Associations can teach Knowing Your Money directly. We'll send the facilitator's edition, a short licence, and a one-day onboarding — so a workshop in your community is run the way it's meant to be.",
      runEmail: "adopt@theprosperityproject.org",
      partnerLabel: "Partner with us",
      partnerBody:
        "NGOs, foundations, and institutions wanting to partner formally — the way Bandhan delivers the work across West Bengal — should write here. The model is simple: you bring the halls, the trust, and the relationships; we bring the curriculum and the training.",
      partnerEmail: "partner@theprosperityproject.org",
    },
    press: {
      sectionLabel: "Press",
      sectionHint: "Journalists welcome.",
      body:
        "We welcome press enquiries and are glad to arrange interviews, photographs with consent, and workshop visits. For a media kit or to speak with the founder, write to us.",
      email: "press@theprosperityproject.org",
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
      sectionHint: "First-person. Placeholder prose, to be edited with Rehaan.",
      // The founder's first-person story — one paragraph per line.
      story: [
        "The first person who taught me about money couldn't open a bank account in her own name. Phoolmati looked after me from the time I was four, and ran a household budget in her head I've never managed to reproduce on paper — all of it in cash, in a tin, none of it with a bank. I grew up assuming this was normal: that the people who managed money most carefully were the ones the system had least room for.",
        "The curriculum began as one long interview with her. I asked the questions I'd never thought to ask — where do you keep it, who do you trust with it, what happens in an emergency. I expected to find gaps in what she knew. Instead I found a complete system missing one piece: not knowledge, but access. *Knowing Your Money* is built backwards from that interview — ten modules, each answering a question she had already answered for herself.",
        "The first cohort was twenty-two women in a borrowed hall in Howrah. I facilitated it myself, badly, and learned more in ten weeks than in the year of planning before it. The slides mattered less than the tea. The worksheet that worked was built around a woman's lowest-earning month, not her average. Module 04 couldn't stay on paper, so it ended with all of us walking to the branch and queueing together — for most of the room, the first account in their own name.",
        "None of it scaled past that hall without **Bandhan** — their rooms, their relationships, the trust that lets a workshop open on day one with a cohort already inside. We bring the curriculum and the training; they bring the ground it stands on.",
        "The other lesson was to get out of the room. A curriculum carried by an outsider is one people listen to politely; carried by a neighbour, it's one they argue with and take home. The women who finished the early cohorts trained as facilitators — Community Resource Persons — and most workshops today are taught by someone who once sat in the back row.",
        "I think about what Phoolmati would have done with an account in her own name, thirty years ago. I can't give her that. This is the next best thing I know how to build.",
      ],
    },

    mission: {
      sectionLabel: "Vision & mission",
      text:
        "The project exists so that people navigating finance without formal access have the tools, and the confidence, to navigate it on their own terms.",
    },

    organizations: {
      sectionLabel: "Organizations",
      sectionHint: "The institutions the work is built with.",
      partnerName: "Bandhan NGO",
      partnerRole: "Delivery partner · West Bengal",
      partnerBody:
        "Bandhan brings the halls, the relationships in every block, and the trust that lets a workshop open with a cohort already in the room. We bring the curriculum, the training, and the textbook. Now in its third year, the partnership extends next to four new blocks across Howrah and Hooghly.",
      partnerLinkLabel: "More on the partnership",
    },
  },
};
