import { useState } from 'react'

function App() {
  const [posts] = useState([
    { id: 1, title: '我的第一篇文章', content: '欢迎来到我的博客！这是第一篇文章。' },
    { id: 2, title: 'Vite + React 博客搭建', content: '今天我用 Vite + React 搭建了一个个人博客。' },
  ])

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: 'auto', padding: '20px' }}>
      <h1>我的博客</h1>
      {posts.map(post => (
        <div key={post.id} style={{ marginBottom: '20px' }}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  )
}

export default App
