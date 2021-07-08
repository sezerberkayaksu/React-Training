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
import MouseWithCat from './Components/MouseWithCat';
import UncontrolledComponenet from './Components/UncontrolledComponent';
import { Example1, Example2,Example3, Example4} from './Components/HookExamples';
import { EntryList } from './Components/AxiosExample';
import ReduxPostList from './Redux';
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
            <Divider />
            <ComponentTitle title = "Mouse With Cat" />
            <MouseWithCat />
            <Divider />
            <ComponentTitle title = "Uncontrolled Component" />
            <UncontrolledComponenet />
            <Divider />
            <ComponentTitle title = "Hook Examples" />
            <Example1 />
            <Example2 />
            <Example3 />
            <Example4 />
            <Divider />
            <ComponentTitle title = "Axio Example" />
            <EntryList />
            <Divider />
            <ComponentTitle title = "Redux Post List" />
            <ReduxPostList />
        </div>
    );
}
export default App;