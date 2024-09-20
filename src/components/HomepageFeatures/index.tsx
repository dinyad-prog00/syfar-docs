import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Img: React.ComponentType<React.ComponentProps<'img'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Img: ()=> <img src='img/syfar-icon.png' width={150}/>,
    description: (
      <>
        Syfar is designed for simplicity, making it easy to write and manage tests without unnecessary complexity.
      </>
    ),
  },
  {
    title: 'Fast and Efficient',
    Img: ()=> <img src='img/go.png' width={300}/>,
    description: (
      <>
        Built with Go, Syfar delivers lightning-fast performance, allowing you to run complex tests in a fraction of the time.
      </>
    ),
  },
  {
    title: 'Planned for Versatility',
    Img: ()=> <img src='img/many.png' width={250}/>,
    description: (
      <>
        Syfar is evolving to support a wide range of use cases, from file operations to HTTP requests, with upcoming more integrations.
      </>
    ),
  },
];

function Feature({title, Img, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Img className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
