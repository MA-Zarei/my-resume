import { useParams } from 'react-router-dom'

const DynamicPage = () => {
  const { slug } = useParams()
  
  // You can have a mapping of slugs to content
  const pageContent: Record<string, { title: string, content: string }> = {
    about: {
      title: 'About Me',
      content: 'Your about content here'
    },
    skills: {
      title: 'My Skills',
      content: 'Your skills content here'
    },
    experience: {
      title: 'Work Experience',
      content: 'Your experience content here'
    }
  }

  const page = pageContent[slug as string]

  if (!page) {
    return <div>Page not found</div>
  }

  return (
    <div className="dynamic-page">
      <h1>{page.title}</h1>
      <div>{page.content}</div>
    </div>
  )
}

export default DynamicPage