/* ============================================================================
   SITE COPY: edit the words here and they change on the website.

   HOW TO EDIT
   • Change only the text inside the "quotes". Leave the labels (the words
     before the colon) and the quotes/commas alone.
   • Light formatting you can use inside any text:
        *italic*              ->  italic (used for book titles like *Knowing Your Money*)
        **bold**              ->  bold
        [click here](/about)  ->  a link to another page
     Put bold *inside* a link's text if you need both; wrapping a whole link
     in ** ** shows the asterisks on the page.
   • Some values are lists: one item per line, each in its own "quotes",
     separated by commas. Add or remove lines to add or remove paragraphs.
   • House style: no em dashes. Use a comma, colon, full stop or brackets.
   • Grouped by page, top to bottom, the way you'd click through the site.

   If anything here ever looks confusing or breaks the site, don't worry: it's
   safe to ask Claude to fix the formatting.
   ============================================================================ */

export const copy = {
  /* ------------------------------------------------------- SITE-WIDE (chrome) */
  site: {
    wordmark: "The Prosperity Project",
    footerDevaLine: "समृद्धि की पाठशाला",
    footerRomanLine: "A school of prosperity",
    tagline: "Luck alone is not enough. Knowledge is everything.",
  },

  /* --------------------------------------------------------------- PROGRAMMES
     SHARED. This one list feeds three places: the homepage "Where it runs"
     cards, the /programmes page, and the partner copy. Edit a programme once
     here and it changes everywhere, so the site can't contradict itself.

     Order is deliberate: where it began, then the largest, then the two that
     show the curriculum travelling into a company and into a grassroots
     nonprofit.

     Each entry:
       city           the heading. Kept separate from `place` so the heading
                      doesn't repeat the region shown above it. When two
                      programmes share a city, the partner is added to the
                      heading automatically ("Asansol · FEED").
       place/partner  the full place name, and who it ran with
       kind           "corporate" or "ngo"; the page labels by this
       mode/language/when/scale  joined into one meta line, in that order.
                      Leave any of them "" and it is simply left out; nothing
                      renders as an empty slot or a placeholder.
       summary        ONE sentence, used on the homepage card
       body           full paragraphs, used on /programmes
       photos         [] means the section ends after the words, with no
                      empty grey panel                                        */
  programmes: {
    sectionLabel: "Where it runs",
    heading: "Four rooms, two states, and the same ten modules.",
    intro:
      "The curriculum was built in West Bengal and was never meant to stay there. It has since been taught in Marathi at a textile mill in Maharashtra, and online into Asansol twice: once through a company and once through a grassroots nonprofit. The partners could hardly be more different, and the same ten modules went into every room.",
    linkLabel: "All four programmes",
    // Full figures are still being compiled; see the Reporting page.
    figuresNote:
      "Completion, accounts opened, and facilitators trained are being compiled for the first annual report.",
    closing: {
      sectionLabel: "Across all four",
      text:
        "A textile mill, a self-help group hall, an infrastructure developer and a grassroots nonprofit want different things from a workshop. **The same ten modules went into all four rooms**, each time in the language of the room.",
    },
    items: [
      {
        id: "baruipur",
        city: "Baruipur",
        place: "Baruipur, West Bengal",
        region: "West Bengal",
        partner: "Bandhan-Konnagar",
        kind: "ngo" as const,
        mode: "In person",
        language: "Bengali, with Hindi",
        when: "Second year",
        scale: "Fifty or more women per workshop",
        summary:
          "Where the curriculum began: two workshops with **Bandhan-Konnagar**, in Bengali and Hindi, with follow-up that is still running.",
        body: [
          "**Bandhan-Konnagar** brings the halls, the relationships on the ground, and the trust that lets a workshop open its doors with a cohort already in the room. **Bandhan Bank Ltd** supports the work behind it. This is where *Knowing Your Money* was first taught, and where it is still being taught.",
          "A workshop gathers **fifty or more women** in a space the community already trusts. **Bengali** is the working language with **Hindi** alongside it, and most facilitators move between the two in a sentence. The work does not end when the modules do. Follow-up sessions, several of them over video call, return to whatever a cohort still needs.",
          "Several of the women who first sat in a cohort here have gone on to teach others. That is the CRP Model, and Baruipur is where it started.",
        ],
        photos: [
          { aspect: "landscape" as const, tone: "warm" as const, src: "/photos/workshops/room-2.jpg", alt: "The cohort gathered during a workshop in Baruipur" },
          { aspect: "portrait" as const, tone: "ledger" as const, src: "/photos/gallery/g-portrait-orange.jpg", alt: "A participant in Baruipur during the session", objectPosition: "center 20%" },
          { aspect: "landscape" as const, tone: "green" as const, src: "/photos/gallery/g-passing-the-mic.jpg", alt: "A facilitator passing the microphone to a participant in Baruipur" },
          { aspect: "landscape" as const, tone: "cool" as const, src: "/photos/gallery/g-the-worksheet.jpg", alt: "Participants in Baruipur working through the budget worksheet" },
          { aspect: "portrait" as const, tone: "brick" as const, src: "/photos/gallery/g-portrait-smiling.jpg", alt: "A participant in Baruipur smiling as she speaks", objectPosition: "center 25%" },
          { aspect: "landscape" as const, tone: "dusk" as const, src: "/photos/gallery/g-taking-notes.jpg", alt: "A row of participants in Baruipur taking notes" },
        ],
        closer: {
          src: "/photos/gallery/g-cohort-banner.jpg",
          alt: "The full Baruipur cohort together under the programme banner",
          description:
            "The full cohort, under the programme banner, in Baruipur near Kolkata.",
        },
      },
      {
        id: "kolhapur",
        city: "Kolhapur",
        place: "Kolhapur, Maharashtra",
        region: "Maharashtra",
        partner: "Indo Count Industries",
        kind: "corporate" as const,
        mode: "In person",
        language: "Marathi",
        when: "September 2026",
        scale: "Around two hundred women",
        summary:
          "Around **two hundred women** at the **Indo Count Industries** mill, taught in Marathi, a group at a time.",
        body: [
          "**Indo Count Industries** makes bed linen in Kolhapur, and a large part of its workforce is women. The company opened its training centre at Gokul Shirgaon for the week and put its own people in the room: women from the stitching and packing floors, alongside some of the office and supervisory staff. Most had left school early, and the schooling they did get never covered money.",
          "Around **two hundred women** came through the curriculum, a group at a time. Each group took all ten modules of *Knowing Your Money* in a single condensed sitting rather than spread across weeks. That is a different shape from the Bengal workshops, and one the workplace made possible: the cohort was already assembled, already knew each other, and could be released from the floor together.",
          "The whole workshop ran in **Marathi**, slides included. Each group finished with a certificate of participation, handed over in the room.",
        ],
        photos: [
          { aspect: "landscape" as const, tone: "warm" as const, src: "/photos/kolhapur/k-room-wide.jpg", alt: "The founder addressing rows of participants seated at desks in Kolhapur" },
          { aspect: "portrait" as const, tone: "brick" as const, src: "/photos/kolhapur/k-portrait-maroon.jpg", alt: "A participant standing to speak during the session", objectPosition: "45% center" },
          { aspect: "landscape" as const, tone: "green" as const, src: "/photos/kolhapur/k-hands-up.jpg", alt: "Participants raising their hands to answer during a session" },
          { aspect: "landscape" as const, tone: "cool" as const, src: "/photos/kolhapur/k-slide-marathi.jpg", alt: "Module one, Your Money Your Name, projected in Marathi" },
          { aspect: "portrait" as const, tone: "ledger" as const, src: "/photos/kolhapur/k-participant-mic.jpg", alt: "A participant standing to ask a question" },
          { aspect: "landscape" as const, tone: "dusk" as const, src: "/photos/kolhapur/k-worksheets.jpg", alt: "Participants working through the worksheet at their desks" },
        ],
        closer: {
          src: "/photos/kolhapur/k-certificates-wide.jpg",
          alt: "A group of participants holding their certificates at the end of a workshop in Kolhapur",
          description:
            "A group at the end of its sitting, certificates in hand, at Indo Count's training centre in Kolhapur.",
        },
      },
      {
        id: "shristi",
        city: "Asansol",
        place: "Asansol, West Bengal",
        region: "West Bengal",
        partner: "Shristi Corp",
        kind: "corporate" as const,
        mode: "Online",
        // Add the language, month and attendance here and they join the line
        // above automatically. Left empty they are simply not printed.
        language: "",
        when: "",
        scale: "",
        summary:
          "Online into Asansol with **Shristi Corp**, the developer behind the Shristinagar township.",
        body: [
          "**Shristi Corp** builds infrastructure across eastern India (townships, retail, commercial and residential developments) from its head office in Salt Lake City, Kolkata. Among its projects is **Shristinagar**, a ninety-acre township in **Asansol**.",
          "The session ran online, over video call. Like Kolhapur, it reached its room through a company rather than an NGO.",
        ],
        photos: [],
        closer: null,
      },
      {
        id: "feed",
        city: "Asansol",
        place: "Asansol, West Bengal",
        region: "West Bengal",
        partner: "FEED",
        kind: "ngo" as const,
        mode: "Online",
        language: "",
        when: "",
        scale: "",
        summary:
          "Online into Asansol with **FEED**, a grassroots nonprofit for first-generation learners and women.",
        body: [
          "**FEED**, the Food, Education & Economic Development Society, is a grassroots nonprofit in **Asansol, West Bengal**, founded in 2016. It started by redistributing surplus food and grew into something wider: keeping first-generation learners in school, running free coaching centres, and building programmes for girls and women, from football to self-defence.",
          "Its work and this curriculum point in the same direction. A girl kept in school and a woman taught what her own money can do are the same argument, made at two ends of a life. The session ran online, over video call.",
        ],
        photos: [],
        closer: null,
      },
    ],
  },

  /* ----------------------------------------------------------------- HOMEPAGE */
  home: {
    hero: {
      // Photo-forward hero: keep text minimal. Leave kicker "" to hide the eyebrow;
      // set standfirst "" to hide the subhead entirely.
      kicker: "",
      headline: "For the people who build the world.",
      standfirst: "Practical financial literacy in ten modules, taught in the language of the room.",
      ctaLabel: "Read the curriculum",
      credit: "A Knowing Your Money workshop · Baruipur, West Bengal",
    },
    // Full-bleed photo strip under the hero. One entry per cell, alternating
    // between the places. Add or remove cells and the strip reflows.
    frontier: {
      cells: [
        { place: "Kolhapur, Maharashtra", src: "/photos/kolhapur/k-hands-up.jpg", alt: "Participants raising their hands during a session in Kolhapur", objectPosition: "center" },
        { place: "Baruipur, West Bengal", src: "/photos/gallery/g-portrait-smiling.jpg", alt: "A participant in Baruipur smiling as she speaks", objectPosition: "center 30%" },
        { place: "Kolhapur, Maharashtra", src: "/photos/kolhapur/k-writing.jpg", alt: "Participants in Kolhapur writing notes during a session", objectPosition: "center" },
        { place: "Baruipur, West Bengal", src: "/photos/gallery/g-the-worksheet.jpg", alt: "Participants in Baruipur working through the budget worksheet", objectPosition: "center" },
        { place: "Kolhapur, Maharashtra", src: "/photos/kolhapur/k-certificates-staff.jpg", alt: "A Kolhapur group holding their certificates at the end of a workshop", objectPosition: "center" },
      ],
    },
    whatThisIs: {
      sectionLabel: "What this is",
      body:
        "The Prosperity Project teaches practical money skills (bank accounts, budgeting, debt, savings, scam protection, digital payments and emergency planning) to people the financial system has historically ignored. The flagship curriculum, *Knowing Your Money*, is ten modules grounded in real interviews. It has been taught to women in **West Bengal** and **Maharashtra**, in person and online, by **Rehaan Chowdhary** with **Bandhan-Konnagar**, **Indo Count Industries**, **Shristi Corp** and **FEED**, among others, with support from **Bandhan Bank Ltd**.",
    },
    // The short version of the founder's story. The full one lives on the
    // About page; keep the two saying the same thing.
    founderShort: {
      sectionLabel: "Why I built it",
      story: [
        "Shampa has looked after me since I was born. It took me years to see how hard her financial life had been: a scam that took a chunk of her savings, a bank account that caused her problems she could never fully explain, constant work with very little to show for it.",
        "So I asked if I could interview her, and we ended up talking over several weeks. Every answer pointed to the same gap: no school had taught her any of this, and no one else had either. Once I saw that gap I could not stop seeing it, because it was not hers alone.",
        "I turned what I learned into ten modules in plain language. What held the women in that first room back was never ability; it was information they were never given. That is something we can fix.",
      ],
      bylineName: "Rehaan Chowdhary",
      bylineRole: "Founder",
      linkLabel: "Read the full story",
      photo: {
        src: "/photos/about/founder.jpg",
        alt: "Rehaan Chowdhary, the founder, speaking at a workshop",
        objectPosition: "center 28%",
      },
    },
    curriculumPreview: {
      sectionLabel: "The curriculum",
      heading: "*Knowing Your Money*: ten modules, built from real interviews.",
      body:
        "The ten modules sit under three pillars: **control** your money, **protect** it, then **grow** it, because you cannot protect or grow what you do not yet command. Every module carries a real question worked out alongside a real person, and opens with a story about a recurring cast drawn from those first interviews.",
      note:
        "Every student keeps the textbook in her own script. It is free to download in **English**, **Bengali** and **Hindi**.",
      curriculumLinkLabel: "Read all ten modules",
      resourcesLinkLabel: "Download the textbook",
    },
    workshopsPreview: {
      sectionLabel: "How a workshop runs",
      heading: "All ten modules, in a room the women already know, in their own language.",
      body:
        "We work with partners who already have the room and the trust: a self-help group hall, a livelihood programme, a company's training centre. In West Bengal a cohort of fifty or more women works through the ten modules of *Knowing Your Money* together, then follow-up sessions, several over video call, return to whatever each woman still needs, with her progress tracked along the way. In Kolhapur, groups took all ten modules in a single condensed sitting at their workplace. Sessions run in the language of the room: Bengali, Hindi or Marathi.",
      crpLabel: "A method",
      crpTitle: "The CRP Model",
      crpBody:
        "Students complete the curriculum themselves, then return as facilitators, so the work travels in a familiar voice and stays after the founder leaves the room.",
      linkLabel: "See a workshop in session",
    },
    storiesPreview: {
      sectionLabel: "Stories from the cohort",
      quote:
        "People have to be able to face a financial situation. They have to have money of their own.",
      original:
        "মানুষকে আর্থিক পরিস্থিতির মোকাবেলা করতে হবে, তাদের কাছে টাকা থাকতে হবে।",
      citeName: "Shankari Purkait Mondal",
      citeMeta: "Community Resource Person, Baruipur",
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
        "Ten modules, taught to women in West Bengal and Maharashtra, in person and online, in Bengali, Hindi and Marathi.",
    },
    origin: {
      sectionLabel: "Where it came from",
      body:
        "*Knowing Your Money* began with one person. **Shampa** looked after the founder from the time he was born, and over the years it became clear how little room the system had left her: no account fully her own, nowhere truly safe for what she managed to save. So he sat with her, over weeks of interviews, and asked the questions he had never thought to ask: where the money went, who decided, what she wished she had been taught. The answers kept pointing to the same gap, a whole layer of knowledge the system assumes everyone has and never hands out. Every one of the ten modules carries a real question, worked out alongside a real person. The curriculum was not adapted from a Western framework. It was built, sentence by sentence, from those interviews.",
      linkLabel: "Read the full origin story",
    },
    premise: {
      sectionLabel: "How it is taught",
      body:
        "Every module opens with a story about a recurring cast of characters drawn from the original interviews, and we follow their households across the curriculum. Each room is taught in its own language: Bengali with Hindi alongside it in West Bengal, Marathi in Kolhapur, so no student is asked to stretch for language. Each student leaves with the *Knowing Your Money* textbook in her own script. Short video explainers are being recorded module by module, for households where a daughter or son can sit with their mother and watch together at home. The work travels in the voice it was learned in.",
      points: [
        "Real interviews shape every module.",
        "Recurring story characters carry the lessons across the curriculum.",
        "Every room is taught in its own language.",
        "Every student keeps the textbook.",
        "Short video explainers, for watching at home.",
      ],
      modulesClose:
        "Ten modules. One textbook in every student’s hand, in her own script, taught in the language of the room.",
    },
    textbook: {
      sectionLabel: "The textbook",
      sectionHint:
        "Three editions: Bengali, Hindi and English. Each opens on the resources page.",
      heading: "*Knowing Your Money,* in the language of the room.",
      intro:
        "Every student receives the textbook in her own script, typeset for reading aloud, with the key takeaways at the end of every module. All three editions are free to download.",
      linkLabel: "All resources",
      note: "Print copies are distributed in workshops, not by post.",
    },
  },

  /* --------------------------------------------------------------- WORKSHOPS */
  workshops: {
    hero: {
      kicker: "Workshops",
      headline: "How a workshop runs.",
      standfirst:
        "All ten modules in a room the women already know: a community hall in Baruipur near Kolkata, a training centre at a textile mill in Kolhapur, and online into Asansol. Taught in Bengali, Hindi and Marathi.",
    },
    format: {
      sectionLabel: "The format",
      sectionHint: "Ten modules, in the language of the room.",
      body: [
        "In West Bengal, a workshop gathers **fifty or more women** in a space the community already trusts: a Self-Help Group hall, a livelihood room, a partner's premises. Together the cohort works through the **ten modules** of *Knowing Your Money*. The first sessions introduce the whole curriculum; what comes after is shaped around the room.",
        "The room sets the language. In West Bengal **Bengali** is the working language with **Hindi** alongside it, and most facilitators move between the two in a sentence; in Kolhapur the whole workshop ran in **Marathi**. Each student gets the *Knowing Your Money* textbook in her own script and a notebook to track her own household.",
        "In Bengal the work doesn't end when the modules do. Follow-up sessions, several of them over video call, return to whatever a cohort still needs, from opening an account in her own name to setting up UPI, with each woman's progress tracked along the way. Some students go on to facilitate the next cohort themselves.",
      ],
    },
    pillars: {
      sectionLabel: "The three pillars",
      sectionHint: "Control · Protect · Grow. Every module belongs to one.",
      intro:
        "The ten modules are organised under three pillars: control, protect and grow. You cannot protect or grow what you do not yet command.",
      control:
        "Modules that put a student in command of her own money: her name on the account, her notebook on the table, her wages negotiated up to what they are worth.",
      protect:
        "Modules that defend against loss: scams that target the careful saver, debt taken without understanding, and the emergency that arrives unannounced.",
      grow:
        "Modules that build wealth over time: the compounding habit, the safe place to keep what is saved, the first real investment, and the digital rails that carry it all.",
    },
    crp: {
      sectionLabel: "The CRP Model",
      sectionHint: "How the work travels, and stays.",
      heading: "The CRP Model.",
      sub: "Community Resource Person: student first, facilitator second.",
      body: [
        "The **CRP Model** (Community Resource Person) is the spine of how this work travels. A student completes the ten modules and then, if she wants to teach the next cohort, trains to facilitate it herself: deeper work on every module, and practice in front of a room in Bengali and Hindi before she leads one of her own.",
        "She then returns to her own community, sometimes her own neighbourhood, and runs the workshop in a room that already knows her. A curriculum carried by an outside expert is one people listen to politely; carried by a neighbour, it's one they argue with, push back on, take home.",
        "Several of the women who first sat in a cohort have gone on to teach others. The work stays in the community after the founder leaves the room.",
      ],
      statLabel:
        "of the women now facilitating workshops first completed the curriculum as students themselves.",
    },
    inTheRoom: {
      sectionLabel: "In the room",
      sectionHint: "The founder facilitating. Photos from the room.",
      heading: "In the room.",
      body:
        "We taught through activities, not lectures: counting out a month's spending in paper notes, arguing over which jar a rupee belonged in. Some women were shy at first; a few barely spoke for the first hour. By the end they were the ones correcting their neighbours, and the room ran itself. The modules give the work its bones; the women in the room give it its voice. The lesson, I learned, was never really the slides. It was the moment a woman realised she already knew more than she thought.",
      attribution: "Rehaan Chowdhary, founder",
    },
    whatChanged: {
      sectionLabel: "What changed between cohorts",
      sectionHint: "What each workshop taught the curriculum.",
      heading: "The curriculum is fixed in its spine and porous at its surface.",
      body: [
        "The curriculum has now been taught in **Baruipur**, at a mill in **Kolhapur**, and twice over video call. Between those rooms it changed in small ways: what landed, what needed more time, which examples a room recognised and which fell flat.",
        "The pattern that holds: the budgeting work bites harder when it's run against a woman's lowest-earning month, not her average. So that is how it is now taught.",
        "Kolhapur tested something else: whether the ten modules survive being taught to a group in one condensed sitting rather than spread over follow-up. They mostly do, but the emergency-fund and debt work wants more room than a single day gives it, and a workplace cohort arrives with a regular wage and a payslip, which changes where the budgeting module starts.",
        "What's still being worked out is mostly sequence and length: the order of the digital-money and scam-shield modules, and how much time the emergency-fund worksheet really needs. **The curriculum is fixed in its spine and porous at its surface.** We re-edit between workshops, not during them.",
      ],
    },
    partners: {
      sectionLabel: "Partnership",
      sectionHint: "The institutions that make the workshops possible.",
      heading: "Who this is built with.",
      body: [
        "In West Bengal, none of this happens without **Bandhan-Konnagar**. The NGO brings the halls, the relationships on the ground, and the trust that lets a workshop open its doors with a cohort already in the room. **Bandhan Bank Ltd** supports the work behind it. The partnership is in its **second year**, with the current cohort still in follow-up.",
        "In Maharashtra, **Indo Count Industries** hosted the work inside its own business: its training centre, its staff, and the women it employs, released from the floor to sit the curriculum. **Shristi Corp** opened the same kind of door into Asansol, and **FEED**, a grassroots nonprofit in the same city, opened a very different one.",
        "The Prosperity Project brings the curriculum, the facilitator training, the textbook, and the design that holds it all together. A company and a nonprofit want different things from a workshop, and the same ten modules have gone into both. Where it extends next is being worked out now.",
      ],
      linkLabel: "See where it has run",
    },
  },

  /* --------------------------------------------------------------- RESOURCES */
  resources: {
    hero: {
      kicker: "Resources",
      headline: "Materials, free to use.",
      standfirst:
        "The textbook in three scripts, and short videos for the modules, starting in English. Free for any household, classroom or partner organisation that can use them.",
    },
    textbook: {
      sectionLabel: "The textbook",
      sectionHint: "Bengali, Hindi and English. Free to download.",
      body: [
        "*Knowing Your Money* is the textbook the cohorts use: all ten modules in plain language, typeset for reading aloud, with the key takeaways at the end of every module. All three editions are free to download below.",
        "Households can use it as a guide; partner organisations can teach from it directly. We ask only that it be passed on intact, with the cover and credits attached, and that anyone running a formal cohort lets us know.",
      ],
      note:
        "Print copies are distributed in workshops, not by post. Partner organisations using the book in formal cohorts: please write to us.",
    },
    videos: {
      sectionLabel: "Video curriculum",
      sectionHint:
        "English videos for modules 1 to 9 are ready; Bengali and Hindi are being recorded. Choose a language to play.",
      intro:
        "Each module of *Knowing Your Money* is getting a short companion video, about three to five minutes long, recorded for households where a daughter, son or husband can sit beside the student and watch together at home. The English videos for modules 1 to 9 are ready. Bengali, Hindi and module 10 are on their way.",
    },
    license: {
      sectionLabel: "Licence",
      line1:
        "Free for educational use in households, classrooms and communities. Pass it on intact.",
      line2:
        "Organisations adopting the curriculum into a formal programme (schools, NGOs, government departments, livelihood missions) should write to [team.prosperityproject@gmail.com](mailto:team.prosperityproject@gmail.com). We will help you get set up to teach it.",
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
      "Names, photographs, and film are used with permission. Where a subject prefers not to be named, she isn't.",
    crp: {
      sectionLabel: "Community Resource Persons",
      sectionHint: "Students first, facilitators second.",
      intro:
        "Most women teaching today sat in a cohort themselves, not long before. One of them:",
    },
    beneficiary: {
      sectionLabel: "Passing it on",
      sectionHint: "What she took from the session, and carries to others.",
      intro:
        "Some carry what they learn straight back to the women around them. One of them:",
    },
    // Each person: the English quote and the short story under it. Displayed
    // names and the original-language quotes live in the Stories component.
    people: {
      crp1: {
        quoteEn:
          "People have to be able to face a financial situation. They have to have money of their own.",
        body:
          "Shankari came through the programme as a participant and now carries it forward for the women around her. Her conviction is plain: no woman should fall behind for want of money of her own. She wants the work to reach further, so that more women learn what she is now ready to teach.",
      },
      student1: {
        quoteEn:
          "Learning has no age.",
        body:
          "Lakshmi took the session wanting to bring what she learned back to her family and to the women around her. Her takeaway was as much about learning itself as about money: that there is much to learn even from the young, and every reason to pass it on.",
      },
    },
    pullQuote: {
      mark: "From a workshop in Baruipur",
      orig:
        "সব মা যেন অর্থের অভাবে পিছিয়ে না পড়ে।",
      text:
        "So that no mother falls behind for want of money.",
      cite: "Shankari Purkait Mondal",
      citeMeta: "Community Resource Person, Baruipur",
    },
    videos: {
      sectionLabel: "Interviews",
      intro:
        "Four interviews, filmed at a workshop in Baruipur. Spoken in Bengali.",
      meta: "Baruipur · Bengali",
      playLabel: "Play interview",
    },
  },

  /* ----------------------------------------------------------------- GALLERY */
  gallery: {
    kicker: "Gallery",
    heading: "From the rooms where the work happens.",
    sub:
      "Workshops, hands, materials and the people in the room, in Baruipur near Kolkata and at a mill in Kolhapur. Grouped by where they were taken, loosely in order.",
  },

  /* --------------------------------------------------------------- REPORTING
     Lives at /reporting (the old /impact address redirects there).           */
  impact: {
    hero: {
      kicker: "Reporting",
      headline: "What's been built.",
      standfirst:
        "We count what we can, honestly, and we say where the counting stops. Our first year's figures are being compiled and will be published, in full, with the first annual report.",
    },
    lead: {
      sectionLabel: "In short",
      sectionHint: "The first year, in brief.",
    },
    subs: {
      sectionLabel: "The measure",
      sectionHint: "Reach · Outcomes · Methodology.",
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
        "Most of what matters here doesn't fit in a number. For the part that doesn't, read the [Stories](/stories). That is where the work actually shows up.",
    },
  },

  /* ----------------------------------------------------------------- CONTACT */
  contact: {
    hero: {
      kicker: "Contact",
      headline: "Reach out.",
      standfirst:
        "One inbox for everything: partnerships, press, and anyone who wants to run the curriculum. We read every message and reply to most.",
    },
    general: {
      sectionLabel: "General",
      sectionHint: "For everything else.",
      body:
        "Questions about the curriculum, the workshops or the project: write to us. There's no form; a real person reads this inbox.",
      email: "team.prosperityproject@gmail.com",
    },
    getInvolved: {
      sectionLabel: "Get involved",
      sectionHint: "Two ways the work travels further.",
      runLabel: "Run a workshop",
      runBody:
        "Organisations, CSR teams, college societies and Resident Welfare Associations can teach *Knowing Your Money* directly. Write to us and we will help you run a workshop in your community the way it's meant to be run.",
      runEmail: "team.prosperityproject@gmail.com",
      partnerLabel: "Partner with us",
      partnerBody:
        "NGOs, foundations and institutions wanting to partner formally, the way Bandhan-Konnagar delivers the work in Baruipur, should write here. The model is simple: you bring the halls, the trust and the relationships; we bring the curriculum and the training.",
      partnerEmail: "team.prosperityproject@gmail.com",
    },
    press: {
      sectionLabel: "Press",
      sectionHint: "Journalists welcome.",
      body:
        "We welcome press enquiries and are glad to arrange interviews, photographs with consent, and workshop visits. To speak with the founder, write to us.",
      email: "team.prosperityproject@gmail.com",
    },
    // Paste the full profile URLs here. A link with no URL is not shown, and
    // the whole "Elsewhere" section stays hidden until at least one is set.
    elsewhere: {
      sectionLabel: "Elsewhere",
      instagramLabel: "Instagram",
      instagramUrl: "",
      linkedinLabel: "LinkedIn",
      linkedinUrl: "",
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
      sectionHint: "In his own words.",
      story: [
        "Shampa has looked after me since I was born. It took me years to see how hard her financial life had been. A scam took a chunk of her savings once. Her bank account caused her problems she could never fully explain. She worked constantly and had little to show for it. For a long time I noticed these things but never fully acted on them.",
        "At some point I decided to actually understand it. I asked if I could interview her and we ended up talking over several weeks. I asked things I had never thought to ask before, like where her salary went, why the account was such trouble, who she trusted with money and why. Every answer pointed to the same gap. No school had taught her any of this, and no one else had either. Once I saw that gap I could not stop seeing it, because it was not hers alone. There is a whole layer of knowledge the system assumes you have and never gives you.",
        "I turned what I learned into a curriculum, ten modules in plain language, and we ran the first two workshops in Baruipur. I went in as the teacher and spent most of the time learning. The women were kind to a stranger and curious about everything, sometimes a bit shy being in a new situation but they asked questions that really intrigued me. What held them back was never ability. Most had little experience with phones and apps, and the government schools they went to, when they got to go at all, never taught a word about money.",
        "The Prosperity Project exists because these women are smart and hardworking, and the only limit on them is information they were never given. That is something we can fix. We also train Community Resource Persons, women from the community itself, to run the workshops on their own, so the teaching continues without me and every group can train the next.",
      ],
    },

    mission: {
      sectionLabel: "Vision & mission",
      text:
        "I want this to reach more districts in India, then more states, and one day other countries, so no one suffers from a lack of financial knowledge again.",
    },

    organizations: {
      sectionLabel: "Organisations",
      sectionHint: "The institutions the work is built with.",
      // One block per organisation. Leave `photo` out entirely and the entry
      // renders as text only; that is what the two online partners do until
      // photographs arrive.
      items: [
        {
          name: "Bandhan-Konnagar",
          role: "Delivery partner · West Bengal",
          body:
            "Bandhan-Konnagar brings the halls, the relationships on the ground, and the trust that lets a workshop open with a cohort already in the room; **Bandhan Bank Ltd** supports the work. We bring the curriculum, the training, and the textbook. The partnership is in its second year, with the current cohort still in follow-up.",
          linkLabel: "How the workshops run",
        },
        {
          name: "Indo Count Industries",
          role: "Host partner · Kolhapur, Maharashtra",
          body:
            "Indo Count makes bed linen in Kolhapur and employs a large number of women. The company opened its training centre at Gokul Shirgaon and released its own workforce (women from the stitching and packing floors, and some of the office staff) to sit the full curriculum in Marathi, a group at a time.",
          linkLabel: "How the workshops run",
        },
        {
          name: "Shristi Corp",
          role: "Host partner · Asansol, West Bengal",
          body:
            "Shristi Corp builds infrastructure across eastern India (townships, retail, commercial and residential developments) from its head office in Salt Lake City, Kolkata. Among its projects is **Shristinagar**, a ninety-acre township in Asansol. The workshop ran online, over video call.",
        },
        {
          name: "FEED",
          role: "Delivery partner · Asansol, West Bengal",
          body:
            "The **Food, Education & Economic Development Society** is a grassroots nonprofit in Asansol, founded in 2016. It began by redistributing surplus food and grew wider: keeping first-generation learners in school, running free coaching centres, and building programmes for girls and women. The workshop ran online, over video call.",
        },
      ],
    },
  },

  /* ------------------------------------------------------------------ PRIVACY
     Plain-language notice. Keep it true: if the site ever adds analytics,
     forms or new embeds, update this page the same day.                      */
  privacy: {
    kicker: "Privacy",
    headline: "What this site does with your information.",
    standfirst:
      "Very little, on purpose. Here is all of it, in plain language.",
    sections: [
      {
        heading: "No tracking",
        body:
          "This site has no analytics, no advertising and no tracking cookies of its own. Its fonts are served from the site itself, so reading a page doesn't send your details anywhere else.",
      },
      {
        heading: "Videos",
        body:
          "The interviews and module videos are hosted on YouTube and embedded in its privacy-enhanced mode. They only load when you press play; from that moment YouTube's own privacy policy applies to that video.",
      },
      {
        heading: "Email",
        body:
          "If you write to us, we use your address and message only to reply, and we never share them or add you to a mailing list.",
      },
      {
        heading: "Hosting",
        body:
          "The site is hosted on Vercel, which keeps standard server logs (such as IP addresses and the pages requested) to run and protect the service.",
      },
      {
        heading: "Photographs and film",
        body:
          "Names, photographs and film of the women on this site are used with their permission. If you appear on the site and would like something changed or taken down, write to [team.prosperityproject@gmail.com](mailto:team.prosperityproject@gmail.com) and we will do it.",
      },
    ],
  },

  /* ---------------------------------------------------------------- NOT FOUND */
  notFound: {
    kicker: "Page not found",
    headline: "This page isn't here.",
    standfirst:
      "The link may be old, or the page may have moved. Everything on the site starts from one of these:",
    homeLabel: "Home",
    curriculumLabel: "The curriculum",
    programmesLabel: "Where it runs",
    contactLabel: "Contact",
  },
};
