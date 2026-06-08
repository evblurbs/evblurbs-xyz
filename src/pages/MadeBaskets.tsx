import { Link } from "react-router-dom";
import "./Page.css";
import "./ProjectDetail.css";
import "./Blog.css";

const MadeBaskets = () => {
  return (
    <div className="page">
      <div className="page-content">
        <div className="project-detail">
          <div className="project-header">
            <Link to="/blog" className="back-link">
              ← Back to Blog
            </Link>
            <h1 className="project-title">
              Teaching a Computer to Find Made Baskets
            </h1>
            <p className="post-date">June 7, 2026</p>
          </div>

          <div className="project-content">
            <div className="project-section">
              <p>
                Basketball has always been a passion of mine. So much so, that I
                rent out a gym and then invite friends to play pick-up.
                Organizing this group has been very rewarding, but hasn't come
                without its struggles — collecting payment, making sure we have
                attendance, people arguing fouls, etc. To streamline it, I built{" "}
                <Link to="/projects/saturday-hoops">Saturday Hoops NYC</Link>, a
                website where people can register, pay, and also view their
                highlights.
              </p>
              <p>
                I like recording games. I know that window where I can play
                basketball is shrinking as I get older and joints start to ache
                more. Other hoopers have echoed this sentiment telling me these
                are memories they plan to keep and look back on. With that said,
                it's not an easy process. I was taking larger files, and editing
                them in Final Cut Pro. The longest process was taking 2 hours of
                footage and narrowing it down to the made shots. While everyone
                in the group loved basketball, I wouldn't call us proficient —
                the 2 hours of footage would dwindle down to about 5 minutes of
                made baskets.
              </p>
              <p>
                A couple years ago, I tested using machine learning to detect
                made baskets. I set up training models and classified made and
                missed baskets. It was improving, but was a lot of work. Today, I
                decided to pick that up and test this out with the latest AI
                advances. I opened Claude, told it what I had done, and asked it
                to start from scratch. I wanted to see if it took a different
                approach. The approach turned out similar, but the velocity was
                the shock: what had been weeks of work a couple years ago got
                done in a single Sunday morning.
              </p>
              <p>This blog post outlines the approach and lessons learned.</p>
              <p>
                I started with the context I shared above and a simple prompt,
                "hey Claude, I want to make my editing of highlights quicker. Can
                you help me detect at what time made baskets occur to reduce my
                editing time?". I knew down the road I would want to automate
                this more, but this seemed like a good place to start.
              </p>
            </div>

            <div className="project-section">
              <h2>How do you teach a computer to find a made basket?</h2>
              <p>
                A person watching the game just <em>knows</em> when a shot drops.
                A computer doesn't. It sees video as millions of colored dots
                changing 60 times a second. So you have to break "a basket was
                made" into things it can actually look for: <em>where's the
                ball</em>, <em>where's the rim</em>, and <em>did the ball pass
                down through the rim</em>?
              </p>
              <p>
                Two things make that harder than it sounds. First, the footage is
                huge (4K, gigabytes per game), so the first step is shrinking
                each video down to a small, low-res copy the computer can scan
                quickly. The timestamps still line up with the original, so a hit
                at 9:42 in the small copy is 9:42 in the real game. Second, and
                this is the one that got me: on a <em>clean</em> make, the ball
                drops through the net and basically vanishes for a moment. A
                perfect <strong>swish</strong>, all net and no rim, is the worst
                case. The better the shot, the less there is to see. Early on,
                that meant the computer was great at spotting{" "}
                <strong>misses</strong> and blind to the <strong>makes</strong>.
              </p>
            </div>

            <div className="project-section">
              <h2>The journey: dead ends, one big surprise, and a fix</h2>
              <p>
                What followed was a Sunday of dead ends, one big surprise, and a
                handful of fixes, every wrong turn included. Here's the short
                version.
              </p>
              <p>
                <strong>It started at zero.</strong> On the first real test game,
                the system found <strong>0 of 7</strong> made baskets. Not a
                great start.
              </p>
              <p>
                <strong>The surprise:</strong> it wasn't failing at random. It
                was doing exactly the <em>wrong</em> thing. It kept flagging{" "}
                <em>near-misses</em> and ignoring <em>clean makes</em>. Watch
                these two moments back to back. In the first, a shot clanks off
                the rim and the ball stays in view, bouncing around, and the
                system fires. In the second, a clean make drops through the net,
                the ball disappears, and the system sees nothing.
              </p>

              <div className="post-clips">
                <figure>
                  <video
                    controls
                    playsInline
                    muted
                    preload="metadata"
                    src="/blog/made-baskets/clips/05-nearmiss-fires-2_19.mp4"
                  />
                  <figcaption>Near-miss → fires</figcaption>
                </figure>
                <figure>
                  <video
                    controls
                    playsInline
                    muted
                    preload="metadata"
                    src="/blog/made-baskets/clips/06-make-vanishes-2_24.mp4"
                  />
                  <figcaption>Clean make → vanishes</figcaption>
                </figure>
              </div>

              <p>
                That's the "ball disappears on a good shot" problem from above,
                in action. The cleaner the make, the more invisible it was.
              </p>
              <p>
                <strong>
                  The fix wasn't to be cleverer. It was to be simpler.
                </strong>{" "}
                Instead of trying to <em>judge</em> make-vs-miss in the moment
                (which is genuinely hard, even the disappearing ball trips it
                up), I flipped the goal: just flag <em>every</em> time the ball
                reaches a rim, and let me skim the handful of clips. I'd rather
                glance at a few extra moments than miss a highlight.
              </p>
              <p>
                The other half was a smarter "rim detector": early on it couldn't
                reliably tell the actual rim from the wood floor or a player's
                jersey, and getting that right made all the difference. Here's
                the <em>same</em> made basket: first the old approach flailing,
                then the new one locking onto the rim and flagging the make.
              </p>

              <div className="post-clips">
                <figure>
                  <video
                    controls
                    playsInline
                    muted
                    preload="metadata"
                    src="/blog/made-baskets/clips/classical-fail-1m12.mp4"
                  />
                  <figcaption>Old approach (fails)</figcaption>
                </figure>
                <figure>
                  <video
                    controls
                    playsInline
                    muted
                    preload="metadata"
                    src="/blog/made-baskets/clips/learned-catch-1m12.mp4"
                  />
                  <figcaption>New approach (catches it)</figcaption>
                </figure>
              </div>
            </div>

            <div className="project-section">
              <h2>The result</h2>
              <p>
                By the end of the morning: <strong>7 of 7</strong> made baskets
                on the test game. Then the real test. I ran it, untouched, on a
                completely <em>different</em> 15-minute game it had never seen,
                and it found every made shot that had a visible rim:{" "}
                <strong>14 of 14</strong>.
              </p>
              <p>
                This changes my editing drastically. Instead of scrubbing two
                hours of footage to find the makes, I get a short list of moments
                to review. Every real make is in there, plus a few false alarms I
                dismiss in a couple seconds each. The tedious part of editing
                highlights basically went away.
              </p>
            </div>

            <div className="project-section">
              <h2>What was different this time</h2>
              <p>
                Two years ago this was <em>weeks</em> of work. This time it was a
                Sunday morning. Part of that is just how far the tools have come,
                but a few things stood out about <em>how</em> the work went:
              </p>
              <ul>
                <li>
                  <strong>Looking beat theorizing.</strong> The biggest jumps
                  didn't come from clever ideas. They came from building a quick
                  "debug view" that drew what the computer was seeing on each
                  frame, then actually <em>watching</em> it. Every time I guessed
                  at why something failed, I was wrong. Every time I looked, the
                  answer was obvious.
                </li>
                <li>
                  <strong>"Catch everything" beat "be perfect."</strong> Chasing
                  a system that only ever flags real makes was a trap. Accepting
                  a few false alarms, and trusting myself to dismiss them
                  quickly, is what made it actually useful.
                </li>
                <li>
                  <strong>The hard part was the basketball, not the code.</strong>{" "}
                  Knowing that a made shot ends with the ball <em>vanishing</em>{" "}
                  into the net, that the other team inbounds right after, that the
                  camera pans to follow the ball: that domain knowledge is what
                  unlocked each fix. I expect the next features to work the same
                  way. Figuring out <em>who</em> made a shot, for instance, is
                  really about following a player through a possession, which is a
                  basketball problem long before it's a coding one.
                </li>
              </ul>
            </div>

            <div className="project-section">
              <h2>What's next</h2>
              <p>
                A few years ago, this project felt like I was just dabbling in
                computer vision. I still don't have much depth in the field, but
                what I can produce with the right prompts is surprising. For me
                personally, I want to keep learning how computer vision detects
                objects, both for the fulfillment and a better understanding. For
                Saturday Hoops NYC, I want to take the automation further: cut the
                editing time down even more, reduce false positives, add player
                tracking, and plenty beyond that. The possibilities with these
                tools are exciting.
              </p>
              <p className="post-signoff">
                Cheers,
                <br />
                Evan
              </p>
              <p className="post-ps">PS. Knicks in 4.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MadeBaskets;
