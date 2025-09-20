import { useState } from 'react';
import './App.css';

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: '炫酷前端动画',
      content: '学习 CSS 动画、Framer Motion，打造炫酷网页。',
      likes: 0,
      expanded: false,
    },
    {
      id: 2,
      title: '响应式设计实践',
      content: '通过 Grid 和 Flexbox，实现各种屏幕自适应布局。',
      likes: 0,
      expanded: false,
    },
    {
      id: 3,
      title: '互动式博客卡片',
      content: '点击卡片展开详细内容，带动画和点赞功能。',
      likes: 0,
      expanded: false,
    },
  ]);

  const [darkMode, setDarkMode] = useState(false);

  const toggleExpand = (id: number) => {
    setPosts(posts.map(p => p.id === id ? { ...p, expanded: !p.expanded } : p));
  };

  const handleLike = (id: number) => {
    setPosts(posts.map(p => p.id === id ? { ...p, likes: p.likes + 1 } : p));
  };

  return (
    <div className={`app-container ${darkMode ? 'dark' : ''}`}>
      <header>
        <h1>✨ 互动炫酷博客 ✨</h1>
        <button onClick={() => setDarkMode(!darkMode)} className="theme-btn">
          {darkMode ? '日间模式' : '夜间模式'}
        </button>
      </header>
      <div className="posts-container">
        {posts.map(post => (
          <div
            key={post.id}
            className={`post-card ${post.expanded ? 'expanded' : ''}`}
            onClick={() => toggleExpand(post.id)}
          >
            <h2>{post.title}</h2>
            {post.expanded && <p>{post.content}</p>}
            <div className="post-actions">
              <button onClick={(e) => { e.stopPropagation(); handleLike(post.id); }}>
                ❤️ {post.likes}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
