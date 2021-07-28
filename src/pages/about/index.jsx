import Head from 'next/head';
import { Footer } from 'src/components/Footer';
import { Header } from 'src/components/Header';
import { Main } from 'src/components/Main';
import styles from 'src/styles/Home.module.css';

const About = (props) => {
  const {
    doubleCount,
    isShow,
    handleClick,
    handleDisplay,
    text,
    array,
    handleChenge,
    handleAdd,
  } = props;

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header />
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>{isShow ? '非表示' : '表示'}</button>
      {isShow ? <h2>{doubleCount}</h2> : null}
      <input type='text' value={text} onChange={handleChenge} />
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <Main page='about' />
      <Footer />
    </div>
  );
};

export default About;