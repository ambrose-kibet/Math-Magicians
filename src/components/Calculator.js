/* eslint-disable react/jsx-props-no-spreading */
import buttons from '../utils/buttons';
import Button from './Botton';

const Calculator = () => (
  <section className="calculator">
    <input type="text" className="display" />
    <div className="button-container">
      {buttons.map((button) => (
        <Button key={button.id} item={button.item} id={button.id} />
      ))}
    </div>
    <div className="rest-btns">
      <Button item="0" id={21} />
      <Button item="." id={22} />
      <Button item="=" id={24} />
    </div>
  </section>
);
export default Calculator;
