import { FaReact, FaNodeJs, FaJava, FaDocker } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiVuedotjs,
  SiSvelte,
  SiNextdotjs,
  SiPostgresql,
  SiRedis,
} from "react-icons/si";

type Technology = {
  name: string;
  description: string;
  category: string;
  level: string;
  rating: number;
  badge?: string;
  icon?: React.ElementType;
  color?: string;
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
    icon: FaReact,
    color: "text-blue-500",
  },

  {
    name: "Vue.js",
    description:
      "An approachable, performant, and versatile framework for building web user interfaces.",
    category: "Frontend",
    level: "Beginner-Friendly",
    rating: 4.8,
    badge: "Versatile",
    icon: SiVuedotjs,
    color: "text-green-500",
  },

  {
    name: "Svelte",
    description:
      "Cybernetically enhanced web apps with compile-time reactivity and zero virtual DOM overhead.",
    category: "Frontend",
    level: "Intermediate",
    rating: 4.8,
    badge: "Fast",
    icon: SiSvelte,
  },

  {
    name: "Next.js",
    description:
      "The React framework for full-stack web applications with hybrid static and server rendering.",
    category: "Frontend",
    level: "Intermediate",
    rating: 4.9,
    icon: SiNextdotjs,
  },

  {
    name: "Node.js",
    description:
      "An asynchronous event-driven JavaScript runtime built on Chrome's V8 engine.",
    category: "Backend",
    level: "Intermediate",
    rating: 4.8,
    badge: "Standard",
    icon: FaNodeJs,
  },

  {
    name: "PostgreSQL",
    description:
      "A powerful, open-source object-relational database system with proven reliability.",
    category: "Database",
    level: "Intermediate",
    rating: 4.9,
    badge: "Top SQL",
    icon: SiPostgresql,
  },

  {
    name: "Redis",
    description:
      "In-memory data structure store used as a high-speed database, cache, and message broker.",
    category: "Database",
    level: "Intermediate",
    rating: 4.8,
    badge: "Cache",
    icon: SiRedis,
  },

  {
    name: "JavaScript",
    description:
      "The versatile, ubiquitous scripting language powering dynamic behavior across the web.",
    category: "Language",
    level: "Beginner-Friendly",
    rating: 4.9,
    badge: "Ubiquitous",
    icon: SiJavascript,
  },

  {
    name: "TypeScript",
    description:
      "A strongly typed programming language that builds on JavaScript for robust tooling.",
    category: "Language",
    level: "Intermediate",
    rating: 4.9,
    badge: "Essential",
    icon: SiTypescript,
  },

  {
    name: "Java",
    description:
      "A secure, object-oriented programming language designed for portability and scale.",
    category: "Language",
    level: "Intermediate",
    rating: 4.6,
    badge: "Robust",
    icon: FaJava,
  },

  {
    name: "Tailwind CSS",
    description:
      "A utility-first CSS framework packed with classes that can be composed to build custom UI.",
    category: "Styling",
    level: "Beginner-Friendly",
    rating: 4.9,
    badge: "Modern",
    icon: SiTailwindcss,
  },

  {
    name: "Docker",
    description:
      "A platform designed to build, share, and run containerized applications reliably.",
    category: "DevOps",
    level: "Intermediate",
    rating: 4.9,
    badge: "Containers",
    icon: FaDocker,
  },
];

const Technologies = () => {
  return (
    <section className="py-28">
      <div className="container mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-10">
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
            const Icon = technology.icon;

            return (
              <div
                key={technology.name}
                className="border border-gray-200 rounded-xl p-6 bg-white"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {Icon && (
                      <Icon className={`text-4xl ${technology.color}`} />
                    )}

                    <h3 className="text-xl font-semibold text-gray-800">
                      {technology.name}
                    </h3>
                  </div>

                  {technology.badge && (
                    <span className="badge badge-secondary">
                      {technology.badge}
                    </span>
                  )}
                </div>

                <p className="text-sm text-gray-500 mt-3">
                  {technology.description}
                </p>

                <div className="flex justify-between items-center mt-5">
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
