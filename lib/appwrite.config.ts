// lib/appwrite.config.ts

import dotenv from "dotenv"
dotenv.config({ path: ".env.local" }) // make sure .env.local is read

import * as sdk from "node-appwrite"

// allow either NEXT_PUBLIC_… or vanilla names:
const ENDPOINT =
  process.env.NEXT_PUBLIC_ENDPOINT ||
  process.env.ENDPOINT

const PROJECT_ID =
  process.env.NEXT_PUBLIC_PROJECT_ID ||
  process.env.PROJECT_ID

const API_KEY =
  process.env.NEXT_PUBLIC_API_KEY ||
  process.env.API_KEY

const DATABASE_ID =
  process.env.NEXT_PUBLIC_DATABASE_ID ||
  process.env.DATABASE_ID

const PATIENT_COLLECTION_ID =
  process.env.NEXT_PUBLIC_PATIENT_COLLECTION_ID ||
  process.env.PATIENT_COLLECTION_ID

const DOCTOR_COLLECTION_ID =
  process.env.NEXT_PUBLIC_DOCTOR_COLLECTION_ID ||
  process.env.DOCTOR_COLLECTION_ID

const APPOINTMENT_COLLECTION_ID =
  process.env.NEXT_PUBLIC_APPOINTMENT_COLLECTION_ID ||
  process.env.APPOINTMENT_COLLECTION_ID

const BUCKET_ID =
  process.env.NEXT_PUBLIC_BUCKET_ID ||
  process.env.BUCKET_ID

// sanity checks
if (!ENDPOINT)                     throw new Error("❌ Missing ENDPOINT/NEXT_PUBLIC_ENDPOINT")
if (!PROJECT_ID)                   throw new Error("❌ Missing PROJECT_ID/NEXT_PUBLIC_PROJECT_ID")
if (!API_KEY)                      throw new Error("❌ Missing API_KEY/NEXT_PUBLIC_API_KEY")
if (!DATABASE_ID)                  throw new Error("❌ Missing DATABASE_ID/NEXT_PUBLIC_DATABASE_ID")
if (!PATIENT_COLLECTION_ID)        throw new Error("❌ Missing PATIENT_COLLECTION_ID/NEXT_PUBLIC_PATIENT_COLLECTION_ID")
if (!DOCTOR_COLLECTION_ID)         throw new Error("❌ Missing DOCTOR_COLLECTION_ID/NEXT_PUBLIC_DOCTOR_COLLECTION_ID")
if (!APPOINTMENT_COLLECTION_ID)    throw new Error("❌ Missing APPOINTMENT_COLLECTION_ID/NEXT_PUBLIC_APPOINTMENT_COLLECTION_ID")
// bucket is optional, only needed if you actually call storage
// if (!BUCKET_ID)                 throw new Error("❌ Missing BUCKET_ID/NEXT_PUBLIC_BUCKET_ID")

// initialize client (no chaining!)
const client = new sdk.Client()
client.setEndpoint(ENDPOINT)
client.setProject(PROJECT_ID)
client.setKey(API_KEY)

// exports
export const databases = new sdk.Databases(client)
export const users     = new sdk.Users(client)
export const messaging = new sdk.Messaging(client)
export const storage   = new sdk.Storage(client)

// export IDs for convenience
export {
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  BUCKET_ID,
}
