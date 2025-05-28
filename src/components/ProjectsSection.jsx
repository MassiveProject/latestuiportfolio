import { ArrowRight, ExternalLink, Figma } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Amartha's Gold Investment",
    description: "Grow Your Wealth in Gold.",
    image: "/projects/project1.png",
    tags: ["Figma", "Gold Investment", "Mobile"],
    demoUrl:
      "https://www.figma.com/proto/giHztQNgedVOMqzK7EiAuI/Portfolio?node-id=1-42&t=QbMcyYvYamMWqwLo-0&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1",
  },
  {
    id: 2,
    title: "Yakult Lady Mobile App",
    description: "Simplify. Serve. Smile.",
    image: "/projects/project2.png",
    tags: ["Figma", "Yakult", "Mobile"],
    demoUrl:
      "https://www.figma.com/proto/giHztQNgedVOMqzK7EiAuI/Portfolio?node-id=1-3688&t=QbMcyYvYamMWqwLo-0&scaling=min-zoom&content-scaling=fixed&page-id=1%3A385",
  },
  {
    id: 3,
    title: "Kawandaya",
    description: "All-in-One HR Intelligence.",
    image: "/projects/project3.png",
    tags: ["Figma", "HRIS", "Website"],
    demoUrl:
      "https://www.figma.com/design/ZHHagAtWFGclhZXtwtz7iV/Kawandaya?node-id=339-2573&t=3eTKMUMD00NK4fbF-1",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Feature <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, perfomance, and user experience
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Figma size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://dribbble.com/Kreateeve_design"
          >
            {" "}
            Check My Dribbble <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
