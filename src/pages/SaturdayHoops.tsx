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
              A meetup group and web app that allows users to sign up for
              pick-up basketball games and view highlights from past games.
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
                built a site that handled RSVPs and payments, replacing my old
                spreadsheet-and-Venmo system.
              </p>
              <p>
                Over time, I added another layer: game highlights. At first, I
                edited the footage myself, but as demand grew and I had less
                time, I explored using AI. I built a pipeline that detects made
                baskets, then automatically cuts clips a few seconds before and
                after, allowing me to generate highlight reels quickly and
                consistently. See this{" "}
                <a
                  href="https://youtu.be/kvA9i5kTgjE?si=3zg1V-6lkXGDxQ2X"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  example
                </a>
                .
              </p>
              <p>
                The project is currently on pause for the summer — with players
                traveling and gyms hit-or-miss on air conditioning — but we’re
                planning to restart games and highlights this fall.
              </p>
              <p>
                <b>
                  Below is the AI's own analysis of my code repositories for
                  this project.
                </b>
              </p>
            </div>

            <div className="project-section">
              <h2>Technology Stack</h2>

              <h3>Frontend Application</h3>
              <p>
                The web application is built using Next.js 14 with React 18,
                providing a modern, server-side rendered experience optimized
                for performance and SEO:
              </p>
              <ul>
                <li>
                  <strong>Core Technologies:</strong> Next.js 14.1.4 with App
                  Router, React 18.2.0, TypeScript 5.5.0, Tailwind CSS 3.4.3
                  with DaisyUI components
                </li>
                <li>
                  <strong>Key Features:</strong> Responsive design with
                  Knicks-themed color scheme, real-time game updates, adaptive
                  video player with quality control
                </li>
                <li>
                  <strong>UI Components:</strong> Custom video player with
                  tagging overlay, game registration system, user profiles with
                  highlight galleries
                </li>
                <li>
                  <strong>State Management:</strong> SWR for data fetching with
                  intelligent caching, React Context for client-side state
                </li>
              </ul>

              <h3>Backend API & Database</h3>
              <p>
                The backend leverages Next.js API routes with MongoDB for a
                serverless, scalable architecture:
              </p>
              <ul>
                <li>
                  <strong>Core Technologies:</strong> Next.js API routes,
                  MongoDB Atlas with Mongoose ODM, NextAuth.js for
                  authentication
                </li>
                <li>
                  <strong>Database Architecture:</strong> Optimized schemas for
                  Games, Users, and Highlights with proper indexing for
                  performance
                </li>
                <li>
                  <strong>Key Collections:</strong> Games (date, signups,
                  maxPlayers), Users (authentication, Stripe integration),
                  Highlights (video metadata, player tagging)
                </li>
                <li>
                  <strong>API Features:</strong> RESTful endpoints, real-time
                  data fetching, Stripe webhook integration for payments
                </li>
              </ul>

              <h3>Video Processing & Storage</h3>
              <p>
                The platform includes a sophisticated video management system
                built on AWS infrastructure:
              </p>
              <ul>
                <li>
                  <strong>Core Technologies:</strong> AWS S3 for video storage,
                  CloudFront CDN for global delivery, custom video processing
                  pipeline
                </li>
                <li>
                  <strong>Video Features:</strong> Multi-quality adaptive
                  streaming (lg/md/sm), automatic player tagging system,
                  highlight compilation
                </li>
                <li>
                  <strong>Storage Architecture:</strong> Organized by date
                  folders with quality variants, metadata stored in MongoDB for
                  fast queries
                </li>
                <li>
                  <strong>Performance:</strong> Preloading system, intelligent
                  quality adjustment based on playback performance, optimized
                  for mobile viewing
                </li>
              </ul>

              <h3>Authentication & Payments</h3>
              <p>
                The platform integrates multiple authentication methods with
                Stripe for seamless user experience:
              </p>
              <ul>
                <li>
                  <strong>Core Technologies:</strong> NextAuth.js with Google
                  OAuth and email providers, Stripe for payment processing
                </li>
                <li>
                  <strong>Authentication:</strong> Google OAuth integration,
                  email magic links, MongoDB adapter for user persistence
                </li>
                <li>
                  <strong>Payment System:</strong> Stripe Checkout for game
                  registration, webhook integration for access management,
                  customer portal for subscription management
                </li>
                <li>
                  <strong>Security:</strong> JWT-based sessions, secure API
                  routes with user validation, admin-only game creation
                </li>
              </ul>
            </div>

            <div className="project-section">
              <h2>Key Features</h2>

              <h3>Game Management System</h3>
              <p>
                The platform provides comprehensive game organization with
                real-time registration tracking, player capacity management, and
                automated scheduling. Users can view upcoming games, register
                for sessions, and see who else is playing.
              </p>

              <h3>Intelligent Video Highlights</h3>
              <p>
                The most innovative feature is the automatic video highlight
                system that captures game footage and allows players to tag
                themselves in their best moments. The system includes adaptive
                quality control, automatic preloading, and a sophisticated
                tagging overlay that appears during video playback.
              </p>

              <h3>Player-Centric Experience</h3>
              <p>
                Instead of generic game footage, each player gets personalized
                highlight reels based on their tagged moments. The system tracks
                individual performance clips, creates user-specific highlight
                collections, and provides easy sharing capabilities.
              </p>

              <h3>Community Building</h3>
              <p>
                The platform fosters community through user profiles, game
                attendance tracking, and social features. Players can see their
                game history, view other players' highlights, and maintain
                connections beyond the court.
              </p>
            </div>

            <div className="project-section">
              <h2>Architecture & Development</h2>

              <h3>Development Approach</h3>
              <p>
                Built on the ShipFast template but heavily customized for
                basketball community needs, the platform emphasizes performance,
                user experience, and community engagement. The codebase
                demonstrates modern React patterns with TypeScript for type
                safety.
              </p>

              <h3>Deployment Strategy</h3>
              <p>
                Deployed on Vercel with MongoDB Atlas for database hosting, AWS
                S3 for video storage, and CloudFront for global content
                delivery. The serverless architecture ensures scalability and
                cost-effectiveness.
              </p>

              <h3>Technical Challenges & Solutions</h3>
              <ul>
                <li>
                  <strong>Video Performance:</strong> Implemented adaptive
                  quality streaming with automatic downgrade/upgrade based on
                  playback performance, preloading system for seamless
                  transitions
                </li>
                <li>
                  <strong>Player Tagging:</strong> Created an overlay system
                  that appears during video playback, allowing users to tag
                  themselves in highlights with a 10-second timeout
                </li>
                <li>
                  <strong>Real-time Updates:</strong> SWR integration with
                  intelligent caching and revalidation for live game updates and
                  registration changes
                </li>
                <li>
                  <strong>Mobile Optimization:</strong> Responsive design with
                  touch-friendly controls, optimized video player for mobile
                  devices
                </li>
              </ul>
            </div>

            <div className="project-section">
              <h2>Future Enhancements</h2>
              <p>
                The architecture supports planned enhancements including
                advanced analytics for player performance tracking, social
                features for following favorite players, tournament organization
                tools, and integration with wearable devices for performance
                metrics. The modular design allows for easy expansion of video
                features, community tools, and game management capabilities.
              </p>
              <p>
                The platform represents a successful fusion of sports community
                management and modern web technology, creating a unique solution
                that goes beyond simple game organization to build lasting
                digital memories of athletic achievement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaturdayHoops;
