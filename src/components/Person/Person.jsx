export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  let partnerInfo = '';

  if (isMarried) {
    partnerInfo = `${partnerName} is my ${sex === 'm' ? 'wife' : 'husband'}`;
  } else {
    partnerInfo = 'I am not married';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      <p className="Person__partner">{partnerInfo}</p>
    </section>
  );
};
