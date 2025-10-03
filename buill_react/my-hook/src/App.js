import {NoCallBack,SearchResults} from './components/UseEffect';
import  ComponentsUseState from './components/UseState'
import {UseRef } from './components/useRef';
import {Back} from './components/UseCallBack';
import { MEMO } from './components/MEMO';
import { HookUesMemo } from './components/UserMemo';
import IndexImperativateHandle from './components/IndexImperativateHandle';

function App() {

  return (
    <div className="App">
      <hr/>
      <h1>Learn  Hook</h1>
      <p><ComponentsUseState/></p>
      <hr/>
      <h1>Learn UseEffect</h1>
      <p>No CallBack trong  UseEffect</p>
      <p><NoCallBack/></p>
      <p>CallBack trong  UseEffect</p>
      <p><SearchResults/></p>
      <p>Use Ref</p>
      <p><UseRef/></p>
      <hr/>
      <h1>Memo</h1>
      <p><MEMO/></p>
      <hr/>
      <h1>USeMemo</h1>
      <p><HookUesMemo/></p>
      <hr/>
      <p><Back/></p>
      <h1>ImperativateHande</h1>
      <p><IndexImperativateHandle/></p>
      
      
    </div>
  );
}

export default App;
