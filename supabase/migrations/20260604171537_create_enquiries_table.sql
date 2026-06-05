/*
  # Create enquiries table

  1. New Tables
    - `enquiries`
      - `id` (uuid, primary key, auto-generated)
      - `created_at` (timestamptz, defaults to now)
      - `name` (text, not null)
      - `email` (text, not null)
      - `phone` (text, default empty string)
      - `message` (text, not null)

  2. Security
    - Enable RLS on `enquiries` table
    - Add policy for anonymous users to insert enquiries only
    - No public read/update/delete access
*/

CREATE TABLE IF NOT EXISTS enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  message text NOT NULL
);

ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous enquiry submissions"
  ON enquiries
  FOR INSERT
  TO anon
  WITH CHECK (
    length(name) > 0
    AND length(email) > 0
    AND length(message) > 0
  );
