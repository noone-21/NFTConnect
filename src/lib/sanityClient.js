import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "ryg7obvi",
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: false,
  token:
    "skrWQ8cAwfKNxfqorp1sU7s7POHE9IUo3q7juPy95xeLiiFvCUohEvrk7xnxP0ZuSYUhSHlF0fx5UOrzIQnb21RjzCOSNlzYwJz967LanirQjJvfJuw7nG4N8pwsZR7G4Ai4agZK9uphR3ruxbWvBBENJ3FYs7wHiwAvRP78PaeHTDAodML5",
});