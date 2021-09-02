import {CoffeeContext, useCoffeeContext} from '../context/CoffeeContext'
import {useContext} from 'react';


const SelectedCoffeeBean = () => {

  let {coffeeBean} = useCoffeeContext();
  // console.log(coffeeBean);
  return (
    <div className='selected-coffee'>
      <h2>
        {coffeeBean.name}
      </h2>
    </div>
  );
}

export default SelectedCoffeeBean;
