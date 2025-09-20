import "./Page.css";
import "./Bookshelf.css";

const Bookshelf = () => {
  const books = [
    {
      title:
        "Harlem: The Four Hundred Year History from Dutch Village to Capital of Black America",
      authors: "Jonathan Gill",
      description:
        "A sweeping, deeply researched history tracing Harlem's evolution from its early days as a Dutch agricultural settlement, through colonial and revolutionary times, to its central role in the 20th-century African-American cultural, artistic, and political life. The book also covers Harlem's challenges and transformations in later decades, including decline, renewal, and gentrification.",
      amazonLink:
        "https://www.amazon.com/Harlem-Hundred-History-Village-Capital/dp/0802145744",
    },
    {
      title: "The Courage to Be Disliked",
      authors: "Ichiro Kishimi & Fumitake Koga",
      description:
        'A personal-development book framed as a dialogue between a "youth" and a "philosopher," exploring Alfred Adler\'s ideas: how to stop letting past traumas define you, embrace self-acceptance, and free yourself from the need for approval.',
      amazonLink:
        "https://www.amazon.com/Courage-Be-Disliked-Phenomenon-Happiness/dp/1501197274",
    },
    {
      title: "How to Be Perfect: The Correct Answer to Every Moral Question",
      authors: "Michael Schur",
      description:
        "A witty, philosophical exploration of moral philosophy. Schur uses humor and insight to explain various ethical theories (utilitarianism, deontology, virtue ethics etc.) and show how they apply in everyday life.",
      amazonLink:
        "https://www.amazon.com/How-Be-Perfect-Correct-Question/dp/1982159316",
    },
    {
      title: "Your Table Is Ready: Tales of a New York City Maître D'",
      authors: "Michael Cecchi-Azzolina",
      description:
        "A memoir by a long-time maître d' tracing decades in NYC's high-end restaurant world. He shares behind-the-scenes stories (the glamour, the chaos, the economics, the people) from iconic venues and what it takes to manage service, style, and survival in hospitality.",
      amazonLink:
        "https://www.amazon.com/Your-Table-Ready-Tales-Ma%C3%AEtre/dp/1250281989",
      isFavorite: true,
    },
    {
      title:
        "The Psychology of Money: Timeless Lessons on Wealth, Greed, and Happiness",
      authors: "Morgan Housel",
      description:
        "A collection of essays and stories about how people behave toward money; this book isn't about getting rich fast, but about understanding risk, luck, compounding, and how our behavior and mindset matter in financial decisions.",
      amazonLink:
        "https://www.amazon.com/Psychology-Money-Timeless-lessons-happiness/dp/B0D67Y8PGX",
    },
    {
      title: "Nudge: Improving Decisions About Health, Wealth, and Happiness",
      authors: "Richard H. Thaler & Cass R. Sunstein",
      description:
        'This book introduces the idea of "choice architecture" — small design changes (nudges) that can significantly influence behavior without forcing choices. It shows how behavioral economics can help improve decisions in policy, business, personal finance, etc.',
      amazonLink:
        "https://www.amazon.com/Nudge-Improving-Decisions-About-Happiness/dp/030012223X",
    },
    {
      title: "The Simple Path to Wealth",
      authors: "JL Collins",
      description:
        "A guide to achieving financial independence through investing simply, wisely, and with minimal stress—focuses mostly on low-cost index funds, saving, avoiding debt, and letting compounding work over time. (Also a revised/expanded edition exists.)",
      amazonLink:
        "https://www.amazon.com/Simple-Path-Wealth-Financial-Independence/dp/1533667926",
    },
    {
      title:
        "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
      authors: "James Clear",
      description:
        "Offers practical strategies for habit formation: small changes, focusing on systems not goals, stacking habits, environment design, and how tiny improvements repeated over time lead to large outcomes.",
      amazonLink:
        "https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299",
      isFavorite: true,
    },
    {
      title:
        "The Mountain Is You: Transforming Self-Sabotage Into Self-Mastery",
      authors: "Brianna Wiest",
      description:
        "Addresses the internal patterns that cause self-sabotage (fear, limiting beliefs, conflicting personal needs), and guides you toward healing and self-awareness so you can move forward with intention and alignment.",
      amazonLink:
        "https://www.amazon.com/Mountain-You-Transforming-Self-Sabotage-Self-Mastery/dp/1949759229",
    },
    {
      title: "The Brief Wondrous Life of Oscar Wao",
      authors: "Junot Díaz",
      description:
        'A multi-generational novel about Oscar de León, an overweight Dominican-American "nerd" growing up in New Jersey, who dreams of being a fantasy-writer and finding love. But his family is haunted by a curse ("fukú") that stretches back through generations in the Dominican Republic. The story weaves together themes of identity, immigrant experience, colonial history, love, family, and what it means to belong.',
      amazonLink:
        "https://www.amazon.com/Brief-Wondrous-Life-Oscar-Wao/dp/1594483299",
      isFavorite: true,
    },
  ];

  return (
    <div className="page">
      <div className="page-content">
        <h1 className="page-title">Bookshelf</h1>
        <div className="page-body">
          <p>
            A partial collection of books I've read, am reading, or plan to
            read. Asterisks mark my favorite books.
          </p>
          <div className="books-list">
            {books.map((book, index) => (
              <div key={index} className="book-item">
                <div className="book-header">
                  <h3 className="book-title">
                    {book.title}
                    {book.isFavorite && (
                      <span className="favorite-asterisk"> *</span>
                    )}
                  </h3>
                  <div className="book-authors">by {book.authors}</div>
                </div>
                <p className="book-description">{book.description}</p>
                <a
                  href={book.amazonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="amazon-link"
                >
                  Amazon link
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookshelf;
