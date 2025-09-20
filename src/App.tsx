import { useState } from 'react'
import './App.css'

function App() {
  const [posts] = useState([
    {
      id: 1,
      title: '我的第一篇文章',
      subtitle: '博客的起点',
      content: `欢迎来到我的博客！这是第一篇文章。
      
      在这里我会分享我的学习笔记、技术心得和生活趣事。
      今天，我想介绍一下 Vite + React 的搭建过程，让你快速启动一个现代化前端项目。
      
      这篇文章会带你一步步了解从初始化项目到编写第一个组件的全过程，让新手也能轻松上手。`,
      tags: ['React', 'Vite', '入门教程']
    },
    {
      id: 2,
      title: 'Vite + React 博客搭建',
      subtitle: '快速搭建个人博客',
      content: `今天我用 Vite + React 搭建了一个个人博客。
      
      主要步骤如下：
      1. 使用 Vite 创建 React 项目
      2. 配置 TypeScript 和 ESLint
      3. 创建基本页面和文章组件
      4. 添加炫酷样式和动画效果
      
      通过这个过程，你可以快速建立自己的博客框架，并且方便日后拓展功能。`,
      tags: ['React', 'Vite', '博客搭建']
    },
    {
      id: 3,
      title: '前端动画效果实践',
      subtitle: '让网页动起来',
      content: `在前端开发中，动画效果可以大大提升用户体验。
      
      常见动画方式包括：
      - CSS 动画和过渡
      - React Transition Group
      - Framer Motion
      
      本文演示了如何给博客文章卡片添加悬停动画和渐入效果，让内容看起来更加生动有趣。`,
      tags: ['CSS', '动画', '用户体验']
    },
    {
      id: 4,
      title: '响应式布局技巧',
      subtitle: '适配各种设备',
      content: `响应式设计让网站在手机、平板和 PC 上都能完美显示。
      
      核心方法：
      - 使用 Flex 和 Grid 布局
      - 媒体查询调整样式
      - 动态字体和图片适配
      
      通过这些技巧，你的博客可以在不同设备上都保持美观与可读性。`,
      tags: ['前端', '响应式', '布局']
    }
  ])

  return (
    <div className="app-container">
      <h1 className="blog-title">🌟 我的炫酷博客 🌟</h1>
      <div className="posts-container">
        {posts.map(post => (
          <div key={post.id} className="post-card">
            <h2 className="post-title">{post.title}</h2>
            <h3 className="post-subtitle">{post.subtitle}</h3>
            <p className="post-content">{post.content}</p>
            <div className="post-tags">
              {post.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
