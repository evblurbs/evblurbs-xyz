import { Link } from "react-router-dom";
import "./Page.css";
import "./ProjectDetail.css";

const SaturdayHoops = () => {
  return (
    <div className="page">
      <div className="page-content">
        <div className="project-detail">
          <div className="project-header">
            <Link to="/projects" className="back-link">
              ← Back to Projects
            </Link>
            <h1 className="project-title">Saturday Hoops NYC</h1>
            <p className="project-tagline">
              A web app for my pick-up basketball community in NYC — players sign
              up for games, pay, get balanced teams, and relive their highlights.
            </p>
          </div>

          <div className="project-content">
            <div className="project-section">
              <h2>What is Saturday Hoops NYC?</h2>
              <p>
                When I first moved to New York, I missed playing basketball and
                decided to rent a gym to see who I could get to join. What
                started as a small Meetup group quickly grew into a Slack
                community at work with hundreds of members — and eventually
                became too much to manage manually. To streamline things, I
                built{" "}
                <a
                  href="https://www.saturdayhoopsnyc.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  saturdayhoopsnyc.com
                </a>
                , a site that handles RSVPs and payments, replacing my old
                spreadsheet-and-Venmo system.
              </p>
              <p>
                Over time, I added two things that make the group feel less like
                a logistics chore and more like a product. The first is{" "}
                <strong>automated team balancing</strong>: the night before each
                game, a job sorts everyone into even teams using their skill,
                height, position, and who they've played with before, so I'm not
                hand-picking squads in the gym anymore.
              </p>
              <p>
                The second is <strong>game highlights</strong>. At first I
                edited the footage myself, but as demand grew and I had less
                time, I built a pipeline that detects made baskets and cuts clips
                a few seconds before and after each one — so I can put together
                reels quickly and consistently. I wrote about how that detector
                came together in{" "}
                <Link to="/blog/teaching-a-computer-to-find-made-baskets">
                  Teaching a Computer to Find Made Baskets
                </Link>
                . See a finished reel{" "}
                <a
                  href="https://youtu.be/kvA9i5kTgjE?si=3zg1V-6lkXGDxQ2X"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>
                .
              </p>
            </div>

            <div className="project-section">
              <h2>Technology Stack</h2>

              <h3>Frontend</h3>
              <ul>
                <li>
                  <strong>Framework:</strong> Next.js 16 (App Router) with React
                  19 and TypeScript
                </li>
                <li>
                  <strong>Styling:</strong> Tailwind CSS with DaisyUI, in a
                  Knicks-themed blue-and-orange palette
                </li>
                <li>
                  <strong>Data & state:</strong> SWR for fetching and caching,{" "}
                  <code>@dnd-kit</code> for drag-and-drop reel reordering, Zod
                  for schema validation
                </li>
                <li>
                  <strong>Video playback:</strong> HLS.js for adaptive streaming
                  with a custom player and tagging overlay
                </li>
              </ul>

              <h3>Backend & Data</h3>
              <ul>
                <li>
                  <strong>Database & auth:</strong> Supabase (PostgreSQL) with
                  Google OAuth, row-level security, and ~25 tracked migrations
                  as the schema evolved from games to highlights to memberships
                  and waitlists
                </li>
                <li>
                  <strong>Hosting:</strong> Vercel, including cron jobs that run
                  team assignment and process the waitlist on a schedule
                </li>
                <li>
                  <strong>Bot protection:</strong> Cloudflare Turnstile on
                  sign-up and payment flows
                </li>
              </ul>

              <h3>Payments</h3>
              <ul>
                <li>
                  <strong>Stripe:</strong> one-off game checkout, prepaid credit
                  packs, and a monthly membership subscription, with webhooks
                  managing access and automatic credit refunds when a game
                  doesn't fill
                </li>
              </ul>

              <h3>Video Pipeline & Storage</h3>
              <ul>
                <li>
                  <strong>Storage & delivery:</strong> AWS S3 for raw and
                  processed footage, CloudFront CDN for fast global playback
                </li>
                <li>
                  <strong>Made-basket detection:</strong> a Python computer-vision
                  pipeline that scans low-res copies of each game, finds the rim,
                  and flags every shot that reaches it — turning two hours of
                  footage into a short list of moments to review
                </li>
                <li>
                  <strong>Clip rendering:</strong> Shotstack to render
                  share-ready, watermarked clips for players to post
                </li>
              </ul>

              <h3>Email</h3>
              <ul>
                <li>
                  <strong>Transactional email:</strong> Mailgun with React Email
                  templates for game confirmations, team assignments, final
                  rosters, and membership welcomes
                </li>
              </ul>
            </div>

            <div className="project-section">
              <h2>Key Features</h2>

              <h3>Registration & Payments</h3>
              <p>
                Players can pay per game, buy credits, or subscribe to a monthly
                membership for a discounted rate. The site tracks signups in real
                time, enforces capacity, collects a waiver on first sign-up, and
                runs a waitlist that automatically refunds credits when a spot
                doesn't open up.
              </p>

              <h3>Automated Team Balancing</h3>
              <p>
                The night before a game, a scheduled job sorts players into even
                teams. It scores possible lineups on skill, height, position
                variety, gender balance, and a penalty for putting the same
                people together every week, and supports both two-team and
                three-team formats depending on turnout. Teams are emailed once
                they're set.
              </p>

              <h3>Highlights & Personal Reels</h3>
              <p>
                Each player gets a personalized highlight feed built from the
                made-basket detector. They can star and reorder clips into their
                own reel, like other players' clips, and share to Instagram with
                a custom framing tool — all backed by the S3 and CloudFront video
                pipeline.
              </p>

              <h3>Profiles & Leaderboard</h3>
              <p>
                Player profiles capture height, positions, jersey size, and
                pronouns, surface per-game clip counts and top teammates, and
                feed a multi-season leaderboard for the group.
              </p>
            </div>

            <div className="project-section">
              <h2>What's Next</h2>
              <p>
                The detection pipeline is still young, and most of what's next
                lives there: cutting editing time further, reducing false
                positives, and adding player tracking so a clip can know{" "}
                <em>who</em> made the shot, not just that one went in. Off the
                court, I'm continuing to refine the membership model, the
                waitlist mechanics, and the sharing tools that help the group
                hold onto these games as they get older.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaturdayHoops;
