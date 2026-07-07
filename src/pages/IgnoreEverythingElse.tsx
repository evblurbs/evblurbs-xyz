import { Link } from "react-router-dom";
import "./Page.css";
import "./ProjectDetail.css";
import "./Blog.css";

const B = "/blog/ignore-everything-else";

const Clip = ({
  src,
  caption,
}: {
  src: string;
  caption: string;
}) => (
  <figure className="post-clip-single">
    <video controls playsInline muted preload="metadata" src={`${B}/clips/${src}#t=0.1`} />
    <figcaption>{caption}</figcaption>
  </figure>
);

const Chart = ({ src, alt }: { src: string; alt: string }) => (
  <figure className="post-chart">
    <img src={`${B}/attachments/${src}`} alt={alt} loading="lazy" />
  </figure>
);

const signals: [string, string, string, string][] = [
  ["peak_above_after", "After the rim", "Highest the ball rises above the rim after the shot — a make drops through and stays low; a miss bounces back up", "0.216"],
  ["returned_above", "After the rim", "Whether the ball went back above the rim afterward (~half of misses, almost no makes)", "0.099"],
  ["final_dy", "After the rim", "The ball's final height vs. the rim — below (went through) or above (stayed up)", "0.075"],
  ["rim_y", "Approach & position", "The rim's vertical position in the frame (where the shot happened)", "0.066"],
  ["dy_center", "Approach & position", "The ball's vertical offset from the rim center at the shot moment", "0.057"],
  ["net_dy_after", "After the rim", "Net vertical travel after the shot — downward (through) vs. back up (miss)", "0.051"],
  ["revs_after", "After the rim", "Direction reversals after the shot (how much it rattled)", "0.048"],
  ["dwell_before", "Approach & position", "How long the ball lingered at the rim just before (rattle-in makes)", "0.045"],
  ["dx_center", "Approach & position", "The ball's horizontal offset from the rim center at the shot moment", "0.042"],
  ["vanish_frac", "After the rim", "Fraction of frames the ball vanished right after — the “disappears into the net” tell", "0.038"],
  ["descent", "Approach & position", "How far the ball dropped on its way in", "0.037"],
  ["peak_above", "Approach & position", "Arc height above the rim on the approach", "0.033"],
  ["converged", "Player crowding", "Whether players moved toward the rim (rebound) or cleared out (make)", "0.030"],
  ["final_dx", "After the rim", "The ball's final horizontal distance from the rim — through (small) vs. bounced away (large)", "0.028"],
  ["n_before", "Approach & position", "How many ball points were tracked on approach (trajectory length)", "0.025"],
  ["approach_speed", "Approach & position", "Vertical speed heading into the rim", "0.023"],
  ["horiz_drift_before", "Approach & position", "Horizontal spread of the ball on approach", "0.018"],
  ["density_start", "Player crowding", "Player density near the rim at the start of the ~3s window", "0.014"],
  ["down_frac", "Approach & position", "Fraction of approach steps that were downward", "0.014"],
  ["density_peak", "Player crowding", "Peak player density near the rim", "0.013"],
  ["density_delta", "Player crowding", "Change in player density (the paint empties on a make)", "0.012"],
  ["came_from_above", "Approach & position", "Whether the ball arrived from above the rim (real shots arc down)", "0.008"],
  ["density_end", "Player crowding", "Player density near the rim at the end of the window", "0.008"],
  ["rim_r", "Approach & position", "The rim's radius (size) — frozen at a constant, so it contributes nothing (a bug I've chosen to leave)", "0.000"],
];

const IgnoreEverythingElse = () => {
  return (
    <div className="page">
      <div className="page-content">
        <div className="project-detail">
          <div className="project-header">
            <Link to="/blog" className="back-link">
              ← Back to Blog
            </Link>
            <h1 className="project-title">
              Teaching a Computer to Ignore Everything Else
            </h1>
            <p className="post-date">July 5, 2026</p>
          </div>

          <div className="project-content">
            <div className="project-section">
              <p className="post-tldr">
                <strong>TL;DR:</strong> Four filters cut my basket-review pile
                from 448 candidates to 251 — zero made baskets lost. One of the
                filters, and a major recalibration, exist because writing this
                post exposed problems I didn't know I had.
              </p>

              <p>
                <a
                  href="https://www.saturdayhoopsnyc.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Saturday Hoops NYC
                </a>{" "}
                is a basketball group I organize. One of my self-assigned tasks
                is to record our games and create highlight reels for the players
                to watch. In my earlier post,{" "}
                <Link to="/blog/teaching-a-computer-to-find-made-baskets">
                  Teaching a Computer to Find Made Baskets
                </Link>
                , I wrote about using Claude and computer vision to detect made
                baskets. I created a model that flags moments that might be makes,
                called "candidates", which I confirm or reject. It was perfect at
                catching all makes in two fifteen-minute trial videos.
              </p>
              <p>
                The next test was giving it an hour and a half of raw footage and
                letting the computer vision models do their thing. I still needed
                a ground truth to compare the results though. So in trying to save
                myself editing time, I ended up watching every minute of footage
                anyway, just to grade the model's accuracy. I counted 81 made
                baskets out of 282 shot attempts. Apparently we shoot 29% as a
                group, well below the league average of 47–49%.
              </p>
              <p>
                The model caught 76 of the 81 baskets (93.8%). This was the good
                news.
              </p>
              <p>
                The bad news was that the model had 448 candidates with only 76
                real makes among them: 372 times the model cried wolf. To make
                sense of them, I first set up a local website.
              </p>
              <p>
                The website showed videos that had been processed, stats for
                videos with a ground truth, and a detail view to review every
                "shot". A shot might be an actual shot attempt, or a pass near one
                of the rims.
              </p>
              <p>
                The court we rent has six rims, but we only play on two of them.
                The four side rims are for playing two side games when you don't
                want to play full court. Since we play full court, the rims nobody
                was even playing on accounted for 63 shots — 17% of the false
                positives. Below is an example of the model thinking a made basket
                occurred on the wrong rim.
              </p>

              <Clip
                src="debug-side-hoop-edge.mp4"
                caption="A make flagged on a side rim nobody was playing on"
              />
            </div>

            <div className="project-section">
              <h2>Rimgate</h2>
              <p>
                My own little Watergate, except the conspiracy was six rims and my
                camera angle. The big breakthrough had nothing to do with machine
                learning and everything to do with geometry. The camera spends
                most of the 90 minutes glued to two rims. The other four rims only
                get caught when they happen to drift into the background or
                foreground. What if I built a map of where the main rims live, and
                auto-flagged any candidate whose rim sits far from them?
              </p>

              <Clip
                src="debug-rim-gate-suppress.mp4"
                caption="Rimgate suppresses a candidate whose rim sits far from the main two"
              />

              <p>
                Mapping the main rims resulted in removing 58 candidates (a 15.6%
                reduction in false positives). Good progress, but I couldn't yet
                tell how many of those 58 were actual side rims. To assess this
                gap, I needed a ground truth that was aware of more than just
                makes. In the local website, I added the ability to tag candidates
                as "wrong rim". After reviewing a few examples, I realized I needed
                more labels, and added "not a shot", "exclude" (for noise), and
                "dup make" when a make had multiple candidates. My local website
                was becoming more nuanced — here's what it grew into:
              </p>

              <div className="post-media">
                <figure>
                  <img
                    src={`${B}/attachments/swish-web-ui-1.png`}
                    alt="The Swish review site's games list, showing candidates, makes, and recall per session"
                    loading="lazy"
                  />
                  <figcaption>The games list — candidates, makes, and recall per session</figcaption>
                </figure>
                <figure>
                  <img
                    src={`${B}/attachments/swish-web-ui-2.png`}
                    alt="Reviewing a single candidate, with make, miss, wrong-rim, not-a-shot, exclude, and dup-make labels"
                    loading="lazy"
                  />
                  <figcaption>Reviewing a candidate — with the labels I added along the way</figcaption>
                </figure>
              </div>

              <p>
                Upon closer inspection, few of the 58 were actually side-rim shots
                — only 10. The rest were spurious rim detections: "junk rims",
                objects whose color or shape fooled the model into seeing a rim.
              </p>

              <Clip
                src="debug-junk-rim-2.mp4"
                caption="A “junk rim” — an object mistaken for a rim"
              />

              <p>
                While the filter caught only 10 of the 63 side-rim shots — about 1
                in 6 of what it was built for — it solved a second problem I was
                unaware of: junk rims.
              </p>
              <p>
                That left 390 candidates hiding the same 76 real makes. Not bad,
                but I wanted better.
              </p>
            </div>

            <div className="project-section">
              <h2>Recall-safe Queue</h2>
              <p>
                In my first post, I described some of the signals I used to detect
                a made basket — the ball's trajectory before and after a make,
                whether it vanished during a swish. By the time I finished, I had
                24 signals to train my model. Most were about the ball's flight and
                the rim: seven captured what the ball does after it reaches the rim
                (does it drop through and stay, or bounce back up?), and 12
                captured the approach and position on the way in.
              </p>
              <p>
                In addition to tracking the ball and the rim, I wanted the model to
                watch the players. If it could learn that a make tends to empty the
                paint, while a miss pulls bodies toward the rim for a rebound, it
                could add additional signals. I was already using the YOLO model
                for rim detection, and that model has a built-in "person" class.
                Turning that on allowed me to test the model with and without
                player signals. Five of them earned a spot in the final model.
              </p>
              <p>Here's how much the final model leans on each of the 24 signals:</p>

              <Chart
                src="makemiss-importance.svg"
                alt="Bar chart of feature importance across the 24 signals; the post-rim drop-or-bounce signals dominate"
              />

              <p>
                The strongest signal, <code>peak_above_after</code>, is basically
                "how high did the ball come back up after a shot?" A make will drop
                through the basket and stay low, while a miss bounces back up. The{" "}
                <code>converged</code> signal answers my player-tracking question
                from earlier — did bodies crash toward the rim, or clear out? You
                can read about each signal in{" "}
                <a href="#appendix">the appendix</a>.
              </p>
              <p>
                These signals appear ranked, but they don't work in isolation.
                Instead they work together. The model starts with one question, and
                then depending on the answer, asks another question, until it has
                determined it is a make or miss. This creates a decision tree.
              </p>

              <Chart
                src="decision-tree.svg"
                alt="A single decision tree: a flowchart of yes/no questions about the signals, ending in make or miss"
              />

              <p>
                Any individual tree can be wrong about a specific candidate. So
                instead of one tree, I had Claude build a forest of 300 trees. Why
                300? There is no magic number, and too many trees result in
                diminishing returns. What makes the 300 trees differ is a dose of
                randomness. At each fork, the model grabs four random signals and
                picks the one that best sorts makes from misses. For example, if
                "how long did the ball linger?" leaves both sides indistinguishable,
                but "did the ball end up far from the rim?" pushes nearly all the
                misses to one side, the second question wins.
              </p>
              <p>
                The model then aggregates the results of the forest of 300 trees.
                If one candidate is a make in 200 trees, then it has a confidence
                score of 0.66. Below is the lowest confidence make squeaking by at
                0.163 — remember that one — and the highest confidence make at 0.88.
              </p>

              <div className="post-clips">
                <figure>
                  <video controls playsInline muted preload="metadata" src={`${B}/clips/debug-make-lowest.mp4#t=0.1`} />
                  <figcaption>Lowest-confidence make (0.163)</figcaption>
                </figure>
                <figure>
                  <video controls playsInline muted preload="metadata" src={`${B}/clips/debug-make-highest.mp4#t=0.1`} />
                  <figcaption>Highest-confidence make (0.88)</figcaption>
                </figure>
              </div>

              <p>
                I draw a cutoff line just under the weakest make — that 0.163 from
                a moment ago — so hiding everything below it never buries a basket.
                In the pipeline, this removes 63 more candidates (not counting 38
                that Rimgate already removed), which I can skip in future reviews —
                a recall-safe queue. Labeling new footage will allow for
                recalibration, and I should continue to create ground truths on
                occasion to keep the model honest. My sample size is still very
                small and only time will tell. I could explore moving the line up
                to the second- or third-weakest make at the cost of hiding a made
                shot or two. After labeling all 448 candidates, including
                duplicates and non-shots, I had 312 with a make-or-miss verdict.
                Below is a chart of those candidates from our 90 minutes, scored:
              </p>

              <Chart
                src="recall-safe-cutoff.svg"
                alt="Every shot at our rim scored 0 to 1, with the deployed cutoff sitting just under the weakest make"
              />

              <p>
                The recall-safe queue filter can reduce the candidates from 390 to
                327. All the footage I watched to build a ground truth paid off.
                Those labels will allow future sessions to skip candidates below
                the cutoff line. Another big improvement, but I wanted better still.
              </p>
            </div>

            <div className="project-section">
              <h2>Between Games</h2>
              <p>
                With only 90 minutes of gym time, we try to play games quickly and
                reduce downtime. Still though, players grab a ball and start
                chucking up shots between games to get some repetition in. While
                reviewing candidates, I saw a lot of shots were from this
                between-game activity. Our camera records non-stop, and it is
                impractical to stop and start the camera between each of our games.
                How could I teach my model to remove these shots?
              </p>
              <p>
                First thing I noticed was the quantity of shots. A player takes a
                practice shot, makes it, asks for their change back, then shoots
                again. Add in that multiple players are shooting at once, and
                there's a burst of shots in a short period of time.
              </p>

              <Clip
                src="debug-between-games-3.mp4"
                caption="A burst of between-game practice shots"
              />

              <p>
                Second thing I noticed was that a lot of players stand around. They
                are not moving to play defense, grab a rebound, or get open for a
                pass.
              </p>

              <Clip
                src="debug-between-players.mp4"
                caption="Players standing around between games"
              />

              <p>
                The <code>converged</code> signal — built to spot bodies crashing
                the rim or clearing out — came in handy: it also knows when
                everyone is doing neither.
              </p>
              <p>
                These two observations became one rule. My model measured how many
                candidates landed in a short window. A real game can produce a quick
                burst too — a miss, a teammate's putback. It also measured whether
                players stay put. In a real game, a make sends the offense back on
                defense, and on a miss, bodies crash the board. Adding the stillness
                check allowed this rule to remove zero instead of one actual make.
              </p>
              <p>
                Running this rule against the session I'd already reviewed, it would
                have removed 18 candidates with no labeling effort on my end — 16
                real between-game shots plus 2 misses it swept up — reducing the
                pile from 327 to 309. That's 16 of the 42 between-game shots that
                reached the filter (I labeled 56 between-game shots by hand; the
                earlier filters had already removed 14), a 38% recall. I am leaving
                this rule as a hint, and will verify in future sessions. Maybe
                future models will improve the recall accuracy. A smaller win, but
                another reduction in the review pile.
              </p>
            </div>

            <div className="project-section">
              <h2>Side-hoop Model</h2>
              <p>
                When writing about Rimgate for this post, I became curious if we
                could improve upon the geometry map we created. After all, Rimgate
                only caught 10 of the 63 side-rim shots. Besides differing in
                location, there was another big difference — their appearance. Each
                rim appeared at a different angle and had a different backdrop. I
                had Claude build a model to classify each rim by how it looks as
                opposed to where it is.
              </p>

              <Chart
                src="side-vs-main-rim.svg"
                alt="Same gym: the rim we play on faces the camera, while a side rim is turned edge-on to the wall"
              />

              <p>
                The model cropped a small image containing each rim and reduced it
                to a color signature: a hue histogram of the background. It then
                pooled over several frames, running a second, smaller forest
                classifier to determine whether it was one of the side or main
                rims. Note that attempts to add the rim's shape and size didn't help
                — the background color did all the work.
              </p>
              <p>
                To train this model, I needed another ground truth. I built a
                labeler that shows each cropped rim next to the video segment it
                came from, with a box outlining which rim the detector had flagged —
                there are often several in frame. The video's border flashes at the
                exact moment the crop was captured. This gave the model 1,269
                training examples — 821 rims I labeled by hand, plus 448 candidates
                it labeled itself from my earlier make/miss tags.
              </p>

              <Clip
                src="rim-labeling.mp4"
                caption="The rim labeler: each crop shown beside the clip it came from"
              />

              <p>
                The model was able to identify 115 candidates — 52 beyond the 63 I
                tagged as wrong-rim. Most of these additional candidates were passes
                and noise around the side rims, but 11 were real misses at the main
                rims. While all 115 are non-makes, costing us zero baskets, this is
                still something to watch going forward. Of the 115 candidates, 58 of
                them were uncaught by the previous filters, reducing the candidate
                pool to 251.
              </p>
            </div>

            <div className="project-section">
              <h2>The Review Pile</h2>
              <p>
                My model gave me 448 candidates to review to find 76 made baskets.
                Applying four new filters — Rimgate, Recall-safe Queue, Between
                Games, and Side-hoop Model — reduced the number of candidates to
                251. A 44% reduction. This was accomplished without removing any of
                the 76 made baskets.
              </p>

              <Chart
                src="candidate-funnel.svg"
                alt="Funnel from 448 raw candidates to a 251-candidate review pile as each of the four filters is applied in turn"
              />

              <p>
                Each filter performed differently and there is overlap between all
                of the filters. Below is a chart that shows each filter on its own,
                ignoring what the earlier filters had already caught.
              </p>

              <Chart
                src="filter-unique-overlap.svg"
                alt="Each filter measured alone, showing how much it catches uniquely versus what another filter would also catch"
              />

              <p>
                I set out to write this post to understand what exactly I was
                building with Claude. Along the way, I built the side-hoop model
                after the Rimgate section exposed how little the geometry map
                caught, found discrepancies in my side-rim and between-games
                evaluations, and realized the recall-safe cutoff was using the wrong
                baseline — and recalibrated it from 0.084 to 0.163. Why it was wrong
                is a story for another post. This post was supposed to document the
                system; instead it debugged and improved it.
              </p>
            </div>

            <div className="project-section" id="appendix">
              <h2>Appendix: The 24 Signals</h2>
              <p>
                Importance is each signal's share of the model's total splitting
                power (the 24 sum to 1.0).
              </p>

              <div className="signals-table-wrap">
                <table className="signals-table">
                  <thead>
                    <tr>
                      <th>Signal</th>
                      <th>Group</th>
                      <th>What it measures</th>
                      <th className="num">Importance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {signals.map(([name, group, measures, importance]) => (
                      <tr key={name}>
                        <td>
                          <code>{name}</code>
                        </td>
                        <td>{group}</td>
                        <td>{measures}</td>
                        <td className="num">{importance}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IgnoreEverythingElse;
