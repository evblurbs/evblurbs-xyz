import { Link } from "react-router-dom";
import "./Page.css";
import "./ProjectDetail.css";

const TenYC = () => {
  return (
    <div className="page">
      <div className="page-content">
        <div className="project-detail">
          <div className="project-header">
            <Link to="/projects" className="back-link">
              ← Back to Projects
            </Link>
            <h1 className="project-title">10YC</h1>
            <p className="project-tagline">
              A mobile native app that allows users to discover and index meals
              in 10YC under $10.
            </p>
          </div>

          <div className="project-content">
            <div className="project-section">
              <h2>What is 10YC?</h2>
              <p>
                Some of the best food in New York City comes from
                hole-in-the-wall spots. And while much of the city is expensive,
                everyone has their go-to cheap eats. What started as a shared
                Google Maps list among friends eventually grew into a bigger
                idea: a React Native app where users can add and discover
                budget-friendly restaurants in a more interactive way than
                static maps.
              </p>
              <p>
                I used this project as an experiment in "vibe coding,"
                restricting myself to prompting through Cursor instead of
                writing code directly. It was frustrating at times, but also
                impressive to see how far AI-assisted development can go. I also
                tested AI agents for data scraping, building a moderation
                pipeline so the app wouldn't start empty. With GPT-5, I was able
                to enrich scraped data with details like food descriptions,
                categories, cuisines, and even a confidence score for price
                accuracy. Restaurants added this way are visually marked as
                unverified.
              </p>
              <p>
                The app is functional today, and I'm collaborating with a
                designer friend with plans to release it publicly in October
                2025.
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

              <h3>Mobile Application (10YC-Native)</h3>
              <p>
                The mobile app is built using Expo React Native with TypeScript,
                providing a robust cross-platform solution for iOS and Android.
                The architecture emphasizes performance and user experience:
              </p>
              <ul>
                <li>
                  <strong>Core Technologies:</strong> React Native 0.79.5 with
                  Expo SDK 53, TypeScript, React Navigation 7, React Context API
                </li>
                <li>
                  <strong>Key Features:</strong> Location-based discovery, photo
                  uploads with AWS S3, real-time updates, performance
                  optimizations
                </li>
                <li>
                  <strong>Deployment:</strong> EAS for building and distributing
                  to app stores, TestFlight for iOS beta testing, over-the-air
                  updates
                </li>
              </ul>

              <h3>Backend API (10YC-API)</h3>
              <p>
                The backend is a Node.js/Express API deployed on Vercel as
                serverless functions, providing a scalable and cost-effective
                solution:
              </p>
              <ul>
                <li>
                  <strong>Core Technologies:</strong> Vercel Functions, MongoDB
                  Atlas, JWT authentication, AWS S3, OpenAI API
                </li>
                <li>
                  <strong>Database Architecture:</strong> Optimized with
                  geospatial indexes, compound indexes, and background indexes
                </li>
                <li>
                  <strong>Key Collections:</strong> Users, Restaurants, Meals,
                  Reviews with multi-dimensional ratings
                </li>
                <li>
                  <strong>API Features:</strong> RESTful endpoints, geospatial
                  queries, AI-powered moderation, OpenAPI documentation
                </li>
              </ul>

              <h3>Web Application (10yc-web)</h3>
              <p>
                The web presence is built with Next.js 15 and serves as both a
                landing page and administrative interface:
              </p>
              <ul>
                <li>
                  <strong>Core Technologies:</strong> Next.js 15 with React 19,
                  TypeScript, Tailwind CSS, Redux Toolkit
                </li>
                <li>
                  <strong>Features:</strong> Responsive landing page,
                  authentication system, moderation interface
                </li>
              </ul>
            </div>

            <div className="project-section">
              <h2>Key Features</h2>

              <h3>Meal-Centric Design</h3>
              <p>
                Instead of rating entire restaurants, users rate individual
                meals. This approach provides more granular and useful
                information for budget-conscious diners, allowing them to find
                specific dishes that offer great value.
              </p>

              <h3>Multi-Dimensional Rating System</h3>
              <p>
                Reviews include four distinct ratings: overall experience, taste
                quality, value for money, and portion size. This comprehensive
                rating system helps users make informed decisions based on their
                specific priorities.
              </p>

              <h3>Location-First Discovery</h3>
              <p>
                The app prioritizes location-based discovery with real-time
                location services, geospatial database queries, map-based
                restaurant exploration, and distance-based filtering.
              </p>

              <h3>Performance-First Mobile Experience</h3>
              <p>
                The mobile app includes numerous performance optimizations:
                session-based caching with 30-minute expiration, optimized
                FlatList rendering, image caching with unique keys, smooth
                navigation transitions, and proper memory management.
              </p>

              <h3>AI-Powered Content Moderation</h3>
              <p>
                The backend includes an intelligent moderation system that
                processes scraped restaurant data using OpenAI, enhances data
                with geocoding and cuisine detection, validates pricing
                information, and provides a manual review interface for
                moderators.
              </p>
            </div>

            <div className="project-section">
              <h2>Architecture & Development</h2>

              <h3>Development Approach</h3>
              <p>
                The project started as a monorepo but was strategically split
                into four separate repositories for better maintainability and
                deployment flexibility: 10YC-Native (mobile), 10YC-API
                (backend), 10yc-web (web), and 10YC-Shared (utilities).
              </p>

              <h3>Deployment Strategy</h3>
              <p>
                Multi-environment architecture with gamma (testing) and
                production environments, channel-based deployments, and a
                comprehensive CI/CD pipeline using GitHub Actions, Vercel, and
                EAS with over-the-air updates for rapid iteration.
              </p>

              <h3>Technical Challenges & Solutions</h3>
              <ul>
                <li>
                  <strong>Location Services:</strong> Comprehensive location
                  permission system with graceful fallbacks using Expo Location
                  and MongoDB geospatial queries
                </li>
                <li>
                  <strong>Image Upload:</strong> AWS S3 integration with
                  presigned URLs for secure, direct uploads
                </li>
                <li>
                  <strong>Real-time Sync:</strong> Session-based caching with
                  intelligent invalidation and React Context state management
                </li>
                <li>
                  <strong>Cross-Platform:</strong> Expo's unified API with
                  platform-specific optimizations where necessary
                </li>
              </ul>
            </div>

            <div className="project-section">
              <h2>Future Enhancements</h2>
              <p>
                The architecture is designed to support future enhancements
                including social features (following users, commenting on
                reviews), recommendation engine (AI-powered meal suggestions),
                gamification (achievement badges and user rankings), restaurant
                partnerships, and advanced analytics for user behavior insights
                and trend analysis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenYC;
