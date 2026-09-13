import { useState } from "react";

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
import StarIcon from "../assets/icons/Symbol.svg";

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
  const [stack, setStack] = useState<Technology[]>([]);
  const [toast, setToast] = useState<string | null>(null);

  const addToStack = (technology: Technology) => {
    const alreadyAdded = stack.some((item) => item.name === technology.name);

    if (!alreadyAdded) {
      setStack([...stack, technology]);

      setToast(`${technology.name} added to stack`);

      setTimeout(() => {
        setToast(null);
      }, 2500);
    }
  };

  const removeFromStack = (name: string) => {
    setStack(stack.filter((item) => item.name !== name));
  };

  const removeAll = () => {
    setStack([]);
  };

  return (
    <section className="py-20 md:py-24">
      <div className="container mx-auto px-8">
        {/* Heading */}

        <div className="mb-8 ml-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Explore the <span className="text-pink-500">Technologies</span>
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Main Layout */}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 ml-12">
          {/* Technology Cards */}

          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {technologies.map((technology) => (
              <div
                key={technology.name}
                className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition"
              >
                {/* Top Section */}

                <div className="relative">
                  {technology.badge && (
                    <span className="absolute top-0 right-0 px-2 py-1 text-[10px] rounded-full border border-pink-100 text-sky-500 font-bold">
                      {technology.badge}
                    </span>
                  )}

                  {technology.icon && (
                    <img
                      src={technology.icon}
                      alt={technology.name}
                      className="w-8 h-8 object-contain mb-4"
                    />
                  )}

                  <h3 className="text-base font-semibold text-gray-900">
                    {technology.name}
                  </h3>
                </div>

                <p className="text-sm leading-6 text-gray-500 mt-4">
                  {technology.description}
                </p>

                <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    <span className="px-2 py-1 text-xs rounded-md bg-gray-100 text-gray-600">
                      {technology.category}
                    </span>

                    <span className="text-xs text-gray-500">
                      {technology.level}
                    </span>
                  </div>

<div className="flex items-center gap-1">

  <img
    src={StarIcon}
    alt="rating"
    className="w-4 h-4"
  />

  <span className="text-sm font-medium text-gray-700">
    {technology.rating}
  </span>

</div>
                </div>

                <button
                  onClick={() => addToStack(technology)}
                  className={`w-full mt-4 py-2 rounded-md text-sm transition ${
                    stack.some((item) => item.name === technology.name)
                      ? "bg-pink-50 text-pink-500"
                      : "bg-gray-900 text-white"
                  }`}
                >
                  {stack.some((item) => item.name === technology.name)
                    ? "✓ Added to Stack"
                    : "Add to Stack"}
                </button>
              </div>
            ))}
          </div>

          {/* Your Stack */}

          <div className="lg:col-span-1">
            <div className="border border-gray-200 rounded-2xl p-5 bg-white shadow-sm">
              <h3 className="font-bold text-gray-900">Your Stack</h3>

              <p className="text-xs text-gray-400 mt-1">
                {stack.length > 0
                  ? `${stack.length} Technology Selected`
                  : "No technologies selected yet."}
              </p>

              {stack.length === 0 ? (
                <div className="mt-5 h-24 border border-dashed rounded-xl flex items-center justify-center">
                  <p className="text-sm text-gray-400">Your stack is empty.</p>
                </div>
              ) : (
                <div className="mt-5 space-y-3">
                  {stack.map((item) => (
                    <div
                      key={item.name}
                      className="border rounded-lg p-3 flex justify-between items-center"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={item.icon}
                          alt={item.name}
                          className="w-8 h-8"
                        />

                        <div>
                          <p className="text-sm font-semibold">{item.name}</p>

                          <p className="text-[10px] text-gray-400">
                            {item.category}
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() => removeFromStack(item.name)}
                        className="text-gray-400 text-xl"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {stack.length > 0 && (
                <button
                  onClick={removeAll}
                  className="w-full mt-6 border border-red-300 text-red-500 rounded-lg py-2 text-sm hover:bg-red-50"
                >
                  Remove All
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {toast && (
        <div className="fixed bottom-6 right-6 bg-white border border-green-200 shadow-lg rounded-xl px-5 py-3 flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center">
            ✓
          </div>

          <p className="text-sm font-medium text-gray-700">{toast}</p>
        </div>
      )}
    </section>
  );
};

export default Technologies;
