/* The ten Knowing Your Money modules — shared by the curriculum accordion
   (ModuleList) and the resources video curriculum (VideoCurriculum). */

export type Module = {
  num: string;
  title: string;
  teaser: string;
  body: string;
};

export const WOMEN_MODULES: Module[] = [
  {
    num: "01",
    title: "Your Money, Your Name",
    teaser: "If your money is in someone else's account, it is not your money.",
    body: "A bank account in your own name gives you three things — control, proof, and safety. Opening one is free under the Jan Dhan Yojana; you only need an Aadhaar card. The module introduces the three questions to ask before handing money to anyone, and how to respond when family or employers pressure you to keep money in their hands.",
  },
  {
    num: "02",
    title: "Budgeting",
    teaser: "A budget is not about having more money. It is about knowing where it goes.",
    body: "The 3 Jar System divides every rupee earned into Needs (50%), Wants (30%), and Savings (20%). Students learn to track daily spending, budget against their lowest-earning month, and see how small consistent savings compound. Two minutes a day in a notebook is enough.",
  },
  {
    num: "03",
    title: "Get Paid What You're Worth",
    teaser: "Fear is the most expensive thing in a working woman's life.",
    body: "Most underpaid workers stay underpaid because of fear, not because of value. This module teaches market research (asking others doing similar work what they earn), a practiced negotiation script, and the legal rights every Indian worker holds — minimum wage, maternity benefit, equal pay, and protections specific to domestic workers.",
  },
  {
    num: "04",
    title: "How Money Grows",
    teaser: "Money can work for you, even while you sleep.",
    body: "Compound interest means your money earns interest on its own interest. Time is the most powerful ingredient — the same ₹1,000 a month compounds into many times more when the habit is started in your twenties than in your forties. Students also learn the Rule of 72 as a quick way to compare any savings option.",
  },
  {
    num: "05",
    title: "Safe Places for Your Money",
    teaser: "Once you start saving, you need to know where to keep it safely.",
    body: "A tour of India's safe, government-backed savings options — Recurring Deposits for monthly habits, Fixed Deposits for lump sums, the Public Provident Fund for tax-free long-term growth, Post Office Savings, Sukanya Samriddhi Yojana for daughters, and the Atal Pension Yojana for unorganised-sector workers. Each option matched to the saver who needs it.",
  },
  {
    num: "06",
    title: "Scam Shield",
    teaser: "If it sounds too good to be true, it is. Every time.",
    body: 'Scammers target people who work hard and save carefully. The module covers four common scams — unregistered chit funds, OTP fraud, "double your money" Ponzi schemes, fake government scheme messages — and the absolute rule: never share an OTP, PIN, or password, including with someone claiming to be from your bank.',
  },
  {
    num: "07",
    title: "Debt",
    teaser: "Not all debt is bad. But all debt without understanding is dangerous.",
    body: "The single most important question before borrowing — is this interest rate monthly or annual? — can save lakhs. The module covers the gap between bank rates and moneylender rates, where to borrow safely (banks, microfinance, Self-Help Groups, Mudra Loans), what to check before signing any agreement, and the avalanche method for paying off existing debt.",
  },
  {
    num: "08",
    title: "Your First Real Investment",
    teaser: "From gold bangles to mutual fund SIPs — making your money work harder.",
    body: "Gold protects, but a full portfolio provides. The module explains the limits of gold-only investing, introduces the mutual fund SIP as a way to invest small monthly amounts under professional management, walks through KYC and account-opening, and lays out a balanced strategy combining gold, safe savings, and a SIP.",
  },
  {
    num: "09",
    title: "Digital Money",
    teaser: "Digital payments are the future — and the future is already here.",
    body: "UPI is safe, free, and increasingly essential. Students learn to set up Google Pay, PhonePe, or BHIM; the absolute UPI safety rules (you never need to enter a PIN to receive money — that is always a scam); how to use mobile wallets without exposing larger savings; and how to recognise online fraud.",
  },
  {
    num: "10",
    title: "Emergency Plan",
    teaser: "It is not about if an emergency happens. It is about when.",
    body: "The ideal emergency fund is three months of total expenses, kept somewhere safe and accessible. The module covers how to build the fund using Jar 3 from Module 02, the order of operations in a real emergency (use the fund, then banks or SHGs, then employer advance, then family — never moneylenders), and which documents to keep ready.",
  },
];
