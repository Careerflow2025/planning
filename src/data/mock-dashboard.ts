/* ─── Mock data for dashboard / admin ─── */

export interface PlanningLawUpdate {
  id: string;
  date: string;
  title: string;
  summary: string;
  source: string;
  relevantTo: string[]; // keywords like "extension", "conservation", "BNG"
  isNew: boolean;
}

export interface ApplicationReport {
  reportId: number;
  reportName: string;
  status: "draft" | "generated" | "edited" | "exported" | "review-pending" | "under-review" | "signed-off";
  reviewRequestId?: string;
  signedOffBy?: string;
  signedOffAt?: string;
  /** Backend project_assessments.id (UUID). Set when reports come from the API, absent for mocks. */
  assessmentRowId?: string;
  /** assessment_types.short_name (e.g. "PS","DAS"). Used to find professional info in REPORTS by code. */
  shortName?: string;
}

export interface Application {
  id: string;
  siteId: string;
  name: string;
  type: string; // extension, conversion, new-build, change-of-use, etc.
  status: "draft" | "submitted" | "under-review" | "approved" | "refused" | "appealed";
  councilRef?: string;
  councilPortalUrl?: string;
  reports: ApplicationReport[];
  createdAt: string;
  updatedAt: string;
  aiInsights: string[];
  notes: string;
}

export interface Site {
  id: string;
  address: string;
  postcode: string;
  lat: number;
  lng: number;
  council: string;
  councilWebsite: string;
  photoUrl?: string;
  applications: Application[];
  createdAt: string;
  notes: string;
}

export interface DashboardUser {
  id: string;
  name: string;
  email: string;
  plan: "free" | "pay-per-report" | "professional";
  credits: number;
  joinedAt: string;
  sites: Site[];
}

/* ─── Planning Law Updates ─── */
export const PLANNING_LAW_UPDATES: PlanningLawUpdate[] = [
  {
    id: "law-1",
    date: "2026-04-28",
    title: "Permitted Development Rights Extended for Rear Extensions",
    summary: "New regulations extend permitted development rights allowing single-storey rear extensions up to 6m for semi-detached and 8m for detached houses without full planning permission.",
    source: "DLUHC Statutory Instrument 2026/312",
    relevantTo: ["extension", "house", "permitted development"],
    isNew: true,
  },
  {
    id: "law-2",
    date: "2026-04-15",
    title: "Biodiversity Net Gain — Small Sites Now Included",
    summary: "From April 2026, all developments including small sites must deliver a minimum 10% biodiversity net gain. Transition period ended.",
    source: "Environment Act 2021 — BNG Commencement Order",
    relevantTo: ["biodiversity", "BNG", "new-build", "ecology"],
    isNew: true,
  },
  {
    id: "law-3",
    date: "2026-03-20",
    title: "Updated NPPF Published — Housing Delivery Changes",
    summary: "Revised National Planning Policy Framework introduces new housing delivery test thresholds and tilted balance criteria for local authorities.",
    source: "NPPF December 2025 Revision",
    relevantTo: ["housing", "planning statement", "NPPF", "policy"],
    isNew: false,
  },
  {
    id: "law-4",
    date: "2026-03-01",
    title: "Fire Safety (England) Regulations — Gateway Two Updates",
    summary: "Updated guidance on Gateway Two requirements for buildings over 18m. Additional documentation now required at planning stage.",
    source: "Building Safety Act 2022 — Secondary Legislation",
    relevantTo: ["fire", "tall building", "safety", "residential"],
    isNew: false,
  },
  {
    id: "law-5",
    date: "2026-02-10",
    title: "Nutrient Neutrality Rules Relaxed for Certain Catchments",
    summary: "Government has removed nutrient neutrality requirements for 8 river catchments, unblocking approximately 30,000 homes.",
    source: "DLUHC Written Ministerial Statement",
    relevantTo: ["ecology", "drainage", "new-build", "housing"],
    isNew: false,
  },
];

/* ─── Mock User Data ─── */
export const MOCK_USER: DashboardUser = {
  id: "user-1",
  name: "James Mitchell",
  email: "james@mitchellarchitects.co.uk",
  plan: "professional",
  credits: 42,
  joinedAt: "2026-01-15",
  sites: [
    {
      id: "site-1",
      address: "14 Oakwood Drive, Richmond, London",
      postcode: "TW9 4HE",
      lat: 51.4613,
      lng: -0.3037,
      council: "London Borough of Richmond upon Thames",
      councilWebsite: "https://www.richmond.gov.uk/planning",
      photoUrl: undefined,
      createdAt: "2026-02-10",
      notes: "Victorian semi-detached, conservation area. Client wants rear/side extension plus loft.",
      applications: [
        {
          id: "app-1",
          siteId: "site-1",
          name: "Rear & Side Extension",
          type: "extension",
          status: "under-review",
          councilRef: "26/0142/FUL",
          councilPortalUrl: "https://www.richmond.gov.uk/planning/26-0142-FUL",
          reports: [
            { reportId: 1, reportName: "Planning Statement", status: "exported" },
            { reportId: 2, reportName: "Design and Access Statement", status: "exported" },
            { reportId: 3, reportName: "Heritage Statement", status: "review-pending", reviewRequestId: "rev-4" },
            { reportId: 10, reportName: "Arboricultural Impact Assessment", status: "under-review", reviewRequestId: "rev-1" },
          ],
          createdAt: "2026-02-12",
          updatedAt: "2026-04-20",
          aiInsights: [
            "New permitted development extension limits (April 2026) may affect this application — side extensions in conservation areas still require full planning permission.",
            "Council officer has requested additional tree protection details — consider updating Arboricultural report Section 4.",
          ],
          notes: "Awaiting officer decision. Target committee date May 2026.",
        },
        {
          id: "app-2",
          siteId: "site-1",
          name: "Loft Conversion with Rear Dormer",
          type: "conversion",
          status: "draft",
          reports: [
            { reportId: 1, reportName: "Planning Statement", status: "draft" },
            { reportId: 2, reportName: "Design and Access Statement", status: "draft" },
          ],
          createdAt: "2026-03-18",
          updatedAt: "2026-03-18",
          aiInsights: [
            "Rear dormers in conservation areas typically require a Heritage Statement — recommend adding to this application.",
          ],
          notes: "Will submit after extension decision.",
        },
      ],
    },
    {
      id: "site-2",
      address: "Unit 7, Riverside Business Park, Kingston",
      postcode: "KT1 1QN",
      lat: 51.4103,
      lng: -0.3065,
      council: "Royal Borough of Kingston upon Thames",
      councilWebsite: "https://www.kingston.gov.uk/planning",
      photoUrl: undefined,
      createdAt: "2026-03-05",
      notes: "Commercial unit — client wants to convert to 4 residential flats.",
      applications: [
        {
          id: "app-3",
          siteId: "site-2",
          name: "Change of Use — B1 to C3 Residential",
          type: "change-of-use",
          status: "refused",
          councilRef: "26/0298/COU",
          councilPortalUrl: "https://www.kingston.gov.uk/planning/26-0298-COU",
          reports: [
            { reportId: 1, reportName: "Planning Statement", status: "exported" },
            { reportId: 2, reportName: "Design and Access Statement", status: "exported" },
            { reportId: 12, reportName: "Noise Impact Assessment", status: "signed-off", reviewRequestId: "rev-2", signedOffBy: "Mark Thompson MIOA", signedOffAt: "2026-04-15" },
            { reportId: 23, reportName: "Transport Assessment", status: "exported" },
          ],
          createdAt: "2026-03-08",
          updatedAt: "2026-04-25",
          aiInsights: [
            "Application refused on noise grounds. Consider commissioning an updated Noise Impact Assessment with mitigation measures before resubmitting.",
            "New NPPF revision supports residential conversion of commercial space — this could strengthen your resubmission planning statement.",
          ],
          notes: "Refused — noise and parking. Client wants to appeal.",
        },
        {
          id: "app-4",
          siteId: "site-2",
          name: "Resubmission — B1 to C3 with Noise Mitigation",
          type: "change-of-use",
          status: "draft",
          reports: [
            { reportId: 1, reportName: "Planning Statement", status: "draft" },
            { reportId: 12, reportName: "Noise Impact Assessment", status: "draft" },
            { reportId: 26, reportName: "Parking Survey", status: "draft" },
          ],
          createdAt: "2026-04-28",
          updatedAt: "2026-04-28",
          aiInsights: [
            "Include reference to revised NPPF March 2026 housing delivery provisions to strengthen your case.",
          ],
          notes: "Addressing refusal reasons. New noise report with mitigation spec.",
        },
      ],
    },
    {
      id: "site-3",
      address: "Land at Meadow Lane, Guildford",
      postcode: "GU1 3XD",
      lat: 51.2362,
      lng: -0.5703,
      council: "Guildford Borough Council",
      councilWebsite: "https://www.guildford.gov.uk/planning",
      photoUrl: undefined,
      createdAt: "2026-04-01",
      notes: "Greenfield site — 12 new homes. Pre-app stage.",
      applications: [
        {
          id: "app-5",
          siteId: "site-3",
          name: "12 New Dwellings — Full Application",
          type: "new-build",
          status: "draft",
          reports: [
            { reportId: 1, reportName: "Planning Statement", status: "generated" },
            { reportId: 2, reportName: "Design and Access Statement", status: "draft" },
            { reportId: 9, reportName: "Biodiversity Net Gain Assessment", status: "draft" },
            { reportId: 17, reportName: "Flood Risk Assessment", status: "draft" },
            { reportId: 18, reportName: "Drainage Strategy", status: "draft" },
            { reportId: 28, reportName: "Energy Statement", status: "draft" },
          ],
          createdAt: "2026-04-01",
          updatedAt: "2026-04-28",
          aiInsights: [
            "BNG small sites requirement now in force (April 2026) — your Biodiversity Net Gain Assessment is essential. Ensure 10% net gain is demonstrated.",
            "Nutrient neutrality rules relaxed for some catchments — check if Guildford falls within exempted areas to simplify your ecology requirements.",
            "Site is near Flood Zone 2 boundary — Sequential Test may be required alongside your FRA.",
          ],
          notes: "Pre-app positive. Working on full submission pack.",
        },
      ],
    },
  ],
};

/* ─── Mock Admin Stats ─── */
export const ADMIN_STATS = {
  totalUsers: 284,
  activeSubscriptions: 47,
  totalReportsGenerated: 1_832,
  reportsThisMonth: 156,
  revenue: {
    thisMonth: 12_450,
    lastMonth: 9_800,
    total: 68_200,
  },
  topReports: [
    { name: "Planning Statement", count: 412 },
    { name: "Design and Access Statement", count: 389 },
    { name: "Heritage Statement", count: 201 },
    { name: "Flood Risk Assessment", count: 178 },
    { name: "Noise Impact Assessment", count: 145 },
  ],
  recentUsers: [
    { name: "James Mitchell", email: "james@mitchellarchitects.co.uk", plan: "professional", sites: 3, reports: 14, joined: "2026-01-15" },
    { name: "Sarah Chen", email: "sarah@chenplanning.com", plan: "professional", sites: 7, reports: 31, joined: "2026-02-03" },
    { name: "David Thompson", email: "dave.t@gmail.com", plan: "pay-per-report", sites: 1, reports: 2, joined: "2026-03-22" },
    { name: "Priya Sharma", email: "priya@sharmadevelopments.co.uk", plan: "professional", sites: 5, reports: 18, joined: "2026-01-28" },
    { name: "Tom Wilson", email: "tom.wilson@outlook.com", plan: "free", sites: 1, reports: 1, joined: "2026-04-30" },
  ],
};
