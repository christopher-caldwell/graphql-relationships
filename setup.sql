CREATE TABLE "organization" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "name" varchar NOT NULL,
  "created_at" timestamp DEFAULT (now()) NOT NULL,
  "updated_at" timestamp DEFAULT (now()) NOT NULL
);
CREATE TABLE "location" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "address" varchar NOT NULL,
  "latitude" float NOT NULL,
  "longitude" float NOT NULL,
  "created_at" timestamp DEFAULT (now()) NOT NULL,
  "updated_at" timestamp DEFAULT (now()) NOT NULL,
  "organization_id" int NOT NULL
);
CREATE TABLE "event" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "name" varchar NOT NULL,
  "time_of_event" timestamp DEFAULT (now()) NOT NULL,
  "description" varchar NOT NULL,
  "updated_at" timestamp DEFAULT (now()) NOT NULL,
  "created_at" timestamp DEFAULT (now()) NOT NULL,
  "organization_id" int NOT NULL
);
--
ALTER TABLE "location"
ADD FOREIGN KEY ("organization_id") REFERENCES "organization" ("id");
-- 
ALTER TABLE "event"
ADD FOREIGN KEY ("organization_id") REFERENCES "organization" ("id");