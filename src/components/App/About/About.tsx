import {
  Card,
  CardContent,
  Collapse,
  IconButton,
  IconButtonProps,
  styled,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./About.css";
import { useState } from "react";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function About() {
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});

  const handleExpandClick = (index: number) => {
    expanded[index] = !expanded[index];
    setExpanded({
      ...expanded,
    });
  };

  const cardHeaderContentStyle = {
    display: "flex",
    alignItems: "center",
    height: 40,
    padding: "0px !important",
  };

  return (
    <div className="wrapper">
      <div>
        <h1 className="faq-header">Frequently Asked Questions</h1>
      </div>
      <div className="faq">
        <Card className="faq-card">
          <CardContent sx={cardHeaderContentStyle}>
            <h1 className="faq-question">What is smell training? </h1>
            <ExpandMore
              expand={expanded[0]}
              onClick={() => handleExpandClick(0)}
              aria-expanded={expanded[0]}
              aria-label="Content"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardContent>

          <Collapse in={expanded[0]} timeout="auto" unmountOnExit>
            <CardContent className="faq-answer">
              <p>
                Smell training engages an innate property of the brain known as{" "}
                <b>Neuroplasticity</b>:{" "}
                <i>
                  the ability of the brain to form and reorganize synaptic
                  connections, especially in response to learning or experience
                  or following injury
                </i>{" "}
                -{" "}
                <a
                  href="https://www.lexico.com/definition/neuroplasticity"
                  target="_blank"
                  rel="noreferrer"
                >
                  Lexico Oxford Dictionary
                </a>
                .
              </p>
            </CardContent>
          </Collapse>
        </Card>
        <Card className="faq-card">
          <CardContent sx={cardHeaderContentStyle}>
            <h1 className="faq-question">
              I'm ready to begin my training. What do I do?
            </h1>
            <ExpandMore
              expand={expanded[1] as boolean}
              onClick={() => handleExpandClick(1)}
              aria-expanded={expanded[1] as boolean}
              aria-label="Content"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardContent>
          <Collapse in={expanded[1]} timeout="auto" unmountOnExit>
            <CardContent className="faq-answer">
              <p>
                In a training session, a set of four familiar smells (typically{" "}
                <span className="rose">Rose</span>,{" "}
                <span className="clove">Clove</span>,{" "}
                <span className="lemon">Lemon</span>, and{" "}
                <span className="eucalyptus">Eucalyptus</span>) are smelled, in
                turn, for a period of 20-30 seconds, whilst mindfully
                visualizing and remembering how each substance would have
                smelled prior to the smell loss.
              </p>
              <p>Repeat the training twice daily for better results.</p>
            </CardContent>
          </Collapse>
        </Card>
        <Card className="faq-card">
          <CardContent sx={cardHeaderContentStyle}>
            <h1 className="faq-question">
              Over how long a period do I need to smell train in order to
              recover fully?
            </h1>
            <ExpandMore
              expand={expanded[2] as boolean}
              onClick={() => handleExpandClick(2)}
              aria-expanded={expanded[2] as boolean}
              aria-label="Content"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardContent>
          <Collapse in={expanded[2]} timeout="auto" unmountOnExit>
            <CardContent className="faq-answer">
              <p>
                Recovery periods naturally differ from person to person, but
                research suggests that the average treatment would last for ~3
                months.
              </p>
              <p>
                Much depends on the underlying cause of your loss of smell and
                the severity thereof. Most people will become aware of positive
                changes within 3 months of starting smell training.
                Occasionally, it is possible that you may regain the smell of a
                desired scent, but it does not feel 'correct'.{" "}
                <span style={{ fontWeight: 400 }}>
                  {" "}
                  Do not be concerned - this is a positive sign that recovery is
                  underway, and continuing with the training will accelerate
                  your recovery rate.
                </span>
              </p>
            </CardContent>
          </Collapse>
        </Card>
        <Card className="faq-card">
          <CardContent sx={cardHeaderContentStyle}>
            <h1 className="faq-question">
              I don't have the official Smell
              <span style={{ color: "#2499f0" }}>Sense</span> kit, so am I still
              able to use this app?
            </h1>
            <ExpandMore
              expand={expanded[3] as boolean}
              onClick={() => handleExpandClick(3)}
              aria-expanded={expanded[3] as boolean}
              aria-label="Content"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardContent>
          <Collapse in={expanded[3]} timeout="auto" unmountOnExit>
            <CardContent className="faq-answer">
              <p style={{ fontWeight: 400 }}>Yes!</p>
              <p>
                The Smell<span style={{ color: "#2499f0" }}>Sense</span> kit is
                built simply for convenience, and the scents supplied are the
                most effective for retraining, according to most research
                up-to-date.
              </p>
              <p>
                Otherwise, you can make up your own set of scents on which to
                smell train. Be sure to use a set of recognizable smells that
                remain consistently strong over the period of training.
                Typically, studies use a representative substance from each of
                the 'notes' of smell:
              </p>
              <ul>
                <li>
                  Floral - eg. <span className="rose">Rose</span>
                </li>
                <li>
                  Fruity - eg. <span className="lemon">Lemon</span>
                </li>
                <li>
                  Spicy - eg. <span className="clove">Clove</span>
                </li>
                <li>
                  Aromatic - eg. <span className="eucalyptus"> Eucalyptus</span>
                </li>
              </ul>
              <p>We wish you all the best with your recovery!</p>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    </div>
  );
}
