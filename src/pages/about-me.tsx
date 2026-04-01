import './about-me.css';

const skills = [
  { category: 'Design', items: ['Figma', 'Photoshop', 'After Effects', 'Canva', 'WordPress'] },
  { category: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap', 'Tailwind'] },
  { category: 'Backend', items: ['PHP', 'Laravel', 'Python', 'Java'] },
  { category: 'Tools & Media', items: ['vMix', 'OBS Studio', 'Virtual DJ', 'Live Streaming'] },
];

export function AboutMe() {
  return (
    <section className="about">
      <div className="about__inner">

        <div className="about__header">
          <span className="about__label">WHO I AM</span>
          <h1 className="about__title">About <span className="about__title-outline">Me</span></h1>
        </div>

        <div className="about__body">
          <div className="about__bio-block">
            <p className="about__bio">
              I'm <strong>Rhose An Raganit</strong> — a design-first full-stack developer and digital creative
              based in Panabo City, Davao del Norte. Currently pursuing a BS in Information Technology at
              Davao del Norte State College.
            </p>
            <p className="about__bio">
              I build web experiences that are as polished as they are functional — handling everything from
              wireframes and UI design to front-end and back-end development. I also manage 2 active Facebook
              pages, overseeing content creation, graphic design, and audience engagement.
            </p>
            <p className="about__bio">
              My passion lies at the intersection of design and code — where a great idea becomes a
              beautiful, working product.
            </p>

            <div className="about__highlights">
              <div className="about__highlight">
                <span className="about__highlight-num">2+</span>
                <span className="about__highlight-label">Facebook Pages Managed</span>
              </div>
              <div className="about__highlight">
                <span className="about__highlight-num">4+</span>
                <span className="about__highlight-label">Years Creative Experience</span>
              </div>
              <div className="about__highlight">
                <span className="about__highlight-num">1st</span>
                <span className="about__highlight-label">Photo Manipulation, Bytefest</span>
              </div>
            </div>
          </div>

          <div className="about__skills-block">
            <h2 className="about__skills-title">Tech Stack & Tools</h2>
            <div className="about__skills-grid">
              {skills.map((group) => (
                <div key={group.category} className="about__skill-group">
                  <span className="about__skill-category">{group.category}</span>
                  <div className="about__skill-tags">
                    {group.items.map((item) => (
                      <span key={item} className="about__skill-tag">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
