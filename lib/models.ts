import db from "./db";
import type { Role } from "./auth";

export interface DbUser {
  id: number;
  email: string;
  password_hash: string;
  name: string;
  role: Role;
  created_at: string;
}

export function findUserByEmail(email: string): DbUser | undefined {
  return db.prepare("SELECT * FROM users WHERE email = ?").get(email) as DbUser | undefined;
}

export function createUser(input: {
  email: string;
  passwordHash: string;
  name: string;
  role: Role;
}): DbUser {
  db.prepare(
    "INSERT INTO users (email, password_hash, name, role) VALUES (@email, @passwordHash, @name, @role)"
  ).run(input);
  return findUserByEmail(input.email)!;
}

export function countUsers(): number {
  const row = db.prepare("SELECT COUNT(*) as c FROM users").get() as { c: number };
  return row.c;
}

/** Small factory for the repeated insert/list/count shape each submission table needs. */
function makeTable<T>(table: string) {
  return {
    insert(row: Record<string, unknown>): number {
      const cols = Object.keys(row);
      const placeholders = cols.map((c) => `@${c}`).join(", ");
      const stmt = db.prepare(`INSERT INTO ${table} (${cols.join(", ")}) VALUES (${placeholders})`);
      const info = stmt.run(row as any);
      return Number(info.lastInsertRowid);
    },
    list(): T[] {
      return db.prepare(`SELECT * FROM ${table} ORDER BY created_at DESC`).all() as T[];
    },
    count(): number {
      const row = db.prepare(`SELECT COUNT(*) as c FROM ${table}`).get() as { c: number };
      return row.c;
    },
  };
}

export interface Enquiry {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: string;
  created_at: string;
}
export const enquiries = makeTable<Enquiry>("enquiries");

export interface CorporateTrainingRequest {
  id: number;
  company: string;
  contact_name: string;
  email: string;
  phone: string | null;
  team_size: string | null;
  focus_areas: string | null;
  timeline: string | null;
  details: string;
  status: string;
  created_at: string;
}
export const corporateTrainingRequests = makeTable<CorporateTrainingRequest>(
  "corporate_training_requests"
);

export interface PartnerApplication {
  id: number;
  organisation: string;
  contact_name: string;
  email: string;
  category: string | null;
  message: string;
  status: string;
  created_at: string;
}
export const partnerApplications = makeTable<PartnerApplication>("partner_applications");

export interface SponsorApplication {
  id: number;
  organisation: string;
  contact_name: string;
  email: string;
  tier: string | null;
  message: string;
  status: string;
  created_at: string;
}
export const sponsorApplications = makeTable<SponsorApplication>("sponsor_applications");

export interface FacilitatorApplication {
  id: number;
  name: string;
  email: string;
  expertise: string;
  years_experience: string | null;
  linkedin: string | null;
  availability: string | null;
  status: string;
  created_at: string;
}
export const facilitatorApplications = makeTable<FacilitatorApplication>(
  "facilitator_applications"
);

export interface RegistrationInterest {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  interest: string | null;
  status: string;
  created_at: string;
}
export const registrationInterests = makeTable<RegistrationInterest>("registration_interests");

export interface PushSubscriptionRow {
  id: number;
  endpoint: string;
  p256dh: string;
  auth: string;
  created_at: string;
}

/** Stores browser push subscriptions. Sending pushes to them is not implemented yet —
 * see public/sw.js and README for what's needed to turn that on (VAPID keys + web-push). */
export const pushSubscriptions = {
  upsert(sub: { endpoint: string; p256dh: string; auth: string }): void {
    db.prepare(
      `INSERT INTO push_subscriptions (endpoint, p256dh, auth) VALUES (@endpoint, @p256dh, @auth)
       ON CONFLICT(endpoint) DO UPDATE SET p256dh = excluded.p256dh, auth = excluded.auth`
    ).run(sub);
  },
  deleteByEndpoint(endpoint: string): void {
    db.prepare("DELETE FROM push_subscriptions WHERE endpoint = ?").run(endpoint);
  },
  list(): PushSubscriptionRow[] {
    return db.prepare("SELECT * FROM push_subscriptions ORDER BY created_at DESC").all() as unknown as PushSubscriptionRow[];
  },
  count(): number {
    const row = db.prepare("SELECT COUNT(*) as c FROM push_subscriptions").get() as { c: number };
    return row.c;
  },
};
