import { Button } from 'antd'

function App(): JSX.Element {
  const Send = (): void => window.electron.ipcRenderer.send('ping')
  return (
    <div>
      <h1>Hello World!</h1>
      <Button type="primary" onClick={Send}>
        Send IPC
      </Button>
    </div>
  )
}

export default App
