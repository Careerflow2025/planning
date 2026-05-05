/* ─── Professional Directory & Review Request Data ─── */

export interface Professional {
  id: string;
  name: string;
  title: string;
  firm: string;
  email: string;
  location: string;
  specialties: string[];
  reportTypes: number[];
  qualifications: string[];
  bio: string;
  averageReviewDays: number;
  priceRange: { min: number; max: number; notes: string };
  rating: number;
  reviewCount: number;
  availability: "available" | "busy" | "unavailable";
  initials: string;
}

export type ReviewStatus =
  | "sent"
  | "accepted"
  | "in-review"
  | "changes-requested"
  | "signed-off"
  | "rejected"
  | "expired";

export interface ReviewRequest {
  id: string;
  reportId: number;
  reportName: string;
  applicationId: string;
  siteAddress: string;
  professionalId: string;
  professionalName: string;
  status: ReviewStatus;
  sentAt?: string;
  acceptedAt?: string;
  signedOffAt?: string;
  signedOffBy?: string;
  professionalComments?: string;
  userMessage?: string;
  createdAt: string;
}

export const REVIEW_STATUS_STYLES: Record<ReviewStatus, string> = {
  sent: "bg-gray-100 text-gray-700",
  accepted: "bg-blue-100 text-blue-700",
  "in-review": "bg-indigo-100 text-indigo-700",
  "changes-requested": "bg-amber-100 text-amber-700",
  "signed-off": "bg-emerald-100 text-emerald-700",
  rejected: "bg-red-100 text-red-700",
  expired: "bg-gray-100 text-gray-500",
};

export const REVIEW_STATUS_LABELS: Record<ReviewStatus, string> = {
  sent: "Sent",
  accepted: "Accepted",
  "in-review": "In Review",
  "changes-requested": "Changes Requested",
  "signed-off": "Signed Off",
  rejected: "Rejected",
  expired: "Expired",
};

/* ─── Mock Professionals ─── */
export const PROFESSIONALS: Professional[] = [
  {
    id: "pro-1",
    name: "Dr Sarah Whitfield",
    title: "MCIEEM Ecologist",
    firm: "Whitfield Ecology Ltd",
    email: "sarah@whitfieldecology.co.uk",
    location: "London, SE England",
    specialties: ["Ecology", "Protected Species", "BNG"],
    reportTypes: [7, 8, 9],
    qualifications: ["PhD Ecology", "MCIEEM", "Natural England Class Licence (Bats, GCN)"],
    bio: "15 years experience in ecological consultancy across London and the South East. Specialises in protected species surveys and biodiversity net gain assessments.",
    averageReviewDays: 3,
    priceRange: { min: 250, max: 600, notes: "Depends on report complexity" },
    rating: 4.9,
    reviewCount: 87,
    availability: "available",
    initials: "SW",
  },
  {
    id: "pro-2",
    name: "James Hartley",
    title: "CEnv Ecologist",
    firm: "Greenleaf Environmental",
    email: "james@greenleafenv.co.uk",
    location: "Bristol, SW England",
    specialties: ["Ecology", "BNG", "Habitat Assessment"],
    reportTypes: [7, 9],
    qualifications: ["MSc Conservation Biology", "CEnv", "MCIEEM"],
    bio: "Specialist in biodiversity net gain metric calculations and habitat condition assessments. Previously worked at Natural England.",
    averageReviewDays: 5,
    priceRange: { min: 200, max: 500, notes: "BNG metric review from £300" },
    rating: 4.7,
    reviewCount: 52,
    availability: "available",
    initials: "JH",
  },
  {
    id: "pro-3",
    name: "Dr Anika Patel",
    title: "Licensed Bat Ecologist",
    firm: "Nocturne Ecology",
    email: "anika@nocturneecology.co.uk",
    location: "Oxford, South England",
    specialties: ["Protected Species", "Bats", "Great Crested Newts"],
    reportTypes: [8],
    qualifications: ["PhD Chiropterology", "Natural England Bat Licence Level 2", "MCIEEM"],
    bio: "One of the UK's leading bat ecologists with over 200 protected species surveys completed. Expert witness for planning inquiries.",
    averageReviewDays: 4,
    priceRange: { min: 300, max: 800, notes: "Complex surveys at higher end" },
    rating: 5.0,
    reviewCount: 34,
    availability: "busy",
    initials: "AP",
  },
  {
    id: "pro-4",
    name: "Mark Thompson",
    title: "MIOA Acoustician",
    firm: "SoundPlan Acoustics",
    email: "mark@soundplan.co.uk",
    location: "Manchester, NW England",
    specialties: ["Noise Assessment", "Acoustic Design", "Vibration"],
    reportTypes: [12],
    qualifications: ["BEng Acoustic Engineering", "MIOA", "IoA Diploma"],
    bio: "Chartered acoustician specialising in environmental noise assessments for residential and mixed-use developments. BS 4142 and ProPG specialist.",
    averageReviewDays: 3,
    priceRange: { min: 200, max: 450, notes: "Standard NIA review from £250" },
    rating: 4.8,
    reviewCount: 63,
    availability: "available",
    initials: "MT",
  },
  {
    id: "pro-5",
    name: "Helen Crossley",
    title: "CMILT Transport Planner",
    firm: "Crossley Transport Planning",
    email: "helen@crossleytp.co.uk",
    location: "Leeds, N England",
    specialties: ["Transport Assessment", "Travel Plans", "Junction Modelling"],
    reportTypes: [23],
    qualifications: ["MSc Transport Planning", "CMILT", "MCIHT"],
    bio: "20 years in transport planning consultancy. Former highways officer for West Yorkshire. Expert in TRICS and junction capacity analysis.",
    averageReviewDays: 4,
    priceRange: { min: 300, max: 700, notes: "Larger TAs at higher end" },
    rating: 4.6,
    reviewCount: 41,
    availability: "available",
    initials: "HC",
  },
  {
    id: "pro-6",
    name: "Robert Chen",
    title: "MIStructE Structural Engineer",
    firm: "Chen Structural Ltd",
    email: "robert@chenstructural.co.uk",
    location: "London, SE England",
    specialties: ["Structural Surveys", "Basement Impact", "Party Wall"],
    reportTypes: [43, 44],
    qualifications: ["MEng Civil Engineering", "CEng", "MIStructE"],
    bio: "Chartered structural engineer with expertise in residential structural surveys, basement impact assessments, and subterranean development in London boroughs.",
    averageReviewDays: 5,
    priceRange: { min: 350, max: 900, notes: "Basement assessments from £500" },
    rating: 4.8,
    reviewCount: 29,
    availability: "available",
    initials: "RC",
  },
  {
    id: "pro-7",
    name: "David Okafor",
    title: "MIStructE / MIFireE",
    firm: "Okafor Fire Engineering",
    email: "david@okaforfire.co.uk",
    location: "Birmingham, Midlands",
    specialties: ["Fire Statement", "Fire Safety Strategy", "Gateway One"],
    reportTypes: [41, 42],
    qualifications: ["BEng Fire Engineering", "CEng", "MIFireE", "MIStructE"],
    bio: "Chartered fire engineer specialising in Planning Gateway One fire statements and fire safety strategies for high-rise residential buildings.",
    averageReviewDays: 4,
    priceRange: { min: 400, max: 1200, notes: "Fire strategies for tall buildings from £800" },
    rating: 4.9,
    reviewCount: 45,
    availability: "available",
    initials: "DO",
  },
  {
    id: "pro-8",
    name: "Catherine Morris",
    title: "SiLC Contaminated Land Specialist",
    firm: "GeoClean Consultants",
    email: "catherine@geoclean.co.uk",
    location: "Reading, SE England",
    specialties: ["Contamination", "Phase 1", "Phase 2", "Remediation"],
    reportTypes: [13, 14],
    qualifications: ["MSc Environmental Geochemistry", "SiLC", "SQP"],
    bio: "Specialist in Land Quality with 12 years experience. Registered as a Specialist in Land Condition (SiLC) and Suitable Qualified Person (SQP).",
    averageReviewDays: 3,
    priceRange: { min: 250, max: 600, notes: "Phase 2 reviews from £400" },
    rating: 4.7,
    reviewCount: 38,
    availability: "available",
    initials: "CM",
  },
  {
    id: "pro-9",
    name: "Tom Ashworth",
    title: "MArborA Arboriculturist",
    firm: "Canopy Arboricultural",
    email: "tom@canopyarb.co.uk",
    location: "Surrey, SE England",
    specialties: ["Tree Surveys", "AIA", "Tree Protection Plans"],
    reportTypes: [10],
    qualifications: ["FdSc Arboriculture", "MArborA", "Tech Cert (Arb)"],
    bio: "Specialist arboricultural consultant with extensive experience in BS 5837 tree surveys and arboricultural impact assessments for planning applications.",
    averageReviewDays: 3,
    priceRange: { min: 200, max: 400, notes: "Standard AIA review from £250" },
    rating: 4.5,
    reviewCount: 56,
    availability: "available",
    initials: "TA",
  },
  {
    id: "pro-10",
    name: "Dr Eleanor Fry",
    title: "MCIfA Archaeologist",
    firm: "Heritage First Archaeology",
    email: "eleanor@heritagefirst.co.uk",
    location: "York, N England",
    specialties: ["Archaeology", "Heritage", "Building Recording"],
    reportTypes: [37, 38, 39],
    qualifications: ["PhD Archaeology", "MCIfA", "Historic England Panel Member"],
    bio: "Chartered archaeologist and heritage consultant. Specialises in desk-based assessments and historic building recording across Northern England.",
    averageReviewDays: 5,
    priceRange: { min: 300, max: 700, notes: "Building recording reviews from £450" },
    rating: 4.8,
    reviewCount: 31,
    availability: "busy",
    initials: "EF",
  },
  {
    id: "pro-11",
    name: "Lisa Greenwood",
    title: "BREEAM AP / Sustainability Consultant",
    firm: "Sustain360",
    email: "lisa@sustain360.co.uk",
    location: "London, SE England",
    specialties: ["BREEAM", "WLCA", "Sustainability", "Energy"],
    reportTypes: [30, 32, 33],
    qualifications: ["MSc Sustainable Building Design", "BREEAM AP", "LEED AP"],
    bio: "Licensed BREEAM Assessor and Accredited Professional. Over 50 BREEAM assessments completed across commercial, residential, and education sectors.",
    averageReviewDays: 4,
    priceRange: { min: 300, max: 800, notes: "BREEAM assessments from £500" },
    rating: 4.6,
    reviewCount: 42,
    availability: "available",
    initials: "LG",
  },
  {
    id: "pro-12",
    name: "Prof Michael Dunn",
    title: "EIA Coordinator / Environmental Scientist",
    firm: "EIA Associates",
    email: "michael@eiaassociates.co.uk",
    location: "London, SE England",
    specialties: ["EIA", "Environmental Statement", "Screening/Scoping"],
    reportTypes: [6, 11, 15, 16],
    qualifications: ["PhD Environmental Science", "CEnv", "MIEMA", "FIEMA Fellow"],
    bio: "Fellow of IEMA with 25 years experience coordinating Environmental Impact Assessments for major infrastructure and residential developments across the UK.",
    averageReviewDays: 7,
    priceRange: { min: 500, max: 2000, notes: "EIA coordination from £1,000" },
    rating: 4.9,
    reviewCount: 23,
    availability: "available",
    initials: "MD",
  },
];

/* ─── Mock Review Requests ─── */
export const MOCK_REVIEW_REQUESTS: ReviewRequest[] = [
  {
    id: "rev-1",
    reportId: 10,
    reportName: "Arboricultural Impact Assessment",
    applicationId: "app-1",
    siteAddress: "14 Oakwood Drive, Richmond, London",
    professionalId: "pro-9",
    professionalName: "Tom Ashworth",
    status: "in-review",
    sentAt: "2026-04-22",
    acceptedAt: "2026-04-23",
    userMessage: "Council officer has specifically asked for additional tree protection details. Please review section 4 carefully.",
    createdAt: "2026-04-22",
  },
  {
    id: "rev-2",
    reportId: 12,
    reportName: "Noise Impact Assessment",
    applicationId: "app-3",
    siteAddress: "Unit 7, Riverside Business Park, Kingston",
    professionalId: "pro-4",
    professionalName: "Mark Thompson",
    status: "signed-off",
    sentAt: "2026-04-10",
    acceptedAt: "2026-04-11",
    signedOffAt: "2026-04-15",
    signedOffBy: "Mark Thompson MIOA",
    professionalComments: "Report is well-structured. I have verified the BS 4142 assessment methodology and noise level predictions. Minor correction applied to Table 3.2 receptor distances. Report is suitable for submission.",
    createdAt: "2026-04-10",
  },
  {
    id: "rev-3",
    reportId: 9,
    reportName: "Biodiversity Net Gain Assessment",
    applicationId: "app-5",
    siteAddress: "Land at Meadow Lane, Guildford",
    professionalId: "pro-2",
    professionalName: "James Hartley",
    status: "sent",
    sentAt: "2026-04-30",
    userMessage: "Greenfield site — 12 new homes. Please check the BNG metric calculations are correct for the baseline habitat.",
    createdAt: "2026-04-30",
  },
  {
    id: "rev-4",
    reportId: 3,
    reportName: "Heritage Statement",
    applicationId: "app-1",
    siteAddress: "14 Oakwood Drive, Richmond, London",
    professionalId: "pro-10",
    professionalName: "Dr Eleanor Fry",
    status: "changes-requested",
    sentAt: "2026-04-18",
    acceptedAt: "2026-04-19",
    professionalComments: "The significance assessment in Section 2 needs to explicitly address the contribution of the conservation area setting. Please expand the analysis of how the proposed extension affects the special architectural interest of the group of Victorian villas.",
    createdAt: "2026-04-18",
  },
];

/* ─── Helpers ─── */
export function getProfessionalsForReport(reportId: number): Professional[] {
  return PROFESSIONALS.filter((p) => p.reportTypes.includes(reportId));
}

export function getReviewRequestsByApplication(applicationId: string): ReviewRequest[] {
  return MOCK_REVIEW_REQUESTS.filter((r) => r.applicationId === applicationId);
}

export function getReviewRequestById(requestId: string): ReviewRequest | undefined {
  return MOCK_REVIEW_REQUESTS.find((r) => r.id === requestId);
}
