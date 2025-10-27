const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
            About Me
          </h2>
          
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-xl hover-lift border border-border">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              I'm a motivated <span className="text-primary font-semibold">full-stack developer</span> passionate 
              about designing, developing, and deploying scalable web applications. I love building projects 
              with <span className="text-secondary font-semibold">Flask</span>, 
              <span className="text-secondary font-semibold"> React</span>, 
              <span className="text-secondary font-semibold"> Django</span>, and 
              <span className="text-secondary font-semibold"> AWS</span>. My goal is to create 
              high-performance, user-friendly, and reliable software solutions that make a real impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
