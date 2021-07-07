import React from 'react';
import Clock from './Components/clock'
import ToggleButton from './Components/buttonToggle';
import LoginControl  from './Components/ifClauses';
import SayiListesi from './Components/sayilar.js';
import Divider from './Components/Divider';
import ExampleForm from './Components/Form';
import Calculator from './Components/BoilDetection';
import ProductControllerExample from './Search';
import ComponentTitle from './Components/ComponentTitle';
function App (){
    return(
        <div>
            <ComponentTitle title = "Clock" />
            <Clock/>
            <Divider/>
            <ComponentTitle title = "Button Toggle" />
            <ToggleButton/>
            <Divider/>
            <ComponentTitle title = "Login Control" />
            <LoginControl />
            <Divider/>
            <ComponentTitle title = "Sayı Listesi (Map)" />
            <SayiListesi dizi={[1,2,3,4,5]} />
            <Divider/>
            <ComponentTitle title = "Example Form" />
            <ExampleForm/>
            <Divider/>
            <ComponentTitle title = "Boil Detection" />
            <Calculator/>
            <Divider />
            <ComponentTitle title = "Product List With Filter" />
            <ProductControllerExample />
        </div>
    );
}
export default App;