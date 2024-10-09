import { useRef } from "react";
import { MessageProvider, MessageRef } from "./Message";
import { useMessage } from "./Message/useMessage";
import { ConfigProvider } from "./Message/ConfigProvider";

function Test() {
  const message = useMessage();

  return (
    <div>
      <button onClick={() => {
        message.add({
          content: '请求成功'
        })
      }}>click</button>
    </div>
  );
}

function App() {

  return (
    <ConfigProvider>
      <div>
        <Test></Test>
      </div>
    </ConfigProvider>  
  );
}

export default App;
