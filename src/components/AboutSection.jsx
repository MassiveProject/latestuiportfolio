import { Briefcase, Code, Paintbrush, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              UI/UX Designer & Front-end Developer
            </h3>
            <p className="text-muted-foreground">
              With over 3 years of experience in UI/UX design, I specialize in
              creating intuitive, accessible, and visually engaging digital
              products that align with user needs and business goals.
            </p>
            <p className="text-muted-foreground">
              I'm passionate about designing meaningful user experiences that
              solve real problems with clarity and impact. I'm always exploring
              new design trends, tools, and methods to stay at the forefront of
              the ever-evolving digital product landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get in touch
              </a>

              <a
                href="https://drive.google.com/file/d/1RJ7NkU7yGPcJYBnXMXqJ3A1_o4AoIkv0/view?usp=sharing"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                {" "}
                Download CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-card gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Paintbrush className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> UI/UX Designer</h4>
                  <p className="text-muted-foreground">
                    Building intuitive, high-impact interfaces that move users
                    and businesses forward.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-card gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    {" "}
                    Front-end Developer
                  </h4>
                  <p className="text-muted-foreground">
                    Creating responsives website with modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-card gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Project Management</h4>
                  <p className="text-muted-foreground">
                    Leading projects from conception to completion with design
                    thinking methologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
