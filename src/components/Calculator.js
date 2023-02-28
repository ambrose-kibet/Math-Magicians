import { useState } from 'react';
import calculate from '../logic/calculate';
import buttons from '../utils/buttons';
import Button from './Botton';

const Calculator = () => {
  const [calc, setcalc] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const handleClick = (e) => {
    const { name } = e.target.dataset;
    setcalc(calculate(calc, name));
  };
  return (
    <div className="section-container math">
      <h3 className="math-text">Let&#39;s do some math!</h3>
      <section className="calculator ">
        <input
          type="text"
          className="display"
          value={calc.next || calc.total || 0}
        />
        <div className="button-container">
          {buttons.map((button) => (
            <Button
              key={button.id}
              item={button.item}
              id={button.id}
              handleClick={handleClick}
            />
          ))}
        </div>
        <div className="rest-btns">
          <Button item="0" id={21} handleClick={handleClick} />
          <Button item="." id={22} handleClick={handleClick} />
          <Button item="=" id={24} handleClick={handleClick} />
        </div>
      </section>
    </div>
  );
};
export default Calculator;
