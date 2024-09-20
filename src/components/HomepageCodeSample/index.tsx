import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import CodeBlock from '@theme/CodeBlock';
type FeatureItem = {
  title: string;
  Img: React.ComponentType<React.ComponentProps<'img'>>;
  description: JSX.Element;
};

export default function HomepageCodeSample(): JSX.Element {
  return (
    <section className={clsx('hero hero--primary')} >
      <div className="container">
        <CodeBlock language="jsx" title='my-project/main.sf'>
          {`var status = 200

tests "Test group" {
    test "Successful test" {
        expect {
            var.status eq 200
            var.status gt 100
        }
    }
    test "This test will fail" {
        expect {
            var.status eq 300
            var.status > 300
        }
    }
  }
      `}
        </CodeBlock>
      </div>
    </section>
  );
}
