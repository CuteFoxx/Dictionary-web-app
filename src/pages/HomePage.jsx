import "./HomePage.css";

const HomePage = ({ data }) => {
  data = data[0];
  const meanings = data?.meanings;
  const audio = data?.phonetics.find(
    (e) => e.audio.length !== 0 && e?.audio
  )?.audio;

  const playAudio = (e) => {
    const wordAudio = new Audio();
    wordAudio.src = audio;
    wordAudio.play();
  };

  console.log(data);

  return (
    <main className="main__container">
      <div className="word__heading">
        <h1 className="word">{data.word}</h1>
        {audio ? (
          <button className="word-audio" onClick={playAudio}></button>
        ) : (
          ""
        )}
      </div>
      <p className="word__phonetic">{data?.phonetic}</p>
      {meanings.map((item) => {
        return (
          <section className="word__meaning-section" key={item.partOfSpeech}>
            <p className="word__part-of-speech">{item.partOfSpeech}</p>

            <h2 className="word__sub-title sub-title">Meaning</h2>
            <ul className="word__meanings">
              {item?.definitions.map((el) => (
                <li className="word__meaning" key={el.definition}>
                  {el.definition}
                </li>
              ))}
            </ul>
            {item.synonyms.length !== 0 ? (
              <>
                <h2 className="sub-title word__synonym-sub-title">Synonyms</h2>
                <p className="word__synonym">{item.synonyms[0]}</p>
              </>
            ) : (
              ""
            )}
          </section>
        );
      })}

      {console.log(data?.sourceUrls)}

      {data?.sourceUrls.map((item) => {
        return (
          <section key={item} className="word__source-section">
            <a href={item} className="word__source sub-title">
              Source
            </a>
            <a href={item} className="word__source-link">
              {item}
            </a>
          </section>
        );
      })}
    </main>
  );
};

export default HomePage;
