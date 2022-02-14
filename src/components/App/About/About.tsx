import "./About.css";

function About() {
  return (
    <div className="wrapper">
      <div className="header">
        <h1>Frequently Asked Questions</h1>
      </div>
      <div className="faq">
        <div className="section">
          <h1>What is smell training?</h1>
          <p>
            Smell training engages an innate property of the brain known as
            <span>Neuroplasticity</span>: 'the ability of the brain to form and
            reorganize synaptic connections, especially in response to learning
            or experience or following injury.' -<i>Google Dictionary</i>.
          </p>
        </div>
        <div className="section">
          <h1>I'm ready to begin my training. What do I do?</h1>
          <p>
            In a training session, a set of four familiar smells (typically
            <span className="rose">Rose</span>,
            <span className="clove">Clove</span>,
            <span className="lemon">Lemon</span>, and
            <span className="eucalyptus">Eucalyptus</span>) are smelled, in
            turn, for a period of 20-30 seconds, whilst mindfully visualizing
            and remembering how each substance would have smelled prior to the
            smell loss.
          </p>
          <p>Repeat the training twice daily for better results.</p>
        </div>
        <div className="section">
          <h1>
            Over how long a period do I need to smell train in order to recover
            fully?
          </h1>
          <p>
            Recovery periods naturally differ from person to person, but
            research suggests that the average treatment would last for ~3
            months.
          </p>
          <p>
            Much depends on the underlying cause of your loss of smell and the
            severity thereof. Most people will become aware of positive changes
            within 3 months of starting smell training. Occasionally, it is
            possible that you may regain the smell of a desired scent, but it
            does not feel 'correct'. Do not be concerned -
            <span style={{ fontWeight: 300 }}>
              this is a positive sign that recovery is underway, and that you
              should continue your training as per usual.
            </span>
          </p>
        </div>
        <div className="section">
          <h1>
            I don't have the official Smell
            <span style={{ color: "#2499f0" }}>Sense</span> kit, so am I still
            able to use this app?
          </h1>
          <p className="answer">Yes!</p>
          <p>
            The Smell<span style={{ color: "#2499f0" }}>Sense</span> kit is
            built simply for convenience, and the scents supplied are the most
            effective for retraining, according to most research up-to-date.
          </p>
          <p>
            Otherwise, you can make up your own set of scents on which to smell
            train. Be sure to use a set of recognizable smells that remain
            consistently strong over the period of training. Typically, studies
            use a representative substance from each of the 'notes' of smell:
          </p>
          <ul>
            <li>
              Floral - eg.
              <span className="rose">Rose</span>
            </li>
            <li>
              Fruity - eg.
              <span className="lemon">Lemon</span>
            </li>
            <li>
              Spicy - eg.
              <span className="clove">Clove</span>
            </li>
            <li>
              Aromatic - eg.
              <span className="eucalyptus"> Eucalyptus</span>
            </li>
          </ul>
          <p>We wish you all the best with your recovery!</p>
        </div>
      </div>
    </div>
  );
}

export default About;
