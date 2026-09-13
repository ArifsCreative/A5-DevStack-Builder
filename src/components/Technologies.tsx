import ReactIcon from "../assets/icons/React.svg";
import VueIcon from "../assets/icons/Vue.js.svg";
import SvelteIcon from "../assets/icons/Svelte.svg";
import NextIcon from "../assets/icons/Next.js.svg";
import NodeIcon from "../assets/icons/Node.js.svg";
import PostgreSQLIcon from "../assets/icons/PostgreSQL.svg";
import RedisIcon from "../assets/icons/Redis.svg";
import JavaScriptIcon from "../assets/icons/JavaScript.svg";
import TypeScriptIcon from "../assets/icons/TypeScript.svg";
import JavaIcon from "../assets/icons/Java.svg";
import TailwindIcon from "../assets/icons/Tailwind CSS.svg";
import DockerIcon from "../assets/icons/Docker.svg";

type Technology = {
  name: string;
  description: string;
  category: string;
  level: string;
  rating: number;
  badge?: string;
  icon?: string;
};

const technologies: Technology[] = [
  {
    name: "React",
    description:
      "A declarative, component-based JavaScript library for building modern user interfaces.",
    category: "Frontend",
    level: "Beginner-Friendly",
    rating: 4.9,
    badge: "Popular",
    icon: ReactIcon,
  },

  {
    name: "Vue.js",
    description:
      "An approachable, performant, and versatile framework for building web user interfaces.",
    category: "Frontend",
    level: "Beginner-Friendly",
    rating: 4.8,
    badge: "Versatile",
    icon: VueIcon,
  },

  {
    name: "Svelte",
    description:
      "Cybernetically enhanced web apps with compile-time reactivity and zero virtual DOM overhead.",
    category: "Frontend",
    level: "Intermediate",
    rating: 4.8,
    badge: "Fast",
    icon: SvelteIcon,
  },

  {
    name: "Next.js",
    description:
      "The React framework for full-stack web applications with hybrid static and server rendering.",
    category: "Frontend",
    level: "Intermediate",
    rating: 4.9,
    icon: NextIcon,
  },

  {
    name: "Node.js",
    description:
      "An asynchronous event-driven JavaScript runtime built on Chrome's V8 engine.",
    category: "Backend",
    level: "Intermediate",
    rating: 4.8,
    badge: "Standard",
    icon: NodeIcon,
  },

  {
    name: "PostgreSQL",
    description:
      "A powerful, open-source object-relational database system with proven reliability.",
    category: "Database",
    level: "Intermediate",
    rating: 4.9,
    badge: "Top SQL",
    icon: PostgreSQLIcon,
  },

  {
    name: "Redis",
    description:
      "In-memory data structure store used as a high-speed database, cache, and message broker.",
    category: "Database",
    level: "Intermediate",
    rating: 4.8,
    badge: "Cache",
    icon: RedisIcon,
  },

  {
    name: "JavaScript",
    description:
      "The versatile, ubiquitous scripting language powering dynamic behavior across the web.",
    category: "Language",
    level: "Beginner-Friendly",
    rating: 4.9,
    badge: "Ubiquitous",
    icon: JavaScriptIcon,
  },

  {
    name: "TypeScript",
    description:
      "A strongly typed programming language that builds on JavaScript for robust tooling.",
    category: "Language",
    level: "Intermediate",
    rating: 4.9,
    badge: "Essential",
    icon: TypeScriptIcon,
  },

  {
    name: "Java",
    description:
      "A secure, object-oriented programming language designed for portability and scale.",
    category: "Language",
    level: "Intermediate",
    rating: 4.6,
    badge: "Robust",
    icon: JavaIcon,
  },

  {
    name: "Tailwind CSS",
    description:
      "A utility-first CSS framework packed with classes that can be composed to build custom UI.",
    category: "Styling",
    level: "Beginner-Friendly",
    rating: 4.9,
    badge: "Modern",
    icon: TailwindIcon,
  },

  {
    name: "Docker",
    description:
      "A platform designed to build, share, and run containerized applications reliably.",
    category: "DevOps",
    level: "Intermediate",
    rating: 4.9,
    badge: "Containers",
    icon: DockerIcon,
  },
];

const Technologies = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Explore the <span className="text-pink-500">Technologies</span>
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Technology Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((technology) => {
            return (
              <div
                key={technology.name}
                className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {technology.icon && (
                      <img
                        src={technology.icon}
                        alt={technology.name}
                        className="w-12 h-12 object-contain"
                      />
                    )}

                    <h3 className="text-lg font-bold text-gray-800">
                      {technology.name}
                    </h3>
                  </div>

                  {technology.badge && (
                    <span className="badge badge-outline badge-secondary text-xs">
                      {technology.badge}
                    </span>
                  )}
                </div>

                <p className="text-sm leading-6 text-gray-500 mt-4">
                  {technology.description}
                </p>

                <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">
                    {technology.category}
                  </span>

                  <span className="text-sm font-medium text-gray-700">
                    ⭐ {technology.rating}
                  </span>
                </div>

                <button className="btn btn-neutral btn-sm w-full mt-4">
                  Add to Stack
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
